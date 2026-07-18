const API_URL = "http://localhost:3000/api/interactions";

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
