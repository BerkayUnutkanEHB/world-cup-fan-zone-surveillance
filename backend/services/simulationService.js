const Supporter = require("../models/supporter");
const Zone = require("../models/zone");
const detectionService = require("./detectionService");

const runSimulation = async () => {
	const supporters = await Supporter.find();
	const zones = await Zone.find();

	if (supporters.length === 0) {
		throw new Error("Geen supporters gevonden");
	}

	if (zones.length === 0) {
		throw new Error("Geen zones gevonden");
	}

	const randomSupporter =
		supporters[Math.floor(Math.random() * supporters.length)];

	const randomZone = zones[Math.floor(Math.random() * zones.length)];

	return detectionService.createDetection({
		supporter: randomSupporter._id,
		zone: randomZone._id,
		tijdstip: new Date(),
	});
};

module.exports = {
	runSimulation,
};
