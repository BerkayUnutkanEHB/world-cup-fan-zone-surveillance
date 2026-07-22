import { useEffect, useState } from "react";
import "./Dashboard.css";
import FanZoneMap from "../components/dashboard/FanZoneMap";
import StatCard from "../components/dashboard/StatCard";
import TopRiskSupporters from "../components/dashboard/TopRiskSupporters";
import RecenteDetecties from "../components/dashboard/RecenteDetecties";
import ZoneDensity from "../components/dashboard/ZoneDensity";
import RisicoWaarschuwingen from "../components/dashboard/RisicoWaarschuwingen";
import { logInteraction } from "../services/interactionService";

import {
	getDashboardData,
	getRisicoWaarschuwingen,
	runSimulation,
} from "../services/dashboardService";

const Dashboard = () => {
	const [dashboardData, setDashboardData] = useState(null);
	const [waarschuwingen, setWaarschuwingen] = useState([]);
	const [foutmelding, setFoutmelding] = useState("");
	const [simulatieBezig, setSimulatieBezig] = useState(false);

	const loadDashboard = async () => {
		try {
			const [dashboard, waarschuwingenData] = await Promise.all([
				getDashboardData(),
				getRisicoWaarschuwingen(),
			]);

			setDashboardData(dashboard);
			setWaarschuwingen(waarschuwingenData);
			setFoutmelding("");
		} catch (error) {
			setFoutmelding(error.message);
		}
	};

	useEffect(() => {
		const loadPage = async () => {
			try {
				let uid = localStorage.getItem("uid");

				if (!uid) {
					uid = `USER-${crypto.randomUUID()}`;
					localStorage.setItem("uid", uid);
				}

				await logInteraction({
					uid,
					action: "navigation",
					page: "dashboard",
					element: "dashboard-page",
					duration: 0,
				});

				await loadDashboard();
			} catch (error) {
				setFoutmelding(error.message);
			}
		};

		loadPage();
	}, []);

	const handleSimulation = async () => {
		try {
			setSimulatieBezig(true);
			setFoutmelding("");

			let uid = localStorage.getItem("uid");

			if (!uid) {
				uid = `USER-${crypto.randomUUID()}`;
				localStorage.setItem("uid", uid);
			}

			await logInteraction({
				uid,
				action: "click",
				page: "dashboard",
				element: "simulation-button",
				duration: 0,
			});

			await runSimulation();
			await loadDashboard();
		} catch (error) {
			setFoutmelding(error.message);
		} finally {
			setSimulatieBezig(false);
		}
	};

	if (foutmelding) {
		return <p>{foutmelding}</p>;
	}

	if (!dashboardData) {
		return <p>Dashboard laden...</p>;
	}

	return (
		<main className="dashboard">
			<h1 className="dashboard-title">
				World Cup Fan Zone Surveillance Dashboard
			</h1>

			<button
				type="button"
				className="simulation-button"
				onClick={handleSimulation}
				disabled={simulatieBezig}
			>
				{simulatieBezig ? "Simulatie uitvoeren..." : "Simuleer detectie"}
			</button>

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

			<FanZoneMap zones={dashboardData.zoneDensity} />

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
