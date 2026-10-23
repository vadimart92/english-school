/*
 * 10B It's your turn
 */
ES.registerLesson({
  id: "10B",
  unit: 10,
  letter: "B",
  title: "It's your turn",
  uk: "Настільні ігри: «голови» й «хвости» (heads and tails) у розмовній мові, лексика правил гри",
  goal: "explain the rules of a game",
  focus: { grammar: "heads and tails", vocab: "board games", pron: "intonation in heads and tails" },
  learn: {
    theory: [
      {
        h: "Heads and tails",
        p: "Typical of informal spoken English (not formal writing). A head puts the topic first so the listener knows what we're talking about; a tail adds or repeats the noun phrase at the end to make clear what we meant. A comma separates the two parts.",
        table: [
          [
            "Head: noun phrase/clause + comma + pronoun",
            "The blue counter, that goes first.",
            "Getting up at six, I can't stand it."
          ],
          [
            "Tail: pronoun … + comma + noun phrase",
            "It's a tricky game, chess.",
            "He's a great player, your brother."
          ],
          [
            "Head instead of possessive 's",
            "My cousin, her husband's a pilot.",
            "(= My cousin's husband is a pilot.)"
          ]
        ],
        uk: {
          h: "Heads і tails (тема на початку й у кінці)",
          p: "Типово для неформальної розмовної англійської (не для офіційного письма). Head ставить тему на початок, щоб слухач знав, про що мова; tail додає або повторює іменникову групу в кінці, щоб уточнити, що ми мали на увазі. Дві частини розділяє кома.",
          table: [
            [
              "Head: іменникова група/речення + кома + займенник",
              "The blue counter, that goes first.",
              "Getting up at six, I can't stand it."
            ],
            [
              "Tail: займенник … + кома + іменникова група",
              "It's a tricky game, chess.",
              "He's a great player, your brother."
            ],
            [
              "Head замість присвійного 's",
              "My cousin, her husband's a pilot.",
              "(= My cousin's husband is a pilot.)"
            ]
          ]
        }
      },
      {
        h: "How to build them",
        list: [
          "Head: take the noun phrase out to the front and replace it with a pronoun in the sentence: Those dice belong to Max. → Those dice, they belong to Max.",
          "Tail: replace the noun phrase with a pronoun and add it at the end: Brand-new phones are expensive. → They're expensive, brand-new phones.",
          "A tail can also repeat the subject + auxiliary: She's clever, she is.",
          "Intonation: a tail is usually said quickly and with a fall, like an afterthought; a head often has a rise, signalling 'more is coming'."
        ],
        uk: {
          h: "Як їх будувати",
          list: [
            "Head: винесіть іменникову групу на початок, а в реченні замініть її займенником: Those dice belong to Max. → Those dice, they belong to Max.",
            "Tail: замініть іменникову групу займенником і додайте її в кінці: Brand-new phones are expensive. → They're expensive, brand-new phones.",
            "Tail може також повторювати підмет + допоміжне дієслово: She's clever, she is.",
            "Інтонація: tail зазвичай вимовляють швидко й зі спадом, ніби думку навздогін; head часто має підйом, що сигналізує «далі буде ще»."
          ]
        }
      },
      {
        h: "Board game vocabulary",
        table: [
          ["shuffle / deal the cards", "mix the cards / give cards to each player"],
          ["place the cards face up / face down", "put the cards with the picture showing / hidden"],
          ["roll the dice", "throw the dice"],
          ["take turns (to do sth)", "do something one after another"],
          ["on your go / turn", "when it's your turn"],
          ["turn over a card", "flip a card so the other side shows"],
          ["place a counter / tile", "put a playing piece / tile on the board"],
          ["score points", "get points"],
          ["take (a square, a piece)", "capture (a square, an opponent's piece)"],
          ["the initial phase (of the game)", "the first stage (of the game)"],
          ["the ultimate goal", "the final aim"]
        ],
        uk: {
          h: "Лексика настільних ігор",
          table: [
            ["shuffle / deal the cards", "тасувати / роздавати карти"],
            ["place the cards face up / face down", "класти карти лицем догори / донизу"],
            ["roll the dice", "кидати кубики"],
            ["take turns (to do sth)", "ходити по черзі"],
            ["on your go / turn", "коли твоя черга"],
            ["turn over a card", "перевернути карту"],
            ["place a counter / tile", "поставити фішку / плитку"],
            ["score points", "набирати очки"],
            ["take (a square, a piece)", "захопити (клітинку, фігуру)"],
            ["the initial phase (of the game)", "початкова фаза"],
            ["the ultimate goal", "кінцева мета"]
          ]
        }
      },
      {
        h: "More practice",
        p: "More on how to leave out or replace repeated words in speech and writing.",
        links: [
          { title: "British Council: Ellipsis", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/ellipsis", note: "leaving out words after conjunctions, after to, after auxiliary and modal verbs" },
          {
            title: "British Council: Avoiding repetition in a text",
            url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/avoiding-repetition-text",
            note: "it, this, that, such, do so and synonyms instead of repetition"
          }
        ],
        uk: {
          h: "Більше практики",
          p: "Ще про те, як в усній і письмовій мові пропускати або замінювати повторювані слова.",
          notes: [
            "пропуск слів після сполучників, після to, після допоміжних і модальних дієслів",
            "it, this, that, such, do so і синоніми замість повторів"
          ]
        }
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with the correct form of the board game words",
        src: "SB 4",
        items: [
          {
            q: "Always place your cards ___ ___ so nobody can see what they are.",
            answers: [
              ["face"],
              ["down"]
            ]
          },
          {
            q: "In the ___ ___ of the game, players choose their characters.",
            answers: [
              ["initial"],
              ["phase"]
            ]
          },
          {
            q: "The ___ goal of the game is to get rid of all your cards.",
            answers: [
              ["ultimate"]
            ]
          },
          {
            q: "First, ___ the cards, then ___ seven cards to each player.",
            answers: [
              ["shuffle"],
              ["deal"]
            ]
          },
          {
            q: "In this game, you can only ___ your counters on the green squares.",
            answers: [
              ["place", "put"]
            ]
          },
          {
            q: "___ the dice and try to get a six.",
            answers: [
              ["roll", "throw"]
            ]
          },
          {
            q: "If you have more counters on a square than your opponent, you can ___ that square.",
            answers: [
              ["take"]
            ]
          },
          {
            q: "You ___ points for every correct answer.",
            answers: [
              ["score", "get", "win"]
            ]
          },
          {
            q: "Players ___ turns to move their counters around the board.",
            answers: [
              ["take"]
            ]
          },
          {
            q: "These cards need to be placed face ___ in the middle, so everyone can see them.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "On your go, ___ ___ a card and read the question aloud.",
            answers: [
              ["turn"],
              ["over"]
            ]
          }
        ]
      },
      {
        type: "cards",
        title: "Board games",
        src: "SB 2, 4",
        items: [
          { front: "shuffle the cards", back: "тасувати карти", ex: "Shuffle the cards well before you deal." },
          { front: "deal", back: "роздавати (карти)", ex: "Deal five cards to each player." },
          { front: "face down / face up", back: "лицем донизу / догори", ex: "Leave the top card face up next to the pack." },
          { front: "roll the dice", back: "кидати кубики", ex: "Roll the dice to see who starts." },
          { front: "take turns", back: "ходити по черзі", ex: "We take turns to draw a card." },
          { front: "on your go", back: "у свій хід", ex: "On your go, you can move or swap a tile." },
          { front: "score points", back: "набирати очки", ex: "You score points for every word you make." },
          { front: "the initial phase", back: "початкова фаза", ex: "In the initial phase, everyone builds their army." },
          { front: "the ultimate goal", back: "кінцева мета", ex: "The ultimate goal is to reach the castle first." },
          { front: "pit your wits against", back: "змагатися розумом з кимось", ex: "Pit your wits against the computer." }
        ]
      },
      {
        type: "sort",
        title: "Head or tail?",
        src: "SB 7",
        categories: ["Head", "Tail"],
        items: [
          { text: "This game, it's a word game, right?", cat: 0 },
          { text: "The tiles, they show the city features.", cat: 0 },
          { text: "And what are they, the followers?", cat: 1 },
          { text: "He's a clever boy, this Matt.", cat: 1 },
          { text: "The road, that's where I'll put it.", cat: 0 },
          { text: "It's great, this game.", cat: 1 },
          { text: "My sister, she's a dentist.", cat: 0 },
          { text: "We loved it, that film.", cat: 1 }
        ]
      },
      {
        type: "transform",
        title: "Rewrite with a head (H) or tail (T), focusing on the noun phrase in brackets",
        src: "SB 9",
        items: [
          { q: "Olga works in marketing. (Olga – T)", models: ["She works in marketing, Olga."] },
          { q: "Those dice belong to Max. (those dice – H)", models: ["Those dice, they belong to Max."] },
          { q: "Ira and Ben are moving to Kharkiv. (Ira and Ben – H)", models: ["Ira and Ben, they're moving to Kharkiv."] },
          { q: "Brand-new phones aren't cheap. (brand-new phones – T)", models: ["They aren't cheap, brand-new phones."] },
          { q: "Is that the café where the famous poet used to write? (that café – H)", models: ["That café, is that where the famous poet used to write?"] },
          { q: "I think people from Lviv have a lovely accent. (people from Lviv – T)", models: ["I think they have a lovely accent, people from Lviv."] },
          { q: "Mark's really good at chess. (Mark – T)", models: ["He's really good at chess, Mark."] },
          { q: "I really like playing cards on a Friday night. (playing cards – H)", models: ["Playing cards on a Friday night, I really like that."] }
        ]
      },
      {
        type: "speak",
        title: "Explain the rules of a game",
        src: "SB 11–12",
        intro: "Explain how to play a game you know (a card game, a board game, a party game). Use board-game vocabulary and a few heads and tails to keep it sounding natural.",
        phrases: [
          "The ultimate goal is to…",
          "In the initial phase,…",
          "First, shuffle the cards and deal…",
          "You take turns to…",
          "On your go,…",
          "You score points for…",
          "The red counters, they…",
          "It's a great game, this."
        ],
        items: [
          {
            q: "Say what the game is and what the ultimate goal is.",
            models: [
              "It's a card game, this one. The ultimate goal is to get rid of all your cards before everybody else."
            ]
          },
          {
            q: "Explain how to set it up.",
            models: [
              "First, shuffle the cards and deal seven to each player. The rest, they go face down in a pile in the middle, and you turn the top one over."
            ]
          },
          {
            q: "Explain what happens on each go.",
            models: [
              "You take turns to play. On your go, you put down a card of the same colour or number. If you can't, you pick one up from the pile."
            ]
          },
          {
            q: "Explain how you score or win.",
            models: [
              "The special cards, they're the fun part – they make the next player miss a go. When you've got one card left, you shout 'Last one!' The first to finish wins the round and scores points for the cards left in other people's hands."
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
          { a: "I put the cards face…", b: "…down on the table." },
          { a: "The ultimate…", b: "…goal was to collect all the gold coins." },
          { a: "We all took…", b: "…turns to answer a question." },
          { a: "As soon as I rolled…", b: "…the dice, I knew I'd win." },
          { a: "In the initial…", b: "…phase, we had to choose a team." },
          { a: "I shuffled…", b: "…the cards as best I could." },
          { a: "None of us scored…", b: "…many points at all." },
          { a: "I placed my counter…", b: "…on the 'Start' square." }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "WB 2",
        intro: "A family game night with my competitive niece.",
        items: [
          { q: "I set up the board, then picked up the cards and ___ them well.", options: ["rolled", "shuffled"], answer: 1 },
          { q: "I ___ eight cards for each of us…", options: ["dealt", "placed"], answer: 0 },
          { q: "…then ___ the rest of the cards on a pile on the board.", options: ["placed", "took"], answer: 0 },
          { q: "I put the pile ___ down…", options: ["face", "place"], answer: 0 },
          { q: "…and turned the first card over so it was ___ up.", options: ["face", "scored"], answer: 0 },
          { q: "We ___ to pick up a card and move forward.", options: ["rolled dice", "took turns"], answer: 1 },
          { q: "We moved around the board, ___ our points as we went along.", options: ["scoring", "taking"], answer: 0 },
          { q: "We could ___ either the visible card or one from the pile.", options: ["place", "take"], answer: 1 },
          { q: "I lost the first game, but this was just the ___.", options: ["initial phase", "ultimate goal"], answer: 0 },
          { q: "By the end of the evening, I hoped to have achieved my ___: winning.", options: ["initial phase", "ultimate goal"], answer: 1 }
        ]
      },
      {
        type: "gap",
        title: "Complete with: being stuck in the house all day, my keys, my phone, the man across the road, the red tie, these instructions, these puppies, this steak",
        src: "WB 3",
        items: [
          {
            q: "They're all so adorable, ___.",
            answers: [
              ["these puppies"]
            ]
          },
          {
            q: "___, he's making a terrible noise again.",
            answers: [
              ["the man across the road"]
            ]
          },
          {
            q: "These aren't very clear, ___.",
            answers: [
              ["these instructions"]
            ]
          },
          {
            q: "___, it needs charging again.",
            answers: [
              ["my phone"]
            ]
          },
          {
            q: "___, it goes better with the grey suit.",
            answers: [
              ["the red tie"]
            ]
          },
          {
            q: "It's so boring, ___.",
            answers: [
              ["being stuck in the house all day"]
            ]
          },
          {
            q: "___, I've lost them again.",
            answers: [
              ["my keys"]
            ]
          },
          {
            q: "It's really tough and chewy, ___.",
            answers: [
              ["this steak"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentence so that it has a head to focus attention on something",
        src: "WB 4",
        items: [
          { q: "The bottom drawer needs tidying.", models: ["The bottom drawer, it needs tidying."] },
          { q: "My friend Oksana has been really busy lately.", models: ["My friend Oksana, she's been really busy lately."] },
          { q: "The sugar goes in last.", models: ["The sugar, it goes in last."] },
          { q: "The whole class stood up and cheered.", models: ["The whole class, they stood up and cheered."] },
          { q: "My grandparents are in Spain at the moment.", models: ["My grandparents, they're in Spain at the moment."] },
          { q: "The lift is at the end of the corridor.", models: ["The lift, it's at the end of the corridor."] },
          { q: "My brother loves to dance.", models: ["My brother, he loves to dance."] }
        ]
      },
      {
        type: "gap",
        title: "Complete the second sentence so that it has a tail to clarify something",
        src: "WB 5",
        items: [
          {
            q: "These shoes are too small. → They're too small, ___.",
            answers: [
              ["these shoes"]
            ]
          },
          {
            q: "The concert was brilliant. → It was brilliant, ___.",
            answers: [
              ["the concert"]
            ]
          },
          {
            q: "Those pigeons keep eating my seeds. → They keep eating my seeds, ___.",
            answers: [
              ["those pigeons"]
            ]
          },
          {
            q: "The forks go in the top drawer. → They go in the top drawer, ___.",
            answers: [
              ["the forks"]
            ]
          },
          {
            q: "This book isn't what I expected. → It's not what I expected, ___.",
            answers: [
              ["this book"]
            ]
          },
          {
            q: "The bus is running on time these days. → It's running on time these days, ___.",
            answers: [
              ["the bus"]
            ]
          },
          {
            q: "I couldn't finish the sudoku today. → I couldn't do it today, ___.",
            answers: [
              ["the sudoku"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Heads and tails: quick check",
        list: [
          "Head = noun phrase first, then a pronoun that refers back: That shop, it's closed.",
          "Tail = pronoun first, noun phrase at the end: It's closed, that shop.",
          "Always a comma between the parts; use them in speech, not in essays."
        ],
        uk: {
          h: "Heads і tails: швидка перевірка",
          list: [
            "Head = спершу іменникова група, потім займенник, що до неї відсилає: That shop, it's closed.",
            "Tail = спершу займенник, іменникова група — в кінці: It's closed, that shop.",
            "Між частинами завжди кома; вживайте їх у мовленні, а не в есе."
          ]
        }
      },
      {
        h: "Phrasal nouns",
        p: "Many phrasal verbs have a noun form. The stress usually falls on the first part: a BREAKdown, a TIP-off.",
        table: [
          ["break down → a breakdown", "a failure (of a machine, a relationship, health)"],
          ["tip off → a tip-off", "a secret warning or piece of information"],
          ["build up → a build-up", "an increase over time; the excitement before an event"],
          ["get together → a get-together", "an informal meeting or party"],
          ["burst out → an outburst", "a sudden show of emotion"],
          ["set out → the outset", "the very beginning"],
          ["crack down → a crackdown", "strong official action against something"],
          ["mix up → a mix-up", "a confusion, a mistake"],
          ["climb down → a climbdown", "backing down from a position"],
          ["add on → an add-on", "an extra part or feature"]
        ],
        uk: {
          h: "Фразові іменники",
          p: "Багато фразових дієслів мають форму іменника. Наголос зазвичай падає на першу частину: a BREAKdown, a TIP-off.",
          table: [
            ["break down → a breakdown", "поломка"],
            ["tip off → a tip-off", "наводка, анонімне попередження"],
            ["build up → a build-up", "накопичення; передматчевий ажіотаж"],
            ["get together → a get-together", "зустріч, посиденьки"],
            ["burst out → an outburst", "спалах (емоцій)"],
            ["set out → the outset", "самий початок"],
            ["crack down → a crackdown", "жорсткі заходи проти"],
            ["mix up → a mix-up", "плутанина"],
            ["climb down → a climbdown", "відступ від позиції"],
            ["add on → an add-on", "доповнення, додаткова опція"]
          ]
        }
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the sentence halves",
        src: "LB 10B",
        items: [
          { a: "Scrabble,", b: "that's my favourite game." },
          { a: "That hotel in the photo,", b: "that's where we stayed last year." },
          { a: "It always seems to be full of traffic,", b: "the road in front of my house." },
          { a: "He's not very open to new ideas,", b: "my boss." },
          { a: "The house at the end of my road,", b: "they always have their lights on." },
          { a: "They're lovely,", b: "my neighbours are." }
        ]
      },
      {
        type: "order",
        title: "Put the words in order to complete the conversations",
        src: "LB 10B",
        items: [
          { words: ["Fiona,", "she", "works", "in", "marketing"], answer: "Fiona, she works in marketing.", note: "A: Does she work in sales? B: No, …" },
          { words: ["That", "guy", "at", "the", "party,", "was", "that", "Chris?"], answer: "That guy at the party, was that Chris?" },
          { words: ["Pizza,", "that's", "what", "I", "like"], answer: "Pizza, that's what I like." },
          { words: ["That", "woman", "at", "the", "back,", "she's", "my", "aunt"], answer: "That woman at the back, she's my aunt." },
          { words: ["No,", "we", "don't", "eat", "meat,", "Sarah", "and", "I"], answer: "No, we don't eat meat, Sarah and I." }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "Check 10",
        items: [
          { q: "Which is natural?", options: ["My phone, I can't find it anywhere.", "I can't, my phone, find it anywhere."], answer: 0 },
          { q: "Which is natural?", options: ["It's difficult to use, this app.", "It's difficult this app, to use."], answer: 0 },
          { q: "Which is natural?", options: ["She's Vika, a brilliant violinist.", "She's a brilliant violinist, Vika."], answer: 1, explain: "The tail repeats the person the pronoun 'she' refers to." },
          { q: "Which is natural?", options: ["That woman over there, was it her?", "That woman, was it her over there?"], answer: 0 },
          { q: "Which is natural?", options: ["This is it, laptop, Anna's?", "This laptop, is it Anna's?"], answer: 1 },
          { q: "Which is natural?", options: ["He knows his stuff, Dmytro.", "He knows, Dmytro, his stuff."], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with a word from box A and a word from box B",
        src: "Check 10",
        intro: "A: face, initial, roll, score, take, ultimate. B: dice, down, goal, phase, points, turns.",
        items: [
          {
            q: "In the ___ ___ of the game, people choose which country they're going to be.",
            answers: [
              ["initial"],
              ["phase"]
            ]
          },
          {
            q: "Place the cards ___ ___ in a pile, so nobody can see them.",
            answers: [
              ["face"],
              ["down"]
            ]
          },
          {
            q: "In each round, players ___ ___ to move their counters.",
            answers: [
              ["take"],
              ["turns"]
            ]
          },
          {
            q: "At the start, players ___ the ___. The highest number goes first.",
            answers: [
              ["roll"],
              ["dice"]
            ]
          },
          {
            q: "You ___ ___ for correct answers.",
            answers: [
              ["score"],
              ["points"]
            ]
          },
          {
            q: "The ___ ___ is to be the first player to reach the 'Finish' square.",
            answers: [
              ["ultimate"],
              ["goal"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with a phrasal noun",
        src: "VB 10B",
        items: [
          {
            q: "The police are planning a ___ on drivers who use their phones.",
            answers: [
              ["crackdown"]
            ]
          },
          {
            q: "The basic model costs £300, but the price goes up with every ___ you choose.",
            answers: [
              ["add-on"]
            ]
          },
          {
            q: "Traffic is terrible on the motorway because of a ___.",
            answers: [
              ["breakdown"]
            ]
          },
          {
            q: "Let's get to the stadium early to enjoy the ___ before kick-off.",
            answers: [
              ["build-up"]
            ]
          },
          {
            q: "Right from the ___, I knew the project would be difficult.",
            answers: [
              ["outset"]
            ]
          },
          {
            q: "Police found the stolen paintings after an anonymous ___.",
            answers: [
              ["tip-off"]
            ]
          },
          {
            q: "We're having a small family ___ for Mum's birthday.",
            answers: [
              ["get-together"]
            ]
          },
          {
            q: "There was a ___ at the hotel and they gave our room to someone else.",
            answers: [
              ["mix-up"]
            ]
          },
          {
            q: "The minister's sudden ___ on taxes surprised everyone.",
            answers: [
              ["climbdown", "U-turn"]
            ]
          },
          {
            q: "He apologised for his angry ___ at the meeting.",
            answers: [
              ["outburst"]
            ]
          }
        ]
      },
      {
        type: "errors",
        title: "Is the short form correct? Correct the wrong ones",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/ellipsis",
        items: [
          { s: "'Will we lose again?' 'I don't hope so.'", ok: false, fix: "'Will we lose again?' 'I hope not.'" },
          { s: "'Did you win?' 'No, but I nearly do.'", ok: false, fix: "'Did you win?' 'No, but I nearly did.'" },
          { s: "She promised to teach me the rules, and she did so the following weekend.", ok: true },
          { s: "He can play chess much better than I do.", ok: false, fix: "He can play chess much better than I can." },
          { s: "That rule about the dice – I just don't get it.", ok: true },
          { s: "It's so annoying, losing on the very last turn.", ok: true },
          { s: "'Have you read the instructions?' 'No, but I'm going to read.'", ok: false, fix: "'Have you read the instructions?' 'No, but I'm going to.'" },
          { s: "'Has anyone seen the dice?' 'I think that.'", ok: false, fix: "'Has anyone seen the dice?' 'I think so.'" },
          { s: "I've never played Go, but my sister has.", ok: true },
          { s: "If you don't want to roll the dice, you don't have.", ok: false, fix: "If you don't want to roll the dice, you don't have to." }
        ]
      },
      {
        type: "transform",
        title: "Rewrite to avoid repetition or to add a head or tail",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/avoiding-repetition-text",
        items: [
          { q: "I'd like to try the new strategy game, but I don't think I'll have time to try the new strategy game.", models: ["I'd like to try the new strategy game, but I don't think I'll have time to."] },
          { q: "She said she would bring snacks and she brought snacks.", models: ["She said she would bring snacks and she did."] },
          { q: "Tom cheated at cards. Tom cheating at cards annoyed everyone.", models: ["Tom cheated at cards, which annoyed everyone.", "Tom cheated at cards. This annoyed everyone."] },
          { q: "Have you got any spare counters? If you have got any spare counters, can I borrow one?", models: ["Have you got any spare counters? If so, can I borrow one?"] },
          { q: "I asked him to put the game away, but he refused to put the game away.", models: ["I asked him to put the game away, but he refused to."] },
          { q: "That new board game is brilliant. (add a head)", start: "That new board game…", models: ["That new board game – it's brilliant."] },
          { q: "Your sister is a really good loser. (add a tail)", start: "She's…", models: ["She's a really good loser, your sister.", "She's a really good loser, she is."] }
        ]
      }
    ]
  }
});
