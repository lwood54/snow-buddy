const router = require("express").Router();
const User = require("../model/User");

// route: /api/user/register
router.post("/register", async (req, res) => {
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
