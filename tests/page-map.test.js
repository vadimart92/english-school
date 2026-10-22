var test = require("node:test");
var assert = require("node:assert");
var H = require("./helpers");

test("every lesson 1A..10D has Student's Book and Workbook pages", function () {
  var ES = H.loadScripts(["app/registry.js", "content/page-map.js"]).ES;
  assert.strictEqual(H.LESSON_IDS.length, 40);
  H.LESSON_IDS.forEach(function (id) {
    var p = ES.pageMap[id];
    assert.ok(p, "missing " + id);
    assert.ok(p.sb && p.sb.length >= 1, id + " sb");
    assert.ok(p.wb && p.wb.length >= 1, id + " wb");
    if (id.slice(-1) !== "D") assert.ok(p.lb && p.lb.length >= 1, id + " lb");
  });
});
