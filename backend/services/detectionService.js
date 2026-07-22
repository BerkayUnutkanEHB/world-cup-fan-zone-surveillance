const detectionRepository = require("../repositories/detectionRepository");
const Supporter = require("../models/supporter");
const Zone = require("../models/zone");

// Registreert een detectie en verhoogt de risicoscore bij een risicovolle zone.
const createDetection = async (detectionData) => {
	const supporter = await Supporter.findById(detectionData.supporter);

	if (!supporter) {
		throw new Error("Supporter niet gevonden.");
	}

	const zone = await Zone.findById(detectionData.zone);

	if (!zone) {
		throw new Error("Zone niet gevonden.");
	}

	const detection = await detectionRepository.createDetection(detectionData);
	// Supporters die een zone met eerdere incidenten bezoeken,
	// krijgen een hogere risicoscore.
	if (zone.eerdereRiots === true) {
		supporter.risicoscore = Math.min(supporter.risicoscore + 10, 100);
		await supporter.save();
	}

	return detection;
};

module.exports = {
	createDetection,
};
