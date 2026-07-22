const detectionService = require("../services/detectionService");

const createDetection = async (req, res) => {
	try {
		const detection = await detectionService.createDetection(req.body);

		return res.status(201).json(detection);
	} catch (error) {
		return res.status(400).json({
			message: error.message,
		});
	}
};

module.exports = {
	createDetection,
};
