# World Cup Fan Zone Surveillance

## Projectbeschrijving

World Cup Fan Zone Surveillance is een webapplicatie die een controlecentrum
simuleert tijdens een WK-wedstrijd. Via een dashboard kan een operator
supporters monitoren, detecties simuleren en mogelijke veiligheidsrisico's
opvolgen.

Alle detecties worden opgeslagen in MongoDB. Op basis van die gegevens berekent
de applicatie onder andere de drukste zones, de gemiddelde risicoscore, de
supporters met het hoogste risico en verdachte supporters. Daarnaast worden
gebruikersinteracties (klikken, hoveren, navigeren) per gebruiker geregistreerd
en opgeslagen.

De gegevens worden op individueel niveau bijgehouden: elke supporter heeft een
unieke `uid` en elke interactie wordt gekoppeld aan een gebruikers-`uid`.

---

## Functionaliteiten

- Dashboard met live statistieken (totaal supporters, detecties, hoog-risico
  supporters, algemeen risiconiveau)
- Bezettingsgraad per zone met visuele weergave
- Top 5 supporters met de hoogste risicoscore
- Detectie van verdachte supporters (meer dan drie verschillende zones binnen vijf minuten)
- Overzicht van de recentste detecties
- Risicowaarschuwingen voor drukke zones en verdachte supporters
- Simuleren van een detectie (random supporter in een random zone)
- Automatisch verhogen van de risicoscore bij detectie in een zone met een
  verleden van rellen
- Registreren van gebruikersinteracties per `uid`
- Aparte supporterspagina met alle supporters
- Seeders voor testdata (supporters en zones)

---

## Gebruikte technologieën

### Frontend

- React
- React Router
- Vite
- CSS

### Backend

- Node.js
- Express.js
- express-validator

### Database

- MongoDB
- Mongoose

### Tools

- Docker & Docker Compose
- Git & GitHub
- Postman

---

## Architectuur

De backend is opgebouwd volgens een gelaagde architectuur, waarbij elke laag een
eigen verantwoordelijkheid heeft:

```
Routes        →  ontvangen HTTP-requests en verwijzen door
Controllers   →  vertalen request/response, geen businesslogica
Services      →  bevatten de businesslogica
Repositories  →  praten met de database (Mongoose)
MongoDB       →  persistente opslag
```

Hierdoor blijft de code overzichtelijk, testbaar en uitbreidbaar.

---

## Projectstructuur

```
world-cup-fan-zone-surveillance/
├── backend/              # Node.js/Express API
├── frontend/             # React/Vite applicatie
├── docker-compose.yml    # Orkestratie van database, backend en frontend
├── .env.template         # Sjabloon voor de omgevingsvariabelen
└── README.md
```

Meer details per onderdeel:

- [`backend/README.md`](backend/README.md)
- [`frontend/README.md`](frontend/README.md)

---

## Installatie en opstarten

### Vereisten

- Docker en Docker Compose

### 1. Repository klonen

```bash
git clone https://github.com/BerkayUnutkanEHB/world-cup-fan-zone-surveillance.git
cd world-cup-fan-zone-surveillance
```

### 2. Omgevingsvariabelen instellen

Kopieer het meegeleverde `.env.template` naar `.env`:

```bash
cp .env.template .env
```

De standaardwaarden werken meteen; pas ze enkel aan indien nodig.

### 3. Applicatie starten

```bash
docker compose up --build
```

Dit start drie containers:

| Onderdeel | URL / poort           |
| --------- | --------------------- |
| Frontend  | http://localhost:5173 |
| Backend   | http://localhost:3000 |
| MongoDB   | localhost:27017       |

### 4. Testdata inladen (verplicht na een verse start)

De database is bij een schone start leeg. Vul ze met de seeders **terwijl de
containers draaien**:

```bash
docker compose exec backend npm run seed:zones
docker compose exec backend npm run seed:supporters
```

Herlaad daarna het dashboard op http://localhost:5173.

> Wil je detecties zien? Klik op de knop **"Simuleer detectie"** op het
> dashboard, of stuur een `POST` naar `/api/simulation/run`.

---

## Omgevingsvariabelen

De Docker-omgeving wordt aangestuurd via een root `.env`-bestand (gemaakt uit
`.env.template`). `docker-compose.yml` leest deze waarden in:

| Variabele       | Standaard               | Beschrijving                          |
| --------------- | ----------------------- | ------------------------------------- |
| `MONGO_DB_NAME` | `fan_zone_surveillance` | Naam van de MongoDB-database          |
| `BACKEND_PORT`  | `3000`                  | Poort waarop de backend bereikbaar is |
| `FRONTEND_PORT` | `5173`                  | Poort waarop de frontend draait       |
| `VITE_API_URL`  | `http://localhost:3000` | Backend-URL die de frontend gebruikt  |

Wil je de backend **lokaal** draaien (zonder Docker), gebruik dan
`backend/.env.template`.

---

## Datavalidatie

Data wordt op twee niveaus gecontroleerd voordat ze wordt opgeslagen:

- **express-validator** op `POST /api/detections` (controle op verplichte velden).
- **Mongoose-schemavalidatie** op alle modellen: `required`, `enum`, `min`/`max`,
  `trim` en een `unique` index op de `uid` van een supporter.

---

## Design Patterns

- **MVC** – scheiding van routes/controllers, logica en data.
- **Repository Pattern** – alle databasetoegang loopt via repositories, zodat de
  services niet rechtstreeks met Mongoose praten.
- **Service Layer Pattern** – businesslogica zit gebundeld in de services.

---

## AI-gebruik

AI (ChatGPT) werd tijdens de ontwikkeling gebruikt als ondersteuning voor:

- het genereren van afzonderlijke functies en modules;
- het verbeteren van de codekwaliteit (SOLID-principes, naamgeving);
- het oplossen van technische problemen;
- documentatie.

Alle gegenereerde code werd nagelezen, aangepast en getest voordat ze in het
project werd opgenomen. De architectuur en integratie zijn eigen keuzes.

Gedeelde gesprekken:

- https://chatgpt.com/share/6a5cce8c-d708-83eb-a0b0-f3a253cfc52d
- https://chatgpt.com/share/6a6083da-64e4-83eb-8c4b-2a6e059d753e

---

## Bijdragen

Richtlijnen voor de ontwikkelomgeving, branchingstrategie en commitconventies
staan in [CONTRIBUTING.md](CONTRIBUTING.md). Deelname valt onder de
[Code of Conduct](CODE_OF_CONDUCT.md).

---

## Licentie

Dit project is gelicentieerd onder de MIT-licentie. Zie [LICENSE](LICENSE) voor
de volledige tekst.

---

## Bronnen

### React & Frontend

- React Documentation – https://react.dev/
- React Router Documentation – https://reactrouter.com/

### Backend

- Express Documentation – https://expressjs.com/
- MongoDB Documentation – https://www.mongodb.com/docs/
- Mongoose Documentation – https://mongoosejs.com/docs/

### Docker

- Docker (cursusvideo) – https://canvas.ehb.be/courses/44105/files/3626133?module_item_id=882150
- Docker Compose Documentation – https://docs.docker.com/compose/gettingstarted/

### Design Patterns

- Refactoring Guru – https://refactoring.guru/design-patterns/catalog

### Git & GitFlow

- Learn Git Branching – https://learngitbranching.js.org/
- Conventional Commits – https://www.conventionalcommits.org/en/v1.0.0/
- GitFlow uitleg (YouTube) – https://youtu.be/hG_P6IRAjNQ?si=_0VMUsqltFLhpp92

### Technische problemen

- CORS met Express – https://stackoverflow.com/questions/31548654/node-express-mongoose-mongodb-cors-failure

### Testing

- Postman Learning Center – https://learning.postman.com/
