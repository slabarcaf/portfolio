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
  document.body.append(button, panel);
  const frame = panel.querySelector("iframe");

  // The iframe loads only when opened, and is unloaded on close: that ends any call and
  // releases the microphone.
  function open() {
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
