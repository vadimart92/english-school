/*
 * 7D English in action
 */
ES.registerLesson({
  id: "7D",
  unit: 7,
  letter: "D",
  title: "English in action",
  uk: "Дебати: як вести дебати й переконливо виступати — лексика, корисні фрази та риторичні прийоми",
  goal: "chair and participate in a debate",
  focus: { vocab: "debates", pron: "power pauses" },
  learn: {
    theory: [
      {
        h: "How a debate works",
        list: [
          "The chair introduces the motion (the idea being discussed) and reminds speakers of the ground rules.",
          "Team A argue in favour of the motion, as eloquently and coherently as possible.",
          "Team B try to sway the audience with their own arguments against it.",
          "Each team tries to refute the other side's points with rebuttals and counterarguments.",
          "There may be questions from the floor, then short summaries from the team leaders.",
          "The winner is chosen by a show of hands – often for rhetorical skills rather than the substance of the arguments."
        ],
        uk: {
          h: "Як відбуваються дебати",
          list: [
            "Головуючий оголошує тезу (ідею, яку обговорюють) і нагадує учасникам правила.",
            "Команда A аргументує на підтримку тези якомога красномовніше й послідовніше.",
            "Команда B намагається переконати аудиторію власними аргументами проти неї.",
            "Кожна команда намагається спростувати аргументи суперників запереченнями та контраргументами.",
            "Можуть бути питання із зали, потім короткі підсумки від лідерів команд.",
            "Переможця обирають підняттям рук – часто за риторичну майстерність, а не за суть аргументів."
          ]
        }
      },
      {
        h: "Useful phrases",
        table: [
          [
            "chair",
            "Thank you all for coming. / Tonight we are debating the motion that… / Without further ado, let me introduce the first speaker. / I'd like to remind the audience that… / Your allotted two minutes start now."
          ],
          [
            "debater",
            "I'd like to present my case by drawing your attention to… / Secondly, there's the fact that… / I'm sure you've all experienced… / Finally, I'd like to point out that… / That's why I firmly believe that… / To sum up, …"
          ]
        ],
        uk: {
          h: "Корисні фрази",
          table: [
            [
              "головуючий",
              "Thank you all for coming. / Tonight we are debating the motion that… / Without further ado, let me introduce the first speaker. / I'd like to remind the audience that… / Your allotted two minutes start now."
            ],
            [
              "учасник дебатів",
              "I'd like to present my case by drawing your attention to… / Secondly, there's the fact that… / I'm sure you've all experienced… / Finally, I'd like to point out that… / That's why I firmly believe that… / To sum up, …"
            ]
          ]
        }
      },
      {
        h: "Rhetorical techniques",
        list: [
          "us versus them: For them it's a photo opportunity; for us it's home.",
          "powerful negative imagery: Our old town has become a wasteland for locals.",
          "appeal to the audience's experience: I'm sure you've all been stuck behind…",
          "'more and more / worse and worse' for endless processes",
          "rhetorical questions: And what about the pollution?",
          "sets of three, often two short ideas + one longer: too many feet, too much noise and too little respect for the people who live here"
        ],
        uk: {
          h: "Риторичні прийоми",
          list: [
            "«ми проти них»: For them it's a photo opportunity; for us it's home.",
            "сильні негативні образи: Our old town has become a wasteland for locals.",
            "звернення до досвіду слухачів: I'm sure you've all been stuck behind…",
            "«more and more / worse and worse» для нескінченних процесів",
            "риторичні питання: And what about the pollution?",
            "трійки, часто дві короткі ідеї + одна довша: too many feet, too much noise and too little respect for the people who live here"
          ]
        }
      },
      {
        h: "Power pauses",
        p: "Speakers add a long pause just before or after a key idea, so the audience has time to feel its importance.",
        ex: [
          "That's why I firmly believe … that tourism should be discouraged.",
          "I'd like to present my case by drawing your attention to … three irrefutable facts."
        ],
        uk: { h: "Сильні паузи", p: "Промовці роблять довгу паузу перед ключовою думкою або після неї, щоб слухачі встигли відчути її вагу." }
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the debate words to their meanings",
        src: "SB 7D",
        items: [
          { a: "show of hands", b: "a vote to choose the winner" },
          { a: "from the floor", b: "asked by the audience" },
          { a: "motion", b: "the idea being discussed" },
          { a: "rhetorical skills", b: "the ability to build and deliver a persuasive argument" },
          { a: "refute", b: "show why an argument is wrong" },
          { a: "substance", b: "the solid facts in an argument" },
          { a: "ground rules", b: "the formal procedure for a meeting" },
          { a: "chair", b: "the person who manages a debate" },
          { a: "rebuttals", b: "explanations of why an argument is wrong" },
          { a: "sway", b: "persuade somebody to change their mind" }
        ]
      },
      {
        type: "sort",
        title: "Who would say it: the chair or a debater?",
        src: "SB 7D",
        categories: ["chair", "debater"],
        items: [
          { text: "Thank you all for coming.", cat: 0 },
          { text: "Tonight we are debating the motion that…", cat: 0 },
          { text: "Without further ado, let me introduce the first speaker.", cat: 0 },
          { text: "I'd like to remind the audience that…", cat: 0 },
          { text: "Your allotted two minutes start now.", cat: 0 },
          { text: "I'd like to present my case by drawing your attention to…", cat: 1 },
          { text: "Secondly, there's the fact that…", cat: 1 },
          { text: "I'm sure you've all experienced…", cat: 1 },
          { text: "Finally, I'd like to point out that…", cat: 1 },
          { text: "That's why I firmly believe that…", cat: 1 },
          { text: "To sum up, …", cat: 1 }
        ]
      },
      {
        type: "gap",
        title: "Complete the useful phrases",
        src: "SB 7D",
        items: [
          {
            q: "Thank you all for ___.",
            answers: [
              ["coming"]
            ]
          },
          {
            q: "Tonight we are debating the ___ that cars should be banned from city centres.",
            answers: [
              ["motion"]
            ]
          },
          {
            q: "Without further ___, let me introduce our first speaker.",
            answers: [
              ["ado"]
            ]
          },
          {
            q: "I'd like to present my ___ by drawing your attention to three facts.",
            answers: [
              ["case"]
            ]
          },
          {
            q: "That's why I ___ believe that e-scooters should be subsidised.",
            answers: [
              ["firmly"]
            ]
          },
          {
            q: "Your ___ two minutes start now.",
            answers: [
              ["allotted"]
            ]
          },
          {
            q: "To ___ up, the benefits clearly outweigh the costs.",
            answers: [
              ["sum"]
            ]
          },
          {
            q: "I'm sure you've all ___ the frustration of a cancelled train.",
            answers: [
              ["experienced"]
            ]
          },
          {
            q: "Secondly, there's the ___ that prices keep rising.",
            answers: [
              ["fact"]
            ]
          },
          {
            q: "I'd like to ___ the audience that questions come at the end.",
            answers: [
              ["remind"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Which rhetorical technique is it?",
        src: "SB 7D",
        items: [
          { q: "They arrive, they take their selfies, and they leave nothing behind but litter and noise.", options: ["a set of three", "us versus them", "a rhetorical question"], answer: 0 },
          { q: "Our streets are getting busier and busier, and dirtier and dirtier.", options: ["negative imagery", "an endless process (more and more)", "a set of three"], answer: 1 },
          { q: "I'm sure you've all been stuck behind a crowd of slow-moving sightseers.", options: ["appeal to the listeners' own experience", "us versus them", "a rhetorical question"], answer: 0 },
          { q: "For them it's a theme park; for us it's home.", options: ["a set of three", "us versus them", "an endless process"], answer: 1 },
          { q: "Our historic centre is drowning in a sea of selfie sticks.", options: ["a rhetorical question", "powerful negative imagery", "appeal to experience"], answer: 1 },
          { q: "And what about all the pollution from the cruise ships?", options: ["a rhetorical question", "a set of three", "us versus them"], answer: 0 }
        ]
      },
      {
        type: "cards",
        title: "Debate vocabulary",
        src: "SB 7D",
        items: [
          { front: "the motion", back: "тема (резолюція) дебатів", ex: "The motion is that tourism should be discouraged." },
          { front: "propose / oppose the motion", back: "виступати за / проти", ex: "Our team will oppose the motion." },
          { front: "the chair", back: "ведучий, головуючий", ex: "The chair reminded us of the ground rules." },
          { front: "ground rules", back: "базові правила", ex: "Let's agree on some ground rules first." },
          { front: "eloquently and coherently", back: "красномовно й послідовно", ex: "She argued eloquently and coherently." },
          { front: "rebuttals and counterarguments", back: "спростування й контраргументи", ex: "Prepare rebuttals to their main points." },
          { front: "refute an argument", back: "спростувати аргумент", ex: "He easily refuted their claims." },
          { front: "sway the audience", back: "схилити аудиторію на свій бік", ex: "Her final speech swayed the audience." },
          { front: "questions from the floor", back: "запитання із зали", ex: "We'll now take questions from the floor." },
          { front: "a show of hands", back: "голосування підняттям рук", ex: "The winner was chosen by a show of hands." },
          { front: "rhetorical skills vs substance", back: "ораторська майстерність vs суть (факти)", ex: "Style won over substance." }
        ]
      },
      {
        type: "speak",
        title: "Debate a motion",
        src: "SB 7D",
        intro: "Motions: Cars should be banned from city centres. / Tourists should pay large fees to visit certain places. / E-scooters should be subsidised by city governments.",
        phrases: [
          "Thank you all for coming",
          "motion",
          "without further ado",
          "present my case",
          "drawing your attention to",
          "secondly",
          "I'm sure you've all",
          "firmly believe",
          "to sum up",
          "point out"
        ],
        items: [
          {
            q: "You are the chair. Open the debate.",
            models: [
              "Thank you all for coming. Tonight we are debating the motion that cars should be banned from city centres. I'd like to remind the audience that questions come at the end. Without further ado, let me introduce the first speaker. Your allotted two minutes start now."
            ]
          },
          {
            q: "Argue in favour of banning cars from city centres.",
            models: [
              "I'd like to present my case by drawing your attention to … three facts. Firstly, … Secondly, there's the fact that… I'm sure you've all experienced… That's why I firmly believe … that cars have no place in our centre."
            ]
          },
          {
            q: "Give a rebuttal to the other side's main point.",
            models: [
              "My opponent claims that shops will lose customers. However, cities that have done this report the opposite – more people walking means more people shopping."
            ]
          },
          {
            q: "Sum up your side's case.",
            models: [
              "To sum up: cleaner air, safer streets and a centre that belongs to people, not traffic. I urge you to support the motion."
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
        title: "Complete the report",
        src: "WB 7D",
        intro: "chair, eloquently and coherently, from the floor, ground rules, motion, rebuttals and counterarguments, refuted, rhetorical skills, show of hands, substance, sway",
        items: [
          {
            q: "After introducing the ___ to the audience, the first team presented their case…",
            answers: [
              ["motion"]
            ]
          },
          {
            q: "…putting forward their arguments ___.",
            answers: [
              ["eloquently and coherently"]
            ]
          },
          {
            q: "The other team then gave their ___.",
            answers: [
              ["rebuttals and counterarguments"]
            ]
          },
          {
            q: "As both teams took questions ___, it became clear that Team B had more ___ to their arguments.",
            answers: [
              ["from the floor"],
              ["substance"]
            ]
          },
          {
            q: "Team B easily ___ Team A's arguments…",
            answers: [
              ["refuted"]
            ]
          },
          {
            q: "…while Team A had better ___, so they delivered their points more persuasively.",
            answers: [
              ["rhetorical skills"]
            ]
          },
          {
            q: "The debate got heated, and the ___ had to remind both teams about the ___ several times.",
            answers: [
              ["chair"],
              ["ground rules"]
            ]
          },
          {
            q: "In the end, Team B's arguments weren't enough to ___ the audience, and after a ___, Team A won.",
            answers: [
              ["sway"],
              ["show of hands"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "WB 7D",
        items: [
          { a: "Thank you all", b: "for coming." },
          { a: "Without further ado,", b: "let me introduce the first speaker." },
          { a: "I'd like to remind", b: "the audience that questions come at the end." },
          { a: "That's why", b: "I firmly believe this to be true." },
          { a: "Your allotted", b: "time starts now." },
          { a: "I'd like to present my case", b: "by drawing your attention to three facts." }
        ]
      },
      {
        type: "gap",
        title: "Complete the chair's introduction",
        src: "WB 7D",
        intro: "Phrases: allotted two minutes starts, debating the motion, remind the audience, thank you all for coming this evening, without further ado",
        items: [
          {
            q: "'Ladies and gentlemen, ___.'",
            answers: [
              ["thank you all for coming this evening"]
            ]
          },
          {
            q: "'Tonight we are ___ that museums should be free for everyone.'",
            answers: [
              ["debating the motion"]
            ]
          },
          {
            q: "'We have two teams to persuade you, so ___, let me introduce the first speaker.'",
            answers: [
              ["without further ado"]
            ]
          },
          {
            q: "'I'd like to ___ that each speaker will have two minutes.'",
            answers: [
              ["remind the audience"]
            ]
          },
          {
            q: "'Olena, your ___ now.'",
            answers: [
              ["allotted two minutes starts", "allotted two minutes start"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the argument. Three words are not needed",
        src: "WB 7D",
        intro: "case, claim, end, experienced, fact, firmly, point, sum, thoroughly",
        items: [
          {
            q: "That's why I ___ believe that visitors should pay to enter.",
            answers: [
              ["firmly"]
            ]
          },
          {
            q: "I'd like to present my ___ by drawing your attention to two facts.",
            answers: [
              ["case"]
            ]
          },
          {
            q: "I'm sure you've all ___ visiting somewhere so crowded that it's no fun at all.",
            answers: [
              ["experienced"]
            ]
          },
          {
            q: "Secondly, there's the ___ that huge crowds damage the environment.",
            answers: [
              ["fact"]
            ]
          },
          {
            q: "I'd also like to ___ out that local people suffer too.",
            answers: [
              ["point"]
            ]
          },
          {
            q: "So, to ___ up, popular sites should charge an entry fee.",
            answers: [
              ["sum"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Debate language at a glance",
        table: [
          ["open", "Thank you all for coming. Tonight we are debating the motion that…"],
          ["hand over", "Without further ado, let me introduce… Your allotted two minutes start now."],
          ["present", "I'd like to present my case by drawing your attention to…"],
          ["add", "Secondly, there's the fact that… Finally, I'd like to point out that…"],
          ["persuade", "I'm sure you've all experienced… That's why I firmly believe that…"],
          ["close", "To sum up, …"]
        ],
        uk: {
          h: "Мова дебатів з першого погляду",
          table: [
            ["відкрити", "Thank you all for coming. Tonight we are debating the motion that…"],
            ["передати слово", "Without further ado, let me introduce… Your allotted two minutes start now."],
            ["представити позицію", "I'd like to present my case by drawing your attention to…"],
            ["додати аргумент", "Secondly, there's the fact that… Finally, I'd like to point out that…"],
            ["переконати", "I'm sure you've all experienced… That's why I firmly believe that…"],
            ["завершити", "To sum up, …"]
          ]
        }
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "Check 7",
        items: [
          { q: "I'd like to present my case by ___ your attention to three irrefutable facts.", options: ["drawing", "pulling"], answer: 0 },
          { q: "That's why I ___ believe this is the best way forward.", options: ["hardly", "firmly"], answer: 1 },
          { q: "To some ___, your points are valid.", options: ["extent", "extend"], answer: 0 },
          { q: "The audience voted by a show of ___.", options: ["arms", "hands"], answer: 1 },
          { q: "We'll now take questions from the ___.", options: ["floor", "room"], answer: 0 },
          { q: "She managed to ___ every one of their arguments.", options: ["refute", "sway"], answer: 0 },
          { q: "His speech was entertaining, but it lacked ___.", options: ["substance", "motion"], answer: 0 },
          { q: "Without further ___, here is our first speaker.", options: ["ado", "delay"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Name the debate word",
        src: "Revision",
        items: [
          {
            q: "the person who manages a debate: the ___",
            answers: [
              ["chair"]
            ]
          },
          {
            q: "the idea being discussed: the ___",
            answers: [
              ["motion"]
            ]
          },
          {
            q: "persuade people to change their minds: ___ the audience",
            answers: [
              ["sway"]
            ]
          },
          {
            q: "show that an argument is wrong: ___ it",
            answers: [
              ["refute"]
            ]
          },
          {
            q: "the agreed procedure: the ___ rules",
            answers: [
              ["ground"]
            ]
          },
          {
            q: "questions asked by the audience: questions from the ___",
            answers: [
              ["floor"]
            ]
          },
          {
            q: "a vote by raising arms: a show of ___",
            answers: [
              ["hands"]
            ]
          },
          {
            q: "explanations of why an argument is wrong: ___",
            answers: [
              ["rebuttals", "counterarguments"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Turn the ideas into persuasive debate sentences",
        src: "Revision",
        intro: "Use a rhetorical technique: a set of three, us versus them, a rhetorical question, 'more and more'.",
        items: [
          {
            q: "Tourists make the city noisy, dirty and expensive.",
            models: [
              "Our city is becoming noisier, dirtier and more and more expensive – and who pays the price? We do."
            ]
          },
          {
            q: "Cars are dangerous for children in the centre.",
            models: [
              "How many more children have to be hurt before we act? For drivers it's a shortcut; for our children it's a danger zone."
            ]
          },
          { q: "E-scooters are cheap and clean.", models: ["They're cheap, they're clean, and they get people out of their cars for good."] },
          {
            q: "Joggers block the pavements.",
            models: [
              "I'm sure you've all had to step into the road to avoid a crowd of joggers. Is that really what pavements are for?"
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Mini-debate with power pauses",
        src: "SB 7D",
        intro: "Give three points against the motion 'Tourism is bad for our city and should be discouraged'. Plan where to pause.",
        phrases: [
          "I'd like to present my case",
          "drawing your attention to",
          "I'm sure you've all",
          "That's why I firmly believe",
          "To sum up",
          "Finally"
        ],
        items: [
          {
            q: "Point 1: jobs",
            models: [
              "I'd like to present my case by drawing your attention to … one simple fact: one in five jobs in our city depends on visitors."
            ]
          },
          {
            q: "Point 2: culture",
            models: [
              "I'm sure you've all enjoyed a festival or a museum that only exists … because visitors pay for it."
            ]
          },
          {
            q: "Point 3 and conclusion",
            models: [
              "Finally, I'd like to point out that tourism can be managed, not banned. That's why I firmly believe … that this motion should be rejected."
            ]
          }
        ]
      }
    ]
  }
});
