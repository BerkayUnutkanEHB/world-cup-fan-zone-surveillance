const dashboardService = require("../services/dashboardService");

const getDashboardStatistics = async (req, res) => {
	try {
		const statistics = await dashboardService.getDashboardStatistics();

		res.status(200).json(statistics);
	} catch (error) {
		res.status(500).json({
			message: "Dashboard statistieken konden niet opgehaald worden.",
			error: error.message,
		});
	}
};

module.exports = {
	getDashboardStatistics,
};
