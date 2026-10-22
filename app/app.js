(function () {
  "use strict";

  var ES = window.ES;
  var STORE_KEY = "english-school.v2";
  var OLD_KEY = "english-school.module1.v1";
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
      var old = localStorage.getItem(OLD_KEY);
      if (old && ES.topicMap) {
        var migrated = ES.core.migrateV1(JSON.parse(old), ES.topicMap);
        localStorage.setItem(STORE_KEY, JSON.stringify(migrated));
        return migrated;
      }
    } catch (e) { /* private mode etc. */ }
    return emptyState();
  }

  function emptyState() {
    return { scores: {}, cards: {}, mistakes: {}, streak: { day: null, count: 0 } };
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

  /* Mistakes: every wrong answer in a step-by-step exercise is remembered by
     its item key ("lesson:mode:exercise:item") until it is answered right twice in a row. */
  var CLEAR_AFTER = 2;

  function noteAnswer(id, ok) {
    var m = state.mistakes || (state.mistakes = {});
    if (!ok) {
      var prev = m[id];
      m[id] = { misses: (prev ? prev.misses : 0) + 1, streak: 0, at: Date.now() };
    } else if (m[id]) {
      m[id].streak++;
      if (m[id].streak >= CLEAR_AFTER) delete m[id];
    } else {
      return;
    }
    save();
  }

  /* ------------------------------------------------------------ content */

  var MODES = ES.core.MODES;
  var MODE_LABELS = { learn: "Learn · вивчаю", homework: "Homework · домашка", refresh: "Refresh · повторення" };
  var MODE_SHORT = { learn: "L", homework: "H", refresh: "R" };

  function allLessons() { return ES.order.map(function (id) { return ES.lessons[id]; }); }
  function getModule(n) { return ES.modules.filter(function (m) { return String(m.id) === String(n); })[0]; }
  function moduleOf(lesson) { return ES.modules.filter(function (m) { return m.units.indexOf(lesson.unit) >= 0; })[0]; }
  function moduleLessons(mod) { return allLessons().filter(function (l) { return mod.units.indexOf(l.unit) >= 0; }); }
  function modeData(lesson, mode) { return lesson[mode] || { theory: [], exercises: [] }; }

  /* Calls fn(lesson, mode, ex, exIdx) for every exercise of the given lessons. */
  function eachExercise(lessons, fn) {
    lessons.forEach(function (l) {
      MODES.forEach(function (m) {
        (modeData(l, m).exercises || []).forEach(function (ex, i) { fn(l, m, ex, i); });
      });
    });
  }

  function refOf(key) {
    // "1A:learn:2:3" → "1A/learn/ex2/i3"
    var p = key.split(":");
    return p[0] + "/" + p[1] + (p.length > 2 ? "/ex" + p[2] : "") + (p.length > 3 ? "/i" + p[3] : "");
  }

  /* Resolve stored mistakes back to items; keys whose content no longer exists are skipped. */
  function mistakeItems(lessons) {
    var out = [];
    var m = state.mistakes || {};
    eachExercise(lessons || allLessons(), function (l, mode, ex, ei) {
      if (!ITEM[ex.type]) return;
      ex.items.forEach(function (it, ii) {
        var id = ES.core.itemKey(l.id, mode, ei, ii);
        if (m[id]) out.push({ id: id, type: ex.type, item: it, phrases: ex.phrases, lesson: l, mode: mode, rec: m[id] });
      });
    });
    return out;
  }

  /* Average best score over a lesson's exercises (one mode, or all modes). */
  function lessonProgress(lesson, mode) {
    var sum = 0, n = 0;
    (mode ? [mode] : MODES).forEach(function (m) {
      (modeData(lesson, m).exercises || []).forEach(function (ex, i) {
        var sc = state.scores[ES.core.scoreKey(lesson.id, m, i)];
        sum += sc ? sc.best : 0;
        n++;
      });
    });
    return n ? Math.round(sum / n) : 0;
  }

  function lessonsProgress(lessons) {
    var withEx = lessons.filter(function (l) { var c = ES.core.lessonModes(l); return c.learn + c.homework + c.refresh; });
    return withEx.length ? Math.round(withEx.reduce(function (s, l) { return s + lessonProgress(l); }, 0) / withEx.length) : 0;
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

  var norm = ES.core.norm, same = ES.core.same;

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
    var hash = location.hash.replace(/^#\/?/, "").replace(/\?.*$/, "");
    var parts = hash.split("/");
    window.scrollTo(0, 0);
    if (parts[0] === "l" && parts[1]) return renderLesson(parts[1], parts[2], parts[3]);
    if (parts[0] === "m" && parts[1]) {
      var mod = getModule(parts[1]);
      if (mod && parts[2] === "mix") return renderMix(mod);
      if (mod && parts[2] === "cards") return renderAllCards(mod);
      if (mod && parts[2] === "mistakes") return renderMistakes(mod);
      if (mod) return renderModule(mod);
    }
    if (parts[0] === "mistakes") return renderMistakes(null);
    renderHome();
  }

  window.addEventListener("hashchange", route);

  function shell(children, crumbs) {
    app.innerHTML = "";
    var bar = h("header", { class: "topbar" }, [
      h("a", { href: "#/", class: "brand" }, [h("span", { class: "logo" }, ["ES"]), " English School"]),
      crumbs ? h("span", { class: "crumb" }, crumbs.map(function (c, i) {
        return h(c.href ? "a" : "span", { href: c.href || null, text: (i ? " › " : "") + c.text });
      })) : null,
      h("span", { class: "spacer" }),
      ES.debug ? ES.debug.button() : null
    ]);
    app.appendChild(bar);
    var main = h("main", { class: "wrap" }, children);
    app.appendChild(main);
    return main;
  }

  function moduleCrumb(mod) { return { text: mod.title, href: "#/m/" + mod.id }; }

  /* ------------------------------------------------------------ home */

  function renderHome() {
    var lessons = allLessons();
    var cards = countCards(lessons);
    var nMistakes = mistakeItems(lessons).length;

    shell([
      h("section", { class: "hero" }, [
        h("div", {}, [
          h("h1", { text: "Roadmap C1-C2" }),
          h("p", { class: "muted", text: "Уроки як у книжці. У кожному уроці три режими: Learn — вивчаємо за Student's Book, Homework — домашка з Workbook, Refresh — повторення всього разом." })
        ]),
        h("div", { class: "stats" }, [
          stat(lessonsProgress(lessons) + "%", "пройдено"),
          stat(String((state.streak && state.streak.count) || 0), "днів поспіль"),
          stat(String(cards.known) + "/" + cards.total, "карток вивчено")
        ])
      ]),
      nMistakes ? h("section", { class: "quick" }, [
        h("a", { class: "quick-card alert", href: "#/mistakes" }, [
          h("strong", { text: "✗ Робота над помилками · " + nMistakes }),
          h("span", { text: "Питання з усіх модулів, на які ти відповів неправильно" })
        ])
      ]) : null,
      h("h2", { text: "Модулі" }),
      h("div", { class: "grid" }, ES.modules.map(moduleCard)),
      h("p", { class: "footnote muted" }, [
        "Прогрес зберігається лише в цьому браузері. ",
        h("button", { class: "link", type: "button", onclick: resetProgress, text: "Скинути прогрес" })
      ])
    ]);
  }

  function stat(value, label) {
    return h("div", { class: "stat" }, [h("b", { text: value }), h("span", { text: label })]);
  }

  function moduleCard(mod) {
    var lessons = moduleLessons(mod);
    var pct = lessonsProgress(lessons);
    var units = mod.units.length > 1 ? "Юніти " + mod.units[0] + "–" + mod.units[mod.units.length - 1] : "Юніт " + mod.units[0];
    return h("a", { class: "topic", href: "#/m/" + mod.id, "data-ref": "module" + mod.id }, [
      h("span", { class: "ref grammar", text: "M" + mod.id }),
      h("h3", { text: mod.title }),
      h("p", { class: "muted", text: units + " · уроків: " + lessons.length }),
      h("div", { class: "topic-foot" }, [h("span", { class: "types", text: lessons.map(function (l) { return l.id; }).join(" ") }), h("span", { class: "pct", text: pct + "%" })]),
      h("div", { class: "bar" }, [h("i", { style: "width:" + pct + "%" })])
    ]);
  }

  function resetProgress() {
    if (!confirm("Скинути весь прогрес?")) return;
    state = emptyState();
    save();
    renderHome();
  }

  /* ------------------------------------------------------------ module */

  function renderModule(mod) {
    var lessons = moduleLessons(mod);
    var nMistakes = mistakeItems(lessons).length;
    var cards = countCards(lessons);
    var units = mod.units.map(function (u) {
      var ls = lessons.filter(function (l) { return l.unit === u; });
      return h("section", { class: "unit" }, [
        h("h2", { text: "Unit " + u }),
        ls.length ? h("div", { class: "grid" }, ls.map(lessonCard)) : h("p", { class: "muted", text: "Уроки цього юніту ще не додані." })
      ]);
    });
    shell([
      h("section", { class: "hero" }, [
        h("div", {}, [
          h("h1", { text: mod.title }),
          h("p", { class: "muted", text: "Юніти " + mod.units.join(", ") + ". Обери урок і режим." })
        ]),
        h("div", { class: "stats" }, [
          stat(lessonsProgress(lessons) + "%", "пройдено"),
          stat(String(cards.known) + "/" + cards.total, "карток вивчено")
        ])
      ]),
      h("section", { class: "quick" }, [
        h("a", { class: "quick-card", href: "#/m/" + mod.id + "/mix" }, [
          h("strong", { text: "⚡ Змішаний тест" }),
          h("span", { text: "15 випадкових завдань з уроків модуля" })
        ]),
        h("a", { class: "quick-card", href: "#/m/" + mod.id + "/cards" }, [
          h("strong", { text: "▣ Картки модуля" }),
          h("span", { text: "Інтервальне повторення лексики й фраз" })
        ]),
        h("a", { class: "quick-card" + (nMistakes ? " alert" : ""), href: "#/m/" + mod.id + "/mistakes" }, [
          h("strong", { text: "✗ Робота над помилками" + (nMistakes ? " · " + nMistakes : "") }),
          h("span", { text: nMistakes ? "Питання, на які ти відповів неправильно" : "Помилок поки немає. Так тримати!" })
        ])
      ])
    ].concat(units), [moduleCrumb(mod)]);
  }

  function lessonCard(l) {
    var pct = lessonProgress(l);
    var counts = ES.core.lessonModes(l);
    return h("a", { class: "topic", href: "#/l/" + l.id, "data-ref": l.id }, [
      h("span", { class: "ref " + (l.letter === "D" ? "vocab" : "grammar"), text: l.id }),
      h("h3", { text: l.title }),
      h("p", { class: "muted", text: l.uk || l.goal || "" }),
      h("div", { class: "topic-foot" }, [
        h("span", { class: "modes" }, MODES.map(function (m) {
          return h("span", { class: "mode-pill" + (counts[m] ? "" : " empty"), title: MODE_LABELS[m], text: MODE_SHORT[m] + " " + (counts[m] ? lessonProgress(l, m) + "%" : "–") });
        })),
        h("span", { class: "pct", text: pct + "%" })
      ]),
      h("div", { class: "bar" }, [h("i", { style: "width:" + pct + "%" })])
    ]);
  }

  /* ------------------------------------------------------------ lesson */

  function renderLesson(id, mode, tab) {
    var lesson = ES.lessons[id];
    if (!lesson) return renderHome();
    if (MODES.indexOf(mode) < 0) mode = "learn";
    var data = modeData(lesson, mode);
    var exercises = data.exercises || [];
    var hasTheory = !!(data.theory && data.theory.length);
    var active = tab == null ? (hasTheory || !exercises.length ? "theory" : "0") : tab;
    var base = "#/l/" + lesson.id + "/" + mode;
    var mod = moduleOf(lesson);

    var modes = h("nav", { class: "modes-nav" }, MODES.map(function (m) {
      var n = ES.core.lessonModes(lesson)[m];
      return h("a", { href: "#/l/" + lesson.id + "/" + m, class: (m === mode ? "on" : "") + (n ? "" : " empty"), "data-ref": lesson.id + "/" + m, text: MODE_LABELS[m] });
    }));

    var tabs = h("nav", { class: "tabs" }, [
      hasTheory ? tabLink(base, "theory", "📘 Правило", active) : null
    ].concat(exercises.map(function (ex, i) {
      var sc = state.scores[ES.core.scoreKey(lesson.id, mode, i)];
      return tabLink(base, String(i), TYPE_ICONS[ex.type] + " " + (ex.src ? ES.core.srcLabel(ex.src) + " · " : "") + TYPE_LABELS[ex.type] + (sc ? " · " + sc.best + "%" : ""), active);
    })));

    var body = h("div", { class: "panel", "data-ref": lesson.id + "/" + mode });
    var main = shell([
      h("div", { class: "topic-head", "data-ref": lesson.id }, [
        h("span", { class: "ref " + (lesson.letter === "D" ? "vocab" : "grammar"), text: lesson.id }),
        h("div", {}, [
          h("h1", { text: lesson.title }),
          h("p", { class: "muted", text: lesson.uk || "" }),
          lessonFocus(lesson)
        ])
      ]),
      modes,
      tabs,
      body
    ], [moduleCrumb(mod), { text: lesson.id }]);

    if (active === "theory") {
      if (hasTheory) body.appendChild(renderTheory(data.theory, lesson.id + "/" + mode));
      else body.appendChild(h("p", { class: "muted empty-mode", text: "Для цього режиму ще немає вправ." }));
      if (exercises.length) body.appendChild(h("div", { class: "actions" }, [
        h("a", { class: "btn primary", href: base + "/0", text: "До вправ →" })
      ]));
    } else {
      var idx = parseInt(active, 10);
      var ex = exercises[idx];
      if (!ex) return renderLesson(id, mode);
      var next = idx + 1 < exercises.length ? base + "/" + (idx + 1) : nextMode(lesson, mode);
      body.appendChild(renderExercise(ex, ES.core.scoreKey(lesson.id, mode, idx), next, "#/m/" + mod.id));
    }
    var on = main.querySelector(".tabs .on");
    if (on && on.scrollIntoView) on.scrollIntoView({ block: "nearest", inline: "center" });
  }

  function nextMode(lesson, mode) {
    var rest = MODES.slice(MODES.indexOf(mode) + 1).filter(function (m) { return ES.core.lessonModes(lesson)[m]; });
    return rest.length ? "#/l/" + lesson.id + "/" + rest[0] : null;
  }

  function lessonFocus(lesson) {
    var f = lesson.focus || {};
    var rows = [["Goal", lesson.goal], ["Grammar", f.grammar], ["Vocabulary", f.vocab], ["Pronunciation", f.pron]].filter(function (r) { return r[1]; });
    if (!rows.length) return null;
    return h("p", { class: "focus" }, rows.map(function (r) { return h("span", {}, [h("b", { text: r[0] + ": " }), r[1]]); }));
  }

  function tabLink(base, key, label, active) {
    return h("a", {
      href: base + (key === "theory" ? "" : "/" + key),
      class: key === active ? "on" : null,
      text: label
    });
  }

  function renderTheory(blocks, ref) {
    return h("div", { class: "theory" }, blocks.map(function (b, bi) {
      var kids = [h("h3", { text: b.h })];
      if (b.p) kids.push(h("p", { text: b.p }));
      if (b.table) {
        kids.push(h("table", {}, b.table.map(function (row) {
          return h("tr", {}, row.map(function (cell, i) {
            return h(i === 0 ? "th" : "td", { text: cell });
          }));
        })));
      }
      if (b.list) kids.push(h("ul", {}, b.list.map(function (li) { return h("li", { text: li }); })));
      if (b.ex) {
        kids.push(h("div", { class: "examples" }, b.ex.map(function (e) {
          return h("div", { class: "example" }, [sayBtn(e), h("span", { text: e })]);
        })));
      }
      if (b.links) {
        kids.push(h("ul", { class: "links" }, b.links.map(function (lk) {
          return h("li", {}, [h("a", { href: lk.url, target: "_blank", rel: "noopener", text: lk.title }), lk.note ? h("span", { class: "muted", text: " — " + lk.note }) : null]);
        })));
      }
      return h("section", { class: "rule", "data-ref": ref + "/theory" + bi }, kids);
    }));
  }

  /* ------------------------------------------------------------ exercises */

  function renderExercise(ex, key, nextHref, backHref) {
    var wrap = h("div", { class: "exercise", "data-ref": refOf(key) }, [
      h("div", { class: "ex-head" }, [
        h("span", { class: "chip", text: TYPE_ICONS[ex.type] + " " + TYPE_LABELS[ex.type] }),
        h("h2", { text: ex.title })
      ]),
      ex.intro ? h("p", { class: "muted", text: ex.intro }) : null,
      ES.core.srcUrl(ex.src) ? h("p", { class: "muted src" }, ["Додаткова вправа за темою: ", h("a", { href: ES.core.srcUrl(ex.src), target: "_blank", rel: "noopener", text: ES.core.srcUrl(ex.src).replace(/^https?:\/\/(www\.)?/, "").split("/")[0] })]) : null
    ]);
    var stage = h("div", {});
    wrap.appendChild(stage);

    function finish(correct, total) {
      recordScore(key, correct, total);
      stage.innerHTML = "";
      stage.appendChild(resultCard(correct, total, function () {
        stage.innerHTML = "";
        start();
      }, nextHref, backHref));
    }

    function start() {
      if (ex.type === "match") return stage.appendChild(matchGame(ex.items, finish));
      if (ex.type === "sort") return stage.appendChild(sortGame(ex, finish));
      if (ex.type === "cards") return stage.appendChild(cardDeck(ex.items, key, finish));
      var items = ex.items.map(function (it, i) { return { id: key + ":" + i, type: ex.type, item: it, phrases: ex.phrases }; });
      if (ex.type !== "speak" && ex.type !== "transform") items = shuffle(items);
      stage.appendChild(stepper(items, finish));
    }

    start();
    return wrap;
  }

  function resultCard(correct, total, again, nextHref, backHref) {
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var msg = pct >= 90 ? "Чудово! 🎉" : pct >= 70 ? "Добре! Ще трохи практики." : pct >= 40 ? "Непогано. Повтори правило і спробуй знову." : "Варто перечитати правило.";
    return h("div", { class: "result" }, [
      h("div", { class: "ring", style: "--p:" + pct }, [h("b", { text: pct + "%" })]),
      h("h3", { text: msg }),
      h("p", { class: "muted", text: correct + " з " + total + " правильно" }),
      h("div", { class: "actions" }, [
        h("button", { class: "btn", type: "button", onclick: again, text: "↻ Ще раз" }),
        nextHref ? h("a", { class: "btn primary", href: nextHref, text: "Наступна вправа →" }) : h("a", { class: "btn primary", href: backHref || "#/", text: "До уроків" })
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
      if (q.label) slot.appendChild(h("p", { class: "from muted", text: q.label }));
      var view = ITEM[q.type](q.item, q.phrases, function (ok) {
        if (ok) correct++;
        if (q.id) noteAnswer(q.id, ok);
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
      if (q.id) view.setAttribute("data-ref", refOf(q.id));
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

  function allCards(lessons) {
    var out = [];
    eachExercise(lessons, function (l, mode, ex, i) {
      if (ex.type !== "cards") return;
      var scope = ES.core.scoreKey(l.id, mode, i);
      ex.items.forEach(function (c) { out.push({ front: c.front, back: c.back, ex: c.ex, _key: cardKey(scope, c) }); });
    });
    // The same phrase can appear in several modes of a lesson; keep one card per front.
    var seen = {};
    return out.filter(function (c) { var k = c.front.toLowerCase(); if (seen[k]) return false; seen[k] = 1; return true; });
  }

  function countCards(lessons) {
    var cards = allCards(lessons);
    return { total: cards.length, known: cards.filter(function (c) { return (state.cards[c._key] || 0) >= 3; }).length };
  }

  function renderAllCards(mod) {
    var stage = h("div", {});
    shell([
      h("div", { class: "topic-head" }, [h("div", {}, [
        h("h1", { text: "Картки · " + mod.title }),
        h("p", { class: "muted", text: "20 карток, найменш знайомі першими. Картка вважається вивченою на рівні ●●●." })
      ])]),
      h("div", { class: "panel" }, [stage])
    ], [moduleCrumb(mod), { text: "Картки" }]);
    function start() {
      var cards = allCards(moduleLessons(mod));
      stage.innerHTML = "";
      if (!cards.length) return stage.appendChild(h("p", { class: "muted", text: "У цьому модулі ще немає карток." }));
      stage.appendChild(cardDeck(cards, "all", function (c, t) {
        touchStreak(); save();
        stage.innerHTML = "";
        stage.appendChild(resultCard(c, t, start, null, "#/m/" + mod.id));
      }, { limit: 20 }));
    }
    start();
  }

  /* Mixed test: random auto-checked items from every lesson of the module. */
  function renderMix(mod) {
    var stage = h("div", {});
    shell([
      h("div", { class: "topic-head" }, [h("div", {}, [
        h("h1", { text: "Змішаний тест · " + mod.title }),
        h("p", { class: "muted", text: "15 випадкових завдань з граматики й лексики модуля. Перевіряється автоматично." })
      ])]),
      h("div", { class: "panel" }, [stage])
    ], [moduleCrumb(mod), { text: "Тест" }]);
    function start() {
      var pool = [];
      eachExercise(moduleLessons(mod), function (l, mode, ex, ei) {
        if (!AUTO_CHECKED[ex.type]) return;
        ex.items.forEach(function (it, ii) { pool.push({ id: ES.core.itemKey(l.id, mode, ei, ii), type: ex.type, item: it, label: l.id + " · " + l.title }); });
      });
      stage.innerHTML = "";
      if (!pool.length) return stage.appendChild(h("p", { class: "muted", text: "У цьому модулі ще немає завдань з автоперевіркою." }));
      stage.appendChild(stepper(shuffle(pool).slice(0, 15), function (c, total) {
        recordScore("mix:" + mod.id, c, total);
        stage.innerHTML = "";
        stage.appendChild(resultCard(c, total, start, null, "#/m/" + mod.id));
      }));
    }
    start();
  }

  /* Mistakes review: the most-missed, oldest items first, 15 per round. */
  function renderMistakes(mod) {
    var stage = h("div", {});
    var scope = mod ? moduleLessons(mod) : allLessons();
    var back = mod ? "#/m/" + mod.id : "#/";
    var list = mistakeItems(scope);
    shell([
      h("div", { class: "topic-head" }, [h("div", {}, [
        h("h1", { text: "Робота над помилками" + (mod ? " · " + mod.title : "") }),
        h("p", { class: "muted", text: "Сюди потрапляють завдання, на які ти відповів неправильно. Питання зникає зі списку, коли відповіси правильно " + CLEAR_AFTER + " рази поспіль." })
      ])]),
      h("div", { class: "panel" }, [stage])
    ], mod ? [moduleCrumb(mod), { text: "Помилки" }] : [{ text: "Помилки" }]);

    function overview() {
      list = mistakeItems(scope);
      stage.innerHTML = "";
      if (!list.length) {
        stage.appendChild(h("div", { class: "result" }, [
          h("h3", { text: "Помилок немає 🎉" }),
          h("p", { class: "muted", text: "Коли помилишся у вправі чи змішаному тесті, завдання з'явиться тут." }),
          h("div", { class: "actions" }, [h("a", { class: "btn primary", href: back, text: "Назад" })])
        ]));
        return;
      }
      var groups = [];
      list.forEach(function (x) {
        var g = groups.filter(function (b) { return b.lesson === x.lesson && b.mode === x.mode; })[0];
        if (!g) groups.push(g = { lesson: x.lesson, mode: x.mode, n: 0 });
        g.n++;
      });
      stage.appendChild(h("div", { class: "mistake-topics" }, groups.map(function (g) {
        return h("a", { class: "mistake-topic", href: "#/l/" + g.lesson.id + "/" + g.mode }, [
          h("span", { class: "ref grammar", text: g.lesson.id }),
          h("span", { class: "name", text: g.lesson.title + " · " + g.mode }),
          h("b", { text: String(g.n) })
        ]);
      })));
      stage.appendChild(h("div", { class: "actions" }, [
        h("button", { class: "btn primary", type: "button", onclick: start, text: "Почати повторення (" + Math.min(15, list.length) + ")" })
      ]));
    }

    function start() {
      var picked = shuffle(list);
      picked.sort(function (a, b) { return (b.rec.misses - a.rec.misses) || (a.rec.at - b.rec.at); });
      picked = picked.slice(0, 15).map(function (x) {
        return { id: x.id, type: x.type, item: x.item, phrases: x.phrases, label: x.lesson.id + " · " + x.lesson.title + " · " + x.mode };
      });
      stage.innerHTML = "";
      stage.appendChild(stepper(picked, function (c, total) {
        recordScore("mistakes", c, total);
        var left = mistakeItems(scope).length;
        stage.innerHTML = "";
        var card = resultCard(c, total, overview, null, back);
        card.insertBefore(h("p", { class: "muted", text: left ? "У списку залишилось помилок: " + left : "Список помилок порожній!" }), card.querySelector(".actions"));
        stage.appendChild(card);
      }));
    }

    overview();
  }

  route();
})();
