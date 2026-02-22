# Full-Stack Data Science & ML Engineering

Single-page static site for Sachin Kaushik's full-stack data science and ML engineering course. Serves locally on `http://localhost:4173` with Node or a Python one-liner.

## Prerequisites
- Node.js 18+ (for npm scripts)
- Python 3 (optional fallback server)

## Quick start (Node)
```bash
npm install
npm start
# open http://localhost:4173
```

## Fallback (no Node)
```bash
python3 -m http.server 4173
# open http://localhost:4173
```

## Deploy to GitHub Pages (Actions)
1) Create a repo on GitHub (public is easiest) with `main` as the default branch.
2) Add the remote and push:
```bash
git init
git add .
git commit -m "Initial course site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```
3) The included workflow `.github/workflows/deploy-pages.yml` will publish on every push to `main` via GitHub Pages.
4) After the first run (check the Actions tab), your site will be live at:
```
https://<your-username>.github.io/<repo>/
```

## Project structure
- `index.html` — landing page with updated sections (hero, outcomes, tracks, capstones, format, tooling, instructor, FAQ, contact)
- `styles.css` — styling (modern light palette)
- `script.js` — smooth scroll, FAQ accordion, dynamic year
- `resume/Resume_Sachin.pdf` — downloadable resume (linked in hero)

## Notes
- Primary CTA: `mailto:kaushiksachin132@gmail.com`
- Resume download link: `resume/Resume_Sachin.pdf`
- Port `4173` chosen to avoid common dev-server conflicts; change in `package.json` if needed.

## Acceptance checks
- `npm install` completes without errors
- `npm start` serves the site at `http://localhost:4173`
- All nav anchors point to the updated sections
- FAQ accordion toggles; resume link downloads the PDF
