# Backend

## Overzicht

De backend werd ontwikkeld met Node.js en Express.

Alle gegevens worden opgeslagen in MongoDB via Mongoose.

---

# Architectuur

De backend maakt gebruik van een gelaagde architectuur.

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

Elke laag heeft zijn eigen verantwoordelijkheid.

---

# Mappenstructuur

```
config/
controllers/
middleware/
models/
repositories/
routes/
seeders/
services/

server.js
```

---

# Datamodellen

De applicatie bevat onder andere:

- Supporter
- Zone
- Detection
- Interaction

---

# API Endpoints

| Methode | Endpoint                   | Beschrijving           |
| ------- | -------------------------- | ---------------------- |
| GET     | /api/supporters            | Alle supporters        |
| GET     | /api/zones                 | Alle zones             |
| POST    | /api/detections            | Nieuwe detectie        |
| GET     | /api/dashboard             | Dashboardinformatie    |
| GET     | /api/risico-waarschuwingen | Actieve waarschuwingen |

---

# Businesslogica

De backend bevat onder andere logica voor:

- risicoscores
- drukke zones
- verdachte supporters
- gebruikersinteracties
- dashboardstatistieken

---

# Seeders

Seeders worden gebruikt om automatisch testdata toe te voegen aan MongoDB.

Hierdoor kan de applicatie onmiddellijk getest worden.

---

# Omgevingsvariabelen

Maak een `.env` bestand aan.

```
PORT=3000

MONGODB_URI=mongodb://mongo:27017/worldcup
```

---

# Installatie

```bash
npm install
```

Start de backend:

```bash
npm run dev
```

---

# Gebruikte Design Patterns

- MVC
- Repository Pattern
- Service Layer Pattern
