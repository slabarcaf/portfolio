// Renders window.CONTENT (content.js) into the page. No framework, no build step.
(function () {
  const C = window.CONTENT;
  const $ = (sel) => document.querySelector(sel);
  const root = document.documentElement;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Wraps text; anything still marked TODO gets a visible dashed outline.
  const t = (s) => (String(s).startsWith("TODO") ? `<span class="todo">${esc(s)}</span>` : esc(s));
  const external = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";
  // Photo placeholder: "TODO photo: Golf" renders as a hatched frame captioned "Golf".
  const photo = (label, cls = "") => `<figure class="ph ${cls}"><figcaption>${esc(String(label).replace(/^TODO photo:\s*/, ""))}</figcaption></figure>`;

  // Lens: an opaque key in the path (/k7q2) picks the version; ?lens=<name> overrides for testing.
  const key = location.pathname.split("/").filter(Boolean)[0];
  const asked = new URLSearchParams(location.search).get("lens");
  const lensName = (asked && C.lenses[asked]) ? asked : (C.lensKeys[key] || "default");
  const lens = C.lenses[lensName];
  root.dataset.lens = lensName;

  const bioLine = (parts) => `<span class="bio-line">${parts.map((p) => typeof p === "string" ? esc(p)
    : `<button type="button" class="tip">${esc(p.w)}<span class="tip-card" role="tooltip">${esc(p.tip)}</span></button>`).join("")}</span>`;

  // Intro
  const [first, ...rest] = C.name.split(" ");
  $("#intro").innerHTML = `
    <p class="eyebrow">${esc(lens.eyebrow)}</p>
    <h1>${esc(first)}<span>${esc(rest.join(" "))}</span></h1>
    <div class="intro-grid">
      <div>
        <p class="bio">${bioLine(C.bio.line1)}${bioLine(lens.line2)}${bioLine(C.bio.line3)}</p>
        <div class="cta">
          <a class="btn primary" href="#journey">See the journey ↓</a>
          ${C.voice ? `<button type="button" class="btn" data-voice-open><span class="voice-dot" aria-hidden="true">●</span>${esc(C.voice.hero)}</button>` : ""}
          <a class="btn ghost" href="#numbers">Just the numbers</a>
        </div>
      </div>
      <img class="photo" src="${esc(C.photo)}" alt="Portrait of ${esc(C.name)}" width="260" height="325">
    </div>`;
  // Highlighted phrases: hover/focus on desktop, tap toggles on touch.
  document.addEventListener("click", (e) => {
    const tip = e.target.closest(".tip");
    document.querySelectorAll(".tip.open").forEach((o) => o !== tip && o.classList.remove("open"));
    if (tip) tip.classList.toggle("open");
  });

  // Photo strip (doubled so the loop is seamless)
  const strip = C.strip.map((s) => photo(s)).join("");
  $(".strip").innerHTML = strip + strip;

  // Journey: one screen per stop; "Open the story" lists that stop's results.
  const companyById = Object.fromEntries(C.companies.map((c) => [c.id, c]));
  const resultLine = (r) => `
    <li class="result">
      <b>${t(r.metric)}</b>
      <div><p>${t(r.headline)}</p><ul>${r.bullets.map((x) => `<li>${t(x)}</li>`).join("")}</ul>
      ${r.link ? `<a href="${esc(r.link)}">See the project →</a>` : ""}</div>
    </li>`;
  $(".journey").innerHTML = C.journey.map((s) => {
    const own = C.results.filter((r) => s.companies.includes(r.company));
    const focus = lens.focus && s.companies[0] === lens.focus;
    return `
      <article class="stop reveal${focus ? " focus" : ""}${s.metric ? "" : " small"}" id="stop-${s.companies[0]}">
        <div class="stop-meta"><span class="stop-years">${esc(s.years)}</span><span>${esc(s.place)}</span></div>
        <div class="stop-body">
          <p class="stop-org">${esc(s.org)} <span>· ${esc(s.role)}</span></p>
          ${s.metric ? `<p class="stop-metric">${t(s.metric)}</p><p class="stop-label">${t(s.label)}</p>` : ""}
          <p class="stop-line">${t(s.line)}</p>
          ${own.length ? `<details class="stop-more"${focus ? " open" : ""}><summary>Open the story <span>(${own.length})</span></summary><ul class="results">${own.map(resultLine).join("")}</ul></details>` : ""}
        </div>
        ${s.photo ? photo(s.photo, "stop-photo") : ""}
      </article>`;
  }).join("");

  // All the numbers: every result in one table, ordered by the lens's themes.
  const rank = (r) => (lens.order ? lens.order.indexOf(r.theme) : 0);
  const sorted = C.results.map((r, i) => ({ r, i })).sort((a, b) => rank(a.r) - rank(b.r) || a.i - b.i).map((x) => x.r);
  $(".numbers").innerHTML = `
    <ul class="num-table">${sorted.map((r) => `
      <li><b>${t(r.metric)}</b><span class="num-what">${t(r.headline)}</span><span class="num-org">${esc(companyById[r.company].name)}</span></li>`).join("")}
    </ul>`;

  // Projects
  $(".projects").innerHTML = C.projects.map((p) => p.chat ? `
    <article class="project">
      <div class="phone" aria-label="Example chat with ${esc(p.name)}">
        <div class="phone-top">${esc(p.name)}<small>bot</small></div>
        ${p.chat.map((m) => `<p class="msg${m.me ? " me" : ""}">${esc(m.text)}</p>`).join("")}
      </div>
      <div class="project-body">
        <p class="kicker">${t(p.kicker)}</p>
        <h3>${t(p.name)}</h3>
        <p class="brief">${t(p.brief)}</p>
        <div class="pstats">${p.stats.map((s) => `<div><b>${t(s.value)}</b><span>${t(s.label)}</span></div>`).join("")}</div>
        <p class="sub-label">${esc(p.approach.title)}</p>
        <ol class="steps">${p.approach.steps.map((s, i) => `<li><span class="step-n">0${i + 1}</span><b>${esc(s.label)}</b><p>${t(s.text)}</p></li>`).join("")}</ol>
        <details class="features"><summary>Under the hood</summary><div class="chips">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></details>
        <div class="links">${p.links.map(linkBtn).join("")}</div>
      </div>
    </article>` : `
    <article class="project mini">
      <div><p class="kicker">${t(p.kicker)}</p><h3>${t(p.name)}</h3></div>
      <p class="brief">${t(p.brief)}</p>
      <div class="chips">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      <div class="links">${p.links.map(linkBtn).join("")}</div>
    </article>`).join("");
  function linkBtn(l) {
    return l.href
      ? `<a class="btn" href="${esc(l.href)}"${external(l.href)}>${esc(l.label)} ↗${l.note ? ` <small>${esc(l.note)}</small>` : ""}</a>`
      : `<span class="btn disabled">${esc(l.label)}</span>`;
  }

  // Off the clock
  $(".off-grid").innerHTML = C.offClock.map((o) => `<div class="off-card reveal">${photo(o.photo)}<p>${t(o.caption)}</p></div>`).join("");

  // Random facts: a shuffled deck, dealt one at a time.
  const order = C.facts.map((_, i) => i).sort(() => Math.random() - 0.5);
  let dealt = 0;
  const deckCard = $(".deck-card");
  function deal() {
    const i = dealt % order.length;
    $(".deck-text").innerHTML = t(C.facts[order[i]]);
    $(".deck-count").textContent = `${i + 1} of ${order.length}`;
    deckCard.classList.add("flipped");
    deckCard.classList.remove("deal"); void deckCard.offsetWidth; deckCard.classList.add("deal");
    dealt++;
  }
  deckCard.addEventListener("click", deal);
  $(".deck-deal").addEventListener("click", deal);

  // Contact
  const a = C.about;
  $("#contact").innerHTML = `
    <p class="eyebrow">Next stop</p>
    <h2 id="contact-title">Let's talk</h2>
    <p class="contact-line">Strategy, operations, or something you'd like built: the fastest way to reach me is email.</p>
    <div class="links">
      ${a.links.map((l) => `<a class="btn${l.label === "Email" ? " primary" : ""}" href="${esc(l.href)}"${external(l.href)}>${esc(l.label)}</a>`).join("")}
      <a class="btn" href="${esc(C.resume)}" download>Résumé (PDF)</a>
      ${C.voice ? `<button type="button" class="btn" data-voice-open><span class="voice-dot" aria-hidden="true">●</span>${esc(C.voice.hero)}</button>` : ""}
    </div>
    <div class="edu">${a.education.map((e) => `<div><b>${t(e.school)}</b><span>${t(e.degree)} · ${t(e.period)}</span></div>`).join("")}</div>`;

  $(".footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(C.name)}</span><span>v${esc(C.version)} · hand-built, no framework</span>`;

  // Theme: dark by default; light only when the viewer picks it (remembered per viewer).
  const toggle = $(".theme-toggle");
  const setTheme = (th) => {
    root.dataset.theme = th;
    toggle.setAttribute("aria-label", th === "dark" ? "Switch to light mode" : "Switch to dark mode");
  };
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  setTheme(saved === "light" ? "light" : "dark");
  toggle.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  // Reveal on scroll
  const reveal = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); }
  }), { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

  // Reading progress bar across the top
  const bar = $(".progress");
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Highlight the nav link for the section in view
  const links = document.querySelectorAll(".nav nav a");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => obs.observe(s));
})();
