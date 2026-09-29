# Portfolio site

Static site, live at https://santiagolabarca.vercel.app. Vercel login **`slabarcaf`**, team
`santiagos-projects-9ae9cb3c`, project `portfolio`. NOT `santiagolabarca-2093` (the login his
Chrome is usually signed into — it can't see this project). Pushing to `main` deploys (~30s).
Deployment Protection is OFF on purpose: recruiters must open it without a Vercel login.

- Edit copy only in `content.js`. Strings starting with `TODO` render with a dashed outline;
  grep for `TODO` before deploying.
- Experience is grouped by competency (`experience.buckets`); each result needs
  metric / headline / org / role / period / bullets.
- `?lens=` is read in `app.js` and set on `<html data-lens>` — reserved for a future
  corporate version; only `tech` exists today.
- The résumé PDF in `assets/` is public once deployed (it includes a phone number).
- Local preview: launch config "portfolio" in `~/Documents/.claude/launch.json` (port 4322).
