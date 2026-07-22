const Detection = require("../models/detection");
const Zone = require("../models/zone");

const getZonesMetDetecties = async () => {
	// Geeft per zone het aantal detecties terug.

	const zones = await Zone.find();

	const resultaat = await Promise.all(
		zones.map(async (zone) => {
			const aantalDetecties = await Detection.countDocuments({
				zone: zone._id,
			});

			return {
				zone,
				aantalDetecties,
			};
		}),
	);

	return resultaat;
};
// Detecteert verdachte supporters op basis van zonebezoeken en risicoscore.
const getVerdachteSupporters = async () => {
	const detecties = await Detection.find()
		.populate("supporter", "uid naam risicoscore")
		.populate("zone", "_id naam")
		.sort({ tijdstip: 1 });

	const detectiesPerSupporter = new Map();
	// Verdacht gedrag:
	// - minstens 4 verschillende zones
	// - binnen 5 minuten
	// - risicoscore van minstens 60
	const tijdsvensterInMilliseconden = 5 * 60 * 1000;
	const minimumAantalZones = 4;
	const minimumRisicoscore = 60;

	detecties.forEach((detectie) => {
		if (!detectie.supporter || !detectie.zone) {
			return;
		}

		const supporterId = detectie.supporter._id.toString();

		if (!detectiesPerSupporter.has(supporterId)) {
			detectiesPerSupporter.set(supporterId, []);
		}

		detectiesPerSupporter.get(supporterId).push(detectie);
	});

	const verdachteIds = new Set();
	const verdachteSupporters = [];

	detectiesPerSupporter.forEach((supporterDetecties) => {
		for (
			let startIndex = 0;
			startIndex < supporterDetecties.length;
			startIndex++
		) {
			const startTijd = new Date(
				supporterDetecties[startIndex].tijdstip,
			).getTime();

			const bezochteZones = new Set();

			for (
				let huidigeIndex = startIndex;
				huidigeIndex < supporterDetecties.length;
				huidigeIndex++
			) {
				const huidigeDetectie = supporterDetecties[huidigeIndex];

				const huidigeTijd = new Date(huidigeDetectie.tijdstip).getTime();

				if (huidigeTijd - startTijd > tijdsvensterInMilliseconden) {
					break;
				}

				bezochteZones.add(huidigeDetectie.zone._id.toString());

				if (
					bezochteZones.size >= minimumAantalZones &&
					huidigeDetectie.supporter.risicoscore >= minimumRisicoscore
				) {
					if (!verdachteIds.has(huidigeDetectie.supporter.uid)) {
						verdachteIds.add(huidigeDetectie.supporter.uid);

						verdachteSupporters.push({
							uid: huidigeDetectie.supporter.uid,
							naam: huidigeDetectie.supporter.naam,
							risicoscore: huidigeDetectie.supporter.risicoscore,
							aantalZones: bezochteZones.size,
							startTijd: supporterDetecties[startIndex].tijdstip,
							eindTijd: huidigeDetectie.tijdstip,
						});
					}

					break;
				}
			}
		}
	});

	return verdachteSupporters;
};

module.exports = {
	getZonesMetDetecties,
	getVerdachteSupporters,
};
