var test = require("node:test");
var assert = require("node:assert");
var core = require("../app/core.js");

test("scoreKey joins lesson, mode and exercise index", function () {
  assert.strictEqual(core.scoreKey("1A", "learn", 0), "1A:learn:0");
});

test("itemKey adds the item index", function () {
  assert.strictEqual(core.itemKey("1A", "homework", 1, 4), "1A:homework:1:4");
});

test("migrateV1 moves topic scores into lesson refresh keys", function () {
  var out = core.migrateV1(
    { scores: { "perfect:2": { best: 80 }, "zzz:0": { best: 10 } }, cards: { x: 3 }, streak: { day: "2026-10-01", count: 2 } },
    { perfect: "1A" }
  );
  assert.strictEqual(out.scores["1A:refresh:2"].best, 80);
  assert.strictEqual(out.scores["zzz:0"], undefined);
  assert.strictEqual(Object.keys(out.scores).length, 1);
  assert.strictEqual(out.cards.x, 3);
  assert.strictEqual(out.streak.count, 2);
});

test("migrateV1 applies an exercise offset for topics merged into a lesson", function () {
  var out = core.migrateV1({ scores: { "collocations:0": { best: 50 } }, cards: {} }, { collocations: { lesson: "1A", offset: 3 } });
  assert.strictEqual(out.scores["1A:refresh:3"].best, 50);
});

test("migrateV1 moves mistakes and card keys", function () {
  var out = core.migrateV1(
    { scores: {}, cards: { "perfect:4|give a nudge": 2 }, mistakes: { "collocations:1:5": { misses: 1, streak: 0 } } },
    { perfect: "1A", collocations: { lesson: "1A", offset: 3 } }
  );
  assert.strictEqual(out.mistakes["1A:refresh:4:5"].misses, 1);
  assert.strictEqual(out.cards["1A:refresh:4|give a nudge"], 2);
});

test("same() ignores contractions, case and punctuation", function () {
  assert.strictEqual(core.same("I've done", "I have done."), true);
  assert.strictEqual(core.same("I've done", "I did"), false);
});

test("lessonModes counts exercises per mode, missing modes as 0", function () {
  assert.deepStrictEqual(core.lessonModes({ learn: { exercises: [{}, {}] }, refresh: { exercises: [{}] } }), { learn: 2, homework: 0, refresh: 1 });
});

test("srcLabel shortens extra sources to a word", function () {
  assert.strictEqual(core.srcLabel("extra: https://learnenglish.britishcouncil.org/x"), "extra");
  assert.strictEqual(core.srcLabel("SB 6a"), "SB 6a");
  assert.strictEqual(core.srcLabel(undefined), "");
});

test("srcUrl returns the link of an extra source", function () {
  assert.strictEqual(core.srcUrl("extra: https://a.org/x"), "https://a.org/x");
  assert.strictEqual(core.srcUrl("SB 6a"), null);
});

test("debugPassThrough lets links and navigation buttons through, not answer controls", function () {
  assert.strictEqual(core.debugPassThrough({ tag: "A", href: "#/l/1A", cls: "" }), true);
  assert.strictEqual(core.debugPassThrough({ tag: "BUTTON", cls: "btn primary next" }), true);
  assert.strictEqual(core.debugPassThrough({ tag: "BUTTON", cls: "opt" }), false);
  assert.strictEqual(core.debugPassThrough({ tag: "DIV", cls: "item" }), false);
});

test("localizeBlock returns English by default and Ukrainian fields when asked", function () {
  var b = { h: "The idea", p: "Perfect forms look back.", list: ["one", "two"], ex: ["I've done it."], uk: { h: "Ідея", p: "Перфектні форми дивляться назад.", list: ["один", "два"] } };
  assert.strictEqual(core.localizeBlock(b, "en").p, "Perfect forms look back.");
  var u = core.localizeBlock(b, "uk");
  assert.strictEqual(u.h, "Ідея");
  assert.deepStrictEqual(u.list, ["один", "два"]);
  assert.deepStrictEqual(u.ex, ["I've done it."]);
});

test("localizeBlock falls back to English for fields without a translation", function () {
  var u = core.localizeBlock({ h: "Verb + noun", table: [["have", "a rest"]], uk: { h: "Дієслово + іменник" } }, "uk");
  assert.strictEqual(u.h, "Дієслово + іменник");
  assert.deepStrictEqual(u.table, [["have", "a rest"]]);
});

test("localizeBlock translates link notes", function () {
  var u = core.localizeBlock({ h: "More practice", links: [{ title: "T", url: "u", note: "drills" }], uk: { h: "Більше практики", notes: ["вправи"] } }, "uk");
  assert.strictEqual(u.links[0].note, "вправи");
  assert.strictEqual(u.links[0].url, "u");
});
