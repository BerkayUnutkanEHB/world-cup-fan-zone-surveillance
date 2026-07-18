const Interaction = require("../models/interaction");

const createInteraction = async (interactionData) => {
	return Interaction.create(interactionData);
};

const getAllInteractions = async () => {
	return Interaction.find().sort({ createdAt: -1 });
};

module.exports = {
	createInteraction,
	getAllInteractions,
};
