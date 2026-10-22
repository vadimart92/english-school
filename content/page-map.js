/*
 * Printed page numbers of each lesson in the books (see tools/extract_pages.py).
 *   sb – Student's Book lesson spread     lb – Language bank (language + practice page)
 *   wb – Workbook lesson page            vb – Vocabulary bank page for the unit
 * Unit-level pages: ES.unitPages[n] = { skills: [...], check: [...], wbSkills: [...] }.
 */
(function (ES) {
  "use strict";
  var UNIT_START = { 1: 6, 2: 14, 3: 24, 4: 32, 5: 42, 6: 50, 7: 60, 8: 68, 9: 78, 10: 86 };
  var CHECK = { 2: [22, 23], 4: [40, 41], 6: [58, 59], 8: [76, 77], 10: [94, 95] };
  ES.pageMap = {};
  ES.unitPages = {};
  for (var u = 1; u <= 10; u++) {
    var wb = 4 + 8 * (u - 1);
    ["A", "B", "C", "D"].forEach(function (letter, i) {
      var p = { sb: [UNIT_START[u] + 2 * i, UNIT_START[u] + 2 * i + 1], wb: [wb + i] };
      if (letter !== "D") {
        p.lb = [146 + 2 * (u - 1), 147 + 2 * (u - 1)];
        p.vb = [165 + u];
      }
      ES.pageMap[u + letter] = p;
    });
    ES.unitPages[u] = {
      // Master your skills: listening (1 page), reading (2), writing (2).
      skills: [95 + u, 104 + 2 * u, 105 + 2 * u, 124 + 2 * u, 125 + 2 * u],
      check: CHECK[u + (u % 2)] || [],
      wbSkills: [wb + 4, wb + 5, wb + 6, wb + 7]
    };
  }
})(window.ES);
