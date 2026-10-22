/*
 * Where the old Module 1 revision topics (module1/data.js, progress key english-school.module1.v1)
 * now live: each topic's exercises sit in the lesson's refresh mode, after `offset` exercises
 * of the lesson's grammar topic. Used once to migrate saved progress.
 */
window.ES.topicMap = {
  perfect: "1A", raising: "1B", "infinitive-phrases": "1C",
  continuous: "2A", probability: "2B", cleft: "2C",
  questions: "3A", reason: "3B", adjectives: "3C",
  collocations: { lesson: "1A", offset: 3 },
  idioms: { lesson: "1B", offset: 4 },
  attitude: { lesson: "1C", offset: 2 },
  trends: { lesson: "2A", offset: 2 },
  reactions: { lesson: "2B", offset: 2 },
  ideas: { lesson: "3A", offset: 2 },
  thinking: { lesson: "3A", offset: 4 }
};
