/*
 * 6C Signs of the times
 */
ES.registerLesson({
  id: "6C",
  unit: 6,
  letter: "C",
  title: "Signs of the times",
  uk: "Знаки й слогани: порівняльні конструкції (nowhere near as, isn't a patch on, I'd sooner) і прикметники для оцінки ідей",
  goal: "choose a sign or marketing slogan",
  focus: { grammar: "comparatives", vocab: "responding to ideas", pron: "linking between words" },
  learn: {
    theory: [
      {
        h: "Big and small differences",
        table: [
          [
            "big difference",
            "much, far, way (informal), a lot, even",
            "Life is far easier with a dishwasher. / This version is way better."
          ],
          [
            "small difference",
            "a bit, slightly, (just) that little bit",
            "His jokes are just that little bit funnier when he's relaxed."
          ],
          [
            "very big difference (not equal)",
            "nowhere near / nothing like / not anything like + as + adj + as",
            "The sequel is nowhere near as good as the original. / He's nothing like as clever as his sister."
          ]
        ]
      },
      {
        h: "Adverbs, superlatives, contrasts",
        list: [
          "Short adverbs take -er like adjectives: faster, harder, earlier, later. She arrived a bit earlier than us.",
          "-ly adverbs take more / less: more quickly, less carefully. I did more badly than I expected. (NOT badlier)",
          "one of the + superlative + plural noun: It's one of the best films I've ever seen.",
          "Contrasting adjectives: I'm not so much angry as disappointed."
        ]
      },
      {
        h: "Preferences",
        table: [
          [
            "general preference",
            "prefer + noun/-ing + to",
            "I prefer cats to dogs. / I prefer walking to cycling."
          ],
          [
            "specific / hypothetical preference",
            "'d prefer / 'd rather / 'd sooner + infinitive + than",
            "I'd sooner take the train than drive. / I'd rather watch paint dry than listen to his jokes."
          ]
        ]
      },
      {
        h: "Idiomatic comparisons",
        table: [
          ["X is not a patch on Y", "Y is much better"],
          ["X can't hold a candle to Y", "Y is much better"],
          ["X is nothing compared to Y", "Y is much better / bigger"],
          ["X isn't (even) in the same league as Y", "Y is much better"],
          ["X doesn't bear comparison with Y", "Y is much better"],
          ["X is beyond comparison", "X is the best, nothing compares"]
        ]
      },
      {
        h: "Word play and responding to ideas",
        table: [
          ["pun", "a joke using two meanings / similar sounds: Buy cheese here – it's grate!"],
          ["aptronym", "a name that fits the job: Mr Sparks, electrician"],
          [
            "backronym",
            "words chosen to fit a word's letters: LEAF = London Environment And Floral services"
          ],
          ["portmanteau", "two words blended: brunch, advertainment"],
          ["spoonerism", "first sounds swapped: shake a tower (= take a shower)"],
          ["positive", "captivating, catchy, fitting, inventive, novel, quirky, witty"],
          ["negative", "bland, clumsy, corny, repulsive, run-of-the-mill, stale (surreal can be either)"]
        ]
      },
      {
        h: "Pronunciation: linking",
        p: "Words run together: a final consonant links to a following vowel (much_earlier_on), and between two vowels speakers add a /r/ sound (idea /r/ is, near /r/ as).",
        ex: [
          "You should have been here much earlier on.",
          "Your idea is one of the best I've heard.",
          "Your jokes are nowhere near as bad as his."
        ]
      },
      {
        h: "Більше практики",
        p: "Онлайн-вправа на вищий ступінь прикметників.",
        links: [
          { title: "Perfect English Grammar: comparative adjectives", url: "https://www.perfect-english-grammar.com/comparative-adjectives-exercise-1.html", note: "вправа з автоперевіркою на форми вищого ступеня" }
        ]
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the types of word play with the examples",
        src: "SB 6C ex 2",
        items: [
          { a: "pun", b: "Buy local cheese here – it's grate!" },
          { a: "aptronym", b: "Jim Sparks – electrician" },
          { a: "backronym", b: "LEAF: London Environment And Floral services" },
          { a: "portmanteau", b: "Can't choose breakfast or lunch? Have brunch!" },
          { a: "spoonerism", b: "Flutterby pet shop (butterfly)" }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with the correct form of the words",
        src: "SB 6C ex 6a",
        intro: "anything · book · easy · funny · easily · nothing · than · that · this · to",
        items: [
          {
            q: "I can think of jokes in my own language much more ___ than in English.",
            answers: [
              ["easily"]
            ]
          },
          {
            q: "This is one of the funniest ___ I've ever read.",
            answers: [
              ["books"]
            ]
          },
          {
            q: "My uncle's jokes are nothing like as ___ as he thinks they are.",
            answers: [
              ["funny"]
            ]
          },
          {
            q: "I prefer old sitcoms ___ new ones.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "Writing slogans is just ___ little bit harder than writing tweets.",
            answers: [
              ["that"]
            ]
          },
          {
            q: "I'm not ___ like as quick-witted as my brother.",
            answers: [
              ["anything"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct option",
        src: "SB 6C Language focus",
        items: [
          { q: "The new logo is ___ better than the old one.", options: ["way", "very", "too"], answer: 0 },
          { q: "Her second album is nowhere near ___ catchy as her first.", options: ["as", "so much", "than"], answer: 0 },
          { q: "She types much ___ than I do.", options: ["more quickly", "quicklier", "quicker more"], answer: 0 },
          { q: "I'd sooner walk ___ wait for that bus.", options: ["than", "to", "that"], answer: 0 },
          { q: "I prefer reading ___ watching TV.", options: ["to", "than", "from"], answer: 0 },
          { q: "It's one of the wittiest ___ I've ever seen.", options: ["slogans", "slogan", "of slogans"], answer: 0 },
          { q: "Their pizza can't hold a ___ to ours.", options: ["candle", "patch", "league"], answer: 0 },
          { q: "The original isn't even in the same ___ as the remake.", options: ["league", "candle", "comparison"], answer: 0 },
          { q: "I'm not so much bored ___ exhausted.", options: ["as", "than", "that"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Use the prompts to write sentences",
        src: "SB 6C ex 7a",
        items: [
          { q: "… is not a patch on …", models: ["Supermarket bread is not a patch on my grandma's homemade bread."] },
          { q: "I'd rather stay at home …", models: ["I'd rather stay at home than go to a crowded party."] },
          { q: "… is one of the funniest films I've ever seen.", models: ["Monty Python and the Holy Grail is one of the funniest films I've ever seen."] },
          { q: "Driving a car is nowhere near as …", models: ["Driving a car is nowhere near as relaxing as taking the train."] }
        ]
      },
      {
        type: "cards",
        title: "Vocabulary: responding to ideas",
        src: "SB 6C ex 9",
        items: [
          { front: "bland", back: "прісний, нецікавий", ex: "The slogan is a bit bland – nobody will remember it." },
          { front: "captivating", back: "захопливий", ex: "A captivating story – I read it in one night." },
          { front: "catchy", back: "що легко запам'ятовується, «чіпляє»", ex: "The jingle is so catchy I can't get it out of my head." },
          { front: "clumsy", back: "незграбний", ex: "That's a clumsy pun – it doesn't quite work." },
          { front: "corny", back: "банальний, заїжджений (жарт)", ex: "Dad's corny jokes make us groan." },
          { front: "fitting", back: "доречний, влучний", ex: "It was a fitting name for a bakery." },
          { front: "inventive", back: "винахідливий, креативний", ex: "What an inventive use of an old sign!" },
          { front: "novel", back: "новий, оригінальний", ex: "It's a novel idea – I've never seen anything like it." },
          { front: "quirky", back: "дивакуватий (у хорошому сенсі)", ex: "The café has a quirky name." },
          { front: "run-of-the-mill", back: "звичайнісінький, пересічний", ex: "It was just a run-of-the-mill conference." },
          { front: "repulsive", back: "огидний", ex: "The smell was absolutely repulsive." },
          { front: "stale", back: "застарілий, затертий (жарт); черствий", ex: "That joke's gone stale." },
          { front: "surreal", back: "сюрреалістичний, химерний", ex: "It was a surreal experience, like a dream." },
          { front: "witty", back: "дотепний", ex: "She always has a witty answer." }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "SB 6C ex 10",
        items: [
          { q: "It's a ___ idea – nobody has tried it before.", options: ["novel", "run-of-the-mill"], answer: 0 },
          { q: "Those Christmas cracker jokes are so ___ and old-fashioned.", options: ["corny", "witty"], answer: 0 },
          { q: "That sculpture is ___ – it's genuinely ugly.", options: ["repulsive", "bland"], answer: 0 },
          { q: "The series was so ___ that I watched all ten episodes in one go.", options: ["captivating", "corny"], answer: 0 },
          { q: "That joke's gone a bit ___ – I've heard it a hundred times.", options: ["stale", "inventive"], answer: 0 },
          { q: "That's a ___ pun – it doesn't really work.", options: ["clumsy", "fitting"], answer: 0 },
          { q: "He's really ___ – he always has a clever comeback.", options: ["witty", "bland"], answer: 0 },
          { q: "It was a very strange film, almost ___.", options: ["surreal", "witty"], answer: 0 }
        ]
      },
      {
        type: "speak",
        title: "Choose a name or slogan",
        src: "SB 6C ex 12–13",
        intro: "You're in a marketing team choosing names or slogans. Respond to ideas using the adjectives and comparatives.",
        phrases: [
          "catchy",
          "corny",
          "witty",
          "bland",
          "fitting",
          "run-of-the-mill",
          "nowhere near as",
          "way better",
          "isn't a patch on",
          "I'd rather"
        ],
        items: [
          {
            q: "A name for a specialist cheese shop: 'Cheeses of Nazareth' or 'The Cheese Shop'?",
            models: [
              "'The Cheese Shop' is a bit bland and run-of-the-mill. 'Cheeses of Nazareth' is way more memorable, even if it's a little corny."
            ]
          },
          { q: "A slogan for a cycling app: 'Pedal to the metal' or 'Ride more, worry less'?", models: ["'Ride more, worry less' is catchy, but it's nowhere near as witty as the first one."] },
          {
            q: "A name for a café that's also a bookshop.",
            models: [
              "How about 'Brew-ks'? It's a quirky portmanteau – I'd rather have something inventive than a boring name."
            ]
          },
          {
            q: "Which idea does your group choose and why?",
            models: [
              "We chose 'Grate Expectations' – it's a fitting pun, and the other suggestions aren't a patch on it."
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
        src: "WB 6C ex 1",
        items: [
          { a: "The new edition isn't a patch", b: "on the old one." },
          { a: "If you don't mind, we'd prefer", b: "to eat a bit later." },
          { a: "My laptop is nowhere near", b: "as fast as yours." },
          { a: "The new boiler works more", b: "efficiently than the old one." },
          { a: "I think I'd rather", b: "stay in than go out." },
          { a: "We're just that", b: "little bit closer to an agreement." },
          { a: "Your mum's lasagne is beyond", b: "comparison. Nothing comes close." },
          { a: "My car seems to be running", b: "better since I had it serviced." }
        ]
      },
      {
        type: "gap",
        title: "Complete the text with comparative expressions using the word(s) in brackets",
        src: "WB 6C ex 2",
        items: [
          {
            q: "Shevchenko is one of ___ poets in Ukrainian history.",
            hint: "highly regarded",
            answers: [
              ["the most highly regarded"]
            ]
          },
          {
            q: "He is perhaps ___ for his collection Kobzar.",
            hint: "well-known",
            answers: [
              ["best known", "best-known", "most well-known", "most well known"]
            ]
          },
          {
            q: "Few writers of that time ___ him.",
            hint: "candle",
            answers: [
              ["could hold a candle to", "held a candle to", "can hold a candle to"]
            ]
          },
          {
            q: "Their poems were not ___ his, nor did they play with language so freely.",
            hint: "witty",
            answers: [
              ["as witty as"]
            ]
          },
          {
            q: "Today we might not ___ his characters, but we still quote his lines.",
            hint: "speak / beautifully",
            answers: [
              ["speak as beautifully as", "write as beautifully as"]
            ]
          },
          {
            q: "Few modern poets' work ___ with his.",
            hint: "bear / comparison",
            answers: [
              ["bears comparison"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the second sentence so it has a similar meaning. Use the words in brackets",
        src: "WB 6C ex 3",
        items: [
          {
            q: "My brother and I have completely different tastes in music. → My taste in music ___ my brother's.",
            hint: "nothing",
            answers: [
              ["is nothing like", "is nothing like the same as"]
            ]
          },
          {
            q: "I'd prefer to eat cardboard than my flatmate's soup! → ___ eat cardboard than my flatmate's soup!",
            hint: "sooner",
            answers: [
              ["I'd sooner", "I would sooner"]
            ]
          },
          {
            q: "My guitar playing is nowhere near as good as a professional's. → My guitar playing ___ a professional's.",
            hint: "league",
            answers: [
              [
                "isn't in the same league as",
                "isn't even in the same league as",
                "is not in the same league as",
                "is not even in the same league as"
              ]
            ]
          },
          {
            q: "I used to swim 1 km. Now I swim 1.2 km. → I swim ___ these days.",
            hint: "just / bit",
            answers: [
              [
                "just a little bit further",
                "just that little bit further",
                "just a bit further",
                "just a little bit farther",
                "just a little bit more",
                "just a bit more",
                "just that little bit more"
              ]
            ]
          },
          {
            q: "This phone is nowhere near as good as my old one. → This phone ___ my old one.",
            hint: "patch",
            answers: [
              ["isn't a patch on", "is not a patch on"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the statements with the responses",
        src: "WB 6C ex 4",
        items: [
          { a: "I love this tune.", b: "Yes, it's really catchy." },
          { a: "I'm struggling to come up with fresh ideas.", b: "Me too – mine are pretty stale these days." },
          { a: "I wanted a film that was less bland.", b: "Yes, I was hoping for something more exciting, too." },
          { a: "This festival wasn't what I expected.", b: "It's certainly not your usual run-of-the-mill event." },
          { a: "I've got a joke for you.", b: "Let me guess – something corny!" },
          { a: "I don't think that slogan works.", b: "You're right. It's a bit clumsy." }
        ]
      },
      {
        type: "gap",
        title: "Replace the word or phrase in brackets with a word from the box",
        src: "WB 6C ex 5",
        intro: "captivating · fitting · inventive · novel · quirky · repulsive · surreal · witty",
        items: [
          {
            q: "This installation is very ___ (strange). I'm not sure I like it.",
            answers: [
              ["surreal"]
            ]
          },
          {
            q: "Your toast at the wedding was very ___ (appropriate). Well done!",
            answers: [
              ["fitting"]
            ]
          },
          {
            q: "I find the idea of eating insects ___ (disgusting), but my son loves it.",
            answers: [
              ["repulsive"]
            ]
          },
          {
            q: "You can be really ___ (cleverly amusing) when you want to be.",
            answers: [
              ["witty"]
            ]
          },
          {
            q: "I find this kind of folk music really ___ (engaging).",
            answers: [
              ["captivating"]
            ]
          },
          {
            q: "Is there such a thing as a ___ (new and different) idea any more?",
            answers: [
              ["novel"]
            ]
          },
          {
            q: "Dana is one of the most ___ (creative) designers I know.",
            answers: [
              ["inventive"]
            ]
          },
          {
            q: "I'd describe my grandad as ___ (unusual in a good way).",
            answers: [
              ["quirky"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Comparatives: summary",
        table: [
          ["far / much / way / a lot + comparative", "big difference"],
          ["a bit / slightly / just that little bit + comparative", "small difference"],
          ["nowhere near / nothing like / not anything like + as … as", "very big difference"],
          ["harder, faster, earlier / more quickly, less carefully", "adverbs"],
          ["prefer X to Y · I'd rather/sooner/prefer X than Y", "preferences"],
          [
            "not a patch on · can't hold a candle to · not in the same league as · doesn't bear comparison with · beyond comparison",
            "idioms"
          ]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "LB 6C ex 1",
        items: [
          { q: "We've made a few changes to make your stay just ___ little bit more comfortable.", options: ["that", "this"], answer: 0 },
          { q: "Hurry up! Could you walk any ___?", options: ["more slowly", "slowlier"], answer: 0 },
          { q: "Their first season wasn't a patch ___ their second.", options: ["on", "in"], answer: 0 },
          { q: "I prefer their early albums ___ their recent ones.", options: ["to", "than"], answer: 0 },
          { q: "Oksana is one of the funniest ___ I know.", options: ["people", "person"], answer: 0 },
          { q: "My village doesn't even bear ___ with Kyiv when it comes to nightlife.", options: ["comparison", "comparing"], answer: 0 },
          { q: "He's not so much lazy ___ tired.", options: ["as", "than"], answer: 0 },
          { q: "I'm nowhere near as fit ___ you.", options: ["as", "than"], answer: 0 },
          { q: "That band can't hold a candle ___ the Beatles.", options: ["to", "for"], answer: 0 },
          { q: "I'd sooner ___ the dentist than sit through that film again.", options: ["visit", "to visit"], answer: 0 },
          { q: "It's one of the ___ decisions I've ever made.", options: ["hardest", "harder"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Write comparative sentences using the prompts",
        src: "LB 6C ex 2",
        items: [
          { q: "Lara / nowhere / tall / Mia", models: ["Lara is nowhere near as tall as Mia."] },
          { q: "The Bluebirds / league / The Redwoods", models: ["The Bluebirds aren't (even) in the same league as The Redwoods."] },
          { q: "It / one / (funny) / (film) / of the year", models: ["It's one of the funniest films of the year."] },
          { q: "We arrived / early / expected", models: ["We arrived earlier than (we) expected."] },
          { q: "I / sooner / shop at markets / supermarkets", models: ["I'd sooner shop at markets than (at) supermarkets."] },
          { q: "Max / way / (funny) / Leo", models: ["Max is way funnier than Leo."] },
          { q: "I / not so much / angry / confused", models: ["I'm not so much angry as confused."] },
          { q: "Generally / I / prefer / a good series / a night out", models: ["Generally, I prefer a good series to a night out."] },
          { q: "Her cakes / anything like / tasty / mine", models: ["Her cakes aren't anything like as tasty as mine."] }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make sentences",
        src: "Check 5–6 ex 11",
        items: [
          { words: ["nowhere", "is", "as", "My", "near", "as", "country", "big", "Canada"], answer: "My country is nowhere near as big as Canada." },
          { words: ["little", "that", "taller", "I'm", "bit", "my", "just", "than", "dad"], answer: "I'm just that little bit taller than my dad." },
          { words: ["is", "car", "a", "Your", "not", "on", "brother's", "patch", "mine"], answer: "Your brother's car is not a patch on mine." },
          { words: ["to", "podcasts", "books", "I", "prefer"], answer: "I prefer podcasts to books." },
          { words: ["nothing", "is", "as", "My", "like", "as", "language", "difficult", "English"], answer: "My language is nothing like as difficult as English." },
          { words: ["nothing", "rather", "do", "weekend", "at", "play", "the", "than", "sport", "I'd"], answer: "I'd rather do nothing at the weekend than play sport." },
          { words: ["hold", "a", "mine", "to", "candle", "can't", "voice", "His"], answer: "His voice can't hold a candle to mine." },
          { words: ["nothing", "is", "to", "This", "compared", "mother's", "pizza", "my", "cooking"], answer: "This pizza is nothing compared to my mother's cooking." }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with adjectives. The first letter is given",
        src: "Check 5–6 ex 12",
        items: [
          {
            q: "I didn't enjoy the meal. The food was b___ and the atmosphere was dull.",
            answers: [
              ["bland"]
            ]
          },
          {
            q: "The humour was rather c___ – the audience hardly laughed.",
            answers: [
              ["corny", "clumsy"]
            ]
          },
          {
            q: "That film was so s___ – it felt like a weird dream.",
            answers: [
              ["surreal"]
            ]
          },
          {
            q: "We read a novel about Lisbon while we were in Lisbon, so it was quite f___.",
            answers: [
              ["fitting"]
            ]
          },
          {
            q: "Her talk was absolutely c___ – we listened in total silence.",
            answers: [
              ["captivating"]
            ]
          },
          {
            q: "The scene with the giant worms was r___ – I nearly felt sick.",
            answers: [
              ["repulsive"]
            ]
          },
          {
            q: "This tune is so c___ – I can't stop humming it.",
            answers: [
              ["catchy"]
            ]
          },
          {
            q: "He seems serious, but he has a q___ way of looking at things.",
            answers: [
              ["quirky"]
            ]
          },
          {
            q: "He thinks he's being w___, but I find his comments annoying.",
            answers: [
              ["witty"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Compare and give your opinion",
        src: "Revision",
        phrases: [
          "way better",
          "nowhere near as",
          "isn't a patch on",
          "can't hold a candle to",
          "I'd sooner",
          "prefer",
          "to",
          "catchy",
          "corny",
          "witty"
        ],
        items: [
          { q: "Compare a film with the book it was based on.", models: ["The film isn't a patch on the book – the characters are nowhere near as interesting."] },
          { q: "Talk about an advert or slogan you remember.", models: ["There's a bank advert with a really catchy jingle, but the slogan itself is a bit corny."] },
          { q: "Which would you rather do: give a speech or sing in public?", models: ["I'd sooner give a speech than sing in public – my singing can't hold a candle to my sister's."] }
        ]
      },
      {
        type: "errors",
        title: "Are these comparative sentences correct? Correct the wrong ones",
        src: "extra: https://www.perfect-english-grammar.com/comparative-adjectives-exercise-1.html",
        items: [
          { s: "The sequel is nowhere near as good as the original.", ok: true },
          { s: "The more I read about it, more I worry.", ok: false, fix: "The more I read about it, the more I worry." },
          { s: "This is by far the more interesting book I've read this year.", ok: false, fix: "This is by far the most interesting book I've read this year." },
          { s: "She drives much more carefully than her brother.", ok: true },
          { s: "He did badlier in the final than in the semi-final.", ok: false, fix: "He did worse in the final than in the semi-final." },
          { s: "Prices are getting more and more high.", ok: false, fix: "Prices are getting higher and higher." },
          { s: "The new phone is slightly more cheaper than the old one.", ok: false, fix: "The new phone is slightly cheaper than the old one." },
          { s: "I'd rather walk than take the bus.", ok: true },
          { s: "It's one of the best decision I've ever made.", ok: false, fix: "It's one of the best decisions I've ever made." },
          { s: "I prefer cycling than driving.", ok: false, fix: "I prefer cycling to driving." }
        ]
      },
      {
        type: "sort",
        title: "How big is the difference? Sort the phrases",
        src: "extra: https://www.perfect-english-grammar.com/comparative-adjectives-exercise-1.html",
        categories: ["a big difference", "a small difference", "no difference"],
        items: [
          { text: "far more expensive", cat: 0 },
          { text: "way bigger", cat: 0 },
          { text: "nowhere near as fast as", cat: 0 },
          { text: "nothing like as strict as", cat: 0 },
          { text: "considerably cheaper", cat: 0 },
          { text: "slightly warmer", cat: 1 },
          { text: "a bit older", cat: 1 },
          { text: "marginally better", cat: 1 },
          { text: "not quite as tall as", cat: 1 },
          { text: "just as good as", cat: 2 },
          { text: "every bit as clever as", cat: 2 },
          { text: "no different from", cat: 2 }
        ]
      }
    ]
  }
});
