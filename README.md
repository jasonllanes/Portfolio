# Personal Portfolio — Jason Llanes

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features smooth scroll animations, a dark/light mode toggle, and a clean dark-blue design.

🌐 **Live Site:** [jasonllanes.github.io/Portfolio](https://jasonllanes.github.io/Portfolio/)

---

## Tech Stack

| Category           | Technology                     |
| ------------------ | ------------------------------ |
| Framework          | React 19 + TypeScript          |
| Build Tool         | Vite 7                         |
| Styling            | Tailwind CSS v4                |
| Routing            | React Router DOM v7            |
| Component Variants | class-variance-authority (CVA) |
| Icons              | lucide-react                   |
| Deployment         | GitHub Pages via `gh-pages`    |

---

## Features

- **Dark / Light mode** — persisted to `localStorage`, toggled via a theme context
- **Scroll animations** — `IntersectionObserver`-based `useScrollAnimation` hook with `reveal`, `reveal-left`, `reveal-right` classes
- **Parallax section** — CSS `background-attachment: fixed` quote banner
- **Animated hero** — floating blobs, typewriter cursor, stats row, CTA buttons
- **Career timeline** — vertical timeline with pulsing dot for the current role
- **Projects grid** — filterable by All / Web / Mobile tabs
- **Contact form** — with success feedback (ready for EmailJS / Formspree integration)
- **Fully responsive** — mobile-first layout, hamburger nav on small screens

---

## Project Structure

```
src/
├── components/
│   └── common/          # Shared UI — Navbar, Footer, Button, Card, SectionTitle
├── context/
│   └── ThemeContext.tsx  # Dark/light mode provider
├── hooks/
│   └── useScrollAnimation.ts
├── lib/
│   └── utils.ts         # cn() helper (clsx + tailwind-merge)
├── pages/
│   └── Home/
│       ├── HomeMainContainer.tsx
│       └── components/  # Hero, About, Career, Education, Projects, Contact, ParallaxSection
├── routes/
│   └── AppRoutes.tsx
└── index.css            # Tailwind import + CSS variables + keyframes
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# Clone the repo
git clone https://github.com/jasonllanes/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

Output goes to `dist/`.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `vite build` then pushes `dist/` to the `gh-pages` branch automatically.

---

## Customization

All placeholder content is in the component files under `src/pages/Home/components/`. To make this your own:

1. **Navbar / Footer** — update name and social links in `Navbar.tsx` and `Footer.tsx`
2. **Hero** — edit headline, subtitle, and CTA links in `Hero.tsx`
3. **About** — update bio text and skill tags in `About.tsx`
4. **Career** — replace `CAREER_ITEMS` array in `Career.tsx`
5. **Education** — replace `EDUCATION` and `CERTIFICATIONS` arrays in `Education.tsx`
6. **Projects** — replace `PROJECTS` array in `Projects.tsx`
7. **Contact** — update `CONTACT_INFO` in `Contact.tsx` and wire up an email service

---

## License

MIT — feel free to use this as a template for your own portfolio.
