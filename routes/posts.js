const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../model/User");

// @ api/posts
router.get("/", verify, (req, res) => {
	res.json({
		posts: {
			title: "first post",
			description: "This could be an article about skiing at Copper Mountain."
		}
	});
	// res.send(req.user);
});

module.exports = router;
