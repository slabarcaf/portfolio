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
  // A one-time nudge a few seconds after landing; dismissing it is remembered for the visit.
  const T = V.teaser;
  const teaser = document.createElement("div");
  teaser.className = "voice-teaser";
  teaser.setAttribute("role", "status");
  teaser.hidden = true;
  if (T) teaser.innerHTML = `
    <button type="button" class="voice-teaser-close" aria-label="Dismiss">✕</button>
    <strong>${esc(T.title)}</strong>
    <p>${esc(T.text)}</p>
    <button type="button" class="voice-teaser-cta">${esc(T.cta)}</button>`;

  document.body.append(teaser, button, panel);
  const frame = panel.querySelector("iframe");

  // The iframe loads only when opened, and is unloaded on close: that ends any call and
  // releases the microphone.
  const seen = () => { try { return sessionStorage.getItem("voice-teaser") === "done"; } catch (_) { return false; } };
  function hideTeaser() {
    teaser.hidden = true;
    try { sessionStorage.setItem("voice-teaser", "done"); } catch (_) {}
  }
  if (T && !seen()) setTimeout(() => { if (panel.hidden && !seen()) teaser.hidden = false; }, T.delayMs || 3500);
  teaser.querySelector(".voice-teaser-close")?.addEventListener("click", hideTeaser);
  teaser.querySelector(".voice-teaser-cta")?.addEventListener("click", () => open());

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
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) close(); });
})();
