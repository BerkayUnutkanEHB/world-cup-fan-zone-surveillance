const Detection = require("../models/detection");

const createDetection = async (detectionData) => {
	return Detection.create(detectionData);
};

const getAllDetections = async () => {
	return Detection.find()
		.populate("supporter")
		.populate("zone")
		.sort({ tijdstip: -1 });
};

const getDetectionsBySupporter = async (supporterId) => {
	return Detection.find({ supporter: supporterId })
		.populate("supporter")
		.populate("zone")
		.sort({ tijdstip: -1 });
};

const getDetectionsByZone = async (zoneId) => {
	return Detection.find({ zone: zoneId })
		.populate("supporter")
		.populate("zone")
		.sort({ tijdstip: -1 });
};

module.exports = {
	createDetection,
	getAllDetections,
	getDetectionsBySupporter,
	getDetectionsByZone,
};
