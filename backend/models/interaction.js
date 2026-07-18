const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema(
	{
		uid: {
			type: String,
			required: true,
		},
		action: {
			type: String,
			required: true,
			enum: ["click", "hover", "navigation"],
		},
		page: {
			type: String,
			required: true,
		},
		element: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			default: null,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Interaction", interactionSchema);
