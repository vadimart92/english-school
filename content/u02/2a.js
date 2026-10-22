/*
 * 2A Changes
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "2A",
  unit: 2,
  letter: "A",
  title: "Changes",
  uk: "Зміни: тривалий аспект і тенденції",
  goal: "give a presentation on past, current and future trends",
  focus: { grammar: "the continuous aspect", vocab: "trends", pron: "to have in connected speech" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "Focus on the action",
        p: "Use continuous forms to focus on the action rather than the result, when the activity is:",
        list: [
          "temporary: I've been living with my parents while I look for my own place.",
          "limited (part of the activity, not the whole): I'm working on my presentation at the moment.",
          "repeated or changing: I've been cycling to work every day recently.",
          "a trend: Many urban areas are becoming more gentrified."
        ]
      },
      {
        h: "Senses and remember",
        p: "With see, hear, feel, understand, remember the continuous form shows the action was ongoing or repeated.",
        ex: [
          "I heard someone shouting in the street. (repeated, ongoing)",
          "I heard someone shout in the street. (once)"
        ]
      },
      {
        h: "Stative verbs",
        p: "Verbs with a stative meaning don't normally take the continuous. Some verbs change meaning.",
        ex: [
          "I believed it was possible. (NOT was believing)",
          "I don't feel well. / I'm not feeling well. (no difference)",
          "I think it's a great idea. (= believe) / I'm thinking about dinner. (= actively thinking)"
        ]
      },
      {
        h: "Phrases",
        table: [
          ["a downward trend", "things are getting worse / falling"],
          ["reach a tipping point", "the moment after which a big change happens"],
          ["reverse the trend", "make a trend go in the opposite direction"],
          ["this trend looks set to continue", "it will probably carry on"],
          ["pass a milestone", "reach an important stage"],
          ["mark the start of a new era", "begin a completely new period"],
          ["be on the up", "be improving / increasing"],
          ["revert to", "go back to a previous (often worse) state"],
          ["set the trend for", "be the first, so others copy"],
          ["look promising", "seem likely to be good"]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        items: [
          { q: "Maddie ___ from home this week.", options: ["works", "is working"], answer: 1, explain: "Temporary situation." },
          { q: "They're late. They ___ the bus.", options: ["must have missed", "have been missing"], answer: 0, explain: "Missing a bus is a single complete event." },
          { q: "Can you see Graham ___ from the top of the building?", options: ["wave", "waving"], answer: 1, explain: "Ongoing action seen in progress." },
          { q: "I've ___ over a hundred emails today.", options: ["sent", "been sending"], answer: 0, explain: "A number (a hundred) → result → simple." },
          { q: "I won't be in today, I've ___ the flu.", options: ["got", "been getting"], answer: 0, explain: "A state / result." },
          { q: "The situation ___ better for them.", options: ["definitely gets", "is definitely getting"], answer: 1, explain: "A changing situation / trend." },
          { q: "How long ___ Clara?", options: ["have you known", "have you been knowing"], answer: 0, explain: "know is stative." },
          { q: "I heard my neighbours ___ for hours last night.", options: ["argue", "arguing"], answer: 1, explain: "For hours → ongoing, repeated." },
          { q: "I've ___ a lot about you lately.", options: ["thought", "been thinking"], answer: 1, explain: "think = actively thinking (dynamic), repeated lately." }
        ],
        src: "Revision"
      },
      {
        type: "errors",
        title: "Correct or not? Five sentences have mistakes",
        items: [
          { s: "Eco-friendly travel is generally becoming more and more popular in my country.", ok: true },
          { s: "What will you do this time next week?", ok: false, fix: "What will you be doing this time next week?" },
          { s: "We've lived with my in-laws while our house is being decorated.", ok: false, fix: "We've been living with my in-laws while our house is being decorated. (temporary)" },
          { s: "The organisation is believing in its staff.", ok: false, fix: "The organisation believes in its staff. (stative)" },
          { s: "I'd lie on the beach if I wasn't in class at the moment.", ok: false, fix: "I'd be lying on the beach if I wasn't in class at the moment." },
          { s: "I haven't been doing much work lately.", ok: true },
          { s: "They'd talked about Chris when he suddenly walked in the room.", ok: false, fix: "They'd been talking about Chris when he suddenly walked in the room." }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Which phrase fits?",
        items: [
          { q: "A company's sales have been falling for months, but now they start increasing again.", options: ["reverse the trend", "revert to", "a downward trend"], answer: 0 },
          { q: "A new technology becomes extremely popular and changes everything in society.", options: ["look promising", "mark the start of a new era", "pass a milestone"], answer: 1 },
          { q: "A situation keeps improving slowly and there is no sign of stopping.", options: ["this trend looks set to continue", "revert to", "reach a tipping point"], answer: 0 },
          { q: "Things reach a critical level, after which they start changing quickly.", options: ["reach a tipping point", "set the trend for", "be on the up"], answer: 0 },
          { q: "Fashion in a city is changing, and other cities start copying it.", options: ["revert to", "set the trend for", "a downward trend"], answer: 1 },
          { q: "A company returns to its previous bad performance after improvement.", options: ["reverse the trend", "revert to", "be on the up"], answer: 1 },
          { q: "A market is continuously growing.", options: ["be on the up", "a downward trend", "revert to"], answer: 0 },
          { q: "The website reached one million users.", options: ["pass a milestone", "revert to", "a downward trend"], answer: 0 },
          { q: "Early results of the new project are good.", options: ["look promising", "reach a tipping point", "revert to"], answer: 0 }
        ],
        src: "Revision"
      },
      {
        type: "match",
        title: "Match phrase and meaning",
        items: [
          { a: "a downward trend", b: "a steady fall" },
          { a: "reach a tipping point", b: "the moment a big change starts" },
          { a: "pass a milestone", b: "reach an important stage" },
          { a: "be on the up", b: "be improving" },
          { a: "revert to", b: "go back to how it was" },
          { a: "set the trend for", b: "be copied by others" },
          { a: "look promising", b: "seem likely to succeed" }
        ],
        src: "Revision"
      }
    ]
  }
});
