const DASHBOARD_URL = "http://localhost:3000/api/dashboard";
const RISICO_WAARSCHUWINGEN_URL =
	"http://localhost:3000/api/risico-waarschuwingen";

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
