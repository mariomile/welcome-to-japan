# Giappone 2026: Tre Uomini, Massima Follia

## Overview
A single-page React application serving as a detailed 14-day Japan travel itinerary planner. Written entirely in irreverent Italian from the perspective of three male friends on their first trip to Japan together (first-person plural: noi/ci). Tone is ironic, no-filter, guys-trip energy.

## Architecture
- **Frontend-only**: No backend API needed. All data is static/hardcoded.
- **Framework**: React + TypeScript + Tailwind CSS
- **Charts**: Recharts (LineChart, PieChart, ScatterChart, RadarChart)
- **Routing**: Wouter (`/` home, `/stats` stats page)
- **Font**: Plus Jakarta Sans
- **Language**: Italian (irreverent, direct, masculine humor)

## Key Files
- `client/src/pages/home.tsx` - Home page (Nav, Hero, PrepSection, Itinerary, BonusSection, Checklist, Footer)
- `client/src/pages/stats.tsx` - Stats page with all 4 charts (own nav, hero, footer)
- `client/src/lib/itinerary-data.ts` - All static data (14 days itinerary, 6 prep categories, 8 bonus experiences, 10 checklist tasks, chart data)
- `client/src/App.tsx` - Router setup (/ and /stats)
- `tailwind.config.ts` - Font family configured to Plus Jakarta Sans

## Pages & Sections
### Home (`/`)
1. **Sticky Navbar** - "Project Japan" logo, links: Prima di Partire, Il Piano, Esperienze, I Numeri (→/stats), Checklist
2. **Hero Header** - "Tre Uomini, Zero Esperienza / Massima Follia"
3. **Prima di Partire** - 6 tabbed categories (Trasporti, Soldi, Connessione, App, Meteo, Etichetta)
4. **Il Piano di Battaglia (Itinerary)** - Master-detail with images, activity checkboxes (localStorage), day progress badges
5. **Esperienze Folli** - 8 expandable bonus experience cards (Go-Kart, Samurai, Drift, Speakeasy, Sake, Fugu, Spa World, Ferris Wheel)
6. **Checklist** - 10 toggleable pre-departure booking tasks
7. **Footer**

### Stats (`/stats`)
1. **Nav** with "Torna al Piano" back link
2. **Hero** - "I Numeri del Delirio"
3. **4 Charts** - Steps forecast (peak D7 Kyoto 30k), Budget allocation, Kyoto spots matrix, Vibe analysis
4. **Footer**

## Route: Tokyo(5d) → Nikko(day trip) → Hakone(1n) → Kyoto(3d) → Hiroshima+Miyajima(optional day trip) → Osaka(3d) → Nara(day trip) → Partenza
- Day 1-5: Tokyo (Asakusa, Shibuya, TeamLab, BenFiddich, Nikko, Akihabara, Omakase)
- Day 6: Hakone Loop + Ryokan + Onsen
- Day 7-9: Kyoto (Fushimi Inari dawn, Kinkaku-ji, Arashiyama, Kiyomizu-dera, Philosopher's Path → Osaka)
- Day 10: Choice day (Hiroshima+Miyajima OR Osaka chill)
- Day 11: Nara (cervi, Todai-ji, Kasuga Taisha)
- Day 12: USJ (Super Nintendo World, Harry Potter) + Shinsekai
- Day 13: Kuromon, Osaka Castle, shopping, ultima sera
- Day 14: Departure from KIX

## Data Model (itinerary-data.ts)
- `DayData` - 14 days with timeline entries (time, title, detail HTML, maps link, optional image)
- `PrepCategory` - 6 categories with items (title, detail) for "Prima di Partire" section
- `BonusExperience` - 8 optional experiences with title, location, cost, duration, detail HTML, maps
- `TaskData` - 10 pre-departure booking items with title, timeline, icon
- `stepChartData`, `budgetData`, `kyotoData`, `vibeData` - chart data arrays

## Design
- Slate color palette with Japan Red (#E11D48) accent
- Success Green (#10B981) for completed states
- Clean, modern aesthetic with shadows and rounded corners
- Emojis used intentionally throughout (per original design)

## Copy Style
- All Italian, irreverent tone, no-filter humor
- First-person plural (noi/ci) throughout - never voi/vi/tu
- Told from perspective of three male friends, guys-trip energy
- Bets/penalties in beers as running joke throughout
- dangerouslySetInnerHTML used for timeline details (static HTML: b, i, br tags)
- Detailed practical info: exact prices, Google Maps links, food recommendations, pro tips
