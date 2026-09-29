// Renders window.CONTENT (content.js) into the page. No framework, no build step.
(function () {
  const C = window.CONTENT;
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Wraps text; anything still marked TODO gets a visible dashed outline.
  const t = (s) => (String(s).startsWith("TODO") ? `<span class="todo">${esc(s)}</span>` : esc(s));
  const external = (href) => /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : "";

  // Hook for a future audience switch (?lens=corp). Only the tech lens exists today.
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
    </div>`;

  // Experience — one set of result cards, grouped by theme or by company.
  const companyById = Object.fromEntries(C.companies.map((c) => [c.id, c]));
  const themes = C.themes.filter((th) => C.results.some((r) => r.theme === th.id));
  let cardSeq = 0;

  function card(r, i, { showOrg }) {
    const id = `r-${cardSeq++}`;
    const org = companyById[r.company];
    const roleLine = showOrg ? `${esc(org.name)} · ${esc(r.role)}` : esc(r.role);
    return `
      <article class="card" style="animation-delay:${i * 40}ms">
        <button class="card-head" aria-expanded="false" aria-controls="${id}">
          <div class="big">${t(r.metric)}</div>
          <h3>${t(r.headline)}</h3>
          <div class="org"><span>${roleLine}</span><span class="chev" aria-hidden="true">▾</span></div>
        </button>
        <div class="card-body" id="${id}">
          <ul>${r.bullets.map((x) => `<li>${t(x)}</li>`).join("")}</ul>
          ${r.link ? `<p><a href="${esc(r.link)}">See the project →</a></p>` : ""}
        </div>
      </article>`;
  }

  const tabs = $(".tabs");
  const results = $(".results");
  const byCompany = $(".by-company");
  const blurb = $(".bucket-blurb");
  let view = "theme";
  let currentTheme = themes[0].id;

  tabs.innerHTML = themes.map((th) => `
    <button class="tab" role="tab" id="tab-${th.id}" aria-controls="results" data-id="${th.id}">
      ${esc(th.label)}<span class="count">${C.results.filter((r) => r.theme === th.id).length}</span>
    </button>`).join("");

  function showTheme(id) {
    const th = themes.find((x) => x.id === id) || themes[0];
    currentTheme = th.id;
    tabs.querySelectorAll(".tab").forEach((el) => el.setAttribute("aria-selected", el.dataset.id === th.id));
    results.setAttribute("aria-labelledby", `tab-${th.id}`);
    blurb.innerHTML = t(th.blurb);
    results.innerHTML = C.results.filter((r) => r.theme === th.id).map((r, i) => card(r, i, { showOrg: true })).join("");
  }

  function renderCompanies() {
    byCompany.innerHTML = C.companies.map((co) => {
      const own = C.results.filter((r) => r.company === co.id);
      if (!own.length) return "";
      const groups = co.stages
        ? co.stages.map((s) => ({ label: s.label, items: own.filter((r) => r.stage === s.id) }))
        : [{ label: null, items: own }];
      return `
        <section class="company">
          <header class="company-head">
            <div>
              <h3>${esc(co.name)}</h3>
              <p class="company-place">${esc(co.place)}</p>
            </div>
            <ul class="roles">${co.roles.map((r) => `<li><b>${esc(r.title)}</b><span>${esc(r.period)}</span></li>`).join("")}</ul>
            <p class="company-context">${t(co.context)}</p>
          </header>
          ${groups.map((g) => `
            ${g.label ? `<p class="stage">${esc(g.label)}</p>` : ""}
            <div class="results">${g.items.map((r, i) => card(r, i, { showOrg: false })).join("")}</div>`).join("")}
        </section>`;
    }).join("");
  }

  function setView(v, { updateHash = true } = {}) {
    view = v === "company" ? "company" : "theme";
    document.querySelectorAll(".view-switch button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.view === view));
    const isTheme = view === "theme";
    tabs.hidden = !isTheme;
    blurb.hidden = !isTheme;
    results.hidden = !isTheme;
    byCompany.hidden = isTheme;
    $("#exp-title").textContent = isTheme ? "Results, grouped by what I'm good at" : "Results, role by role";
    $(".lede-exp").textContent = isTheme
      ? "Pick a theme. Tap any card for the context behind the number."
      : "Every role, newest first. Tap any card for the context behind the number.";
    if (isTheme) showTheme(currentTheme); else renderCompanies();
    if (updateHash) history.replaceState(null, "", isTheme ? `#experience/${currentTheme}` : "#experience/company");
  }

  document.querySelector(".view-switch").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-view]");
    if (b) setView(b.dataset.view);
  });
  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    showTheme(tab.dataset.id);
    history.replaceState(null, "", `#experience/${tab.dataset.id}`);
  });
  // Arrow keys move between theme tabs
  tabs.addEventListener("keydown", (e) => {
    if (!["ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const all = [...tabs.querySelectorAll(".tab")];
    const i = all.indexOf(document.activeElement);
    const next = all[(i + (e.key === "ArrowRight" ? 1 : -1) + all.length) % all.length];
    next.focus();
    next.click();
  });
  // Card expand/collapse, in either view
  $("#experience").addEventListener("click", (e) => {
    const head = e.target.closest(".card-head");
    if (!head) return;
    const open = head.parentElement.classList.toggle("open");
    head.setAttribute("aria-expanded", open);
  });

  const deep = location.hash.match(/^#experience\/(\w+)/);
  if (deep && deep[1] === "company") setView("company", { updateHash: false });
  else { if (deep) currentTheme = deep[1]; setView("theme", { updateHash: false }); }

  // Projects
  $(".projects").innerHTML = C.projects.map((p) => `
    <article class="project">
      <div>
        <p class="kicker">${t(p.kicker)}</p>
        <h3>${t(p.name)}</h3>
      </div>
      <p class="brief">${t(p.brief)}</p>
      ${p.stats ? `<div class="pstats">${p.stats.map((s) => `<div><b>${t(s.value)}</b><span>${t(s.label)}</span></div>`).join("")}</div>` : ""}
      <div>
        <p class="sub-label">What it does <span>— tap a box</span></p>
        <div class="boxes">
          ${p.boxes.map((b) => `
            <button class="box" aria-expanded="false">
              <b>${t(b.title)}</b>
              <span class="box-text">${t(b.text)}</span>
              <span class="box-detail">${t(b.detail)}</span>
            </button>`).join("")}
        </div>
      </div>
      ${p.approach ? `
        <div>
          <p class="sub-label">${esc(p.approach.title)}</p>
          <ol class="steps">
            ${p.approach.steps.map((s, i) => `<li><span class="step-n">${i + 1}</span><b>${esc(s.label)}</b><p>${t(s.text)}</p></li>`).join("")}
          </ol>
        </div>` : ""}
      <details class="features">
        <summary>Under the hood</summary>
        <div class="chips">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </details>
      <div class="links">
        ${p.links.map((l) => l.href
          ? `<a class="btn" href="${esc(l.href)}"${external(l.href)}>${esc(l.label)} ↗${l.note ? ` <small>${esc(l.note)}</small>` : ""}</a>`
          : `<span class="btn disabled">${esc(l.label)}</span>`).join("")}
      </div>
    </article>`).join("");
  $(".projects").addEventListener("click", (e) => {
    const box = e.target.closest(".box");
    if (!box) return;
    box.setAttribute("aria-expanded", box.getAttribute("aria-expanded") !== "true");
  });

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

  // Theme: light by default; dark only when the viewer picks it (remembered per viewer).
  const root = document.documentElement;
  try { if (localStorage.getItem("theme") === "dark") root.dataset.theme = "dark"; } catch (_) {}
  $(".theme-toggle").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
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
