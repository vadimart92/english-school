/*
 * Module 1 content.
 * Sources: "Module test 1, revision" (Tasks 1–13) and Language bank pp.146–150 (1A–3C).
 * Rules are paraphrased; model answers come from the revision key where it exists.
 *
 * Exercise types understood by app.js:
 *   choice    – pick one option            {q, options[], answer, explain?}
 *   gap       – type the missing words     {q with ___ per gap, answers[[alt...] per gap], hint?}
 *   order     – build a sentence from words{words[], answer, alts?[]}
 *   transform – rewrite / free answer      {q, start?, models[]}
 *   errors    – is the sentence correct?   {s, ok, fix?}
 *   cards     – flashcards                 {front, back, ex?}
 *   match     – pair terms with meanings   {a, b}
 *   sort      – drop items into categories {categories[], items[{text, cat}]}
 *   speak     – free production with target phrases {phrases[], items[{q, models[]}]}
 */
window.MODULE1 = {
  title: "Module 1 · Revision",
  topics: [
    /* ------------------------------------------------------------------ 1A */
    {
      id: "perfect",
      ref: "1A",
      kind: "grammar",
      title: "Present, past and future perfect",
      uk: "Перфектні часи: погляд назад від певної точки",
      theory: [
        {
          h: "The idea",
          p: "Perfect forms look back from a point in time (now, then, or a future moment) to an earlier event or process.",
          ex: ["I'll have had this phone for five years soon.", "I'd just passed my test, so I was really happy."]
        },
        {
          h: "Simple vs continuous",
          p: "Continuous (have been + -ing) for earlier processes and activities; simple (have + V3) for complete events or a number of times. State verbs (know, cost, own) normally stay simple.",
          ex: ["I've been trying to call you for hours.", "I'm happy because I've passed my test.", "How long have you known them? (NOT have you been knowing)"]
        },
        {
          h: "Four main uses",
          list: [
            "Measuring time up to a point: for, since, how long…",
            "Direct results of earlier events, often with so / because",
            "Experiences up to a point: ever, never, before, already, yet, times",
            "Recent news and trends: I've just seen a squirrel… but it's gone now."
          ]
        },
        {
          h: "Negatives change the meaning",
          p: "Negative simple = the last time was long ago. Negative continuous = the activity started only recently.",
          ex: ["I haven't used this website for years. (= last used it years ago)", "I haven't been using this website for long. (= started recently)"]
        },
        {
          h: "Specific past time",
          p: "Past perfect and future perfect can take a specific earlier time; present perfect cannot.",
          ex: ["I'd hurt my back the previous week, so I couldn't carry the boxes.", "I've hurt my back, so I can't carry those boxes. (NOT … last week)"]
        }
      ],
      exercises: [
        {
          type: "choice",
          title: "Choose the correct alternative",
          items: [
            { q: "Ricky's upset because somebody has ___ the side of his car.", options: ["scratched", "been scratching"], answer: 0, explain: "A finished action with a visible result → simple." },
            { q: "I haven't ___ a tie for years – they're so uncomfortable!", options: ["worn", "been wearing"], answer: 0, explain: "Negative simple = the last time was years ago." },
            { q: "I've ___ about ten cliffs so far.", options: ["climbed", "been climbing"], answer: 0, explain: "A number of times (ten cliffs) → simple." },
            { q: "…but I've never ___ it without safety harnesses.", options: ["done", "been doing"], answer: 0, explain: "Experience with never → simple." },
            { q: "My eyes are red because I've ___ onions.", options: ["chopped", "been chopping"], answer: 1, explain: "The activity explains the present evidence (red eyes) → continuous." },
            { q: "Don't worry – I haven't ___.", options: ["cried", "been crying"], answer: 1, explain: "Denying the activity that would explain the red eyes → continuous." },
            { q: "Oh, what a nice surprise! We've just ___ about you.", options: ["talked", "been talking"], answer: 1, explain: "An activity in progress until just now → continuous." },
            { q: "…about the fact that we haven't ___ you for ages.", options: ["seen", "been seeing"], answer: 0, explain: "Negative simple + for ages = the last time was long ago." }
          ]
        },
        {
          type: "gap",
          title: "Put the verb into the correct perfect form",
          items: [
            { q: "Ricky was upset when we saw him because somebody ___ the side of his car.", hint: "scratch", answers: [["had scratched"]] },
            { q: "I'm going to wear a tie for tomorrow's presentation. It's the first time I ___ a tie for years.", hint: "wear", answers: [["will have worn", "'ll have worn", "have worn", "'ve worn"]] },
            { q: "Vera is planning to climb a huge cliff next year. She ___ about ten cliffs by then.", hint: "climb", answers: [["will have climbed", "'ll have climbed"]] },
            { q: "…but it'll be the first time she ___ it without safety harnesses.", hint: "do", answers: [["will have done", "'ll have done"]] },
            { q: "Chris's eyes were all red. It looked like he ___, but in fact he ___ onions.", hint: "cry / chop", answers: [["had been crying", "'d been crying"], ["had been chopping", "'d been chopping"]] },
            { q: "It was weird to see Freda at the party, especially because we ___ about her.", hint: "just / talk", answers: [["had just been talking", "'d just been talking"]] },
            { q: "It was the first time I ___ someone from my childhood in years.", hint: "see", answers: [["had seen", "'d seen"]] },
            { q: "Last week, I was really tired because I ___ all day.", hint: "work", answers: [["had been working", "'d been working"]] },
            { q: "By this time next year, I ___ the course I'm doing now.", hint: "complete", answers: [["will have completed", "'ll have completed"]] },
            { q: "By the end of this year, I ___ in this city for five years.", hint: "live", answers: [["will have been living", "'ll have been living", "will have lived", "'ll have lived"]] }
          ]
        },
        {
          type: "speak",
          title: "Your own ideas (revision Task 1)",
          intro: "Finish the sentences about your life. Use a perfect form – simple or continuous.",
          phrases: ["had seen", "had been", "will have", "have been", "have tried", "had been working", "will have been"],
          items: [
            { q: "It was the first time I ___ in years.", models: ["It was the first time I had seen my school friend in years. (past perfect: earlier than a past moment)"] },
            { q: "By this time next year, I ___ something important that I'm working on now.", models: ["By this time next year, I will have finished my degree. (future perfect: completed before a future point)"] },
            { q: "I ___ to do something recently, but I still haven't managed to do it.", models: ["I have been trying to fix my sleep schedule recently. (best: present perfect continuous)", "I have tried to fix… (simple: less focus on duration)"] },
            { q: "By the end of this year, I ___ in the same job / city for … years.", models: ["By the end of this year, I will have been living in Kyiv for five years.", "…I will have lived here for five years. (both fine: process vs result)"] },
            { q: "Last week, I was really tired because I ___ all day.", models: ["…because I had been studying all day. (earlier continuous activity → past perfect continuous)"] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 1B */
    {
      id: "raising",
      ref: "1B",
      kind: "grammar",
      title: "Subject raising: seem, appear, turn out, happen",
      uk: "Підняття підмета: It seems that… → He seems to…",
      theory: [
        {
          h: "The pattern",
          p: "The subject of a that-clause moves 'up' to become the subject of the main verb, followed by a to-infinitive.",
          ex: ["It seems that you're unhappy. → You seem to be unhappy."]
        },
        {
          h: "Where it's used",
          list: [
            "seem, appear, turn out, happen: They appear to be late.",
            "adjectives of probability: She's likely to know.",
            "passive reporting verbs: She's said to be furious."
          ]
        },
        {
          h: "Negatives",
          p: "Two ways to make it negative.",
          ex: ["She seems not to have noticed.", "She doesn't seem to have noticed."]
        },
        {
          h: "Choose the infinitive",
          table: [
            ["simple", "to be", "He seems to be ill. (now, state)"],
            ["continuous", "to be doing", "He seems to be sleeping. (in progress now)"],
            ["perfect", "to have done", "He seems to have completed the task. (earlier, complete)"],
            ["perfect continuous", "to have been doing", "He seems to have been working all day. (earlier, in progress)"]
          ]
        }
      ],
      exercises: [
        {
          type: "choice",
          title: "Which infinitive?",
          items: [
            { q: "He looks very tired today. He seems ___ all day.", options: ["to work", "to be working", "to have been working"], answer: 2, explain: "An earlier activity in progress → perfect continuous infinitive." },
            { q: "It seems (now) that he cheated (earlier). → He seems ___.", options: ["to cheat", "to have cheated", "to be cheating"], answer: 1, explain: "Earlier, completed action → perfect infinitive." },
            { q: "It seemed (yesterday) that he was lying (at the time). → He seemed ___.", options: ["to be lying", "to have lied", "to lie"], answer: 0, explain: "Same time as 'seemed', in progress → continuous infinitive." },
            { q: "It seemed that he had been lying. → He seemed ___.", options: ["to be lying", "to have been lying", "to have lied"], answer: 1, explain: "Earlier than 'seemed' and in progress → perfect continuous." },
            { q: "A student suddenly looks confused during a test. He seems ___ the task.", options: ["to misunderstand", "to have misunderstood", "to be misunderstood"], answer: 1, explain: "The misunderstanding happened before now → perfect infinitive." },
            { q: "Two students stop talking when you come closer. They appear ___ something private.", options: ["to be discussing", "to discuss", "to have discussed"], answer: 0, explain: "In progress at the moment → continuous infinitive." }
          ]
        },
        {
          type: "gap",
          title: "Complete the conversation (Language bank 1B)",
          intro: "Use the words in brackets in the correct form.",
          items: [
            { q: "I left my jacket here earlier, but when I came back, my wallet ___ from the pocket.", hint: "turn out / go", answers: [["turned out to have gone", "had turned out to have gone"]] },
            { q: "You ___ who took it, did you?", hint: "not / happen / notice", answers: [["didn't happen to notice", "did not happen to notice"]] },
            { q: "Well, there was a man who ___ suspiciously.", hint: "seem / act", answers: [["seemed to be acting", "seemed to act"]] },
            { q: "He ___ some kind of motorbike helmet.", hint: "appear / wear", answers: [["appeared to be wearing"]] },
            { q: "When he approached your chair, he ___ something up.", hint: "appear / pick", answers: [["appeared to pick", "appeared to have picked"]] },
            { q: "OK, I'm going to call the police. I guess I ___ my money again.", hint: "unlikely / see", answers: [["am unlikely to see", "'m unlikely to see"]] }
          ]
        },
        {
          type: "transform",
          title: "Rewrite with it + that-clause",
          items: [
            { q: "We turned out to have been standing in the wrong queue.", start: "It turned out", models: ["It turned out that we had been standing in the wrong queue.", "It turned out that we'd been standing in the wrong queue."] },
            { q: "The house appeared not to have been lived in for years.", start: "It appeared", models: ["It appeared that the house hadn't been lived in for years.", "It appeared that the house had not been lived in for years."] },
            { q: "There seems to have been a power cut last night.", start: "It seems", models: ["It seems that there was a power cut last night.", "It seems that there had been a power cut last night."] },
            { q: "Do you need some help with your essay? I happen to have written one on that topic last week.", start: "It happens", models: ["It happens that I wrote one on that topic last week."] },
            { q: "They might appear to be ignoring you.", start: "It might appear", models: ["It might appear that they're ignoring you.", "It might appear that they are ignoring you."] }
          ]
        },
        {
          type: "speak",
          title: "What's going on? (revision Task 2)",
          intro: "Respond with a full sentence using appear / seem / turn out / happen.",
          phrases: ["seems to", "seem to", "appears to", "appear to", "turns out", "turned out", "happens", "happened to", "it seems"],
          items: [
            { q: "Nobody is in the classroom, but the lights are on.", models: ["It seems the class has already finished.", "Everyone seems to have left."] },
            { q: "A student arrives late and says nothing about it. Later you learn why.", models: ["It turns out they had missed the bus.", "It turned out they had overslept."] },
            { q: "Two students are speaking very quietly and stop when you come closer.", models: ["They appear to be discussing something private."] },
            { q: "A student suddenly looks confused during a test.", models: ["He seems to have misunderstood the task.", "He seems to be struggling."] },
            { q: "You discover a student didn't submit homework, but it wasn't intentional.", models: ["It turns out they had forgotten.", "It turns out they hadn't realised the deadline."] },
            { q: "A colleague unexpectedly arrives with flowers.", models: ["It happens that they are celebrating something.", "They seem to be celebrating something."] },
            { q: "A student looks much more confident than last week.", models: ["They seem to have improved.", "They seem to have been practising."] },
            { q: "A student is smiling a lot after checking their phone.", models: ["They seem to have received good news."] },
            { q: "The teacher's bag is open and something is missing.", models: ["A phone appears to have been stolen."] },
            { q: "A student joins the lesson looking surprised to see everyone.", models: ["It turns out they didn't know about the lesson.", "They seem to have forgotten the time."] },
            { q: "Two students are laughing while looking at the same notebook.", models: ["They seem to be sharing something funny.", "They seem to have found something funny."] },
            { q: "A student hasn't spoken much all lesson and is avoiding eye contact.", models: ["They seem to be feeling uncomfortable.", "They seem to have had a bad day."] },
            { q: "A student passed a very difficult exam without much preparation.", models: ["It turns out they had already studied it.", "They appear to have had some prior knowledge."] },
            { q: "A student suddenly becomes very active in discussion after being quiet.", models: ["They appear to have changed their opinion.", "They seem to have gained confidence."] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 1C */
    {
      id: "infinitive-phrases",
      ref: "1C",
      kind: "grammar",
      title: "Infinitive phrases",
      uk: "Вставні інфінітивні фрази: to be honest, to put it mildly…",
      theory: [
        {
          h: "Before or after",
          p: "Most infinitive phrases can go before or after the statement they comment on.",
          ex: ["It wasn't great. To be honest, I hated it.", "It wasn't great. I hated it, to be honest."],
          list: ["to give them their proper name / title", "not to put too fine a point on it", "to be sure", "to be honest / frank", "to tell the truth", "to be fair"]
        },
        {
          h: "Usually before",
          p: "Some show how the statement relates to earlier information, so they come first.",
          ex: ["I was worried about visiting my in-laws, but needless to say, everyone was extremely kind."],
          list: ["needless to say", "to cap it all", "to add insult to injury", "to make matters worse"]
        },
        {
          h: "Usually after",
          p: "Some say the reality is more extreme than your words, or that you could say more. They follow the statement.",
          ex: ["The meeting was boring, to put it mildly."],
          list: ["to put it mildly", "to put it bluntly", "to name (but / just) a few", "to say the least"]
        }
      ],
      exercises: [
        {
          type: "cards",
          title: "Flashcards: what does it signal?",
          items: [
            { front: "to put it mildly", back: "the truth is worse than what I said", ex: "The meeting was boring, to put it mildly." },
            { front: "to say the least", back: "I'm understating it; it was much more", ex: "I was disappointed, to say the least." },
            { front: "needless to say", back: "obviously / as you'd expect", ex: "Needless to say, everyone was extremely kind." },
            { front: "to add insult to injury", back: "to make a bad situation even worse (and more offensive)", ex: "He took my car and, to add insult to injury, spilt crisps all over the seats." },
            { front: "to make matters worse", back: "on top of an already bad situation", ex: "To make matters worse, thieves used my information." },
            { front: "to cap it all", back: "as the final (usually bad) thing in a series", ex: "We missed the train and, to cap it all, it started raining." },
            { front: "not to put too fine a point on it", back: "to speak directly, even if it's unpleasant", ex: "Not to put too fine a point on it, you've wasted your money." },
            { front: "to name but a few", back: "these are only some examples", ex: "She plays the guitar, the violin and the saxophone, to name but a few." },
            { front: "to give it its proper title", back: "using the official or correct name", ex: "Oversharing or, to give it its proper title, …" },
            { front: "to cut a long story short", back: "skipping the details, here's the result", ex: "To cut a long story short, I lost two friends." },
            { front: "to be fair", back: "to be balanced and give credit", ex: "To be fair, it was the first time I'd tried." },
            { front: "to put it bluntly", back: "to say it directly, without softening", ex: "To put it bluntly, your plan won't work." }
          ]
        },
        {
          type: "choice",
          title: "Choose the right phrase (Language bank 1C)",
          items: [
            { q: "My presentation is about the perils of posting too much personal information online, or oversharing, ___.", options: ["to give it its proper title", "to make matters worse"], answer: 0 },
            { q: "It was great at first, but ___, I ended up losing two of my best friends.", options: ["to cut a long story short", "to give a simple example"], answer: 0 },
            { q: "It was very embarrassing, ___.", options: ["to be precise", "to put it mildly"], answer: 1 },
            { q: "But then, ___, some thieves used my personal information to raid my bank account.", options: ["to give it its proper title", "to make matters worse"], answer: 1 },
            { q: "I was disappointed, ___, but I guess I've learnt a few valuable lessons.", options: ["to say the least", "to put it bluntly"], answer: 0 },
            { q: "Which position is natural? '___ everything turned out OK in the end.'", options: ["Needless to say, (before)", "…in the end, needless to say. (after)"], answer: 0, explain: "'Needless to say' links to earlier information, so it normally comes first." },
            { q: "Which is natural?", options: ["The party was a disaster, to put it mildly.", "To put it mildly, the party was a disaster."], answer: 0, explain: "'To put it mildly' usually follows the statement." }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 2A */
    {
      id: "continuous",
      ref: "2A",
      kind: "grammar",
      title: "The continuous aspect",
      uk: "Тривалий аспект: фокус на дії, а не на результаті",
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
          ex: ["I heard someone shouting in the street. (repeated, ongoing)", "I heard someone shout in the street. (once)"]
        },
        {
          h: "Stative verbs",
          p: "Verbs with a stative meaning don't normally take the continuous. Some verbs change meaning.",
          ex: ["I believed it was possible. (NOT was believing)", "I don't feel well. / I'm not feeling well. (no difference)", "I think it's a great idea. (= believe) / I'm thinking about dinner. (= actively thinking)"]
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
          ]
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
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 2B */
    {
      id: "probability",
      ref: "2B",
      kind: "grammar",
      title: "Probability",
      uk: "Ймовірність: likely, sure, bound, possible",
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
        }
      ],
      exercises: [
        {
          type: "gap",
          title: "Complete with one word",
          items: [
            { q: "It's unlikely ___ they'll agree to this.", answers: [["that"]] },
            { q: "The finance department are sure ___ reject the budget.", answers: [["to"]] },
            { q: "She's highly ___ to agree, because it's in her best interests.", answers: [["likely"]] },
            { q: "___'s possible we'll get there early at this rate.", answers: [["it"]] },
            { q: "We ___ certain this will get approved.", answers: [["are", "feel"]] },
            { q: "Craig's unlikely ___ have already bought her present.", answers: [["to"]] },
            { q: "You're bound ___ get the job, I'm sure of it.", answers: [["to"]] },
            { q: "I'm sure ___ things will get better for you soon.", answers: [["that"]] }
          ]
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
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 2C */
    {
      id: "cleft",
      ref: "2C",
      kind: "grammar",
      title: "Cleft sentences",
      uk: "Розщеплені речення: It was… who… / What… is…",
      theory: [
        {
          h: "It-clefts",
          p: "Start with It + be to focus on the important (new) information; the rest of the sentence links it to what's known.",
          ex: ["It's Jamie who plays tennis, not Jane.", "It's tennis that Jamie plays, not badminton.", "It wasn't Sally who stole your watch.", "It was because of her hard work that she won."]
        },
        {
          h: "What-clefts",
          p: "The What-clause holds the known information; the part after be is new.",
          ex: ["What I love most are horror movies.", "What she did was (to) ask them for more money. (verb → did + infinitive)", "What I hate is being ignored. (gerund → gerund)"]
        },
        {
          h: "All-clefts",
          p: "To emphasise one thing above everything else, replace What with All.",
          ex: ["All I need is another two weeks."]
        }
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
          ]
        },
        {
          type: "transform",
          title: "Rewrite beginning with the word given",
          items: [
            { q: "I hate people that don't clean up after themselves.", start: "What", models: ["What I hate is people that don't clean up after themselves."] },
            { q: "I didn't call you late last night.", start: "It", models: ["It wasn't me who called you late last night.", "It wasn't me that called you late last night.", "It wasn't I who called you late last night."] },
            { q: "He was arrested because he stole a car.", start: "It", models: ["It was because he stole a car that he was arrested."] },
            { q: "We just need a bit more money.", start: "All", models: ["All we need is a bit more money."] },
            { q: "She stayed up all night to finish her essay.", start: "What", models: ["What she did was stay up all night to finish her essay.", "What she did was to stay up all night to finish her essay."] },
            { q: "My cousins live in Chichester.", start: "It", models: ["It's in Chichester that my cousins live.", "It is in Chichester that my cousins live.", "It's my cousins who live in Chichester."] },
            { q: "We simply want a second chance.", start: "All", models: ["All we want is a second chance."] },
            { q: "He studied a lot, that's why he passed the exam.", start: "It", models: ["It was because he studied a lot that he passed the exam."] }
          ]
        },
        {
          type: "transform",
          title: "Add focus (revision Task 3)",
          intro: "Make a cleft sentence that stresses the part in brackets. Many answers are possible – compare with the models.",
          items: [
            { q: "John solved the problem very quickly. (John)", models: ["It was John who solved the problem very quickly.", "What John did was (to) solve the problem very quickly.", "What was impressive was how quickly John solved the problem."] },
            { q: "Someone left the door open during the break. (during the break)", models: ["It was during the break that someone left the door open.", "What happened was that someone left the door open."] },
            { q: "I didn't understand the explanation at all. (the explanation)", models: ["It was the explanation that I didn't understand.", "What I didn't understand was the explanation."] },
            { q: "Maria gave her notes to Tom after class. (Tom)", models: ["It was Tom who Maria gave her notes to.", "It was Maria who gave her notes to Tom after class.", "What Maria gave to Tom was her notes.", "It was after class that Maria gave her notes to Tom."] },
            { q: "The students complained about the test difficulty. (the test difficulty)", models: ["What the students complained about was the test difficulty.", "It was the test difficulty that the students complained about."] },
            { q: "We found the missing key under the table. (under the table)", models: ["It was under the table that we found the missing key.", "What we found was the missing key.", "It was the missing key that we found under the table."] },
            { q: "The teacher changed the homework at the last minute. (at the last minute)", models: ["It was at the last minute that the teacher changed the homework.", "It was the teacher who changed the homework at the last minute.", "What the teacher changed was the homework."] },
            { q: "Anna arrived late because of the traffic. (the traffic)", models: ["It was because of the traffic that Anna arrived late.", "What caused Anna to be late was the traffic.", "It was Anna who arrived late because of the traffic."] },
            { q: "They fixed the computer in ten minutes. (in ten minutes)", models: ["It was in ten minutes that they fixed the computer.", "What they fixed was the computer.", "It was the computer that they fixed."] },
            { q: "I noticed a mistake in your essay. (your essay)", models: ["It was in your essay that I noticed a mistake.", "What I noticed was a mistake in your essay.", "It was I who noticed a mistake in your essay."] },
            { q: "Peter borrowed my book yesterday. (Peter)", models: ["It was Peter who borrowed my book yesterday.", "What Peter borrowed was my book.", "It was yesterday that Peter borrowed my book.", "What Peter did was borrow my book."] },
            { q: "The accident happened near the station. (near the station)", models: ["It was near the station that the accident happened.", "It was the accident that happened near the station."] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 3A */
    {
      id: "questions",
      ref: "3A",
      kind: "grammar",
      title: "Question forms",
      uk: "Форми питань: заперечні, непрямі, теги, cleft-питання",
      theory: [
        {
          h: "Five useful forms",
          table: [
            ["Negative questions", "expect a certain answer, often rhetorical", "Don't you want to see your cousin?"],
            ["Statement + question word", "surprise, or checking you heard right", "You spent how much?"],
            ["Indirect questions", "soften difficult questions; statement word order", "Could you tell me what you plan to do about it?"],
            ["Question tags (falling)", "check or confirm information", "Jake's not really into sport, is he?"],
            ["Question word + is it", "cleft question, adds emphasis, more formal", "What is it that you wanted to speak to me about?"]
          ]
        },
        {
          h: "Embedded questions",
          p: "Questions can sit inside statements after unclear, uncertain etc. Yes/no questions use if or whether.",
          ex: ["It's unclear why she took the documents with her.", "It's not clear if they received the order yet."]
        }
      ],
      exercises: [
        {
          type: "order",
          title: "Make the question (revision Task 13)",
          intro: "Then think: why might each question be risky to ask aloud?",
          items: [
            { words: ["you", "better", "have", "to", "anything", "don't", "wear"], answer: "Don't you have anything better to wear?", note: "Negative question → sounds like criticism." },
            { words: ["talk", "let's", "politics,", "we", "shall", "about"], answer: "Let's talk about politics, shall we?", note: "Politics is a sensitive topic." },
            { words: ["you're", "you", "not", "working", "right now", "are"], answer: "You're not working right now, are you?", note: "Tag expects 'no' – can sound judgemental." },
            { words: ["it", "about", "don't", "me", "you", "what", "that", "like", "is"], answer: "What is it about me that you don't like?", note: "Cleft question → confrontational." },
            { words: ["honestly", "of", "tell", "you", "haircut", "could", "me", "you", "what", "think", "my"], answer: "Could you tell me honestly what you think of my haircut?", note: "Invites an honest – maybe hurtful – answer." },
            { words: ["don't", "everyone", "they", "likes", "meat,", "eating"], answer: "Everyone likes eating meat, don't they?", note: "Assumes agreement; not everyone eats meat." },
            { words: ["you're", "so", "saying", "you", "earn", "don't", "much"], answer: "So you're saying you don't earn much?", note: "Money is personal." },
            { words: ["you", "would", "how", "are", "you", "me", "tell", "old"], answer: "Would you tell me how old you are?", note: "Age is a personal question." },
            { words: ["another", "you're", "having", "holiday"], answer: "You're having another holiday?", note: "Statement question → surprise, maybe envy." }
          ]
        },
        {
          type: "choice",
          title: "Which form is it?",
          items: [
            { q: "You paid how much?", options: ["Negative question", "Statement + question word", "Question tag"], answer: 1 },
            { q: "Could you tell me where the station is?", options: ["Indirect question", "Cleft question", "Negative question"], answer: 0 },
            { q: "Isn't it time we left?", options: ["Negative question", "Indirect question", "Question tag"], answer: 0 },
            { q: "What is it that you don't understand?", options: ["Statement + question word", "Cleft question", "Embedded question"], answer: 1 },
            { q: "It's not clear whether they'll come.", options: ["Embedded question", "Question tag", "Negative question"], answer: 0 },
            { q: "She's from Lviv, isn't she?", options: ["Indirect question", "Question tag", "Cleft question"], answer: 1 }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 3B */
    {
      id: "reason",
      ref: "3B",
      kind: "grammar",
      title: "Reason clauses",
      uk: "Підрядні причини: since, given that, in that, for fear of…",
      theory: [
        {
          h: "Beyond 'because'",
          table: [
            ["since / as / given that / seeing as + clause", "a reason the listener already knows", "Seeing as it'll be warm, let's have the party outside."],
            ["in that + clause", "usually in the second part of the sentence", "This product isn't likely to sell well, in that it's quite a niche market."],
            ["insofar as / inasmuch as + clause", "justify a comment, formal", "We don't expect much opposition, insofar as they'll benefit most."],
            ["for fear of / at the risk of + (object) + -ing", "a possible outcome you want to avoid / accept", "We ordered extra for fear of them running out."],
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
          ]
        },
        {
          type: "speak",
          title: "Justify your decisions (revision Task 11)",
          phrases: ["since", "as", "given that", "seeing as", "in that", "insofar as", "inasmuch as", "for fear of", "at the risk of"],
          items: [
            { q: "You didn't tell your boss about a small mistake.", models: ["I didn't tell my boss for fear of losing their trust.", "Given that it wasn't serious, I fixed it myself."] },
            { q: "You chose not to attend a meeting.", models: ["Seeing as the agenda had nothing to do with my team, I skipped it."] },
            { q: "You decided to move to a smaller flat.", models: ["Since rent had gone up so much, I moved to a smaller flat."] },
            { q: "You didn't correct someone during a presentation.", models: ["I kept quiet for fear of embarrassing them in front of everyone."] },
            { q: "You refused a job offer.", models: ["I refused it, in that the salary was lower than what I earn now."] },
            { q: "You left a meeting early.", models: ["Not wanting to miss my train, I left early."] },
            { q: "You changed your learning strategy.", models: ["Given that I kept forgetting new words, I started using flashcards."] },
            { q: "You didn't argue back in a discussion.", models: ["At the risk of looking weak, I chose not to argue."] },
            { q: "You decided to buy something expensive.", models: ["Seeing as my old laptop kept crashing, I bought a new one."] },
            { q: "You apologised even though it wasn't fully your fault.", models: ["I apologised, insofar as I had played a part in it."] }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ 3C */
    {
      id: "adjectives",
      ref: "3C",
      kind: "grammar",
      title: "Ways of modifying adjectives",
      uk: "Прислівники-підсилювачі з градуйованими та неградуйованими прикметниками",
      theory: [
        {
          h: "Gradable vs ungradable",
          table: [
            ["Gradable (hot, good, difficult)", "barely, bitterly, deeply, extremely, fairly, perfectly, rather, somewhat, seriously, very", "We were deeply sorry to hear your news."],
            ["Ungradable (boiling, excellent, impossible)", "absolutely, completely, essentially, nearly, totally, utterly, virtually", "I felt totally overwhelmed by my workload."],
            ["Both", "really, pretty, quite", "quite interesting = fairly; quite fascinating = absolutely"]
          ]
        },
        {
          h: "Collocations",
          list: ["highly recommended / unlikely / successful", "utterly ridiculous / wrong", "ridiculously cheap / easy", "strongly opposed", "perfectly open / honest / straightforward", "virtually impossible"]
        },
        {
          h: "Classifying adjectives",
          p: "Classifying adjectives (married, foreign car) can't be modified. Some change meaning when gradable.",
          ex: ["She has a slightly foreign accent. (gradable)", "It's a foreign car. (classifying)"]
        }
      ],
      exercises: [
        {
          type: "choice",
          title: "Choose the correct adverb (revision Task 12)",
          items: [
            { q: "Are you ___ sure that's a good idea?", options: ["quite", "bitterly"], answer: 0 },
            { q: "Yeah, it sounds ___ amazing, doesn't it?", options: ["pretty", "very"], answer: 0, explain: "amazing is ungradable → not 'very'." },
            { q: "Umm, to be ___ honest, I think…", options: ["completely", "barely"], answer: 0 },
            { q: "…I think it sounds ___ terrifying.", options: ["absolutely", "nearly"], answer: 0 },
            { q: "I guess we have ___ different tastes in what we think is fun.", options: ["entirely", "virtually"], answer: 0 },
            { q: "I got ___ emotional at the play I saw last night.", options: ["somewhat", "essentially"], answer: 0 },
            { q: "It was ___ unique, because it was performed in sign language.", options: ["totally", "deeply"], answer: 0 },
            { q: "That must have been ___ difficult to understand.", options: ["completely", "fairly"], answer: 1 },
            { q: "The actors were ___ talented.", options: ["seriously", "totally"], answer: 0 },
            { q: "Yeah, the whole thing was ___ brilliant.", options: ["quite", "very"], answer: 0, explain: "brilliant is ungradable; quite = absolutely here." },
            { q: "The wifi is down again! I'm ___ sick of this.", options: ["absolutely", "perfectly"], answer: 0 },
            { q: "I was ___ hopeful it would stop happening after the engineer came.", options: ["pretty", "absolutely"], answer: 0 },
            { q: "I'm ___ capable of meeting the deadlines as it is.", options: ["barely", "nearly"], answer: 0 },
            { q: "You know it's ___ impossible to get through at this time of day.", options: ["virtually", "very"], answer: 0 },
            { q: "I'm ___ sceptical myself. Feel free to try, though.", options: ["rather", "essentially"], answer: 0 }
          ]
        },
        {
          type: "sort",
          title: "Gradable or ungradable?",
          intro: "Which adverbs go with which kind of adjective?",
          categories: ["gradable (very …)", "ungradable (absolutely …)", "both"],
          items: [
            { text: "barely", cat: 0 }, { text: "bitterly", cat: 0 }, { text: "deeply", cat: 0 }, { text: "extremely", cat: 0 },
            { text: "fairly", cat: 0 }, { text: "rather", cat: 0 }, { text: "somewhat", cat: 0 }, { text: "seriously", cat: 0 },
            { text: "absolutely", cat: 1 }, { text: "completely", cat: 1 }, { text: "essentially", cat: 1 }, { text: "nearly", cat: 1 },
            { text: "totally", cat: 1 }, { text: "utterly", cat: 1 }, { text: "virtually", cat: 1 },
            { text: "really", cat: 2 }, { text: "pretty", cat: 2 }, { text: "quite", cat: 2 }
          ]
        },
        {
          type: "speak",
          title: "Stronger or weaker?",
          intro: "Replace 'very' / 'almost' with a better adverb. Try one stronger and one weaker version.",
          phrases: ["extremely", "pretty", "quite", "bitterly", "utterly", "deeply", "seriously", "virtually", "nearly", "perfectly", "fairly", "rather", "absolutely", "completely", "ridiculously", "somewhat"],
          items: [
            { q: "The exam was very difficult.", models: ["The exam was extremely difficult. / pretty difficult / quite difficult."] },
            { q: "The weather today is very cold.", models: ["It's bitterly cold today. / It's fairly cold."] },
            { q: "The idea is very stupid.", models: ["The idea is utterly ridiculous. / rather stupid."] },
            { q: "I am very sorry about what happened.", models: ["I'm deeply sorry about what happened."] },
            { q: "The situation is very serious.", models: ["The situation is extremely serious. / fairly serious."] },
            { q: "The room was almost empty.", models: ["The room was virtually empty. / nearly empty."] },
            { q: "The task was easy to do.", models: ["The task was ridiculously easy. / perfectly straightforward."] },
            { q: "I was very honest in my answer.", models: ["I was perfectly honest in my answer. / completely honest."] },
            { q: "The plan was very complicated.", models: ["The plan was extremely complicated. / somewhat complicated."] }
          ]
        }
      ]
    },

    /* ============================================================ VOCABULARY */
    {
      id: "collocations",
      ref: "Task 4",
      kind: "vocab",
      title: "Activity collocations",
      uk: "Сталі сполучення: have a rest, take the lead, get some fresh air…",
      theory: [
        {
          h: "Verb + noun",
          table: [
            ["have", "a lie-down · a well-earned rest · a sit-down"],
            ["go", "for a run · on a teambuilding course · for a stroll"],
            ["give someone", "help · a break · a warm welcome"],
            ["get", "some fresh air · people talking · the benefits of something"],
            ["hold", "a welcome meeting · a singing competition · a feedback session"],
            ["make", "a contribution · a success of something · a statement"],
            ["do", "some rock-climbing · plenty of preparation · someone good"],
            ["take", "the initiative · the lead during an activity · something into consideration"]
          ]
        }
      ],
      exercises: [
        {
          type: "gap",
          title: "Complete the phrase",
          items: [
            { q: "have a well-earned ___", answers: [["rest"]] },
            { q: "go for a ___", answers: [["run", "stroll", "walk"]] },
            { q: "give someone a warm ___", answers: [["welcome"]] },
            { q: "take the ___ (start something without being asked)", answers: [["initiative", "lead"]] },
            { q: "make a ___ of something", answers: [["success"]] },
            { q: "hold a feedback ___", answers: [["session"]] },
            { q: "get some ___ air", answers: [["fresh"]] },
            { q: "get people ___", answers: [["talking"]] },
            { q: "do plenty of ___", answers: [["preparation"]] },
            { q: "take something into ___", answers: [["consideration", "account"]] },
            { q: "have a ___ (lie on a bed for a short time)", answers: [["lie-down", "lie down"]] },
            { q: "a walk in the park will do you ___", answers: [["good"]] }
          ]
        },
        {
          type: "match",
          title: "Match the verb to the phrase",
          items: [
            { a: "have", b: "a well-earned rest" },
            { a: "go", b: "on a teambuilding course" },
            { a: "give someone", b: "a break" },
            { a: "get", b: "some fresh air" },
            { a: "hold", b: "a welcome meeting" },
            { a: "make", b: "a contribution" },
            { a: "do", b: "some rock-climbing" },
            { a: "take", b: "the lead during an activity" }
          ]
        },
        {
          type: "speak",
          title: "What would you suggest?",
          phrases: ["have a", "go for", "go on", "give someone", "give them", "give her", "give him", "get some fresh air", "get people talking", "hold a", "make a", "do some", "do plenty of", "take the initiative", "take the lead", "into consideration"],
          items: [
            { q: "A group project is not progressing because nobody is in charge.", models: ["Someone needs to take the lead."] },
            { q: "A colleague looks completely exhausted after a long week.", models: ["They should have a well-earned rest."] },
            { q: "People in your team are too quiet and don't interact much.", models: ["We could go on a teambuilding course to get people talking."] },
            { q: "You are planning a big event and want it to be successful.", models: ["We need to do plenty of preparation to make a success of it."] },
            { q: "A student is nervous on their first day in a new group.", models: ["Let's give them a warm welcome."] },
            { q: "A meeting has finished, but everyone is still tense and silent.", models: ["Let's go for a stroll and get some fresh air."] },
            { q: "A discussion needs more energy and participation.", models: ["Everyone should make a contribution."] },
            { q: "Someone has been working non-stop for many hours.", models: ["Give them a break – they could have a lie-down."] },
            { q: "A team is going on a trip to improve cooperation.", models: ["They could do some rock-climbing together."] },
            { q: "You want to evaluate how a project went after it finished.", models: ["Let's hold a feedback session."] }
          ]
        }
      ]
    },

    {
      id: "idioms",
      ref: "Task 5",
      kind: "vocab",
      title: "Idioms: emotions and reactions",
      uk: "Ідіоми про емоції: bite my tongue, let off steam…",
      theory: [
        {
          h: "Twelve idioms",
          table: [
            ["have a pretty thick skin", "not get easily upset by criticism"],
            ["it drives me up the wall", "it annoys me a lot"],
            ["bite my tongue", "stop myself from saying what I think"],
            ["get under my skin", "irritate me, especially over time"],
            ["let off steam", "release anger or energy"],
            ["lash out at someone", "suddenly attack someone with words"],
            ["bottle up my emotions", "hide feelings instead of expressing them"],
            ["put a brave face on something", "pretend to be fine when you're not"],
            ["make a scene", "behave loudly and emotionally in public"],
            ["get something off my chest", "finally tell someone what's been worrying you"],
            ["take a step back", "pause and look at a situation calmly"],
            ["put things into perspective", "see how important something really is"]
          ]
        }
      ],
      exercises: [
        {
          type: "cards",
          title: "Flashcards",
          items: [
            { front: "have a pretty thick skin", back: "not get easily upset by criticism", ex: "Don't worry about me – I have a pretty thick skin." },
            { front: "it drives me up the wall", back: "it annoys me a lot", ex: "His constant interrupting drives me up the wall." },
            { front: "bite my tongue", back: "stop myself from saying what I think", ex: "I wanted to argue, but I bit my tongue." },
            { front: "get under my skin", back: "irritate me (often over time)", ex: "That noise really gets under my skin." },
            { front: "let off steam", back: "release anger, stress or energy", ex: "I go running to let off steam after work." },
            { front: "lash out at someone", back: "suddenly attack someone with words", ex: "I lashed out at my brother and regretted it." },
            { front: "bottle up my emotions", back: "keep feelings inside instead of expressing them", ex: "It's not healthy to bottle up your emotions." },
            { front: "put a brave face on it", back: "pretend to be fine when you're not", ex: "She put a brave face on it, but she was devastated." },
            { front: "make a scene", back: "behave loudly and emotionally in public", ex: "Please don't make a scene in the restaurant." },
            { front: "get it off my chest", back: "finally tell someone what's been worrying me", ex: "I'm glad I finally got it off my chest." },
            { front: "take a step back", back: "pause and look at things calmly", ex: "Let's take a step back before we decide." },
            { front: "put things into perspective", back: "realise how (un)important something really is", ex: "Talking to her put things into perspective." }
          ]
        },
        {
          type: "match",
          title: "Match the idiom and meaning",
          items: [
            { a: "bite my tongue", b: "not say what I think" },
            { a: "let off steam", b: "release stress or anger" },
            { a: "bottle up my emotions", b: "hide my feelings" },
            { a: "make a scene", b: "behave loudly in public" },
            { a: "get something off my chest", b: "finally say what's worrying me" },
            { a: "put things into perspective", b: "see how serious it really is" },
            { a: "have a pretty thick skin", b: "not get upset by criticism" },
            { a: "lash out at", b: "suddenly attack with words" }
          ]
        },
        {
          type: "speak",
          title: "React to the situation",
          phrases: ["thick skin", "drives me up the wall", "bite my tongue", "bit my tongue", "get under my skin", "gets under my skin", "let off steam", "lash out", "lashed out", "bottle up", "brave face", "make a scene", "made a scene", "off my chest", "step back", "into perspective"],
          items: [
            { q: "Someone keeps interrupting you during a meeting.", models: ["It drives me up the wall, but I bite my tongue."] },
            { q: "You receive unfair criticism from a colleague.", models: ["Luckily, I have a pretty thick skin."] },
            { q: "You are extremely angry but must stay polite at work.", models: ["I bite my tongue and let off steam at the gym later."] },
            { q: "A student keeps making the same annoying noise in class.", models: ["It really gets under my skin."] },
            { q: "You have been pretending everything is fine, but it isn't.", models: ["I've been putting a brave face on it and bottling up my emotions."] },
            { q: "You suddenly shout at someone and regret it later.", models: ["I lashed out at them and felt terrible afterwards."] },
            { q: "You feel stressed after a long and difficult week.", models: ["I need to let off steam."] },
            { q: "Someone says something very rude to you in public.", models: ["I tried not to make a scene."] },
            { q: "You finally tell a friend something you have been hiding.", models: ["I finally got it off my chest."] },
            { q: "You decide not to react emotionally to a message.", models: ["I took a step back before replying."] },
            { q: "You realise your problem is not as serious as you thought.", models: ["Talking to a friend put things into perspective."] },
            { q: "Someone's behaviour annoys you every single day.", models: ["It drives me up the wall.", "It really gets under my skin."] }
          ]
        }
      ]
    },

    {
      id: "attitude",
      ref: "Task 6",
      kind: "vocab",
      title: "Adjectives that show attitude",
      uk: "Прикметники з позитивною / негативною конотацією",
      theory: [
        {
          h: "Same idea, different attitude",
          table: [
            ["fans", "die-hard (+) · screaming (−) · obsessive (−)"],
            ["recommendations", "informed (+) · gushing (++, maybe too much) · lukewarm (−)"],
            ["sums of money", "phenomenal (+) · moderate (neutral) · meagre (−)"],
            ["parents", "supportive (+) · doting (+, very loving) · firm (neutral)"],
            ["toys", "educational (+) · durable (+) · flimsy (−)"],
            ["snacks", "nutritious (+) · bite-size (neutral) · processed (−)"],
            ["ambition", "driving (+) · blind (−) · consuming (−−)"]
          ]
        }
      ],
      exercises: [
        {
          type: "sort",
          title: "Positive, neutral or negative?",
          categories: ["positive", "neutral", "negative"],
          items: [
            { text: "die-hard fans", cat: 0 }, { text: "obsessive fans", cat: 2 },
            { text: "informed recommendations", cat: 0 }, { text: "lukewarm recommendations", cat: 2 },
            { text: "phenomenal sums of money", cat: 0 }, { text: "moderate sums of money", cat: 1 }, { text: "meagre sums of money", cat: 2 },
            { text: "supportive parents", cat: 0 }, { text: "firm parents", cat: 1 },
            { text: "educational toys", cat: 0 }, { text: "flimsy toys", cat: 2 }, { text: "durable toys", cat: 0 },
            { text: "nutritious snacks", cat: 0 }, { text: "bite-size snacks", cat: 1 }, { text: "processed snacks", cat: 2 },
            { text: "driving ambition", cat: 0 }, { text: "blind ambition", cat: 2 }
          ]
        },
        {
          type: "choice",
          title: "Make it more positive or more negative",
          items: [
            { q: "“These football supporters are very committed.” (positive)", options: ["die-hard fans", "obsessive fans", "screaming fans"], answer: 0 },
            { q: "“The reviewer liked the restaurant.” (very enthusiastic)", options: ["a lukewarm recommendation", "a gushing recommendation", "a moderate recommendation"], answer: 1 },
            { q: "“They earned some money from the project.” (negative)", options: ["a phenomenal sum", "a meagre sum", "a moderate sum"], answer: 1 },
            { q: "“The parents care a lot about their child.” (very loving)", options: ["firm parents", "doting parents", "flimsy parents"], answer: 1 },
            { q: "“The toys are made for children.” (negative – break easily)", options: ["durable toys", "educational toys", "flimsy toys"], answer: 2 },
            { q: "“The snacks are convenient to eat.” (neutral)", options: ["bite-size snacks", "processed snacks", "nutritious snacks"], answer: 0 },
            { q: "“She really wants to become successful.” (stronger negative)", options: ["driving ambition", "blind ambition", "consuming ambition"], answer: 2 }
          ]
        }
      ]
    },

    {
      id: "trends",
      ref: "Task 7",
      kind: "vocab",
      title: "Describing trends",
      uk: "Опис тенденцій: tipping point, on the up, reverse the trend…",
      theory: [
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
          ]
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
          ]
        }
      ]
    },

    {
      id: "reactions",
      ref: "Task 8",
      kind: "vocab",
      title: "Reacting to proposals",
      uk: "Реакція на пропозиції: be open to, pushback, be loath to…",
      theory: [
        {
          h: "Agreeing",
          list: ["get on board with an idea", "be willing to do something", "be open to an idea", "go along with something (accept, maybe reluctantly)"]
        },
        {
          h: "Disagreeing / resistance",
          list: ["be met with a lukewarm response", "be at odds with (conflict with)", "receive some pushback", "come up against some resistance", "take issue with something", "be loath to do something (very unwilling)"]
        }
      ],
      exercises: [
        {
          type: "sort",
          title: "Positive or negative reaction?",
          categories: ["support", "resistance"],
          items: [
            { text: "get on board with", cat: 0 }, { text: "be willing to", cat: 0 }, { text: "be open to", cat: 0 }, { text: "go along with", cat: 0 },
            { text: "be met with a lukewarm response", cat: 1 }, { text: "be at odds with", cat: 1 }, { text: "receive some pushback", cat: 1 },
            { text: "come up against some resistance", cat: 1 }, { text: "take issue with", cat: 1 }, { text: "be loath to", cat: 1 }
          ]
        },
        {
          type: "gap",
          title: "Complete with one word",
          items: [
            { q: "I'd be ___ to come in three days a week, but not five.", answers: [["willing"]] },
            { q: "I'm not really ___ to that idea.", answers: [["open"]] },
            { q: "I think this proposal will receive some ___.", answers: [["pushback"]] },
            { q: "The plan was met with a ___ response.", answers: [["lukewarm"]] },
            { q: "Management are ___ to change the policy. (very unwilling)", answers: [["loath", "loth"]] },
            { q: "Her views are at ___ with the rest of the team.", answers: [["odds"]] },
            { q: "I take ___ with the idea that AI is always fair.", answers: [["issue"]] },
            { q: "It took a while, but eventually everyone got on ___ with the idea.", answers: [["board"]] }
          ]
        },
        {
          type: "speak",
          title: "React to the proposal",
          phrases: ["on board", "willing", "open to", "go along with", "lukewarm", "at odds with", "pushback", "resistance", "take issue", "loath to"],
          items: [
            { q: "Your company wants to ban working from home completely.", models: ["I'd be willing to come in three days a week, but not five.", "I'm not really open to that idea.", "I think this proposal will receive some pushback."] },
            { q: "All meetings should start at 7 a.m.", models: ["I suspect it'll come up against some resistance."] },
            { q: "Students should keep their cameras on throughout every online lesson.", models: ["I'd go along with it for small groups, but many would be loath to."] },
            { q: "Social media should be banned for anyone under 18.", models: ["I take issue with a total ban – it's at odds with young people's rights."] },
            { q: "Everyone should work a four-day week.", models: ["I'd get on board with that immediately!"] },
            { q: "AI should mark all exams.", models: ["I think it would be met with a lukewarm response from teachers."] },
            { q: "Cars should be banned from city centres.", models: ["I'm open to the idea, but drivers will push back."] },
            { q: "Employees should be allowed unlimited holiday.", models: ["Managers might be loath to approve it."] }
          ]
        }
      ]
    },

    {
      id: "ideas",
      ref: "Task 9",
      kind: "vocab",
      title: "Talking about ideas",
      uk: "Ідеї: it occurs to me, springs to mind, a brainwave…",
      theory: [
        {
          h: "Phrases",
          table: [
            ["It occurs to me that…", "I've just thought of something"],
            ["(nothing) springs to mind", "(no) idea comes immediately"],
            ["It dawned on me that…", "I slowly realised"],
            ["bounce a few ideas around", "discuss ideas informally with others"],
            ["a bright idea", "a clever idea (sometimes ironic)"],
            ["a passing thought", "an idea you don't take very seriously"],
            ["be out of ideas", "have no more ideas"],
            ["give someone an idea", "make someone think of something"],
            ["a brainwave", "a sudden clever idea"]
          ]
        }
      ],
      exercises: [
        {
          type: "cards",
          title: "Flashcards",
          items: [
            { front: "It occurs to me that…", back: "I've just thought of something", ex: "It occurs to me that we could join a club." },
            { front: "nothing springs to mind", back: "no idea comes immediately", ex: "Any suggestions? – Nothing springs to mind." },
            { front: "it dawned on me", back: "I gradually realised", ex: "It suddenly dawned on me that I'd left my keys at home." },
            { front: "bounce a few ideas around", back: "discuss ideas informally", ex: "Let's bounce a few ideas around before the meeting." },
            { front: "a brainwave", back: "a sudden clever idea", ex: "I had a brainwave in the shower." },
            { front: "a passing thought", back: "an idea that isn't serious", ex: "It was just a passing thought." },
            { front: "be out of ideas", back: "have no more ideas", ex: "I'm completely out of ideas." },
            { front: "give someone an idea", back: "make someone think of something", ex: "Your story gave me an idea." },
            { front: "a bright idea", back: "a clever idea", ex: "Whose bright idea was this?" }
          ]
        },
        {
          type: "speak",
          title: "Brainstorm",
          phrases: ["occurs to me", "occurred to me", "springs to mind", "spring to mind", "dawned on me", "dawn on me", "bounce", "bright idea", "passing thought", "out of ideas", "gave me an idea", "give you an idea", "brainwave"],
          items: [
            { q: "How can people make new friends as adults?", models: ["It occurs to me that joining a sports club could help."] },
            { q: "How can schools motivate teenagers to learn?", models: ["Nothing springs to mind immediately, but maybe real-life projects."] },
            { q: "How can employers reduce stress in the workplace?", models: ["Let's bounce a few ideas around – flexible hours, quiet rooms…"] },
            { q: "How can we encourage people to read more?", models: ["I had a brainwave: book swaps in offices."] },
            { q: "How can people achieve a better work-life balance?", models: ["It dawned on me that switching off notifications helps a lot."] },
            { q: "My house is always messy.", models: ["Here's a bright idea: ten minutes of tidying every evening."] },
            { q: "I have a week off but can't decide where to go.", models: ["I'm out of ideas – but your photos of the mountains gave me an idea."] },
            { q: "I can never remember new vocabulary.", models: ["It occurs to me that flashcards like these might help!"] },
            { q: "I have no idea what to get my parents for their anniversary.", models: ["Just a passing thought, but what about a weekend away?"] },
            { q: "I'm bored with my daily routine and want to change something.", models: ["It dawned on me that I could try a new hobby."] }
          ]
        }
      ]
    },

    {
      id: "thinking",
      ref: "Task 10",
      kind: "vocab",
      title: "Thinking and reaching conclusions",
      uk: "Мислення: mull over, ponder, zero in on, misinterpret…",
      theory: [
        {
          h: "Thinking hard",
          list: ["deliberate, ruminate, ponder, mull over – think carefully for a long time", "rack your brains – try very hard to remember / think", "grapple with / wrestle with – struggle with a difficult problem", "go round in circles – keep thinking without progress", "take stock – stop and assess the situation"]
        },
        {
          h: "Finding the answer",
          list: ["zero in on – focus on the key point", "pin it down – identify exactly", "shed light on – help explain", "root cause(s) – the real underlying reason", "intuitive – based on feeling rather than logic"]
        },
        {
          h: "Confusion and mistakes",
          list: ["perplexed, baffled, befuddled – confused", "misconstrue, misread, misinterpret – understand wrongly", "underestimate – think something is smaller / easier than it is"]
        }
      ],
      exercises: [
        {
          type: "cards",
          title: "Flashcards",
          items: [
            { front: "mull over", back: "think about carefully for a while", ex: "I spent weeks mulling it over." },
            { front: "ponder", back: "think carefully", ex: "I pondered several options." },
            { front: "ruminate", back: "think deeply, often too much", ex: "Don't ruminate on your mistakes." },
            { front: "deliberate", back: "think carefully before deciding", ex: "The jury deliberated for hours." },
            { front: "grapple with", back: "struggle with a difficult problem", ex: "I was grappling with work-life balance." },
            { front: "wrestle with", back: "try hard to deal with a problem", ex: "She wrestled with the decision for days." },
            { front: "zero in on", back: "focus closely on", ex: "Eventually I zeroed in on the main issue." },
            { front: "pin it down", back: "identify exactly", ex: "Something felt wrong, but I couldn't pin it down." },
            { front: "shed light on", back: "help to explain", ex: "Her story shed light on the problem." },
            { front: "rack your brains", back: "think very hard", ex: "I racked my brains for a gift idea." },
            { front: "go round in circles", back: "think or talk without making progress", ex: "We kept going round in circles." },
            { front: "take stock", back: "stop and assess a situation", ex: "I took stock of my finances." },
            { front: "root cause", back: "the real underlying reason", ex: "Stress was the root cause." },
            { front: "underestimate", back: "think something is smaller than it is", ex: "I had underestimated how unhappy I was." },
            { front: "baffled / perplexed / befuddled", back: "very confused", ex: "I was completely baffled by the instructions." },
            { front: "misconstrue / misread / misinterpret", back: "understand wrongly", ex: "I misread the situation." },
            { front: "intuitive", back: "based on feelings, not logic", ex: "It was an intuitive decision." }
          ]
        },
        {
          type: "match",
          title: "Match the synonyms",
          items: [
            { a: "mull over", b: "ponder" },
            { a: "grapple with", b: "wrestle with" },
            { a: "baffled", b: "perplexed" },
            { a: "misconstrue", b: "misinterpret" },
            { a: "zero in on", b: "focus on" },
            { a: "rack your brains", b: "think very hard" },
            { a: "take stock", b: "assess the situation" }
          ]
        },
        {
          type: "speak",
          title: "How did you reach that decision?",
          phrases: ["root cause", "take stock", "took stock", "round in circles", "underestimate", "intuitive", "perplexed", "baffled", "befuddled", "deliberate", "ruminat", "ponder", "mull", "zero in", "zeroed in", "shed light", "pin it down", "misconstru", "misread", "misinterpret", "rack", "racked", "grappl", "wrestl"],
          items: [
            { q: "You decided to quit a job.", models: ["I spent weeks mulling it over. I was grappling with work-life balance. Eventually I zeroed in on the main issue: I had underestimated how unhappy I was."] },
            { q: "You decided to simplify your life.", models: ["I took stock of everything I owned and realised clutter was the root cause of my stress."] },
            { q: "You chose where to go on holiday.", models: ["It was an intuitive choice – I didn't deliberate much."] },
            { q: "You bought a car.", models: ["I went round in circles for weeks before I pinned down what I really needed."] },
            { q: "You moved to another city.", models: ["I pondered it for months; a friend's advice shed light on my options."] },
            { q: "You changed careers.", models: ["I wrestled with the decision for a year."] },
            { q: "You ended a friendship.", models: ["I realised I had misread their behaviour for years."] },
            { q: "You chose what to cook for dinner.", models: ["I racked my brains, but in the end I made pasta."] },
            { q: "You are choosing a gift for someone you don't know well.", models: ["I'm completely baffled – nothing springs to mind."] }
          ]
        }
      ]
    }
  ]
};
