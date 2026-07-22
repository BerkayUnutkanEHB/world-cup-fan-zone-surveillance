# Bijdragen aan World Cup Fan Zone Surveillance

Bedankt voor je interesse in dit project. Dit document beschrijft hoe je de
ontwikkelomgeving opzet en welke conventies we volgen voor branches, commits en
code.

> Dit is een individueel schoolproject. De richtlijnen hieronder documenteren
> de werkwijze die tijdens de ontwikkeling is gehanteerd.

---

## Ontwikkelomgeving opzetten

### Vereisten

- Docker en Docker Compose
- (Optioneel voor lokaal draaien zonder Docker) Node.js 22+

### Stappen

```bash
git clone <repository-url>
cd world-cup-fan-zone-surveillance
cp .env.template .env
docker compose up --build
```

Vul daarna de database met testdata (zie de [README](README.md) voor details):

```bash
docker compose exec backend npm run seed:zones
docker compose exec backend npm run seed:supporters
```

---

## Branchingstrategie (Git Flow)

Het project volgt een vereenvoudigde Git Flow:

- **`main`** – stabiele, ingeleverde code. Wordt niet rechtstreeks op ontwikkeld.
- **`develop`** – integratiebranch waarin afgewerkte features samenkomen.
- **`feature/*`** – één branch per feature, vertrekkend vanaf `develop`.

### Werkwijze

1. Maak een feature branch vanaf `develop`:

   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/korte-omschrijving
   ```

2. Werk de feature af met kleine, logische commits.
3. Merge de feature terug in `develop`:

   ```bash
   git checkout develop
   git merge --no-ff feature/korte-omschrijving
   ```

4. Wanneer `develop` stabiel is, wordt die in `main` samengevoegd.

Gebruik duidelijke branchnamen, bijvoorbeeld:

```
feature/detection-model
feature/dashboard-api
feature/supporters-page
```

---

## Commitconventies

Houd commits klein en gericht op één wijziging. Schrijf een duidelijke,
beschrijvende commitboodschap in de gebiedende wijs.

Aanbevolen (op basis van [Conventional Commits](https://www.conventionalcommits.org/)):

```
<type>: <korte omschrijving>
```

Veelgebruikte types:

| Type       | Gebruik                                        |
| ---------- | ---------------------------------------------- |
| `feat`     | een nieuwe functionaliteit                     |
| `fix`      | een bugfix                                     |
| `refactor` | code herstructureren zonder gedragsverandering |
| `docs`     | documentatie                                   |
| `chore`    | onderhoud, config, dependencies                |

Voorbeelden:

```
feat: risicowaarschuwingen voor drukke zones toevoegen
fix: null-check bij drukste zone
docs: installatie-instructies uitbreiden
```

---

## Codeconventies

- **Structuur**: respecteer de gelaagde backend-architectuur
  (`routes → controllers → services → repositories → models`). Businesslogica
  hoort in de services, databasetoegang in de repositories.
- **Naamgeving**: gebruik betekenisvolle namen en volg de bestaande stijl in het
  bestand waaraan je werkt.
- **Frontend**: componenten zijn presentatiegericht; API-communicatie verloopt
  via de bestanden in `frontend/src/services`.
- **Formatting**: behoud de bestaande code-stijl (inspringing, quotes).
- **Linting** (frontend):

  ```bash
  cd frontend
  npm run lint
  ```

---

## Pull requests / merges

Controleer voor het samenvoegen van een feature:

- [ ] De applicatie start met `docker compose up --build`.
- [ ] Nieuwe of gewijzigde functionaliteit werkt zoals bedoeld.
- [ ] De frontend-lint slaagt (`npm run lint`).
- [ ] Relevante documentatie (README's) is bijgewerkt.
- [ ] Er zijn geen ongebruikte bestanden of dode code toegevoegd.

---

## Gedragscode

Deelname aan dit project valt onder de [Code of Conduct](CODE_OF_CONDUCT.md).
