# Portfolio site

Static site, live at https://santiagolabarca.vercel.app. Vercel login **`slabarcaf`**, team
`santiagos-projects-9ae9cb3c`, project `portfolio`. NOT `santiagolabarca-2093` (the login his
Chrome is usually signed into — it can't see this project). Pushing to `main` deploys (~30s).
Deployment Protection is OFF on purpose: recruiters must open it without a Vercel login.

- Edit copy only in `content.js`. Strings starting with `TODO` render with a dashed outline;
  grep for `TODO` before deploying.
- Experience data: `themes`, `companies` (newest first; optional `stages`, used by Xepelin) and
  a flat `results` list. Each result has one `theme` and one `company` (+ `stage` if the company
  has stages); the "By theme / By company" switch regroups the same cards. Deep links:
  `#experience/<themeId>` and `#experience/company`.
- Experience results stick to what is on the CV (Santiago's call, 2026-09-28) — the private
  career-evidence notes are not a source for new numbers. BTG and Haas S3 are the only extras.
- Positioning: strategy first, "builder" second. Project copy is written for a strategy
  interviewer (problem → diagnosis → fix → result), tech detail lives under "Under the hood".
- Light theme is the default regardless of OS setting; dark only via the toggle.
- `?lens=` is read in `app.js` and set on `<html data-lens>` — reserved for a future
  corporate version; only `tech` exists today.
- The résumé PDF in `assets/` is public once deployed (it includes a phone number).
- Local preview: launch config "portfolio" in `~/Documents/.claude/launch.json` (port 4322).
