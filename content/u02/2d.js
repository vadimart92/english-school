/*
 * 2D English in action
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "2D",
  unit: 2,
  letter: "D",
  title: "English in action",
  uk: "Швидка розмова: як керувати бесідою",
  goal: "manage a fast-paced conversation",
  focus: { vocab: "conversation", pron: "using intonation to indicate a conversation is finished" },
  learn: {
    theory: [
      {
        h: "Conversation vocabulary",
        table: [
          ["butt in", "interrupt, join a conversation uninvited"],
          ["have a heart-to-heart (with)", "have an open, honest, personal talk"],
          ["have a chit chat (with)", "have a light, casual chat"],
          ["reiterate", "repeat (for emphasis)"],
          ["go on about", "keep talking about something (annoyingly)"],
          ["go off on a tangent", "move away from the topic"],
          ["thrash it out", "discuss something in detail and settle it (often arguing)"],
          ["talk shop", "talk about work outside working hours"],
          ["clam up", "suddenly stop talking, shut down"],
          ["banter", "friendly teasing, playful exchange of jokes"],
          ["broach the subject", "carefully raise a (sensitive) topic"],
          ["confer with", "consult, discuss with (formal)"]
        ],
        uk: {
          h: "Лексика: розмова",
          table: [
            ["butt in", "перебити, втрутитися в розмову"],
            ["have a heart-to-heart (with)", "щиро поговорити по душах"],
            ["have a chit chat (with)", "легко побалакати"],
            ["reiterate", "повторити (для наголосу)"],
            ["go on about", "без кінця говорити про щось (дратівливо)"],
            ["go off on a tangent", "відхилитися від теми"],
            ["thrash it out", "детально обговорити й вирішити (часто сперечаючись)"],
            ["talk shop", "говорити про роботу в неробочий час"],
            ["clam up", "замовкнути, «закритися»"],
            ["banter", "дружні підколки, жартівлива перепалка"],
            ["broach the subject", "обережно порушити (делікатну) тему"],
            ["confer with", "порадитися з (офіційно)"]
          ]
        }
      },
      {
        h: "Keeping a conversation going",
        table: [
          ["Showing you're listening", "How rude! · Right. · The cheek of it! · No way! · Really?"],
          [
            "Eliciting more information",
            "Do tell! · How so? · Go on. · So what was going on? · What happened then?"
          ],
          ["Keeping your turn", "Let me finish. · Hang on, there's more. · Wait, hear me out."],
          [
            "Getting back to what you were saying",
            "So, as I was saying… · Getting back to… · What I was trying to say was…"
          ]
        ],
        uk: {
          h: "Як підтримувати розмову",
          table: [
            ["Показати, що слухаєш", "How rude! · Right. · The cheek of it! · No way! · Really?"],
            ["Розпитати більше", "Do tell! · How so? · Go on. · So what was going on? · What happened then?"],
            ["Утримати слово", "Let me finish. · Hang on, there's more. · Wait, hear me out."],
            [
              "Повернутися до своєї думки",
              "So, as I was saying… · Getting back to… · What I was trying to say was…"
            ]
          ]
        }
      },
      {
        h: "Ending a conversation",
        list: [
          "I'll let you get back to work.",
          "Anyway, it's getting late.",
          "I'd best be off.",
          "Oh, sorry, but I've just seen someone I need to talk to…",
          "It was nice to meet you.",
          "I might have to make a move, too.",
          "I'll have to stop you there, sorry – I've got another meeting."
        ],
        p: "Intonation: to show it's time to end the conversation, your voice falls on a phrase like Anyway…, you slow down, and the phrases sound warm but final.",
        uk: {
          h: "Як завершити розмову",
          list: [
            "I'll let you get back to work. — Не відволікатиму тебе від роботи.",
            "Anyway, it's getting late. — Ну що ж, уже пізно.",
            "I'd best be off. — Мені, мабуть, пора.",
            "Oh, sorry, but I've just seen someone I need to talk to… — Ой, вибач, я щойно побачив людину, з якою мені треба поговорити…",
            "It was nice to meet you. — Приємно було познайомитися.",
            "I might have to make a move, too. — Мені, мабуть, теж пора йти.",
            "I'll have to stop you there, sorry – I've got another meeting. — Вибач, мушу тебе перервати — в мене ще одна зустріч."
          ],
          p: "Інтонація: щоб показати, що розмову час завершувати, голос на фразі на кшталт Anyway… опускається, темп сповільнюється, а самі фрази звучать тепло, але остаточно."
        }
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the comments with the replies",
        src: "SB 2a",
        items: [
          { a: "Can I just butt in? I think these numbers are wrong.", b: "Maybe you're right. Let me confer with the accounts team." },
          { a: "I need to have a heart-to-heart with Dan about his debts.", b: "Yes, but broach the subject carefully." },
          { a: "I can't believe he called me 'grandpa'!", b: "Ha, it's just banter – don't take it personally." },
          { a: "Talking of holidays, did I tell you about my cousin's dog…?", b: "Sorry, you're going off on a tangent again. Can we finish the plan first?" },
          { a: "Did you have a chit chat with Mia at the wedding?", b: "I tried, but I always clam up around her." },
          { a: "Let me reiterate: the report must be ready by Monday.", b: "Agreed. We'll thrash it out today and send it tomorrow." },
          { a: "Nice party! So what did you think of the sales figures?", b: "Let's not talk shop – we're here to have fun!" },
          { a: "What was Ira going on about?", b: "Nothing much, just gossip about her neighbours." }
        ]
      },
      {
        type: "cards",
        title: "Conversation",
        src: "SB 2a",
        items: [
          { front: "butt in", back: "втрутитися, перебити", ex: "Sorry to butt in, but your taxi's here." },
          { front: "have a heart-to-heart", back: "поговорити щиро, по душах", ex: "We had a heart-to-heart and sorted things out." },
          { front: "have a chit chat", back: "легко побалакати", ex: "We had a quick chit chat in the corridor." },
          { front: "reiterate", back: "повторити, наголосити ще раз", ex: "Let me reiterate how important safety is." },
          { front: "go on about", back: "довго й нудно говорити про щось", ex: "He keeps going on about his new car." },
          { front: "go off on a tangent", back: "відхилитися від теми", ex: "Sorry, I've gone off on a tangent again." },
          { front: "thrash it out", back: "детально обговорити й вирішити", ex: "Let's get everyone in a room and thrash it out." },
          { front: "talk shop", back: "говорити про роботу поза роботою", ex: "No talking shop at dinner, please!" },
          { front: "clam up", back: "замовкнути, закритися", ex: "When I asked about her ex, she clammed up." },
          { front: "banter", back: "дружні жарти й підколки", ex: "There's a lot of banter in our office." },
          { front: "broach the subject", back: "обережно підняти тему", ex: "How can I broach the subject of a pay rise?" },
          { front: "confer with", back: "порадитися з", ex: "I'll confer with my colleagues and call you back." }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "SB 3a",
        items: [
          { q: "I hate it when people ___ while I'm still speaking.", options: ["reiterate", "butt in"], answer: 1 },
          { q: "I'm bad at telling stories. I keep ___ and forgetting the point.", options: ["going off on a tangent", "bantering"], answer: 0 },
          { q: "My brothers tease each other all the time, but it's just ___.", options: ["banter", "reiteration"], answer: 0 },
          { q: "We don't always agree, so we sit down and ___ until we find a compromise.", options: ["butt in", "thrash it out"], answer: 1 },
          { q: "It's hard to ___ money with my parents.", options: ["talk shop about", "broach the subject of"], answer: 1 },
          { q: "I always ___ my partner before making big decisions.", options: ["go on about", "confer with"], answer: 1 },
          { q: "In job interviews I tend to ___ and forget what I wanted to say.", options: ["clam up", "go on about something"], answer: 0 },
          { q: "Our old neighbour used to ___ his garden for hours.", options: ["have a heart-to-heart about", "go on about"], answer: 1 }
        ]
      },
      {
        type: "sort",
        title: "Which technique does each phrase show?",
        src: "SB 5b-c",
        categories: [
          "Showing you're listening",
          "Eliciting more information",
          "Keeping your turn",
          "Getting back to what you were saying"
        ],
        items: [
          { text: "How rude!", cat: 0 },
          { text: "The cheek of it!", cat: 0 },
          { text: "No way!", cat: 0 },
          { text: "Really?", cat: 0 },
          { text: "Do tell!", cat: 1 },
          { text: "How so?", cat: 1 },
          { text: "Go on.", cat: 1 },
          { text: "What happened then?", cat: 1 },
          { text: "Let me finish.", cat: 2 },
          { text: "Hang on, there's more.", cat: 2 },
          { text: "Wait, hear me out.", cat: 2 },
          { text: "So, as I was saying…", cat: 3 },
          { text: "Getting back to…", cat: 3 },
          { text: "What I was trying to say was…", cat: 3 }
        ]
      },
      {
        type: "gap",
        title: "Complete the phrases for ending a conversation with one, two or three words",
        src: "SB 7b",
        items: [
          {
            q: "I'll ___ back to work.",
            answers: [
              ["let you get"]
            ]
          },
          {
            q: "Anyway, ___ late.",
            answers: [
              ["it's getting", "it is getting"]
            ]
          },
          {
            q: "I'd ___ off.",
            answers: [
              ["best be", "better be"]
            ]
          },
          {
            q: "Oh, sorry, but I've ___ seen someone I need to say hello to…",
            answers: [
              ["just"]
            ]
          },
          {
            q: "It ___ meet you.",
            answers: [
              ["was nice to", "was lovely to", "was great to", "was good to"]
            ]
          },
          {
            q: "I might have to ___, too.",
            answers: [
              ["make a move"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Manage a fast-paced conversation",
        src: "SB 9-10",
        intro: "Choose a topic: gossip about someone you know, a recent unusual experience, an issue at work, plans for the weekend, something silly you've posted online. Tell the story, keep the conversation going and end it politely.",
        phrases: [
          "How rude",
          "No way",
          "The cheek of it",
          "Do tell",
          "How so",
          "Go on",
          "Let me finish",
          "Hang on, there's more",
          "hear me out",
          "as I was saying",
          "Getting back to",
          "it's getting late",
          "best be off",
          "make a move",
          "let you get back"
        ],
        items: [
          { q: "Your friend starts a story: 'A man at the gym took my towel…' React and ask for more.", models: ["No way! The cheek of it! So what was going on?"] },
          { q: "Someone interrupts your story. Keep your turn.", models: ["Hang on, there's more – let me finish!"] },
          { q: "The conversation went off on a tangent. Return to your story.", models: ["Anyway, getting back to what I was saying about the gym…"] },
          { q: "Your friend says the new manager is 'interesting'. Elicit more information.", models: ["How so? Do tell!"] },
          {
            q: "End the conversation politely.",
            models: [
              "Anyway, it's getting late – I'd best be off. It was lovely to catch up!",
              "I'll let you get back to work. I might have to make a move, too."
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
          { q: "We haven't met for months. Let's have a ___ over lunch.", options: ["banter", "chit chat", "tangent"], answer: 1 },
          { q: "I asked him what was wrong, but he just ___.", options: ["clammed up", "butted in", "broached the subject"], answer: 0 },
          { q: "I need to have a ___ with my sister about our mum's health.", options: ["chit chat", "banter", "heart-to-heart"], answer: 2 },
          { q: "Interesting offer. Let me ___ my partners and I'll call you.", options: ["butt in", "confer with", "reiterate"], answer: 1 },
          { q: "He's very sensitive about his weight. I wouldn't ___.", options: ["broach the subject", "reiterate", "talk shop"], answer: 0 },
          { q: "Sorry, I know I ___ football a lot, but I love it.", options: ["have a chit chat", "go off on a tangent", "go on about"], answer: 2 },
          { q: "Sorry to ___, but can I add something?", options: ["talk shop", "butt in", "clam up"], answer: 1 },
          { q: "Let me ___ how urgent this order is.", options: ["reiterate", "talk shop", "butt in"], answer: 0 }
        ]
      },
      {
        type: "sort",
        title: "Complete the table with the phrases",
        src: "WB 2",
        categories: [
          "Eliciting more information",
          "Showing you're listening",
          "Returning to what you were saying",
          "Keeping your turn"
        ],
        items: [
          { text: "Do tell!", cat: 0 },
          { text: "Go on.", cat: 0 },
          { text: "How so?", cat: 0 },
          { text: "How rude!", cat: 1 },
          { text: "No way!", cat: 1 },
          { text: "The cheek of it!", cat: 1 },
          { text: "Getting back to…", cat: 2 },
          { text: "So, as I was saying…", cat: 2 },
          { text: "What I was trying to say was…", cat: 2 },
          { text: "Hang on, there's more.", cat: 3 },
          { text: "Let me finish.", cat: 3 },
          { text: "Wait, hear me out.", cat: 3 }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "WB 3",
        intro: "A: When I came back from the counter, a woman had put her bags on my seat. She said it was 'her seat now'.",
        items: [
          { q: "B: ___!", options: ["Go on", "The cheek of it"], answer: 1 },
          {
            q: "A: I didn't argue, I just moved. B: Fair enough. When I worked in a shop, some customers… A: ___ Ten minutes later she went to the toilet, so I sat back down.",
            options: ["Hang on, there's more.", "Wait, hear me out."],
            answer: 0,
            explain: "B has started a new story, so A keeps their turn by saying there's more to their own story."
          },
          { q: "B: And ___?", options: ["what was going on", "what happened then"], answer: 1 },
          { q: "A: Nothing, she just found another seat. B: Good for you. ___ some of my customers were really rude.", options: ["Getting back to what I was saying earlier,", "Let me finish."], answer: 0 },
          { q: "A (wants to hear the details): ___!", options: ["Do tell", "How rude"], answer: 0, explain: "A wants to hear more (eliciting information)." },
          { q: "B: One man complained that his free coffee was too hot. A: ___? B: He said it should be 'free AND drinkable'.", options: ["How so", "Really"], answer: 0 },
          { q: "A: ___!", options: ["No way", "Hear me out"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversations using the prompts",
        src: "WB 4",
        items: [
          {
            q: "A: That was a lovely dinner. B: It was. Anyway, ___ (get / late).",
            answers: [
              ["it's getting late", "it is getting late"]
            ]
          },
          {
            q: "B: I'm sure we'll meet again. ___ (nice / meet), Oksana.",
            answers: [
              [
                "It was nice to meet you",
                "It was nice meeting you",
                "It's been nice meeting you",
                "It's been nice to meet you",
                "Nice to meet you",
                "Nice meeting you"
              ]
            ]
          },
          {
            q: "B: ___ (I / stop / there), sorry. I've got a call at three.",
            answers: [
              [
                "I'll have to stop you there",
                "I need to stop you there",
                "I'm going to have to stop you there",
                "I have to stop you there"
              ]
            ]
          },
          {
            q: "Is it five already? ___ (might / have / make / move).",
            answers: [
              ["I might have to make a move", "We might have to make a move"]
            ]
          },
          {
            q: "A: Anyway, I've talked enough. ___ (I / let / back / work).",
            answers: [
              ["I'll let you get back to work", "I will let you get back to work"]
            ]
          },
          {
            q: "Right, ___ (I / best / off). Thanks for the chat.",
            answers: [
              ["I'd best be off", "I had best be off"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [],
    exercises: [
      {
        type: "gap",
        title: "Complete each useful phrase with one word",
        src: "Check 13",
        items: [
          {
            q: "Eliciting more information: So what was ___ on?",
            answers: [
              ["going"]
            ]
          },
          {
            q: "Getting back to what you were saying: So, ___ I was saying, …",
            answers: [
              ["as"]
            ]
          },
          {
            q: "Leaving a conversation: Anyway, it's getting late. I'd ___ be off.",
            answers: [
              ["best", "better"]
            ]
          },
          {
            q: "Leaving a conversation: I might have to make a ___.",
            answers: [
              ["move"]
            ]
          },
          {
            q: "Keeping your turn: Wait, hear me ___.",
            answers: [
              ["out"]
            ]
          },
          {
            q: "Showing you're listening: The ___ of it!",
            answers: [
              ["cheek"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversation idioms",
        src: "Revision",
        items: [
          {
            q: "Sorry to butt ___, but your phone's ringing.",
            answers: [
              ["in"]
            ]
          },
          {
            q: "We disagreed for hours, but in the end we thrashed it ___.",
            answers: [
              ["out"]
            ]
          },
          {
            q: "She always clams ___ when someone mentions her old job.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "Please, no talking ___ at the party – it's a day off!",
            answers: [
              ["shop"]
            ]
          },
          {
            q: "He went off on a ___ about his trip to Spain.",
            answers: [
              ["tangent"]
            ]
          },
          {
            q: "I'll need to confer ___ my manager first.",
            answers: [
              ["with"]
            ]
          },
          {
            q: "It's time we had a heart-to-___ about our future.",
            answers: [
              ["heart"]
            ]
          },
          {
            q: "I didn't know how to ___ the subject of moving out.",
            answers: [
              ["broach", "raise"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "React and keep the conversation going",
        src: "Revision",
        phrases: [
          "How rude",
          "No way",
          "The cheek of it",
          "Do tell",
          "How so",
          "What happened then",
          "Let me finish",
          "Hang on",
          "as I was saying",
          "Getting back to",
          "it's getting late",
          "best be off",
          "make a move"
        ],
        items: [
          { q: "'My neighbour parked in my space again – and left a note telling ME to move!'", models: ["The cheek of it! What happened then?"] },
          { q: "'Guess who I saw at the airport yesterday…'", models: ["Ooh, do tell!"] },
          { q: "Your friend interrupts before you've finished your story.", models: ["Hang on, there's more – let me finish!"] },
          { q: "After a long tangent, you return to your point.", models: ["Anyway, as I was saying, the flight was cancelled…"] },
          { q: "It's late and you want to leave politely.", models: ["Right, it's getting late – I'd best be off. Great to see you!"] }
        ]
      }
    ]
  }
});
