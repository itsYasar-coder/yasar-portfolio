# Yasar Memon — Portfolio

Personal portfolio website. Plain HTML, CSS and vanilla JavaScript — no frameworks, no build step.

## Sections

- **Hero** — intro, resume download, quick links
- **About** — background and what I work on
- **Skills** — Frontend, Data & Analytics, Languages & Tools
- **Projects** — filterable cards (All / Frontend / Data)
- **Case Study** — how one dashboard saved time
- **Journey** — education and experience timeline
- **Notes** — short write-ups (separate pages under `blog/`)
- **Contact** — email, LinkedIn, GitHub + message form

## Run locally

Option 1 — open the file directly:
```
index.html
```

Option 2 — local server (recommended):
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000

Or with Node:
```bash
npx serve .
```

## Deploy

Built for Vercel / Netlify / GitHub Pages with no config. Since there is no build step,
set the output directory to the repo root and leave the build command empty.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main page, all sections |
| `style.css` | All styling (single file, one mobile breakpoint) |
| `script.js` | Mobile menu, active nav link, project filter, reveal on scroll, form validation |
| `case-study-sales.html` | Full case study page |
| `blog/` | Three note pages |
| `assets/resume.pdf` | Resume (replace with the real one) |

## Contact

- Email: yasar.memon@email.com
- GitHub: https://github.com/yasar-memon
- LinkedIn: https://linkedin.com/in/yasar-memon