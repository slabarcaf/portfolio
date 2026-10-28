// "Talk to my AI assistant": a floating button that opens the voice agent in a panel.
// The agent is its own project (slabarcaf/voice-agent); this file only frames it.
(() => {
  const V = window.CONTENT.voice;
  if (!V) return;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const button = document.createElement("button");
  button.type = "button";
  button.className = "voice-fab";
  button.setAttribute("aria-haspopup", "dialog");
  button.innerHTML = `<span class="voice-fab-icon" aria-hidden="true">●</span>${esc(V.button)}`;

  const panel = document.createElement("div");
  panel.className = "voice-panel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", V.title);
  panel.hidden = true;
  panel.innerHTML = `
    <div class="voice-head">
      <div><strong>${esc(V.title)}</strong><p>${esc(V.note)}</p></div>
      <button type="button" class="voice-close" aria-label="Close">✕</button>
    </div>
    <iframe title="${esc(V.title)}" allow="microphone; autoplay"></iframe>`;
  // A centered pop-up shortly after landing; either answer is remembered for the visit.
  const T = V.teaser;
  const teaser = document.createElement("div");
  teaser.className = "voice-teaser";
  teaser.hidden = true;
  if (T) teaser.innerHTML = `
    <div class="voice-teaser-card" role="dialog" aria-modal="true" aria-labelledby="voice-teaser-title">
      <button type="button" class="voice-teaser-close" aria-label="Close">✕</button>
      <span class="voice-teaser-badge" aria-hidden="true">●</span>
      <strong id="voice-teaser-title">${esc(T.title)}</strong>
      <p>${esc(T.text)}</p>
      <div class="voice-teaser-actions">
        <button type="button" class="voice-teaser-cta">${esc(T.cta)}</button>
        <button type="button" class="voice-teaser-skip">${esc(T.skip || "No thanks")}</button>
      </div>
    </div>`;

  document.body.append(teaser, button, panel);
  const frame = panel.querySelector("iframe");

  // The iframe loads only when opened, and is unloaded on close: that ends any call and
  // releases the microphone.
  const seen = () => { try { return sessionStorage.getItem("voice-teaser") === "done"; } catch (_) { return false; } };
  function hideTeaser() {
    teaser.hidden = true;
    try { sessionStorage.setItem("voice-teaser", "done"); } catch (_) {}
  }
  if (T && !seen()) setTimeout(() => {
    if (!panel.hidden || seen()) return;
    teaser.hidden = false;
    teaser.querySelector(".voice-teaser-cta").focus();
  }, T.delayMs ?? 1200);
  teaser.addEventListener("click", (e) => { if (e.target === teaser) hideTeaser(); }); // backdrop
  teaser.querySelector(".voice-teaser-close")?.addEventListener("click", hideTeaser);
  teaser.querySelector(".voice-teaser-skip")?.addEventListener("click", hideTeaser);
  teaser.querySelector(".voice-teaser-cta")?.addEventListener("click", () => open());
  // Any element with data-voice-open (the hero button) opens the panel too.
  document.addEventListener("click", (e) => { if (e.target.closest("[data-voice-open]")) open(); });

  function open() {
    hideTeaser();
    const theme = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    frame.src = `${V.url}?embed=1&engine=${encodeURIComponent(V.engine)}&theme=${theme}`;
    panel.hidden = false;
    button.hidden = true;
    panel.querySelector(".voice-close").focus();
  }
  function close() {
    frame.src = "about:blank";
    panel.hidden = true;
    button.hidden = false;
    button.focus();
  }
  button.addEventListener("click", open);
  panel.querySelector(".voice-close").addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (!teaser.hidden) hideTeaser();
    else if (!panel.hidden) close();
  });
})();
