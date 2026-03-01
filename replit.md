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
- `client/src/pages/home.tsx` - Home page (Nav, Hero, Itinerary with images+checkboxes, Checklist, Footer)
- `client/src/pages/stats.tsx` - Stats page with all 4 charts (own nav, hero, footer)
- `client/src/lib/itinerary-data.ts` - All static data (14 days of itinerary, 8 pre-departure tasks, chart data, Unsplash image URLs)
- `client/src/App.tsx` - Router setup (/ and /stats)
- `tailwind.config.ts` - Font family configured to Plus Jakarta Sans

## Pages & Sections
### Home (`/`)
1. **Sticky Navbar** - "Project Japan" logo, links: Il Piano (scroll), I Numeri (→ /stats), Checklist (scroll)
2. **Hero Header** - "Tre Uomini, Zero Esperienza / Massima Follia"
3. **Il Piano di Battaglia (Itinerary)** - Master-detail with images, activity checkboxes (localStorage), day progress badges
4. **Checklist** - 8 toggleable pre-departure tasks
5. **Footer**

### Stats (`/stats`)
1. **Nav** with "Torna al Piano" back link
2. **Hero** - "I Numeri del Delirio"
3. **4 Charts** - Steps forecast, Budget allocation, Kyoto spots matrix, Vibe analysis
4. **Footer**

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
