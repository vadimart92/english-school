var test = require("node:test");
var assert = require("node:assert");
var fs = require("fs");
var path = require("path");
var H = require("./helpers");

function scripts() {
  var html = fs.readFileSync(path.join(H.ROOT, "index.html"), "utf8");
  var out = [], re = /<script src="([^"]+)"/g, m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

test("index.html loads every content file", function () {
  var s = scripts();
  H.contentFiles().forEach(function (f) { assert.ok(s.indexOf(f) >= 0, f + " is not in index.html"); });
});

test("registry and core load first, app.js last", function () {
  var s = scripts();
  assert.strictEqual(s[0], "app/registry.js");
  assert.strictEqual(s[1], "app/core.js");
  assert.strictEqual(s[s.length - 1], "app/app.js");
});

test("every lesson in a module exists and modules cover units 1-10 once", function () {
  var ES = H.loadScripts(["app/registry.js"].concat(H.contentFiles())).ES;
  var units = [];
  ES.modules.forEach(function (m) { units = units.concat(m.units); });
  assert.deepStrictEqual(units, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
