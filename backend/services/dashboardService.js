const dashboardRepository = require("../repositories/dashboardRepository");

const getDashboardStatistics = async () => {
	const totaalSupporters = await dashboardRepository.getTotalSupporters();

	const totaalDetecties = await dashboardRepository.getTotalDetections();

	const hoogRisicoSupporters =
		await dashboardRepository.getHighRiskSupportersCount();

	const druksteZone = await dashboardRepository.getDruksteZone();

	const gemiddeldeRisicoscore =
		await dashboardRepository.getGemiddeldeRisicoscore();

	let algemeenRisiconiveau;

	if (gemiddeldeRisicoscore < 30) {
		algemeenRisiconiveau = "Laag";
	} else if (gemiddeldeRisicoscore < 60) {
		algemeenRisiconiveau = "Gemiddeld";
	} else {
		algemeenRisiconiveau = "Hoog";
	}

	return {
		totaalSupporters,
		totaalDetecties,
		hoogRisicoSupporters,
		druksteZone,
		gemiddeldeRisicoscore,
		algemeenRisiconiveau,
	};
};

module.exports = {
	getDashboardStatistics,
};
