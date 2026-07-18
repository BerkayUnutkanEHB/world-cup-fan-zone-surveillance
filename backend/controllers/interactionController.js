const interactionService = require("../services/interactionService");

const createInteraction = async (req, res) => {
	try {
		const interaction = await interactionService.createInteraction(req.body);

		res.status(201).json(interaction);
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
};

const getAllInteractions = async (req, res) => {
	try {
		const interactions = await interactionService.getAllInteractions();

		res.status(200).json(interactions);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	createInteraction,
	getAllInteractions,
};
