# CampusCode

[![React](https://img.shields.io/badge/React-18-111111?logo=react&logoColor=61DAFB)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-6-7665FF?logo=vite&logoColor=white)](https://vite.dev/) [![Frontend demo](https://img.shields.io/badge/Status-frontend%20demo-A8E62E)](#limitations--future-scope)

[Live website](https://campus-code-art.vercel.app/) · [GitHub repository](https://github.com/dxtrovert/CampusCodeArt)

## Project Introduction

**Build ideas. Find your people. Take the next step.**

CampusCode is a frontend prototype for a student innovation and hackathon platform. It brings discovering ideas, finding collaborators, building projects and exploring challenges into an interactive experience designed for student builders.

## Experience & Features

- **Creative landing page:** seven editorial sections, alternating light and dark surfaces, a theme-aware sticky navbar and an interactive WebGL hero carousel.
- **Motion throughout:** smooth scrolling, expanding section transitions, staggered reveals, interactive text, flip cards and subtle hover feedback.
- **Dashboard:** a personalized welcome, featured event, locally derived statistics, related events and a sample activity chart.
- **Events and My Events:** browse three sample events, search, view details, filter and save local selections. `/explore` and `/events` currently use the same event view.
- **Login and registration:** a frontend demo that stores the entered profile locally and opens the dashboard. Credentials are not verified.

## Tech Stack

| Technology | Role |
| --- | --- |
| React 18 + Vite 6 | Component-based UI, development server and production builds |
| Tailwind CSS + custom CSS | Responsive styling and CampusCode design tokens |
| GSAP + ScrollTrigger | Pinned sections, scroll-linked transitions and hero pinning |
| Framer Motion + Motion | Entrances, staggered elements and flip-card interactions |
| Lenis | Smooth scrolling synchronized with ScrollTrigger |
| OGL | WebGL rendering for the hero carousel |
| React Router | Client-side routes and navigation |
| Lucide React + Recharts | Interface icons and the dashboard activity chart |
| Browser localStorage | Demo profile and event selections |

## Animation & Interaction Highlights

- **Scroll scenes:** GSAP ScrollTrigger pins qualifying desktop sections below the header and scrubs their rounded-to-expanded-to-rounded transitions. Content fades and reveals in sequence; the timeline responds to reverse scrolling. Smaller screens and reduced-motion preferences skip these section pins.
- **Smooth-scroll integration:** one Lenis instance runs on GSAP’s ticker and updates ScrollTrigger on scroll. Listeners, the ticker and the Lenis instance are cleaned up on unmount.
- **Hero:** a separate ScrollTrigger maps scroll progress to carousel steps. OGL renders the image rail, while GSAP adds pointer-driven movement to the foreground portrait.
- **Detail and feedback:** Framer Motion powers entrance reveals; React Bits FlipCard adds interactive About and Process cards; TechText animates the final headline. CSS supplies the custom cursor and hover/focus treatments. Motion preferences are respected where implemented.

## Project Structure

```text
CampusCodeArt/
├── Assets/             # Supplied original artwork
├── public/images/      # Public hero and cursor assets
├── src/
│   ├── assets/         # Imported artwork and video
│   ├── components/     # Landing sections, shared UI and interactions
│   ├── context/        # Demo authentication state
│   ├── data/           # Landing content and sample workspace data
│   ├── hooks/          # localStorage, Lenis and ScrollTrigger
│   ├── pages/          # Landing, auth, dashboard and events
│   ├── styles/         # Global and responsive CSS
│   ├── App.jsx         # Routes and application shell
│   └── main.jsx        # React entry and providers
├── DESIGN_SYSTEM.md
├── CAMPUSCODE_PROGRESS.md
└── package.json
```

## Screenshots

**TODO:** Add verified screenshots of the running landing page, dashboard, events and auth pages, plus an optional short animation demo. The images in `ui/` are design references, not application screenshots.

## Getting Started

**Prerequisites:** Node.js 20 or newer, npm and a modern browser with WebGL support.

```bash
git clone https://github.com/dxtrovert/CampusCodeArt.git
cd CampusCodeArt
npm ci
npm run dev
```

Open the local address printed by Vite—usually `http://localhost:5173/`.

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. Configure the host to serve `index.html` for client-side routes on direct visits and refreshes.

## Limitations & Future Scope

- Authentication is **demo-only**: passwords are not stored or verified, and Google/GitHub sign-in is not connected.
- Events and dashboard activity are sample data; selections and profiles are stored only in the current browser. Hosting and team event filters have no data.
- Projects, team, saved items, notifications and settings are placeholder or empty states—not complete features.
- Future work includes secure authentication and backend integration, real event and project workflows, automated tests, broader accessibility checks and performance optimization.
