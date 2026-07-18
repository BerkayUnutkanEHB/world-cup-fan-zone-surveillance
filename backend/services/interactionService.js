const interactionRepository = require("../repositories/interactionRepository");

const createInteraction = async (interactionData) => {
	return interactionRepository.createInteraction(interactionData);
};

const getAllInteractions = async () => {
	return interactionRepository.getAllInteractions();
};

module.exports = {
	createInteraction,
	getAllInteractions,
};
