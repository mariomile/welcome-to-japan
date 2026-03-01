# Giappone 2026: Tre Uomini, Massima Follia

## Overview
A single-page React application serving as a detailed 14-day Japan travel itinerary planner. Written entirely in irreverent Italian from the perspective of three male friends on their first trip to Japan together (first-person plural: noi/ci). Tone is ironic, no-filter, guys-trip energy.

## Architecture
- **Frontend-only**: No backend API needed. All data is static/hardcoded.
- **Framework**: React + TypeScript + Tailwind CSS
- **Charts**: Recharts (LineChart, PieChart, ScatterChart, RadarChart)
- **Routing**: Wouter (single page at `/`)
- **Font**: Plus Jakarta Sans
- **Language**: Italian (irreverent, direct, masculine humor)

## Key Files
- `client/src/pages/home.tsx` - Main page with all sections (Nav, Hero, Itinerary, Dashboard, Checklist, Footer)
- `client/src/lib/itinerary-data.ts` - All static data (14 days of itinerary, 8 pre-departure tasks, chart data)
- `client/src/App.tsx` - Router setup
- `tailwind.config.ts` - Font family configured to Plus Jakarta Sans

## Sections
1. **Sticky Navbar** - "Project Japan" logo with smooth scroll navigation (Il Piano, I Numeri, Checklist)
2. **Hero Header** - "Tre Uomini, Zero Esperienza / Massima Follia" with gradient accent and feature badges
3. **Il Piano di Battaglia (Itinerary)** - Master-detail: day selector on left, timeline on right with Google Maps links
4. **I Numeri del Delirio (Dashboard)** - 4 charts: Steps forecast, Budget allocation, Kyoto spots matrix, Vibe analysis
5. **Checklist** - 8 toggleable pre-departure tasks with completion state
6. **Footer** - "Fatto con birre, ansia e troppo tempo libero"

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
