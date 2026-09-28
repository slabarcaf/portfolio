# Portfolio site

Static site, deployed on Santiago's **personal** Vercel account (NOT the Berkeley one — they have
look-alike project names). Pushing to `main` deploys.

- Edit copy only in `content.js`. Strings starting with `TODO` render with a dashed outline;
  grep for `TODO` before deploying.
- Experience is grouped by competency (`experience.buckets`); each result needs
  metric / headline / org / role / period / bullets.
- `?lens=` is read in `app.js` and set on `<html data-lens>` — reserved for a future
  corporate version; only `tech` exists today.
- The résumé PDF in `assets/` is public once deployed (it includes a phone number).
- Local preview: launch config "portfolio" in `~/Documents/.claude/launch.json` (port 4322).
