const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");

async function loginUser(credentials, response) {
  const { email, password } = credentials;
  // Validate data before creating user
  const { error } = loginValidation(credentials);
  if (error) return response.status(400).send({ error: `${error.details[0].message}`});

  // Check if user is already in DB
  const user = await User.findOne({ email });
  if (!user) return response.status(400).send({
    error: "User not found...email or password may be wrong."
  });

  // Check for correct PASSWORD
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return response.status(400).send({
    error: "Password is invalid..."
  });

  // Create and assign JSON Web Token
  const token = jwt.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET);
  response.header("auth-token", token).send({
    token,
    "access-control-expose-headers": "Authorization",
    user: {
      name: user.name,
      email: user.email,
      date: user.date,
      skill: user.skill
    }
  });
}

module.exports = {
  loginUser,
}