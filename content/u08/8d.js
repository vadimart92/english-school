/*
 * 8D English in action
 */
ES.registerLesson({
  id: "8D",
  unit: 8,
  letter: "D",
  title: "English in action",
  uk: "Телефонні дзвінки: як упоратися з поганим зв'язком, уточнити, потягнути час і чемно завершити розмову",
  goal: "deal with problems on a call",
  focus: { vocab: "making a call", pron: "intonation: more to say or finishing" },
  learn: {
    theory: [
      {
        h: "Making a call",
        table: [
          ["audio call / video call", "a call with voice only / with camera"],
          ["landline", "a home or office phone connected by a cable"],
          ["mute (your mic)", "switch off your microphone"],
          ["put somebody on hold", "make somebody wait on the line"],
          ["put somebody on speakerphone", "let everyone in the room hear"],
          ["reception / signal", "the strength of the mobile connection"],
          ["voicemail", "a recorded message system"],
          ["a text (message)", "a written message"]
        ],
        uk: {
          h: "Як зателефонувати",
          table: [
            ["audio call / video call", "дзвінок лише з голосом / з камерою"],
            ["landline", "стаціонарний телефон удома чи в офісі"],
            ["mute (your mic)", "вимкнути мікрофон"],
            ["put somebody on hold", "поставити когось на очікування"],
            ["put somebody on speakerphone", "увімкнути гучний зв'язок, щоб чули всі в кімнаті"],
            ["reception / signal", "сила мобільного зв'язку, сигнал"],
            ["voicemail", "голосова пошта"],
            ["a text (message)", "текстове повідомлення, есемеска"]
          ]
        }
      },
      {
        h: "Call problems",
        list: [
          "The line is crackly. / You're cutting out / breaking up.",
          "There's an echo. / Your voice is muffled.",
          "It's an automated message."
        ],
        uk: {
          h: "Проблеми під час дзвінка",
          list: [
            "The line is crackly. / You're cutting out / breaking up. – Лінія тріщить. / Звук уривається, тебе погано чути.",
            "There's an echo. / Your voice is muffled. – Є відлуння. / Голос звучить глухо.",
            "It's an automated message. – Це автоматичне повідомлення."
          ]
        }
      },
      {
        h: "Dealing with problems and clarifying",
        table: [
          [
            "call problems",
            "It's a really crackly line and you're cutting out. / Can you hold the phone away from your face? / I can't hear you. Is your mic muted? / The signal's terrible. Can I call you back on the landline?"
          ],
          [
            "asking for clarification",
            "Two… what? / Sorry, I don't (quite) get what you mean. / I didn't quite catch that. / You mean it's…? / You lost me at… / Fifty or fifteen? / How do you spell that? / Sorry, I'm probably being stupid, but… / Can I just (double) check what you mean by…?"
          ],
          [
            "clarifying what you mean",
            "I (just) meant… / Sorry, my fault. Let me say that again. / M for 'mike', A for 'alpha'… / In other words, … / Let me put it another way. / That's to say… / What I meant to say was…"
          ]
        ],
        uk: {
          h: "Як розв'язувати проблеми й уточнювати",
          table: [
            [
              "проблеми зі зв'язком",
              "It's a really crackly line and you're cutting out. / Can you hold the phone away from your face? / I can't hear you. Is your mic muted? / The signal's terrible. Can I call you back on the landline?"
            ],
            [
              "як перепитати",
              "Two… what? / Sorry, I don't (quite) get what you mean. / I didn't quite catch that. / You mean it's…? / You lost me at… / Fifty or fifteen? / How do you spell that? / Sorry, I'm probably being stupid, but… / Can I just (double) check what you mean by…?"
            ],
            [
              "як пояснити, що ти мав на увазі",
              "I (just) meant… / Sorry, my fault. Let me say that again. / M for 'mike', A for 'alpha'… / In other words, … / Let me put it another way. / That's to say… / What I meant to say was…"
            ]
          ]
        }
      },
      {
        h: "Managing the conversation",
        table: [
          [
            "stalling for time",
            "That's a good question. / Hang on. / Let me think. / Just give me a sec. / One moment, I won't keep you. / Almost there…"
          ],
          [
            "getting to the point",
            "Was there something I can help you with? / Was there something you wanted? / Anyway, I expect you're calling about… / Right. So you were calling about…"
          ],
          [
            "getting the other person to finish",
            "Well, I mustn't keep you. / I'll let you get on. / It's been great talking to you. / Sorry, I've got to go. / Look, I'm sorry, but I'm really busy at the moment."
          ]
        ],
        uk: {
          h: "Як керувати розмовою",
          table: [
            [
              "як виграти час",
              "That's a good question. / Hang on. / Let me think. / Just give me a sec. / One moment, I won't keep you. / Almost there…"
            ],
            [
              "як перейти до суті",
              "Was there something I can help you with? / Was there something you wanted? / Anyway, I expect you're calling about… / Right. So you were calling about…"
            ],
            [
              "як м'яко завершити розмову",
              "Well, I mustn't keep you. / I'll let you get on. / It's been great talking to you. / Sorry, I've got to go. / Look, I'm sorry, but I'm really busy at the moment."
            ]
          ]
        }
      },
      {
        h: "Intonation",
        p: "A rising or level tone signals you have more to say (Hang on… / Let me think…). A falling tone signals you are finishing your turn (It's been great talking to you.).",
        ex: ["One moment, I won't keep you…", "Well, I'll let you get on."],
        uk: { h: "Інтонація", p: "Висхідний або рівний тон показує, що ти ще не договорив (Hang on… / Let me think…). Спадний тон показує, що ти завершуєш свою репліку (It's been great talking to you.)." }
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with: audio call, landline, mute, on hold, reception, signal, speakerphone, text, video call, voicemail",
        src: "SB 8D",
        items: [
          {
            q: "Hang on, there's another call coming in. Can I put you ___ for a moment?",
            answers: [
              ["on hold"]
            ]
          },
          {
            q: "Can you hear me now? Sorry, I ___ my microphone by mistake.",
            answers: [
              ["muted"]
            ]
          },
          {
            q: "Do you mind if I put you on ___? Olha wants to say hello.",
            answers: [
              ["speakerphone"]
            ]
          },
          {
            q: "There's no mobile ___ at the cottage, but you can call us on the ___.",
            answers: [
              ["reception", "signal"],
              ["landline"]
            ]
          },
          {
            q: "If I don't pick up, leave a message on my ___.",
            answers: [
              ["voicemail"]
            ]
          },
          {
            q: "Can you send me a ___ with the address?",
            answers: [
              ["text", "text message"]
            ]
          },
          {
            q: "I don't want to do a ___ – I'm still in my pyjamas! Can we do an ___?",
            answers: [
              ["video call"],
              ["audio call"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the problems to the descriptions",
        src: "SB 8D",
        items: [
          { a: "The line is crackly.", b: "There's a lot of noise on the line." },
          { a: "There's an echo.", b: "You hear your own voice repeated." },
          { a: "Your voice is muffled.", b: "Your voice is unclear, as if something is covering the phone." },
          { a: "You're cutting out.", b: "Some of your words disappear." },
          { a: "It's an automated message.", b: "A recorded voice, not a real person." }
        ]
      },
      {
        type: "sort",
        title: "Which section do the phrases belong to?",
        src: "SB 8D",
        categories: ["call problems", "asking for clarification", "clarifying what you mean"],
        items: [
          { text: "It's a really crackly line and you're cutting out.", cat: 0 },
          { text: "Can you hold the phone away from your face?", cat: 0 },
          { text: "I can't hear you. Is your mic muted?", cat: 0 },
          { text: "The signal's terrible. Can I call you back on the landline?", cat: 0 },
          { text: "I didn't quite catch that.", cat: 1 },
          { text: "Fifty or fifteen?", cat: 1 },
          { text: "Sorry, I'm probably being stupid, but…", cat: 1 },
          { text: "Can I just double check what you mean by…?", cat: 1 },
          { text: "You lost me at…", cat: 1 },
          { text: "Let me put it another way.", cat: 2 },
          { text: "M for 'mike', A for 'alpha'…", cat: 2 },
          { text: "That's to say…", cat: 2 },
          { text: "What I meant to say was…", cat: 2 },
          { text: "Sorry, it's / that is…", cat: 2 }
        ]
      },
      {
        type: "sort",
        title: "Stalling, getting to the point or finishing?",
        src: "SB 8D",
        categories: [
          "stalling for time",
          "getting the other speaker to the point",
          "getting the other speaker to finish"
        ],
        items: [
          { text: "That's a good question.", cat: 0 },
          { text: "Hang on.", cat: 0 },
          { text: "Just give me a sec.", cat: 0 },
          { text: "One moment, I won't keep you.", cat: 0 },
          { text: "Was there something you wanted?", cat: 1 },
          { text: "Anyway, I expect you're calling about…", cat: 1 },
          { text: "Right. So you were calling about…", cat: 1 },
          { text: "Well, I mustn't keep you.", cat: 2 },
          { text: "I'll let you get on.", cat: 2 },
          { text: "Look, I'm sorry, but I'm really busy at the moment.", cat: 2 }
        ]
      },
      {
        type: "speak",
        title: "Deal with problems on a call",
        src: "SB 8D",
        phrases: [
          "didn't quite catch",
          "cutting out",
          "crackly",
          "How do you spell",
          "Fifty or fifteen",
          "Let me put it another way",
          "for 'alpha'",
          "Hang on",
          "I'll let you get on",
          "Was there something"
        ],
        items: [
          { q: "You don't understand what the caller just said.", models: ["Sorry, I didn't quite catch that. You're cutting out – could you say it again?"] },
          { q: "You need to check a number.", models: ["Sorry, was that fifty or fifteen? One-five?"] },
          {
            q: "Spell out the name Hanoko.",
            models: [
              "That's H for 'hotel', A for 'alpha', N for 'november', O for 'oscar', K for 'kilo', O for 'oscar'."
            ]
          },
          {
            q: "Your explanation wasn't clear. Rephrase it.",
            models: [
              "Sorry, my fault. Let me put it another way – what I meant to say was that the meeting is moved, not cancelled."
            ]
          },
          { q: "A friend has been chatting for ages and you need to go.", models: ["Well, I'll let you get on. It's been great talking to you – speak soon!"] }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "match",
        title: "Match the sentence halves",
        src: "WB 8D",
        items: [
          { a: "I'm afraid you lost me", b: "at the point you mentioned statistics." },
          { a: "Can you hold", b: "the phone away from your face?" },
          { a: "Let me put", b: "it another way for you." },
          { a: "Can I just double", b: "check what you mean by that?" },
          { a: "Is your mic", b: "muted? I can't hear you." },
          { a: "I'm probably being", b: "stupid, but what's the problem?" },
          { a: "Sorry, I didn't quite", b: "catch what you said." },
          { a: "Let me explain what", b: "I mean by that." }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversation with: catch, crackly, cutting, fault, get, mean, signal, spell",
        src: "WB 8D",
        items: [
          {
            q: "A: Four… what? Sorry, it's a really ___ line and you keep ___ out.",
            answers: [
              ["crackly"],
              ["cutting"]
            ]
          },
          {
            q: "B: Sorry, my ___. I'll move closer to the window. Can you hear me now?",
            answers: [
              ["fault"]
            ]
          },
          {
            q: "A: Sorry, I didn't quite ___ that. The ___ is terrible.",
            answers: [
              ["catch"],
              ["signal"]
            ]
          },
          {
            q: "A: Cinnamon rolls? I don't ___ what you mean.",
            answers: [
              ["get"]
            ]
          },
          {
            q: "A: Oh! You ___ it's a kind of pastry! How do you ___ 'cinnamon'?",
            answers: [
              ["mean"],
              ["spell"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Put the words in order",
        src: "WB 8D",
        intro: "Then decide: stalling for time, getting to the point or getting the other speaker to finish?",
        items: [
          { words: ["get", "you", "let", "I'll", "on"], answer: "I'll let you get on." },
          { words: ["calling", "your", "you're", "expect", "I", "account", "about"], answer: "I expect you're calling about your account." },
          { words: ["I'm", "I'm", "at", "moment", "really", "sorry", "but", "the", "busy"], answer: "I'm sorry, but I'm really busy at the moment." },
          { words: ["Just", "sec", "me", "give", "a"], answer: "Just give me a sec." },
          { words: ["there", "something", "can", "help", "you", "Was", "with", "I"], answer: "Was there something I can help you with?" },
          { words: ["won't", "I", "moment", "keep", "you", "One"], answer: "One moment, I won't keep you." },
          { words: ["you", "something", "Was", "wanted", "there"], answer: "Was there something you wanted?" },
          { words: ["to", "great", "It's", "you", "talking", "been"], answer: "It's been great talking to you." }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversation",
        src: "WB 8D",
        intro: "Phrases: can you hold the phone away from your face, hang on, I'll let you get on, that's a good question, thirteen or thirty, you were calling about",
        items: [
          {
            q: "A: Oh, busy as always. So, ___…?",
            answers: [
              ["you were calling about"]
            ]
          },
          {
            q: "B: This weekend. It looks like thirteen of us are going to Mum's. A: Was that ___?",
            answers: [
              ["thirteen or thirty"]
            ]
          },
          {
            q: "A: Sorry, ___? It's hard to hear you.",
            answers: [
              ["can you hold the phone away from your face"]
            ]
          },
          {
            q: "B: Do you have the name of the hotel? A: Hmm, ___. Let me see…",
            answers: [
              ["that's a good question"]
            ]
          },
          {
            q: "A: ___ while I look… Here it is. I'll message it to you.",
            answers: [
              ["Hang on"]
            ]
          },
          {
            q: "B: Great, thanks. ___ and I'll see you on Friday.",
            answers: [
              ["I'll let you get on"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Call phrases: one line each",
        list: [
          "Problem: Sorry, it's a really crackly line. / You're breaking up.",
          "Clarify: I didn't quite catch that. / Fifty or fifteen? / How do you spell that?",
          "Rephrase: Let me put it another way. / What I meant to say was…",
          "Stall: Hang on. / Just give me a sec. / One moment, I won't keep you.",
          "To the point: Was there something I can help you with?",
          "Finish: I'll let you get on. / It's been great talking to you. / Sorry, I've got to go."
        ],
        uk: {
          h: "Фрази для дзвінків: по рядку на кожну ситуацію",
          list: [
            "Проблема: Sorry, it's a really crackly line. / You're breaking up.",
            "Перепитати: I didn't quite catch that. / Fifty or fifteen? / How do you spell that?",
            "Перефразувати: Let me put it another way. / What I meant to say was…",
            "Виграти час: Hang on. / Just give me a sec. / One moment, I won't keep you.",
            "До суті: Was there something I can help you with?",
            "Завершити: I'll let you get on. / It's been great talking to you. / Sorry, I've got to go."
          ]
        }
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "Check 8",
        items: [
          { q: "Well, I've got ___ for you.", options: ["new", "news"], answer: 1 },
          { q: "Sorry, I don't quite ___ you.", options: ["get", "have"], answer: 0 },
          { q: "Let me ___ it another way.", options: ["put", "give"], answer: 0 },
          { q: "One moment, I won't ___ you.", options: ["keep", "catch"], answer: 0 },
          { q: "Look, I'm sorry, but I'm busy ___ the moment.", options: ["on", "at"], answer: 1 },
          { q: "Was there something I can help you ___?", options: ["with", "for"], answer: 0 },
          { q: "Anyway, I ___ you're calling about the invoice.", options: ["expect", "aspire"], answer: 0 },
          { q: "It's been great talking ___ you.", options: ["to", "at"], answer: 0 },
          { q: "Sorry, I've got to ___.", options: ["go", "hang"], answer: 0 },
          { q: "Sorry, it's a really ___ line.", options: ["crackly", "automated"], answer: 0 },
          { q: "Let me ___ that again.", options: ["try", "speak"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the phone phrases",
        src: "Revision",
        items: [
          {
            q: "Can I put you on ___ for a second? There's someone at the door.",
            answers: [
              ["hold"]
            ]
          },
          {
            q: "Sorry, I can't hear you. Is your mic ___?",
            answers: [
              ["muted"]
            ]
          },
          {
            q: "You're breaking ___ – I'll call you back.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "Your voice sounds a bit ___. Is something covering the phone?",
            answers: [
              ["muffled"]
            ]
          },
          {
            q: "Sorry, you lost ___ at the part about the deadline.",
            answers: [
              ["me"]
            ]
          },
          {
            q: "D for 'delta', E for 'echo'… Sorry, how do you ___ that again?",
            answers: [
              ["spell"]
            ]
          },
          {
            q: "Just give me a ___ – I'm finding the file.",
            answers: [
              ["sec", "second"]
            ]
          },
          {
            q: "Well, I mustn't ___ you. Speak soon!",
            answers: [
              ["keep"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Respond on the phone",
        src: "Revision",
        phrases: [
          "crackly",
          "cutting out",
          "didn't quite catch",
          "Can I just check",
          "Let me put it another way",
          "Hang on",
          "Was there something",
          "I'll let you get on",
          "I've got to go"
        ],
        items: [
          { q: "The line is bad and you can only hear half the words.", models: ["Sorry, it's a really crackly line and you're cutting out. Can I call you back on the landline?"] },
          { q: "Your colleague says 'the report's due on the fifteenth' – you're not sure if it's 15th or 50th page.", models: ["Sorry, can I just double check what you mean – the fifteenth of the month, or page fifteen?"] },
          { q: "A caller asks a question you need time to think about.", models: ["That's a good question. Hang on, let me think…"] },
          { q: "An old acquaintance calls and chats without saying why.", models: ["It's lovely to hear from you! Anyway, was there something I can help you with?"] },
          { q: "You need to end a long call politely.", models: ["Well, I'll let you get on. It's been great talking to you – sorry, I've got to go."] }
        ]
      },
      {
        type: "sort",
        title: "Stalling or finishing?",
        src: "SB 8D",
        intro: "Listen to your own intonation: rising/level = more to come; falling = finishing.",
        categories: ["stalling for time", "wanting to finish"],
        items: [
          { text: "Hang on…", cat: 0 },
          { text: "Let me think…", cat: 0 },
          { text: "Almost there…", cat: 0 },
          { text: "One moment, I won't keep you…", cat: 0 },
          { text: "Well, I mustn't keep you.", cat: 1 },
          { text: "Sorry, I've got to go.", cat: 1 },
          { text: "It's been great talking to you.", cat: 1 }
        ]
      }
    ]
  }
});
