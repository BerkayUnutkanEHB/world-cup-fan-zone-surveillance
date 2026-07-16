const Zone = require("../models/zone");

const getAllZones = async () => {
	return Zone.find().sort({ naam: 1 });
};

module.exports = {
	getAllZones,
};
