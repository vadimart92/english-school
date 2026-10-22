/*
 * 3C Fact or fiction?
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "3C",
  unit: 3,
  letter: "C",
  title: "Fact or fiction?",
  uk: "Факт чи вигадка: як модифікувати прикметники, новини",
  goal: "discuss how to fact-check news stories",
  focus: { grammar: "ways of modifying adjectives", vocab: "the news and reporting", pron: "stress in adverb + adjective combinations" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "Gradable vs ungradable",
        table: [
          [
            "Gradable (hot, good, difficult)",
            "barely, bitterly, deeply, extremely, fairly, perfectly, rather, somewhat, seriously, very",
            "We were deeply sorry to hear your news."
          ],
          [
            "Ungradable (boiling, excellent, impossible)",
            "absolutely, completely, essentially, nearly, totally, utterly, virtually",
            "I felt totally overwhelmed by my workload."
          ],
          ["Both", "really, pretty, quite", "quite interesting = fairly; quite fascinating = absolutely"]
        ]
      },
      {
        h: "Collocations",
        list: [
          "highly recommended / unlikely / successful",
          "utterly ridiculous / wrong",
          "ridiculously cheap / easy",
          "strongly opposed",
          "perfectly open / honest / straightforward",
          "virtually impossible"
        ]
      },
      {
        h: "Classifying adjectives",
        p: "Classifying adjectives (married, foreign car) can't be modified. Some change meaning when gradable.",
        ex: ["She has a slightly foreign accent. (gradable)", "It's a foreign car. (classifying)"]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct adverb (revision Task 12)",
        items: [
          { q: "Are you ___ sure that's a good idea?", options: ["quite", "bitterly"], answer: 0 },
          { q: "Yeah, it sounds ___ amazing, doesn't it?", options: ["pretty", "very"], answer: 0, explain: "amazing is ungradable → not 'very'." },
          { q: "Umm, to be ___ honest, I think…", options: ["completely", "barely"], answer: 0 },
          { q: "…I think it sounds ___ terrifying.", options: ["absolutely", "nearly"], answer: 0 },
          { q: "I guess we have ___ different tastes in what we think is fun.", options: ["entirely", "virtually"], answer: 0 },
          { q: "I got ___ emotional at the play I saw last night.", options: ["somewhat", "essentially"], answer: 0 },
          { q: "It was ___ unique, because it was performed in sign language.", options: ["totally", "deeply"], answer: 0 },
          { q: "That must have been ___ difficult to understand.", options: ["completely", "fairly"], answer: 1 },
          { q: "The actors were ___ talented.", options: ["seriously", "totally"], answer: 0 },
          { q: "Yeah, the whole thing was ___ brilliant.", options: ["quite", "very"], answer: 0, explain: "brilliant is ungradable; quite = absolutely here." },
          { q: "The wifi is down again! I'm ___ sick of this.", options: ["absolutely", "perfectly"], answer: 0 },
          { q: "I was ___ hopeful it would stop happening after the engineer came.", options: ["pretty", "absolutely"], answer: 0 },
          { q: "I'm ___ capable of meeting the deadlines as it is.", options: ["barely", "nearly"], answer: 0 },
          { q: "You know it's ___ impossible to get through at this time of day.", options: ["virtually", "very"], answer: 0 },
          { q: "I'm ___ sceptical myself. Feel free to try, though.", options: ["rather", "essentially"], answer: 0 }
        ],
        src: "Revision"
      },
      {
        type: "sort",
        title: "Gradable or ungradable?",
        intro: "Which adverbs go with which kind of adjective?",
        categories: ["gradable (very …)", "ungradable (absolutely …)", "both"],
        items: [
          { text: "barely", cat: 0 },
          { text: "bitterly", cat: 0 },
          { text: "deeply", cat: 0 },
          { text: "extremely", cat: 0 },
          { text: "fairly", cat: 0 },
          { text: "rather", cat: 0 },
          { text: "somewhat", cat: 0 },
          { text: "seriously", cat: 0 },
          { text: "absolutely", cat: 1 },
          { text: "completely", cat: 1 },
          { text: "essentially", cat: 1 },
          { text: "nearly", cat: 1 },
          { text: "totally", cat: 1 },
          { text: "utterly", cat: 1 },
          { text: "virtually", cat: 1 },
          { text: "really", cat: 2 },
          { text: "pretty", cat: 2 },
          { text: "quite", cat: 2 }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "Stronger or weaker?",
        intro: "Replace 'very' / 'almost' with a better adverb. Try one stronger and one weaker version.",
        phrases: [
          "extremely",
          "pretty",
          "quite",
          "bitterly",
          "utterly",
          "deeply",
          "seriously",
          "virtually",
          "nearly",
          "perfectly",
          "fairly",
          "rather",
          "absolutely",
          "completely",
          "ridiculously",
          "somewhat"
        ],
        items: [
          { q: "The exam was very difficult.", models: ["The exam was extremely difficult. / pretty difficult / quite difficult."] },
          { q: "The weather today is very cold.", models: ["It's bitterly cold today. / It's fairly cold."] },
          { q: "The idea is very stupid.", models: ["The idea is utterly ridiculous. / rather stupid."] },
          { q: "I am very sorry about what happened.", models: ["I'm deeply sorry about what happened."] },
          { q: "The situation is very serious.", models: ["The situation is extremely serious. / fairly serious."] },
          { q: "The room was almost empty.", models: ["The room was virtually empty. / nearly empty."] },
          { q: "The task was easy to do.", models: ["The task was ridiculously easy. / perfectly straightforward."] },
          { q: "I was very honest in my answer.", models: ["I was perfectly honest in my answer. / completely honest."] },
          { q: "The plan was very complicated.", models: ["The plan was extremely complicated. / somewhat complicated."] }
        ],
        src: "Revision"
      }
    ]
  }
});
