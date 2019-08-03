const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../model/User");
const { registrationValidation, loginValidation } = require("../validation");

// route: /api/user/register
router.post("/register", async (req, res) => {
	// Validate data before creating user
	const { error } = registrationValidation(req.body);
	if (error) return res.status(400).send(`Error Details: ${error.details[0].message}`);

	// Check if user is already in DB
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("User (email) already exists...");

	// Hash the password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// Create new user if route info validated
	const user = new User({
		name: req.body.name,
		skill: req.body.skill,
		email: req.body.email,
		password: hashedPassword
	});
	try {
		const savedUser = await user.save();
		// const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
		// res.header("auth-token", token).send({ token, user });
		res.send(savedUser);
	} catch (error) {
		res.status(400).send(err);
	}
});

// route: /api/user/login
router.post("/login", async (req, res) => {
	// Validate data before creating user
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send({ error: `${error.details[0].message}` });

	// Check if user is already in DB
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send({ error: "User not found...email or password may be wrong." });

	// Check for correct PASSWORD
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send({ error: "Password is invalid..." });

	// Create and assign JSON Web Token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.header("auth-token", token).send({
		token,
		"access-control-expose-headers": "Authorization",
		user: {
			name: user.name,
			email: user.email,
			date: user.date,
			skill: user.skill
		}
	});
});

/// route: /api/user/update
router.post("/update", async (req, res) => {
	const token = req.body.token;
	if (!token) return res.status(401).send({ error: "Access Denied..." });

	// Check if user is already in DB
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send({ error: "User not found...email or password may be wrong." });

	try {
		const verified = jwt.verify(token, process.env.TOKEN_SECRET);
		req.user = verified;
	} catch (error) {
		return res.status(400).send({ error: "Invalid authorization token..." });
	}
	if (req.user) {
		const updatedUser = await User.findOneAndUpdate(
			{ email: req.body.email },
			{ skill: req.body.skill },
			{
				new: true, // returns the updated result (mongoDB command is 'returnNewDocument')
				useFindAndModify: false // allows use of newer mongoDB func instead of mongoose's older one that itself used useFindAndModify
			}
		);
		res.send(updatedUser);
	} else {
		res.send({ error: "Authentication error, update denied." });
	}
});

module.exports = router;
