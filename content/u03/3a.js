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
  learn: {
    theory: [
      {
        h: "Question forms in spoken English",
        p: "У розмовній англійській питання — це не лише «do you…?». Форма питання показує ставлення мовця: здивування, впевненість у відповіді, ввічливість чи наголос. На рівні C1 важливо і розпізнавати ці форми, і самому їх вживати.",
        table: [
          [
            "Negative question",
            "мовець уже очікує певну відповідь або шукає згоди; часто риторичне",
            "Don't you think we should wait for Ola? / Isn't it a bit late to start now?"
          ],
          [
            "Statement + question word",
            "здивування чи недовіра, або перепитування («я не дочув»)",
            "You paid how much? / We're meeting where?"
          ],
          [
            "You mean / So you're saying + statement",
            "перевірити, чи правильно зрозумів, або підсумувати думку співрозмовника",
            "So you're saying the deadline has moved? / You mean we don't need tickets?"
          ],
          [
            "Indirect question",
            "пом'якшити незручне чи особисте питання; формальніше; прямий порядок слів",
            "Could you tell me why the order was cancelled? / Would it be fair to say you weren't ready?"
          ],
          [
            "Question tag (falling)",
            "перевірити чи підтвердити те, у чому ти майже впевнений",
            "You've met Dan before, haven't you? / She isn't coming, is she?"
          ],
          [
            "Question word + is it (cleft)",
            "наголос на тому, про що питаємо; звучить формально або напружено",
            "What is it that you don't like about the plan? / Why is it that buses never come on time?"
          ]
        ]
      },
      {
        h: "Less common tags and embedded questions",
        list: [
          "Let's … , shall we? — Let's take a short break, shall we?",
          "Everyone / Nobody / Somebody → тег з they: Everybody enjoyed it, didn't they? Nobody called, did they?",
          "Imperative → will you? / won't you? — Pass me the salt, will you?",
          "Embedded questions після unclear, uncertain, not sure, I wonder: прямий порядок слів; для yes/no — if або whether. It's unclear why he resigned. I wonder whether they got our message."
        ]
      },
      {
        h: "Intonation",
        p: "У питанні типу statement + question word інтонація зазвичай різко йде вгору на питальному слові: We do it how many times? ↗ У tag-питаннях, якими ми лише підтверджуємо відоме, інтонація падає: It's cold, isn't it? ↘",
        ex: [
          "You've been here for how long?",
          "We need to leave at what time?",
          "You're not serious, are you?"
        ]
      },
      {
        h: "Ideas: useful phrases",
        table: [
          ["It occurs to me that…", "мені спало на думку, що…"],
          ["nothing springs to mind", "нічого не спадає на думку"],
          ["it dawned on me that…", "до мене (поступово) дійшло, що…"],
          ["bounce (a few) ideas around", "обговорити ідеї неформально, «покидати» ідеї"],
          ["a bright idea", "блискуча ідея (часто іронічно)"],
          ["just a passing thought", "просто думка, що промайнула; несерйозно"],
          ["be out of ideas", "вичерпати ідеї"],
          ["give someone an idea", "наштовхнути на думку"],
          ["have a brainwave", "раптом придумати щось геніальне"]
        ]
      },
      {
        h: "Більше практики",
        p: "Короткі онлайн-вправи з автоперевіркою, щоб довести до автоматизму заперечні й непрямі питання.",
        links: [
          { title: "Perfect English Grammar: negative questions", url: "https://www.perfect-english-grammar.com/negative-questions-exercise-1.html", note: "заперечні питання (Isn't it…? Don't you…?) — утворити з підказок" },
          {
            title: "Perfect English Grammar: indirect questions",
            url: "https://www.perfect-english-grammar.com/indirect-questions-exercise-1.html",
            note: "непрямі питання: прямий порядок слів після Could you tell me… / Do you know…"
          }
        ]
      }
    ],
    exercises: [
      {
        type: "sort",
        title: "Which question form is each question?",
        src: "SB 4",
        categories: [
          "negative question",
          "statement + question word",
          "You mean / So you're saying",
          "indirect question",
          "question tag",
          "question word + is it"
        ],
        items: [
          { text: "Wasn't the concert supposed to start at eight?", cat: 0 },
          { text: "Don't you get tired of commuting every day?", cat: 0 },
          { text: "You booked the hotel for when?", cat: 1 },
          { text: "They want us to finish it by when?", cat: 1 },
          { text: "So you're saying the budget has been cut again?", cat: 2 },
          { text: "You mean nobody told the client?", cat: 2 },
          { text: "I wonder if you could explain how the system works.", cat: 3 },
          { text: "Do you happen to know where the manager is?", cat: 3 },
          { text: "You're coming to the workshop, aren't you?", cat: 4 },
          { text: "Nobody saw the email, did they?", cat: 4 },
          { text: "What is it that makes this app so popular?", cat: 5 },
          { text: "Where is it that you grew up?", cat: 5 }
        ]
      },
      {
        type: "choice",
        title: "How does the second version change the meaning?",
        src: "SB 6",
        items: [
          { q: "a) How much does the course cost?  b) The course costs how much?", options: ["b shows surprise or disbelief", "b is more polite", "b is a rhetorical question"], answer: 0 },
          {
            q: "a) Is the location the main problem?  b) You mean the location is the main problem?",
            options: [
              "b checks that the speaker has understood correctly",
              "b expresses anger",
              "b asks for new information"
            ],
            answer: 0
          },
          { q: "a) How much did we spend?  b) Could you tell me how much we spent?", options: ["b sounds softer and more formal", "b shows surprise", "b expects the answer 'nothing'"], answer: 0 },
          { q: "a) Why are the trains always late?  b) Why is it that the trains are always late?", options: ["b adds emphasis and sounds more irritated", "b is more neutral", "b checks information"], answer: 0 },
          {
            q: "a) Do you think the plan is risky?  b) Don't you think the plan is risky?",
            options: [
              "b shows the speaker already thinks it is risky",
              "b shows the speaker thinks it is safe",
              "b is more formal"
            ],
            answer: 0
          },
          { q: "a) Could you have prepared better?  b) Would it be fair to say you could have prepared better?", options: ["b is a more indirect, diplomatic criticism", "b is more aggressive", "b is a request"], answer: 0 },
          {
            q: "a) Is it important to check the facts first?  b) Isn't it important to check the facts first?",
            options: [
              "b invites agreement — the speaker thinks it is important",
              "b asks for genuine information",
              "b expresses surprise"
            ],
            answer: 0
          }
        ]
      },
      {
        type: "transform",
        title: "Use the prompts to write questions to ask someone about their job or studies",
        src: "SB 7a",
        items: [
          { q: "Isn't it … ?", start: "Isn't it", models: ["Isn't it hard to concentrate in an open-plan office?"] },
          { q: "Don't you … ?", start: "Don't you", models: ["Don't you get bored doing the same tasks every day?"] },
          { q: "You don't … , do you?", start: "You don't", models: ["You don't have to work at weekends, do you?"] },
          { q: "Why is it that … ?", start: "Why is it that", models: ["Why is it that you chose to study law?"] },
          { q: "You've … for how long?", start: "You've", models: ["You've been working there for how long?"] },
          { q: "Could you tell me … ?", start: "Could you tell me", models: ["Could you tell me what a typical day looks like for you?"] },
          { q: "So you're saying … ?", start: "So you're saying", models: ["So you're saying you'd like to change careers?"] }
        ]
      },
      {
        type: "cards",
        title: "Ideas",
        src: "SB 8",
        items: [
          { front: "It occurs to me that…", back: "мені спало на думку, що…", ex: "It occurs to me that we could ask Mia for help." },
          { front: "nothing springs to mind", back: "нічого не спадає на думку", ex: "I've been trying to think of a name, but nothing springs to mind." },
          { front: "something dawns on me", back: "до мене доходить (усвідомлюю)", ex: "It suddenly dawned on me that the shop would be closed." },
          { front: "bounce a few ideas around", back: "неформально обговорити ідеї", ex: "Let's meet for coffee and bounce a few ideas around." },
          { front: "a bright idea", back: "блискуча ідея (часто іронічно)", ex: "Whose bright idea was it to go camping in November?" },
          { front: "just a passing thought", back: "просто думка, нічого серйозного", ex: "Don't take it too seriously – it was just a passing thought." },
          { front: "be out of ideas", back: "вичерпати ідеї", ex: "I'm out of ideas – you choose the restaurant." },
          { front: "give someone an idea", back: "наштовхнути на думку", ex: "That documentary has given me an idea for my project." },
          { front: "have a brainwave", back: "раптово придумати щось геніальне", ex: "Kai had a brainwave about how to save money on the trip." }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with one word",
        src: "SB 9a",
        items: [
          {
            q: "I'd rather ___ ideas around with my colleagues than sit and think on my own.",
            answers: [
              ["bounce"]
            ]
          },
          {
            q: "When I think about summer holidays, the first thing that ___ to mind is the smell of the sea.",
            answers: [
              ["springs", "comes"]
            ]
          },
          {
            q: "It only ___ to me later that I'd forgotten to lock the door.",
            answers: [
              ["occurred"]
            ]
          },
          {
            q: "After a few weeks, it finally ___ on me that the job wasn't right for me.",
            answers: [
              ["dawned"]
            ]
          },
          {
            q: "I was lying in the bath when I suddenly had a ___ about how to fix the problem.",
            answers: [
              ["brainwave"]
            ]
          },
          {
            q: "I'd love to redecorate the flat, but right now I'm completely out of ___.",
            answers: [
              ["ideas"]
            ]
          },
          {
            q: "Seeing your photos has ___ me an idea for our next holiday.",
            answers: [
              ["given"]
            ]
          },
          {
            q: "Don't worry, I wasn't serious – it was just a ___ thought.",
            answers: [
              ["passing"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Brainstorm a situation and report back",
        src: "SB 10–11",
        intro: "Choose a situation, generate ideas with a brainstorming technique (round robin, role storming, quiet or reverse brainstorming) and use question forms to react to ideas.",
        phrases: [
          "occurs to me",
          "springs to mind",
          "dawned on me",
          "bounce",
          "brainwave",
          "passing thought",
          "out of ideas",
          "isn't it",
          "don't you",
          "you mean",
          "you're saying",
          "is it that",
          "could you tell me"
        ],
        items: [
          {
            q: "Your school needs a new logo. What could it be?",
            models: [
              "It occurs to me that we could use an open book. – You mean a book with wings? Isn't that a bit old-fashioned?"
            ]
          },
          {
            q: "You'd like to celebrate the end of the course with your class. What can you do?",
            models: [
              "Let's bounce a few ideas around. What is it that everyone enjoys? Nothing springs to mind except food, so how about a picnic?"
            ]
          },
          {
            q: "A friend is looking for a job. What advice can you give them?",
            models: [
              "Could you tell me what kind of work they're interested in? So you're saying they've applied for how many jobs?"
            ]
          },
          {
            q: "What advice can you give to someone learning a language?",
            models: [
              "I had a brainwave: change the language on your phone. Don't you think that would force you to learn new words?"
            ]
          },
          {
            q: "Report back: what solution did your group come up with?",
            models: [
              "After going round the table a few times, it dawned on us that the simplest idea was the best one."
            ]
          }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "match",
        title: "Match the question halves",
        src: "WB 1",
        items: [
          { a: "Isn't it time", b: "we went home?" },
          { a: "So, you mean you", b: "forgot to book the table?" },
          { a: "You saw him", b: "when, exactly?" },
          { a: "Where is it", b: "that you'd like to live?" },
          { a: "Do you know what time", b: "the museum opens?" },
          { a: "It's not very expensive,", b: "is it?" }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversations",
        src: "WB 2",
        items: [
          {
            q: "A: What ___ that we're meant to prepare for tomorrow? B: A short presentation about your project.",
            answers: [
              ["is it"]
            ]
          },
          {
            q: "A: I'll never pass this exam … B: So you ___ you don't think you're ready?",
            answers: [
              ["mean that", "mean", "are saying", "'re saying"]
            ]
          },
          {
            q: "A: My car broke down on the motorway. B: So you got to work ___? A: I hitchhiked, believe it or not.",
            answers: [
              ["how"]
            ]
          },
          {
            q: "A: You're going to the supermarket later, ___? Can you get me some eggs? B: Sure.",
            answers: [
              ["aren't you"]
            ]
          },
          {
            q: "A: Do you ___ the nearest post office is? B: You've lived here for ten years! Surely you know!",
            answers: [
              ["know where"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Complete the conversation using the prompts in brackets",
        src: "WB 3",
        intro: "A and B are planning a leaving party for a colleague.",
        items: [
          { q: "(isn't / Sara's job / organise)?", start: "Isn't it", models: ["Isn't it Sara's job to organise it?"] },
          { q: "(where / that / we / have / the party last year)? I've forgotten.", start: "Where is it", models: ["Where is it that we had the party last year?"] },
          { q: "(know if / the gallery / allow) parties there?", start: "Do you know", models: ["Do you know if the gallery allows parties there?"] },
          { q: "(not possible / hire / the boat)? That'd be fun.", start: "Isn't it", models: ["Isn't it possible to hire the boat?"] },
          { q: "(very expensive, / will / not / it)?", start: "It'll", models: ["It'll be very expensive, won't it?"] },
          { q: "(so / mean / we / need / find) somewhere cheaper?", start: "So you mean", models: ["So you mean we need to find somewhere cheaper?"] }
        ]
      },
      {
        type: "gap",
        title: "Complete the definitions (bounce, brainwave, dawns, idea, out of, passing, springs)",
        src: "WB 4",
        items: [
          {
            q: "A bright ___ is a very clever one.",
            answers: [
              ["idea"]
            ]
          },
          {
            q: "If you're ___ ideas, you can't think of anything else to do.",
            answers: [
              ["out of"]
            ]
          },
          {
            q: "If something ___ to mind, you suddenly think of it.",
            answers: [
              ["springs"]
            ]
          },
          {
            q: "If something ___ on you, you start to realise it.",
            answers: [
              ["dawns"]
            ]
          },
          {
            q: "When you ___ ideas around, you discuss them with other people.",
            answers: [
              ["bounce"]
            ]
          },
          {
            q: "A ___ thought is an idea you haven't considered in much detail.",
            answers: [
              ["passing"]
            ]
          },
          {
            q: "A ___ is a sudden clever idea.",
            answers: [
              ["brainwave"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Complete the second sentence so it has a similar meaning to the first",
        src: "WB 5",
        intro: "Use one of: bounce, brainwave, bright, dawned, given, occurs, out, thought.",
        items: [
          { q: "I have a feeling Tom is hiding something.", start: "It occurs to me", models: ["It occurs to me that Tom is hiding something."] },
          {
            q: "Let's discuss some ideas for the campaign.",
            start: "Let's",
            models: [
              "Let's bounce some ideas around for the campaign.",
              "Let's bounce around some ideas for the campaign."
            ]
          },
          { q: "I'm hoping someone will suddenly think of a clever solution.", start: "Hopefully,", models: ["Hopefully, someone will have a brainwave."] },
          { q: "Oh, you've made me think – shall we cook at home tonight?", start: "Oh, you've just", models: ["Oh, you've just given me the idea of cooking at home tonight."] },
          { q: "Relax, it wasn't a serious suggestion.", start: "Relax, it", models: ["Relax, it was just a passing thought."] },
          { q: "Has anybody got any clever suggestions?", start: "Has anybody got", models: ["Has anybody got any bright ideas?"] },
          { q: "I've realised what you want me to say.", start: "It's", models: ["It's dawned on me what you want me to say."] },
          { q: "You decide – I can't think of anything else.", start: "You decide,", models: ["You decide, I'm out of ideas for now."] }
        ]
      }
    ]
  },
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
      },
      {
        type: "gap",
        title: "Complete the questions with the missing words",
        src: "LB 3A",
        items: [
          {
            q: "___ you want to come to the gig? I thought you were a fan of the band.",
            answers: [
              ["Don't"]
            ]
          },
          {
            q: "You don't eat fish, ___?",
            answers: [
              ["do you"]
            ]
          },
          {
            q: "You think this old bike is worth ___? £500?",
            answers: [
              ["how much"]
            ]
          },
          {
            q: "___ you tell me how long the repair will take?",
            answers: [
              ["Could", "Can", "Would"]
            ]
          },
          {
            q: "___ you going to say goodbye? That was a bit rude.",
            answers: [
              ["Weren't", "Aren't"]
            ]
          },
          {
            q: "Why ___ he never answers his phone?",
            answers: [
              ["is it that"]
            ]
          },
          {
            q: "You stayed ___? At your ex's flat?",
            answers: [
              ["where"]
            ]
          },
          {
            q: "I can't decide ___ I should accept the offer or not.",
            answers: [
              ["whether", "if"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make questions",
        src: "LB 3A",
        items: [
          { words: ["much", "paid", "You", "how"], answer: "You paid how much?" },
          { words: ["open", "the", "that", "was", "Who", "it", "left", "door"], answer: "Who was it that left the door open?" },
          { words: ["minds", "change", "late", "it", "Isn't", "too", "to", "our"], answer: "Isn't it too late to change our minds?" },
          { words: ["call", "you", "me", "you", "Could", "tell", "why", "didn't"], answer: "Could you tell me why you didn't call?" },
          { words: ["about", "ask", "wanted", "that", "is", "What", "it", "you", "to", "me"], answer: "What is it that you wanted to ask me about?" },
          { words: ["is", "the", "me", "you", "Could", "tell", "if", "room", "free"], answer: "Could you tell me if the room is free?" },
          { words: ["happened", "out", "to", "you", "Didn't", "want", "find", "what"], answer: "Didn't you want to find out what happened?" },
          { words: ["we", "pizza", "order", "Let's", "a", "shall"], answer: "Let's order a pizza, shall we?" }
        ]
      },
      {
        type: "match",
        title: "Match the pairs of prefixes with their meanings",
        src: "VB 3A",
        items: [
          { a: "bi- / multi-", b: "two / many" },
          { a: "hyper- / hypo-", b: "above / under (more than normal / less than normal)" },
          { a: "inter- / intra-", b: "between or among / within" },
          { a: "macro- / micro-", b: "on a very large scale / on a very small scale" },
          { a: "over- / under-", b: "too much / not enough" },
          { a: "re- / pro-", b: "backward / forward" }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with a word formed from a prefix",
        src: "VB 3A",
        items: [
          {
            q: "___ is the study of living things that are too small to see without a microscope.",
            answers: [
              ["Microbiology"]
            ],
            hint: "micro… / macro…"
          },
          {
            q: "Nurses are seriously ___ – they deserve much higher salaries.",
            answers: [
              ["underpaid"]
            ],
            hint: "over… / under…"
          },
          {
            q: "We must ___ plastic waste dramatically over the next decade.",
            answers: [
              ["reduce"]
            ],
            hint: "re… / pro…"
          },
          {
            q: "The new tax only affects ___ trade, i.e. trade inside one state.",
            answers: [
              ["intrastate"]
            ],
            hint: "inter… / intra…"
          },
          {
            q: "My old teacher was so ___ – nothing we did was ever good enough.",
            answers: [
              ["hypercritical"]
            ],
            hint: "hyper… / hypo…"
          },
          {
            q: "The two neighbouring countries have restarted ___ talks.",
            answers: [
              ["bilateral"]
            ],
            hint: "bi… / multi…"
          },
          {
            q: "She's a real ___: she always does far more than her targets.",
            answers: [
              ["overachiever"]
            ],
            hint: "over… / under…"
          },
          {
            q: "My doctor says I've got ___, so I need to cut down on salt.",
            answers: [
              ["hypertension"]
            ],
            hint: "hyper… / hypo…"
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the questions using the words given",
        src: "Check 1",
        items: [
          { q: "What do you want to talk to me about?", start: "What is", models: ["What is it that you want to talk to me about?"] },
          { q: "How long have you worked here?", start: "Could you tell me", models: ["Could you tell me how long you've worked here?"] },
          { q: "Do you want to invite Max? I'm sure you said you did.", start: "Didn't", models: ["Didn't you say you wanted to invite Max?"] },
          { q: "Should we raise the price?", start: "You mean", models: ["You mean we should raise the price?"] },
          { q: "Who suggested this restaurant?", start: "Who was", models: ["Who was it that suggested this restaurant?"] },
          { q: "Where did you go after the party?", start: "You went", models: ["You went where after the party?"] }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "Check 2",
        items: [
          { q: "This workshop is a chance for us to ___ ideas around for the new website.", options: ["bounce", "occur"], answer: 0 },
          { q: "Whose ___ idea was it to leave the umbrellas at home?", options: ["bright", "spring"], answer: 0 },
          { q: "I've had a ___ – let's forget the housework and go to the cinema!", options: ["brainwave", "dawn"], answer: 0 },
          { q: "What ___ to mind when you think of your first job?", options: ["springs", "gives"], answer: 0 },
          { q: "Help me choose, I'm out of ___.", options: ["ideas", "brainwaves"], answer: 0 },
          { q: "You've ___ me an idea! Why don't we ask Leo to take the photos?", options: ["given", "bounced"], answer: 0 },
          { q: "It suddenly ___ on me that I'd met her before.", options: ["dawned", "occurred"], answer: 0 },
          { q: "It ___ to me that we haven't asked the customers what they think.", options: ["occurs", "springs"], answer: 0 }
        ]
      },
      {
        type: "errors",
        title: "Are these questions correct? Correct the ones that are wrong",
        src: "extra: https://www.perfect-english-grammar.com/indirect-questions-exercise-1.html",
        items: [
          { s: "Could you tell me where is the nearest pharmacy?", ok: false, fix: "Could you tell me where the nearest pharmacy is?" },
          { s: "I was wondering whether you'd had a chance to look at my proposal.", ok: true },
          { s: "Don't you think the price is a little steep?", ok: true },
          { s: "Do you happen to know what time does the museum close?", ok: false, fix: "Do you happen to know what time the museum closes?" },
          { s: "Nobody remembered to lock the door, didn't they?", ok: false, fix: "Nobody remembered to lock the door, did they?" },
          { s: "It's not clear if or not the deal will go ahead.", ok: false, fix: "It's not clear whether or not the deal will go ahead." },
          { s: "Haven't you finished that report yet? It was due on Monday!", ok: true },
          { s: "Would you mind telling me why did you turn the offer down?", ok: false, fix: "Would you mind telling me why you turned the offer down?" },
          { s: "You spent how much on a pair of trainers?", ok: true },
          { s: "Let's grab a coffee first, don't we?", ok: false, fix: "Let's grab a coffee first, shall we?" },
          { s: "Do you know if Mark is coming tonight?", ok: true },
          { s: "Hand me that file, will you?", ok: true }
        ]
      },
      {
        type: "sort",
        title: "What kind of question is it?",
        src: "extra: https://www.perfect-english-grammar.com/negative-questions-exercise-1.html",
        categories: ["negative question", "echo question", "indirect question", "question tag"],
        items: [
          { text: "Isn't that the man from the news?", cat: 0 },
          { text: "Wouldn't it be easier to just call her?", cat: 0 },
          { text: "Didn't I tell you it would rain?", cat: 0 },
          { text: "She's moving to where?", cat: 1 },
          { text: "You left the keys where?", cat: 1 },
          { text: "They charged you how much?", cat: 1 },
          { text: "Any idea what time the shop opens?", cat: 2 },
          { text: "I'd like to know who authorised this payment.", cat: 2 },
          { text: "Could you explain why the meeting was cancelled?", cat: 2 },
          { text: "You've signed the contract, haven't you?", cat: 3 },
          { text: "He can't drive, can he?", cat: 3 },
          { text: "Nobody saw anything, did they?", cat: 3 }
        ]
      }
    ]
  }
});
