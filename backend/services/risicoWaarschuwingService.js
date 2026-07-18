const risicoWaarschuwingRepository = require("../repositories/risicoWaarschuwingRepository");
const BEZETTINGSGRAAD_DREMPEL = 5;
const maakRisicoWaarschuwingen = async () => {
	const zones = await risicoWaarschuwingRepository.getZonesMetDetecties();

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

	return waarschuwingen;
};

module.exports = {
	maakRisicoWaarschuwingen,
};
