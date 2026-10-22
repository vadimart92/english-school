var test = require("node:test");
var assert = require("node:assert");
var H = require("./helpers");

test("topic-map offsets point at the migrated Revision exercises", function () {
  var ES = H.loadScripts(["app/registry.js"].concat(H.contentFiles())).ES;
  Object.keys(ES.topicMap).forEach(function (t) {
    var m = ES.topicMap[t];
    if (typeof m === "string") m = { lesson: m, offset: 0 };
    var ex = ES.lessons[m.lesson].refresh.exercises[m.offset];
    assert.ok(ex && ex.src === "Revision", t + " → " + m.lesson + " refresh " + m.offset);
  });
});
