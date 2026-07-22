# Backend

## Overzicht

De backend is een REST-API gebouwd met Node.js en Express. Alle gegevens worden
opgeslagen in MongoDB via Mongoose.

---

## Architectuur

De backend gebruikt een gelaagde architectuur waarbij elke laag een eigen
verantwoordelijkheid heeft:

```
Routes        →  ontvangen HTTP-requests
Controllers   →  vertalen request/response
Services      →  businesslogica
Repositories  →  databasetoegang (Mongoose)
MongoDB →  persistente opslag
```

---

## Mappenstructuur

```
backend/
├── config/         # databaseverbinding
├── controllers/    # request/response afhandeling
├── middleware/     # o.a. validatie (express-validator)
├── models/         # Mongoose-schema's
├── repositories/   # databasetoegang
├── routes/         # API-routes
├── seeders/        # testdata
├── services/       # businesslogica
├── app.js          # Express-app en route-mounting
└── server.js       # startpunt (verbindt met DB en start de server)
```

---

## Datamodellen

- **Supporter** – `uid`, `naam`, `nationaliteit`, `team`, `basisrisico`,
  `risicoscore`
- **Zone** – `naam`, `type`, `capaciteit`, `eerdereRiots`
- **Detection** – verwijzing naar `supporter` en `zone`, `tijdstip`
- **Interaction** – `uid`, `action` (`click`/`hover`/`navigation`), `page`,
  `element`, `duration`

---

## API-endpoints

| Methode | Endpoint                     | Beschrijving                         |
| ------- | ---------------------------- | ------------------------------------ |
| GET     | `/api/supporters`            | Alle supporters                      |
| GET     | `/api/zones`                 | Alle zones                           |
| POST    | `/api/detections`            | Nieuwe detectie (gevalideerd)        |
| GET     | `/api/dashboard`             | Samengevatte dashboardstatistieken   |
| GET     | `/api/risico-waarschuwingen` | Actieve risicowaarschuwingen         |
| POST    | `/api/simulation/run`        | Genereert een willekeurige detectie  |
| POST    | `/api/interactions`          | Registreert een gebruikersinteractie |
| GET     | `/api/interactions`          | Alle geregistreerde interacties      |

---

## Businesslogica

De backend bevat onder andere logica voor:

- het berekenen van dashboardstatistieken (aggregaties in MongoDB);
- de bezettingsgraad en drukste zone;
- risicowaarschuwingen voor drukke zones en verdachte supporters;
- het verhogen van de risicoscore van een supporter bij een detectie in een zone
  met een verleden van rellen;
- het loggen van gebruikersinteracties.
- detecteren van verdachte supporters die binnen vijf minuten meer dan drie verschillende zones bezoeken;

---

## Datavalidatie

- **express-validator** valideert `POST /api/detections`.
- **Mongoose-schemavalidatie** dwingt `required`, `enum`, `min`/`max`, `trim` en
  een `unique` index op `Supporter.uid` af.

---

## Omgevingsvariabelen

Via Docker Compose worden deze automatisch gezet. Voor een lokale run
(zonder Docker) maak je een `.env` aan op basis van `.env.template`:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/fan_zone_surveillance
```

---

## Lokaal draaien (zonder Docker)

```bash
npm install
npm run dev
```

## Seeders

De seeders vullen de database met testdata. Zorg dat MongoDB draait en dat
`MONGODB_URI` bereikbaar is.

```bash
npm run seed:zones
npm run seed:supporters
```

Binnen de Docker-omgeving:

```bash
docker compose exec backend npm run seed:zones
docker compose exec backend npm run seed:supporters
```

---

## Gebruikte Design Patterns

- **MVC**
- **Repository Pattern**
- **Service Layer Pattern**
