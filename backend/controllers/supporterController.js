const supporterService = require("../services/supporterService");

const getAllSupporters = async (req, res) => {
	try {
		const supporters = await supporterService.getAllSupporters();

		return res.status(200).json(supporters);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		});
	}
};

module.exports = {
	getAllSupporters,
};
