# Arumparithi B — Portfolio

A modern, responsive personal portfolio built with **React**, **Vite**, and **Tailwind CSS**, designed for software development and cybersecurity internship applications.

## Design

Terminal / security-console aesthetic — near-black background, phosphor-green and cyan accents, monospace labels paired with a clean geometric display font. Built around a single signature element: a terminal-style hero with a typed, rotating role line and blinking cursor.

**Color palette:**
| Token | Hex | Use |
|---|---|---|
| `ink-950` | `#0A0E14` | Page background |
| `ink-800` | `#111722` | Card surfaces |
| `ink-600` | `#1F2733` | Borders |
| `signal` | `#3DDC97` | Primary accent (terminal green) |
| `scan` | `#5AC8FA` | Secondary accent (cyan) |
| `mist-100` | `#E6EDF3` | Primary text |
| `mist-400` | `#8B98A9` | Muted text |
| `alert` | `#FF6B6B` | Reserved for error states |

Light mode uses `light-bg #F4F6F8`, `light-surface #FFFFFF`, `light-text #10151C`.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav, scroll-spy, theme toggle, mobile menu
│   ├── Hero.jsx             # Typed role rotation, CTAs
│   ├── About.jsx
│   ├── Skills.jsx           # Grouped skill cards + tools
│   ├── Projects.jsx         # Project card template
│   ├── Education.jsx        # Timeline
│   ├── Achievements.jsx     # Achievement/certificate card template
│   ├── Contact.jsx          # Icon-only contact links
│   ├── Footer.jsx
│   └── SectionWrapper.jsx   # Shared scroll-reveal section shell
├── context/
│   └── ThemeContext.jsx     # Dark/light mode state (persisted to localStorage)
├── hooks/
│   └── useActiveSection.js  # IntersectionObserver-based scroll-spy
├── data/
│   └── portfolioData.js     # ALL editable content lives here
├── index.css
├── App.jsx
└── main.jsx
```

## Editing content

Everything — name, roles, about text, skills, education, projects, achievements, and contact links — lives in **`src/data/portfolioData.js`**. You don't need to touch any component file to update content.

### Adding a project

Add an object to the `projects` array:

```js
{
  id: 4,
  title: 'Your Project Name',
  description: 'One or two sentences on what it does.',
  thumbnail: '/projects/your-image.png', // or null for a placeholder icon
  tags: ['React', 'MongoDB'],
  githubUrl: 'https://github.com/you/repo',
  liveUrl: 'https://your-demo-link.com',
}
```

Place thumbnail images in `public/projects/` so the path resolves correctly.

### Adding an achievement / certification

Add an object to the `achievements` array:

```js
{
  id: 4,
  title: 'Certification Name',
  description: 'Short description.',
  image: '/certificates/your-cert.png', // or null for a placeholder icon
  date: '2026',
}
```

Place certificate images in `public/certificates/`.

### Updating contact details

Edit the `contact` object — `email`, `github`, `linkedin`, `phone`, and `phoneHref` (must be a `tel:` link). The Contact section automatically links each icon.

### Resume link

Set `profile.resumeUrl` to a hosted PDF link, or drop a file in `public/` and point to `/your-resume.pdf`.

## Notes

- Dark/light mode preference is saved to `localStorage` and respected on reload.
- All animations respect `prefers-reduced-motion`.
- Smooth scrolling and scroll-spy nav highlighting are built in — no extra setup needed when adding new sections, as long as you add the section id to `navLinks` in `portfolioData.js`.
