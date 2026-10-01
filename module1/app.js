(function () {
  "use strict";

  var DATA = window.MODULE1;
  var STORE_KEY = "english-school.module1.v1";
  var app = document.getElementById("app");

  var TYPE_LABELS = {
    choice: "Вибір відповіді",
    gap: "Заповни пропуск",
    order: "Збери речення",
    transform: "Перефразуй",
    errors: "Знайди помилку",
    cards: "Картки",
    match: "Пари",
    sort: "Розсортуй",
    speak: "Говоріння / письмо"
  };
  var TYPE_ICONS = { choice: "◉", gap: "✎", order: "⇄", transform: "↻", errors: "⚑", cards: "▣", match: "⚭", sort: "▤", speak: "🗣" };
  var AUTO_CHECKED = { choice: 1, gap: 1, order: 1, errors: 1 };

  /* ------------------------------------------------------------ storage */

  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* private mode etc. */ }
    return { scores: {}, cards: {}, streak: { day: null, count: 0 } };
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
  }

  function recordScore(key, correct, total) {
    var prev = state.scores[key];
    var pct = total ? Math.round((correct / total) * 100) : 0;
    state.scores[key] = { best: Math.max(prev ? prev.best : 0, pct), last: pct, at: Date.now() };
    touchStreak();
    save();
  }

  function touchStreak() {
    var today = new Date().toISOString().slice(0, 10);
    var s = state.streak || { day: null, count: 0 };
    if (s.day === today) return;
    var y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    s.count = s.day === y ? s.count + 1 : 1;
    s.day = today;
    state.streak = s;
  }

  function topicProgress(topic) {
    var sum = 0;
    topic.exercises.forEach(function (ex, i) {
      var sc = state.scores[topic.id + ":" + i];
      sum += sc ? sc.best : 0;
    });
    return Math.round(sum / topic.exercises.length);
  }

  /* ------------------------------------------------------------ helpers */

  function h(tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === "class") el.className = v;
        else if (k === "text") el.textContent = v;
        else if (k === "html") el.innerHTML = v;
        else if (k.slice(0, 2) === "on") el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? "" : v);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null || c === false) return;
      el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return el;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var CONTRACTIONS = [
    [/\bwon't\b/g, "will not"], [/\bcan't\b/g, "can not"], [/\bcannot\b/g, "can not"], [/\bshan't\b/g, "shall not"],
    [/n't\b/g, " not"], [/'ve\b/g, " have"], [/'ll\b/g, " will"], [/'re\b/g, " are"], [/\bi'm\b/g, "i am"],
    [/\b(it|that|there|he|she|what|who)'s\b/g, "$1 is"]
  ];

  function norm(s) {
    s = String(s).toLowerCase()
      .replace(/[‘’ʼ`]/g, "'")
      .replace(/[“”"]/g, "")
      .replace(/\(.*?\)/g, " ")
      .replace(/[.,!?;:–—-]+/g, " ");
    CONTRACTIONS.forEach(function (c) { s = s.replace(c[0], c[1]); });
    return s.replace(/\s+/g, " ").trim();
  }

  function same(a, b) { return norm(a) === norm(b); }

  /* Text-to-speech: a "listen" button next to any English sentence. */
  var voice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    var vs = speechSynthesis.getVoices();
    voice = vs.filter(function (v) { return /^en-GB/i.test(v.lang); })[0] ||
            vs.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }

  function speak(text) {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text.replace(/___/g, "blank").replace(/\(.*?\)/g, ""));
    u.lang = voice ? voice.lang : "en-GB";
    if (voice) u.voice = voice;
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }

  function sayBtn(text) {
    if (!("speechSynthesis" in window)) return null;
    return h("button", {
      class: "say", type: "button", title: "Прослухати", "aria-label": "Прослухати",
      onclick: function (e) { e.stopPropagation(); speak(text); }
    }, ["🔊"]);
  }

  var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  function micBtn(textarea) {
    if (!Recognition) return null;
    var rec = null;
    var btn = h("button", { class: "btn ghost", type: "button", title: "Надиктувати англійською" }, ["🎤 Надиктувати"]);
    btn.addEventListener("click", function () {
      if (rec) { rec.stop(); return; }
      rec = new Recognition();
      rec.lang = "en-GB";
      rec.interimResults = false;
      rec.onresult = function (e) {
        var t = e.results[0][0].transcript;
        textarea.value = (textarea.value ? textarea.value.trim() + " " : "") + t;
        textarea.dispatchEvent(new Event("input"));
      };
      rec.onend = function () { rec = null; btn.classList.remove("rec"); btn.textContent = "🎤 Надиктувати"; };
      rec.start();
      btn.classList.add("rec");
      btn.textContent = "⏹ Зупинити";
    });
    return btn;
  }

  function gapText(q, fill) {
    // Renders "___" as styled blanks (or filled answers).
    var parts = q.split("___");
    var out = [];
    parts.forEach(function (p, i) {
      out.push(document.createTextNode(p));
      if (i < parts.length - 1) out.push(h("span", { class: fill ? "blank filled" : "blank" }, [fill ? fill[i] : "  "]));
    });
    return out;
  }

  /* ------------------------------------------------------------ routing */

  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/");
    window.scrollTo(0, 0);
    if (parts[0] === "t" && parts[1]) return renderTopic(parts[1], parts[2]);
    if (parts[0] === "mix") return renderMix();
    if (parts[0] === "cards") return renderAllCards();
    renderHome();
  }

  window.addEventListener("hashchange", route);

  function shell(children, crumbs) {
    app.innerHTML = "";
    var bar = h("header", { class: "topbar" }, [
      h("a", { href: "#/", class: "brand" }, [h("span", { class: "logo" }, ["M1"]), " English Module 1"]),
      crumbs ? h("span", { class: "crumb" }, [crumbs]) : null
    ]);
    app.appendChild(bar);
    var main = h("main", { class: "wrap" }, children);
    app.appendChild(main);
    return main;
  }

  /* ------------------------------------------------------------ home */

  function renderHome() {
    var grammar = DATA.topics.filter(function (t) { return t.kind === "grammar"; });
    var vocab = DATA.topics.filter(function (t) { return t.kind === "vocab"; });
    var overall = Math.round(DATA.topics.reduce(function (s, t) { return s + topicProgress(t); }, 0) / DATA.topics.length);
    var dueCards = countCards();

    shell([
      h("section", { class: "hero" }, [
        h("div", {}, [
          h("h1", { text: "Module 1: повторення" }),
          h("p", { class: "muted", text: "Граматика 1A–3C з Language bank і лексика з Module test 1. Обери тему, прочитай правило й тренуйся різними способами." })
        ]),
        h("div", { class: "stats" }, [
          stat(overall + "%", "пройдено"),
          stat(String((state.streak && state.streak.count) || 0), "днів поспіль"),
          stat(String(dueCards.known) + "/" + dueCards.total, "карток вивчено")
        ])
      ]),
      h("section", { class: "quick" }, [
        h("a", { class: "quick-card", href: "#/mix" }, [
          h("strong", { text: "⚡ Змішаний тест" }),
          h("span", { text: "15 випадкових завдань з усіх тем" })
        ]),
        h("a", { class: "quick-card", href: "#/cards" }, [
          h("strong", { text: "▣ Усі картки" }),
          h("span", { text: "Інтервальне повторення лексики й фраз" })
        ])
      ]),
      h("h2", { text: "Граматика" }),
      h("div", { class: "grid" }, grammar.map(topicCard)),
      h("h2", { text: "Лексика" }),
      h("div", { class: "grid" }, vocab.map(topicCard)),
      h("p", { class: "footnote muted" }, [
        "Прогрес зберігається лише в цьому браузері. ",
        h("button", { class: "link", type: "button", onclick: resetProgress, text: "Скинути прогрес" })
      ])
    ]);
  }

  function stat(value, label) {
    return h("div", { class: "stat" }, [h("b", { text: value }), h("span", { text: label })]);
  }

  function topicCard(t) {
    var pct = topicProgress(t);
    var types = t.exercises.map(function (e) { return TYPE_ICONS[e.type]; }).join(" ");
    return h("a", { class: "topic", href: "#/t/" + t.id }, [
      h("span", { class: "ref " + t.kind, text: t.ref }),
      h("h3", { text: t.title }),
      h("p", { class: "muted", text: t.uk }),
      h("div", { class: "topic-foot" }, [
        h("span", { class: "types", title: "Типи вправ", text: types }),
        h("span", { class: "pct", text: pct + "%" })
      ]),
      h("div", { class: "bar" }, [h("i", { style: "width:" + pct + "%" })])
    ]);
  }

  function resetProgress() {
    if (!confirm("Скинути весь прогрес?")) return;
    state = { scores: {}, cards: {}, streak: { day: null, count: 0 } };
    save();
    renderHome();
  }

  /* ------------------------------------------------------------ topic */

  function renderTopic(id, tab) {
    var topic = DATA.topics.filter(function (t) { return t.id === id; })[0];
    if (!topic) return renderHome();
    var active = tab == null ? "theory" : tab;

    var tabs = h("nav", { class: "tabs" }, [
      tabLink(topic, "theory", "📘 Правило", active)
    ].concat(topic.exercises.map(function (ex, i) {
      var sc = state.scores[topic.id + ":" + i];
      return tabLink(topic, String(i), TYPE_ICONS[ex.type] + " " + TYPE_LABELS[ex.type] + (sc ? " · " + sc.best + "%" : ""), active);
    })));

    var body = h("div", { class: "panel" });
    var main = shell([
      h("div", { class: "topic-head" }, [
        h("span", { class: "ref " + topic.kind, text: topic.ref }),
        h("div", {}, [h("h1", { text: topic.title }), h("p", { class: "muted", text: topic.uk })])
      ]),
      tabs,
      body
    ], topic.ref);

    if (active === "theory") {
      body.appendChild(renderTheory(topic));
      body.appendChild(h("div", { class: "actions" }, [
        h("a", { class: "btn primary", href: "#/t/" + topic.id + "/0", text: "До вправ →" })
      ]));
    } else {
      var idx = parseInt(active, 10);
      var ex = topic.exercises[idx];
      if (!ex) return renderTopic(id);
      var next = idx + 1 < topic.exercises.length ? "#/t/" + topic.id + "/" + (idx + 1) : null;
      body.appendChild(renderExercise(ex, topic.id + ":" + idx, next));
    }
    var on = main.querySelector(".tabs .on");
    if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function tabLink(topic, key, label, active) {
    return h("a", {
      href: "#/t/" + topic.id + (key === "theory" ? "" : "/" + key),
      class: key === active ? "on" : null,
      text: label
    });
  }

  function renderTheory(topic) {
    return h("div", { class: "theory" }, topic.theory.map(function (b) {
      var kids = [h("h3", { text: b.h })];
      if (b.p) kids.push(h("p", { text: b.p }));
      if (b.table) {
        kids.push(h("table", {}, b.table.map(function (row) {
          return h("tr", {}, row.map(function (cell, i) {
            var td = h(i === 0 ? "th" : "td", { text: cell });
            return td;
          }));
        })));
      }
      if (b.list) kids.push(h("ul", {}, b.list.map(function (li) { return h("li", { text: li }); })));
      if (b.ex) {
        kids.push(h("div", { class: "examples" }, b.ex.map(function (e) {
          return h("div", { class: "example" }, [sayBtn(e), h("span", { text: e })]);
        })));
      }
      return h("section", { class: "rule" }, kids);
    }));
  }

  /* ------------------------------------------------------------ exercises */

  function renderExercise(ex, key, nextHref) {
    var wrap = h("div", { class: "exercise" }, [
      h("div", { class: "ex-head" }, [
        h("span", { class: "chip", text: TYPE_ICONS[ex.type] + " " + TYPE_LABELS[ex.type] }),
        h("h2", { text: ex.title })
      ]),
      ex.intro ? h("p", { class: "muted", text: ex.intro }) : null
    ]);
    var stage = h("div", {});
    wrap.appendChild(stage);

    function finish(correct, total) {
      recordScore(key, correct, total);
      stage.innerHTML = "";
      stage.appendChild(resultCard(correct, total, function () {
        stage.innerHTML = "";
        start();
      }, nextHref));
    }

    function start() {
      if (ex.type === "match") return stage.appendChild(matchGame(ex.items, finish));
      if (ex.type === "sort") return stage.appendChild(sortGame(ex, finish));
      if (ex.type === "cards") return stage.appendChild(cardDeck(ex.items, key, finish));
      var items = ex.type === "speak" || ex.type === "transform" ? ex.items.slice() : shuffle(ex.items);
      stage.appendChild(stepper(items.map(function (it) { return { type: ex.type, item: it, phrases: ex.phrases }; }), finish));
    }

    start();
    return wrap;
  }

  function resultCard(correct, total, again, nextHref) {
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var msg = pct >= 90 ? "Чудово! 🎉" : pct >= 70 ? "Добре! Ще трохи практики." : pct >= 40 ? "Непогано. Повтори правило і спробуй знову." : "Варто перечитати правило.";
    return h("div", { class: "result" }, [
      h("div", { class: "ring", style: "--p:" + pct }, [h("b", { text: pct + "%" })]),
      h("h3", { text: msg }),
      h("p", { class: "muted", text: correct + " з " + total + " правильно" }),
      h("div", { class: "actions" }, [
        h("button", { class: "btn", type: "button", onclick: again, text: "↻ Ще раз" }),
        nextHref ? h("a", { class: "btn primary", href: nextHref, text: "Наступна вправа →" }) : h("a", { class: "btn primary", href: "#/", text: "До тем" })
      ])
    ]);
  }

  /* A stepper shows one item at a time with a progress bar. */
  function stepper(queue, finish) {
    var i = 0, correct = 0;
    var box = h("div", { class: "stepper" });
    var prog = h("div", { class: "bar big" }, [h("i", {})]);
    var count = h("span", { class: "count muted" });
    var slot = h("div", { class: "slot" });
    box.appendChild(h("div", { class: "step-top" }, [prog, count]));
    box.appendChild(slot);

    function show() {
      prog.firstChild.style.width = (i / queue.length) * 100 + "%";
      count.textContent = (i + 1) + " / " + queue.length;
      slot.innerHTML = "";
      var q = queue[i];
      var view = ITEM[q.type](q.item, q.phrases, function (ok) {
        if (ok) correct++;
        var last = i === queue.length - 1;
        var next = h("button", { class: "btn primary next", type: "button", text: last ? "Завершити" : "Далі →" });
        next.addEventListener("click", function () {
          i++;
          if (i >= queue.length) finish(correct, queue.length);
          else show();
        });
        view.appendChild(h("div", { class: "actions" }, [next]));
        next.focus();
      });
      slot.appendChild(view);
      var first = view.querySelector("input, textarea");
      if (first) first.focus();
    }

    show();
    return box;
  }

  function feedback(ok, html) {
    return h("div", { class: "feedback " + (ok === true ? "ok" : ok === false ? "bad" : "info") }, [
      h("strong", { text: ok === true ? "✓ Правильно" : ok === false ? "✗ Не зовсім" : "Модельні відповіді" }),
      html
    ]);
  }

  function modelsList(models) {
    return h("ul", { class: "models" }, models.map(function (m) {
      return h("li", {}, [sayBtn(m), h("span", { text: m })]);
    }));
  }

  function selfRate(view, done) {
    var row = h("div", { class: "selfrate" }, [
      h("span", { class: "muted", text: "Як вийшло?" }),
      h("button", { class: "btn ok", type: "button", text: "👍 Впорався", onclick: function () { row.remove(); done(true); } }),
      h("button", { class: "btn bad", type: "button", text: "👎 Ще треба попрацювати", onclick: function () { row.remove(); done(false); } })
    ]);
    view.appendChild(row);
  }

  var ITEM = {
    choice: function (it, _p, done) {
      var view = h("div", { class: "item" }, [h("p", { class: "q" }, [sayBtn(it.q.replace("___", "…")), " "].concat(gapText(it.q)))]);
      var opts = h("div", { class: "options" });
      var order = it.options.map(function (o, i) { return i; });
      if (it.options.length > 2) order = shuffle(order);
      order.forEach(function (oi, n) {
        var b = h("button", { class: "opt", type: "button" }, [h("kbd", { text: String(n + 1) }), it.options[oi]]);
        b.addEventListener("click", function () {
          if (view.dataset.done) return;
          view.dataset.done = "1";
          var ok = oi === it.answer;
          opts.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; });
          b.classList.add(ok ? "right" : "wrong");
          opts.children[order.indexOf(it.answer)].classList.add("right");
          var full = it.q.indexOf("___") >= 0 ? it.q.replace("___", it.options[it.answer]) : null;
          view.appendChild(feedback(ok, h("div", {}, [
            full ? h("p", {}, [sayBtn(full), " " + full]) : null,
            it.explain ? h("p", { class: "muted", text: it.explain }) : null
          ])));
          done(ok);
        });
        opts.appendChild(b);
      });
      view.appendChild(opts);
      view.tabIndex = -1;
      view.addEventListener("keydown", function (e) {
        var n = parseInt(e.key, 10);
        if (n >= 1 && n <= opts.children.length) opts.children[n - 1].click();
      });
      setTimeout(function () { view.focus(); }, 0);
      return view;
    },

    gap: function (it, _p, done) {
      var inputs = [];
      var q = h("p", { class: "q gapq" });
      it.q.split("___").forEach(function (part, i, arr) {
        q.appendChild(document.createTextNode(part));
        if (i < arr.length - 1) {
          var inp = h("input", { type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Пропуск " + (i + 1) });
          inp.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
          inputs.push(inp);
          q.appendChild(inp);
        }
      });
      var view = h("div", { class: "item" }, [q, it.hint ? h("p", { class: "hint", text: "Підказка: " + it.hint }) : null]);
      var btn = h("button", { class: "btn primary", type: "button", text: "Перевірити", onclick: check });
      var show = h("button", { class: "btn ghost", type: "button", text: "Показати відповідь", onclick: function () { inputs.forEach(function (x) { x.value = x.value || ""; }); check(true); } });
      var row = h("div", { class: "actions left" }, [btn, show]);
      view.appendChild(row);

      function check(giveUp) {
        if (view.dataset.done) return;
        if (giveUp !== true && inputs.some(function (x) { return !x.value.trim(); })) { inputs.filter(function (x) { return !x.value.trim(); })[0].focus(); return; }
        view.dataset.done = "1";
        var allOk = true;
        inputs.forEach(function (inp, i) {
          var ok = giveUp !== true && it.answers[i].some(function (a) { return same(a, inp.value); });
          if (!ok) allOk = false;
          inp.classList.add(ok ? "right" : "wrong");
          inp.disabled = true;
        });
        row.remove();
        var full = it.q;
        it.answers.forEach(function (a) { full = full.replace("___", a[0]); });
        view.appendChild(feedback(allOk, h("div", {}, [
          h("p", {}, [sayBtn(full), " " + full]),
          it.answers.some(function (a) { return a.length > 1; })
            ? h("p", { class: "muted", text: "Також приймається: " + it.answers.map(function (a) { return a.join(" / "); }).join("; ") })
            : null
        ])));
        done(allOk);
      }
      return view;
    },

    order: function (it, _p, done) {
      var pool = h("div", { class: "tokens pool" });
      var line = h("div", { class: "tokens line", "data-empty": "Натискай на слова в правильному порядку" });
      var view = h("div", { class: "item" }, [line, pool]);
      shuffle(it.words.map(function (w, i) { return { w: w, i: i }; })).forEach(function (t) {
        var b = h("button", { class: "tok", type: "button", text: t.w });
        b.addEventListener("click", function () {
          if (view.dataset.done) return;
          (b.parentNode === pool ? line : pool).appendChild(b);
        });
        pool.appendChild(b);
      });
      var row = h("div", { class: "actions left" }, [
        h("button", { class: "btn primary", type: "button", text: "Перевірити", onclick: function () { check(false); } }),
        h("button", { class: "btn ghost", type: "button", text: "Показати відповідь", onclick: function () { check(true); } })
      ]);
      view.appendChild(row);

      function check(giveUp) {
        if (!giveUp && pool.children.length) { pool.classList.add("shake"); setTimeout(function () { pool.classList.remove("shake"); }, 400); return; }
        view.dataset.done = "1";
        var built = Array.prototype.map.call(line.children, function (b) { return b.textContent; }).join(" ");
        var ok = !giveUp && [it.answer].concat(it.alts || []).some(function (a) { return same(a, built); });
        line.classList.add(ok ? "right" : "wrong");
        row.remove();
                var ans = /[.?!]$/.test(it.answer) ? it.answer : it.answer + ".";
        view.appendChild(feedback(ok, h("div", {}, [
          h("p", {}, [sayBtn(ans), " " + ans]),
          it.note ? h("p", { class: "muted", text: it.note }) : null
        ])));
        done(ok);
      }
      return view;
    },

    transform: function (it, _p, done) {
      var ta = h("textarea", { rows: "2", spellcheck: "true", placeholder: "Напиши своє речення…" });
      if (it.start) ta.value = it.start + " ";
      var view = h("div", { class: "item" }, [
        h("p", { class: "q" }, [sayBtn(it.q), " " + it.q]),
        ta
      ]);
      ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); check(); } });
      var row = h("div", { class: "actions left" }, [
        h("button", { class: "btn primary", type: "button", text: "Перевірити", onclick: check })
      ]);
      view.appendChild(row);

      function check() {
        if (view.dataset.done) return;
        view.dataset.done = "1";
        row.remove();
        ta.readOnly = true;
        var ok = it.models.some(function (m) { return same(m, ta.value); });
        if (ok) {
          ta.classList.add("right");
          view.appendChild(feedback(true, modelsList(it.models)));
          done(true);
        } else {
          view.appendChild(feedback(null, h("div", {}, [
            h("p", { class: "muted", text: "Порівняй зі своєю відповіддю. Можливі й інші правильні варіанти." }),
            modelsList(it.models)
          ])));
          selfRate(view, done);
        }
      }
      return view;
    },

    errors: function (it, _p, done) {
      var view = h("div", { class: "item" }, [h("p", { class: "q" }, [sayBtn(it.s), " " + it.s])]);
      var opts = h("div", { class: "options two" }, [
        h("button", { class: "opt", type: "button", text: "✓ Правильно" }),
        h("button", { class: "opt", type: "button", text: "✗ Є помилка" })
      ]);
      Array.prototype.forEach.call(opts.children, function (b, i) {
        b.addEventListener("click", function () {
          if (view.dataset.done) return;
          view.dataset.done = "1";
          var said = i === 0;
          var ok = said === it.ok;
          b.classList.add(ok ? "right" : "wrong");
          opts.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; });
          view.appendChild(feedback(ok, h("div", {}, [
            it.ok ? h("p", { text: "Речення правильне." }) : h("p", {}, [sayBtn(it.fix), " " + it.fix])
          ])));
          done(ok);
        });
      });
      view.appendChild(opts);
      return view;
    },

    speak: function (it, phrases, done) {
      var ta = h("textarea", { rows: "3", spellcheck: "true", placeholder: "Скажи вголос, а потім запиши (або надиктуй) свою відповідь англійською…" });
      var chips = h("div", { class: "phrases" }, (phrases || []).map(function (p) { return h("span", { class: "phrase", text: p.replace(/(ruminat|misconstru|grappl|wrestl)$/, "$1…") }); }));
      var view = h("div", { class: "item" }, [
        h("p", { class: "q" }, [sayBtn(it.q.replace("___", "…")), " "].concat(gapText(it.q))),
        phrases && phrases.length ? h("p", { class: "hint", text: "Цільові фрази (підсвітяться, коли використаєш):" }) : null,
        chips,
        ta
      ]);
      ta.addEventListener("input", function () {
        var v = " " + ta.value.toLowerCase().replace(/[’]/g, "'") + " ";
        Array.prototype.forEach.call(chips.children, function (c, i) {
          c.classList.toggle("used", v.indexOf(phrases[i].toLowerCase()) >= 0);
        });
      });
      var row = h("div", { class: "actions left" }, [
        micBtn(ta),
        h("button", { class: "btn primary", type: "button", text: "Показати модель", onclick: reveal })
      ]);
      view.appendChild(row);

      function reveal() {
        if (view.dataset.done) return;
        view.dataset.done = "1";
        row.remove();
        ta.readOnly = true;
        var used = chips.querySelectorAll(".used").length;
        view.appendChild(feedback(null, h("div", {}, [
          phrases && phrases.length ? h("p", { class: "muted", text: "Використано цільових фраз: " + used }) : null,
          modelsList(it.models)
        ])));
        selfRate(view, done);
      }
      return view;
    }
  };

  /* Match: click a term, then its meaning. */
  function matchGame(items, finish) {
    var left = shuffle(items), right = shuffle(items);
    var sel = null, mistakes = 0, solved = 0, wrongOn = {};
    var colA = h("div", { class: "col" }), colB = h("div", { class: "col" });
    var box = h("div", { class: "match" }, [
      h("p", { class: "muted", text: "Натисни на фразу ліворуч, потім на її пару праворуч." }),
      h("div", { class: "cols" }, [colA, colB])
    ]);

    left.forEach(function (it) {
      var b = h("button", { class: "card-btn", type: "button", text: it.a });
      b.addEventListener("click", function () {
        if (b.classList.contains("done")) return;
        colA.querySelectorAll(".sel").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel");
        sel = { el: b, it: it };
        speak(it.a);
      });
      colA.appendChild(b);
    });
    right.forEach(function (it) {
      var b = h("button", { class: "card-btn", type: "button", text: it.b });
      b.addEventListener("click", function () {
        if (!sel || b.classList.contains("done")) return;
        if (sel.it === it) {
          sel.el.classList.remove("sel");
          sel.el.classList.add("done");
          b.classList.add("done");
          sel = null;
          solved++;
          if (solved === items.length) setTimeout(function () { finish(items.length - Object.keys(wrongOn).length, items.length); }, 500);
        } else {
          mistakes++;
          wrongOn[sel.it.a] = 1;
          b.classList.add("wrong");
          setTimeout(function () { b.classList.remove("wrong"); }, 450);
        }
      });
      colB.appendChild(b);
    });
    return box;
  }

  /* Sort: pick a chip, then a category. Drag-and-drop works too. */
  function sortGame(ex, finish) {
    var sel = null, correct = 0, left = ex.items.length;
    var pool = h("div", { class: "tokens pool" });
    var bins = ex.categories.map(function (c, ci) {
      var bin = h("div", { class: "bin", "data-cat": ci }, [h("h4", { text: c }), h("div", { class: "tokens" })]);
      bin.addEventListener("click", function () { if (sel) drop(sel, ci, bin); });
      bin.addEventListener("dragover", function (e) { e.preventDefault(); bin.classList.add("over"); });
      bin.addEventListener("dragleave", function () { bin.classList.remove("over"); });
      bin.addEventListener("drop", function (e) {
        e.preventDefault();
        bin.classList.remove("over");
        var idx = e.dataTransfer.getData("text/plain");
        var tok = pool.querySelector('[data-i="' + idx + '"]');
        if (tok) drop(tok, ci, bin);
      });
      return bin;
    });
    shuffle(ex.items.map(function (it, i) { return { it: it, i: i }; })).forEach(function (o) {
      var t = h("button", { class: "tok", type: "button", draggable: "true", "data-i": o.i, text: o.it.text });
      t._item = o.it;
      t.addEventListener("click", function (e) {
        e.stopPropagation();
        pool.querySelectorAll(".sel").forEach(function (x) { x.classList.remove("sel"); });
        t.classList.add("sel");
        sel = t;
      });
      t.addEventListener("dragstart", function (e) { e.dataTransfer.setData("text/plain", String(o.i)); });
      pool.appendChild(t);
    });

    function drop(tok, ci, bin) {
      var ok = tok._item.cat === ci;
      tok.classList.remove("sel");
      tok.draggable = false;
      tok.classList.add("placed");
      if (ok) correct++;
      tok.classList.add(ok ? "right" : "wrong");
      var target = ok ? bin : bins[tok._item.cat];
      if (!ok) tok.title = "Правильно: " + ex.categories[tok._item.cat];
      target.querySelector(".tokens").appendChild(tok);
      sel = null;
      left--;
      if (!left) setTimeout(function () { finish(correct, ex.items.length); }, 700);
    }

    return h("div", { class: "sort" }, [
      h("p", { class: "muted", text: "Обери слово, потім категорію (або перетягни). Неправильні відповіді переїдуть у правильний кошик червоним." }),
      pool,
      h("div", { class: "bins n" + ex.categories.length }, bins)
    ]);
  }

  /* Flashcards with a simple Leitner box per card (1..5). */
  function cardKey(scope, c) { return scope + "|" + c.front; }

  function cardDeck(cards, scope, finish, opts) {
    opts = opts || {};
    var queue = shuffle(cards.map(function (c) { return { c: c, key: c._key || cardKey(scope, c) }; }));
    queue.sort(function (a, b) { return (state.cards[a.key] || 0) - (state.cards[b.key] || 0); });
    if (opts.limit) queue = queue.slice(0, opts.limit);
    var total = queue.length, firstTry = 0, seen = {};
    var box = h("div", { class: "deck" });
    var prog = h("div", { class: "bar big" }, [h("i", {})]);
    var count = h("span", { class: "count muted" });
    var slot = h("div", {});
    box.appendChild(h("div", { class: "step-top" }, [prog, count]));
    box.appendChild(slot);

    function show() {
      if (!queue.length) return finish(firstTry, total);
      var cur = queue[0];
      var done = total - queue.length;
      prog.firstChild.style.width = (done / total) * 100 + "%";
      count.textContent = "залишилось " + queue.length;
      var lvl = state.cards[cur.key] || 0;
      var card = h("div", { class: "flip", tabindex: "0", role: "button", "aria-label": "Перевернути картку" }, [
        h("div", { class: "face front" }, [
          h("span", { class: "level", title: "Рівень знання", text: "●●●●●".slice(0, lvl) + "○○○○○".slice(lvl) }),
          h("b", { text: cur.c.front }),
          h("small", { class: "muted", text: "натисни, щоб перевернути" })
        ]),
        h("div", { class: "face back" }, [
          h("b", { text: cur.c.back }),
          cur.c.ex ? h("p", {}, [sayBtn(cur.c.ex), " " + cur.c.ex]) : null
        ])
      ]);
      var rate = h("div", { class: "actions hidden" }, [
        h("button", { class: "btn bad", type: "button", text: "Ще не знаю", onclick: function () { grade(false); } }),
        h("button", { class: "btn ok", type: "button", text: "Знаю ✓", onclick: function () { grade(true); } })
      ]);
      function flip() {
        card.classList.toggle("flipped");
        rate.classList.remove("hidden");
        if (card.classList.contains("flipped")) speak(cur.c.front);
      }
      card.addEventListener("click", flip);
      card.addEventListener("keydown", function (e) { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } });
      function grade(ok) {
        queue.shift();
        var l = state.cards[cur.key] || 0;
        if (ok) {
          if (!seen[cur.key]) firstTry++;
          state.cards[cur.key] = Math.min(5, l + 1);
        } else {
          state.cards[cur.key] = Math.max(0, l - 1);
          seen[cur.key] = 1;
          queue.splice(Math.min(queue.length, 3), 0, cur); // see it again soon
        }
        save();
        show();
      }
      slot.innerHTML = "";
      slot.appendChild(card);
      slot.appendChild(rate);
      card.focus();
    }

    show();
    return box;
  }

  function allCards() {
    var out = [];
    DATA.topics.forEach(function (t) {
      t.exercises.forEach(function (ex, i) {
        if (ex.type !== "cards") return;
        ex.items.forEach(function (c) { out.push({ front: c.front, back: c.back, ex: c.ex, _key: cardKey(t.id + ":" + i, c) }); });
      });
    });
    return out;
  }

  function countCards() {
    var cards = allCards();
    return { total: cards.length, known: cards.filter(function (c) { return (state.cards[c._key] || 0) >= 3; }).length };
  }

  function renderAllCards() {
    var stage = h("div", {});
    shell([
      h("div", { class: "topic-head" }, [h("div", {}, [
        h("h1", { text: "Усі картки" }),
        h("p", { class: "muted", text: "20 карток, найменш знайомі першими. Картка вважається вивченою на рівні ●●●." })
      ])]),
      h("div", { class: "panel" }, [stage])
    ], "Картки");
    function start() {
      stage.innerHTML = "";
      stage.appendChild(cardDeck(allCards(), "all", function (c, t) {
        touchStreak(); save();
        stage.innerHTML = "";
        stage.appendChild(resultCard(c, t, start, null));
      }, { limit: 20 }));
    }
    start();
  }

  /* Mixed test: random auto-checked items from every topic. */
  function renderMix() {
    var stage = h("div", {});
    shell([
      h("div", { class: "topic-head" }, [h("div", {}, [
        h("h1", { text: "Змішаний тест" }),
        h("p", { class: "muted", text: "15 випадкових завдань з граматики й лексики. Перевіряється автоматично." })
      ])]),
      h("div", { class: "panel" }, [stage])
    ], "Тест");
    function start() {
      var pool = [];
      DATA.topics.forEach(function (t) {
        t.exercises.forEach(function (ex) {
          if (!AUTO_CHECKED[ex.type]) return;
          ex.items.forEach(function (it) { pool.push({ type: ex.type, item: it, ref: t.ref }); });
        });
      });
      var picked = shuffle(pool).slice(0, 15);
      stage.innerHTML = "";
      stage.appendChild(stepper(picked, function (c, total) {
        recordScore("mix", c, total);
        stage.innerHTML = "";
        stage.appendChild(resultCard(c, total, start, null));
      }));
    }
    start();
  }

  route();
})();
