/*
 * 1B Online/Offline
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "1B",
  unit: 1,
  letter: "B",
  title: "Online/Offline",
  uk: "Онлайн і офлайн: підняття підмета, ідіоми про емоції",
  goal: "describe your reaction to a situation",
  focus: { grammar: "subject raising", vocab: "idioms for expressing and controlling emotions", pron: "connected speech" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      { h: "The pattern", p: "The subject of a that-clause moves 'up' to become the subject of the main verb, followed by a to-infinitive.", ex: ["It seems that you're unhappy. → You seem to be unhappy."] },
      {
        h: "Where it's used",
        list: [
          "seem, appear, turn out, happen: They appear to be late.",
          "adjectives of probability: She's likely to know.",
          "passive reporting verbs: She's said to be furious."
        ]
      },
      { h: "Negatives", p: "Two ways to make it negative.", ex: ["She seems not to have noticed.", "She doesn't seem to have noticed."] },
      {
        h: "Choose the infinitive",
        table: [
          ["simple", "to be", "He seems to be ill. (now, state)"],
          ["continuous", "to be doing", "He seems to be sleeping. (in progress now)"],
          ["perfect", "to have done", "He seems to have completed the task. (earlier, complete)"],
          [
            "perfect continuous",
            "to have been doing",
            "He seems to have been working all day. (earlier, in progress)"
          ]
        ]
      },
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
        type: "choice",
        title: "Which infinitive?",
        items: [
          { q: "He looks very tired today. He seems ___ all day.", options: ["to work", "to be working", "to have been working"], answer: 2, explain: "An earlier activity in progress → perfect continuous infinitive." },
          { q: "It seems (now) that he cheated (earlier). → He seems ___.", options: ["to cheat", "to have cheated", "to be cheating"], answer: 1, explain: "Earlier, completed action → perfect infinitive." },
          { q: "It seemed (yesterday) that he was lying (at the time). → He seemed ___.", options: ["to be lying", "to have lied", "to lie"], answer: 0, explain: "Same time as 'seemed', in progress → continuous infinitive." },
          { q: "It seemed that he had been lying. → He seemed ___.", options: ["to be lying", "to have been lying", "to have lied"], answer: 1, explain: "Earlier than 'seemed' and in progress → perfect continuous." },
          {
            q: "A student suddenly looks confused during a test. He seems ___ the task.",
            options: ["to misunderstand", "to have misunderstood", "to be misunderstood"],
            answer: 1,
            explain: "The misunderstanding happened before now → perfect infinitive."
          },
          {
            q: "Two students stop talking when you come closer. They appear ___ something private.",
            options: ["to be discussing", "to discuss", "to have discussed"],
            answer: 0,
            explain: "In progress at the moment → continuous infinitive."
          }
        ],
        src: "Revision"
      },
      {
        type: "gap",
        title: "Complete the conversation (Language bank 1B)",
        intro: "Use the words in brackets in the correct form.",
        items: [
          {
            q: "I left my jacket here earlier, but when I came back, my wallet ___ from the pocket.",
            hint: "turn out / go",
            answers: [
              ["turned out to have gone", "had turned out to have gone"]
            ]
          },
          {
            q: "You ___ who took it, did you?",
            hint: "not / happen / notice",
            answers: [
              ["didn't happen to notice", "did not happen to notice"]
            ]
          },
          {
            q: "Well, there was a man who ___ suspiciously.",
            hint: "seem / act",
            answers: [
              ["seemed to be acting", "seemed to act"]
            ]
          },
          {
            q: "He ___ some kind of motorbike helmet.",
            hint: "appear / wear",
            answers: [
              ["appeared to be wearing"]
            ]
          },
          {
            q: "When he approached your chair, he ___ something up.",
            hint: "appear / pick",
            answers: [
              ["appeared to pick", "appeared to have picked"]
            ]
          },
          {
            q: "OK, I'm going to call the police. I guess I ___ my money again.",
            hint: "unlikely / see",
            answers: [
              ["am unlikely to see", "'m unlikely to see"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "transform",
        title: "Rewrite with it + that-clause",
        items: [
          {
            q: "We turned out to have been standing in the wrong queue.",
            start: "It turned out",
            models: [
              "It turned out that we had been standing in the wrong queue.",
              "It turned out that we'd been standing in the wrong queue."
            ]
          },
          {
            q: "The house appeared not to have been lived in for years.",
            start: "It appeared",
            models: [
              "It appeared that the house hadn't been lived in for years.",
              "It appeared that the house had not been lived in for years."
            ]
          },
          {
            q: "There seems to have been a power cut last night.",
            start: "It seems",
            models: [
              "It seems that there was a power cut last night.",
              "It seems that there had been a power cut last night."
            ]
          },
          { q: "Do you need some help with your essay? I happen to have written one on that topic last week.", start: "It happens", models: ["It happens that I wrote one on that topic last week."] },
          { q: "They might appear to be ignoring you.", start: "It might appear", models: ["It might appear that they're ignoring you.", "It might appear that they are ignoring you."] }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "What's going on? (revision Task 2)",
        intro: "Respond with a full sentence using appear / seem / turn out / happen.",
        phrases: [
          "seems to",
          "seem to",
          "appears to",
          "appear to",
          "turns out",
          "turned out",
          "happens",
          "happened to",
          "it seems"
        ],
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
        ],
        src: "Revision"
      },
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
        ],
        src: "Revision"
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
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "React to the situation",
        phrases: [
          "thick skin",
          "drives me up the wall",
          "bite my tongue",
          "bit my tongue",
          "get under my skin",
          "gets under my skin",
          "let off steam",
          "lash out",
          "lashed out",
          "bottle up",
          "brave face",
          "make a scene",
          "made a scene",
          "off my chest",
          "step back",
          "into perspective"
        ],
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
        ],
        src: "Revision"
      }
    ]
  }
});
