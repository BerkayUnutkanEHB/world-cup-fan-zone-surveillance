const dashboardRepository = require("../repositories/dashboardRepository");

const getDashboardStatistics = async () => {
	const totaalSupporters = await dashboardRepository.getTotalSupporters();

	const totaalDetecties = await dashboardRepository.getTotalDetections();

	return {
		totaalSupporters,
		totaalDetecties,
	};
};

module.exports = {
	getDashboardStatistics,
};
