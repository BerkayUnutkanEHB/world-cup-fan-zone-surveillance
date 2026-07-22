import { API_BASE_URL } from "./api";

const API_URL = `${API_BASE_URL}/api/supporters`;

export const getSupporters = async () => {
	const response = await fetch(API_URL);

	if (!response.ok) {
		throw new Error("Supporters konden niet worden opgehaald.");
	}

	return response.json();
};
