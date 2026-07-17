const risicoWaarschuwingService = require("../services/risicoWaarschuwingService");

const getRisicoWaarschuwingen = async (req, res) => {
	try {
		const waarschuwingen =
			await risicoWaarschuwingService.maakRisicoWaarschuwingen();

		res.status(200).json(waarschuwingen);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	getRisicoWaarschuwingen,
};
