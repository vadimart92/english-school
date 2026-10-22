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
  learn: {
    theory: [
      {
        h: "Subject raising: two ways to say the same thing",
        p: "З дієсловами seem, appear, turn out, happen одну думку можна сказати двома способами: (1) it + дієслово + that-clause або (2) підмет «піднімається» на початок речення, а після дієслова йде to-infinitive. Другий варіант коротший і звичайніший у живій мові; перший зручний, коли не хочеш будувати складний інфінітив.",
        ex: [
          "It seems that you're right. → You seem to be right.",
          "It appears that the shop has closed. → The shop appears to have closed.",
          "It turned out that the café was shut. → The café turned out to be shut."
        ]
      },
      {
        h: "Which infinitive?",
        table: [
          ["to + verb", "state now / then: She seems to know everyone."],
          ["to be + -ing", "action in progress: They appear to be arguing."],
          ["to have + V3", "earlier, completed: He turned out to have lied."],
          ["to have been + -ing", "earlier, in progress: You seem to have been crying."]
        ]
      },
      {
        h: "happen and negatives",
        list: [
          "happen + to-infinitive підкреслює випадковість: I happened to meet Ivan at the station (= я цього не планував). Варіант It happened that… рідкісний.",
          "У питаннях happen звучить ввічливо: Do you happen to know where the lift is?",
          "Заперечення двома способами: She seems not to have noticed. / She doesn't seem to have noticed. (другий — звичайніший)."
        ]
      },
      {
        h: "Idioms: emotions",
        table: [
          ["feeling strong emotions", "drive sb up the wall · get under sb's skin"],
          ["expressing emotions", "let off steam · lash out at sb · make a scene · get sth off your chest"],
          [
            "controlling emotions",
            "have a thick skin · bite your tongue · bottle up your emotions · put a brave face on sth · take a step back · put things into perspective"
          ]
        ]
      },
      { h: "Pronunciation: it", p: "У фразах It seems that… / It turned out that… слово it ненаголошене і часто майже «ковтається»; that також звучить слабко /ðət/." },
      {
        h: "Більше практики",
        p: "Пояснення з прикладами, де модальні дієслова й seem/appear/likely показують, наскільки мовець упевнений.",
        links: [
          { title: "British Council LearnEnglish: Modals — probability", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/modals-probability", note: "must, can't, bound to, might well — пояснення і тест" },
          { title: "SFU: subject-to-subject raising", url: "https://www.sfu.ca/~dearmond/322/322.raising.S-to-S.htm", note: "лінгвістичний розбір, чому працює it seems that → he seems to (англ.)" }
        ]
      }
    ],
    exercises: [
      {
        type: "transform",
        title: "Rewrite the sentences so they start with the subject in bold",
        src: "SB 6",
        items: [
          { q: "It seems that NOBODY read the instructions.", start: "Nobody…", models: ["Nobody seems to have read the instructions."] },
          { q: "It turned out that SHE had been texting while she was driving.", start: "She…", models: ["She turned out to have been texting while she was driving."] },
          { q: "It happened that MY POST got thousands of likes.", start: "My post…", models: ["My post happened to get thousands of likes."] },
          { q: "It appears that SOMEBODY has been using my account.", start: "Somebody…", models: ["Somebody appears to have been using my account."] },
          { q: "It turned out that THE RUDE COMMENT had been posted by a bot.", start: "The rude comment…", models: ["The rude comment turned out to have been posted by a bot."] },
          { q: "Did it happen that YOU saw who scratched my car?", start: "Did you…", models: ["Did you happen to see who scratched my car?"] },
          { q: "It seems that THE MANAGER is ignoring my emails.", start: "The manager…", models: ["The manager seems to be ignoring my emails."] },
          {
            q: "It might appear that THE COMPANY doesn't care about complaints.",
            start: "The company…",
            models: [
              "The company might appear not to care about complaints.",
              "The company might not appear to care about complaints."
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct infinitive",
        src: "SB 4",
        items: [
          { q: "Listen! The neighbours appear ___ again.", options: ["to argue", "to be arguing", "to have argued"], answer: 1, explain: "In progress now → continuous infinitive." },
          { q: "The parcel turned out ___ to the wrong address.", options: ["to be sent", "to have been sent"], answer: 1, explain: "Earlier, completed (passive) → perfect infinitive." },
          { q: "Your eyes are red. You seem ___.", options: ["to cry", "to have been crying"], answer: 1, explain: "Earlier activity with a visible result → perfect continuous infinitive." },
          { q: "She seems ___ a lot about social media.", options: ["to know", "to be knowing"], answer: 0, explain: "know is a state verb → simple infinitive." },
          { q: "They seem ___ the meeting – nobody's here.", options: ["to forget", "to have forgotten"], answer: 1, explain: "Completed earlier → perfect infinitive." },
          { q: "I ___ to be in the area, so I dropped in.", options: ["happened", "seemed"], answer: 0, explain: "Unplanned, by chance → happen." }
        ]
      },
      {
        type: "sort",
        title: "Are the phrases about feeling, expressing or controlling emotions?",
        src: "SB 8a",
        categories: ["feeling strong emotions", "expressing emotions", "controlling emotions"],
        items: [
          { text: "drive someone up the wall", cat: 0 },
          { text: "get under someone's skin", cat: 0 },
          { text: "let off steam", cat: 1 },
          { text: "lash out at someone", cat: 1 },
          { text: "make a scene", cat: 1 },
          { text: "get something off your chest", cat: 1 },
          { text: "have a thick skin", cat: 2 },
          { text: "bite your tongue", cat: 2 },
          { text: "bottle up your emotions", cat: 2 },
          { text: "put a brave face on something", cat: 2 },
          { text: "take a step back", cat: 2 },
          { text: "put things into perspective", cat: 2 }
        ]
      },
      {
        type: "cards",
        title: "Idioms for expressing and controlling emotions",
        src: "SB 8a",
        items: [
          { front: "have a thick skin", back: "бути «товстошкірим», не ображатися на критику", ex: "You need a thick skin to work in customer service." },
          { front: "drive someone up the wall", back: "доводити до сказу", ex: "The constant beeping drives me up the wall." },
          { front: "bite your tongue", back: "прикусити язика, промовчати", ex: "I wanted to answer back, but I bit my tongue." },
          { front: "get under someone's skin", back: "дратувати, «діставати»", ex: "His sarcastic tone really gets under my skin." },
          { front: "let off steam", back: "випустити пару", ex: "Kids need to let off steam after school." },
          { front: "lash out (at someone)", back: "накинутися (на когось) зі словами", ex: "When he's stressed, he lashes out at his family." },
          { front: "bottle up (your emotions)", back: "тримати емоції в собі", ex: "Don't bottle it up – talk to someone." },
          { front: "put a brave face on something", back: "робити вигляд, що все гаразд", ex: "She put a brave face on the bad news." },
          { front: "make a scene", back: "влаштувати сцену", ex: "He made a scene at the check-in desk." },
          { front: "get something off your chest", back: "зняти камінь з душі, висловитися", ex: "I had to get it off my chest, so I told her." },
          { front: "take a step back", back: "відступити на крок, подивитися збоку", ex: "Take a step back before you reply to that email." },
          { front: "put things into perspective", back: "побачити речі в правильному масштабі", ex: "Visiting the hospital put my problems into perspective." }
        ]
      },
      {
        type: "gap",
        title: "Complete the idioms with one word",
        src: "SB 8a",
        items: [
          {
            q: "Criticism doesn't bother Ana – she's got a really thick ___.",
            answers: [
              ["skin"]
            ]
          },
          {
            q: "It drives me up the ___ when people talk loudly on the phone on the train.",
            answers: [
              ["wall"]
            ]
          },
          {
            q: "I was furious with my boss, but I decided to bite my ___.",
            answers: [
              ["tongue"]
            ]
          },
          {
            q: "After a stressful day I go to the gym to let off ___.",
            answers: [
              ["steam"]
            ]
          },
          {
            q: "He's been bottling ___ his anger for weeks.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "She was upset about failing, but she put a brave ___ on it.",
            answers: [
              ["face"]
            ]
          },
          {
            q: "Please don't make a ___ – everyone's looking at us.",
            answers: [
              ["scene"]
            ]
          },
          {
            q: "I'm glad I told you. I needed to get it off my ___.",
            answers: [
              ["chest"]
            ]
          },
          {
            q: "When I feel angry, I try to take a step ___ and calm down.",
            answers: [
              ["back"]
            ]
          },
          {
            q: "Hearing about her illness really put things into ___ for me.",
            answers: [
              ["perspective"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Complete the sentences so that they are true for you",
        src: "SB 7",
        phrases: ["happened to", "turned out to", "appears to have been", "seems to be"],
        items: [
          { q: "The other day, I happened to …", models: ["The other day, I happened to run into my old English teacher at the market."] },
          { q: "… turned out to be / to have been a lot more … than I expected.", models: ["The new phone turned out to be a lot more complicated than I expected."] },
          { q: "… appears to have been … (doing what?)", models: ["My neighbour appears to have been renovating his flat all week."] },
          { q: "I'm not sure, but … seems to be … at the moment.", models: ["I'm not sure, but my brother seems to be looking for a new job at the moment."] }
        ]
      },
      {
        type: "speak",
        title: "Describe your reaction to a situation",
        src: "SB 10-11",
        intro: "Tell a story about a time you expressed or controlled strong emotions (online or offline). What happened? How did you feel? What did you do? What was the result? Finish with some general advice for dealing with conflict.",
        phrases: [
          "turned out to",
          "seemed to",
          "happened to",
          "bite my tongue",
          "let off steam",
          "get it off my chest",
          "take a step back",
          "put things into perspective",
          "lash out",
          "make a scene"
        ],
        items: [
          {
            q: "What happened and how did it make you feel?",
            models: [
              "A stranger left a really rude comment under my post. It drove me up the wall, and at first he seemed to be attacking me personally."
            ]
          },
          {
            q: "What did you do?",
            models: [
              "I bit my tongue and didn't reply straight away. I went for a run to let off steam, and later I took a step back."
            ]
          },
          {
            q: "What happened as a result?",
            models: [
              "It turned out that he'd confused me with someone else, so he apologised. I'm glad I didn't lash out at him."
            ]
          },
          {
            q: "What general advice would you give about conflict?",
            models: [
              "Don't bottle things up, but don't make a scene either – wait a bit, then get it off your chest calmly."
            ]
          }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "order",
        title: "Put the words in order to complete the conversations",
        src: "WB 1",
        items: [
          { words: ["Do", "you", "happen", "to", "have", "lost", "a", "black", "umbrella"], answer: "Do you happen to have lost a black umbrella?" },
          { words: ["It", "seems", "that", "very", "few", "people", "can", "come"], answer: "It seems that very few people can come." },
          { words: ["It", "turned", "out", "to", "be", "really", "funny", "actually"], answer: "It turned out to be really funny actually!" },
          { words: ["Marko", "appears", "to", "be", "avoiding", "me"], answer: "Marko appears to be avoiding me." },
          { words: ["You", "appear", "to", "have", "left", "your", "keys", "in", "my", "car"], answer: "You appear to have left your keys in my car." }
        ]
      },
      {
        type: "gap",
        title: "Complete the second sentence so that it has a similar meaning to the first",
        src: "WB 2",
        items: [
          {
            q: "It appears that nobody came to the lecture. → Nobody appears ___ to the lecture.",
            answers: [
              ["to have come"]
            ]
          },
          {
            q: "It turned out that the train had left early. → The train turned out ___ early.",
            answers: [
              ["to have left"]
            ]
          },
          {
            q: "I happened to run into Dmytro at the gym. → It happened ___ Dmytro at the gym.",
            answers: [
              ["that I ran into", "that I bumped into", "that I met"]
            ]
          },
          {
            q: "It seems that the twins are getting on well. → The twins seem ___ on well.",
            answers: [
              ["to be getting"]
            ]
          },
          {
            q: "You seem to be enjoying your new job. → It seems that you ___ your new job.",
            answers: [
              ["are enjoying", "'re enjoying"]
            ]
          }
        ]
      },
      {
        type: "errors",
        title: "Correct the mistake in each sentence",
        src: "WB 3",
        items: [
          { s: "My flatmate sings in the shower and it's starting to get me up the wall.", ok: false, fix: "My flatmate sings in the shower and it's starting to drive me up the wall." },
          { s: "Should I say something or just chew my tongue?", ok: false, fix: "Should I say something or just bite my tongue?" },
          { s: "If it bothers you, get it off your neck now.", ok: false, fix: "If it bothers you, get it off your chest now." },
          { s: "Bottling it down won't help.", ok: false, fix: "Bottling it up won't help." },
          { s: "Once something like that gets under my thumb, I can't stop thinking about it.", ok: false, fix: "Once something like that gets under my skin, I can't stop thinking about it." },
          { s: "Talk to him calmly before you end up lashing in at him.", ok: false, fix: "Talk to him calmly before you end up lashing out at him." },
          { s: "I'll do it quietly, without taking a scene.", ok: false, fix: "I'll do it quietly, without making a scene." },
          { s: "He seems to have a hard skin, so he won't be offended.", ok: false, fix: "He seems to have a thick skin, so he won't be offended." }
        ]
      },
      {
        type: "gap",
        title: "Complete with: a brave face, a huge scene, a step back, bottle up, off our chest, off steam, perspective, up the wall",
        src: "WB 4",
        items: [
          {
            q: "Usually we put ___ on small irritations and nobody notices.",
            answers: [
              ["a brave face"]
            ]
          },
          {
            q: "But sometimes a tiny thing makes us furious and we end up making ___.",
            answers: [
              ["a huge scene"]
            ]
          },
          {
            q: "Try to understand what is driving you ___.",
            answers: [
              ["up the wall"]
            ]
          },
          {
            q: "It isn't healthy to ___ our emotions.",
            answers: [
              ["bottle up"]
            ]
          },
          {
            q: "A good moan with a friend can help us get our frustrations ___.",
            answers: [
              ["off our chest"]
            ]
          },
          {
            q: "A physical activity is a great way to let ___.",
            answers: [
              ["off steam"]
            ]
          },
          {
            q: "Try to put the irritation into ___ – it's not the end of the world.",
            answers: [
              ["perspective"]
            ]
          },
          {
            q: "If we take ___ and think about the good things in our lives, the problem seems smaller.",
            answers: [
              ["a step back"]
            ]
          }
        ]
      }
    ]
  },
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
      },
      {
        type: "match",
        title: "Match the words to the definitions (the internet and social media)",
        src: "VB 1B",
        items: [
          { a: "ranting", b: "expressing your strong opinion passionately and emotionally" },
          { a: "flaming", b: "reacting angrily to others, turning a calm discussion into a fight" },
          { a: "trolling", b: "deliberately spoiling a discussion with negative, upsetting comments" },
          { a: "cyberbullying", b: "deliberately and repeatedly hurting a specific person online" },
          { a: "blanking", b: "ignoring somebody to make them feel bad" }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "VB 1B",
        items: [
          { q: "I'm tired of scrolling through my news ___ – it's full of ads.", options: ["bookmark", "feed", "navigation"], answer: 1 },
          { q: "My feed is just silly ___ and cat videos.", options: ["memes", "portals", "streams"], answer: 0 },
          { q: "I check which ___ are popular to see what people are talking about.", options: ["bandwidths", "portals", "hashtags"], answer: 2 },
          { q: "That hashtag has been ___ all morning.", options: ["feeding", "browsing", "trending"], answer: 2 },
          { q: "When everyone ___ films at once, the Wi-Fi slows down.", options: ["bookmarks", "streams", "trends"], answer: 1 },
          { q: "We quickly run out of ___ in our house.", options: ["bandwidth", "hashtags", "navigation"], answer: 0 },
          { q: "I start on my favourite news ___ and then follow links to other pages.", options: ["bandwidth", "meme", "site"], answer: 2 },
          { q: "I spent an hour ___ online without buying anything.", options: ["browsing", "feeding", "trending"], answer: 0 },
          { q: "I always ___ useful articles so I can find them later.", options: ["bookmark", "browse", "stream"], answer: 0 },
          { q: "That website's ___ is so confusing – I can never find the menu.", options: ["hashtags", "memes", "navigation"], answer: 2 }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make sentences",
        src: "Check 3",
        items: [
          { words: ["The", "rain", "seems", "to", "be", "getting", "heavier"], answer: "The rain seems to be getting heavier." },
          { words: ["The", "test", "turned", "out", "to", "be", "much", "easier", "than", "we'd", "expected"], answer: "The test turned out to be much easier than we'd expected." },
          { words: ["If", "you", "happen", "to", "see", "Oleh", "please", "ask", "him", "to", "call", "me"], answer: "If you happen to see Oleh, please ask him to call me." },
          { words: ["There", "seems", "to", "have", "been", "a", "mistake", "with", "the", "bill"], answer: "There seems to have been a mistake with the bill." },
          { words: ["Somebody", "appears", "to", "have", "been", "using", "my", "mug"], answer: "Somebody appears to have been using my mug." }
        ]
      },
      {
        type: "errors",
        title: "Are the sentences correct? Correct the ones with a mistake",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/modals-probability",
        items: [
          { s: "She seems having forgotten about our meeting.", ok: false, fix: "She seems to have forgotten about our meeting." },
          { s: "The parcel appears to have been opened before it arrived.", ok: true },
          { s: "He seems to be knowing everyone in the building.", ok: false, fix: "He seems to know everyone in the building." },
          { s: "Do you happen knowing where the nearest pharmacy is?", ok: false, fix: "Do you happen to know where the nearest pharmacy is?" },
          { s: "The rumour turned out to be completely unfounded.", ok: true },
          { s: "It seems him to have lost interest in the project.", ok: false, fix: "He seems to have lost interest in the project." },
          { s: "They don't appear to have been told about the changes.", ok: true },
          { s: "You seem to have been running — you're out of breath.", ok: true },
          { s: "The figures appear being wrong.", ok: false, fix: "The figures appear to be wrong." },
          { s: "It turned out that the manager had known all along.", ok: true }
        ]
      },
      {
        type: "sort",
        title: "Can the sentence be rewritten as Subject + verb/adjective + to-infinitive?",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/modals-probability",
        intro: "Наприклад, It seems that the printer is broken → The printer seems to be broken. Не всі вирази так «піднімають» підмет.",
        categories: ["Yes: subject raising works", "No: only It … that"],
        items: [
          { text: "It seems that the printer is broken.", cat: 0 },
          { text: "It is likely that the train will be late.", cat: 0 },
          { text: "It is obvious that she is upset.", cat: 1 },
          { text: "It appears that someone has taken my umbrella.", cat: 0 },
          { text: "It is possible that they missed the bus.", cat: 1 },
          { text: "It turned out that the café was closed.", cat: 0 },
          { text: "It is clear that the plan has failed.", cat: 1 },
          { text: "It is certain that prices will rise.", cat: 0 },
          { text: "It is probable that he forgot.", cat: 1 },
          { text: "It is unlikely that we'll win.", cat: 0 },
          { text: "It is true that he lied.", cat: 1 }
        ]
      }
    ]
  }
});
