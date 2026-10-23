/*
 * Debug mode: click any element, leave a comment, download all comments as a Markdown file.
 * Turn on with the 🐞 button in the top bar or by adding ?debug to the URL.
 */
(function () {
  "use strict";

  var ES = window.ES;
  var KEY = "english-school.debug.v1";
  var data = load();
  var hovered = null;
  var panel = null, pop = null;

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* private mode etc. */ }
    return { on: false, comments: [] };
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
  }

  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }

  /* ------------------------------------------------------------ element identity */

  function isOwn(node) { return !!(node && node.closest && node.closest(".dbg-ui")); }

  /* Short CSS path from #app, precise enough for querySelector on the same page. */
  function cssPath(node) {
    var parts = [];
    while (node && node.nodeType === 1 && node.id !== "app" && node !== document.body) {
      var part = node.tagName.toLowerCase();
      var cls = Array.prototype.filter.call(node.classList, function (c) { return c.indexOf("dbg-") !== 0; })[0];
      if (cls) part += "." + cls;
      var parent = node.parentNode;
      if (parent && parent.children.length > 1) part += ":nth-child(" + (Array.prototype.indexOf.call(parent.children, node) + 1) + ")";
      parts.unshift(part);
      node = parent;
    }
    return (node && node.id === "app" ? "#app > " : "") + parts.join(" > ");
  }

  function refOf(node) {
    var r = node.closest && node.closest("[data-ref]");
    return r ? r.getAttribute("data-ref") : null;
  }

  function textOf(node) {
    var t = (node.innerText || node.value || node.textContent || "").replace(/\s+/g, " ").trim();
    return t.length > 160 ? t.slice(0, 157) + "…" : t;
  }

  /* ------------------------------------------------------------ on / off */

  function isOn() { return !!data.on; }

  function setOn(on) {
    data.on = !!on;
    save();
    document.documentElement.classList.toggle("dbg-on", data.on);
    if (!data.on) { unhover(); closePop(); }
    renderPanel();
    refreshButton();
    markCommented();
  }

  function toggle() { setOn(!data.on); }

  var btn = null;
  function button() {
    btn = el("button", { class: "dbg-ui dbg-toggle", type: "button", title: "Debug-режим: коментарі до елементів", onclick: toggle });
    refreshButton();
    return btn;
  }

  function refreshButton() {
    if (!btn) return;
    btn.textContent = "🐞" + (data.comments.length ? " " + data.comments.length : "");
    btn.classList.toggle("on", data.on);
  }

  /* ------------------------------------------------------------ comments */

  function list() { return data.comments.slice(); }

  function add(c) {
    c.id = "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    c.at = Date.now();
    data.comments.push(c);
    save();
    renderPanel();
    refreshButton();
    markCommented();
    return c;
  }

  function remove(id) {
    data.comments = data.comments.filter(function (c) { return c.id !== id; });
    save();
    renderPanel();
    refreshButton();
    markCommented();
  }

  function clear() {
    if (!confirm("Видалити всі debug-коментарі?")) return;
    data.comments = [];
    save();
    renderPanel();
    refreshButton();
    markCommented();
  }

  function download() {
    var date = new Date().toISOString().slice(0, 10);
    var md = ES.core.exportComments(data.comments, { date: date });
    var a = el("a", { href: URL.createObjectURL(new Blob([md], { type: "text/markdown;charset=utf-8" })), download: "debug-comments-" + date + ".md" });
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  /* Elements that already have a comment on this page get a marker. */
  function markCommented() {
    document.querySelectorAll(".dbg-marked").forEach(function (n) { n.classList.remove("dbg-marked"); });
    if (!data.on) return;
    data.comments.forEach(function (c) {
      if (c.route !== location.hash) return;
      var n = null;
      try { n = document.querySelector(c.path); } catch (e) { /* stale path */ }
      if (n) n.classList.add("dbg-marked");
    });
  }

  /* ------------------------------------------------------------ hover + click */

  function unhover() { if (hovered) hovered.classList.remove("dbg-hover"); hovered = null; }

  document.addEventListener("mouseover", function (e) {
    if (!data.on || isOwn(e.target) || pop) return;
    unhover();
    if (e.target === document.body || e.target === document.documentElement) return;
    hovered = e.target;
    hovered.classList.add("dbg-hover");
  }, true);

  /* Links and "next" buttons keep working so you can move around while commenting. */
  function passes(target) {
    var n = target.closest ? target.closest("a[href], button") : null;
    return !!n && ES.core.debugPassThrough({ tag: n.tagName, href: n.getAttribute("href"), cls: n.className });
  }

  // Capture phase: answer controls never see the click while debug mode is on.
  document.addEventListener("click", function (e) {
    if (!data.on || isOwn(e.target) || passes(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    if (e.target === document.body || e.target === document.documentElement) return;
    openPop(e.target);
  }, true);

  // Enter in an answer field and drag-and-drop would also answer; block them too.
  document.addEventListener("keydown", function (e) {
    if (data.on && e.key === "Enter" && !isOwn(e.target) && e.target.closest && e.target.closest("#app")) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  ["dragstart", "drop"].forEach(function (type) {
    document.addEventListener(type, function (e) { if (data.on && !isOwn(e.target)) { e.preventDefault(); e.stopPropagation(); } }, true);
  });

  function closePop() { if (pop) pop.remove(); pop = null; }

  function openPop(target) {
    closePop();
    unhover();
    target.classList.add("dbg-hover");
    var ref = refOf(target);
    var ta = el("textarea", { rows: "3", placeholder: "Що тут не так або що змінити?" });
    function done() { target.classList.remove("dbg-hover"); closePop(); }
    function submit() {
      if (!ta.value.trim()) { ta.focus(); return; }
      add({ route: location.hash, ref: ref, path: cssPath(target), text: textOf(target), comment: ta.value.trim() });
      done();
    }
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) submit();
      if (e.key === "Escape") done();
    });
    pop = el("div", { class: "dbg-ui dbg-pop", role: "dialog", "aria-label": "Коментар до елемента" }, [
      el("div", { class: "dbg-ref", text: ref || cssPath(target) }),
      el("div", { class: "dbg-snippet", text: textOf(target) }),
      ta,
      el("div", { class: "dbg-actions" }, [
        el("button", { type: "button", class: "dbg-btn primary", text: "Зберегти", onclick: submit }),
        el("button", { type: "button", class: "dbg-btn", text: "Скасувати", onclick: done })
      ])
    ]);
    document.body.appendChild(pop);
    var r = target.getBoundingClientRect();
    var top = r.bottom + 8;
    if (top + pop.offsetHeight > window.innerHeight - 70) top = Math.max(8, r.top - pop.offsetHeight - 8);
    pop.style.top = top + "px";
    pop.style.left = Math.max(8, Math.min(r.left, window.innerWidth - pop.offsetWidth - 8)) + "px";
    ta.focus();
  }

  /* ------------------------------------------------------------ panel */

  function renderPanel() {
    if (panel) panel.remove();
    panel = null;
    if (!data.on) return;
    var items = data.comments.map(function (c) {
      return el("li", {}, [
        el("span", { class: "dbg-ref", text: c.ref || c.path }),
        el("span", { class: "dbg-text", text: c.comment }),
        el("button", { type: "button", class: "dbg-x", title: "Видалити", text: "✕", onclick: function () { remove(c.id); } })
      ]);
    });
    panel = el("div", { class: "dbg-ui dbg-panel" }, [
      el("div", { class: "dbg-head" }, [
        el("strong", { text: "🐞 Debug · коментарів: " + data.comments.length }),
        el("span", { class: "dbg-hint", text: "Клікни на будь-який елемент, щоб прокоментувати." }),
        el("button", { type: "button", class: "dbg-btn primary", text: "⬇ Завантажити", onclick: download }),
        data.comments.length ? el("button", { type: "button", class: "dbg-btn", text: "Очистити", onclick: clear }) : null,
        el("button", { type: "button", class: "dbg-btn", text: "Вимкнути", onclick: function () { setOn(false); } })
      ]),
      items.length ? el("ul", { class: "dbg-list" }, items) : null
    ]);
    document.body.appendChild(panel);
  }

  /* Re-mark commented elements whenever the app re-renders. */
  function watch() {
    var app = document.getElementById("app");
    if (!app || !window.MutationObserver) return;
    var t = null;
    new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(markCommented, 50);
    }).observe(app, { childList: true, subtree: true });
  }

  ES.debug = { isOn: isOn, toggle: toggle, button: button, list: list, add: add, remove: remove, clear: clear, download: download };

  document.addEventListener("DOMContentLoaded", function () {
    if (/[?&]debug\b/.test(location.search + location.hash)) data.on = true;
    watch();
    setOn(data.on);
  });
})();
