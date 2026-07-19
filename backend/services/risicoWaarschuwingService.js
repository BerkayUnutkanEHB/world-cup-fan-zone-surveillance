const risicoWaarschuwingRepository = require("../repositories/risicoWaarschuwingRepository");
const BEZETTINGSGRAAD_DREMPEL = 5;
const maakRisicoWaarschuwingen = async () => {
	const zones = await risicoWaarschuwingRepository.getZonesMetDetecties();
	const verdachteSupporters =
		await risicoWaarschuwingRepository.getVerdachteSupporters();
	const waarschuwingen = zones
		.map(({ zone, aantalDetecties }) => {
			const bezettingsgraad = (aantalDetecties / zone.capaciteit) * 100;

			if (bezettingsgraad < BEZETTINGSGRAAD_DREMPEL) {
				return null;
			}

			return {
				type: "DRUKKE_ZONE",
				niveau: "Hoog",
				zone: zone.naam,
				bericht: `${zone.naam} heeft een bezettingsgraad van ${Math.round(bezettingsgraad)}%.`,
			};
		})
		.filter(Boolean);
	verdachteSupporters.forEach((supporter) => {
		waarschuwingen.push({
			type: "VERDACHTE_SUPPORTER",
			niveau: "Hoog",
			supporter: supporter.naam,
			bericht: `${supporter.naam} bezocht ${supporter.aantalZones} verschillende zones binnen 5 minuten.`,
		});
	});
	return waarschuwingen;
};

module.exports = {
	maakRisicoWaarschuwingen,
};
