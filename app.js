// Renders window.CONTENT (content.js) into the page. No framework, no build step.
(function () {
  const C = window.CONTENT;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Wraps text; anything still marked TODO gets a visible dashed outline.
  const t = (s) => (String(s).startsWith("TODO") ? `<span class="todo">${esc(s)}</span>` : esc(s));
  const external = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";

  // Hook for a future audience switch (?lens=corp). v0.0.1 ships the tech lens only.
  const lens = new URLSearchParams(location.search).get("lens") || "tech";
  document.documentElement.dataset.lens = lens;

  // Hero
  const h = C.hero;
  $("#hero").innerHTML = `
    <div class="hero-top">
      <div>
        <p class="eyebrow">${t(h.eyebrow)}</p>
        <h1>${t(h.name)}</h1>
        <p class="tagline">${t(h.tagline)}</p>
        <p class="sub">${t(h.sub)}</p>
        <div class="cta">
          <a class="btn primary" href="#experience">See the results</a>
          <a class="btn" href="#projects">What I've built</a>
          <a class="btn" href="${esc(C.about.resume)}" download>Download résumé</a>
        </div>
      </div>
      <img class="hero-photo" src="${esc(C.about.photo)}" alt="Portrait of ${esc(h.name)}" width="200" height="200">
    </div>
    <div class="metrics">
      ${h.metrics.map((m) => `<div class="metric"><b>${t(m.value)}</b><span>${t(m.label)}</span></div>`).join("")}
    </div>`;

  // Experience: tabs by competency, expandable result cards
  const buckets = C.experience.buckets;
  const tabs = $(".tabs");
  tabs.innerHTML = buckets.map((b, i) => `
    <button class="tab" role="tab" id="tab-${b.id}" aria-selected="${i === 0}" aria-controls="results" data-id="${b.id}">
      ${esc(b.label)}<span class="count">${b.results.length}</span>
    </button>`).join("");
  const results = $(".results");
  results.id = "results";
  results.setAttribute("role", "tabpanel");

  function showBucket(id) {
    const b = buckets.find((x) => x.id === id) || buckets[0];
    tabs.querySelectorAll(".tab").forEach((el) => el.setAttribute("aria-selected", el.dataset.id === b.id));
    results.setAttribute("aria-labelledby", `tab-${b.id}`);
    $(".bucket-blurb").innerHTML = t(b.blurb);
    results.innerHTML = b.results.map((r, i) => `
      <article class="card" style="animation-delay:${i * 50}ms">
        <button class="card-head" aria-expanded="false" aria-controls="r-${b.id}-${i}">
          <div class="big">${t(r.metric)}</div>
          <h3>${t(r.headline)}</h3>
          <div class="org"><span>${t(r.org)}</span><span class="chev" aria-hidden="true">▾</span></div>
        </button>
        <div class="card-body" id="r-${b.id}-${i}">
          <p class="role">${t(r.role)} · ${t(r.period)}</p>
          <ul>${r.bullets.map((x) => `<li>${t(x)}</li>`).join("")}</ul>
          ${r.link ? `<p><a href="${esc(r.link)}">See the project →</a></p>` : ""}
        </div>
      </article>`).join("");
  }
  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    showBucket(tab.dataset.id);
    history.replaceState(null, "", `#experience/${tab.dataset.id}`);
  });
  // Arrow keys move between tabs
  tabs.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const all = [...tabs.querySelectorAll(".tab")];
    const i = all.indexOf(document.activeElement);
    const next = all[(i + (e.key === "ArrowRight" ? 1 : -1) + all.length) % all.length];
    next.focus();
    next.click();
  });
  results.addEventListener("click", (e) => {
    const head = e.target.closest(".card-head");
    if (!head) return;
    const card = head.parentElement;
    const open = card.classList.toggle("open");
    head.setAttribute("aria-expanded", open);
  });
  const deep = location.hash.match(/^#experience\/(\w+)/);
  showBucket(deep ? deep[1] : buckets[0].id);

  // Projects
  $(".projects").innerHTML = C.projects.map((p) => `
    <article class="project">
      <div>
        <p class="kicker">${t(p.kicker)}</p>
        <h3>${t(p.name)}</h3>
      </div>
      <p>${t(p.brief)}</p>
      <div class="chips">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      <details class="features">
        <summary>Key features (${p.features.length})</summary>
        <ul>${p.features.map((f) => `<li>${t(f)}</li>`).join("")}</ul>
      </details>
      ${p.askMe ? `<div class="ask"><b>${esc(p.askMe.title)}</b><p>${t(p.askMe.text)}</p></div>` : ""}
      <div class="links">
        ${p.links.map((l) => l.href
          ? `<a class="btn" href="${esc(l.href)}"${external(l.href)}>${esc(l.label)} ↗${l.note ? ` <small>${esc(l.note)}</small>` : ""}</a>`
          : `<span class="btn disabled">${esc(l.label)}</span>`).join("")}
      </div>
    </article>`).join("");

  // About
  const a = C.about;
  $(".about").innerHTML = `
    <img src="${esc(a.photo)}" alt="${esc(C.hero.name)}" loading="lazy">
    <div class="about-text">
      ${a.bio.map((p) => `<p>${t(p)}</p>`).join("")}
      <h3>Interests</h3>
      <ul class="interests">${a.interests.map((i) => `<li>${t(i)}</li>`).join("")}</ul>
      <h3>Education</h3>
      <div class="edu">${a.education.map((e) => `<div><b>${t(e.school)}</b><span>${t(e.degree)} · ${t(e.period)}</span></div>`).join("")}</div>
      <h3>Get in touch</h3>
      <div class="links">
        ${a.links.map((l) => `<a class="btn" href="${esc(l.href)}"${external(l.href)}>${esc(l.label)}</a>`).join("")}
        <a class="btn primary" href="${esc(a.resume)}" download>Download résumé (PDF)</a>
      </div>
    </div>`;

  $(".footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(C.hero.name)}</span><span>v${esc(C.version)} · hand-built, no framework</span>`;

  // Theme toggle (remembered per viewer; storage may be unavailable)
  const root = document.documentElement;
  try { const saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch (_) {}
  $(".theme-toggle").addEventListener("click", () => {
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (_) {}
  });

  // Highlight the nav link for the section in view
  const links = document.querySelectorAll(".nav nav a");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${en.target.id}`));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => obs.observe(s));
})();
