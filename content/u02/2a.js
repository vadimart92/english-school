/*
 * 2A Changes
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "2A",
  unit: 2,
  letter: "A",
  title: "Changes",
  uk: "Зміни: тривалий аспект і тенденції",
  goal: "give a presentation on past, current and future trends",
  focus: { grammar: "the continuous aspect", vocab: "trends", pron: "to have in connected speech" },
  learn: {
    theory: [
      {
        h: "The continuous aspect",
        p: "Continuous (be + -ing) у будь-якому часі — present, past, future, perfect, з інфінітивом чи пасивом — показує дію як незавершену, що триває. Ми обираємо його, коли нас цікавить сама дія, а не результат.",
        table: [
          [
            "temporary",
            "I'm staying with friends until my flat is ready. · The project seems to be going well."
          ],
          [
            "limited (part of an activity, more to come)",
            "Engineers have been testing the new bridge. · The old town is being renovated."
          ],
          [
            "repeated or changing",
            "She's been calling me every evening. · Online shopping is becoming more popular."
          ],
          ["trends", "Air quality is improving. · The campaign seems to have been having an effect."]
        ]
      },
      {
        h: "Action vs result",
        list: [
          "They've been cleaning the beach all week. — цікавить процес (що робили).",
          "They've cleaned half the beach. — цікавить результат (скільки зробили).",
          "Дієслова чуттів і remember: I saw him running (бачив частину дії) vs I saw him run (бачив усю дію від початку до кінця).",
          "Дієслова стану (believe, know, belong, own) зазвичай не мають continuous: I believed it (NOT was believing). Деякі змінюють значення: I think so (= вважаю) / I'm thinking about it (= обмірковую)."
        ]
      },
      {
        h: "Trends vocabulary",
        table: [
          ["a downward / an upward trend", "тенденція до спаду / зростання"],
          ["reach a tipping point", "досягти переломного моменту"],
          ["reverse the trend", "переломити тенденцію"],
          ["look set to continue", "схоже, триватиме й далі"],
          ["pass a milestone", "подолати важливий рубіж"],
          ["mark the start of a new era", "позначити початок нової епохи"],
          ["be on the up", "зростати, покращуватися"],
          ["revert to", "повернутися до (попереднього стану)"],
          ["set the trend (for)", "задавати тон, бути першим, кого копіюють"],
          ["look promising", "виглядати багатообіцяюче"]
        ]
      },
      { h: "Pronunciation: to have", p: "У швидкому мовленні to have перед been звучить слабко й злито: /tə(h)əv/ — «тев»: People seem to have been listening." }
    ],
    exercises: [
      {
        type: "cards",
        title: "Trends",
        src: "SB 2",
        items: [
          { front: "a downward trend", back: "тенденція до спаду", ex: "There's been a downward trend in cinema attendance." },
          { front: "an upward trend", back: "тенденція до зростання", ex: "House prices show an upward trend." },
          { front: "reach a tipping point", back: "досягти переломного моменту", ex: "Public anger has reached a tipping point." },
          { front: "reverse the trend", back: "змінити тенденцію на протилежну", ex: "The new policy aims to reverse the trend of young people leaving villages." },
          { front: "look set to continue", back: "схоже, продовжиться", ex: "The heatwave looks set to continue into next week." },
          { front: "pass a milestone", back: "подолати важливий рубіж", ex: "The app has passed the milestone of a million users." },
          { front: "mark the start of a new era", back: "ознаменувати нову епоху", ex: "The smartphone marked the start of a new era in communication." },
          { front: "be on the up", back: "зростати, йти вгору", ex: "Cycling is definitely on the up in our city." },
          { front: "revert to", back: "повернутися до попереднього", ex: "After the diet, he reverted to his old habits." },
          { front: "set the trend (for)", back: "задавати моду / приклад", ex: "This café set the trend for plant-based menus." },
          { front: "look promising", back: "виглядати багатообіцяюче", ex: "The first results look promising." }
        ]
      },
      {
        type: "gap",
        title: "Complete the trend phrases with one word",
        src: "SB 2",
        items: [
          {
            q: "Thanks to remote work, there has been a ___ trend in office rents.",
            answers: [
              ["downward"]
            ]
          },
          {
            q: "Scientists warn that the coral reefs are close to a ___ point.",
            answers: [
              ["tipping"]
            ]
          },
          {
            q: "Free school lunches could help ___ the trend in childhood obesity.",
            answers: [
              ["reverse"]
            ]
          },
          {
            q: "Vinyl sales are rising, and this trend looks ___ to continue.",
            answers: [
              ["set"]
            ]
          },
          {
            q: "When the company hired its 100th employee, it felt like we'd ___ a milestone.",
            answers: [
              ["passed", "reached"]
            ]
          },
          {
            q: "The first moon landing ___ the start of a new era in space exploration.",
            answers: [
              ["marked"]
            ]
          },
          {
            q: "Interest in learning Ukrainian is definitely on the ___.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "After the experiment, the school ___ to its traditional timetable.",
            answers: [
              ["reverted"]
            ]
          },
          {
            q: "Copenhagen has been ___ the trend for cycle-friendly cities.",
            answers: [
              ["setting"]
            ]
          },
          {
            q: "The new treatment looks ___, but more tests are needed.",
            answers: [
              ["promising"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Why is the continuous form used?",
        src: "SB 8",
        items: [
          { q: "The volunteers have been planting trees. (vs have planted twenty trees)", options: ["We focus on the activity, not the result.", "The activity is finished and counted."], answer: 0 },
          { q: "He seems to be finding the new job difficult. (vs seems to find)", options: ["It's a permanent fact about him.", "It's a temporary situation, happening now."], answer: 1 },
          { q: "The number of wolves in the region has been rising. (vs has risen)", options: ["It's a trend that is still going on.", "It's a single completed change."], answer: 0 },
          { q: "The new rules seem to have been having an effect. (vs to have had)", options: ["The effect is gradual and continuing.", "The effect happened once and is over."], answer: 0 },
          { q: "Olena will be taking the train to work from now on. (vs will take the train tomorrow)", options: ["A single future event.", "A repeated action over a period."], answer: 1 },
          { q: "I heard the dog barking all night. (vs heard the dog bark)", options: ["Repeated and ongoing.", "Just once."], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with a continuous form of the verb",
        src: "LB 2A",
        items: [
          {
            q: "Online courses ___ more and more popular these days.",
            hint: "become",
            answers: [
              ["are becoming", "'re becoming", "have been becoming", "'ve been becoming"]
            ]
          },
          {
            q: "The plastic problem seems ___ worse, not better.",
            hint: "get",
            answers: [
              ["to be getting"]
            ]
          },
          {
            q: "Over the last year, scientists ___ a new way to recycle batteries.",
            hint: "develop",
            answers: [
              ["have been developing", "'ve been developing"]
            ]
          },
          {
            q: "In twenty years' time, most cars ___ themselves.",
            hint: "drive",
            answers: [
              ["will be driving", "'ll be driving"]
            ]
          },
          {
            q: "The old factory ___ into flats at the moment.",
            hint: "turn (passive)",
            answers: [
              ["is being turned", "'s being turned"]
            ]
          },
          {
            q: "I'm only ___ with my cousin until I find a place of my own.",
            hint: "stay",
            answers: [
              ["staying"]
            ]
          },
          {
            q: "When we arrived, the band ___ for over an hour.",
            hint: "play",
            answers: [
              ["had been playing", "'d been playing"]
            ]
          },
          {
            q: "This approach appears ___ a real difference over the last few months.",
            hint: "make",
            answers: [
              ["to have been making"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Complete the prompts using the continuous aspect and your own ideas",
        src: "SB 9a",
        phrases: ["will be", "are becoming", "seem to be", "is being", "have been"],
        items: [
          { q: "In the future, most people will …", models: ["In the future, most people will be working only four days a week."] },
          { q: "People are generally … (more/less) …", models: ["People are generally becoming less patient with slow websites."] },
          { q: "People seem to be becoming …", models: ["People seem to be becoming more interested in where their food comes from."] },
          { q: "Technology is being …", models: ["Technology is being used more and more in schools, even with very young children."] }
        ]
      },
      {
        type: "speak",
        title: "Give a presentation on past, current and future trends",
        src: "SB 10-12",
        intro: "Choose a topic (e.g. transport, food, work, education, the environment). Describe how things have changed, what is happening now and what is likely to happen. Use the continuous aspect and trend phrases.",
        phrases: [
          "has been",
          "have been",
          "is becoming",
          "are becoming",
          "will be",
          "downward trend",
          "upward trend",
          "on the up",
          "tipping point",
          "look set to",
          "pass a milestone",
          "new era",
          "reverse the trend",
          "look promising"
        ],
        items: [
          {
            q: "Past: how has the situation changed over the last ten years?",
            models: [
              "Over the last decade, there has been a downward trend in car ownership among young people in cities. Car-sharing apps have been setting the trend."
            ]
          },
          {
            q: "Present: what's happening now?",
            models: [
              "At the moment, cycling is definitely on the up – cities are building new bike lanes, and more and more people are commuting by e-bike."
            ]
          },
          {
            q: "Future: what is likely to happen?",
            models: [
              "This trend looks set to continue. In ten years' time, many city centres will be closing their streets to private cars, which could mark the start of a new era."
            ]
          },
          {
            q: "Answer a question from the audience: are there any risks?",
            models: [
              "Yes – if public transport gets more expensive, people might revert to driving, so we'd need to reverse that trend quickly."
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
        items: [
          {
            q: "Unemployment looks s___ to rise as factories close.",
            answers: [
              ["set"]
            ]
          },
          {
            q: "Cinemas have lost customers, but they hope to r___ this trend with cheaper tickets.",
            answers: [
              ["reverse"]
            ]
          },
          {
            q: "The opening of the new metro line m___ the start of a new era for the city.",
            answers: [
              ["marks", "marked"]
            ]
          },
          {
            q: "Climate experts fear we have reached a t___ point.",
            answers: [
              ["tipping", "turning"]
            ]
          },
          {
            q: "Early trials of the new drug look p___, say researchers.",
            answers: [
              ["promising"]
            ]
          },
          {
            q: "The charity has p___ a milestone now that it has helped 10,000 families.",
            answers: [
              ["passed"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with: an upward trend, look set to, on the up, reversed, revert to, setting the trend",
        src: "WB 2",
        intro: "An article about the growth of electric scooters.",
        items: [
          {
            q: "Demand for electric scooters is ___, according to retailers.",
            answers: [
              ["on the up"]
            ]
          },
          {
            q: "There has been ___ in scooter sales over the last three years.",
            answers: [
              ["an upward trend"]
            ]
          },
          {
            q: "Experts say scooter users ___ double by 2030.",
            answers: [
              ["look set to"]
            ]
          },
          {
            q: "Paris has played a big part in ___ for scooter-sharing schemes.",
            answers: [
              ["setting the trend"]
            ]
          },
          {
            q: "Some people try scooters for a month and then ___ driving.",
            answers: [
              ["revert to"]
            ]
          },
          {
            q: "With cities investing in scooter lanes, this trend is unlikely to be ___.",
            answers: [
              ["reversed"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Which sentence follows, a or b?",
        src: "WB 3",
        items: [
          { q: "I've written several articles about the election.", options: ["They should all be finished by Friday.", "They were all published last month."], answer: 1, explain: "Simple → completed results." },
          { q: "I've been writing several articles about the election.", options: ["They should all be finished by Friday.", "They were all published last month."], answer: 0, explain: "Continuous → unfinished activity." },
          { q: "I've tried to repair the printer.", options: ["I've no idea what else to do.", "I'm slowly getting somewhere."], answer: 0 },
          { q: "I've been trying to repair the printer.", options: ["I've no idea what else to do.", "I'm slowly getting somewhere."], answer: 1 },
          { q: "Nadia's been working nights recently.", options: ["She hated it, though.", "It's just for a couple of weeks."], answer: 1, explain: "Continuous → temporary." },
          { q: "Nadia's worked nights.", options: ["She hated it, though.", "It's just for a couple of weeks."], answer: 0, explain: "Simple → a past experience." },
          { q: "Attitudes to working from home have changed.", options: ["Having said that, the change is slow.", "They're not what they used to be."], answer: 1 },
          { q: "Attitudes to working from home are changing.", options: ["Having said that, the change is slow.", "They're not what they used to be."], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with the most appropriate continuous form of the verb",
        src: "WB 4",
        items: [
          {
            q: "A: This park ___ increasingly popular. B: Yes, especially since they opened the new café.",
            hint: "become",
            answers: [
              ["is becoming", "'s becoming", "has been becoming", "'s been becoming"]
            ]
          },
          {
            q: "There's a van outside the flat next door. Someone seems ___ in.",
            hint: "move",
            answers: [
              ["to be moving"]
            ]
          },
          {
            q: "Have you called your mum? She ___ to reach you all afternoon.",
            hint: "try",
            answers: [
              ["has been trying", "'s been trying"]
            ]
          },
          {
            q: "We ___ a brilliant documentary series. You'd love it.",
            hint: "watch",
            answers: [
              ["have been watching", "'ve been watching", "are watching", "'re watching"]
            ]
          },
          {
            q: "___ Taras tonight? Can you give him this book?",
            hint: "you / see",
            answers: [
              ["Will you be seeing", "Are you seeing"]
            ]
          },
          {
            q: "Apparently, some employees ___ free language lessons.",
            hint: "offer (passive)",
            answers: [
              ["are being offered", "'re being offered"]
            ]
          },
          {
            q: "The ceiling's wet. The pipe must ___ for hours.",
            hint: "leak",
            answers: [
              ["have been leaking"]
            ]
          },
          {
            q: "I ___ vegetables all morning. I'll finish the rest tomorrow.",
            hint: "plant",
            answers: [
              ["have been planting", "'ve been planting"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Focus on the action",
        p: "Use continuous forms to focus on the action rather than the result, when the activity is:",
        list: [
          "temporary: I've been living with my parents while I look for my own place.",
          "limited (part of the activity, not the whole): I'm working on my presentation at the moment.",
          "repeated or changing: I've been cycling to work every day recently.",
          "a trend: Many urban areas are becoming more gentrified."
        ]
      },
      {
        h: "Senses and remember",
        p: "With see, hear, feel, understand, remember the continuous form shows the action was ongoing or repeated.",
        ex: [
          "I heard someone shouting in the street. (repeated, ongoing)",
          "I heard someone shout in the street. (once)"
        ]
      },
      {
        h: "Stative verbs",
        p: "Verbs with a stative meaning don't normally take the continuous. Some verbs change meaning.",
        ex: [
          "I believed it was possible. (NOT was believing)",
          "I don't feel well. / I'm not feeling well. (no difference)",
          "I think it's a great idea. (= believe) / I'm thinking about dinner. (= actively thinking)"
        ]
      },
      {
        h: "Phrases",
        table: [
          ["a downward trend", "things are getting worse / falling"],
          ["reach a tipping point", "the moment after which a big change happens"],
          ["reverse the trend", "make a trend go in the opposite direction"],
          ["this trend looks set to continue", "it will probably carry on"],
          ["pass a milestone", "reach an important stage"],
          ["mark the start of a new era", "begin a completely new period"],
          ["be on the up", "be improving / increasing"],
          ["revert to", "go back to a previous (often worse) state"],
          ["set the trend for", "be the first, so others copy"],
          ["look promising", "seem likely to be good"]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        items: [
          { q: "Maddie ___ from home this week.", options: ["works", "is working"], answer: 1, explain: "Temporary situation." },
          { q: "They're late. They ___ the bus.", options: ["must have missed", "have been missing"], answer: 0, explain: "Missing a bus is a single complete event." },
          { q: "Can you see Graham ___ from the top of the building?", options: ["wave", "waving"], answer: 1, explain: "Ongoing action seen in progress." },
          { q: "I've ___ over a hundred emails today.", options: ["sent", "been sending"], answer: 0, explain: "A number (a hundred) → result → simple." },
          { q: "I won't be in today, I've ___ the flu.", options: ["got", "been getting"], answer: 0, explain: "A state / result." },
          { q: "The situation ___ better for them.", options: ["definitely gets", "is definitely getting"], answer: 1, explain: "A changing situation / trend." },
          { q: "How long ___ Clara?", options: ["have you known", "have you been knowing"], answer: 0, explain: "know is stative." },
          { q: "I heard my neighbours ___ for hours last night.", options: ["argue", "arguing"], answer: 1, explain: "For hours → ongoing, repeated." },
          { q: "I've ___ a lot about you lately.", options: ["thought", "been thinking"], answer: 1, explain: "think = actively thinking (dynamic), repeated lately." }
        ],
        src: "Revision"
      },
      {
        type: "errors",
        title: "Correct or not? Five sentences have mistakes",
        items: [
          { s: "Eco-friendly travel is generally becoming more and more popular in my country.", ok: true },
          { s: "What will you do this time next week?", ok: false, fix: "What will you be doing this time next week?" },
          { s: "We've lived with my in-laws while our house is being decorated.", ok: false, fix: "We've been living with my in-laws while our house is being decorated. (temporary)" },
          { s: "The organisation is believing in its staff.", ok: false, fix: "The organisation believes in its staff. (stative)" },
          { s: "I'd lie on the beach if I wasn't in class at the moment.", ok: false, fix: "I'd be lying on the beach if I wasn't in class at the moment." },
          { s: "I haven't been doing much work lately.", ok: true },
          { s: "They'd talked about Chris when he suddenly walked in the room.", ok: false, fix: "They'd been talking about Chris when he suddenly walked in the room." }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Which phrase fits?",
        items: [
          { q: "A company's sales have been falling for months, but now they start increasing again.", options: ["reverse the trend", "revert to", "a downward trend"], answer: 0 },
          { q: "A new technology becomes extremely popular and changes everything in society.", options: ["look promising", "mark the start of a new era", "pass a milestone"], answer: 1 },
          { q: "A situation keeps improving slowly and there is no sign of stopping.", options: ["this trend looks set to continue", "revert to", "reach a tipping point"], answer: 0 },
          { q: "Things reach a critical level, after which they start changing quickly.", options: ["reach a tipping point", "set the trend for", "be on the up"], answer: 0 },
          { q: "Fashion in a city is changing, and other cities start copying it.", options: ["revert to", "set the trend for", "a downward trend"], answer: 1 },
          { q: "A company returns to its previous bad performance after improvement.", options: ["reverse the trend", "revert to", "be on the up"], answer: 1 },
          { q: "A market is continuously growing.", options: ["be on the up", "a downward trend", "revert to"], answer: 0 },
          { q: "The website reached one million users.", options: ["pass a milestone", "revert to", "a downward trend"], answer: 0 },
          { q: "Early results of the new project are good.", options: ["look promising", "reach a tipping point", "revert to"], answer: 0 }
        ],
        src: "Revision"
      },
      {
        type: "match",
        title: "Match phrase and meaning",
        items: [
          { a: "a downward trend", b: "a steady fall" },
          { a: "reach a tipping point", b: "the moment a big change starts" },
          { a: "pass a milestone", b: "reach an important stage" },
          { a: "be on the up", b: "be improving" },
          { a: "revert to", b: "go back to how it was" },
          { a: "set the trend for", b: "be copied by others" },
          { a: "look promising", b: "seem likely to succeed" }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "Check 7",
        items: [
          { q: "The growth in home working looks ___ to continue.", options: ["set", "promising"], answer: 0 },
          { q: "There has been a ___ trend in the number of people buying newspapers.", options: ["reverse the", "downward"], answer: 1 },
          { q: "Losing the forests could be a tipping ___ for the region's climate.", options: ["milestone", "point"], answer: 1 },
          { q: "The new owners hope to ___ the decline of the club.", options: ["reverse", "rise"], answer: 0 },
          { q: "Interest in board games is definitely ___ the up.", options: ["at", "on"], answer: 1 },
          { q: "Some restaurants are ___ to simpler, traditional menus.", options: ["reverting", "marking"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with the correct continuous form of the verb",
        src: "Check 8a",
        items: [
          {
            q: "Second-hand clothes ___ more and more popular in my country.",
            hint: "become",
            answers: [
              ["are becoming", "'re becoming", "have been becoming", "'ve been becoming"]
            ]
          },
          {
            q: "In fifteen years' time, most people ___ with robots.",
            hint: "work",
            answers: [
              ["will be working", "'ll be working"]
            ]
          },
          {
            q: "This time next month I ___ to play the piano for a whole year.",
            hint: "learn",
            answers: [
              ["will have been learning", "'ll have been learning"]
            ]
          },
          {
            q: "I ___ enough sleep lately.",
            hint: "not get",
            answers: [
              ["haven't been getting", "have not been getting"]
            ]
          },
          {
            q: "The housing market seems ___ slower at the moment.",
            hint: "get",
            answers: [
              ["to be getting"]
            ]
          },
          {
            q: "I ___ with my grandparents for now, until my new flat is ready.",
            hint: "live",
            answers: [
              ["am living", "'m living"]
            ]
          }
        ]
      }
    ]
  }
});
