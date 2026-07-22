import { API_BASE_URL } from "./api";

const DASHBOARD_URL = `${API_BASE_URL}/api/dashboard`;
const RISICO_WAARSCHUWINGEN_URL = `${API_BASE_URL}/api/risico-waarschuwingen`;

export const getDashboardData = async () => {
	const response = await fetch(DASHBOARD_URL);

	if (!response.ok) {
		throw new Error("Dashboardgegevens konden niet worden opgehaald.");
	}

	return response.json();
};

export const getRisicoWaarschuwingen = async () => {
	const response = await fetch(RISICO_WAARSCHUWINGEN_URL);

	if (!response.ok) {
		throw new Error("Risico-waarschuwingen konden niet worden opgehaald.");
	}

	return response.json();
};

export const runSimulation = async () => {
	const response = await fetch(`${API_BASE_URL}/api/simulation/run`, {
		method: "POST",
	});

	if (!response.ok) {
		throw new Error("Simulatie kon niet worden uitgevoerd.");
	}

	return response.json();
};
