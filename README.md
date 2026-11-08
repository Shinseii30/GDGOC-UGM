# GDGoC UGM — Open Recruitment Website
### Front-End Assignment · GDGoC UGM 2026/2027

A responsive web application built for the **Google Developer Groups on Campus UGM** Open Recruitment, implementing the official Figma design and consuming the provided REST API.

---

## 🚀 Live Demo

> 🔗 **[Live URL — deployed on Vercel](https://your-deployed-url.vercel.app)**  
> _(Replace this with your actual Vercel URL after deployment)_

---

## 📋 Features

- **4 Pages** sliced from Figma design: Home, About, Overview, Contact
- **Dynamic API Integration** — fetches live data from the GDGoC UGM API
- **Loading, Error & Empty States** — robust data fetching with full state handling
- **Responsive Design** — mobile-first, works across all screen sizes
- **SPA Routing** — React Router DOM with client-side navigation
- **Sticky Navbar** with active link highlighting & mobile hamburger menu

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 19 |
| Bundler | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Linting | Oxlint |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── assets/                  # Static images & artwork
├── landing/
│   ├── components/
│   │   ├── home/            # Home page section components
│   │   │   ├── Hero.jsx
│   │   │   ├── Tracks.jsx
│   │   │   ├── Values.jsx
│   │   │   ├── Intro.jsx
│   │   │   ├── LearnByDoing.jsx
│   │   │   ├── Project.jsx
│   │   │   ├── Steps.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── Faq.jsx
│   │   │   └── Cta.jsx
│   │   ├── Button.jsx       # Reusable Button & TextLink
│   │   ├── Eyebrow.jsx      # Reusable section label
│   │   ├── Navbar.jsx       # Sticky responsive navbar
│   │   └── Footer.jsx
│   └── pages/
│       └── Home.jsx
├── About/
│   └── pages/About.jsx
├── Overview/
│   └── pages/Overview.jsx
├── Contact/
│   └── pages/Contact.jsx
├── App.jsx                  # Root component with routing
├── main.jsx
└── index.css                # Tailwind + design tokens
```

---

## 🌐 API

Base URL: `https://gdgoc-ugm-api.vercel.app/api`

Data is fetched dynamically from the GDGoC UGM REST API, with proper handling for:
- ⏳ Loading states (skeleton / spinner)
- ❌ Error boundaries (network / server errors)
- 📭 Empty state fallbacks

---

## ⚙️ Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint linter |

---

## 🚢 Deployment

This project is deployed on **Vercel** with SPA routing configured via `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy your own

1. Push your code to a public GitHub/GitLab repository
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Vite — no extra configuration needed
4. Click **Deploy** ✅

---

## 🎨 Design

Design reference: [Figma — GDGoC Open Recruitment](https://www.figma.com/design/yx06YRA90jBEX0Mmu64RBx/GDGoC-%E2%80%93-Open-Recruitment?node-id=0-1&p=f)

### Design Tokens (Tailwind CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#1a73e8` | Google Blue — primary actions |
| `brand-dark` | `#1557b0` | Hover state |
| `brand-soft` | `#e8f0fe` | Soft blue backgrounds |
| `surface` | `#f1f3f4` | Card/section backgrounds |
| `ink` | `#202124` | Primary text |
| `muted` | `#5f6368` | Secondary text |
| `line` | `#dadce0` | Borders & dividers |

---

## 📄 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Landing page with hero, tracks, FAQ, and CTA |
| `/about` | About | Community story, values, and contribution ways |
| `/overview` | Overview | Learning tracks comparison and formats |
| `/contact` | Contact | Topic-based contact form with validation |

---

## 👤 Author

Made by **[Your Name]** as part of the GDGoC UGM 2026/2027 Open Recruitment — Hacker Track (Front-End).

---

## 📹 Video Presentation

> 🎬 [Watch the 3–5 minute walkthrough on Google Drive](#)  
> _(Replace with your actual Google Drive link)_

Covers: project setup, component architecture, state management, API integration, and key technical decisions.
