const API_URL = "http://localhost:3000/api/dashboard";

export const getDashboardData = async () => {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error("Dashboardgegevens konden niet worden opgehaald.");
	}

	return response.json();
};
