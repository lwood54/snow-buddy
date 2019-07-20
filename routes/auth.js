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
		// console.log("savedUser: ", savedUser);
		// const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
		// console.log("token: ", token);
		// res.header("auth-token", token).send({ token, user });
		res.send(user);
		// res.send({
		// 	user: savedUser._id
		// });
	} catch (error) {
		res.status(400).send(err);
	}
});

// route: /api/user/login
router.post("/login", async (req, res) => {
	// Validate data before creating user
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(`Error Details: ${error.details[0].message}`);

	// Check if user is already in DB
	const user = await User.findOne({ email: req.body.email });
	console.log("req.body.email: ", req.body.email);
	console.log("req.body.password: ", req.body.password);
	console.log("user: ", user);
	if (!user) return res.status(400).send("User not found...email or password may be wrong.");

	// Check for correct PASSWORD
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send("Password is invalid...");

	// Create and assign JSON Web Token
	const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	console.log("token: ", token);
	res.header("auth-token", token).send(token);
});

module.exports = router;
