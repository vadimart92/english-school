/* Global registry: content files call ES.registerLesson(); app.js reads ES.lessons. */
(function (w) {
  "use strict";
  var ES = w.ES = w.ES || {};
  ES.lessons = ES.lessons || {};
  ES.order = ES.order || [];
  ES.modules = ES.modules || [];
  ES.registerLesson = function (lesson) {
    if (ES.lessons[lesson.id]) throw new Error("Duplicate lesson id: " + lesson.id);
    ES.lessons[lesson.id] = lesson;
    ES.order.push(lesson.id);
  };
})(typeof window !== "undefined" ? window : this);
