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
  button.innerHTML = `<span class="voice-dot" aria-hidden="true">●</span>${esc(V.button)}`;

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
  // A small toast once the visitor reaches the journey (not a blocking modal); shown once
  // per visit, and never while the panel is open.
  const T = V.teaser;
  const toast = document.createElement("div");
  toast.className = "voice-toast";
  toast.setAttribute("role", "status");
  toast.hidden = true;
  if (T) toast.innerHTML = `
    <button type="button" class="voice-toast-close" aria-label="Dismiss">✕</button>
    <strong>${esc(T.title)}</strong>
    <p>${esc(T.text)}</p>
    <button type="button" class="voice-toast-cta">${esc(T.cta)}</button>`;

  document.body.append(toast, button, panel);
  const frame = panel.querySelector("iframe");

  // The iframe loads only when opened, and is unloaded on close: that ends any call and
  // releases the microphone.
  const seen = () => { try { return sessionStorage.getItem("voice-teaser") === "done"; } catch (_) { return false; } };
  function hideTeaser() {
    toast.hidden = true;
    try { sessionStorage.setItem("voice-teaser", "done"); } catch (_) {}
  }
  const trigger = document.querySelector("#journey .stop");
  if (T && trigger && !seen()) {
    const watch = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      watch.disconnect();
      if (!panel.hidden || seen()) return;
      toast.hidden = false;
      setTimeout(() => { if (!toast.hidden) hideTeaser(); }, T.autoHideMs ?? 12000);
    }, { threshold: 0.3 });
    watch.observe(trigger);
  }
  toast.querySelector(".voice-toast-close")?.addEventListener("click", hideTeaser);
  toast.querySelector(".voice-toast-cta")?.addEventListener("click", () => open());
  // Any element with data-voice-open (the hero button) opens the panel too.
  document.addEventListener("click", (e) => { if (e.target.closest("[data-voice-open]")) open(); });

  function open() {
    hideTeaser();
    const theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
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
    if (!toast.hidden) hideTeaser();
    else if (!panel.hidden) close();
  });
})();
