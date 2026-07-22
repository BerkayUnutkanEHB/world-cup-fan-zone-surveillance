import { API_BASE_URL } from "./api";

const API_URL = `${API_BASE_URL}/api/interactions`;

export const logInteraction = async (interaction) => {
	try {
		await fetch(API_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(interaction),
		});
	} catch (error) {
		console.error("Fout bij loggen van interactie:", error);
	}
};
