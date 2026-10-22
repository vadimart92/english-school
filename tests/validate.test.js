var test = require("node:test");
var assert = require("node:assert");
var core = require("../app/core.js");
var H = require("./helpers");

function lesson(exercises) {
  return { id: "1A", unit: 1, letter: "A", title: "T", learn: { theory: [], exercises: exercises } };
}

test("valid lesson has no errors", function () {
  var errs = core.validateLesson(lesson([{ type: "choice", title: "x", items: [{ q: "a ___", options: ["b", "c"], answer: 1 }] }]));
  assert.deepStrictEqual(errs, []);
});

test("choice answer outside options is reported", function () {
  var errs = core.validateLesson(lesson([{ type: "choice", title: "x", items: [{ q: "a", options: ["b", "c"], answer: 2 }] }]));
  assert.match(errs.join("\n"), /answer out of range/);
});

test("gap count must match answers", function () {
  var errs = core.validateLesson(lesson([{ type: "gap", title: "x", items: [{ q: "a ___ b ___", answers: [["x"]] }] }]));
  assert.match(errs.join("\n"), /gap count mismatch/);
});

test("speak items need models", function () {
  var errs = core.validateLesson(lesson([{ type: "speak", title: "x", items: [{ q: "talk" }] }]));
  assert.match(errs.join("\n"), /missing models/);
});

test("unknown exercise type is reported", function () {
  var errs = core.validateLesson(lesson([{ type: "quiz", title: "x", items: [] }]));
  assert.match(errs.join("\n"), /unknown type/);
});

test("registerLesson rejects duplicate ids", function () {
  var ES = H.loadScripts(["app/registry.js"]).ES;
  ES.registerLesson({ id: "1A" });
  assert.throws(function () { ES.registerLesson({ id: "1A" }); }, /Duplicate/);
});

test("validate.js passes on the real content", function () {
  var out = require("child_process").execFileSync("node", ["tools/validate.js"], { cwd: H.ROOT, encoding: "utf8" });
  assert.match(out, /^OK \d+ lessons/m);
});
