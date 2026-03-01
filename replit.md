# Giappone 2026: Max Stamina Execution Plan

## Overview
A single-page React application serving as a detailed 14-day Japan travel itinerary planner. The app features a master-detail day view, interactive charts (recharts), and a pre-departure checklist.

## Architecture
- **Frontend-only**: No backend API needed. All data is static/hardcoded.
- **Framework**: React + TypeScript + Tailwind CSS
- **Charts**: Recharts (LineChart, PieChart, ScatterChart, RadarChart)
- **Routing**: Wouter (single page at `/`)
- **Font**: Plus Jakarta Sans

## Key Files
- `client/src/pages/home.tsx` - Main page with all sections (Nav, Hero, Itinerary, Dashboard, Checklist, Footer)
- `client/src/lib/itinerary-data.ts` - All static data (14 days of itinerary, tasks, chart data)
- `client/src/App.tsx` - Router setup
- `tailwind.config.ts` - Font family configured to Plus Jakarta Sans

## Sections
1. **Sticky Navbar** - Smooth scroll navigation to sections
2. **Hero Header** - Title with gradient accent and feature badges
3. **Sprint Log (Itinerary)** - Master-detail: day selector on left, timeline content on right with Google Maps links
4. **Health & Strategy Dashboard** - 4 charts: Steps forecast, Budget allocation, Kyoto ROI matrix, Vibe analysis
5. **SLA Checklist** - Toggleable pre-departure tasks with completion state
6. **Footer**

## Design
- Slate color palette with Japan Red (#E11D48) accent
- Success Green (#10B981) for completed states
- Clean, modern aesthetic with shadows and rounded corners
