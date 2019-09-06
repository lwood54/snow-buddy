// VALIDATION
const Joi = require("@hapi/joi");

// User Registration Validation
const registrationValidation = data => {
	const validationSchema = {
		name: Joi.string()
			.min(3)
			.required(),
		skill: Joi.string().required(),
		email: Joi.string()
			.min(6)
			.required()
			.email(),
		password: Joi.string()
			.min(6)
			.required()
	};
	return Joi.validate(data, validationSchema);
};

const loginValidation = data => {
	const validationSchema = {
		email: Joi.string()
			.min(6)
			.required()
			.email(),
		password: Joi.string()
			.min(6)
			.required()
	};
	return Joi.validate(data, validationSchema);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;
