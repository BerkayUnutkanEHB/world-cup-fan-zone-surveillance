const Supporter = require("../models/supporter");

const getAllSupporters = async () => {
	return Supporter.find().sort({ naam: 1 });
};

module.exports = {
	getAllSupporters,
};
