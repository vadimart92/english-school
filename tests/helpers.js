// Loads browser-style script files into one shared sandbox "window".
var fs = require("fs");
var path = require("path");
var vm = require("vm");

var ROOT = path.join(__dirname, "..");

function loadScripts(files) {
  var win = {};
  win.window = win;
  var ctx = vm.createContext(win);
  files.forEach(function (f) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  });
  return win;
}

function contentFiles() {
  var out = [];
  (function walk(dir) {
    fs.readdirSync(path.join(ROOT, dir)).sort().forEach(function (n) {
      var rel = dir + "/" + n;
      if (fs.statSync(path.join(ROOT, rel)).isDirectory()) walk(rel);
      else if (/\.js$/.test(n)) out.push(rel);
    });
  })("content");
  return out;
}

var LESSON_IDS = [];
for (var u = 1; u <= 10; u++) ["A", "B", "C", "D"].forEach(function (l) { LESSON_IDS.push(u + l); });

module.exports = { ROOT: ROOT, loadScripts: loadScripts, contentFiles: contentFiles, LESSON_IDS: LESSON_IDS };
