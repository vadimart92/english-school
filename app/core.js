/*
 * Pure helpers shared by the app (window.ES.core) and the Node tests (module.exports).
 */
(function (root) {
  "use strict";

  var MODES = ["learn", "homework", "refresh"];
  var TYPES = ["choice", "gap", "order", "transform", "errors", "cards", "match", "sort", "speak"];

  /* ------------------------------------------------------------ answers */

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

  /* ------------------------------------------------------------ keys */

  function scoreKey(lessonId, mode, exIdx) { return lessonId + ":" + mode + ":" + exIdx; }
  function itemKey(lessonId, mode, exIdx, itemIdx) { return scoreKey(lessonId, mode, exIdx) + ":" + itemIdx; }

  function lessonModes(lesson) {
    var out = {};
    MODES.forEach(function (m) { out[m] = lesson[m] && lesson[m].exercises ? lesson[m].exercises.length : 0; });
    return out;
  }

  /* ------------------------------------------------------------ migration */

  /* Old progress (module1.v1) used "<topicId>:<exIdx>" keys. Each topic now lives in a
     lesson's refresh mode, optionally after `offset` exercises of another topic. */
  function migrateV1(old, map) {
    function target(topicId, exIdx) {
      var m = map[topicId];
      if (!m) return null;
      if (typeof m === "string") m = { lesson: m, offset: 0 };
      return scoreKey(m.lesson, "refresh", Number(exIdx) + (m.offset || 0));
    }
    var out = { scores: {}, cards: {}, mistakes: {}, streak: old.streak || { day: null, count: 0 } };
    Object.keys(old.scores || {}).forEach(function (k) {
      var p = k.split(":");
      var t = p.length === 2 ? target(p[0], p[1]) : null;
      if (t) out.scores[t] = old.scores[k];
    });
    Object.keys(old.cards || {}).forEach(function (k) {
      var bar = k.indexOf("|");
      var p = bar > 0 ? k.slice(0, bar).split(":") : [];
      var t = p.length === 2 ? target(p[0], p[1]) : null;
      // Keys of decks we cannot place (e.g. "all|…") are kept as they are.
      out.cards[t ? t + k.slice(bar) : k] = old.cards[k];
    });
    Object.keys(old.mistakes || {}).forEach(function (k) {
      var p = k.split(":");
      var t = p.length === 3 ? target(p[0], p[1]) : null;
      if (t) out.mistakes[t + ":" + p[2]] = old.mistakes[k];
    });
    return out;
  }

  /* ------------------------------------------------------------ validation */

  function validateExercise(ex, where) {
    var errs = [];
    function err(msg) { errs.push(where + ": " + msg); }
    if (TYPES.indexOf(ex.type) < 0) { err("unknown type " + ex.type); return errs; }
    if (!ex.title) err("missing title");
    if (ex.type === "sort") {
      if (!ex.categories || !ex.categories.length) err("missing categories");
      else (ex.items || []).forEach(function (it, i) {
        if (!(it.cat >= 0 && it.cat < ex.categories.length)) err("item " + i + " cat out of range");
      });
    }
    if (!ex.items || !ex.items.length) { err("no items"); return errs; }
    ex.items.forEach(function (it, i) {
      var w = "item " + i + " ";
      switch (ex.type) {
        case "choice":
          if (!it.q || !it.options || it.options.length < 2) err(w + "needs q and options");
          else if (!(it.answer >= 0 && it.answer < it.options.length)) err(w + "answer out of range");
          break;
        case "gap":
          var n = String(it.q || "").split("___").length - 1;
          if (!it.answers || n !== it.answers.length) err(w + "gap count mismatch (" + n + " vs " + (it.answers ? it.answers.length : 0) + ")");
          else if (!it.answers.every(Array.isArray)) err(w + "answers must be arrays of alternatives");
          else if (it.answers.some(function (a) { return !a.length || a.some(function (x) { return !String(x).trim(); }); })) err(w + "empty answer");
          // "e___" shows the letter outside the input while the key holds the whole word.
          if (!it.glued && /[A-Za-z]___|___[A-Za-z]/.test(it.q || "")) err(w + "letters glued to ___ (move them to hint, or set glued: true)");
          break;
        case "order":
          if (!it.words || !it.words.length || !it.answer) err(w + "needs words and answer");
          else if (!same(it.words.join(" "), it.answer) &&
                   norm(it.words.join(" ")).split(" ").sort().join(" ") !== norm(it.answer).split(" ").sort().join(" ")) err(w + "words do not build answer");
          break;
        case "transform":
          if (!it.q) err(w + "missing q");
          if (!it.models || !it.models.length) err(w + "missing models");
          break;
        case "speak":
          if (!it.q) err(w + "missing q");
          if (!it.models || !it.models.length) err(w + "missing models");
          break;
        case "errors":
          if (!it.s || typeof it.ok !== "boolean") err(w + "needs s and ok");
          else if (!it.ok && !it.fix) err(w + "missing fix");
          break;
        case "cards":
          if (!it.front || !it.back) err(w + "needs front and back");
          break;
        case "match":
          if (!it.a || !it.b) err(w + "needs a and b");
          break;
        case "sort":
          if (!it.text) err(w + "missing text");
          break;
      }
    });
    return errs;
  }

  var CYR = /[\u0400-\u04FF]/;

  /* Rules are written in English with a Ukrainian translation in block.uk. */
  function validateTheoryBlock(b, where) {
    var errs = [];
    function err(msg) { errs.push(where + ": " + msg); }
    var needsUk = b.p || b.list || b.links;
    if (!needsUk) return errs;
    if ([b.h, b.p].concat(b.list || []).some(function (t) { return t && CYR.test(t); })) err("English field contains Cyrillic");
    if (!b.uk || !b.uk.h) { err("missing uk translation"); return errs; }
    if (b.p && !b.uk.p) err("missing uk.p");
    if (b.list && (!b.uk.list || b.uk.list.length !== b.list.length)) err("uk.list length differs from list");
    if (b.uk.table && b.table && b.uk.table.length !== b.table.length) err("uk.table length differs from table");
    return errs;
  }

  function validateLesson(lesson) {
    var errs = [];
    if (!lesson || !lesson.id) return ["lesson without id"];
    ["unit", "letter", "title"].forEach(function (f) { if (!lesson[f]) errs.push(lesson.id + ": missing " + f); });
    MODES.forEach(function (m) {
      if (!lesson[m]) return;
      (lesson[m].theory || []).forEach(function (b, i) {
        errs = errs.concat(validateTheoryBlock(b, lesson.id + "/" + m + "/theory" + i));
      });
      (lesson[m].exercises || []).forEach(function (ex, i) {
        errs = errs.concat(validateExercise(ex, lesson.id + "/" + m + "/ex" + i));
      });
    });
    return errs;
  }

  /* ------------------------------------------------------------ debug export */

  /* Markdown file of debug comments, meant to be handed back to Claude. */
  function exportComments(list, meta) {
    var out = ["# Debug-коментарі · " + meta.date, ""];
    if (!list.length) return out.concat(["Коментарів немає.", ""]).join("\n");
    out.push("Кожен коментар прив'язаний до елемента застосунку: `ref` — урок/режим/вправа/пункт, `route` — адреса сторінки.", "");
    list.forEach(function (c, i) {
      out.push("## " + (i + 1) + ". " + (c.ref || c.path));
      out.push("Коментар: " + String(c.comment).trim());
      out.push("- route: `" + c.route + "`");
      if (c.ref) out.push("- element: `" + c.path + "`");
      if (c.text) out.push("- текст елемента: " + JSON.stringify(c.text));
      out.push("");
    });
    return out.join("\n");
  }

  /* ------------------------------------------------------------ rules language */

  /* A theory block in the chosen language: Ukrainian fields replace English ones where present. */
  function localizeBlock(b, lang) {
    if (lang !== "uk" || !b.uk) return b;
    var u = b.uk, out = {};
    Object.keys(b).forEach(function (k) { if (k !== "uk") out[k] = b[k]; });
    ["h", "p", "list", "table"].forEach(function (k) { if (u[k]) out[k] = u[k]; });
    if (b.links && u.notes) {
      out.links = b.links.map(function (lk, i) {
        var c = {};
        Object.keys(lk).forEach(function (k) { c[k] = lk[k]; });
        if (u.notes[i]) c.note = u.notes[i];
        return c;
      });
    }
    return out;
  }

  /* ------------------------------------------------------------ labels */

  /* "extra: https://…" sources are shown as a short word in tabs; the URL becomes a link. */
  function srcLabel(src) { return !src ? "" : /^extra:/.test(src) ? "extra" : src; }
  function srcUrl(src) { var m = /^extra:\s*(\S+)/.exec(src || ""); return m ? m[1] : null; }

  /* In debug mode, links and navigation buttons keep working; everything else is commented on. */
  function debugPassThrough(node) {
    if (node.tag === "A" && node.href) return true;
    return node.tag === "BUTTON" && /(^|\s)next(\s|$)/.test(node.cls || "");
  }

  var core = {
    MODES: MODES, TYPES: TYPES,
    norm: norm, same: same,
    scoreKey: scoreKey, itemKey: itemKey, lessonModes: lessonModes,
    migrateV1: migrateV1, validateLesson: validateLesson,
    exportComments: exportComments,
    srcLabel: srcLabel, srcUrl: srcUrl, debugPassThrough: debugPassThrough,
    localizeBlock: localizeBlock
  };

  if (typeof module !== "undefined" && module.exports) module.exports = core;
  else (root.ES = root.ES || {}).core = core;
})(typeof window !== "undefined" ? window : this);
