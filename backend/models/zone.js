const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema(
	{
		naam: {
			type: String,
			required: true,
			trim: true,
		},
		type: {
			type: String,
			required: true,
			enum: ["fan-zone", "entrance", "metro", "foodstand", "street"],
		},
		capaciteit: {
			type: Number,
			required: true,
			min: 1,
		},
		eerdereRiots: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Zone", zoneSchema);
