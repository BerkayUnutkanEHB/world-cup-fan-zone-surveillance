import { useEffect, useState } from "react";
import StatCard from "../components/dashboard/StatCard";
import { getDashboardData } from "../services/dashboardService";

const Dashboard = () => {
	const [dashboardData, setDashboardData] = useState(null);
	const [foutmelding, setFoutmelding] = useState("");

	useEffect(() => {
		const loadDashboard = async () => {
			try {
				const data = await getDashboardData();
				setDashboardData(data);
			} catch (error) {
				setFoutmelding(error.message);
			}
		};

		loadDashboard();
	}, []);
	if (foutmelding) {
		return <p>{foutmelding}</p>;
	}
	if (!dashboardData) {
		return <p>Dashboard laden...</p>;
	}

	return (
		<div>
			<h1>Dashboard</h1>

			<StatCard
				titel="Totaal supporters"
				waarde={dashboardData.totaalSupporters}
			/>

			<StatCard
				titel="Totaal detecties"
				waarde={dashboardData.totaalDetecties}
			/>

			<StatCard
				titel="Hoog risico supporters"
				waarde={dashboardData.hoogRisicoSupporters}
			/>

			<StatCard
				titel="Algemeen risico"
				waarde={dashboardData.algemeenRisiconiveau}
			/>
		</div>
	);
};

export default Dashboard;
