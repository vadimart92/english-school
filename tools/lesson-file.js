/* Writes a lesson object as content/uNN/<id>.js in the same literal style as hand-written data. */
var fs = require("fs");
var path = require("path");
var ROOT = path.join(__dirname, "..");

var IDENT = /^[A-Za-z_$][\w$]*$/;

function lit(v, ind) {
  var pad = new Array(ind + 1).join("  "), pad1 = pad + "  ";
  if (Array.isArray(v)) {
    if (!v.length) return "[]";
    var flat = v.every(function (x) { return typeof x !== "object" || x === null; });
    var one = "[" + v.map(function (x) { return lit(x, 0); }).join(", ") + "]";
    if (flat && one.length < 100) return one;
    // Short objects (exercise items) stay on one line each.
    return "[\n" + v.map(function (x) {
      var s = lit(x, ind + 1);
      return pad1 + s;
    }).join(",\n") + "\n" + pad + "]";
  }
  if (v && typeof v === "object") {
    var keys = Object.keys(v).filter(function (k) { return v[k] !== undefined; });
    if (!keys.length) return "{}";
    var parts = keys.map(function (k) { return (IDENT.test(k) ? k : JSON.stringify(k)) + ": " + lit(v[k], ind + 1); });
    var line = "{ " + parts.join(", ") + " }";
    if (line.length + ind * 2 < 230 && line.indexOf("\n") < 0) return line;
    return "{\n" + parts.map(function (p) { return pad1 + p; }).join(",\n") + "\n" + pad + "}";
  }
  return JSON.stringify(v);
}

function lessonPath(id) {
  var unit = parseInt(id, 10);
  return path.join(ROOT, "content", "u" + (unit < 10 ? "0" : "") + unit, id.toLowerCase() + ".js");
}

function writeLesson(lesson, header) {
  var file = lessonPath(lesson.id);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  var src = "/*\n * " + lesson.id + " " + lesson.title + "\n" + (header ? " * " + header.split("\n").join("\n * ") + "\n" : "") + " */\n" +
    "ES.registerLesson(" + lit(lesson, 0) + ");\n";
  fs.writeFileSync(file, src);
  return file;
}

module.exports = { lit: lit, writeLesson: writeLesson, lessonPath: lessonPath };
