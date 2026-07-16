const mongoose = require("mongoose");

const supporterSchema = new mongoose.Schema(
	{
		uid: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		naam: {
			type: String,
			required: true,
			trim: true,
		},
		nationaliteit: {
			type: String,
			required: true,
			trim: true,
		},
		team: {
			type: String,
			required: true,
			trim: true,
		},
		basisrisico: {
			type: Number,
			required: true,
			min: 0,
			max: 100,
		},
		risicoscore: {
			type: Number,
			required: true,
			min: 0,
			max: 100,
		},
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Supporter", supporterSchema);
