# Frontend

## Overzicht

De frontend werd ontwikkeld met React en Vite.

Via het dashboard kan een operator de actuele situatie in de fan zone opvolgen.

---

# Pagina's

## Dashboard

Toont onder andere:

- statistieken
- drukste zone
- risicowaarschuwingen
- top supporters
- recente detecties

## Supporters

Geeft een overzicht van alle geregistreerde supporters met:

- UID
- naam
- nationaliteit
- team
- basisrisico
- risicoscore

---

# Routing

React Router wordt gebruikt.

Beschikbare routes:

```
/
```

Dashboard

```
/supporters
```

Supportersoverzicht

---

# Mappenstructuur

```
src/

assets/
components/
pages/
services/

App.jsx
main.jsx
```

---

# Services

De frontend communiceert met de backend via services.

Momenteel bevat de applicatie onder andere:

- dashboardService
- interactionService
- supporterService

---

# Styling

Voor de styling werd gebruik gemaakt van gewone CSS-bestanden.

Elke pagina of component beschikt over zijn eigen stylesheet zodat de code overzichtelijk blijft.

---

# Installatie

```bash
npm install
```

Start de development server:

```bash
npm run dev
```
