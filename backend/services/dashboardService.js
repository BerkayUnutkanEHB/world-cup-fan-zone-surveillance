const dashboardRepository = require("../repositories/dashboardRepository");

const getDashboardStatistics = async () => {
	const totaalSupporters = await dashboardRepository.getTotalSupporters();

	const totaalDetecties = await dashboardRepository.getTotalDetections();

	const hoogRisicoSupporters =
		await dashboardRepository.getHighRiskSupportersCount();

	const druksteZone = await dashboardRepository.getDruksteZone();

	return {
		totaalSupporters,
		totaalDetecties,
		hoogRisicoSupporters,
		druksteZone,
	};
};

module.exports = {
	getDashboardStatistics,
};
