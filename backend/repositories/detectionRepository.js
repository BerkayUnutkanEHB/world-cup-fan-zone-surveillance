const Detection = require("../models/detection");

const createDetection = async (detectionData) => {
	return Detection.create(detectionData);
};

module.exports = {
	createDetection,
};
