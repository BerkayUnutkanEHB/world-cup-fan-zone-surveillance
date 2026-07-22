const API_URL = "http://localhost:3000/api/supporters";

export const getSupporters = async () => {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error("Supporters konden niet worden opgehaald.");
	}

	return response.json();
};
