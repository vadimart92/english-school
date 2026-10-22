/*
 * 9C Rewilding
 */
ES.registerLesson({
  id: "9C",
  unit: 9,
  letter: "C",
  title: "Rewilding",
  uk: "Ревайлдинг: дієприкметникові та безсполучникові (verbless) звороти, лексика покращення й погіршення",
  goal: "discuss a course of action",
  focus: { grammar: "participle clauses and verbless clauses", vocab: "improvement and deterioration", pron: "rise-fall intonation" },
  learn: {
    theory: [
      {
        h: "Participle clauses",
        p: "A participle clause replaces a full clause (subject + tense) with -ing or a past participle. It works only when the listener can easily recover the missing subject and tense, so it is typical of careful or formal writing. The subject of the participle must normally be the same as the subject of the main clause.",
        table: [
          ["Cause", "Not knowing the way, we asked a farmer. (= because we didn't know)"],
          ["Time", "Walking through the forest, I spotted a lynx. (= while I was walking)"],
          ["Condition", "Managed properly, a meadow needs little care. (= if it is managed properly)"],
          ["Reduced relative clause", "Planted in 2015, these oaks are already tall. (= which were planted)"]
        ]
      },
      {
        h: "Active, passive, earlier",
        list: [
          "Present participle (-ing) = active meaning: Hoping to help, she volunteered.",
          "Past participle = passive meaning: Reintroduced ten years ago, beavers are now thriving.",
          "Perfect participle (having done / having been doing) = an earlier action, often a reason: Having spent all day planting trees, we were exhausted.",
          "Negative: put not or never before the participle: Never having seen a bison, I was amazed. / Not wanting to seem rude, I agreed."
        ]
      },
      {
        h: "After linking words; verbless clauses",
        p: "Participles often follow conjunctions and prepositions (while, when, before, after, since, unless, if, instead of, despite). Verbless clauses drop the subject and 'be' completely.",
        ex: [
          "Instead of complaining, help us plant some trees.",
          "Unless told otherwise, stay on the path. (= unless you are told)",
          "I'm not keen on them building houses here. (subject before -ing)",
          "If possible, bring your own gloves. (= if it is possible)",
          "While in Patagonia, we saw condors. (= while we were in Patagonia)"
        ]
      },
      {
        h: "Fixed expressions",
        table: [
          ["all being well", "якщо все буде добре"],
          ["all things considered", "зважаючи на все"],
          ["bearing in mind (that)…", "беручи до уваги, що…"],
          ["given the chance", "якби була можливість"],
          ["judging by…", "судячи з…"],
          ["speaking of…", "до речі, говорячи про…"],
          ["that said / having said that", "проте, разом з тим"],
          ["considering…", "враховуючи…"]
        ]
      },
      {
        h: "Improvement and deterioration",
        table: [
          [
            "make better",
            "enhance (якість), beautify (вигляд), rectify (виправити помилку), alleviate (полегшити біль, проблему), facilitate (полегшити процес)"
          ],
          [
            "make worse",
            "aggravate / exacerbate / compound (посилити наявну проблему), impair (послабити здатність), undermine (підірвати), complicate (ускладнити)"
          ],
          ["slow down / stop", "hamper / hinder (заважати, гальмувати)"],
          ["get worse (no object)", "deteriorate (погіршуватися)"]
        ]
      },
      {
        h: "Більше практики",
        p: "Додаткове пояснення і тести на дієприкметникові звороти (present, past, perfect).",
        links: [
          {
            title: "British Council: Participle clauses",
            url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses",
            note: "having done, done, doing; звороти після сполучників і прийменників + два тести"
          }
        ]
      }
    ],
    exercises: [
      {
        type: "transform",
        title: "Rewrite the sentences using participle or verbless clauses. Start with the words in brackets",
        src: "SB 6",
        items: [
          {
            q: "The hikers walked across the field because they didn't know it had been sown with wildflowers. (Not…)",
            start: "Not…",
            models: ["Not knowing that the field had been sown with wildflowers, the hikers walked across it."]
          },
          { q: "These trees, which were planted ten years ago, have turned the old quarry into a forest. (Planted…)", start: "Planted…", models: ["Planted ten years ago, these trees have turned the old quarry into a forest."] },
          { q: "Ask a ranger if you're in any doubt. (If…)", start: "If…", models: ["If in doubt, ask a ranger."] },
          { q: "I didn't know what to expect because I'd never been on a safari before. (Never…)", start: "Never…", models: ["Never having been on a safari before, I didn't know what to expect."] },
          { q: "These frogs aren't exactly endangered, although they are quite rare. (Although…)", start: "Although…", models: ["Although quite rare, these frogs aren't exactly endangered."] },
          { q: "I bought some honey at the market because I didn't want to disturb the wild bees. (Not…)", start: "Not…", models: ["Not wanting to disturb the wild bees, I bought some honey at the market."] },
          { q: "We were exhausted because we had spent the whole day clearing the river. (Having…)", start: "Having…", models: ["Having spent the whole day clearing the river, we were exhausted."] }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct participle",
        src: "SB 4",
        items: [
          { q: "___ in the 1990s, wolves are now common in the park.", options: ["Reintroducing", "Reintroduced", "Having reintroduced"], answer: 1, explain: "The wolves were reintroduced → passive." },
          { q: "___ the report, she called an urgent meeting.", options: ["Having read", "Read", "Been reading"], answer: 0, explain: "Earlier action → perfect participle." },
          { q: "___ by the noise, the birds flew away.", options: ["Frightening", "Frightened", "Having frightened"], answer: 1 },
          { q: "___ to look foolish, he said nothing.", options: ["Not wanting", "Wanting not", "Not wanted"], answer: 0 },
          { q: "___ properly, a wildflower verge needs cutting only once a year.", options: ["Managing", "Managed", "Having managed"], answer: 1, explain: "If it is managed → passive condition." },
          { q: "While ___ the hills, we saw a herd of wild horses.", options: ["exploring", "explored", "having been explored"], answer: 0 },
          { q: "Unless ___ to leave, please stay inside the hide.", options: ["telling", "told", "having told"], answer: 1 },
          { q: "___ all morning, the volunteers were soaked.", options: ["Having been working in the rain", "Worked in the rain", "Being worked in the rain"], answer: 0 }
        ]
      },
      {
        type: "cards",
        title: "Improvement and deterioration",
        src: "SB 9a",
        items: [
          { front: "aggravate", back: "погіршити, загострити (проблему, хворобу)", ex: "Scratching will only aggravate the rash." },
          { front: "alleviate", back: "полегшити, пом'якшити (біль, проблему)", ex: "New bus lanes should alleviate congestion." },
          { front: "beautify", back: "прикрасити, зробити красивішим", ex: "The council plans to beautify the riverbank." },
          { front: "compound", back: "посилити, ускладнити (вже наявну проблему)", ex: "The drought was compounded by a heatwave." },
          { front: "deteriorate", back: "погіршуватися", ex: "The path has deteriorated badly over the winter." },
          { front: "enhance", back: "покращити, підсилити (якість, цінність)", ex: "Native plants enhance the value of the park." },
          { front: "exacerbate", back: "загострити, погіршити", ex: "Cutting down trees will exacerbate the flooding." },
          { front: "facilitate", back: "сприяти, полегшувати (процес)", ex: "Green corridors facilitate the movement of animals." },
          { front: "hamper / hinder", back: "заважати, гальмувати", ex: "Bad weather hampered the rescue." },
          { front: "impair", back: "погіршити, послабити (функцію, здатність)", ex: "Light pollution impairs birds' ability to navigate." },
          { front: "rectify", back: "виправити (помилку, ситуацію)", ex: "We need to rectify the damage as soon as possible." },
          { front: "undermine", back: "підривати, послаблювати (зусилля, авторитет)", ex: "Littering undermines all our hard work." }
        ]
      },
      {
        type: "gap",
        title: "Complete with: aggravating, alleviating, beautify, compounded, deteriorate, enhanced, exacerbate, facilitates, hampered, impair, rectify, undermines",
        src: "SB 9a",
        intro: "Extracts from a town council meeting about a rewilding plan. Several verbs are close synonyms – any correct form of a suitable verb is accepted.",
        items: [
          {
            q: "We've spent years trying to ___ our parks, so I don't want to do anything that ___ all that good work.",
            answers: [
              ["beautify"],
              ["undermines"]
            ]
          },
          {
            q: "Without regular care, the playground equipment will ___ really quickly.",
            answers: [
              ["deteriorate"]
            ]
          },
          {
            q: "Wherever it's been tried, wild planting has actually ___ the appearance of the area.",
            answers: [
              ["enhanced"]
            ]
          },
          {
            q: "We already have budget problems, which we're working hard to ___.",
            answers: [
              ["rectify", "alleviate"]
            ]
          },
          {
            q: "I don't want to ___ those problems by trying expensive experiments.",
            answers: [
              ["exacerbate", "aggravate", "compound"]
            ]
          },
          {
            q: "On narrow paths, tall nettles can seriously ___ cyclists' ability to see.",
            answers: [
              ["impair", "hinder"]
            ]
          },
          {
            q: "Short grass really ___ the process of collecting litter.",
            answers: [
              ["facilitates"]
            ]
          },
          {
            q: "The flooding problem would be ___ by blocked drains.",
            answers: [
              ["compounded", "aggravated", "exacerbated"]
            ]
          },
          {
            q: "Last year, repair work was ___ by heavy rain.",
            answers: [
              ["hampered", "hindered"]
            ]
          },
          {
            q: "We'll need to show the committee that we're ___ problems, not ___ them.",
            answers: [
              ["alleviating"],
              ["aggravating"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Does the verb make things better or worse?",
        src: "SB 9b",
        categories: ["Better", "Worse / slower"],
        items: [
          { text: "alleviate", cat: 0 },
          { text: "beautify", cat: 0 },
          { text: "enhance", cat: 0 },
          { text: "facilitate", cat: 0 },
          { text: "rectify", cat: 0 },
          { text: "aggravate", cat: 1 },
          { text: "compound", cat: 1 },
          { text: "deteriorate", cat: 1 },
          { text: "exacerbate", cat: 1 },
          { text: "hamper", cat: 1 },
          { text: "hinder", cat: 1 },
          { text: "impair", cat: 1 },
          { text: "undermine", cat: 1 }
        ]
      },
      {
        type: "speak",
        title: "Discuss a course of action: a rewilding project",
        src: "SB 7, 10–11",
        intro: "Your town is considering rewilding a piece of land (an old car park, a riverbank, a golf course). Give your opinion, raise objections and reach a compromise. Use participle clauses and the improvement/deterioration verbs.",
        phrases: [
          "Being a…, I…",
          "Having read about…, I…",
          "Never having…, it's hard for me to…",
          "All things considered,…",
          "Bearing in mind that…",
          "enhance",
          "alleviate",
          "exacerbate",
          "undermine"
        ],
        items: [
          { q: "How do you feel about rewilding? Start with 'Being…'.", models: ["Being a keen gardener, I'm quite keen on the idea – wild meadows would really enhance the area."] },
          {
            q: "Has your opinion changed? Use 'Having read/thought about it…'.",
            models: [
              "I never used to think it mattered, but now, having read about the decline of bees, I'm convinced we should do it."
            ]
          },
          {
            q: "Raise an objection.",
            models: [
              "Bearing in mind that the area already floods, letting the river run wild could exacerbate the problem and undermine the new housing project."
            ]
          },
          {
            q: "Propose a compromise.",
            models: [
              "All things considered, why don't we rewild half of the site? If successful, the scheme could be extended next year."
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
        title: "Choose the correct option",
        src: "WB 1",
        items: [
          { q: "I don't agree. ___, some of your arguments are convincing.", options: ["Instead of that", "Having said that", "While saying that"], answer: 1 },
          { q: "No parking ___ a permit.", options: ["unless given", "while giving", "not given"], answer: 0 },
          { q: "___ to my sister about the problem, I feel much calmer now.", options: ["Talked", "Having talked", "Talking"], answer: 1 },
          { q: "___ even my grandma's, the cake was amazing.", options: ["Better than", "Although", "Instead of"], answer: 0 },
          { q: "___ in your application, we'll contact you next week.", options: ["If in doubt", "If anything", "If successful"], answer: 2 },
          { q: "___ to hurt her feelings, I said I loved the present.", options: ["Having wanted", "Not wanting", "Unless"], answer: 1 },
          { q: "___ about the instructions, I asked the teacher to explain again.", options: ["Not confusing", "Confused", "Having confused"], answer: 1 },
          { q: "___ very old, the car still runs perfectly.", options: ["Being", "Having been", "Although"], answer: 2 }
        ]
      },
      {
        type: "gap",
        title: "Complete the email with: considering, given the chance, having parked, if possible, speaking of, that said",
        src: "WB 2",
        items: [
          {
            q: "___ behind the office this morning, I realised we need to do something with that empty plot.",
            answers: [
              ["having parked"]
            ]
          },
          {
            q: "It's full of weeds at the moment, but ___, we could turn it into a garden for staff.",
            answers: [
              ["given the chance"]
            ]
          },
          {
            q: "___, it could also be left to rewild, ___ how built-up the area is.",
            answers: [
              ["that said"],
              ["considering"]
            ]
          },
          {
            q: "___ new ideas, have you thought any more about the parking problem?",
            answers: [
              ["speaking of"]
            ]
          },
          {
            q: "___, we should meet to discuss it later today.",
            answers: [
              ["if possible"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with the correct form of the verbs in brackets",
        src: "WB 3",
        items: [
          {
            q: "All ___ well, I'll see you on Saturday.",
            hint: "be",
            answers: [
              ["being"]
            ]
          },
          {
            q: "___ all day on a building site, I was exhausted.",
            hint: "spend",
            answers: [
              ["having spent"]
            ]
          },
          {
            q: "Unless ___ otherwise, follow the instructions on the screen.",
            hint: "tell",
            answers: [
              ["told"]
            ]
          },
          {
            q: "Not ___ anyone at the party, I stood in the corner all evening.",
            hint: "know",
            answers: [
              ["knowing"]
            ]
          },
          {
            q: "While ___ the bins out, I noticed a fox in the garden.",
            hint: "take",
            answers: [
              ["taking"]
            ]
          },
          {
            q: "___ with excitement, she opened the envelope.",
            hint: "fill",
            answers: [
              ["filled"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "WB 4",
        items: [
          { q: "I sent the wrong invoice, but managed to ___ it quickly.", options: ["alleviate", "rectify"], answer: 1 },
          { q: "Pollen seems to ___ my hay fever.", options: ["exacerbate", "hinder"], answer: 0 },
          { q: "The roadworks have been ___ by the snow.", options: ["deteriorated", "hampered"], answer: 1 },
          { q: "His constant jokes ___ my authority in the classroom.", options: ["aggravate", "undermine"], answer: 1 },
          { q: "Good lighting really ___ the quality of the photos.", options: ["enhances", "facilitates"], answer: 0 },
          { q: "They spent a fortune trying to ___ an ugly concrete building.", options: ["beautify", "compound"], answer: 0 },
          { q: "Why do you always ___ such simple tasks?", options: ["complicate", "impair"], answer: 0 },
          { q: "This cream should ___ the itching.", options: ["alleviate", "compound"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with: aggravate, alleviate, complicate, compounded, deteriorating, facilitate, hindered, impairs",
        src: "WB 5",
        items: [
          {
            q: "My hearing seems to be ___ – maybe it's the loud music.",
            answers: [
              ["deteriorating"]
            ]
          },
          {
            q: "Too much coffee really ___ my ability to sleep.",
            answers: [
              ["impairs"]
            ]
          },
          {
            q: "Our money problems were ___ by a lack of planning.",
            answers: [
              ["compounded"]
            ]
          },
          {
            q: "Wool seems to ___ my eczema.",
            answers: [
              ["aggravate"]
            ]
          },
          {
            q: "A broken wrist has ___ my progress on the piano.",
            answers: [
              ["hindered"]
            ]
          },
          {
            q: "Stay out of their argument. You'll just ___ things.",
            answers: [
              ["complicate"]
            ]
          },
          {
            q: "There are some great tools that ___ remote teamwork.",
            answers: [
              ["facilitate"]
            ]
          },
          {
            q: "We must do something to ___ young people's worries about the future.",
            answers: [
              ["alleviate"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Check your participle clause",
        list: [
          "Same subject? Walking home, I saw a deer. ✔  Walking home, a deer appeared. ✘ (the deer wasn't walking home)",
          "Active or passive? Built in 1900, the bridge… (the bridge was built) / Building the bridge, they… (they built it)",
          "Earlier? Use having + past participle: Having finished, we left.",
          "In conversation, prefer full clauses – except fixed phrases like all things considered, that said, judging by."
        ]
      },
      {
        h: "Landscape adjectives",
        table: [
          ["parched", "extremely dry, damaged by heat"],
          ["arid", "very dry, with little rain (climate, region)"],
          ["overgrown", "covered in too many wild plants"],
          ["bleak", "cold, empty and depressing"],
          ["forested", "covered in trees"],
          ["undulating", "gently rising and falling"],
          ["picturesque", "pretty, like a picture"],
          ["sheer", "extremely steep, almost vertical"],
          ["windswept", "exposed to strong winds"],
          ["barren", "with no plants or wildlife"],
          ["craggy", "rough, covered in large rocks"]
        ]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with: all being well, all things considered, bearing in mind, given the chance, judging by, that said",
        src: "LB 9C",
        items: [
          {
            q: "The film was far too long. ___, the soundtrack was brilliant.",
            answers: [
              ["that said", "having said that"]
            ]
          },
          {
            q: "I didn't see the final, but ___ his smile, I'd say we won.",
            answers: [
              ["judging by"]
            ]
          },
          {
            q: "The builders are ahead of schedule so, ___, we'll move in next month.",
            answers: [
              ["all being well"]
            ]
          },
          {
            q: "___ that you've only been learning for a year, your Spanish is impressive.",
            answers: [
              ["bearing in mind"]
            ]
          },
          {
            q: "I'll never be a professional dancer, but ___ I think I'd be quite good.",
            answers: [
              ["given the chance"]
            ]
          },
          {
            q: "There were a few problems, but ___, it was a successful trip.",
            answers: [
              ["all things considered"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the second sentence with two words so it means the same as the first",
        src: "LB 9C",
        items: [
          {
            q: "Food may not be eaten while you are in the museum. → You may not eat food ___ the museum.",
            answers: [
              ["while in", "when in"]
            ]
          },
          {
            q: "I didn't say hello to Ira because I felt guilty about forgetting her birthday. → ___ about forgetting her birthday, I didn't say hello to Ira.",
            answers: [
              ["feeling guilty"]
            ]
          },
          {
            q: "I'd spent all my savings on the course, so I couldn't afford a holiday. → ___ all my savings on the course, I couldn't afford a holiday.",
            answers: [
              ["having spent"]
            ]
          },
          {
            q: "We had to call the landlord because nobody had a spare key. → ___ a spare key, we had to call the landlord.",
            answers: [
              ["nobody having", "not having"]
            ]
          },
          {
            q: "The novel, which was first published in 1925, was ignored for decades. → ___ in 1925, the novel was ignored for decades.",
            answers: [
              ["first published"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the landscape adjectives with the definitions",
        src: "VB 9C",
        items: [
          { a: "parched", b: "damaged as a result of extreme heat and dryness" },
          { a: "overgrown", b: "covered in (too many) wild plants" },
          { a: "bleak", b: "cold and unattractive, with no interesting features" },
          { a: "forested", b: "covered in trees" },
          { a: "undulating", b: "gently rising and falling; neither flat nor mountainous" },
          { a: "picturesque", b: "beautiful" },
          { a: "sheer", b: "extremely steep" },
          { a: "windswept", b: "with only plants that can survive strong winds" },
          { a: "barren", b: "empty of vegetation or wildlife" },
          { a: "craggy", b: "uneven and covered in large rocks" }
        ]
      },
      {
        type: "gap",
        title: "Complete with a landscape adjective",
        src: "VB 9C",
        items: [
          {
            q: "After two months without rain, the lawn was completely ___.",
            answers: [
              ["parched"]
            ]
          },
          {
            q: "Nobody had looked after the garden for years, so it was totally ___.",
            answers: [
              ["overgrown"]
            ]
          },
          {
            q: "The climbers stared up at the ___ cliff face.",
            answers: [
              ["sheer"]
            ]
          },
          {
            q: "The Sahara is one of the most ___ regions on Earth.",
            answers: [
              ["arid"]
            ]
          },
          {
            q: "What a ___ village – it looks like a postcard!",
            answers: [
              ["picturesque"]
            ]
          },
          {
            q: "Nothing grows on the ___ slopes of the old mine.",
            answers: [
              ["barren"]
            ]
          },
          {
            q: "We cycled through the gently ___ hills of Tuscany.",
            answers: [
              ["undulating"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with the correct form of: alleviate, deteriorate, enhance, impair, rectify, undermine",
        src: "Check 10",
        items: [
          {
            q: "I'm worried that my memory is ___ – or maybe I'm just busier.",
            answers: [
              ["deteriorating"]
            ]
          },
          {
            q: "When I make a mistake at work, I try to ___ it immediately.",
            answers: [
              ["rectify"]
            ]
          },
          {
            q: "One careless comment can ___ months of trust-building.",
            answers: [
              ["undermine"]
            ]
          },
          {
            q: "A good reputation isn't enough – you need to keep working to ___ it.",
            answers: [
              ["enhance"]
            ]
          },
          {
            q: "Lack of sleep can ___ your ability to concentrate.",
            answers: [
              ["impair", "hinder"]
            ]
          },
          {
            q: "Yoga is a great way of ___ stress.",
            answers: [
              ["alleviating"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order",
        src: "Check 10",
        items: [
          {
            words: [
              "Held",
              "every",
              "four",
              "years,",
              "the",
              "Olympics",
              "is",
              "the",
              "world's",
              "biggest",
              "sporting",
              "event"
            ],
            answer: "Held every four years, the Olympics is the world's biggest sporting event."
          },
          { words: ["Not", "having", "eaten", "for", "hours,", "I", "was", "absolutely", "starving"], answer: "Not having eaten for hours, I was absolutely starving." },
          { words: ["Please", "don't", "call", "me", "after", "ten", "unless", "absolutely", "necessary"], answer: "Please don't call me after ten unless absolutely necessary." },
          { words: ["All", "being", "well,", "we", "should", "arrive", "before", "it", "gets", "dark"], answer: "All being well, we should arrive before it gets dark." },
          { words: ["Having", "won", "the", "lottery,", "they", "bought", "a", "farm", "and", "rewilded", "it"], answer: "Having won the lottery, they bought a farm and rewilded it." }
        ]
      },
      {
        type: "errors",
        title: "Are the participle clauses correct?",
        src: "Revision",
        items: [
          { s: "Walking along the beach, a seal appeared in front of us.", ok: false, fix: "Walking along the beach, we saw a seal appear in front of us." },
          { s: "Having finished the report, she went home.", ok: true },
          { s: "Building in the 18th century, the house needs a lot of repairs.", ok: false, fix: "Built in the 18th century, the house needs a lot of repairs." },
          { s: "Not knowing the answer, I kept quiet.", ok: true },
          { s: "Knowing not what to say, he left the room.", ok: false, fix: "Not knowing what to say, he left the room." },
          { s: "If necessary, we can postpone the meeting.", ok: true },
          { s: "Having been worked all night, the nurses were exhausted.", ok: false, fix: "Having been working all night, the nurses were exhausted." },
          { s: "Pollution is likely to exacerbate the problem.", ok: true }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct participle or verbless clause",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses",
        items: [
          { q: "___ the report, she sent it straight to her manager.", options: ["Having finished", "Finished", "Being finished"], answer: 0 },
          { q: "___ in 1890, the bridge is still in use today.", options: ["Built", "Having built", "Building"], answer: 0, explain: "Пасивне значення — past participle." },
          { q: "___ for six hours, the hikers were desperate for a rest.", options: ["Having walked", "Walked", "Being walked"], answer: 0 },
          { q: "Walking into the abandoned barn, ___.", options: ["I noticed a strange smell", "a strange smell hit me"], answer: 0, explain: "Підмет зворота має збігатися з підметом речення (інакше — dangling participle)." },
          { q: "Once ___, the dough should rest for an hour.", options: ["kneaded", "kneading", "having kneaded"], answer: 0, explain: "Тісто місять (пасив) — once + past participle." },
          { q: "___ of the risks, they went ahead with the climb.", options: ["Although aware", "Despite aware", "Although being aware"], answer: 0, explain: "Verbless clause: although + adjective." },
          { q: "Not ___ what to say, he simply nodded.", options: ["knowing", "known", "having known"], answer: 0 },
          { q: "The money ___ from the auction will go to a wildlife charity.", options: ["raised", "raising", "having raised"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Rewrite using a participle or verbless clause",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses",
        items: [
          { q: "After she had read the contract carefully, she signed it.", start: "Having…", models: ["Having read the contract carefully, she signed it."] },
          { q: "The forest was destroyed by fire in 2010 and has now fully recovered.", start: "Destroyed…", models: ["Destroyed by fire in 2010, the forest has now fully recovered."] },
          { q: "Because he didn't want to wake the baby, he tiptoed out of the room.", start: "Not…", models: ["Not wanting to wake the baby, he tiptoed out of the room."] },
          { q: "When you are in doubt, ask a ranger.", start: "When…", models: ["When in doubt, ask a ranger."] },
          { q: "If it is reintroduced carefully, the lynx could control the deer population.", start: "If…", models: ["If reintroduced carefully, the lynx could control the deer population."] },
          { q: "Wolves, which were once hunted to extinction here, now roam freely.", start: "Once…", models: ["Once hunted to extinction here, wolves now roam freely."] },
          { q: "As soon as the work is finished, the wetland will be opened to the public.", start: "Once…", models: ["Once finished, the wetland will be opened to the public."] }
        ]
      }
    ]
  }
});
