const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const User = require("../model/User");
const { registrationValidation, loginValidation } = require("../validation");
const { loginUser } = require("../services/authenticationService");

// route: /api/user/register
router.post("/register", async (req, res) => {
	// Validate data before creating user
	const { error } = registrationValidation(req.body);
	if (error)
		return res.status(400).send({
			error: `Error Details: ${error.details[0].message}`
		});

	// Check if user is already in DB
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists)
		return res.status(400).send({
			error: "User (email) already exists..."
		});

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
		await loginUser(
			{
				email: user.email,
				password: req.body.password
			},
			res
		);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

// route: /api/user/login
router.post("/login", (req, res) => {
	loginUser(req.body, res);
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
