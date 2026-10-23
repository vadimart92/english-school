/*
 * 9B Gossip
 */
ES.registerLesson({
  id: "9B",
  unit: 9,
  letter: "B",
  title: "Gossip",
  uk: "Плітки: непряма мова (backshifting, пасивні дієслова повідомлення) та ідіоми про чутки",
  goal: "take part in a work-based discussion",
  focus: { grammar: "reported speech", vocab: "gossip and rumours", pron: "stress in reported statements" },
  learn: {
    theory: [
      {
        h: "Backshifting",
        p: "When we report what someone said, we usually move the verb one step into the past: present → past, past / present perfect → past perfect. Time words often change too (tomorrow → the next day, here → there).",
        ex: [
          "'I've already apologised, so I'm not doing it again.' → He said he had already apologised, so he wasn't doing it again.",
          "'I heard the news while I was cycling.' → She said she had heard the news while she had been cycling."
        ],
        uk: {
          h: "Зсув часів (backshifting)",
          p: "Коли ми переказуємо чиїсь слова, то зазвичай зсуваємо дієслово на крок у минуле: present → past, past / present perfect → past perfect. Часто змінюються й слова часу та місця (tomorrow → the next day, here → there)."
        }
      },
      {
        h: "When we don't backshift",
        list: [
          "The verb is already past perfect or a past modal (would, could, might, should): 'I'd love to come.' → She said she'd love to come.",
          "The reporting verb is in a present tense (incl. present perfect): He's told me a hundred times that he hates gossip.",
          "The information is still true and we agree with it / want to show it's still valid: She told me she's moving to Kyiv next month (she still is).",
          "Compare: 'I'm arriving tomorrow.' → She said she's arriving this morning (I still expect her) vs She said she was arriving this morning (but she hasn't come / maybe it's no longer true)."
        ],
        uk: {
          h: "Коли часи не зсуваємо",
          list: [
            "Дієслово вже в past perfect або це модальне дієслово минулої форми (would, could, might, should): 'I'd love to come.' → She said she'd love to come.",
            "Дієслово, що вводить чужі слова, стоїть у теперішньому часі (зокрема present perfect): He's told me a hundred times that he hates gossip.",
            "Інформація досі правдива, і ми з нею згодні / хочемо показати, що вона й далі чинна: She told me she's moving to Kyiv next month (she still is).",
            "Порівняйте: 'I'm arriving tomorrow.' → She said she's arriving this morning (я й досі на неї чекаю) vs She said she was arriving this morning (але вона не приїхала / можливо, це вже неправда)."
          ]
        }
      },
      {
        h: "Modals in reported speech",
        table: [
          ["will / can / may / shall", "would / could / might / should"],
          ["must / mustn't (obligation)", "had to / wasn't allowed to (or must stays)"],
          ["should (advice)", "was supposed to / should"],
          ["would / could / might / should", "no change"]
        ],
        ex: [
          "'You must be on time.' → She said I had to be on time.",
          "'What should I wear?' → He asked what he was supposed to wear."
        ],
        uk: {
          h: "Модальні дієслова в непрямій мові",
          table: [
            ["will / can / may / shall", "would / could / might / should"],
            ["must / mustn't (obligation)", "had to / wasn't allowed to (або must не змінюється)"],
            ["should (advice)", "was supposed to / should"],
            ["would / could / might / should", "без змін"]
          ]
        }
      },
      {
        h: "Passive reporting verbs",
        p: "With allege, assume, believe, consider, expect, know, report, rumour, say, think, understand we can (1) start with It + passive + that-clause, or (2) raise the subject of the that-clause and follow the passive verb with a to-infinitive.",
        table: [
          ["It is said that she earns a fortune.", "She is said to earn a fortune. (same time)"],
          ["It is thought that they are negotiating.", "They are thought to be negotiating. (in progress)"],
          ["It is alleged that he stole the files.", "He is alleged to have stolen the files. (earlier)"],
          [
            "It is believed they were hiding it.",
            "They are believed to have been hiding it. (earlier, in progress)"
          ],
          [
            "It was rumoured that it wasn't true.",
            "It was rumoured not to be true. (negative: not before to)"
          ]
        ],
        uk: {
          h: "Пасивні дієслова передачі мови",
          p: "Із allege, assume, believe, consider, expect, know, report, rumour, say, think, understand можна (1) почати з It + пасив + that-clause або (2) зробити підмет that-clause підметом усього речення, а після пасивного дієслова вжити to-infinitive.",
          table: [
            ["It is said that she earns a fortune.", "She is said to earn a fortune. (одночасно)"],
            ["It is thought that they are negotiating.", "They are thought to be negotiating. (у процесі)"],
            ["It is alleged that he stole the files.", "He is alleged to have stolen the files. (раніше)"],
            [
              "It is believed they were hiding it.",
              "They are believed to have been hiding it. (раніше, у процесі)"
            ],
            [
              "It was rumoured that it wasn't true.",
              "It was rumoured not to be true. (заперечення: not перед to)"
            ]
          ]
        }
      },
      {
        h: "Gossip and rumours",
        table: [
          ["Rumour has it (that)…", "people are saying (that)…, there's a rumour (that)…"],
          ["read between the lines", "understand the hidden meaning"],
          ["hear sth on/through the grapevine", "hear news informally, from other people"],
          ["get (hold of) the wrong end of the stick", "completely misunderstand something"],
          ["drop a few hints", "suggest something indirectly"],
          ["put two and two together", "work something out from what you know"],
          ["two-faced", "insincere, saying different things to different people"],
          ["juicy gossip", "exciting, scandalous gossip"],
          ["a little bird told me", "I heard it from someone (and I won't say who)"],
          ["take it with a pinch of salt", "not completely believe it, be sceptical"],
          ["spread like wildfire", "spread very fast"],
          ["I'm all ears", "I'm listening very carefully"]
        ],
        uk: {
          h: "Плітки й чутки",
          table: [
            ["Rumour has it (that)…", "ходять чутки, що…"],
            ["read between the lines", "читати між рядків, розуміти прихований зміст"],
            ["hear sth on/through the grapevine", "почути через сарафанне радіо"],
            ["get (hold of) the wrong end of the stick", "зрозуміти все навпаки"],
            ["drop a few hints", "кинути кілька натяків"],
            ["put two and two together", "скласти два і два, здогадатися"],
            ["two-faced", "дволикий, нещирий"],
            ["juicy gossip", "смачні, скандальні плітки"],
            ["a little bird told me", "сорока на хвості принесла"],
            ["take it with a pinch of salt", "сприймати скептично, з пересторогою"],
            ["spread like wildfire", "поширюватися блискавично"],
            ["I'm all ears", "я весь увага"]
          ]
        }
      },
      {
        h: "More practice",
        p: "Extra online exercises on reported speech and the patterns of reporting verbs.",
        links: [
          {
            title: "British Council: Patterns with reporting verbs",
            url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/patterns-reporting-verbs",
            note: "infinitive, -ing, preposition or that-clause after reporting verbs"
          },
          { title: "Perfect English Grammar: reported speech (mixed)", url: "https://www.perfect-english-grammar.com/reported-speech-exercise-4.html", note: "a mixed exercise on changing direct speech into reported speech" }
        ],
        uk: {
          h: "Більше практики",
          p: "Додаткові онлайн-вправи на непряму мову та моделі дієслів, що вводять чужі слова.",
          notes: [
            "infinitive, -ing, прийменник чи that-clause після reporting verbs",
            "змішана вправа на перетворення прямої мови на непряму"
          ]
        }
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the phrases with the definitions",
        src: "SB 2",
        items: [
          { a: "Rumour has it…", b: "there's a rumour" },
          { a: "read between the lines", b: "think about the true meaning of what you were told" },
          { a: "hear it through the grapevine", b: "be told it by someone, unofficially" },
          { a: "get hold of the wrong end of the stick", b: "misunderstand" },
          { a: "drop a few hints", b: "give some clues" },
          { a: "put two and two together", b: "think about something logically and work it out" },
          { a: "two-faced", b: "insincere" },
          { a: "juicy (gossip)", b: "interesting, especially relating to scandal" },
          { a: "a little bird told me", b: "someone, who I can't name, told me" },
          { a: "spread like wildfire", b: "go around very quickly" }
        ]
      },
      {
        type: "cards",
        title: "Gossip and rumours",
        src: "SB 2",
        items: [
          { front: "Rumour has it (that)…", back: "ходять чутки, що…", ex: "Rumour has it that the director is about to resign." },
          { front: "read between the lines", back: "читати між рядків", ex: "Reading between the lines, I think the project is in trouble." },
          { front: "hear something through the grapevine", back: "почути неофіційно, від когось", ex: "I heard it through the grapevine that you're leaving." },
          { front: "get hold of the wrong end of the stick", back: "зрозуміти навпаки, неправильно", ex: "Sorry, I think I got hold of the wrong end of the stick." },
          { front: "drop a few hints", back: "кинути кілька натяків", ex: "I've dropped a few hints about what I want for my birthday." },
          { front: "put two and two together", back: "здогадатися, зіставивши факти", ex: "She saw the ring and put two and two together." },
          { front: "two-faced", back: "дволикий, лицемірний", ex: "He's so two-faced – lovely to you, horrible behind your back." },
          { front: "juicy gossip", back: "скандальні, цікаві плітки", ex: "Come on, any juicy gossip from the conference?" },
          { front: "a little bird told me", back: "«сорока на хвості принесла»", ex: "A little bird told me you've got a new job." },
          { front: "take it with a pinch of salt", back: "не сприймати надто серйозно, скептично", ex: "Take everything he says with a pinch of salt." },
          { front: "spread like wildfire", back: "поширитися блискавично", ex: "The news spread like wildfire across the campus." },
          { front: "I'm all ears", back: "я весь увага, розповідай", ex: "Go on, tell me everything – I'm all ears." }
        ]
      },
      {
        type: "gap",
        title: "Complete the reported versions",
        src: "SB 5",
        intro: "Use backshifting where it is natural; both answers are accepted where the information may still be true.",
        items: [
          {
            q: "'Ivan has been talking to some recruiters.' → A little bird told me Ivan ___ to some recruiters.",
            answers: [
              ["had been talking", "'d been talking", "has been talking"]
            ]
          },
          {
            q: "'I'm afraid I can't come to today's training, Olena.' → Marta sent a message to say she ___ it today.",
            answers: [
              ["couldn't make", "could not make", "can't make", "cannot make"]
            ]
          },
          {
            q: "'Let me tell you who'll be losing their job.' → So did the director say who ___ their job?",
            answers: [
              ["would be losing", "'ll be losing", "will be losing"]
            ]
          },
          {
            q: "'I'm afraid there are going to be some cuts.' → It was mentioned at today's meeting that there ___ some cuts.",
            answers: [
              ["were going to be", "are going to be"]
            ]
          },
          {
            q: "'Apparently Dan's name came up at the meeting.' → Your name is rumoured to ___ at the meeting, Dan.",
            answers: [
              ["have come up"]
            ]
          },
          {
            q: "'Dan is always late for everything.' → It was said that you ___ always late for everything.",
            answers: [
              ["were", "are"]
            ]
          },
          {
            q: "'As I've told you many times, Dan, I'm delighted with your work.' → My manager has told me repeatedly that she ___ delighted with my work.",
            answers: [
              ["is", "'s"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Backshift or not? Choose the better option",
        src: "SB 6",
        items: [
          { q: "She's told me a hundred times that she ___ gossip.", options: ["hates", "had hated"], answer: 0, explain: "Reporting verb in the present perfect → no backshift." },
          { q: "He said he ___ happy to help if he hadn't promised to keep it secret.", options: ["will be", "would be"], answer: 1, explain: "'I'd be happy…' – would doesn't change." },
          { q: "She told me she isn't a gossip, and I ___ her.", options: ["believe", "believed"], answer: 0, explain: "The speaker agrees it's still true → present." },
          { q: "'I'll help if I must.' → He said he'd help if he ___.", options: ["had to", "has to"], answer: 0, explain: "must (obligation) → had to." },
          { q: "'What should I do?' → She asked what she ___ do.", options: ["was supposed to", "must"], answer: 0 },
          { q: "'I'm arriving tomorrow.' (Yesterday) → She said she ___ today, so let's prepare her room.", options: ["'s arriving", "had arrived"], answer: 0, explain: "Still expected → no backshift." },
          { q: "'I'd never met him before.' → He said he ___ him before.", options: ["had never met", "had never been meeting"], answer: 0, explain: "Past perfect stays the same." }
        ]
      },
      {
        type: "transform",
        title: "Start the reported statement with the words given",
        src: "SB 8",
        items: [
          { q: "It is widely believed that harmless gossip helps people bond.", start: "Harmless gossip…", models: ["Harmless gossip is widely believed to help people bond."] },
          { q: "It is thought that the story was invented as a joke.", start: "The story…", models: ["The story is thought to have been invented as a joke."] },
          { q: "It's alleged that she was selling company secrets.", start: "She…", models: ["She is alleged to have been selling company secrets."] },
          { q: "The organisers expected that more volunteers would come.", start: "More volunteers…", models: ["More volunteers were expected to come."] },
          {
            q: "Psychologists consider that chatting with colleagues is a good way to reduce stress.",
            start: "Chatting with colleagues…",
            models: ["Chatting with colleagues is considered (by psychologists) to be a good way to reduce stress."]
          },
          { q: "There are rumours that Petro is thinking of applying for the job.", start: "Petro…", models: ["Petro is rumoured to be thinking of applying for the job."] }
        ]
      },
      {
        type: "speak",
        title: "Take part in a work-based discussion about rumours",
        src: "SB 9–10",
        intro: "Roleplay short office conversations. One person loves gossip, the other is reluctant and suggests other explanations. Use reported speech and the gossip idioms.",
        phrases: [
          "Rumour has it that…",
          "A little bird told me…",
          "It's said that…",
          "He's believed to have…",
          "I'd take that with a pinch of salt.",
          "Maybe you've got the wrong end of the stick.",
          "Reading between the lines,…"
        ],
        items: [
          {
            q: "Tell a colleague a rumour about a manager who keeps leaving early.",
            models: [
              "Rumour has it that Ihor's leaving early because he's been interviewing for other jobs. Someone said they'd seen him at a recruitment agency."
            ]
          },
          {
            q: "React sceptically and offer an alternative explanation.",
            models: [
              "I'd take that with a pinch of salt. He told me last week that his son had been ill, so maybe he's just picking him up from school."
            ]
          },
          {
            q: "Report what was said at a meeting you missed.",
            models: [
              "Apparently, it was mentioned that the budget would be cut, and the new system is expected to be introduced by June."
            ]
          },
          {
            q: "Defend yourself against a rumour about you.",
            models: [
              "I heard it through the grapevine that I'm said to be leaving. Honestly, somebody's put two and two together and made five – I'm just taking a course."
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
        title: "Match the sentence halves",
        src: "WB 1",
        items: [
          { a: "It's our anniversary soon – I've dropped…", b: "…a few hints about the restaurant I'd like." },
          { a: "Not sure if you've heard, but rumour…", b: "…has it that the shop is closing down." },
          { a: "I'd take that story with a pinch…", b: "…of salt if I were you." },
          { a: "Don't tell Kira anything – it'll spread…", b: "…round the whole school like wildfire." },
          { a: "I'm afraid you've got hold…", b: "…of the wrong end of the stick." },
          { a: "Please don't talk about Max behind…", b: "…his back – it isn't fair." },
          { a: "Anyway, I put two and two…", b: "…together and realised they were dating." },
          { a: "She didn't say she was unhappy, but reading…", b: "…between the lines, I think she is." }
        ]
      },
      {
        type: "gap",
        title: "Complete with: bird, ears, grapevine, juicy, salt, two-faced",
        src: "WB 2",
        items: [
          {
            q: "A little ___ told me you've passed your driving test. Well done!",
            answers: [
              ["bird"]
            ]
          },
          {
            q: "Have you heard any ___ gossip about the new neighbours?",
            answers: [
              ["juicy"]
            ]
          },
          {
            q: "I doubt Lesia's been sacked. I'd take that with a pinch of ___.",
            answers: [
              ["salt"]
            ]
          },
          {
            q: "I heard it on the ___ that Taras is moving to Lviv.",
            answers: [
              ["grapevine"]
            ]
          },
          {
            q: "Be careful with Roman – he's really ___. Friendly to your face, nasty about you later.",
            answers: [
              ["two-faced"]
            ]
          },
          {
            q: "Go on, tell me everything. I'm all ___.",
            answers: [
              ["ears"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Complete the conversations with the right phrase",
        src: "WB 3",
        items: [
          { q: "A: I thought Yana and Marko were a couple, but it turns out I ___.", options: ["got completely the wrong end of the stick", "was all ears", "took it with a pinch of salt"], answer: 0 },
          { q: "A: Well, I saw them holding hands, so I ___ – and clearly made five!", options: ["spread like wildfire", "put two and two together", "dropped a few hints"], answer: 1 },
          { q: "A: So, I've got some ___ for you.", options: ["juicy gossip", "pinch of salt", "wrong end of the stick"], answer: 0 },
          { q: "B: Go on, I'm ___.", options: ["all ears", "two-faced", "through the grapevine"], answer: 0 },
          { q: "A: ___ that our old teacher is coming back to visit – with his new wife!", options: ["A little bird told me", "Reading between the lines", "I'm all ears"], answer: 0 },
          { q: "B: Wife?! He isn't married. If it was Ira who told you, I'd ___.", options: ["spread it like wildfire", "take it with a pinch of salt", "drop a few hints"], answer: 1 },
          { q: "B: Don't mention it to anyone else. It'll ___ and soon the whole town will know.", options: ["read between the lines", "spread like wildfire", "put two and two together"], answer: 1 }
        ]
      },
      {
        type: "gap",
        title: "Complete the reported statements. Backshift only when appropriate",
        src: "WB 4",
        items: [
          {
            q: "'Zhenia was late for work again today.' → Last Monday, Pavlo told me that Zhenia ___ late for work again that day.",
            answers: [
              ["had been", "'d been"]
            ]
          },
          {
            q: "'I haven't been living here long.' → Last year my new neighbour told me that she ___ there long.",
            answers: [
              ["hadn't been living", "had not been living"]
            ]
          },
          {
            q: "'I'm thinking of going to stay with my aunt for a week.' → Mira told me last month that she ___ with her aunt for a week.",
            answers: [
              ["was thinking of going to stay"]
            ]
          },
          {
            q: "'I'm telling the truth.' → She told me ___ the truth, and I believe her.",
            answers: [
              ["she's telling", "she is telling"]
            ]
          },
          {
            q: "'I can fix it, just not today.' → Last week Oleh said that he ___ it, just not that day.",
            answers: [
              ["could fix"]
            ]
          },
          {
            q: "'I'd not seen the email until you showed it to me.' → She said that she ___ the email until I showed it to her.",
            answers: [
              ["'d not seen", "had not seen", "hadn't seen"]
            ]
          },
          {
            q: "'I've stayed there before, but only once.' → Ken says he ___ there before, but only once.",
            answers: [
              ["'s stayed", "has stayed"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the second sentence so it means the same as the first",
        src: "WB 5",
        items: [
          {
            q: "Someone mentioned that you're moving to Odesa next month. → It ___ you're moving to Odesa next month.",
            answers: [
              ["was mentioned that", "has been mentioned that"]
            ]
          },
          {
            q: "People have said that now is not a good time to buy a car. → It ___ now is not a good time to buy a car.",
            answers: [
              ["has been said that", "is said that"]
            ]
          },
          {
            q: "It's said that a smile costs nothing. → A smile ___ nothing.",
            answers: [
              ["is said to cost"]
            ]
          },
          {
            q: "Somebody suggested that we all meet for lunch on Friday. → It ___ we all meet for lunch on Friday.",
            answers: [
              ["was suggested that"]
            ]
          },
          {
            q: "It's thought the thieves were trying to steal paintings. → The thieves ___ trying to steal paintings.",
            answers: [
              ["are thought to have been"]
            ]
          },
          {
            q: "People often consider golf to be a slow sport. → Golf ___ a slow sport.",
            answers: [
              ["is often considered to be"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Reporting in three steps",
        list: [
          "1. Is the reporting verb past (said, told)? If it's present (says, has told), keep the tenses.",
          "2. Is the information still true and do I want to show that? Then backshifting is optional.",
          "3. Past perfect and would/could/might/should never change."
        ],
        uk: {
          h: "Непряма мова у три кроки",
          list: [
            "1. Дієслово, що вводить мову, у минулому (said, told)? Якщо воно в теперішньому (says, has told), часи не змінюємо.",
            "2. Інформація досі правдива, і я хочу це показати? Тоді зсув часів необов'язковий.",
            "3. Past perfect і would/could/might/should ніколи не змінюються."
          ]
        }
      },
      {
        h: "Which infinitive after a passive reporting verb?",
        table: [
          ["to do", "same time / general fact", "He is known to work nights."],
          ["to be doing", "in progress at that time", "They are believed to be hiding."],
          ["to have done", "earlier, complete", "She is alleged to have lied."],
          ["to have been doing", "earlier, in progress", "He is thought to have been planning it for years."],
          ["to have been done", "earlier, passive", "The vase is assumed to have been stolen."]
        ],
        uk: {
          h: "Який інфінітив після пасивного reporting verb?",
          table: [
            ["to do", "одночасно / загальний факт", "He is known to work nights."],
            ["to be doing", "у процесі на той момент", "They are believed to be hiding."],
            ["to have done", "раніше, завершено", "She is alleged to have lied."],
            ["to have been doing", "раніше, у процесі", "He is thought to have been planning it for years."],
            ["to have been done", "раніше, пасив", "The vase is assumed to have been stolen."]
          ]
        }
      }
    ],
    exercises: [
      {
        type: "transform",
        title: "Report the conversation to a friend. Use backshifting where possible",
        src: "LB 9B",
        items: [
          { q: "Nadia: 'Do you know what's happened to Ben?'", start: "Nadia asked me if…", models: ["Nadia asked me if I knew what had happened to Ben."] },
          { q: "Nadia: 'I haven't heard from him for weeks.'", start: "She added that…", models: ["She added that she hadn't heard from him for weeks."] },
          { q: "You: 'Actually, I'm meeting him tomorrow at the gym.'", start: "I told her that…", models: ["I told her that I was meeting him the next day at the gym."] },
          { q: "You: 'Shall I ask him if he'd mind you joining us?'", start: "I asked her if…", models: ["I asked her if I should ask him if he'd mind her joining us."] },
          { q: "Nadia: 'I'm afraid I'm going to be busy all day tomorrow.'", start: "She said…", models: ["She said she was afraid she was going to be busy all day the next day."] },
          {
            q: "Nadia: 'There's an exam I absolutely must take. I mustn't be late.'",
            start: "She explained that…",
            models: [
              "She explained that there was an exam she absolutely had to take and she wasn't allowed to be late."
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with a passive form of the first verb and a to-infinitive of the second",
        src: "LB 9B",
        intro: "According to unconfirmed reports, there was a break-in at the city gallery last night.",
        items: [
          {
            q: "Thieves ___ several valuable paintings.",
            hint: "believe / steal",
            answers: [
              ["are believed to have stolen"]
            ]
          },
          {
            q: "A rare 17th-century portrait ___ among the stolen items.",
            hint: "assume / be",
            answers: [
              ["is assumed to be", "is assumed to have been"]
            ]
          },
          {
            q: "The portrait ___ the most valuable item in the gallery.",
            hint: "consider / be",
            answers: [
              ["is considered to be", "was considered to be"]
            ]
          },
          {
            q: "According to one source, collectors ___ to buy the portrait for years.",
            hint: "rumour / try",
            answers: [
              ["are rumoured to have been trying", "were rumoured to have been trying"]
            ]
          },
          {
            q: "However, their offers ___ repeatedly.",
            hint: "say / reject",
            answers: [
              ["are said to have been rejected"]
            ]
          }
        ]
      },
      {
        type: "errors",
        title: "Find and correct one word in each sentence",
        src: "Check 10",
        items: [
          { s: "Thanks to social media, rumours can burn like wildfire.", ok: false, fix: "Thanks to social media, rumours can spread like wildfire." },
          { s: "I'd take those rumours with a pinch of pepper if I were you.", ok: false, fix: "I'd take those rumours with a pinch of salt if I were you." },
          { s: "You should be able to guess what I want – I've thrown enough hints!", ok: false, fix: "You should be able to guess what I want – I've dropped enough hints!" },
          { s: "It turned out I'd got hold of the wrong end of the bat.", ok: false, fix: "It turned out I'd got hold of the wrong end of the stick." },
          { s: "It's unkind to gossip about people behind their faces.", ok: false, fix: "It's unkind to gossip about people behind their backs." },
          { s: "Reading between the words, they think I'm too inexperienced.", ok: false, fix: "Reading between the lines, they think I'm too inexperienced." }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "Check 10",
        items: [
          {
            q: "His mum said she wouldn't buy him a new laptop because ___ only had the old one for a year.",
            options: ["he'd", "he's"],
            answer: 0,
            explain: "The rest of the sentence is already backshifted (wouldn't), so the past perfect fits best."
          },
          { q: "The coach is rumoured ___ for a new striker.", options: ["that he was looking", "to be looking", "to look"], answer: 1 },
          { q: "The suspect claimed that he ___ a match at the stadium at the time.", options: ["had been watching", "has been watching", "watches"], answer: 0 },
          { q: "The fire is believed ___ started deliberately.", options: ["that it was", "to be being", "to have been"], answer: 2 },
          { q: "They've told me they ___ me back, but I don't believe they ever will.", options: ["paid", "'re going to pay", "had paid"], answer: 1 },
          { q: "It was rumoured that their reports ___ copied from the internet.", options: ["had been", "to be", "to have been"], answer: 0 }
        ]
      },
      {
        type: "errors",
        title: "Correct the mistakes in reported speech",
        src: "Revision",
        items: [
          { s: "She is said that she earns more than the director.", ok: false, fix: "She is said to earn more than the director." },
          { s: "He's told me several times that he doesn't like spreading rumours.", ok: true },
          { s: "The minister is alleged to accept bribes last year.", ok: false, fix: "The minister is alleged to have accepted bribes last year." },
          { s: "She said she would help us if she had time.", ok: true },
          { s: "It is believed the company to be in trouble.", ok: false, fix: "The company is believed to be in trouble. / It is believed (that) the company is in trouble." },
          { s: "He said me that he'd been working late.", ok: false, fix: "He told me that he'd been working late." },
          { s: "The singer was rumoured not to be coming to the ceremony.", ok: true },
          { s: "My boss asked what time did I arrive.", ok: false, fix: "My boss asked what time I had arrived." }
        ]
      },
      {
        type: "gap",
        title: "Complete the idioms",
        src: "Revision",
        items: [
          {
            q: "___ has it that the café on the corner is closing.",
            answers: [
              ["rumour"]
            ]
          },
          {
            q: "The news of their engagement spread like ___.",
            answers: [
              ["wildfire"]
            ]
          },
          {
            q: "I didn't tell her directly, but I dropped a few ___.",
            answers: [
              ["hints"]
            ]
          },
          {
            q: "He's so ___-faced – sweet to your face, cruel behind your back.",
            answers: [
              ["two"]
            ]
          },
          {
            q: "She saw the plane tickets and put two and two ___.",
            answers: [
              ["together"]
            ]
          },
          {
            q: "I heard it through the ___ that you got promoted.",
            answers: [
              ["grapevine"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Which pattern does each reporting verb take?",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/patterns-reporting-verbs",
        categories: ["verb + to-infinitive", "verb + object + to-infinitive", "verb (+ preposition) + -ing"],
        items: [
          { text: "refuse", cat: 0 },
          { text: "threaten", cat: 0 },
          { text: "offer", cat: 0 },
          { text: "persuade", cat: 1 },
          { text: "urge", cat: 1 },
          { text: "remind", cat: 1 },
          { text: "deny", cat: 2 },
          { text: "apologise for", cat: 2 },
          { text: "insist on", cat: 2 }
        ]
      },
      {
        type: "order",
        title: "Put the words in order to make reported sentences",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/patterns-reporting-verbs",
        items: [
          { words: ["he", "insisted", "that", "she", "be", "told", "the", "truth"], answer: "He insisted that she be told the truth." },
          { words: ["the", "minister", "is", "said", "to", "have", "resigned", "last", "night"], answer: "The minister is said to have resigned last night.", alts: ["Last night the minister is said to have resigned."] },
          { words: ["she", "accused", "him", "of", "having", "read", "her", "diary"], answer: "She accused him of having read her diary." },
          { words: ["they", "recommended", "that", "the", "bridge", "be", "closed", "immediately"], answer: "They recommended that the bridge be closed immediately." },
          { words: ["my", "boss", "warned", "me", "not", "to", "be", "late", "again"], answer: "My boss warned me not to be late again." },
          { words: ["it", "is", "thought", "that", "the", "painting", "was", "stolen", "to", "order"], answer: "It is thought that the painting was stolen to order." },
          { words: ["he", "apologised", "for", "not", "having", "called", "sooner"], answer: "He apologised for not having called sooner." }
        ]
      }
    ]
  }
});
