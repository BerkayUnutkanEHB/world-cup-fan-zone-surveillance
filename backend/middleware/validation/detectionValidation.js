const { body, validationResult } = require("express-validator");

const validateDetection = [
	body("supporter").notEmpty().withMessage("Supporter is verplicht."),

	body("zone").notEmpty().withMessage("Zone is verplicht."),

	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
			});
		}

		next();
	},
];

module.exports = validateDetection;
