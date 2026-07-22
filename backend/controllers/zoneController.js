const zoneService = require("../services/zoneService");

const getAllZones = async (req, res) => {
	try {
		const zones = await zoneService.getAllZones();

		return res.status(200).json(zones);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	getAllZones,
};
