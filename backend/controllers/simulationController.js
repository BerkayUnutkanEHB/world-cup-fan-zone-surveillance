const simulationService = require("../services/simulationService");

const runSimulation = async (req, res) => {
	try {
		const detection = await simulationService.runSimulation();

		res.status(201).json({
			message: "Simulatie succesvol uitgevoerd.",
			detection,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	runSimulation,
};
