const router = require("express").Router();
const User = require("../model/User");
const { registrationValidation } = require("../validation");

// route: /api/user/register
router.post("/register", async (req, res) => {
	// Validate data before creating user
	const { error } = registrationValidation(req.body);
	if (error) return res.status(400).send(`Error Details: ${error.details[0].message}`);

	// Check if user is already in DB
	const emailExists = await User.findOne({ email: req.body.email });
	if (emailExists) return res.status(400).send("User (email) already exists...");

	// Create new user if route info validated
	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (error) {
		res.status(400).send(err);
	}
});

// route: /api/user/login
router.post("/login");

module.exports = router;
