const supporterRepository = require("../repositories/supporterRepository");

const getAllSupporters = async () => {
	return supporterRepository.getAllSupporters();
};

module.exports = {
	getAllSupporters,
};
