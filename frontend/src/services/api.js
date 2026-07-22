// Basis-URL van de backend-API.
// Wordt ingesteld via de omgevingsvariabele VITE_API_URL (zie docker-compose.yml).
// Valt terug op localhost wanneer de applicatie lokaal zonder Docker draait.
export const API_BASE_URL =
	import.meta.env.VITE_API_URL ?? "http://localhost:3000";
