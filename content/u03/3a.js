/*
 * 3A Ideas
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "3A",
  unit: 3,
  letter: "A",
  title: "Ideas",
  uk: "Ідеї: форми питань і лексика про ідеї",
  goal: "use brainstorming techniques",
  focus: { grammar: "question forms", vocab: "ideas", pron: "intonation in questions ending with wh- words" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "Five useful forms",
        table: [
          [
            "Negative questions",
            "expect a certain answer, often rhetorical",
            "Don't you want to see your cousin?"
          ],
          ["Statement + question word", "surprise, or checking you heard right", "You spent how much?"],
          [
            "Indirect questions",
            "soften difficult questions; statement word order",
            "Could you tell me what you plan to do about it?"
          ],
          ["Question tags (falling)", "check or confirm information", "Jake's not really into sport, is he?"],
          [
            "Question word + is it",
            "cleft question, adds emphasis, more formal",
            "What is it that you wanted to speak to me about?"
          ]
        ]
      },
      {
        h: "Embedded questions",
        p: "Questions can sit inside statements after unclear, uncertain etc. Yes/no questions use if or whether.",
        ex: [
          "It's unclear why she took the documents with her.",
          "It's not clear if they received the order yet."
        ]
      },
      {
        h: "Phrases",
        table: [
          ["It occurs to me that…", "I've just thought of something"],
          ["(nothing) springs to mind", "(no) idea comes immediately"],
          ["It dawned on me that…", "I slowly realised"],
          ["bounce a few ideas around", "discuss ideas informally with others"],
          ["a bright idea", "a clever idea (sometimes ironic)"],
          ["a passing thought", "an idea you don't take very seriously"],
          ["be out of ideas", "have no more ideas"],
          ["give someone an idea", "make someone think of something"],
          ["a brainwave", "a sudden clever idea"]
        ]
      },
      {
        h: "Thinking hard",
        list: [
          "deliberate, ruminate, ponder, mull over – think carefully for a long time",
          "rack your brains – try very hard to remember / think",
          "grapple with / wrestle with – struggle with a difficult problem",
          "go round in circles – keep thinking without progress",
          "take stock – stop and assess the situation"
        ]
      },
      {
        h: "Finding the answer",
        list: [
          "zero in on – focus on the key point",
          "pin it down – identify exactly",
          "shed light on – help explain",
          "root cause(s) – the real underlying reason",
          "intuitive – based on feeling rather than logic"
        ]
      },
      {
        h: "Confusion and mistakes",
        list: [
          "perplexed, baffled, befuddled – confused",
          "misconstrue, misread, misinterpret – understand wrongly",
          "underestimate – think something is smaller / easier than it is"
        ]
      }
    ],
    exercises: [
      {
        type: "order",
        title: "Make the question (revision Task 13)",
        intro: "Then think: why might each question be risky to ask aloud?",
        items: [
          { words: ["you", "better", "have", "to", "anything", "don't", "wear"], answer: "Don't you have anything better to wear?", note: "Negative question → sounds like criticism." },
          { words: ["talk", "let's", "politics,", "we", "shall", "about"], answer: "Let's talk about politics, shall we?", note: "Politics is a sensitive topic." },
          { words: ["you're", "you", "not", "working", "right now", "are"], answer: "You're not working right now, are you?", note: "Tag expects 'no' – can sound judgemental." },
          { words: ["it", "about", "don't", "me", "you", "what", "that", "like", "is"], answer: "What is it about me that you don't like?", note: "Cleft question → confrontational." },
          {
            words: ["honestly", "of", "tell", "you", "haircut", "could", "me", "you", "what", "think", "my"],
            answer: "Could you tell me honestly what you think of my haircut?",
            note: "Invites an honest – maybe hurtful – answer."
          },
          { words: ["don't", "everyone", "they", "likes", "meat,", "eating"], answer: "Everyone likes eating meat, don't they?", note: "Assumes agreement; not everyone eats meat." },
          { words: ["you're", "so", "saying", "you", "earn", "don't", "much"], answer: "So you're saying you don't earn much?", note: "Money is personal." },
          { words: ["you", "would", "how", "are", "you", "me", "tell", "old"], answer: "Would you tell me how old you are?", note: "Age is a personal question." },
          { words: ["another", "you're", "having", "holiday"], answer: "You're having another holiday?", note: "Statement question → surprise, maybe envy." }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Which form is it?",
        items: [
          { q: "You paid how much?", options: ["Negative question", "Statement + question word", "Question tag"], answer: 1 },
          { q: "Could you tell me where the station is?", options: ["Indirect question", "Cleft question", "Negative question"], answer: 0 },
          { q: "Isn't it time we left?", options: ["Negative question", "Indirect question", "Question tag"], answer: 0 },
          { q: "What is it that you don't understand?", options: ["Statement + question word", "Cleft question", "Embedded question"], answer: 1 },
          { q: "It's not clear whether they'll come.", options: ["Embedded question", "Question tag", "Negative question"], answer: 0 },
          { q: "She's from Lviv, isn't she?", options: ["Indirect question", "Question tag", "Cleft question"], answer: 1 }
        ],
        src: "Revision"
      },
      {
        type: "cards",
        title: "Flashcards",
        items: [
          { front: "It occurs to me that…", back: "I've just thought of something", ex: "It occurs to me that we could join a club." },
          { front: "nothing springs to mind", back: "no idea comes immediately", ex: "Any suggestions? – Nothing springs to mind." },
          { front: "it dawned on me", back: "I gradually realised", ex: "It suddenly dawned on me that I'd left my keys at home." },
          { front: "bounce a few ideas around", back: "discuss ideas informally", ex: "Let's bounce a few ideas around before the meeting." },
          { front: "a brainwave", back: "a sudden clever idea", ex: "I had a brainwave in the shower." },
          { front: "a passing thought", back: "an idea that isn't serious", ex: "It was just a passing thought." },
          { front: "be out of ideas", back: "have no more ideas", ex: "I'm completely out of ideas." },
          { front: "give someone an idea", back: "make someone think of something", ex: "Your story gave me an idea." },
          { front: "a bright idea", back: "a clever idea", ex: "Whose bright idea was this?" }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "Brainstorm",
        phrases: [
          "occurs to me",
          "occurred to me",
          "springs to mind",
          "spring to mind",
          "dawned on me",
          "dawn on me",
          "bounce",
          "bright idea",
          "passing thought",
          "out of ideas",
          "gave me an idea",
          "give you an idea",
          "brainwave"
        ],
        items: [
          { q: "How can people make new friends as adults?", models: ["It occurs to me that joining a sports club could help."] },
          { q: "How can schools motivate teenagers to learn?", models: ["Nothing springs to mind immediately, but maybe real-life projects."] },
          { q: "How can employers reduce stress in the workplace?", models: ["Let's bounce a few ideas around – flexible hours, quiet rooms…"] },
          { q: "How can we encourage people to read more?", models: ["I had a brainwave: book swaps in offices."] },
          { q: "How can people achieve a better work-life balance?", models: ["It dawned on me that switching off notifications helps a lot."] },
          { q: "My house is always messy.", models: ["Here's a bright idea: ten minutes of tidying every evening."] },
          { q: "I have a week off but can't decide where to go.", models: ["I'm out of ideas – but your photos of the mountains gave me an idea."] },
          { q: "I can never remember new vocabulary.", models: ["It occurs to me that flashcards like these might help!"] },
          { q: "I have no idea what to get my parents for their anniversary.", models: ["Just a passing thought, but what about a weekend away?"] },
          { q: "I'm bored with my daily routine and want to change something.", models: ["It dawned on me that I could try a new hobby."] }
        ],
        src: "Revision"
      },
      {
        type: "cards",
        title: "Flashcards",
        items: [
          { front: "mull over", back: "think about carefully for a while", ex: "I spent weeks mulling it over." },
          { front: "ponder", back: "think carefully", ex: "I pondered several options." },
          { front: "ruminate", back: "think deeply, often too much", ex: "Don't ruminate on your mistakes." },
          { front: "deliberate", back: "think carefully before deciding", ex: "The jury deliberated for hours." },
          { front: "grapple with", back: "struggle with a difficult problem", ex: "I was grappling with work-life balance." },
          { front: "wrestle with", back: "try hard to deal with a problem", ex: "She wrestled with the decision for days." },
          { front: "zero in on", back: "focus closely on", ex: "Eventually I zeroed in on the main issue." },
          { front: "pin it down", back: "identify exactly", ex: "Something felt wrong, but I couldn't pin it down." },
          { front: "shed light on", back: "help to explain", ex: "Her story shed light on the problem." },
          { front: "rack your brains", back: "think very hard", ex: "I racked my brains for a gift idea." },
          { front: "go round in circles", back: "think or talk without making progress", ex: "We kept going round in circles." },
          { front: "take stock", back: "stop and assess a situation", ex: "I took stock of my finances." },
          { front: "root cause", back: "the real underlying reason", ex: "Stress was the root cause." },
          { front: "underestimate", back: "think something is smaller than it is", ex: "I had underestimated how unhappy I was." },
          { front: "baffled / perplexed / befuddled", back: "very confused", ex: "I was completely baffled by the instructions." },
          { front: "misconstrue / misread / misinterpret", back: "understand wrongly", ex: "I misread the situation." },
          { front: "intuitive", back: "based on feelings, not logic", ex: "It was an intuitive decision." }
        ],
        src: "Revision"
      },
      {
        type: "match",
        title: "Match the synonyms",
        items: [
          { a: "mull over", b: "ponder" },
          { a: "grapple with", b: "wrestle with" },
          { a: "baffled", b: "perplexed" },
          { a: "misconstrue", b: "misinterpret" },
          { a: "zero in on", b: "focus on" },
          { a: "rack your brains", b: "think very hard" },
          { a: "take stock", b: "assess the situation" }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "How did you reach that decision?",
        phrases: [
          "root cause",
          "take stock",
          "took stock",
          "round in circles",
          "underestimate",
          "intuitive",
          "perplexed",
          "baffled",
          "befuddled",
          "deliberate",
          "ruminat",
          "ponder",
          "mull",
          "zero in",
          "zeroed in",
          "shed light",
          "pin it down",
          "misconstru",
          "misread",
          "misinterpret",
          "rack",
          "racked",
          "grappl",
          "wrestl"
        ],
        items: [
          {
            q: "You decided to quit a job.",
            models: [
              "I spent weeks mulling it over. I was grappling with work-life balance. Eventually I zeroed in on the main issue: I had underestimated how unhappy I was."
            ]
          },
          { q: "You decided to simplify your life.", models: ["I took stock of everything I owned and realised clutter was the root cause of my stress."] },
          { q: "You chose where to go on holiday.", models: ["It was an intuitive choice – I didn't deliberate much."] },
          { q: "You bought a car.", models: ["I went round in circles for weeks before I pinned down what I really needed."] },
          { q: "You moved to another city.", models: ["I pondered it for months; a friend's advice shed light on my options."] },
          { q: "You changed careers.", models: ["I wrestled with the decision for a year."] },
          { q: "You ended a friendship.", models: ["I realised I had misread their behaviour for years."] },
          { q: "You chose what to cook for dinner.", models: ["I racked my brains, but in the end I made pasta."] },
          { q: "You are choosing a gift for someone you don't know well.", models: ["I'm completely baffled – nothing springs to mind."] }
        ],
        src: "Revision"
      }
    ]
  }
});
