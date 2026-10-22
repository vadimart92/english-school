/*
 * 3B Problems, problems
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "3B",
  unit: 3,
  letter: "B",
  title: "Problems, problems",
  uk: "Проблеми: підрядні причини, проблеми й рішення",
  goal: "solve a problem",
  focus: { grammar: "reason clauses", vocab: "problems and solutions", pron: "-le word endings" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "Beyond 'because'",
        table: [
          [
            "since / as / given that / seeing as + clause",
            "a reason the listener already knows",
            "Seeing as it'll be warm, let's have the party outside."
          ],
          [
            "in that + clause",
            "usually in the second part of the sentence",
            "This product isn't likely to sell well, in that it's quite a niche market."
          ],
          [
            "insofar as / inasmuch as + clause",
            "justify a comment, formal",
            "We don't expect much opposition, insofar as they'll benefit most."
          ],
          [
            "for fear of / at the risk of + (object) + -ing",
            "a possible outcome you want to avoid / accept",
            "We ordered extra for fear of them running out."
          ],
          ["-ing clause", "reason for past actions", "I've been up all night, trying to find a solution."]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the best linker",
        items: [
          { q: "___ there's nothing on TV tonight, let's go out.", options: ["Since", "In that", "For fear of"], answer: 0 },
          { q: "This product isn't likely to sell well, ___ it's quite a niche market.", options: ["for fear of", "in that", "at the risk of"], answer: 1 },
          { q: "We've ordered twice as many products ___ them running out.", options: ["given that", "for fear of", "seeing as"], answer: 1 },
          { q: "I didn't tell my boss about the mistake, ___ it wasn't serious.", options: ["given that", "for fear of", "at the risk of"], answer: 0 },
          { q: "___ sounding rude, I have to say I disagree.", options: ["In that", "At the risk of", "Seeing as"], answer: 1 },
          { q: "___ you're already here, why don't you stay for dinner?", options: ["Seeing as", "In that", "For fear of"], answer: 0 },
          { q: "___ that I had no time, I took a taxi.", options: ["Given", "Since", "Seeing"], answer: 0 },
          { q: "___ to miss my train, I left the meeting early.", options: ["Not wanting", "In that", "Given"], answer: 0, explain: "An -ing clause gives the reason for a past action." }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "Justify your decisions (revision Task 11)",
        phrases: [
          "since",
          "as",
          "given that",
          "seeing as",
          "in that",
          "insofar as",
          "inasmuch as",
          "for fear of",
          "at the risk of"
        ],
        items: [
          {
            q: "You didn't tell your boss about a small mistake.",
            models: [
              "I didn't tell my boss for fear of losing their trust.",
              "Given that it wasn't serious, I fixed it myself."
            ]
          },
          { q: "You chose not to attend a meeting.", models: ["Seeing as the agenda had nothing to do with my team, I skipped it."] },
          { q: "You decided to move to a smaller flat.", models: ["Since rent had gone up so much, I moved to a smaller flat."] },
          { q: "You didn't correct someone during a presentation.", models: ["I kept quiet for fear of embarrassing them in front of everyone."] },
          { q: "You refused a job offer.", models: ["I refused it, in that the salary was lower than what I earn now."] },
          { q: "You left a meeting early.", models: ["Not wanting to miss my train, I left early."] },
          { q: "You changed your learning strategy.", models: ["Given that I kept forgetting new words, I started using flashcards."] },
          { q: "You didn't argue back in a discussion.", models: ["At the risk of looking weak, I chose not to argue."] },
          { q: "You decided to buy something expensive.", models: ["Seeing as my old laptop kept crashing, I bought a new one."] },
          { q: "You apologised even though it wasn't fully your fault.", models: ["I apologised, insofar as I had played a part in it."] }
        ],
        src: "Revision"
      }
    ]
  }
});
