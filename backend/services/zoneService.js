const zoneRepository = require("../repositories/zoneRepository");

const getAllZones = async () => {
	return zoneRepository.getAllZones();
};

module.exports = {
	getAllZones,
};
