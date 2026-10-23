/*
 * 7C Skills for life
 */
ES.registerLesson({
  id: "7C",
  unit: 7,
  letter: "C",
  title: "Skills for life",
  uk: "Життєві навички: скорочені відносні речення (people waiting, a book full of ideas, time to think) і лексика про вміння",
  goal: "discuss skills and abilities",
  focus: { grammar: "reduced relative clauses and similar structures", vocab: "skills and abilities", pron: "pauses in reduced relative clauses" },
  learn: {
    theory: [
      {
        h: "Reduced relative clauses (RRCs)",
        p: "Drop the relative pronoun and be: an -ing form stays for active meaning, a past participle for passive meaning.",
        ex: [
          "This blog is for anybody (who is) looking for useful skills.",
          "I liked the tips (that were) given by the writer."
        ]
      },
      {
        h: "-ing even when the continuous sounds odd",
        p: "An -ing RRC can replace a simple verb, even a state verb, where a full continuous clause would be wrong.",
        ex: [
          "I once bought a takeaway costing half my weekly salary. (= which cost, NOT which was costing)",
          "Anyone wanting a refund should contact us. (= who wants)"
        ]
      },
      {
        h: "Similar structures after nouns",
        list: [
          "to-infinitive, often meaning must/can: There are lots of ingredients to buy. (= that we must buy) / I've got no time to think. (= when I can think)",
          "prepositional phrase: an article by a famous chef (= which is by…), the people outside",
          "adjective phrase: a book full of ideas (= which is full of…), John, wet from the rain, went home",
          "not at the start makes a negative RRC: Any cars not parked correctly will be removed."
        ]
      },
      {
        h: "When NOT to reduce",
        list: [
          "Only when the relative pronoun is the subject: the book I lent you (object) – no RRC possible.",
          "Not with -ing for a single complete past action: The thief who stole my bag has been arrested. (NOT The thief stealing my bag…)",
          "Only when the tense is easy to work out from context."
        ]
      },
      {
        h: "Commas and pauses",
        p: "Most RRCs are defining (no commas, no pause). With commas they become non-defining – extra information about all of the group.",
        ex: [
          "I prefer takeaway meals delivered to my door. (only delivered ones)",
          "I prefer takeaway meals, delivered to my door. (all takeaways – and I like having them delivered)"
        ]
      },
      {
        h: "Skills and abilities",
        table: [
          [
            "highly skilled",
            "an old hand at, accomplished, adept at, a natural, proficient at, tech-savvy, an innate ability / an aptitude for"
          ],
          ["reasonable skills", "can get by (in), not bad at"],
          ["a wide range", "an all-rounder, versatile, can turn my hand to anything"],
          ["gaining / losing", "learn the basics/the ropes, dabble in, rusty"],
          ["lacking", "out of my depth, incompetent, inept, clueless, computer illiterate, a novice"]
        ]
      },
      {
        h: "Більше практики",
        p: "На сторінці British Council є пояснення та вправи на дієприкметникові звороти — вони продовжують тему скорочених відносних речень.",
        links: [
          { title: "British Council: Participle clauses", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses", note: "звороти з -ing, -ed і having done (рівень C1) з онлайн-тестом" }
        ]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Skills and abilities",
        src: "SB 7C",
        items: [
          { front: "be out of your depth", back: "бути не в своїй тарілці, не мати потрібних навичок", ex: "I'd be completely out of my depth repairing a bike." },
          { front: "incompetent / inept", back: "некомпетентний / невмілий", ex: "I was totally inept at designing clothes." },
          { front: "an old hand at something", back: "досвідчений у чомусь", ex: "Mum's an old hand at bike repairs." },
          { front: "an aptitude for", back: "здібність до", ex: "She has an aptitude for maths." },
          { front: "an innate ability", back: "вроджена здібність", ex: "He has an innate ability to calm people down." },
          { front: "rusty", back: "підзабутий, «заіржавілий» (про навичку)", ex: "My Spanish is a bit rusty." },
          { front: "clueless (about)", back: "який гадки не має", ex: "I'm clueless about cars." },
          { front: "an all-rounder / versatile", back: "універсал / різнобічний", ex: "He's a versatile player – a real all-rounder." },
          { front: "turn your hand to something", back: "братися (успішно) за будь-яку справу", ex: "She can turn her hand to most DIY jobs." },
          { front: "computer illiterate / tech-savvy", back: "комп'ютерно неграмотний / тямущий у техніці", ex: "My gran used to be computer illiterate, but now she's quite tech-savvy." },
          { front: "a novice", back: "новачок", ex: "I'm still a novice at coding." },
          { front: "learn the basics / the ropes", back: "опанувати основи", ex: "It didn't take long to learn the ropes." },
          { front: "get by (in)", back: "якось справлятися", ex: "I can get by in the kitchen." },
          { front: "proficient at / accomplished / adept at", back: "вправний / досвідчений, майстерний / вмілий", ex: "He's proficient at cooking, but not an accomplished chef." },
          { front: "a natural", back: "людина з природним талантом", ex: "You're a natural on stage!" },
          { front: "dabble in", back: "трохи займатися чимось, пробувати", ex: "I dabbled in photography at uni." }
        ]
      },
      {
        type: "sort",
        title: "What does each expression describe?",
        src: "SB 7C",
        categories: ["highly skilled", "a wide range of skills", "gaining or losing skills", "lacking skills"],
        items: [
          { text: "an old hand at", cat: 0 },
          { text: "accomplished", cat: 0 },
          { text: "adept at", cat: 0 },
          { text: "a natural", cat: 0 },
          { text: "an all-rounder", cat: 1 },
          { text: "versatile", cat: 1 },
          { text: "turn your hand to anything", cat: 1 },
          { text: "rusty", cat: 2 },
          { text: "learn the basics", cat: 2 },
          { text: "out of your depth", cat: 3 },
          { text: "clueless", cat: 3 },
          { text: "inept", cat: 3 },
          { text: "computer illiterate", cat: 3 }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences about skills",
        src: "SB 7C",
        items: [
          {
            q: "I can ___ by in Italian, but I couldn't hold a business meeting.",
            answers: [
              ["get"]
            ]
          },
          {
            q: "Ask Dad – he's an old ___ at plumbing.",
            answers: [
              ["hand"]
            ]
          },
          {
            q: "I'd be totally out of my ___ if I had to give a speech.",
            answers: [
              ["depth"]
            ]
          },
          {
            q: "I haven't played the piano for years, so I'm really ___.",
            answers: [
              ["rusty"]
            ]
          },
          {
            q: "She's tech-___ – she built her own website.",
            answers: [
              ["savvy"]
            ]
          },
          {
            q: "He can turn his ___ to almost anything around the house.",
            answers: [
              ["hand"]
            ]
          },
          {
            q: "I ___ in pottery for a while, but I gave up.",
            answers: [
              ["dabbled"]
            ]
          },
          {
            q: "I had a natural ___ for languages as a child.",
            answers: [
              ["aptitude"]
            ]
          },
          {
            q: "I'm still a ___, but I'm learning the ropes quickly.",
            answers: [
              ["novice"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with an -ing form, a past participle or a to-infinitive",
        src: "SB 7C",
        items: [
          {
            q: "Anyone ___ to join the course should sign up today.",
            hint: "want",
            answers: [
              ["wanting"]
            ]
          },
          {
            q: "The cakes ___ at the fair were all homemade.",
            hint: "sell",
            answers: [
              ["sold"]
            ]
          },
          {
            q: "I've got loads of emails ___ before lunch.",
            hint: "answer",
            answers: [
              ["to answer"]
            ]
          },
          {
            q: "I once bought a coat ___ more than my rent.",
            hint: "cost",
            answers: [
              ["costing"]
            ]
          },
          {
            q: "The woman ___ next to me on the plane was a famous chef.",
            hint: "sit",
            answers: [
              ["sitting"]
            ]
          },
          {
            q: "Most of the furniture ___ in that factory is exported.",
            hint: "make",
            answers: [
              ["made"]
            ]
          },
          {
            q: "There's nothing ___ about – it's an easy test.",
            hint: "worry",
            answers: [
              ["to worry"]
            ]
          },
          {
            q: "Any bikes not ___ in the racks will be removed.",
            hint: "lock",
            answers: [
              ["locked"]
            ]
          },
          {
            q: "Is that your brother ___ by the door?",
            hint: "stand",
            answers: [
              ["standing"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Shorten the relative clauses",
        src: "SB 7C",
        items: [
          { q: "I once stayed in a house which had been designed by a famous architect.", models: ["I once stayed in a house designed by a famous architect."] },
          { q: "They don't have anything that they can do in the evenings.", models: ["They don't have anything to do in the evenings."] },
          { q: "Anybody who expects this to be easy will be disappointed.", models: ["Anybody expecting this to be easy will be disappointed."] },
          { q: "Have you got a key with which I can open this drawer?", models: ["Have you got a key to open this drawer (with)?"] },
          { q: "Habits which are formed in childhood are hard to break.", models: ["Habits formed in childhood are hard to break."] },
          { q: "I've got an app which is full of quick recipes.", models: ["I've got an app full of quick recipes."] },
          { q: "I went to a workshop which was run by a professional baker.", models: ["I went to a workshop run by a professional baker."] },
          { q: "I can't follow manuals that have been written for engineers.", models: ["I can't follow manuals written for engineers."] }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? Can the clause be reduced?",
        src: "LB 7C",
        items: [
          { s: "The man stealing my wallet has been arrested.", ok: false, fix: "The man who stole my wallet has been arrested. (single complete past action)" },
          { s: "The people waiting outside looked frozen.", ok: true },
          { s: "The book lending you belongs to my sister.", ok: false, fix: "The book (that) I lent you belongs to my sister. (pronoun is the object – no RRC)" },
          { s: "Anyone not wearing a helmet will be refused entry.", ok: true },
          { s: "The woman phoned me yesterday is my boss.", ok: false, fix: "The woman who phoned me yesterday is my boss." },
          { s: "There's a lot of washing-up to do.", ok: true },
          { s: "I prefer meals cooked at home.", ok: true },
          { s: "I've got no time for think about it.", ok: false, fix: "I've got no time to think about it." }
        ]
      },
      {
        type: "speak",
        title: "Discuss a skill for the modern world",
        src: "SB 7C",
        intro: "Choose a skill: DIY, mental arithmetic, finding your way without GPS, sewing.",
        phrases: [
          "out of my depth",
          "rusty",
          "clueless",
          "get by",
          "turn my hand to",
          "an old hand",
          "anyone",
          "people relying on",
          "skills learnt",
          "nothing to"
        ],
        items: [
          {
            q: "Are we really losing this skill? Why?",
            models: [
              "Yes – most people relying on GPS are completely clueless without it. I'd be out of my depth with a paper map."
            ]
          },
          {
            q: "Is this skill important in the modern world?",
            models: [
              "I think so. Skills learnt as a child stay with you, and anyone stuck without a phone signal needs them."
            ]
          },
          { q: "Describe your level of ability at a particular skill.", models: ["I'm pretty adept at fixing bikes, but my sewing is rusty – I can just about get by."] },
          { q: "What should we do about it?", models: ["Schools could run short courses taught by people who are old hands at these things."] }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "gap",
        title: "Complete each word. The first letter is given",
        src: "WB 7C",
        items: [
          {
            q: "I'm not a brilliant cook, but I can ___ by.",
            hint: "g…",
            answers: [
              ["get"]
            ]
          },
          {
            q: "My uncle's an old ___ at fixing cars, so anything broken goes to him.",
            hint: "h…",
            answers: [
              ["hand"]
            ]
          },
          {
            q: "I'm not bad at chess now. I've learnt the ___.",
            hint: "b…",
            answers: [
              ["basics"]
            ]
          },
          {
            q: "I'd love to be able to turn my ___ to anything.",
            hint: "h…",
            answers: [
              ["hand"]
            ]
          },
          {
            q: "I feel completely out of my ___ with statistics.",
            hint: "d…",
            answers: [
              ["depth"]
            ]
          },
          {
            q: "When it comes to sport, I'm something of an all-___.",
            hint: "r…",
            answers: [
              ["rounder"]
            ]
          },
          {
            q: "Whoever painted this wall was completely ___. Look at the drips!",
            hint: "i…",
            answers: [
              ["inept", "incompetent"]
            ]
          },
          {
            q: "I've got a smartphone, but I wouldn't call myself tech-___.",
            hint: "s…",
            answers: [
              ["savvy"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversations",
        src: "WB 7C",
        intro: "accomplished, all-rounder, aptitude, clueless, dabbled, illiterate, inept, natural, novices, proficient, rusty",
        items: [
          {
            q: "A: I hate giving presentations. I'm such an ___ speaker. B: Nonsense, you're a ___!",
            answers: [
              ["inept"],
              ["natural"]
            ]
          },
          {
            q: "A: My sister is an ___ pianist – she plays in an orchestra.",
            answers: [
              ["accomplished"]
            ]
          },
          {
            q: "B: I was quite ___ at the violin at school, but I'm very ___ now.",
            answers: [
              ["proficient"],
              ["rusty"]
            ]
          },
          {
            q: "A: I'm on a chess course for ___, though I'm ___ at strategy games.",
            answers: [
              ["novices"],
              ["clueless"]
            ]
          },
          {
            q: "B: I'm computer ___, so learning to code will be interesting!",
            answers: [
              ["illiterate"]
            ]
          },
          {
            q: "A: My dad's a great artist, but I've never had an ___ for drawing.",
            answers: [
              ["aptitude"]
            ]
          },
          {
            q: "B: I've ___ in jewellery making, but not much.",
            answers: [
              ["dabbled"]
            ]
          },
          {
            q: "In my new job there are so many different tasks. I have to be an ___.",
            answers: [
              ["all-rounder"]
            ]
          }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? Remove the word that is not needed",
        src: "WB 7C",
        items: [
          { s: "Not everyone is playing in the band is all that good.", ok: false, fix: "Not everyone playing in the band is all that good." },
          { s: "I prefer to buy furniture is made by hand.", ok: false, fix: "I prefer to buy furniture made by hand." },
          { s: "We've got no time when to do this.", ok: false, fix: "We've got no time to do this." },
          { s: "I'm reading a book is by a famous psychologist.", ok: false, fix: "I'm reading a book by a famous psychologist." },
          { s: "This village is for people looking for a quiet life.", ok: true },
          { s: "This report which is full of mistakes.", ok: false, fix: "This report is full of mistakes." },
          { s: "I sent off my application complete with references.", ok: true },
          { s: "The people who answering the phones at my bank always sound bored.", ok: false, fix: "The people answering the phones at my bank always sound bored." }
        ]
      },
      {
        type: "gap",
        title: "Complete with the correct form of the verb in brackets",
        src: "WB 7C",
        items: [
          {
            q: "I once met a man ___ a cowboy hat in the middle of London.",
            hint: "wear",
            answers: [
              ["wearing"]
            ]
          },
          {
            q: "I'm not happy about these repairs ___ over €1,000.",
            hint: "cost",
            answers: [
              ["costing"]
            ]
          },
          {
            q: "There are a lot of jobs for us ___ this weekend.",
            hint: "do",
            answers: [
              ["to do"]
            ]
          },
          {
            q: "Who's that woman ___ by the red car?",
            hint: "stand",
            answers: [
              ["standing"]
            ]
          },
          {
            q: "That was a good point, well ___.",
            hint: "make",
            answers: [
              ["made"]
            ]
          },
          {
            q: "There are too many dishes ___ from on this menu!",
            hint: "choose",
            answers: [
              ["to choose"]
            ]
          },
          {
            q: "Do you know anyone ___ an old sofa?",
            hint: "want",
            answers: [
              ["wanting"]
            ]
          },
          {
            q: "There were too many things ___ unsaid.",
            hint: "leave",
            answers: [
              ["left"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the tips with a reduced relative clause or similar structure",
        src: "WB 7C",
        items: [
          { q: "Look at work which is by people better than you to find inspiration.", models: ["Look at work by people better than you to find inspiration."] },
          { q: "Anyone who wants to succeed should start with small goals.", models: ["Anyone wanting to succeed should start with small goals."] },
          { q: "There are tonnes of 'how to' videos which you can watch online, so choose carefully.", models: ["There are tonnes of 'how to' videos to watch online, so choose carefully."] },
          { q: "Don't compare your progress to other people who are doing the same thing.", models: ["Don't compare your progress to other people doing the same thing."] },
          { q: "Give yourself a reward for progress that you've made.", models: ["Give yourself a reward for progress made."] },
          { q: "Only listen to advice which is given by people who can do it themselves.", models: ["Only listen to advice given by people who can do it themselves."] }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "RRCs in a nutshell",
        table: [
          ["who/which + active verb → -ing", "people waiting outside, a coat costing €500"],
          ["who/which + be + past participle → participle", "a meal cooked by a chef"],
          ["that we must/can + verb → to-infinitive", "letters to write, no time to lose"],
          ["which is + phrase → phrase", "a book full of tips, the house near the station"],
          ["negative", "anyone not wanting to come"],
          [
            "NOT possible",
            "object clauses (the film I saw), single complete past actions (the man who broke in)"
          ]
        ]
      },
      {
        h: "Vivid imagery in reviews",
        list: [
          "metaphor – describes something as something else: drowning in a sea of possibilities, a rollercoaster of adventures",
          "simile – a comparison with as or like: as helpful as a chocolate teapot, like a kid in a sweet shop",
          "personification – giving an object human qualities: the app will be eating into your bank account"
        ]
      }
    ],
    exercises: [
      {
        type: "transform",
        title: "Make reduced relative clauses. One clause cannot be changed",
        src: "LB 7C",
        items: [
          { q: "Several paintings that belonged to the gallery were stolen.", models: ["Several paintings belonging to the gallery were stolen."] },
          {
            q: "The file which you're looking for is in the top drawer.",
            models: [
              "Cannot be reduced – which is the object of the clause. (The file you're looking for… just omits which.)"
            ]
          },
          { q: "Anyone who doesn't want to come should let me know.", models: ["Anyone not wanting to come should let me know."] },
          { q: "'Biology' is a word which is derived from Greek.", models: ["'Biology' is a word derived from Greek."] },
          { q: "At the airport, look out for a man who'll be holding a sign with your name.", models: ["At the airport, look out for a man holding a sign with your name."] },
          { q: "Please don't switch off any laptops which are being used.", models: ["Please don't switch off any laptops being used."] }
        ]
      },
      {
        type: "transform",
        title: "Combine the sentences with a reduced relative clause or similar structure",
        src: "LB 7C",
        items: [
          { q: "We're staying at the Grand Hotel. It was designed by a local architect.", models: ["We're staying at the Grand Hotel, designed by a local architect."] },
          { q: "Please bring any documents. They are necessary for the trip.", models: ["Please bring any documents necessary for the trip."] },
          { q: "Riverside Park is my favourite place to relax. It's near my flat.", models: ["Riverside Park, near my flat, is my favourite place to relax."] },
          {
            q: "The candidate answered hesitantly. She felt nervous throughout the interview.",
            models: [
              "The candidate, nervous throughout the interview, answered hesitantly.",
              "Feeling nervous throughout the interview, the candidate answered hesitantly."
            ]
          },
          { q: "The money should be spent on more buses. It's currently being spent on a new car park.", models: ["The money, currently being spent on a new car park, should be spent on more buses."] }
        ]
      },
      {
        type: "gap",
        title: "Complete with: all-rounder, aptitude, get, innate, novice, proficient, ropes, rusty, turn",
        src: "Check 7",
        items: [
          {
            q: "I discovered I had an ___ for languages early, so it didn't take long to learn the ___.",
            answers: [
              ["aptitude"],
              ["ropes", "basics"]
            ]
          },
          {
            q: "I haven't been doing it long, so I'm still a bit of a ___, but I can ___ by.",
            answers: [
              ["novice"],
              ["get"]
            ]
          },
          {
            q: "I'm something of an ___ – I can ___ my hand to most things.",
            answers: [
              ["all-rounder"],
              ["turn"]
            ]
          },
          {
            q: "Ever since I was little, I've had this ___ ability to remember faces.",
            answers: [
              ["innate"]
            ]
          },
          {
            q: "I used to be pretty ___ at tennis, but after a long break I'm really ___.",
            answers: [
              ["proficient"],
              ["rusty"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Put the words in order",
        src: "Check 7",
        items: [
          { words: ["was", "the", "The", "seen", "bank", "near", "man", "yesterday", "arrested"], answer: "The man seen near the bank was arrested yesterday." },
          { words: ["need", "the", "suit", "new", "to", "I", "interview", "wear", "a", "to"], answer: "I need a new suit to wear to the interview." },
          { words: ["the", "packed", "to", "towels", "We", "hotel", "some", "belonging", "accidentally"], answer: "We accidentally packed some towels belonging to the hotel." },
          { words: ["in", "clothes", "a", "I", "bag", "wet", "Can", "put", "my", "borrow", "to"], answer: "Can I borrow a bag to put my wet clothes in?" },
          { words: ["car", "in", "of", "us", "suddenly", "The", "stopped", "front"], answer: "The car in front of us suddenly stopped." },
          { words: ["seatbelt", "Anyone", "be", "a", "wearing", "not", "fined", "will"], answer: "Anyone not wearing a seatbelt will be fined." }
        ]
      },
      {
        type: "sort",
        title: "Metaphor, simile or personification?",
        src: "Skills 7C",
        categories: ["metaphor", "simile", "personification"],
        items: [
          { text: "drowning in a sea of possibilities", cat: 0 },
          { text: "a ray of light in an otherwise dismal day", cat: 0 },
          { text: "each video is a bite-sized snack", cat: 0 },
          { text: "a rollercoaster of adventures", cat: 0 },
          { text: "as helpful as a chocolate teapot", cat: 1 },
          { text: "like searching for a needle in a haystack", cat: 1 },
          { text: "about as fun as watching paint dry", cat: 1 },
          { text: "time crawls along like a car in rush hour", cat: 1 },
          { text: "the app will be eating into your bank account", cat: 2 },
          { text: "the course leapt up and yelled 'pick me!'", cat: 2 },
          { text: "the help pages stand up and demand to be counted", cat: 2 }
        ]
      },
      {
        type: "choice",
        title: "Which form fits?",
        src: "Revision",
        items: [
          { q: "Visitors ___ to stay overnight must register at reception.", options: ["wishing", "wished", "to wish"], answer: 0 },
          { q: "The bridge ___ last year is already cracking.", options: ["building", "built", "to build"], answer: 1 },
          { q: "We've got three more rooms ___ before the guests arrive.", options: ["painting", "painted", "to paint"], answer: 2 },
          { q: "The man ___ the window yesterday has been caught.", options: ["breaking", "who broke", "broken"], answer: 1 },
          { q: "Anyone ___ the instructions will lose points.", options: ["not following", "not followed", "not to follow"], answer: 0 },
          { q: "It's a city ___ history and culture.", options: ["full of", "filling", "to fill"], answer: 0 }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? Reduced relative and participle clauses",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses",
        items: [
          { s: "Anyone wishing to join the course should register by Friday.", ok: true },
          { s: "The skills taught on the course are surprisingly practical.", ok: true },
          { s: "People who living in remote areas need survival skills.", ok: false, fix: "People living in remote areas need survival skills." },
          { s: "Knowing that the exam would be tough, she started revising early.", ok: true },
          { s: "Having finished the course, the certificate was sent to me.", ok: false, fix: "Having finished the course, I was sent the certificate." },
          { s: "The first person to master the knot wins a prize.", ok: true },
          { s: "The man arrested last night was released without charge.", ok: true },
          { s: "Walking into the workshop, the smell of sawdust hit me.", ok: false, fix: "As I walked into the workshop, the smell of sawdust hit me." },
          { s: "Given enough practice, almost anyone can learn to juggle.", ok: true },
          { s: "Born in a fishing village, sailing came naturally to him.", ok: false, fix: "Born in a fishing village, he found that sailing came naturally to him." }
        ]
      },
      {
        type: "match",
        title: "Match the participle clauses to the main clauses",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses",
        items: [
          { a: "Not knowing how to swim,", b: "he refused to get into the kayak." },
          { a: "Having lost her map,", b: "she had to navigate by the stars." },
          { a: "Asked about his secret,", b: "the chef simply shrugged and smiled." },
          { a: "Left to their own devices,", b: "the children built an impressive raft." },
          { a: "Once mastered,", b: "the technique is never forgotten." },
          { a: "Having been warned about the storm,", b: "the climbers turned back early." },
          { a: "Feeling increasingly rusty,", b: "I signed up for a refresher course." },
          { a: "Compared with last year's group,", b: "this year's trainees are far more confident." }
        ]
      }
    ]
  }
});
