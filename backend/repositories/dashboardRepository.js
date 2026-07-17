const Supporter = require("../models/supporter");
const Detection = require("../models/detection");

const getTotalSupporters = async () => {
	return Supporter.countDocuments();
};

const getTotalDetections = async () => {
	return Detection.countDocuments();
};

module.exports = {
	getTotalSupporters,
	getTotalDetections,
};
