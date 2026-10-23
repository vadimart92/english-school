/*
 * 8B Pivotal moments
 */
ES.registerLesson({
  id: "8B",
  unit: 8,
  letter: "B",
  title: "Pivotal moments",
  uk: "Переломні моменти: майбутнє в минулому (was due to, was about to, on the verge of…) та лексика ухвалення рішень",
  goal: "describe a pivotal moment in your life",
  focus: { grammar: "the future in the past", vocab: "decision making and reflection", pron: "linking consonants at word boundaries" },
  learn: {
    theory: [
      {
        h: "The future seen from the past",
        p: "Each form has a present equivalent; we just move it into the past. Often the plan did not happen.",
        table: [
          [
            "was/were going to, past continuous",
            "past plans, usually not fulfilled: I was going to relax this weekend, but… / We were meeting on Friday, but he cancelled."
          ],
          [
            "was always going to / was bound to",
            "something that was certain to happen: It was always going to end badly. / The policy was bound to cause problems."
          ],
          ["was/were due to", "scheduled, formally planned events: The concert was due to start at eight."],
          [
            "was/were (all) set to, on course to",
            "almost certain because of plans/conditions at the time: We were all set to leave when we heard the news."
          ],
          ["was/were about to", "imminent – just about to happen: I was about to leave when they turned up."],
          [
            "was/were on the point/verge of + -ing",
            "a change that had already begun: They were on the verge of giving up."
          ],
          [
            "was/were on the threshold of + noun",
            "a wider change or new situation that was beginning: Britain was on the threshold of a new era."
          ]
        ],
        uk: {
          h: "Майбутнє з погляду минулого",
          p: "Кожна форма має відповідник у теперішньому; ми просто переносимо її в минуле. Часто план так і не здійснився.",
          table: [
            [
              "was/were going to, Past Continuous",
              "плани в минулому, зазвичай нездійснені: I was going to relax this weekend, but… / We were meeting on Friday, but he cancelled."
            ],
            [
              "was always going to / was bound to",
              "те, що мало статися неминуче: It was always going to end badly. / The policy was bound to cause problems."
            ],
            [
              "was/were due to",
              "заплановані, офіційно призначені події: The concert was due to start at eight."
            ],
            [
              "was/were (all) set to, on course to",
              "майже напевно через тодішні плани чи обставини: We were all set to leave when we heard the news."
            ],
            ["was/were about to", "от-от мало статися: I was about to leave when they turned up."],
            [
              "was/were on the point/verge of + -ing",
              "зміна, яка вже почалася: They were on the verge of giving up."
            ],
            [
              "was/were on the threshold of + іменник",
              "ширша зміна чи нова ситуація, що починалася: Britain was on the threshold of a new era."
            ]
          ]
        }
      },
      {
        h: "Verbs with future meaning",
        p: "assume, decide, envisage, expect, guess, hope, imagine, know, plan, suspect, think + would / to-infinitive / passive with that.",
        ex: [
          "We expected the book to sell well, but it didn't.",
          "It was envisaged that people would live on the Moon by 2000.",
          "I suspected they wouldn't accept our offer."
        ],
        uk: { h: "Дієслова зі значенням майбутнього", p: "assume, decide, envisage, expect, guess, hope, imagine, know, plan, suspect, think + would / інфінітив з to / пасив з that." }
      },
      {
        h: "Pronunciation: linking at word boundaries",
        p: "When the same or a similar consonant ends one word and starts the next, we pronounce it once, slightly longer: expec(t) to, se(t) to, abou(t) to.",
        ex: ["I didn't expect to see this happen.", "We were about to launch it."],
        uk: { h: "Вимова: зв'язування на межі слів", p: "Коли той самий або схожий приголосний закінчує одне слово й починає наступне, вимовляємо його один раз, трохи довше: expec(t) to, se(t) to, abou(t) to." }
      },
      {
        h: "Decision making and reflection",
        table: [
          ["with the benefit of hindsight", "looking back with the knowledge you have now"],
          ["(not) pan out", "(not) develop in the way you hoped"],
          ["stop short of (doing)", "almost do something, but not quite"],
          ["agonise over", "think about something for a long time, worrying"],
          ["be torn between", "be unable to choose between two things"],
          ["weigh up the options", "compare the pros and cons"],
          ["be in a quandary (over)", "be unsure what to do in a difficult situation"],
          ["on reflection", "after thinking about it again"]
        ],
        uk: {
          h: "Ухвалення рішень і роздуми",
          table: [
            ["with the benefit of hindsight", "оглядаючись назад, знаючи те, що знаєш тепер"],
            ["(not) pan out", "(не) скластися так, як сподівався"],
            ["stop short of (doing)", "мало не зробити щось, але зупинитися"],
            ["agonise over", "довго й болісно вагатися щодо чогось"],
            ["be torn between", "не могти вибрати між двома речами"],
            ["weigh up the options", "зважити всі за і проти"],
            ["be in a quandary (over)", "не знати, що робити в складній ситуації"],
            ["on reflection", "добре подумавши"]
          ]
        }
      },
      {
        h: "More practice",
        p: "EnglishPage explains the future in the past, with examples and exercises.",
        links: [
          { title: "EnglishPage: future in the past", url: "https://www.englishpage.com/verbpage/futureinpast.html", note: "would and was going to for the future seen from the past, with exercises" }
        ],
        uk: { h: "Більше практики", p: "На EnglishPage є пояснення майбутнього в минулому з прикладами та вправами.", notes: ["would і was going to для майбутнього з погляду минулого, з вправами"] }
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the best form",
        src: "SB 8B",
        items: [
          { q: "The new rules ___ come into effect last January, but they were postponed.", options: ["were due to", "were on the verge of", "were bound"], answer: 0, explain: "Scheduled, formally planned → due to." },
          { q: "We ___ go home when we finally saw the whales.", options: ["were on the threshold to", "were about to", "were due"], answer: 1, explain: "Imminent action → about to." },
          { q: "The company ___ entering the Asian market when the crisis hit.", options: ["was about to", "was on the verge of", "was set to"], answer: 1, explain: "on the verge of + -ing." },
          { q: "At that time, the country was on the threshold of ___.", options: ["a new era", "change", "to change"], answer: 0, explain: "threshold of + noun (a wider new situation)." },
          { q: "With everything booked, we were all ___ to fly when the strike was announced.", options: ["about", "set", "due"], answer: 1 },
          { q: "The project was on ___ to finish early, but then the funding was cut.", options: ["course", "point", "verge"], answer: 0 },
          { q: "From the start, it ___ going to end in tears.", options: ["was always", "was due", "was on the point"], answer: 0 },
          { q: "Nobody ___ that the film would become a classic.", options: ["envisaged", "was about", "was set"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with one word",
        src: "SB 8B",
        items: [
          {
            q: "The colonists were on the ___ of giving up when the supply ships arrived.",
            answers: [
              ["verge", "point"]
            ]
          },
          {
            q: "The book was ___ to sell well, but sales were poor.",
            answers: [
              ["expected"]
            ]
          },
          {
            q: "The Society were ___ to recover their costs from the book.",
            answers: [
              ["due", "expected", "set"]
            ]
          },
          {
            q: "They were on the ___ of cancelling it when a friend offered to pay.",
            answers: [
              ["point", "verge"]
            ]
          },
          {
            q: "It was ___ that people would travel to space regularly by the 1950s.",
            answers: [
              ["envisaged", "expected", "assumed", "thought", "imagined", "hoped"]
            ]
          },
          {
            q: "The country was on the ___ of a new age of exploration.",
            answers: [
              ["threshold"]
            ]
          },
          {
            q: "The lab was on ___ to complete its research when the boss stopped it.",
            answers: [
              ["course"]
            ]
          },
          {
            q: "I was ___ to call you when your message arrived.",
            answers: [
              ["about"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentences using the words in brackets",
        src: "SB 8B",
        items: [
          { q: "The doctors were very close to a breakthrough. (verge)", models: ["The doctors were on the verge of a breakthrough."] },
          { q: "The council planned to open the new library last spring. (due)", start: "The new library…", models: ["The new library was due to open last spring."] },
          { q: "Everything suggested we would win the league before the injuries. (course)", start: "We…", models: ["We were on course to win the league before the injuries."] },
          { q: "People thought the app would change the world. (envisage)", start: "It…", models: ["It was envisaged that the app would change the world."] },
          { q: "I was very nearly going to leave when my favourite song came on. (about)", start: "I…", models: ["I was about to leave when my favourite song came on."] },
          { q: "We had everything ready to go, but then I realised I didn't have my passport. (set)", start: "We…", models: ["We were all set to go when I realised I didn't have my passport."] }
        ]
      },
      {
        type: "match",
        title: "Match to make the phrases",
        src: "SB 8B",
        items: [
          { a: "With the benefit", b: "of hindsight, it was the wrong decision." },
          { a: "I hoped we'd get on, but it didn't pan", b: "out that way." },
          { a: "They nearly abandoned the project but stopped", b: "short of giving up completely." },
          { a: "I agonised", b: "over the options for hours." },
          { a: "She was torn", b: "between staying and looking for another job." },
          { a: "It was a hard choice, so we decided to weigh", b: "up the options." },
          { a: "We were really in a quandary", b: "over what to do." },
          { a: "On reflection,", b: "I think I made the right decision." }
        ]
      },
      {
        type: "cards",
        title: "Decision making and reflection",
        src: "SB 8B",
        items: [
          { front: "with the benefit of hindsight", back: "заднім числом, оглядаючись назад", ex: "With the benefit of hindsight, I should have taken the job." },
          { front: "pan out", back: "складатися, розвиватися (про події)", ex: "Things didn't pan out as we'd planned." },
          { front: "stop short of (doing) something", back: "не наважитися, зупинитися за крок до", ex: "He stopped short of calling her a liar." },
          { front: "agonise over something", back: "мучитися вибором", ex: "I agonised over which flat to rent." },
          { front: "be torn between", back: "розриватися між", ex: "I'm torn between law and medicine." },
          { front: "weigh up the options", back: "зважити всі варіанти", ex: "Let's weigh up the options before we decide." },
          { front: "be in a quandary", back: "бути в скрутному становищі, не знати, що робити", ex: "I'm in a quandary over whether to move." },
          { front: "on reflection", back: "по зрілому роздумі", ex: "On reflection, I think I was too harsh." }
        ]
      },
      {
        type: "speak",
        title: "Describe a pivotal moment",
        src: "SB 8B",
        phrases: [
          "was going to",
          "was about to",
          "was due to",
          "was on the verge of",
          "was on the point of",
          "was all set to",
          "was on course to",
          "with the benefit of hindsight",
          "on reflection",
          "torn between",
          "agonised over",
          "weigh up",
          "pan out",
          "stopped short of"
        ],
        items: [
          {
            q: "A time you changed your plans at the last minute.",
            models: [
              "I was all set to fly to Spain when my sister went into labour, so I stayed – and on reflection it was the best decision I've ever made."
            ]
          },
          {
            q: "A decision you regret.",
            models: [
              "I was torn between two universities and agonised over it for weeks. With the benefit of hindsight, I chose the wrong one."
            ]
          },
          { q: "An invention that turned out not to be popular.", models: ["It was envisaged that everyone would wear smart glasses, but it didn't pan out that way."] },
          { q: "A pivotal moment in your country's history.", models: ["In 1991 the country was on the threshold of a completely new era…"] }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "match",
        title: "Match the sentences to the meanings",
        src: "WB 8B",
        items: [
          { a: "We were about to set off when the storm began.", b: "an action that was imminent" },
          { a: "The train was due to leave at 7.40.", b: "a scheduled event" },
          { a: "We'd envisaged a much bigger garden!", b: "a thought that something was likely" },
          { a: "The firm was on the point of signing a huge deal.", b: "a situation that had already started happening" },
          { a: "I was on course to graduate in June.", b: "something almost certain because of plans at the time" }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "WB 8B",
        items: [
          { q: "Researchers are on the ___ of a major discovery.", options: ["point", "threshold"], answer: 1 },
          { q: "We're all ___ to get a decent bonus this year.", options: ["about", "set"], answer: 1 },
          { q: "I was ___ to text you, but you rang first!", options: ["about", "on course"], answer: 0 },
          { q: "We ___ you'd come by car, not by train.", options: ["assumed", "planned"], answer: 0 },
          { q: "Scientists are on the ___ of creating a new vaccine.", options: ["threshold", "verge"], answer: 1 },
          { q: "When's the essay ___ to be handed in?", options: ["due", "set"], answer: 0 },
          { q: "We were on ___ to arrive on time, but the taxi broke down.", options: ["course", "the point"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the news story using the prompts",
        src: "WB 8B",
        intro: "A tech company pulled its new smartphone from sale just 24 hours before launch.",
        items: [
          {
            q: "The phone ___ on Friday.",
            hint: "due / release",
            answers: [
              ["was due to be released"]
            ]
          },
          {
            q: "The company ___ the market with what it called a revolutionary product.",
            hint: "verge / change",
            answers: [
              ["was on the verge of changing"]
            ]
          },
          {
            q: "They ___ less than half the price of rival brands…",
            hint: "set / charge",
            answers: [
              ["were set to charge", "were all set to charge"]
            ]
          },
          {
            q: "…and as a result they ___ a large share of the market.",
            hint: "expect / capture",
            answers: [
              ["were expected to capture"]
            ]
          },
          {
            q: "Rumours say a battery fault was found just before shops ___ their shelves.",
            hint: "about / start / stock",
            answers: [
              ["were about to start stocking"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Replace the meaning in brackets with a phrase",
        src: "WB 8B",
        intro: "agonising over, benefit of hindsight, pan out, quandary, stopped short of, weigh up the options",
        items: [
          {
            q: "With the ___, I can see the trip was a waste of money.",
            hint: "ability to understand a past situation",
            answers: [
              ["benefit of hindsight"]
            ]
          },
          {
            q: "I'll ___ before deciding which phone to buy.",
            hint: "compare the pros and cons",
            answers: [
              ["weigh up the options"]
            ]
          },
          {
            q: "I hoped to work abroad, but it didn't ___.",
            hint: "happen",
            answers: [
              ["pan out"]
            ]
          },
          {
            q: "I nearly resigned today, but I ___ that.",
            hint: "didn't go as far as",
            answers: [
              ["stopped short of"]
            ]
          },
          {
            q: "I've been ___ what to do for days and I still don't know!",
            hint: "thinking very carefully about",
            answers: [
              ["agonising over", "agonizing over"]
            ]
          },
          {
            q: "I'm in a real ___ and don't know what to do.",
            hint: "difficult situation",
            answers: [
              ["quandary"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversations with one word in each gap",
        src: "WB 8B",
        items: [
          {
            q: "A: You look like you're agonising ___ something.",
            answers: [
              ["over"]
            ]
          },
          {
            q: "B: I have to bake for the school fair. I'm ___ between brownies and a lemon cake.",
            answers: [
              ["torn"]
            ]
          },
          {
            q: "A: I was furious with the traffic warden, but I managed to stop ___ of shouting.",
            answers: [
              ["short"]
            ]
          },
          {
            q: "A: I hoped to visit a client in Rome, but it didn't ___ out.",
            answers: [
              ["pan"]
            ]
          },
          {
            q: "A: But on ___, I'm glad I didn't go – I'm not feeling great.",
            answers: [
              ["reflection"]
            ]
          },
          {
            q: "B: I took those long holidays for granted, but it's easy to say that with the benefit of ___.",
            answers: [
              ["hindsight"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Future in the past: quick check",
        table: [
          ["due to", "timetable / official plan"],
          ["(all) set to, on course to", "almost certain at the time"],
          ["about to", "imminent"],
          ["on the point/verge of + -ing", "already beginning"],
          ["on the threshold of + noun", "a new era/situation beginning"],
          ["was going to, was always going to, was bound to", "plans; certainty"],
          ["expected / envisaged / assumed / hoped / knew + would/to", "past view of the future"]
        ],
        uk: {
          h: "Майбутнє в минулому: швидка перевірка",
          table: [
            ["due to", "розклад / офіційний план"],
            ["(all) set to, on course to", "майже напевно на той момент"],
            ["about to", "от-от"],
            ["on the point/verge of + -ing", "уже починається"],
            ["on the threshold of + іменник", "початок нової епохи чи ситуації"],
            ["was going to, was always going to, was bound to", "плани; неминучість"],
            ["expected / envisaged / assumed / hoped / knew + would/to", "погляд у майбутнє з минулого"]
          ]
        }
      },
      {
        h: "Positive or negative context?",
        p: "Some words carry a hidden positive or negative connotation from the words they usually go with: cause (trouble, harm, damage) is negative; provide (support, information, opportunities) is positive.",
        ex: [
          "The town is rife with cowboy builders. (negative)",
          "You're building up a lot of experience. (positive)"
        ],
        uk: {
          h: "Позитивний чи негативний контекст?",
          p: "Деякі слова мають приховане позитивне чи негативне забарвлення від слів, з якими вони зазвичай уживаються: cause (trouble, harm, damage) – негативне; provide (support, information, opportunities) – позитивне."
        }
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with the correct form of: assume, course, due, have, hope, set",
        src: "LB 8B",
        items: [
          {
            q: "Given the director's doubts, I just ___ she'd reject our plan, but she approved it.",
            answers: [
              ["assumed"]
            ]
          },
          {
            q: "Max was all ___ to leave for the station when he saw the train was cancelled.",
            answers: [
              ["set"]
            ]
          },
          {
            q: "Lena was ___ to return yesterday, but fog delayed her flight.",
            answers: [
              ["due"]
            ]
          },
          {
            q: "I was going to ___ lunch with my cousins today, but I've got a cold.",
            answers: [
              ["have"]
            ]
          },
          {
            q: "It seemed Ivan was on ___ to win the race, but he fell on the last lap.",
            answers: [
              ["course"]
            ]
          },
          {
            q: "I ___ I'd get promoted this year, but deep down I knew it wouldn't happen.",
            answers: [
              ["hoped"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the second sentence using the word in brackets (3–5 words)",
        src: "LB 8B",
        items: [
          {
            q: "They thought the new airport would boost tourism. → It ___ the new airport would boost tourism.",
            hint: "envisage",
            answers: [
              ["was envisaged that"]
            ]
          },
          {
            q: "It was clear at the time the plan would definitely fail. → It was clear at the time the plan ___ fail.",
            hint: "bound",
            answers: [
              ["was bound to"]
            ]
          },
          {
            q: "I was sure it wasn't going to happen. → I ___ happen.",
            hint: "knew",
            answers: [
              ["knew it wouldn't", "knew it would not"]
            ]
          },
          {
            q: "At that time, humans were just beginning a new age. → At that time, humans ___ a new age.",
            hint: "threshold",
            answers: [
              ["were on the threshold of"]
            ]
          },
          {
            q: "Ola was just going to buy the flat when she saw a better one. → Ola was ___ buy the flat when she saw a better one.",
            hint: "set",
            answers: [
              ["all set to", "set to"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Make sentences using the prompts",
        src: "Check 8",
        items: [
          { q: "We / point / leave / when we realised we'd forgotten the tickets.", models: ["We were on the point of leaving when we realised we'd forgotten the tickets."] },
          { q: "Management / due / review / the case last month, but they didn't.", models: ["Management were due to review the case last month, but they didn't."] },
          { q: "I / about / leave / when you arrived.", models: ["I was about to leave when you arrived."] },
          { q: "The new metro line / course / open / this year, but there have been delays.", models: ["The new metro line was on course to open this year, but there have been several delays."] },
          { q: "At the turn of the century, we / threshold / new era.", models: ["At the turn of the century, we were on the threshold of a new era."] },
          { q: "We / expect / the new product / be / hugely successful, so sales were disappointing.", models: ["We expected the new product to be hugely successful, so the sales figures were disappointing."] }
        ]
      },
      {
        type: "gap",
        title: "Complete with: benefit, pan, agonised, reflection, short, weigh + a preposition",
        src: "Check 8",
        items: [
          {
            q: "The course didn't ___ the way I expected, so I left early.",
            answers: [
              ["pan out"]
            ]
          },
          {
            q: "___, I could have studied harder for my last exam.",
            answers: [
              ["On reflection"]
            ]
          },
          {
            q: "I never decide on impulse – I always ___ the options first.",
            answers: [
              ["weigh up"]
            ]
          },
          {
            q: "I often stop ___ telling people I disagree with them.",
            answers: [
              ["short of"]
            ]
          },
          {
            q: "I ___ whether to ask her out, but I'm glad I did.",
            answers: [
              ["agonised over", "agonized over"]
            ]
          },
          {
            q: "With the ___ hindsight, I made some bad choices when I was younger.",
            answers: [
              ["benefit of"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Usually positive or negative context?",
        src: "Skills 8B",
        categories: ["positive", "negative"],
        items: [
          { text: "provide support / information", cat: 0 },
          { text: "build up experience", cat: 0 },
          { text: "cause trouble / damage", cat: 1 },
          { text: "rife with (crime, rumours)", cat: 1 },
          { text: "have dealings with (somebody dodgy)", cat: 1 },
          { text: "(a riot / a fire) broke out", cat: 1 },
          { text: "sit through (a long meeting)", cat: 1 },
          { text: "a build-up of irritating things", cat: 1 }
        ]
      },
      {
        type: "match",
        title: "Match the idioms to the meanings",
        src: "WB Listening 8",
        items: [
          { a: "a history buff", b: "someone who knows a lot about history" },
          { a: "set foot somewhere", b: "go to a place" },
          { a: "ring a bell", b: "sound vaguely familiar" },
          { a: "take over the reins", b: "take control of something" },
          { a: "live to tell the tale", b: "survive a difficult experience" },
          { a: "in a flash", b: "very quickly" }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct form",
        src: "extra: https://www.englishpage.com/verbpage/futureinpast.html",
        items: [
          { q: "I ___ call you last night, but my phone died.", options: ["was going to", "would", "will"], answer: 0, explain: "was going to — намір, який не здійснився." },
          { q: "She knew that one day she ___ become a surgeon.", options: ["would", "will", "is going to"], answer: 0, explain: "Майбутнє з погляду минулого: will → would." },
          { q: "The two men met in 1990; they ___ remain friends for the rest of their lives.", options: ["were to", "were going to", "are to"], answer: 0, explain: "was/were to — так склалася доля (погляд з минулого)." },
          { q: "We were ___ when the phone rang.", options: ["on the point of leaving", "about leaving", "due leaving"], answer: 0, explain: "on the point of + -ing; але about to leave, due to leave." },
          { q: "The meeting ___ start at nine, but the CEO was stuck in traffic.", options: ["was due to", "was due", "would"], answer: 0, explain: "was due to + інфінітив — за розкладом." },
          { q: "He promised he ___ never do it again — and of course he did.", options: ["would", "had", "was to"], answer: 0, explain: "Обіцянка в минулому: would." },
          { q: "The ceremony ___ held in the cathedral, but it was moved at the last minute.", options: ["was to have been", "was to be having", "would have"], answer: 0, explain: "was to have + V3 — план, який не здійснився." },
          { q: "Little did she know that the letter ___ change her life.", options: ["would", "will", "was going"], answer: 0, explain: "would — майбутнє з погляду минулого." }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? The future in the past",
        src: "extra: https://www.englishpage.com/verbpage/futureinpast.html",
        items: [
          { s: "I was going to tell you, but I forgot.", ok: true },
          { s: "We were about leaving when it started to pour.", ok: false, fix: "We were about to leave when it started to pour." },
          { s: "They were to be married in June, but the wedding was called off.", ok: true },
          { s: "I thought it will rain, so I took an umbrella.", ok: false, fix: "I thought it would rain, so I took an umbrella." },
          { s: "She was on the verge of giving up when the results came in.", ok: true },
          { s: "He was due arriving at noon.", ok: false, fix: "He was due to arrive at noon." },
          { s: "I was meaning to ring you, but things got hectic.", ok: true },
          { s: "The train was to leaving at 6.15.", ok: false, fix: "The train was to leave at 6.15." },
          { s: "Who could have guessed that this small start-up was to become a global giant?", ok: true },
          { s: "We were supposed to meet at eight, but she never showed up.", ok: true }
        ]
      }
    ]
  }
});
