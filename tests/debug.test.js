var test = require("node:test");
var assert = require("node:assert");
var core = require("../app/core.js");

var C = { id: "c1", at: 1, route: "#/l/1A/learn/2", ref: "1A/learn/ex2/i3", path: "div.item > p.q", text: "I've ___ about ten cliffs", comment: "неправильна відповідь" };

test("exportComments lists each comment with its ref, route and text", function () {
  var md = core.exportComments([C], { date: "2026-10-23" });
  assert.match(md, /^# Debug-коментарі · 2026-10-23/m);
  assert.match(md, /^## 1\. 1A\/learn\/ex2\/i3$/m);
  assert.match(md, /^Коментар: неправильна відповідь$/m);
  assert.match(md, /#\/l\/1A\/learn\/2/);
  assert.match(md, /I've ___ about ten cliffs/);
});

test("exportComments says so when there are no comments", function () {
  assert.match(core.exportComments([], { date: "2026-10-23" }), /Коментарів немає\./);
});

test("multi-line comments are kept whole", function () {
  var md = core.exportComments([Object.assign({}, C, { comment: "рядок один\nрядок два" })], { date: "d" });
  assert.match(md, /рядок один\n {2}рядок два|рядок один\nрядок два/);
});

test("comment without data-ref falls back to the element path", function () {
  var md = core.exportComments([Object.assign({}, C, { ref: null })], { date: "d" });
  assert.match(md, /^## 1\. div\.item > p\.q$/m);
});
