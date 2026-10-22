/*
 * 2C Local issues
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "2C",
  unit: 2,
  letter: "C",
  title: "Local issues",
  uk: "Місцеві проблеми: розщеплені речення, конотація",
  goal: "discuss a proposal",
  focus: { grammar: "cleft sentences", vocab: "connotation 2", pron: "weak form of that" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "It-clefts",
        p: "Start with It + be to focus on the important (new) information; the rest of the sentence links it to what's known.",
        ex: [
          "It's Jamie who plays tennis, not Jane.",
          "It's tennis that Jamie plays, not badminton.",
          "It wasn't Sally who stole your watch.",
          "It was because of her hard work that she won."
        ]
      },
      {
        h: "What-clefts",
        p: "The What-clause holds the known information; the part after be is new.",
        ex: [
          "What I love most are horror movies.",
          "What she did was (to) ask them for more money. (verb → did + infinitive)",
          "What I hate is being ignored. (gerund → gerund)"
        ]
      },
      { h: "All-clefts", p: "To emphasise one thing above everything else, replace What with All.", ex: ["All I need is another two weeks."] }
    ],
    exercises: [
      {
        type: "order",
        title: "Put the words in order",
        items: [
          { words: ["enjoy", "video", "What", "is", "games", "we", "playing"], answer: "What we enjoy is playing video games" },
          { words: ["Janice", "was", "drank", "coffee", "your", "that", "It"], answer: "It was your coffee that Janice drank" },
          { words: ["the", "wasn't", "who", "It", "letter", "me", "wrote"], answer: "It wasn't me who wrote the letter" },
          { words: ["that", "to", "money", "we", "I'm", "All", "save", "saying", "more", "is", "need"], answer: "All I'm saying is that we need to save more money" },
          { words: ["Jerry", "It", "ate", "your", "pear", "was", "who", "not", "me"], answer: "It was Jerry who ate your pear not me", alts: ["It was Jerry not me who ate your pear"] },
          { words: ["to", "What", "investigate", "did", "we", "was", "them", "ask"], answer: "What we did was ask them to investigate" },
          { words: ["is", "I", "What", "dishes", "the", "like", "don't", "doing"], answer: "What I don't like is doing the dishes" },
          { words: ["to", "I", "at", "was", "school", "It", "sew", "learnt", "that"], answer: "It was at school that I learnt to sew" }
        ],
        src: "Revision"
      },
      {
        type: "transform",
        title: "Rewrite beginning with the word given",
        items: [
          { q: "I hate people that don't clean up after themselves.", start: "What", models: ["What I hate is people that don't clean up after themselves."] },
          {
            q: "I didn't call you late last night.",
            start: "It",
            models: [
              "It wasn't me who called you late last night.",
              "It wasn't me that called you late last night.",
              "It wasn't I who called you late last night."
            ]
          },
          { q: "He was arrested because he stole a car.", start: "It", models: ["It was because he stole a car that he was arrested."] },
          { q: "We just need a bit more money.", start: "All", models: ["All we need is a bit more money."] },
          {
            q: "She stayed up all night to finish her essay.",
            start: "What",
            models: [
              "What she did was stay up all night to finish her essay.",
              "What she did was to stay up all night to finish her essay."
            ]
          },
          {
            q: "My cousins live in Chichester.",
            start: "It",
            models: [
              "It's in Chichester that my cousins live.",
              "It is in Chichester that my cousins live.",
              "It's my cousins who live in Chichester."
            ]
          },
          { q: "We simply want a second chance.", start: "All", models: ["All we want is a second chance."] },
          { q: "He studied a lot, that's why he passed the exam.", start: "It", models: ["It was because he studied a lot that he passed the exam."] }
        ],
        src: "Revision"
      },
      {
        type: "transform",
        title: "Add focus (revision Task 3)",
        intro: "Make a cleft sentence that stresses the part in brackets. Many answers are possible – compare with the models.",
        items: [
          {
            q: "John solved the problem very quickly. (John)",
            models: [
              "It was John who solved the problem very quickly.",
              "What John did was (to) solve the problem very quickly.",
              "What was impressive was how quickly John solved the problem."
            ]
          },
          {
            q: "Someone left the door open during the break. (during the break)",
            models: [
              "It was during the break that someone left the door open.",
              "What happened was that someone left the door open."
            ]
          },
          {
            q: "I didn't understand the explanation at all. (the explanation)",
            models: [
              "It was the explanation that I didn't understand.",
              "What I didn't understand was the explanation."
            ]
          },
          {
            q: "Maria gave her notes to Tom after class. (Tom)",
            models: [
              "It was Tom who Maria gave her notes to.",
              "It was Maria who gave her notes to Tom after class.",
              "What Maria gave to Tom was her notes.",
              "It was after class that Maria gave her notes to Tom."
            ]
          },
          {
            q: "The students complained about the test difficulty. (the test difficulty)",
            models: [
              "What the students complained about was the test difficulty.",
              "It was the test difficulty that the students complained about."
            ]
          },
          {
            q: "We found the missing key under the table. (under the table)",
            models: [
              "It was under the table that we found the missing key.",
              "What we found was the missing key.",
              "It was the missing key that we found under the table."
            ]
          },
          {
            q: "The teacher changed the homework at the last minute. (at the last minute)",
            models: [
              "It was at the last minute that the teacher changed the homework.",
              "It was the teacher who changed the homework at the last minute.",
              "What the teacher changed was the homework."
            ]
          },
          {
            q: "Anna arrived late because of the traffic. (the traffic)",
            models: [
              "It was because of the traffic that Anna arrived late.",
              "What caused Anna to be late was the traffic.",
              "It was Anna who arrived late because of the traffic."
            ]
          },
          {
            q: "They fixed the computer in ten minutes. (in ten minutes)",
            models: [
              "It was in ten minutes that they fixed the computer.",
              "What they fixed was the computer.",
              "It was the computer that they fixed."
            ]
          },
          {
            q: "I noticed a mistake in your essay. (your essay)",
            models: [
              "It was in your essay that I noticed a mistake.",
              "What I noticed was a mistake in your essay.",
              "It was I who noticed a mistake in your essay."
            ]
          },
          {
            q: "Peter borrowed my book yesterday. (Peter)",
            models: [
              "It was Peter who borrowed my book yesterday.",
              "What Peter borrowed was my book.",
              "It was yesterday that Peter borrowed my book.",
              "What Peter did was borrow my book."
            ]
          },
          {
            q: "The accident happened near the station. (near the station)",
            models: [
              "It was near the station that the accident happened.",
              "It was the accident that happened near the station."
            ]
          }
        ],
        src: "Revision"
      }
    ]
  }
});
