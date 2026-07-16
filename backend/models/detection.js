const mongoose = require("mongoose");

const detectionSchema = new mongoose.Schema(
	{
		supporter: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Supporter",
			required: true,
		},
		zone: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Zone",
			required: true,
		},
		tijdstip: {
			type: Date,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Detection", detectionSchema);
