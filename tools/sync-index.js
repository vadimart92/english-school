#!/usr/bin/env node
/* Rewrites the content <script> block of index.html from the files in content/. */
var fs = require("fs");
var path = require("path");
var H = require("../tests/helpers");

var file = path.join(H.ROOT, "index.html");
var html = fs.readFileSync(file, "utf8");
var tags = H.contentFiles().map(function (f) { return '  <script src="' + f + '"></script>'; }).join("\n");
html = html.replace(/(<!-- content:start[^>]*-->)[\s\S]*?(\s*<!-- content:end -->)/, "$1\n" + tags + "$2");
fs.writeFileSync(file, html);
console.log("index.html: " + H.contentFiles().length + " content scripts");
