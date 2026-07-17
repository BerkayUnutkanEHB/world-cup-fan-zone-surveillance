import { useEffect, useState } from "react";
import "./Dashboard.css";

import StatCard from "../components/dashboard/StatCard";
import TopRiskSupporters from "../components/dashboard/TopRiskSupporters";
import RecenteDetecties from "../components/dashboard/RecenteDetecties";
import ZoneDensity from "../components/dashboard/ZoneDensity";
import RisicoWaarschuwingen from "../components/dashboard/RisicoWaarschuwingen";

import {
	getDashboardData,
	getRisicoWaarschuwingen,
} from "../services/dashboardService";

const Dashboard = () => {
	const [dashboardData, setDashboardData] = useState(null);
	const [waarschuwingen, setWaarschuwingen] = useState([]);
	const [foutmelding, setFoutmelding] = useState("");

	useEffect(() => {
		const loadDashboard = async () => {
			try {
				const [dashboard, waarschuwingenData] = await Promise.all([
					getDashboardData(),
					getRisicoWaarschuwingen(),
				]);

				setDashboardData(dashboard);
				setWaarschuwingen(waarschuwingenData);
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
		<main className="dashboard">
			<h1 className="dashboard-title">Dashboard</h1>

			<section className="stats-grid">
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
			</section>

			<section className="dashboard-content-grid">
				<TopRiskSupporters supporters={dashboardData.topRiskSupporters} />

				<RecenteDetecties detecties={dashboardData.recenteDetecties} />
			</section>

			<ZoneDensity zones={dashboardData.zoneDensity} />

			<RisicoWaarschuwingen waarschuwingen={waarschuwingen} />
		</main>
	);
};

export default Dashboard;
