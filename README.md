# World Cup Fan Zone Surveillance

## Projectbeschrijving

World Cup Fan Zone Surveillance is een webapplicatie die een controlecentrum simuleert tijdens een WK-wedstrijd. Via een dashboard kan een operator supporters monitoren, detecties registreren en mogelijke veiligheidsrisico's opvolgen.

Alle detecties worden opgeslagen in MongoDB. Op basis van deze gegevens berekent de applicatie onder andere drukke zones, risicoscores en verdachte supporters. Daarnaast worden gebruikersinteracties zoals klikken, hoveren en navigeren geregistreerd zodat alle acties binnen de applicatie gelogd worden.

---

# Functionaliteiten

De applicatie bevat onder andere:

- Registreren van supporters en zones
- Detecteren van supporters in verschillende zones
- Dashboard met live statistieken
- Bezettingsgraad per zone
- Top supporters met hoogste risicoscore
- Risicowaarschuwingen voor drukke zones
- Detectie van verdachte supporters
- Registreren van gebruikersinteracties
- MongoDB-opslag
- Seeders voor testdata

---

# Gebruikte technologieën

## Frontend

- React
- React Router
- Vite
- CSS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Tools

- Docker
- Docker Compose
- Git
- GitHub
- Postman

---

# Architectuur

De backend is opgebouwd volgens een gelaagde architectuur.

```
Routes
    ↓
Controllers
    ↓
Services
    ↓
Repositories
    ↓
MongoDB
```

Hierdoor blijft de code overzichtelijk, onderhoudbaar en uitbreidbaar.

---

# Projectstructuur

```
world-cup-fan-zone-surveillance/

frontend/
backend/
docs/

docker-compose.yml
README.md
```

Meer informatie is terug te vinden in:

- `frontend/README.md`
- `backend/README.md`

---

# Installatie

## Repository klonen

```bash
git clone <repository-url>
cd world-cup-fan-zone-surveillance
```

## Applicatie starten

```bash
docker compose up --build
```

De frontend draait standaard op:

```
http://localhost:5173
```

De backend draait standaard op:

```
http://localhost:3000
```

---

# Design Patterns

Tijdens dit project werden volgende design patterns gebruikt:

- MVC
- Repository Pattern
- Service Layer Pattern

---

# AI-gebruik

AI werd gebruikt als ondersteuning tijdens de ontwikkeling voor:

- sommige functionaliteiten;
- verbeteren van codekwaliteit;
- oplossen van technische problemen;
- documentatie.

Alle gegenereerde code werd nagelezen, aangepast en getest alvorens ze in het project werd opgenomen.

---

# Bronnen

## React & Frontend

- React Documentation – https://react.dev/
- React Router Documentation – https://reactrouter.com/

## Backend

- Express Documentation – https://expressjs.com/
- MongoDB Documentation – https://www.mongodb.com/docs/
- Mongoose Documentation – https://mongoosejs.com/docs/

## Docker

- Docker video - https://canvas.ehb.be/courses/44105/files/3626133?module_item_id=882150
- Docker Documentation – https://docs.docker.com/compose/gettingstarted/

## Design Patterns

- Refactoring Guru – https://refactoring.guru/design-patterns/catalog

## Git & GitFlow

- Learn Git Branching – https://learngitbranching.js.org/
- Conventional Commits – https://www.conventionalcommits.org/en/v1.0.0/
- GitFlow uitleg (YouTube) – https://youtu.be/hG_P6IRAjNQ?si=_0VMUsqltFLhpp92

## Technische problemen

- CORS met Express – https://stackoverflow.com/questions/31548654/node-express-mongoose-mongodb-cors-failure
- Backend.AI Networking (Cluster) – https://docs.backend.ai/en/latest/concepts/networking.html

## Testing

- Postman Learning Center – https://learning.postman.com/

### AI-gesprek

Tijdens de ontwikkeling werd ChatGPT gebruikt als ondersteuning.

Chat:
https://chatgpt.com/share/6a5cce8c-d708-83eb-a0b0-f3a253cfc52d
https://chatgpt.com/share/6a6083da-64e4-83eb-8c4b-2a6e059d753e
