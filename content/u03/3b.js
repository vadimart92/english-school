/*
 * 3B Problems, problems
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "3B",
  unit: 3,
  letter: "B",
  title: "Problems, problems",
  uk: "Проблеми: підрядні причини, проблеми й рішення",
  goal: "solve a problem",
  focus: { grammar: "reason clauses", vocab: "problems and solutions", pron: "-le word endings" },
  learn: {
    theory: [
      {
        h: "Reason clauses: more than 'because'",
        p: "Причину можна ввести не тільки через because. Вибір слова показує, чи причина вже відома слухачеві, чи ми обґрунтовуємо свій коментар, чи говоримо про можливий наслідок, якого боїмося.",
        table: [
          [
            "Since / As / Seeing as / Given that + clause",
            "причина, яку слухач уже знає або яка очевидна обом; часто на початку речення",
            "Since you're already here, you might as well stay for dinner. / Seeing as it's raining, let's take the car."
          ],
          [
            "in that + clause",
            "уточнює чи обґрунтовує попередній коментар («у тому сенсі, що»); стоїть у другій частині речення",
            "The trip was a success, in that nobody got lost."
          ],
          [
            "insofar as / inasmuch as + clause",
            "те саме, але формальніше («настільки, наскільки»)",
            "The reform is fair, insofar as everyone pays the same rate."
          ],
          [
            "for fear of + (object) + -ing / noun",
            "дія, щоб уникнути небажаного наслідку",
            "I didn't mention it for fear of upsetting her. / We left early for fear of the traffic."
          ],
          [
            "at the risk of + -ing",
            "мовець свідомо йде на ризик (часто про себе: at the risk of sounding rude…)",
            "At the risk of repeating myself, please double-check the figures."
          ],
          [
            "-ing clause (Being…, Not wanting…, Having…)",
            "причина минулої дії; підмет той самий, що й у головному реченні",
            "Being short of money, I stayed at home. / Not wanting to wake anyone, I crept upstairs."
          ]
        ]
      },
      {
        h: "Watch out",
        list: [
          "Seeing as (не seeing that as / since as) — Seeing as you're free, why don't you come?",
          "for fear of + -ing / іменник, а не інфінітив: for fear of losing (NOT for fear of to lose / for fear of lose).",
          "in that + повне речення: I was lucky in that I had good teachers (NOT lucky in I had).",
          "insofar as (одне слово insofar), не insofar that.",
          "Вимова: у словах на -le (grapple, baffle, befuddle) кінцевий склад — «темний» /əl/ або складотворчий /l̩/: /ˈɡræpl̩/, /ˈbæfl̩/."
        ]
      },
      {
        h: "Problems and solutions",
        table: [
          ["take stock (of)", "зупинитися й оцінити ситуацію"],
          ["pin something down", "точно визначити, що саме не так"],
          ["root cause", "першопричина"],
          ["mull over / ponder / deliberate / ruminate", "довго й ретельно обмірковувати"],
          ["misinterpret / misconstrue / misread", "неправильно зрозуміти"],
          ["intuitive", "інтуїтивний, «на відчуття»"],
          ["underestimate", "недооцінити"],
          ["wrestle / grapple with; rack your brains", "боротися з проблемою; сушити голову"],
          ["befuddled / baffled / perplexed", "спантеличений"],
          ["go round in circles", "ходити по колу, не просуватися"],
          ["zero in on / shed light on", "зосередитися на / пролити світло на"]
        ]
      },
      {
        h: "Більше практики",
        p: "Онлайн-вправа на слова причини допоможе не плутати because і because of, since, as, due to та owing to.",
        links: [
          {
            title: "Perfect English Grammar: linking words of reason",
            url: "https://www.perfect-english-grammar.com/linking-words-reason-exercise-2.html",
            note: "because / because of / due to / owing to / since / as — вибрати правильний зв'язок"
          }
        ]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Problems and solutions",
        src: "SB 2–3",
        items: [
          { front: "take stock (of)", back: "зупинитися й оцінити ситуацію", ex: "Before we spend any more money, let's take stock of where we are." },
          { front: "pin it down", back: "точно визначити, у чому річ", ex: "Something about the plan bothers me, but I can't pin it down." },
          { front: "the root cause", back: "першопричина", ex: "Poor communication was the root cause of the delay." },
          { front: "mull something over", back: "обмірковувати щось", ex: "Can I mull it over and let you know on Monday?" },
          { front: "misinterpret", back: "неправильно витлумачити", ex: "He misinterpreted my silence as agreement." },
          { front: "intuitive", back: "інтуїтивний", ex: "She has an intuitive feel for what customers want." },
          { front: "underestimate", back: "недооцінити", ex: "Never underestimate how long a move takes." },
          { front: "wrestle with", back: "боротися з (проблемою, рішенням)", ex: "I've been wrestling with this decision for weeks." },
          { front: "befuddled", back: "спантеличений, збитий з пантелику", ex: "The tax form left me completely befuddled." },
          { front: "go round in circles", back: "ходити по колу, не просуваючись", ex: "We kept going round in circles until someone suggested a vote." },
          { front: "have a brainwave", back: "раптом придумати щось геніальне", ex: "Walking the dog, I had a brainwave." }
        ]
      },
      {
        type: "match",
        title: "Match the bold words from the blog with groups of words with similar meanings",
        src: "SB 3b",
        items: [
          { a: "befuddled", b: "perplexed, baffled" },
          { a: "mull over", b: "deliberate, ruminate, ponder" },
          { a: "pin down", b: "zero in on, shed light on" },
          { a: "misinterpret", b: "misconstrue, misread" },
          { a: "wrestle with", b: "rack your brains, grapple with" }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "SB 4",
        items: [
          { q: "We keep discussing the same points without deciding anything – we're just ___.", options: ["going round in circles", "zeroing in on it"], answer: 0 },
          { q: "I think you ___ what he meant. He was joking, not criticising you.", options: ["misinterpreted", "perplexed"], answer: 0 },
          { q: "Give me a few days to ___ the offer – it's a big decision.", options: ["mull over", "underestimate"], answer: 0 },
          { q: "Halfway through the year it's a good idea to ___ your progress.", options: ["take stock of", "misconstrue"], answer: 0 },
          { q: "I've read the instructions three times and I'm still completely ___.", options: ["baffled", "intuitive"], answer: 0 },
          { q: "Don't ___ how much work a puppy is – it's like having a baby.", options: ["underestimate", "grapple with"], answer: 0 },
          { q: "The engineers are still ___ the problem of overheating.", options: ["grappling with", "taking stock"], answer: 0 },
          { q: "Her report really ___ why sales had dropped.", options: ["shed light on", "racked her brains about"], answer: 0 }
        ]
      },
      {
        type: "choice",
        title: "Which word or phrase introduces the reason?",
        src: "SB 7",
        items: [
          { q: "I haven't asked for a pay rise for fear of being turned down.", options: ["for fear of", "asked for", "turned down"], answer: 0 },
          { q: "Seeing as none of the shops are open, let's eat at home.", options: ["Seeing as", "none of", "let's"], answer: 0 },
          { q: "Since we've already paid, we might as well go.", options: ["Since", "already", "might as well"], answer: 0 },
          { q: "That supplier is great value, in that they deliver for free.", options: ["in that", "great value", "for free"], answer: 0 },
          { q: "As nobody has any better ideas, let's go with Tom's plan.", options: ["As", "nobody", "let's go with"], answer: 0 },
          { q: "Not having a car, I had to rely on the bus.", options: ["Not having a car", "had to", "rely on"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Use the information to write reason clauses with the words in brackets",
        src: "SB 8",
        items: [
          { q: "He might get lost. Send him a map. (in case)", start: "Send", models: ["Send him a map in case he gets lost."] },
          { q: "I was lucky. My parents could help me with the deposit. (in that)", start: "I was lucky", models: ["I was lucky in that my parents could help me with the deposit."] },
          { q: "I was feeling ill. I left the party early. (as)", start: "As", models: ["As I was feeling ill, I left the party early.", "I left the party early as I was feeling ill."] },
          {
            q: "You've already met Kasia. I won't introduce you. (since)",
            start: "Since",
            models: [
              "Since you've already met Kasia, I won't introduce you.",
              "I won't introduce you since you've already met Kasia."
            ]
          },
          { q: "I didn't want to be late for the interview. I took an earlier train. (not wanting)", start: "Not wanting", models: ["Not wanting to be late for the interview, I took an earlier train."] },
          { q: "I haven't told my landlord about the leak. I'm scared he'll put the rent up. (fear)", start: "I haven't told", models: ["I haven't told my landlord about the leak for fear of him putting the rent up."] },
          { q: "This may sound rude, but I think your plan won't work. (at the risk of)", start: "At the risk of", models: ["At the risk of sounding rude, I don't think your plan will work."] }
        ]
      },
      {
        type: "speak",
        title: "Solve a problem with your partner",
        src: "SB 9–11",
        intro: "Choose a problem, invent the details (causes, people involved, what you've tried, consequences) and solve it together. Use reason clauses and vocabulary from the lesson.",
        phrases: [
          "since",
          "seeing as",
          "given that",
          "in that",
          "for fear of",
          "at the risk of",
          "root cause",
          "take stock",
          "pin",
          "mull",
          "round in circles",
          "underestimat",
          "misinterpret"
        ],
        items: [
          {
            q: "You suspect someone you know may be a criminal, but you're not sure.",
            models: [
              "Seeing as we've got no proof, I don't think we should go to the police yet. Let's take stock of what we actually know first."
            ]
          },
          {
            q: "Your boss is making your life at work really difficult.",
            models: [
              "I haven't complained for fear of losing my job, but I think the root cause is that she's under pressure herself."
            ]
          },
          {
            q: "Two people in your family are not talking to each other.",
            models: [
              "Given that they both want to come to the wedding, maybe we could try to pin down what really caused the argument."
            ]
          },
          {
            q: "Summarise your partner's problem and the solutions you found.",
            models: [
              "Kai's neighbours are very noisy. Since talking to them hasn't worked, we decided he should mull over moving, at the risk of sounding defeatist."
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
        title: "Choose the correct alternatives",
        src: "WB 1",
        items: [
          { q: "This meeting isn't getting anywhere. We're just going round in ___.", options: ["circles", "rounds"], answer: 0 },
          { q: "I've been racking my ___ all morning, but I can't remember her surname.", options: ["brains", "head"], answer: 0 },
          { q: "Let me mull ___ your suggestion and I'll call you tomorrow.", options: ["over", "onto"], answer: 0 },
          { q: "Something's wrong with the engine, but the mechanic can't ___ down what it is.", options: ["pin", "punch"], answer: 0 },
          { q: "I think the ___ cause of the conflict is jealousy.", options: ["root", "bottom"], answer: 0 },
          { q: "Maybe your sister can shed some ___ on what happened.", options: ["light", "sun"], answer: 0 },
          { q: "We need to zero ___ on the exact moment the data was lost.", options: ["in", "up"], answer: 0 },
          { q: "We're halfway through the renovation, so let's stop and ___ stock.", options: ["take", "make"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the words in the text",
        src: "WB 2",
        intro: "A blog post about taking breaks when solving problems. The first and last letters are given.",
        items: [
          {
            q: "I sometimes spend hours r___g my brain, trying to find a solution.",
            answers: [
              ["racking"]
            ],
            hint: "r…g"
          },
          {
            q: "Later, when I come back and m___l it over again, the answer often appears.",
            answers: [
              ["mull"]
            ],
            hint: "m…l"
          },
          {
            q: "Suddenly I have a b___e – a brilliant idea out of nowhere.",
            answers: [
              ["brainwave"]
            ],
            hint: "b…e"
          },
          {
            q: "Many famous scientists, when completely b___d by a problem, slept on it.",
            answers: [
              ["baffled"]
            ],
            hint: "b…d"
          },
          {
            q: "If we d___e on a problem for too long, our thinking gets stuck.",
            answers: [
              ["deliberate"]
            ],
            hint: "d…e"
          },
          {
            q: "We may z___o in on one small detail and miss the bigger picture.",
            answers: [
              ["zero"]
            ],
            hint: "z…o"
          },
          {
            q: "After a break, we're no longer p___d by the difficulty.",
            answers: [
              ["puzzled", "perplexed"]
            ],
            hint: "p…d"
          },
          {
            q: "Some researchers think the brain continues to p___r the problem while we rest.",
            answers: [
              ["ponder"]
            ],
            hint: "p…r"
          },
          {
            q: "We should never u___e the power of a short walk.",
            answers: [
              ["underestimate"]
            ],
            hint: "u…e"
          },
          {
            q: "Even if taking a break doesn't seem i___e at all, it works.",
            answers: [
              ["intuitive"]
            ],
            hint: "i…e"
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct option to complete the sentences",
        src: "WB 3",
        items: [
          { q: "I didn't mention the price for fear ___", options: ["of shocking you.", "shocking you."], answer: 0 },
          { q: "Shall we stay in tonight, seeing ___", options: ["in that we're both tired?", "as we're both tired?"], answer: 1 },
          { q: "Being late for the meeting, ___", options: ["I took a taxi.", "as I took a taxi."], answer: 0 },
          { q: "Why don't you join us, ___", options: ["since you've got the day off?", "since as you've got the day off?"], answer: 0 },
          { q: "My opinion, at the risk of ___, is that it's too expensive.", options: ["sound negative", "sounding negative"], answer: 1 },
          { q: "Learning to drive in the city is harder than in the country ___", options: ["in that there's more traffic.", "for fear of there's more traffic."], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Complete the conversation using the prompts in brackets",
        src: "WB 4",
        intro: "Max tells Lena that he's taking a year off university to train for a championship.",
        items: [
          {
            q: "I've decided to train full-time this year (fear / miss out) on the team.",
            start: "I've decided to train full-time this year",
            models: ["I've decided to train full-time this year for fear of missing out on the team."]
          },
          {
            q: "(since / championship / finish) by July, I can come back in September.",
            start: "Since",
            models: [
              "Since the championship will be finished by July, I can come back in September.",
              "Since the championship will have finished by July, I can come back in September."
            ]
          },
          { q: "OK then, (seeing / you / not / study), maybe you can help me with my essay.", start: "Seeing as", models: ["Seeing as you're not studying, maybe you can help me with my essay."] },
          { q: "(be new) to economics, I'm finding it really hard.", start: "Being", models: ["Being new to economics, I'm finding it really hard."] },
          { q: "Sure, (seeing / always help me), I'll find the time.", start: "Seeing as", models: ["Seeing as you always help me, I'll find the time."] },
          { q: "(risk / me / ask) a silly question, why did you choose economics?", start: "At the risk", models: ["At the risk of me asking a silly question, why did you choose economics?"] },
          { q: "It's important (in that / need / study) it for the job I want.", start: "It's important", models: ["It's important in that I need to study it for the job I want."] }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Beyond 'because'",
        table: [
          [
            "since / as / given that / seeing as + clause",
            "a reason the listener already knows",
            "Seeing as it'll be warm, let's have the party outside."
          ],
          [
            "in that + clause",
            "usually in the second part of the sentence",
            "This product isn't likely to sell well, in that it's quite a niche market."
          ],
          [
            "insofar as / inasmuch as + clause",
            "justify a comment, formal",
            "We don't expect much opposition, insofar as they'll benefit most."
          ],
          [
            "for fear of / at the risk of + (object) + -ing",
            "a possible outcome you want to avoid / accept",
            "We ordered extra for fear of them running out."
          ],
          ["-ing clause", "reason for past actions", "I've been up all night, trying to find a solution."]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the best linker",
        items: [
          { q: "___ there's nothing on TV tonight, let's go out.", options: ["Since", "In that", "For fear of"], answer: 0 },
          { q: "This product isn't likely to sell well, ___ it's quite a niche market.", options: ["for fear of", "in that", "at the risk of"], answer: 1 },
          { q: "We've ordered twice as many products ___ them running out.", options: ["given that", "for fear of", "seeing as"], answer: 1 },
          { q: "I didn't tell my boss about the mistake, ___ it wasn't serious.", options: ["given that", "for fear of", "at the risk of"], answer: 0 },
          { q: "___ sounding rude, I have to say I disagree.", options: ["In that", "At the risk of", "Seeing as"], answer: 1 },
          { q: "___ you're already here, why don't you stay for dinner?", options: ["Seeing as", "In that", "For fear of"], answer: 0 },
          { q: "___ that I had no time, I took a taxi.", options: ["Given", "Since", "Seeing"], answer: 0 },
          { q: "___ to miss my train, I left the meeting early.", options: ["Not wanting", "In that", "Given"], answer: 0, explain: "An -ing clause gives the reason for a past action." }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "Justify your decisions (revision Task 11)",
        phrases: [
          "since",
          "as",
          "given that",
          "seeing as",
          "in that",
          "insofar as",
          "inasmuch as",
          "for fear of",
          "at the risk of"
        ],
        items: [
          {
            q: "You didn't tell your boss about a small mistake.",
            models: [
              "I didn't tell my boss for fear of losing their trust.",
              "Given that it wasn't serious, I fixed it myself."
            ]
          },
          { q: "You chose not to attend a meeting.", models: ["Seeing as the agenda had nothing to do with my team, I skipped it."] },
          { q: "You decided to move to a smaller flat.", models: ["Since rent had gone up so much, I moved to a smaller flat."] },
          { q: "You didn't correct someone during a presentation.", models: ["I kept quiet for fear of embarrassing them in front of everyone."] },
          { q: "You refused a job offer.", models: ["I refused it, in that the salary was lower than what I earn now."] },
          { q: "You left a meeting early.", models: ["Not wanting to miss my train, I left early."] },
          { q: "You changed your learning strategy.", models: ["Given that I kept forgetting new words, I started using flashcards."] },
          { q: "You didn't argue back in a discussion.", models: ["At the risk of looking weak, I chose not to argue."] },
          { q: "You decided to buy something expensive.", models: ["Seeing as my old laptop kept crashing, I bought a new one."] },
          { q: "You apologised even though it wasn't fully your fault.", models: ["I apologised, insofar as I had played a part in it."] }
        ],
        src: "Revision"
      },
      {
        type: "order",
        title: "Put the words in the correct order to complete the sentences",
        src: "LB 3B",
        items: [
          { words: ["route", "choose", "you", "area", "know", "as", "Seeing", "you", "the", "best", "should", "the"], answer: "Seeing as you know the area best, you should choose the route." },
          { words: ["weekday", "it's", "given", "much", "won't", "We", "need", "food", "that", "a"], answer: "We won't need much food, given that it's a weekday." },
          { words: ["month", "the", "that", "visit", "for", "isn't", "August", "ideal", "a", "in", "it's", "busiest"], answer: "August isn't ideal for a visit, in that it's the busiest month." },
          { words: ["pharmacy", "an", "looking", "city", "over", "walked", "I", "all", "the", "still", "for", "open"], answer: "I walked all over the city, still looking for an open pharmacy." },
          {
            words: [
              "down",
              "price",
              "of",
              "for",
              "in",
              "the",
              "didn't",
              "We",
              "sell",
              "house",
              "spring",
              "fear",
              "the",
              "going"
            ],
            answer: "We didn't sell the house in spring for fear of the price going down."
          }
        ]
      },
      {
        type: "errors",
        title: "Correct the mistake in each sentence",
        src: "LB 3B",
        items: [
          { s: "Since as there's nothing on TV, let's play a board game.", ok: false, fix: "Since there's nothing on TV, let's play a board game." },
          { s: "We phoned every hotel in town, try to find a free room.", ok: false, fix: "We phoned every hotel in town, trying to find a free room." },
          { s: "Book your tickets now, for fear of them to sell out.", ok: false, fix: "Book your tickets now, for fear of them selling out." },
          { s: "I'd love to see the film, given as you enjoyed it so much.", ok: false, fix: "I'd love to see the film, given that you enjoyed it so much." },
          { s: "We were lucky in we had a local guide.", ok: false, fix: "We were lucky in that we had a local guide." },
          { s: "At the risk for stating the obvious, we should leave now.", ok: false, fix: "At the risk of stating the obvious, we should leave now." },
          { s: "Keep your passport in the safe as that you don't lose it.", ok: false, fix: "Keep your passport in the safe so that you don't lose it." },
          { s: "The event was a success insofar that the money was concerned.", ok: false, fix: "The event was a success insofar as the money was concerned." },
          { s: "Not wanting to disturb anyone, I left without saying goodbye.", ok: true }
        ]
      },
      {
        type: "gap",
        title: "Replace the words in brackets with befuddled, intuitive, misinterpret, mull over or underestimate",
        src: "Check 3a",
        items: [
          {
            q: "Legal documents always leave me completely ___. (really confused)",
            answers: [
              ["befuddled"]
            ]
          },
          {
            q: "I prefer to ___ a decision quietly on my own. (think about)",
            answers: [
              ["mull over"]
            ]
          },
          {
            q: "I always ___ how long the journey takes, so I'm often late. (guess too little about)",
            answers: [
              ["underestimate"]
            ]
          },
          {
            q: "I'm a logical person – I'm not very ___. (relying on feelings)",
            answers: [
              ["intuitive"]
            ]
          },
          {
            q: "I'm very direct, and people sometimes ___ my comments as rudeness. (understand incorrectly)",
            answers: [
              ["misinterpret"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "Check 4a",
        items: [
          { a: "Not wanting to wake the baby,", b: "I tiptoed into the kitchen." },
          { a: "I always did well in chemistry,", b: "since it was the subject I enjoyed most." },
          { a: "I set off two hours early", b: "for fear of missing the flight." },
          { a: "He was a difficult colleague,", b: "in that he never shared information." },
          { a: "Seeing as the last bus had gone,", b: "I had to walk home." },
          { a: "I spent the whole morning on the phone,", b: "trying to get someone to fix the boiler." }
        ]
      },
      {
        type: "gap",
        title: "Complete the persuasive sentences (beneficial, confident, dire, flourished, known, surge, undeniable, worsening)",
        src: "Skills 3B",
        intro: "Persuasive language for a proposal.",
        items: [
          {
            q: "Green spaces are ___ to reduce stress levels.",
            answers: [
              ["known"]
            ]
          },
          {
            q: "Many families in the area are in ___ need of support.",
            answers: [
              ["dire"]
            ]
          },
          {
            q: "The need for a youth centre is ___.",
            answers: [
              ["undeniable"]
            ]
          },
          {
            q: "Towns that opened similar centres have since ___.",
            answers: [
              ["flourished"]
            ]
          },
          {
            q: "The project would lead to a huge ___ of interest in local sport.",
            answers: [
              ["surge"]
            ]
          },
          {
            q: "I am ___ that you will see the value of this proposal.",
            answers: [
              ["confident"]
            ]
          },
          {
            q: "Air quality in the city centre is ___ year by year.",
            answers: [
              ["worsening"]
            ]
          },
          {
            q: "Research shows that regular exercise is highly ___.",
            answers: [
              ["beneficial"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Do these words describe a problem or the suggested solution?",
        src: "Skills 3B",
        categories: ["problem", "solution"],
        items: [
          { text: "a cause for concern", cat: 0 },
          { text: "distressing", cat: 0 },
          { text: "inferior", cat: 0 },
          { text: "perplexing", cat: 0 },
          { text: "troubling", cat: 0 },
          { text: "daring", cat: 1 },
          { text: "magical", cat: 1 },
          { text: "phenomenal", cat: 1 },
          { text: "revolutionary", cat: 1 },
          { text: "uplifting", cat: 1 }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct linker",
        src: "extra: https://www.perfect-english-grammar.com/linking-words-reason-exercise-2.html",
        items: [
          { q: "The match was postponed ___ the waterlogged pitch.", options: ["because", "because of", "since"], answer: 1, explain: "Перед іменником — because of; because і since вимагають підрядного речення." },
          { q: "___ you've already paid, we might as well go in.", options: ["Due to", "Seeing as", "Owing to"], answer: 1, explain: "Due to / owing to + іменник; перед реченням — seeing as." },
          { q: "His absence was ___ a family emergency.", options: ["due to", "because", "since"], answer: 0, explain: "Після be + іменник — due to (= caused by)." },
          { q: "The essay is weak ___ it lacks a clear argument.", options: ["in that", "so that", "in case"], answer: 0, explain: "in that уточнює, у чому саме полягає слабкість." },
          { q: "She kept quiet ___ offending her boss.", options: ["for fear of", "in case of", "at the risk of"], answer: 0, explain: "Вона уникала наслідку → for fear of. At the risk of — свідомо йти на ризик." },
          { q: "___ sounding pessimistic, I doubt we'll hit the target.", options: ["For fear of", "At the risk of", "Owing to"], answer: 1, explain: "Мовець свідомо ризикує здатися песимістом." },
          { q: "___ a lack of funding, the project was shelved.", options: ["Since", "Owing to", "As"], answer: 1, explain: "Since / as + речення; перед іменником — owing to." },
          { q: "The method is useful ___ it can be applied to any dataset.", options: ["insofar that", "insofar as", "in so"], answer: 1, explain: "Правильно лише insofar as." },
          { q: "___ exhausted, he went straight to bed.", options: ["Being", "Because", "Since of"], answer: 0, explain: "-ing clause з тим самим підметом: Being exhausted…" }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentences using the word in capitals",
        src: "extra: https://www.perfect-english-grammar.com/linking-words-reason-exercise-2.html",
        items: [
          {
            q: "We cancelled the picnic because it was raining heavily. (OWING)",
            models: [
              "We cancelled the picnic owing to the heavy rain.",
              "We cancelled the picnic owing to the fact that it was raining heavily."
            ]
          },
          { q: "You know the area, so you should be the one to drive. (SEEING)", models: ["Seeing as you know the area, you should be the one to drive."] },
          { q: "I didn't ask any questions because I was afraid I would look stupid. (FEAR)", models: ["I didn't ask any questions for fear of looking stupid."] },
          {
            q: "The plan has one advantage: it costs nothing. (THAT)",
            models: [
              "The plan is advantageous in that it costs nothing.",
              "The plan has an advantage in that it costs nothing."
            ]
          },
          { q: "I didn't know anyone at the party, so I left early. (KNOWING)", models: ["Not knowing anyone at the party, I left early."] },
          { q: "Considering the circumstances, the team did remarkably well. (GIVEN)", models: ["Given the circumstances, the team did remarkably well."] },
          { q: "I may sound ungrateful, but I'd rather not go. (RISK)", models: ["At the risk of sounding ungrateful, I'd rather not go."] },
          {
            q: "The road was closed because a lorry had overturned. (AS)",
            models: [
              "As a lorry had overturned, the road was closed.",
              "The road was closed as a lorry had overturned."
            ]
          }
        ]
      }
    ]
  }
});
