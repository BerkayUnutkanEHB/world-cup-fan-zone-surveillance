const Supporter = require("../models/supporter");
const Detection = require("../models/detection");
const Zone = require("../models/zone");

const getTotalSupporters = async () => {
	return Supporter.countDocuments();
};

const getTotalDetections = async () => {
	return Detection.countDocuments();
};

const getHighRiskSupportersCount = async () => {
	return Supporter.countDocuments({
		risicoscore: { $gte: 50 },
	});
};
const getDruksteZone = async () => {
	// Zoek de zone met het hoogste aantal detecties.
	const resultaat = await Detection.aggregate([
		{
			$group: {
				_id: "$zone",
				aantalDetecties: { $sum: 1 },
			},
		},
		{
			$sort: {
				aantalDetecties: -1,
			},
		},
		{
			$limit: 1,
		},
	]);

	if (resultaat.length === 0) {
		return null;
	}

	const zone = await Zone.findById(resultaat[0]._id);

	return {
		naam: zone.naam,
		aantalDetecties: resultaat[0].aantalDetecties,
	};
};

const getGemiddeldeRisicoscore = async () => {
	const resultaat = await Supporter.aggregate([
		{
			$group: {
				_id: null,
				gemiddeldeRisicoscore: { $avg: "$risicoscore" },
			},
		},
	]);

	if (resultaat.length === 0) {
		return 0;
	}

	return resultaat[0].gemiddeldeRisicoscore;
};
const getTopRiskSupporters = async () => {
	return await Supporter.find()
		.sort({ risicoscore: -1 })
		.limit(5)
		.select("-_id naam team risicoscore");
};
const getZoneDensity = async () => {
	const zones = await Zone.find();

	const zoneDensity = await Promise.all(
		zones.map(async (zone) => {
			const aantalDetecties = await Detection.countDocuments({
				zone: zone._id,
			});
			// Bereken de bezettingsgraad van de zone in procent.
			const bezettingsgraad = (aantalDetecties / zone.capaciteit) * 100;

			return {
				naam: zone.naam,
				capaciteit: zone.capaciteit,
				aantalDetecties,
				bezettingsgraad: Math.round(bezettingsgraad * 100) / 100,
			};
		}),
	);

	return zoneDensity;
};
const getRecenteDetecties = async () => {
	// Haal de 10 meest recente detecties op.
	return Detection.find()
		.sort({ tijdstip: -1 })
		.limit(10)
		.select("-_id -__v -createdAt -updatedAt")
		.populate("supporter", "naam team")
		.populate("zone", "naam");
};
module.exports = {
	getTotalSupporters,
	getTotalDetections,
	getHighRiskSupportersCount,
	getDruksteZone,
	getGemiddeldeRisicoscore,
	getTopRiskSupporters,
	getZoneDensity,
	getRecenteDetecties,
};
