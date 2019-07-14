const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// allows use of .env variables for security and not uploading passwords onto github
dotenv.config();

// Connect to mongoDB cloud Atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () => {
	console.log("Connected to MongoDB Clout Atlas");
});

// Middlware
app.use(express.json());

// import routes
const authRoute = require("./routes/auth");

// Route middlware
// everything in the 'authRoute' will have the prefix of '/api/user'
app.use("/api/user", authRoute);

const port = 5000;
app.listen(port, () => {
	console.log(`Server running on ${port}!`);
});
