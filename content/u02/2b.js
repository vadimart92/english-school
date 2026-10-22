/*
 * 2B Work, work, work
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "2B",
  unit: 2,
  letter: "B",
  title: "Work, work, work",
  uk: "Робота: ймовірність, згода й незгода",
  goal: "speculate about work situations",
  focus: { grammar: "probability", vocab: "agreement and disagreement", pron: "elision of k in likely" },
  learn: {
    theory: [
      {
        h: "Probability: two word orders",
        p: "З прикметниками sure, certain, likely, unlikely можна будувати речення двома способами. Почни з it (або I'm/We're), щоб наголосити саму ймовірність; почни з підмета + to-infinitive, щоб наголосити, про кого/що йдеться.",
        table: [
          ["It + be + adj + that-clause", "It's highly likely that the office will close."],
          ["I'm / We're + sure/certain + (that)-clause", "I'm fairly sure (that) she's already left."],
          [
            "Subject + be + adj + to-infinitive",
            "The office is highly likely to close. · She's sure to have left already."
          ]
        ],
        ex: [
          "It was highly unlikely that they knew about it. → They were highly unlikely to have known about it."
        ]
      },
      {
        h: "Details",
        list: [
          "That часто опускають: It's likely we'll be late.",
          "Інфінітив показує час: to be (зараз/майбутнє), to be doing (у процесі), to have done (раніше).",
          "(im)possible — лише з It: It's impossible that he finished it alone (NOT He's impossible to have finished…).",
          "bound — лише з to-infinitive: The price is bound to go up.",
          "Підсилювачі: highly / quite + (un)likely; pretty, fairly, absolutely, totally, quite + sure/certain."
        ]
      },
      {
        h: "Agreement and disagreement",
        table: [
          ["agreement", "get on board with · be willing to · be open to · go along with"],
          [
            "disagreement",
            "be at odds with · receive (some) pushback · come up against (some) resistance · take issue with · be loath to · be met with a lukewarm response"
          ]
        ]
      },
      { h: "Pronunciation: likely", p: "У швидкому мовленні звук /k/ у likely / unlikely часто майже зникає: They're likely to… звучить як /ˈlaɪli/." }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "SB 4",
        items: [
          { q: "A small number of ___ (sure, certain, likely, unlikely) let us change the word order.", options: ["verbs", "adjectives"], answer: 1 },
          { q: "To emphasise the ___, start the sentence with 'it'.", options: ["probability", "subject"], answer: 0 },
          { q: "To emphasise the ___, put it at the start and use an infinitive.", options: ["probability", "subject"], answer: 1 },
          { q: "The new manager is ___ to make some changes.", options: ["bound", "possible"], answer: 0, explain: "bound only works with a to-infinitive." },
          { q: "It's ___ that they could have finished the project in a week.", options: ["impossible", "unlikely to"], answer: 0 },
          { q: "She's ___ unlikely to accept the offer.", options: ["highly", "absolutely"], answer: 0, explain: "highly/quite + (un)likely." },
          { q: "I'm ___ certain the meeting has been cancelled.", options: ["highly", "pretty"], answer: 1, explain: "pretty/fairly/absolutely/totally/quite + sure/certain." },
          { q: "They're likely ___ the email yet – they're on holiday.", options: ["not to have read", "that they haven't read"], answer: 0 }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make sentences",
        src: "SB 6a",
        items: [
          { words: ["You're", "likely", "to", "be", "offered", "the", "job"], answer: "You're likely to be offered the job." },
          { words: ["It's", "unlikely", "that", "they've", "read", "the", "report", "yet"], answer: "It's unlikely that they've read the report yet." },
          { words: ["Ivan", "is", "certain", "to", "have", "heard", "the", "news"], answer: "Ivan is certain to have heard the news." },
          { words: ["They're", "likely", "to", "be", "discussing", "the", "budget", "now"], answer: "They're likely to be discussing the budget now." },
          { words: ["It's", "highly", "likely", "that", "the", "factory", "will", "be", "sold", "next", "year"], answer: "It's highly likely that the factory will be sold next year." },
          { words: ["The", "director", "is", "unlikely", "to", "have", "approved", "this"], answer: "The director is unlikely to have approved this." },
          { words: ["We", "can", "be", "certain", "that", "AI", "will", "change", "our", "jobs"], answer: "We can be certain that AI will change our jobs." }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentences using a that-clause or an infinitive",
        src: "SB 6b",
        items: [
          { q: "You're likely to be offered the job.", start: "It's…", models: ["It's likely that you'll be offered the job."] },
          { q: "It's unlikely that they've read the report yet.", start: "They…", models: ["They're unlikely to have read the report yet."] },
          { q: "Ivan is certain to have heard the news.", start: "It's…", models: ["It's certain that Ivan has heard the news."] },
          { q: "They're likely to be discussing the budget now.", start: "It's…", models: ["It's likely that they're discussing the budget now."] },
          { q: "It's highly likely that the factory will be sold next year.", start: "The factory…", models: ["The factory is highly likely to be sold next year."] },
          { q: "The director is unlikely to have approved this.", start: "It's…", models: ["It's unlikely that the director (has) approved this."] }
        ]
      },
      {
        type: "cards",
        title: "Agreement and disagreement",
        src: "SB 8",
        items: [
          { front: "get on board with (an idea)", back: "підтримати, долучитися (згода)", ex: "Most of the team got on board with the new schedule." },
          { front: "be willing to", back: "бути готовим щось зробити (згода)", ex: "I'd be willing to work late if I can start later." },
          { front: "be open to", back: "бути відкритим до (згода)", ex: "We're open to suggestions." },
          { front: "go along with", back: "погодитися (іноді неохоче)", ex: "I'll go along with the plan for now." },
          { front: "be at odds with", back: "суперечити, не узгоджуватися (незгода)", ex: "This policy is at odds with our values." },
          { front: "receive some pushback", back: "наштовхнутися на опір (незгода)", ex: "The proposal received some pushback from staff." },
          { front: "come up against some resistance", back: "зустріти спротив (незгода)", ex: "Any change will come up against some resistance." },
          { front: "take issue with", back: "не погоджуватися з, заперечувати", ex: "I take issue with the way the data was presented." },
          { front: "be loath to", back: "дуже не хотіти щось робити", ex: "She was loath to give up her office." },
          { front: "be met with a lukewarm response", back: "бути сприйнятим без ентузіазму", ex: "The idea was met with a lukewarm response." }
        ]
      },
      {
        type: "gap",
        title: "Complete the questions with the missing words",
        src: "SB 9a",
        items: [
          {
            q: "Would you be ___ to the idea of a shorter working week with lower pay?",
            answers: [
              ["open"]
            ]
          },
          {
            q: "Which changes at your school would be met with a ___ response?",
            answers: [
              ["lukewarm"]
            ]
          },
          {
            q: "Have you ever suggested something that ___ up against resistance?",
            answers: [
              ["came"]
            ]
          },
          {
            q: "What sacrifices are you ___ to make for your career?",
            answers: [
              ["willing"]
            ]
          },
          {
            q: "Are there any rules at work that are at ___ with how you like to do things?",
            answers: [
              ["odds"]
            ]
          },
          {
            q: "Do you usually go ___ with your manager's decisions?",
            answers: [
              ["along"]
            ]
          },
          {
            q: "What would make you ___ issue with a new policy?",
            answers: [
              ["take"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Complete the sentences so that they are true for you",
        src: "SB 7a",
        phrases: ["highly unlikely to", "It's certain that", "is likely to", "are sure that", "sure to"],
        items: [
          { q: "I'm highly unlikely …", models: ["I'm highly unlikely to move abroad in the next few years."] },
          { q: "It's certain …", models: ["It's certain that I'll need to learn new skills for my job."] },
          { q: "This year is likely …", models: ["This year is likely to be the busiest one I've had at work."] },
          { q: "My parents are sure …", models: ["My parents are sure that I'll come home for the holidays."] }
        ]
      },
      {
        type: "speak",
        title: "Speculate about work situations",
        src: "SB 11-13",
        intro: "Discuss these proposals for your place of work or study. How popular would each be? Speculate about the reactions and agree on two to implement.",
        phrases: [
          "is likely to",
          "are unlikely to",
          "It's highly likely that",
          "I'm pretty sure",
          "bound to",
          "get on board",
          "open to",
          "go along with",
          "pushback",
          "resistance",
          "lukewarm response",
          "take issue with",
          "loath to",
          "at odds with"
        ],
        items: [
          {
            q: "Moving to different premises.",
            models: [
              "Staff are unlikely to get on board with a move further from the city centre – I'm pretty sure it would come up against some resistance."
            ]
          },
          {
            q: "Working longer hours in exchange for longer holidays.",
            models: [
              "It's highly likely that parents would take issue with longer days, but younger staff might be open to it."
            ]
          },
          {
            q: "One day a week to work on personal projects.",
            models: [
              "Everyone's bound to love that idea, although managers might be loath to lose a day of normal work."
            ]
          },
          { q: "Closing the canteen.", models: ["That's sure to receive a lot of pushback – it's at odds with our wellbeing policy."] },
          {
            q: "Larger teams with fewer managers.",
            models: [
              "It's likely to be met with a lukewarm response, but people would probably go along with it on a trial basis."
            ]
          }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "WB 1",
        items: [
          { q: "The internet's just stopped working. It's sure ___ because of the storm.", options: ["to be", "to have been"], answer: 0 },
          { q: "It's ___ that Taras will come to the party now he lives in Canada.", options: ["certain", "unlikely"], answer: 1 },
          { q: "This cake was unlikely to ___ from a supermarket. It looks home-made.", options: ["come", "have come"], answer: 1 },
          { q: "The package is sure ___ have arrived by now.", options: ["to", "that"], answer: 0 },
          { q: "I'm not ___ that the noise will stop.", options: ["certain", "likely"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Complete the second sentence so it has the same meaning, using the word in bold",
        src: "WB 2",
        items: [
          { q: "I'm SURE that any driving test is stressful.", start: "Any driving test…", models: ["Any driving test is sure to be stressful."] },
          { q: "It's UNLIKELY that the referee was to blame.", start: "The referee…", models: ["The referee is unlikely to have been to blame."] },
          { q: "Ms Kovalenko is CERTAIN to be the new head teacher.", start: "I'm…", models: ["I'm certain that Ms Kovalenko will be the new head teacher."] },
          { q: "It's HIGHLY LIKELY that Andriy will win the award.", start: "Andriy…", models: ["Andriy is highly likely to win the award."] },
          { q: "The training session is SURE to go on all day.", start: "I'm…", models: ["I'm sure (that) the training session will go on all day."] },
          { q: "We're CERTAIN that Oksana had a hand in the plan.", start: "Oksana…", models: ["Oksana is certain to have had a hand in the plan."] }
        ]
      },
      {
        type: "gap",
        title: "Complete using the prompts in brackets",
        src: "WB 3",
        intro: "Predictions about the future of the office.",
        items: [
          {
            q: "The office of the future ___ workers the chance to work wherever they want.",
            hint: "likely / offer",
            answers: [
              ["is likely to offer", "'s likely to offer"]
            ]
          },
          {
            q: "___ all companies will soon offer flexible hours.",
            hint: "it / likely",
            answers: [
              ["It is likely that", "It's likely that", "It is likely", "It's likely"]
            ]
          },
          {
            q: "More employees ___ working part-time.",
            hint: "certain / be",
            answers: [
              ["are certain to be"]
            ]
          },
          {
            q: "I ___ soft skills will also play an important role.",
            hint: "certain",
            answers: [
              ["am certain that", "'m certain that", "am certain", "'m certain"]
            ]
          },
          {
            q: "By 2035, companies ___ a wider range of training courses in place.",
            hint: "certain / put",
            answers: [
              ["are certain to have put", "are certain to put"]
            ]
          },
          {
            q: "Businesses ___ stronger links with universities.",
            hint: "likely / forge",
            answers: [
              ["are likely to forge", "are likely to have forged"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct option",
        src: "WB 4",
        intro: "Advice for managers introducing changes.",
        items: [
          { q: "If you introduce a change, expect to ___ against some resistance.", options: ["bring about", "take up", "come up"], answer: 2 },
          { q: "Explaining the reasons can get people on ___ with the changes.", options: ["board", "call", "hand"], answer: 0 },
          { q: "…and reduce the ___ you'll receive.", options: ["pushback", "fight", "struggle"], answer: 0 },
          { q: "Listen to the changes staff take ___ with.", options: ["problem", "argument", "issue"], answer: 2 },
          { q: "Be ___ to their alternative ideas.", options: ["free", "open", "accessible"], answer: 1 },
          { q: "If staff feel involved, they'll be more likely to ___ along with the changes.", options: ["move", "go", "get"], answer: 1 },
          { q: "Many of us are ___ to change because we're afraid we won't cope.", options: ["unhelpful", "hostile", "loath"], answer: 2 },
          { q: "Training makes sure staff are ready and ___ to deal with change.", options: ["enthusiastic", "active", "willing"], answer: 2 }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "WB 5",
        items: [
          { q: "The ___ the staff gave to the idea showed we weren't keen.", options: ["greater issue", "lukewarm response"], answer: 1 },
          { q: "They didn't come up against any real ___, did they?", options: ["argument", "resistance"], answer: 1 },
          { q: "They got a bit of ___ from the sales team.", options: ["pushback", "resistance"], answer: 0, explain: "get pushback; we come up against resistance." },
          { q: "Maybe we should all have ___ with the changes.", options: ["been at odds", "taken greater issue"], answer: 1 },
          { q: "I'm ___ change when it's useful, but this is pointless.", options: ["loath to", "open to"], answer: 1 },
          { q: "I'm ___ make a fuss, though – I don't want to look like a troublemaker.", options: ["loath to", "open to"], answer: 0 },
          { q: "I expect I'll ___ it, too. You have to pick your battles.", options: ["be at odds with", "go along with"], answer: 1 }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Three patterns",
        table: [
          ["It + be + adjective + that-clause", "It's likely that we'll arrive early."],
          ["Pronoun + be + adjective + that-clause", "I'm sure (that) they knew all about it."],
          ["Subject + adjective + to-infinitive (emphasises the subject)", "We're likely to arrive early."]
        ]
      },
      {
        h: "Watch out",
        list: [
          "(im)possible works only with It: It's impossible that we could have finished on time. NOT We were impossible to…",
          "bound works only with to-infinitive: It's bound to rain.",
          "(un)likely + highly, quite: She's highly unlikely to be there on time.",
          "sure / certain + pretty, fairly, absolutely, totally, quite: I'm pretty certain she won't say no."
        ]
      },
      {
        h: "Agreeing",
        list: [
          "get on board with an idea",
          "be willing to do something",
          "be open to an idea",
          "go along with something (accept, maybe reluctantly)"
        ]
      },
      {
        h: "Disagreeing / resistance",
        list: [
          "be met with a lukewarm response",
          "be at odds with (conflict with)",
          "receive some pushback",
          "come up against some resistance",
          "take issue with something",
          "be loath to do something (very unwilling)"
        ]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with one word",
        items: [
          {
            q: "It's unlikely ___ they'll agree to this.",
            answers: [
              ["that"]
            ]
          },
          {
            q: "The finance department are sure ___ reject the budget.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "She's highly ___ to agree, because it's in her best interests.",
            answers: [
              ["likely"]
            ]
          },
          {
            q: "___'s possible we'll get there early at this rate.",
            answers: [
              ["it"]
            ]
          },
          {
            q: "We ___ certain this will get approved.",
            answers: [
              ["are", "feel"]
            ]
          },
          {
            q: "Craig's unlikely ___ have already bought her present.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "You're bound ___ get the job, I'm sure of it.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "I'm sure ___ things will get better for you soon.",
            answers: [
              ["that"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Choose the correct alternative (text)",
        items: [
          { q: "The world of work is changing rapidly, and this is bound ___ continue into the future.", options: ["it will", "to"], answer: 1 },
          { q: "While it's ___ likely that a small number of jobs will become fully automated…", options: ["highly", "totally"], answer: 0 },
          { q: "…experts are fairly sure ___ mean humans being replaced.", options: ["not to", "that this will not"], answer: 1 },
          { q: "A significant number of jobs are likely ___ become at least partially automated.", options: ["to", "that they will"], answer: 0 },
          { q: "Polarisation of the workforce ___ sure to continue too.", options: ["is", "that"], answer: 0 },
          { q: "It's also possible ___ manufacturing jobs will decrease.", options: ["to", "that"], answer: 1 },
          { q: "Workers are quite ___ to offer their services online.", options: ["likely", "possible"], answer: 0 },
          { q: "With all of these changes occurring, ___ can be quite sure that…", options: ["it", "we"], answer: 1 }
        ],
        src: "Revision"
      },
      {
        type: "sort",
        title: "Positive or negative reaction?",
        categories: ["support", "resistance"],
        items: [
          { text: "get on board with", cat: 0 },
          { text: "be willing to", cat: 0 },
          { text: "be open to", cat: 0 },
          { text: "go along with", cat: 0 },
          { text: "be met with a lukewarm response", cat: 1 },
          { text: "be at odds with", cat: 1 },
          { text: "receive some pushback", cat: 1 },
          { text: "come up against some resistance", cat: 1 },
          { text: "take issue with", cat: 1 },
          { text: "be loath to", cat: 1 }
        ],
        src: "Revision"
      },
      {
        type: "gap",
        title: "Complete with one word",
        items: [
          {
            q: "I'd be ___ to come in three days a week, but not five.",
            answers: [
              ["willing"]
            ]
          },
          {
            q: "I'm not really ___ to that idea.",
            answers: [
              ["open"]
            ]
          },
          {
            q: "I think this proposal will receive some ___.",
            answers: [
              ["pushback"]
            ]
          },
          {
            q: "The plan was met with a ___ response.",
            answers: [
              ["lukewarm"]
            ]
          },
          {
            q: "Management are ___ to change the policy. (very unwilling)",
            answers: [
              ["loath", "loth"]
            ]
          },
          {
            q: "Her views are at ___ with the rest of the team.",
            answers: [
              ["odds"]
            ]
          },
          {
            q: "I take ___ with the idea that AI is always fair.",
            answers: [
              ["issue"]
            ]
          },
          {
            q: "It took a while, but eventually everyone got on ___ with the idea.",
            answers: [
              ["board"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "React to the proposal",
        phrases: [
          "on board",
          "willing",
          "open to",
          "go along with",
          "lukewarm",
          "at odds with",
          "pushback",
          "resistance",
          "take issue",
          "loath to"
        ],
        items: [
          {
            q: "Your company wants to ban working from home completely.",
            models: [
              "I'd be willing to come in three days a week, but not five.",
              "I'm not really open to that idea.",
              "I think this proposal will receive some pushback."
            ]
          },
          { q: "All meetings should start at 7 a.m.", models: ["I suspect it'll come up against some resistance."] },
          { q: "Students should keep their cameras on throughout every online lesson.", models: ["I'd go along with it for small groups, but many would be loath to."] },
          { q: "Social media should be banned for anyone under 18.", models: ["I take issue with a total ban – it's at odds with young people's rights."] },
          { q: "Everyone should work a four-day week.", models: ["I'd get on board with that immediately!"] },
          { q: "AI should mark all exams.", models: ["I think it would be met with a lukewarm response from teachers."] },
          { q: "Cars should be banned from city centres.", models: ["I'm open to the idea, but drivers will push back."] },
          { q: "Employees should be allowed unlimited holiday.", models: ["Managers might be loath to approve it."] }
        ],
        src: "Revision"
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "Check 9",
        items: [
          { a: "It's highly likely", b: "that prices will rise after the merger." },
          { a: "We're unlikely", b: "to see any big changes before the summer." },
          { a: "I'm sure that", b: "he won't have read your email yet." },
          { a: "She's likely", b: "to have sent the form already." },
          { a: "It's highly unlikely that", b: "they know about the surprise yet." }
        ]
      },
      {
        type: "gap",
        title: "Complete the phrases of agreement and disagreement",
        src: "Check 10",
        items: [
          {
            q: "Do you think the team will get on ___ with the idea, or reject it outright?",
            answers: [
              ["board"]
            ]
          },
          {
            q: "We can definitely go ___ with the plan for a four-day week.",
            answers: [
              ["along"]
            ]
          },
          {
            q: "Most parents are ___ to trying a later start time.",
            answers: [
              ["open"]
            ]
          },
          {
            q: "Her proposal was met with a ___ response at the meeting.",
            answers: [
              ["lukewarm"]
            ]
          },
          {
            q: "The new rules are somewhat at ___ with the company's values.",
            answers: [
              ["odds"]
            ]
          },
          {
            q: "It's unpopular, so we're likely to come up ___ some resistance.",
            answers: [
              ["against"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the work practices phrases",
        src: "VB 2B",
        intro: "Words: appraisal, contracts, income, lieu, line, manage, misconduct, pay, procedures, push, rank, rata.",
        items: [
          {
            q: "Many delivery firms employ drivers on zero-hour ___.",
            answers: [
              ["contracts"]
            ]
          },
          {
            q: "I'll need to check with my ___ manager before I agree.",
            answers: [
              ["line"]
            ]
          },
          {
            q: "Can I take Friday off in ___ of the Saturday I worked?",
            answers: [
              ["lieu"]
            ]
          },
          {
            q: "Some countries are testing a universal basic ___.",
            answers: [
              ["income"]
            ]
          },
          {
            q: "She's been called into HR – is she going to be given the ___?",
            answers: [
              ["push"]
            ]
          },
          {
            q: "I like your idea, but I'll have to pull ___ and say no.",
            answers: [
              ["rank"]
            ]
          },
          {
            q: "He was sacked for gross ___, so he got no severance ___.",
            answers: [
              ["misconduct"],
              ["pay"]
            ]
          },
          {
            q: "I'll ask for a pay rise at my next staff ___.",
            answers: [
              ["appraisal"]
            ]
          },
          {
            q: "They started disciplinary ___ against him because he kept missing deadlines.",
            answers: [
              ["procedures"]
            ]
          },
          {
            q: "My boss checks every email I send – I hate the way she micro-___s me.",
            answers: [
              ["manage"]
            ]
          },
          {
            q: "The part-time job pays €15,000 (€30,000 pro ___).",
            answers: [
              ["rata"]
            ]
          }
        ]
      }
    ]
  }
});
