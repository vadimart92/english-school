#!/usr/bin/env node
/* Loads every content file the way the browser does and checks each lesson.
   Usage: node tools/validate.js   → "OK <n> lessons" or a list of problems (exit 1). */
var H = require("../tests/helpers");
var core = require("../app/core.js");

var win = H.loadScripts(["app/registry.js"].concat(H.contentFiles()));
var ES = win.ES;
var errs = [];
ES.order.forEach(function (id) { errs = errs.concat(core.validateLesson(ES.lessons[id])); });

if (errs.length) {
  console.error(errs.join("\n"));
  console.error(errs.length + " problem(s)");
  process.exit(1);
}
console.log("OK " + ES.order.length + " lessons");
