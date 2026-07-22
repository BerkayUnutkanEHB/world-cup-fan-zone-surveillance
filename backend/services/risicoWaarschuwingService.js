const risicoWaarschuwingRepository = require("../repositories/risicoWaarschuwingRepository");

// Vanaf welke bezettingsgraad (%) een zone als "druk" wordt gemarkeerd.
const BEZETTINGSGRAAD_DREMPEL = 60;

// Vanaf welke bezettingsgraad (%) het risiconiveau "Hoog" is i.p.v. "Gemiddeld".
const HOOG_RISICO_DREMPEL = 80;

// Leidt het risiconiveau af uit de bezettingsgraad, consistent met de
// kleurdrempels in de FanZoneMap (60% = medium, 80% = high).
const bepaalNiveau = (bezettingsgraad) => {
	return bezettingsgraad >= HOOG_RISICO_DREMPEL ? "Hoog" : "Gemiddeld";
};

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
				niveau: bepaalNiveau(bezettingsgraad),
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
