# Giappone 2026: Tre Uomini, Massima Follia

## Overview
A multi-page React app serving as a detailed 14-day Japan travel itinerary planner. Written entirely in irreverent Italian from the perspective of three male friends (noi/ci). Mobile-first design with bottom tab navigation.

## Architecture
- **Frontend-only**: No backend API. All data is static/hardcoded.
- **Framework**: React + TypeScript + Tailwind CSS
- **Charts**: Recharts (LineChart, PieChart, ScatterChart, RadarChart)
- **Routing**: Wouter (6 routes)
- **Font**: Plus Jakarta Sans
- **Language**: Italian (irreverent, direct, masculine humor)

## Key Files
- `client/src/components/layout.tsx` - Shared layout: top navbar (desktop) + bottom tab bar (mobile), used by all pages
- `client/src/pages/home.tsx` - Landing page with hero + navigation cards to all sections
- `client/src/pages/piano.tsx` - Itinerary page: 14 days with sticky day selector, timeline, checkboxes (localStorage)
- `client/src/pages/prep.tsx` - Prima di Partire: 6 pill-tabbed categories (Trasporti, Soldi, Connessione, App, Meteo, Etichetta)
- `client/src/pages/esperienze.tsx` - Esperienze Folli: 8 expandable bonus experience cards
- `client/src/pages/checklist.tsx` - 10 pre-departure booking tasks with progress counter
- `client/src/pages/stats.tsx` - 4 charts: steps, budget, Kyoto matrix, vibe radar
- `client/src/lib/itinerary-data.ts` - All static data
- `client/src/App.tsx` - Wouter router (/, /piano, /prep, /esperienze, /checklist, /stats)

## Routes
- `/` - Home (hero + section nav cards)
- `/piano` - Il Piano di Battaglia (itinerary, 14 days)
- `/prep` - Prima di Partire (6 categories)
- `/esperienze` - Esperienze Folli (8 bonus cards)
- `/checklist` - Roba da Prenotare (10 items)
- `/stats` - I Numeri del Delirio (4 charts)

## Mobile Optimization
- Bottom tab navigation (md:hidden) with 6 icons: Home, Piano, Info, Bonus, Check, Numeri
- Desktop: top horizontal nav bar (hidden on mobile)
- max-w-2xl content containers for readability
- Sticky day selector bar on piano page
- Touch-friendly tap targets, active:scale feedback
- pb-24 on all pages to clear bottom nav
- safe-area-inset-bottom support for notched phones

## Trip Route
Tokyo(5d) → Nikko(day trip) → Hakone(1n) → Kyoto(3d) → Hiroshima+Miyajima(optional) → Osaka(3d) → Nara(day trip) → Partenza

## Copy Style
- All Italian, irreverent tone, first-person plural (noi/ci) throughout
- Never voi/vi/tu
- dangerouslySetInnerHTML used for timeline details (static HTML: b, i, br tags)
- Detailed practical info: exact prices, Google Maps links, food recs, pro tips
