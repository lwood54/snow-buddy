const router = require("express").Router();
const User = require("../model/User");

// VALIDATION
const Joi = require("@hapi/joi");

const validationSchema = {
	name: Joi.string()
		.min(3)
		.required(),
	email: Joi.string()
		.min(6)
		.required()
		.email(),
	password: Joi.string()
		.min(6)
		.required()
};

// route: /api/user/register
router.post("/register", async (req, res) => {
	// Validate data before creating user
	const { error } = Joi.validate(req.body, validationSchema);
	if (error) return res.status(400).send(`Error Details: ${error.details[0].message}`);
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
