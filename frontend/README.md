# Frontend

## Overzicht

De frontend is gebouwd met React en Vite. Via het dashboard kan een operator de
actuele situatie in de fan zone opvolgen; op de supporterspagina worden alle
geregistreerde supporters getoond.

De frontend verwacht dat de backend draait (standaard op http://localhost:3000).

---

## Pagina's en routing

Routing verloopt via React Router:

| Route         | Pagina     | Inhoud                                                                                               |
| ------------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `/`           | Dashboard  | statistieken, drukste zone, bezettingsgraad, top supporters, recente detecties, risicowaarschuwingen |
| `/supporters` | Supporters | overzicht van alle supporters (uid, naam, nationaliteit, team, basisrisico, risicoscore)             |

---

## Mappenstructuur

```
src/
├── components/
│   ├── Navbar.jsx             # navigatie tussen de pagina's
│   └── dashboard/             # dashboardcomponenten (elk met eigen .css)
│       ├── StatCard
│       ├── FanZoneMap
│       ├── ZoneDensity
│       ├── TopRiskSupporters
│       ├── RecenteDetecties
│       └── RisicoWaarschuwingen
├── pages/                     # Dashboard en Supporters (elk met eigen .css)
├── services/                  # API-communicatie
├── App.jsx                    # routing
└── main.jsx                   # entrypoint
```

---

## Services

De frontend communiceert met de backend via losse servicebestanden. De basis-URL
komt uit `api.js` (omgevingsvariabele `VITE_API_URL`, met een fallback naar
localhost):

- `api` – centrale `API_BASE_URL`;
- `dashboardService` – dashboardstatistieken, risicowaarschuwingen en het
  starten van een simulatie;
- `supporterService` – ophalen van alle supporters;
- `interactionService` – registreren van gebruikersinteracties.

---

## Styling

De styling gebeurt met gewone CSS-bestanden. Elke pagina en elk component heeft
een eigen stylesheet die naast het component staat, zodat de styling
overzichtelijk en gekoppeld blijft.

---

## Lokaal draaien (zonder Docker)

```bash
npm install
npm run dev
```

De development server draait op http://localhost:5173.
