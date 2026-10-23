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
  learn: {
    theory: [
      {
        h: "Cleft sentences",
        p: "Розщеплені речення ділять одну думку на дві частини, щоб пов'язати відоме з новим і наголосити на важливому. Два головні типи: It-cleft та What-cleft.",
        table: [
          [
            "It + be + НОВЕ + who/that + відоме",
            "A: The whole town is complaining about the noise. B: Yes, but it's the people near the station who suffer most."
          ],
          [
            "What + відоме + be + НОВЕ",
            "What I'm saying is that we need a plan. · What worries me is the cost."
          ],
          ["All + відоме + be + НОВЕ (одна річ понад усе)", "All we want is a safe crossing."]
        ]
      },
      {
        h: "Details",
        list: [
          "It-cleft може виділяти людину, річ, місце, час чи причину: It was in 2019 that the park opened. · It was because of the rain that we stayed in.",
          "Можна заперечення: It wasn't the mayor who made that decision.",
          "Замість основного дієслова — did + інфінітив (з to або без): What they did was (to) close the road.",
          "Якщо дієслово вимагає герундія, після be теж герундій: What I hate is waiting.",
          "Після What-clause може бути й іменник: What we need is more bins.",
          "Вимова: that у таких реченнях ненаголошене — /ðət/: What I'm saying is /ðət/ it's not easy."
        ]
      },
      {
        h: "Connotation 2",
        p: "Ті самі речі можна описати нейтрально/позитивно або критично. Вибір слова показує ставлення мовця.",
        table: [
          ["more positive / neutral", "more negative"],
          ["issues, challenging", "problems, difficult"],
          ["vintage", "archaic"],
          ["relaxed", "chaotic"],
          ["economical, affordable", "penny-pinching, cheap"],
          ["employ", "exploit"],
          ["lively", "rowdy"],
          ["charming", "run-down"],
          ["group", "mob"],
          ["firm", "harsh"]
        ]
      },
      {
        h: "Більше практики",
        p: "Пояснення й тест про способи наголосу: it-cleft, what-cleft, інверсію та емфатичне do.",
        links: [
          {
            title: "British Council LearnEnglish: Emphasis — cleft sentences, inversion and auxiliaries",
            url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries",
            note: "it-cleft, what-cleft, all I did was, емфатичне do — пояснення і тест"
          }
        ]
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the negative words with more positive words",
        src: "SB 2b",
        items: [
          { a: "problems", b: "issues" },
          { a: "archaic", b: "vintage" },
          { a: "chaotic", b: "relaxed" },
          { a: "difficult", b: "challenging" },
          { a: "penny-pinching", b: "economical" }
        ]
      },
      {
        type: "choice",
        title: "Which sentence has a more positive connotation?",
        src: "SB 3",
        items: [
          { q: "Which is more positive?", options: ["The factory exploits young workers.", "The factory employs young workers."], answer: 1 },
          { q: "Which is more positive?", options: ["The bars get very lively at weekends.", "The bars get very rowdy at weekends."], answer: 0 },
          { q: "Which is more positive?", options: ["It's a charming old district.", "It's a run-down old district."], answer: 0 },
          { q: "Which is more positive?", options: ["A mob gathered outside the stadium.", "A group gathered outside the stadium."], answer: 1 },
          { q: "Which is more positive?", options: ["The new flats are cheap.", "The new flats are affordable."], answer: 1 },
          { q: "Which is more positive?", options: ["The school has firm rules about phones.", "The school has harsh rules about phones."], answer: 0 },
          { q: "Which is more positive?", options: ["Our trams are vintage.", "Our trams are archaic."], answer: 0 },
          { q: "Which is more positive?", options: ["The market is chaotic.", "The market is relaxed."], answer: 1 }
        ]
      },
      {
        type: "cards",
        title: "Connotation 2",
        src: "SB 2-3",
        items: [
          { front: "archaic vs vintage", back: "застарілий (−) vs вінтажний, старий і цінний (+)", ex: "The buses are archaic. / She drives a vintage car." },
          { front: "chaotic vs relaxed", back: "хаотичний (−) vs невимушений (+)", ex: "The festival was chaotic but fun. / The café has a relaxed atmosphere." },
          { front: "penny-pinching vs economical", back: "скупий, жмотський (−) vs економний (+)", ex: "Penny-pinching councils cut services. / This heater is very economical." },
          { front: "exploit vs employ", back: "експлуатувати (−) vs наймати (0)", ex: "Some farms exploit seasonal workers." },
          { front: "rowdy vs lively", back: "галасливий, буйний (−) vs жвавий (+)", ex: "Rowdy fans broke the windows. / It's a lively neighbourhood." },
          { front: "run-down vs charming", back: "занедбаний (−) vs чарівний (+)", ex: "The station area is quite run-down." },
          { front: "mob vs group", back: "натовп, юрба (−) vs група (0)", ex: "An angry mob attacked the car." },
          { front: "harsh vs firm", back: "жорсткий, суворий (−) vs твердий, рішучий (+)", ex: "The punishment seems harsh. / She's firm but fair." },
          { front: "cheap vs affordable", back: "дешевий, низькоякісний (−) vs доступний за ціною (+)", ex: "We need more affordable housing." },
          { front: "problems / difficult vs issues / challenging", back: "проблеми, важкий (−) vs питання, складний-але-цікавий (+)", ex: "Learning a language is challenging." }
        ]
      },
      {
        type: "gap",
        title: "Complete the cleft sentences",
        src: "SB 7a",
        items: [
          {
            q: "We decided to check that the new bike lanes are safe. → What we ___ was to check that the new bike lanes are safe.",
            answers: [
              ["decided"]
            ]
          },
          {
            q: "I'm saying that we must spend money wisely. → ___ I'm saying ___ that we must spend money wisely.",
            answers: [
              ["All", "What"],
              ["is"]
            ]
          },
          {
            q: "The mayor made that promise. → It was the mayor ___ made that promise.",
            answers: [
              ["who", "that"]
            ]
          },
          {
            q: "I can't stand cutting services. → What I can't stand ___ cutting services.",
            answers: [
              ["is"]
            ]
          },
          {
            q: "We need more litter bins. → ___ we need is more litter bins.",
            answers: [
              ["What", "All"]
            ]
          },
          {
            q: "The traffic annoys me most. → It's the traffic ___ annoys me most.",
            answers: [
              ["that", "which"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentences using the prompts",
        src: "SB 9",
        items: [
          { q: "It isn't possible to open the library on Sundays.", start: "What I'm saying…", models: ["What I'm saying is that it isn't possible to open the library on Sundays."] },
          { q: "We talked about parking fees at the last meeting.", start: "It was at the last meeting…", models: ["It was at the last meeting that we talked about parking fees."] },
          { q: "We consulted local residents.", start: "What we did…", models: ["What we did was (to) consult local residents."] },
          { q: "We'd like to plant more trees in Shevchenko Park.", start: "It's in Shevchenko Park…", models: ["It's in Shevchenko Park that we'd like to plant more trees."] },
          { q: "Many families enjoy walking by the river.", start: "What…", models: ["What many families enjoy is walking by the river."] },
          { q: "We don't know how much it will cost.", start: "What…", models: ["What we don't know is how much it will cost."] }
        ]
      },
      {
        type: "speak",
        title: "Complete the prompts to make sentences that are true for you",
        src: "SB 10a",
        phrases: ["What I love most about", "What annoys me most", "It's the lack of"],
        items: [
          { q: "What I love most about …", models: ["What I love most about my neighbourhood is the little bakery on the corner."] },
          { q: "What annoys me most about where I live …", models: ["What annoys me most about where I live is the noise from the motorway."] },
          { q: "It's the lack of …", models: ["It's the lack of green spaces that bothers me most."] }
        ]
      },
      {
        type: "speak",
        title: "Discuss a proposal",
        src: "SB 11-12",
        intro: "You're at a city council meeting. Discuss these proposals, use cleft sentences to emphasise your point and choose words with the right connotation. Try to reach agreement.",
        phrases: [
          "What I'm saying is",
          "What we need is",
          "All we want is",
          "It's the",
          "that",
          "What worries me",
          "issues",
          "challenging",
          "affordable",
          "economical",
          "run-down",
          "lively",
          "rowdy",
          "harsh",
          "firm"
        ],
        items: [
          {
            q: "Proposal: ban cars from the city centre at weekends.",
            models: [
              "What I'm saying is that the centre would become much more lively and relaxed. It's the shop owners who might worry, but we could offer free parking outside the centre."
            ]
          },
          {
            q: "Proposal: close the youth centre to save money.",
            models: [
              "That seems penny-pinching to me. What young people need is somewhere safe to go – otherwise it's the streets that get rowdy."
            ]
          },
          {
            q: "Proposal: collect rubbish every two weeks instead of every week.",
            models: [
              "I understand it's economical, but what worries me is the smell in summer. All we're asking for is weekly collection in July and August."
            ]
          },
          { q: "Proposal: introduce harsh fines for cycling on pavements.", models: ["I'd prefer firm rules rather than harsh fines. What we really need is more bike lanes."] }
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
          { q: "This office is so ___ – nobody knows where anything is.", options: ["chaotic", "relaxed"], answer: 0 },
          { q: "I've found a ___ little cottage we could rent for the summer.", options: ["charming", "run-down"], answer: 0 },
          { q: "An angry ___ surrounded the minister's car.", options: ["group", "mob"], answer: 1 },
          { q: "I hate the way some apps ___ delivery riders.", options: ["employ", "exploit"], answer: 1 },
          { q: "The fans are getting a bit ___. I don't feel safe here.", options: ["lively", "rowdy"], answer: 1 },
          { q: "My grandad restores ___ radios and sells them.", options: ["archaic", "vintage"], answer: 1 },
          { q: "Our coach was ___ but fair.", options: ["firm", "harsh"], answer: 0 },
          { q: "Electric cars are more ___ to run.", options: ["economical", "penny-pinching"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with: affordable, challenge, economical, group, harsh, lively, mobs, penny-pinching, problem, rowdy, run-down",
        src: "WB 2",
        intro: "Comments about local issues.",
        items: [
          {
            q: "Empty shops are making our high street look more ___ than ever.",
            answers: [
              ["run-down"]
            ]
          },
          {
            q: "When will the council make rents more ___ for small businesses?",
            answers: [
              ["affordable"]
            ]
          },
          {
            q: "Closing the library is an obviously ___ move by the council.",
            answers: [
              ["penny-pinching"]
            ]
          },
          {
            q: "The ___ we need to think about now is where students will study.",
            answers: [
              ["problem"]
            ]
          },
          {
            q: "What is the ___ of pensioners who met there every week supposed to do now?",
            answers: [
              ["group"]
            ]
          },
          {
            q: "They can no longer enjoy ___, organised activities.",
            answers: [
              ["lively"]
            ]
          },
          {
            q: "As a neighbour, I was tired of ___ of teenagers outside my window.",
            answers: [
              ["mobs"]
            ]
          },
          {
            q: "They were often really ___ late at night.",
            answers: [
              ["rowdy"]
            ]
          },
          {
            q: "Cutting the night buses may seem ___.",
            answers: [
              ["harsh"]
            ]
          },
          {
            q: "But I know the ___ of running a city on a small budget.",
            answers: [
              ["challenge"]
            ]
          },
          {
            q: "The council's decisions need to be ___ ones.",
            answers: [
              ["economical"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "WB 3",
        items: [
          { a: "What I like about this street", b: "is its friendly atmosphere." },
          { a: "All we're asking for is", b: "a fair wage." },
          { a: "It's the manager who", b: "decides the schedule." },
          { a: "What we did was", b: "write to the council about the potholes." },
          { a: "It's the parking", b: "that most residents complain about." },
          { a: "What we're saying", b: "is that the budget is too small." }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversations with cleft sentences using the prompts",
        src: "WB 4",
        items: [
          {
            q: "A: We need to collect 500 signatures. B: We've got 350, so ___ (all / need) another 150.",
            answers: [
              ["all we need is", "all that is needed is", "all that's needed is"]
            ]
          },
          {
            q: "A: Well done on winning the contract! B: Thanks, but ___ (it / Iryna) won it, not me.",
            answers: [
              ["it was Iryna who", "it was Iryna that"]
            ]
          },
          {
            q: "A: I loved living in Lviv. B: Me too. ___ (what / particularly miss) the coffee shops!",
            answers: [
              ["What I particularly miss are", "What I particularly miss is"]
            ]
          },
          {
            q: "A: How did you fix the Wi-Fi? B: ___ (all / did) restart the router.",
            answers: [
              ["All I did was", "All I did was to"]
            ]
          },
          {
            q: "A: Any plans for Saturday? B: ___ (what / want / do) sleep all day.",
            answers: [
              ["What I want to do is", "What I want to do is to"]
            ]
          },
          {
            q: "A: ___ (what / I / say) you shouldn't worry about the exam. B: Thanks, but ___ (it / not / the exam) I'm worried about, it's the interview.",
            answers: [
              [
                "What I'm saying is that",
                "What I'm saying is",
                "What I am saying is that",
                "What I am saying is"
              ],
              [
                "it's not the exam that",
                "it's not the exam",
                "it isn't the exam that",
                "it isn't the exam",
                "it is not the exam that"
              ]
            ]
          }
        ]
      }
    ]
  },
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
      },
      {
        type: "match",
        title: "Match the words to their collocations (semantic prosody)",
        src: "VB 2C",
        items: [
          { a: "be rife", b: "corruption / rumours / ill-feeling …" },
          { a: "perform", b: "a task / an operation / a guitar solo" },
          { a: "cause", b: "problems / offence / damage" },
          { a: "be committed to", b: "saving something / your plans / investing in something" },
          { a: "upcoming", b: "release / trip / visit" },
          { a: "impending", b: "conflict / disaster / catastrophe" },
          { a: "abundant", b: "resources / wealth / wildlife" },
          { a: "be hell bent on", b: "destroying something / ruining something" },
          { a: "commit", b: "murder / a sin / an error" }
        ]
      },
      {
        type: "sort",
        title: "Does the word usually introduce a positive or a negative collocation?",
        src: "VB 2C",
        categories: ["positive", "negative"],
        items: [
          { text: "abundant", cat: 0 },
          { text: "generate", cat: 0 },
          { text: "be committed to", cat: 0 },
          { text: "perform", cat: 0 },
          { text: "upcoming", cat: 0 },
          { text: "cause", cat: 1 },
          { text: "be rife", cat: 1 },
          { text: "be hell bent on", cat: 1 },
          { text: "impending", cat: 1 },
          { text: "commit", cat: 1 }
        ]
      },
      {
        type: "choice",
        title: "Which option does NOT complete the sentence?",
        src: "Check 11",
        items: [
          { q: "The square where I live is very ___ at weekends.", options: ["lively", "harsh", "rowdy"], answer: 1 },
          { q: "I find maths exams very ___.", options: ["difficult", "challenging", "firm"], answer: 2 },
          { q: "There are lots of ___ places to visit in my region.", options: ["vintage", "charming", "run-down"], answer: 0, explain: "vintage describes objects (cars, clothes, furniture), not places." },
          { q: "At work I deal with lots of ___ every day.", options: ["problems", "mobs", "issues"], answer: 1 },
          { q: "People who always buy the cheapest things are ___.", options: ["relaxed", "penny-pinching", "economical"], answer: 0 }
        ]
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "Check 12",
        items: [
          { a: "It was Olha", b: "who borrowed your umbrella, not me." },
          { a: "All I'm saying is", b: "that we should spend less on advertising." },
          { a: "It's people gossiping about each other that", b: "I really can't stand." },
          { a: "What this city needs is", b: "more affordable housing." },
          { a: "What we should do", b: "is find out how to save more time." },
          { a: "It's the people in Marketing", b: "who spend the most money." }
        ]
      },
      {
        type: "errors",
        title: "Are the cleft sentences correct? Correct the ones with a mistake",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries",
        items: [
          { s: "What I hate is wait in queues.", ok: false, fix: "What I hate is waiting in queues." },
          { s: "What they did was close the road for a week.", ok: true },
          { s: "It was my neighbour who he called the police.", ok: false, fix: "It was my neighbour who called the police." },
          { s: "All I want right now is to sleep.", ok: true },
          { s: "It's the noise what annoys me most.", ok: false, fix: "It's the noise that annoys me most." },
          { s: "It was because of the strike that we stayed at home.", ok: true },
          { s: "What I'm saying it's that we need a plan.", ok: false, fix: "What I'm saying is that we need a plan." },
          { s: "All what we need is a bit more time.", ok: false, fix: "All we need is a bit more time." },
          { s: "It wasn't until I got home that I noticed the scratch.", ok: true }
        ]
      },
      {
        type: "gap",
        title: "Complete the cleft sentences with one word",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries",
        items: [
          {
            q: "What she did ___ resign on the spot.",
            answers: [
              ["was"]
            ]
          },
          {
            q: "All I did ___ ask a simple question!",
            answers: [
              ["was"]
            ]
          },
          {
            q: "It ___ until midnight that the results finally came in.",
            answers: [
              ["wasn't", "was not"]
            ],
            hint: "negative"
          },
          {
            q: "It was Olena ___ spotted the mistake, not me.",
            answers: [
              ["who", "that"]
            ]
          },
          {
            q: "It's not the cost ___ worries me — it's the timing.",
            answers: [
              ["that", "which"]
            ]
          },
          {
            q: "___ I love about this city is its markets.",
            answers: [
              ["What"]
            ]
          },
          {
            q: "What happened ___ that the bridge was closed for repairs.",
            answers: [
              ["was"]
            ]
          },
          {
            q: "The reason ___ I called is to apologise.",
            answers: [
              ["why", "that"]
            ]
          },
          {
            q: "What we need ___ more bins, not higher fines.",
            answers: [
              ["is", "are"]
            ]
          }
        ]
      }
    ]
  }
});
