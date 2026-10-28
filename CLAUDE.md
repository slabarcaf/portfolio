# Portfolio site

Static site, live at https://santiagolabarca.vercel.app. Vercel login **`slabarcaf`**, team
`santiagos-projects-9ae9cb3c`, project `portfolio`. NOT `santiagolabarca-2093` (the login his
Chrome is usually signed into — it can't see this project). Pushing to `main` deploys (~30s).
Deployment Protection is OFF on purpose: recruiters must open it without a Vercel login.

- Edit copy only in `content.js`. Strings starting with `TODO` render with a dashed outline;
  grep for `TODO` before deploying.
- Page flow (redesign 2026-10-28, "draft B: bold dark"): intro (3-line bio with hover/tap tips)
  → photo strip → journey (one stop per screen, `journey` in content.js; "Open the story" lists
  that stop's `results`) → "All the numbers" table → What I build → Off the clock + random-facts
  deck (`facts`) → Contact. Photo placeholders are labels starting `TODO photo:`; they render as
  hatched frames until real photos replace them.
- Experience data: `companies` and a flat `results` list (each result has one `theme` and one
  `company`). Results stick to what is on the CV (Santiago's call, 2026-09-28) — the private
  career-evidence notes are not a source for new numbers. BTG and Haas S3 are the only extras.
  `facts` came from his own "25 random things" list (2026-10-28); the partner-related items were
  left out on purpose.
- Three versions by link, behind opaque keys (`lensKeys` in content.js): `/k7q2` ops/BizOps,
  `/m3xd` strategy/consulting, `/f9tw` founder/startups; `/` and unknown keys get the default.
  A lens changes the eyebrow, bio line 2, which journey stop opens ("Start here") and the numbers
  table order. `vercel.json` rewrites any one-segment path to index.html, so asset paths in
  index.html must stay root-absolute (`/app.js`). `?lens=<name>` overrides for testing.
- Positioning: strategy first, "builder" second. Project copy is written for a strategy
  interviewer (problem → diagnosis → fix → result), tech detail lives under "Under the hood".
- Dark theme is the default regardless of OS setting; light only via the toggle.
- The résumé PDF in `assets/` is public once deployed (it includes a phone number).
- Local preview: launch config "portfolio" (`npx serve -s`, port 4322; `serve.json` turns off
  clean URLs). `-s` mimics the Vercel rewrite, so `localhost:4322/k7q2` works. Design drafts go
  in `drafts/` (gitignored, never deployed).
- Voice assistant: `voice.js` + the `voice` entry in `content.js` (labels, pop-up text, default engine). A small toast appears when the visitor reaches the first journey stop (once per visit, sessionStorage "voice-teaser", auto-hides after 12 s); the hero and contact buttons and the floating button open the panel (any `[data-voice-open]` element does).
  It iframes `https://voice-agent-three-sable.vercel.app/demo?embed=1` (repo slabarcaf/voice-agent);
  closing the panel blanks the iframe, which ends the call and frees the mic. The voice agent only
  allows being framed by this site and localhost:4322 (`frame-ancestors` in its vercel.json).
