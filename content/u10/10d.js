/*
 * 10D English in action
 */
ES.registerLesson({
  id: "10D",
  unit: 10,
  letter: "D",
  title: "English in action",
  uk: "Звіт про прогрес: фрази для підсумку досягнень і постановки цілей, лексика успіху й невдачі",
  goal: "deliver a progress report",
  focus: { vocab: "success and failure", pron: "elision of /d/, /t/ and /s/ between words" },
  learn: {
    theory: [
      {
        h: "Success and failure",
        table: [
          ["pull it off", "success – вдатися, впоратися зі складним"],
          ["make it", "success – досягти мети, встигнути"],
          ["bounce back", "success – швидко оговтатися після невдачі"],
          ["pay off", "success – окупитися, дати результат"],
          ["take off", "success – стрімко піти вгору, стати успішним"],
          ["fall (just) short of", "failure – трохи не дотягнути до"],
          ["go downhill", "failure – погіршуватися, котитися вниз"],
          ["mess (things) up", "failure – зіпсувати, напартачити"],
          ["go up in smoke", "failure – піти прахом, зникнути"],
          ["lose out (on)", "failure – втратити (можливість), програти"]
        ]
      },
      {
        h: "Summarising progress",
        list: [
          "You've made headway with… / You've made significant/solid progress in…",
          "You've come on in leaps and bounds.",
          "You've made a breakthrough in… / You've achieved proficiency in…",
          "You're now able to … adeptly. / You have a good track record in…",
          "You've yet to… / You've still got a bit of work to do in/on…",
          "You're continuing to grow/develop in… / You're improving, but … still needs some work.",
          "You've still got some way to go in…"
        ]
      },
      {
        h: "Setting goals and referring to the future",
        list: [
          "I intend to… / The aim is to… / My ultimate goal is to…",
          "Ideally, I'd like to put this to good use by…",
          "I think this goal should be easily attainable.",
          "I'd like to seek ways to put this into practice. / I'm hoping this will boost my…",
          "It would be great if I could…",
          "…by the end of the year / in the short/mid/long(er) term / three months from now / in three months' time / in the near/foreseeable/not-too-distant future"
        ]
      },
      {
        h: "Pronunciation: disappearing sounds",
        p: "In fast speech /d/, /t/ (and sometimes /s/) at the end of a word often disappear before a consonant: shoul(d) be, woul(d) be, soli(d) progress, firs(t) time.",
        ex: ["This goal should be easily attainable.", "You've made solid progress in your writing."]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with: back, downhill, it, off (x3), out, short, up (x2)",
        src: "SB 2a",
        items: [
          {
            q: "Despite hardly rehearsing, the band managed to pull it ___ and the crowd loved them.",
            answers: [
              ["off"]
            ]
          },
          {
            q: "The shop had a good year, but it fell just ___ of its sales target.",
            answers: [
              ["short"]
            ]
          },
          {
            q: "The holiday started well, then went ___ when it rained for a week.",
            answers: [
              ["downhill"]
            ]
          },
          {
            q: "The traffic was terrible, but we made ___ to the airport in the end.",
            answers: [
              ["it"]
            ]
          },
          {
            q: "After losing in the first round, the champion bounced ___ to win the next tournament.",
            answers: [
              ["back"]
            ]
          },
          {
            q: "His careless comment has messed things ___ for the whole team.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "All those late nights studying finally paid ___ – she got top marks.",
            answers: [
              ["off"]
            ]
          },
          {
            q: "When the factory burned down, all their plans went ___ in smoke.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "Apply now – you don't want to lose ___ on this chance.",
            answers: [
              ["out"]
            ]
          },
          {
            q: "After a slow start, her podcast took ___ and now has a million listeners.",
            answers: [
              ["off"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Success or failure?",
        src: "SB 2b",
        categories: ["Success", "Failure"],
        items: [
          { text: "pull it off", cat: 0 },
          { text: "make it", cat: 0 },
          { text: "bounce back", cat: 0 },
          { text: "pay off", cat: 0 },
          { text: "take off", cat: 0 },
          { text: "fall short of", cat: 1 },
          { text: "go downhill", cat: 1 },
          { text: "mess things up", cat: 1 },
          { text: "go up in smoke", cat: 1 },
          { text: "lose out on", cat: 1 }
        ]
      },
      {
        type: "gap",
        title: "Complete the useful phrases for summarising progress",
        src: "SB 4b",
        items: [
          {
            q: "You've ___ real headway with your listening.",
            answers: [
              ["made"]
            ]
          },
          {
            q: "You've ___ solid progress in your writing.",
            answers: [
              ["made"]
            ]
          },
          {
            q: "You're now ___ to give presentations adeptly.",
            answers: [
              ["able"]
            ]
          },
          {
            q: "We've still ___ a bit of work to do on your pronunciation.",
            answers: [
              ["got"]
            ]
          },
          {
            q: "You've still got some ___ to go in grammar accuracy.",
            answers: [
              ["way"]
            ]
          },
          {
            q: "You've come on in leaps and ___.",
            answers: [
              ["bounds"]
            ]
          },
          {
            q: "You have a good track ___ in customer service.",
            answers: [
              ["record"]
            ]
          },
          {
            q: "You've ___ to show real confidence in meetings.",
            answers: [
              ["yet"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Which function does each phrase have?",
        src: "SB 7",
        categories: ["Setting goals", "Referring to the future"],
        items: [
          { text: "I intend to…", cat: 0 },
          { text: "Ideally, I'd like to put this to good use by…", cat: 0 },
          { text: "I think this goal should be easily attainable.", cat: 0 },
          { text: "My ultimate goal is to…", cat: 0 },
          { text: "I'm hoping this will boost my…", cat: 0 },
          { text: "…by the end of the year.", cat: 1 },
          { text: "In the medium term,…", cat: 1 },
          { text: "Six months from now,…", cat: 1 },
          { text: "…in two years' time.", cat: 1 },
          { text: "In the not-too-distant future,…", cat: 1 }
        ]
      },
      {
        type: "speak",
        title: "Deliver a progress report",
        src: "SB 9–12",
        intro: "Look back over the course. Report your progress in English (grammar, vocabulary, listening, reading, speaking, writing, English for work) and set goals with a timeframe.",
        phrases: [
          "I've made solid progress in…",
          "I've come on in leaps and bounds.",
          "I've still got some way to go in…",
          "I've yet to…",
          "My ultimate goal is to…",
          "I think this goal should be easily attainable.",
          "in the not-too-distant future",
          "by the end of the year"
        ],
        items: [
          {
            q: "What have you achieved?",
            models: [
              "I've made solid progress in listening – I can now follow podcasts at normal speed – and my vocabulary has come on in leaps and bounds."
            ]
          },
          {
            q: "What still needs work?",
            models: [
              "I've still got some way to go in writing; I've yet to write a formal report without mistakes in articles."
            ]
          },
          {
            q: "Set a goal with a timeframe.",
            models: [
              "My ultimate goal is to give a presentation in English at work by the end of the year. I think this goal should be easily attainable if I practise every week."
            ]
          },
          {
            q: "Give your partner feedback on their report.",
            models: [
              "You've clearly made a breakthrough in speaking. It would be great if you could put this to good use by joining an English-speaking club."
            ]
          }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "gap",
        title: "Complete the words. The first letter is given",
        src: "WB 1",
        intro: "A: So, how was your year? B: A mixed bag really…",
        items: [
          {
            q: "The first half started well, but it soon went ___ when someone ___ up an important order.",
            hint: "d… / m…",
            answers: [
              ["downhill"],
              ["messed"]
            ]
          },
          {
            q: "It meant we ___ out on a big contract to our main rival…",
            hint: "l…",
            answers: [
              ["lost"]
            ]
          },
          {
            q: "…and watched our dreams of becoming market leader go up in ___.",
            hint: "s…",
            answers: [
              ["smoke"]
            ]
          },
          {
            q: "Fortunately, we ___ back in the second half.",
            hint: "b…",
            answers: [
              ["bounced"]
            ]
          },
          {
            q: "We ___ off a great campaign, which saw a new product we launched ___ off.",
            hint: "p… / t…",
            answers: [
              ["pulled"],
              ["take"]
            ]
          },
          {
            q: "It was a huge risk, but it ___ off for us.",
            hint: "p…",
            answers: [
              ["paid"]
            ]
          },
          {
            q: "We fell ___ of our forecast earnings, but we almost ___ it.",
            hint: "s… / m…",
            answers: [
              ["short"],
              ["made"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make sentences",
        src: "WB 2",
        items: [
          { words: ["You're", "now", "able", "to", "operate", "the", "system", "adeptly"], answer: "You're now able to operate the system adeptly." },
          {
            words: [
              "You've",
              "still",
              "got",
              "a",
              "bit",
              "of",
              "work",
              "to",
              "do",
              "on",
              "your",
              "organisational",
              "skills"
            ],
            answer: "You've still got a bit of work to do on your organisational skills."
          },
          { words: ["You've", "still", "got", "some", "way", "to", "go", "in", "problem", "solving"], answer: "You've still got some way to go in problem solving." },
          { words: ["You've", "made", "a", "breakthrough", "in", "your", "work"], answer: "You've made a breakthrough in your work." },
          { words: ["You've", "come", "on", "in", "leaps", "and", "bounds"], answer: "You've come on in leaps and bounds." },
          { words: ["You", "have", "a", "good", "track", "record", "in", "finance"], answer: "You have a good track record in finance." },
          { words: ["You're", "continuing", "to", "grow", "in", "the", "area", "of", "leadership"], answer: "You're continuing to grow in the area of leadership." },
          { words: ["You've", "made", "solid", "progress", "in", "your", "work"], answer: "You've made solid progress in your work." }
        ]
      },
      {
        type: "errors",
        title: "Correct the mistake in each sentence",
        src: "WB 3",
        items: [
          { s: "You've made a breakout in your swimming speed.", ok: false, fix: "You've made a breakthrough in your swimming speed." },
          { s: "You've achieved proficiency on woodwork, well done.", ok: false, fix: "You've achieved proficiency in woodwork, well done." },
          { s: "You've made significant process in your coding skills.", ok: false, fix: "You've made significant progress in your coding skills." },
          { s: "You're improving, but your serve still needs some job.", ok: false, fix: "You're improving, but your serve still needs some work." },
          { s: "You're already to demonstrate negotiation skills.", ok: false, fix: "You're yet to demonstrate negotiation skills." },
          { s: "You've got a good trail record in marketing.", ok: false, fix: "You've got a good track record in marketing." },
          { s: "You've still got some path to go before you're ready for the exam.", ok: false, fix: "You've still got some way to go before you're ready for the exam." },
          { s: "You're now able to change a bike tyre adultly.", ok: false, fix: "You're now able to change a bike tyre adeptly." }
        ]
      },
      {
        type: "order",
        title: "Use the prompts to make sentences about goals",
        src: "WB 4",
        items: [
          { words: ["The", "aim", "is", "to", "learn", "how", "to", "read", "music"], answer: "The aim is to learn how to read music." },
          { words: ["I'm", "hoping", "this", "will", "boost", "my", "confidence"], answer: "I'm hoping this will boost my confidence." },
          { words: ["My", "ultimate", "goal", "is", "to", "run", "five", "kilometres"], answer: "My ultimate goal is to run five kilometres." },
          {
            words: [
              "I",
              "think",
              "this",
              "goal",
              "should",
              "be",
              "easily",
              "attainable",
              "in",
              "the",
              "medium",
              "term"
            ],
            answer: "I think this goal should be easily attainable in the medium term."
          },
          { words: ["Ideally,", "I'd", "like", "to", "put", "this", "to", "good", "use", "by", "teaching", "others"], answer: "Ideally, I'd like to put this to good use by teaching others." },
          { words: ["It", "would", "be", "great", "if", "I", "could", "develop", "better", "cooking", "skills"], answer: "It would be great if I could develop better cooking skills." },
          { words: ["I'd", "like", "to", "seek", "ways", "to", "put", "this", "into", "practice"], answer: "I'd like to seek ways to put this into practice." },
          {
            words: [
              "It",
              "would",
              "be",
              "great",
              "if",
              "I",
              "could",
              "get",
              "a",
              "new",
              "job",
              "in",
              "the",
              "not-too-distant",
              "future"
            ],
            answer: "It would be great if I could get a new job in the not-too-distant future."
          }
        ]
      },
      {
        type: "choice",
        title: "Complete the conversation with the best phrase",
        src: "WB 5",
        items: [
          { q: "A: So what are your plans for next year? B: Well, my ___ buy my own car.", options: ["ultimate goal is to", "I've made real headway", "by the end of the year"], answer: 0 },
          { q: "A: Great! When are you thinking? Like, ___, or is that too soon?", options: ["in a couple of months", "I'm hoping this will boost", "If I'm able to do that adeptly"], answer: 0 },
          { q: "B: I can't afford it right away, but definitely ___. That's the plan, anyway.", options: ["by the end of the year", "I've still got some way to go", "It would be great"], answer: 0 },
          { q: "B: ___ if I could get a pay rise.", options: ["It would be great", "Ultimate goal is to", "In a couple of months"], answer: 0 },
          { q: "A: How can you get that? B: Well, ___ when it comes to understanding the software.", options: ["I've made real headway", "by the end of the year", "my ultimate goal is to"], answer: 0 },
          { q: "B: ___ before I can use it independently, though, with no support at all.", options: ["I've still got some way to go", "I've made real headway", "I'm hoping this will boost"], answer: 0 },
          { q: "B: ___, then I'll be able to show I deserve a pay rise.", options: ["If I'm able to do that adeptly", "In a couple of months", "It would be great"], answer: 0 },
          { q: "A: Sounds like you know what you're doing. B: I do. ___ my chances of actually making it happen!", options: ["I'm hoping this will boost", "I've still got some way to go", "By the end of the year"], answer: 0 }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "A model progress report",
        ex: [
          "Over the last year, I've made solid progress in reading – I can now get through a novel in English without a dictionary.",
          "I've come on in leaps and bounds with phrasal verbs, but I've still got some way to go in writing formal emails.",
          "My ultimate goal is to pass the C2 exam. Ideally, I'd like to take it in the not-too-distant future – a year from now, if all goes well."
        ]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with the correct form of: attainable, better, bound, dramatic, foreseeable, get, hunch, leap, turn",
        src: "Check 10",
        items: [
          {
            q: "Talking about results: It ___ out that my ___ had been correct.",
            answers: [
              ["turned"],
              ["hunch"]
            ]
          },
          {
            q: "Talking about results: Overall, it was a ___ change for the ___.",
            answers: [
              ["dramatic"],
              ["better"]
            ]
          },
          {
            q: "Dealing with interruptions: Yes, well, I'm just ___ to that.",
            answers: [
              ["getting"]
            ]
          },
          {
            q: "Summarising progress: You've come on in ___ and ___.",
            answers: [
              ["leaps"],
              ["bounds"]
            ]
          },
          {
            q: "Setting goals: I think this goal should be easily ___.",
            answers: [
              ["attainable"]
            ]
          },
          {
            q: "Referring to the future: I think that's a great plan for the ___ future.",
            answers: [
              ["foreseeable"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct phrase",
        src: "Revision",
        items: [
          { q: "Despite a terrible first half, the team managed to ___ and win 3–2.", options: ["bounce back", "fall short", "go downhill"], answer: 0 },
          { q: "We worked hard on the bid and it really ___.", options: ["paid off", "messed up", "lost out"], answer: 0 },
          { q: "The restaurant used to be great, but it's ___ since the chef left.", options: ["gone downhill", "taken off", "pulled it off"], answer: 0 },
          { q: "She ___ of the world record by less than a second.", options: ["fell just short", "made it", "bounced back"], answer: 0 },
          { q: "Nobody thought we could finish the project in a week, but we ___.", options: ["pulled it off", "went up in smoke", "lost out"], answer: 0 },
          { q: "If you don't apply today, you'll ___ on a great opportunity.", options: ["lose out", "take off", "pay off"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the feedback using the phrase in brackets",
        src: "Revision",
        items: [
          { q: "Your Spanish has improved a lot. (leaps and bounds)", models: ["Your Spanish has come on in leaps and bounds."] },
          { q: "You still need to work on your time management. (some way to go)", models: ["You've still got some way to go in time management."] },
          { q: "You haven't led a meeting yet. (yet to)", models: ["You've yet to lead a meeting."] },
          { q: "You can now use the software skilfully. (adeptly)", models: ["You're now able to use the software adeptly."] },
          { q: "I want to get a promotion soon. (not-too-distant future)", models: ["It would be great if I could get a promotion in the not-too-distant future."] }
        ]
      }
    ]
  }
});
