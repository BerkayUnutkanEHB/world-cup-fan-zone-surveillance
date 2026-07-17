const Detection = require("../models/detection");
const Zone = require("../models/zone");

const getZonesMetDetecties = async () => {
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

module.exports = {
	getZonesMetDetecties,
};
