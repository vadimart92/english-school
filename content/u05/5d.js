/*
 * 5D English in action
 */
ES.registerLesson({
  id: "5D",
  unit: 5,
  letter: "D",
  title: "English in action",
  uk: "Ввічлива відмова: відмовки, обережні прохання та непрямі «ні»",
  goal: "politely refuse a request",
  focus: { vocab: "excuses", pron: "intonation: agreeing vs. refusing" },
  learn: {
    theory: [
      {
        h: "Excuses",
        p: "Start with a softener (Sorry, I'd love to help, but…) and then give a reason.",
        table: [
          [
            "too busy",
            "I'm snowed under. · I've got a lot on my plate. · Life's a bit hectic right now. · I've got an almighty backlog of emails. · I'm in the middle of something urgent. · I'm a bit tied up."
          ],
          [
            "busy at that time",
            "I'm otherwise engaged (formal). · Something else has cropped up. · I've just got to pop out for a moment. · It's an awkward moment."
          ],
          [
            "can't do it",
            "I'd be completely out of my depth. · It's out of my hands. · My back's playing up again. · It's a little out of my way."
          ],
          ["no real reason", "I can't help for, er, personal reasons."]
        ]
      },
      {
        h: "Making difficult requests",
        list: [
          "Do you mind if I ask you a small favour?",
          "I don't suppose you'd be able to help me, would you?",
          "Is there any way / any chance you could help me?",
          "Do you think we might be able to use your car?",
          "I know it's a big ask. / I realise it's a lot to ask.",
          "I don't want to put any pressure on you, but…",
          "It would make a huge difference / It would mean a lot to me if you could…",
          "I have another small favour to ask you."
        ]
      },
      {
        h: "Refusing",
        table: [
          [
            "direct but polite refusals",
            "No, I'm afraid that's not going to be possible. · Unfortunately, it's out of the question. · Sorry, but it's not possible today. · I'd love to help, but I can't."
          ],
          [
            "reasons for refusals",
            "I really need to… · I'm totally snowed under at the moment. · …for personal reasons."
          ],
          [
            "indirect phrases (often a hidden 'no')",
            "Yeah, possibly. · I'll see what I can do. · I'm not sure. · I'll do my best. · We'll see."
          ]
        ]
      },
      {
        h: "Pronunciation: yes or no?",
        p: "The same words can agree or refuse. A bright, high, falling tone sounds willing (I'll SEE what I can do ↘). A flat, low tone with a fall-rise and hesitation sounds like an excuse is coming (Well… I'll see what I can do ↘↗)."
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the expressions with their meanings",
        src: "SB 5D ex 2a",
        items: [
          { a: "snowed under", b: "busy with more work than I can handle" },
          { a: "out of my hands", b: "impossible for me to control" },
          { a: "otherwise engaged", b: "busy with something else (formal)" },
          { a: "a backlog", b: "a huge pile of work that has built up" },
          { a: "hectic", b: "extremely busy" },
          { a: "awkward", b: "difficult, inconvenient" },
          { a: "crop up", b: "happen unexpectedly, appear" },
          { a: "out of my depth", b: "without the skills a situation needs" },
          { a: "pop out", b: "leave the room/building for a moment" },
          { a: "play up", b: "cause problems (a body part, a machine)" }
        ]
      },
      {
        type: "choice",
        title: "Which excuse fits the situation best?",
        src: "SB 5D ex 2b",
        items: [
          { q: "You have something else to do at that exact time.", options: ["I'm otherwise engaged.", "I'd be out of my depth.", "My knee's playing up."], answer: 0 },
          { q: "You're too busy in general.", options: ["I've got a lot on my plate.", "It's a little out of my way.", "It's out of my hands."], answer: 0 },
          { q: "You don't feel competent.", options: ["I'd be completely out of my depth.", "Something's cropped up.", "Life's a bit hectic."], answer: 0 },
          { q: "You have health problems.", options: ["My back's playing up again.", "I'm otherwise engaged.", "I'm snowed under."], answer: 0 },
          { q: "You don't want to travel far.", options: ["It's a little out of my way.", "I've got an almighty backlog.", "It's an awkward moment."], answer: 0 },
          {
            q: "You can't think of a real excuse.",
            options: [
              "I can't help for, er, personal reasons.",
              "I'm in the middle of something urgent.",
              "I've just got to pop out."
            ],
            answer: 0
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the difficult requests with one word",
        src: "SB 5D ex 5",
        items: [
          {
            q: "Do you ___ if I ask you a small favour?",
            answers: [
              ["mind"]
            ]
          },
          {
            q: "I don't ___ you'd be able to water my plants, would you?",
            answers: [
              ["suppose"]
            ]
          },
          {
            q: "It really would make a huge ___ if you could help out.",
            answers: [
              ["difference"]
            ]
          },
          {
            q: "Is there any ___ you could give me a lift?",
            answers: [
              ["way", "chance"]
            ]
          },
          {
            q: "I ___ it's a lot to ask.",
            answers: [
              ["realise", "know", "realize"]
            ]
          },
          {
            q: "I have another small ___ for you.",
            answers: [
              ["favour", "favor", "request"]
            ]
          },
          {
            q: "Do you think we ___ be able to borrow your tent?",
            answers: [
              ["might", "could"]
            ]
          },
          {
            q: "I know it's a big ___.",
            answers: [
              ["ask"]
            ]
          },
          {
            q: "I don't want to put any ___ on you.",
            answers: [
              ["pressure"]
            ]
          },
          {
            q: "It really would ___ a lot to me.",
            answers: [
              ["mean"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Make the requests more polite, using the words in brackets",
        src: "SB 5D ex 6",
        items: [
          { q: "Can you fix my bike? (suppose)", models: ["I don't suppose you could fix my bike, could you?"] },
          { q: "Will you help me with the boxes? (difference)", models: ["It would make a huge difference if you could help me with the boxes."] },
          { q: "Can you help me? (able)", models: ["Do you think you might be able to help me?"] },
          { q: "Can you read my essay tonight? (chance)", models: ["Is there any chance you could read my essay tonight?"] },
          { q: "Feed my cat this weekend. (suppose)", models: ["I don't suppose you could feed my cat this weekend, could you?"] },
          { q: "Can you spare ten minutes to look at this now? (chance)", models: ["Is there any chance you could spare ten minutes to look at this now?"] }
        ]
      },
      {
        type: "sort",
        title: "Direct refusal, reason, or indirect phrase?",
        src: "SB 5D ex 8a",
        categories: ["direct but polite refusals", "reasons for refusals", "indirect phrases"],
        items: [
          { text: "No, I'm afraid that's not going to be possible.", cat: 0 },
          { text: "Unfortunately, it's out of the question.", cat: 0 },
          { text: "Sorry, but it's not possible today.", cat: 0 },
          { text: "I'd love to help but I can't.", cat: 0 },
          { text: "I really need to finish my report tonight.", cat: 1 },
          { text: "I'm totally snowed under at work.", cat: 1 },
          { text: "…for personal reasons.", cat: 1 },
          { text: "Yeah, possibly.", cat: 2 },
          { text: "I'll see what I can do.", cat: 2 },
          { text: "I'm not sure.", cat: 2 },
          { text: "I'll do my best.", cat: 2 }
        ]
      },
      {
        type: "speak",
        title: "Make requests and refuse them politely",
        src: "SB 5D ex 3, 10",
        intro: "Ask politely → refuse and justify → ask again, stressing how important it is → accept or refuse.",
        phrases: [
          "I'd love to help, but",
          "snowed under",
          "out of my depth",
          "otherwise engaged",
          "playing up",
          "out of the question",
          "I'll see what I can do",
          "I don't suppose",
          "It would mean a lot"
        ],
        items: [
          { q: "Could you carry this suitcase up to the fifth floor for me?", models: ["Sorry, I'd love to help, but my back's playing up again."] },
          { q: "Could you drive me to the airport at 4 a.m. tomorrow?", models: ["I'm afraid I'm otherwise engaged – and anyway, it's a little out of my way."] },
          { q: "Could you fix the wiring in my kitchen?", models: ["Honestly, I'd be completely out of my depth. You need an electrician."] },
          { q: "Could you look after my three cats for a month?", models: ["Unfortunately, that's out of the question – I'm allergic."] },
          { q: "I don't suppose you could help me write my CV, could you? It would mean a lot.", models: ["Well… I'm snowed under this week, but I'll see what I can do."] },
          {
            q: "Ask a colleague to cover your shift on Saturday, very politely.",
            models: [
              "I know it's a big ask, but is there any way you could cover my shift on Saturday? It would make a huge difference to me."
            ]
          }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "gap",
        title: "Complete the words. The first letter is given",
        src: "WB 5D ex 1",
        items: [
          {
            q: "A: Can anyone help me with these invoices? B: Sorry, I'm ___ under with my own work.",
            hint: "s…",
            answers: [
              ["snowed"]
            ]
          },
          {
            q: "C: I'm afraid I'm ___ engaged for the rest of the afternoon.",
            hint: "o…",
            answers: [
              ["otherwise"]
            ]
          },
          {
            q: "D: And I'm still clearing the ___ from my holiday.",
            hint: "b…",
            answers: [
              ["backlog"]
            ]
          },
          {
            q: "A: I'm about to ___ out to the shop. Need anything? B: Coffee, please – things are a bit ___ here.",
            hint: "p… / h…",
            answers: [
              ["pop"],
              ["hectic"]
            ]
          },
          {
            q: "A: Can you help me lift this sofa? B: Sorry, my knee's ___ up again.",
            hint: "p…",
            answers: [
              ["playing"]
            ]
          },
          {
            q: "A: Oh, so you've already chosen someone else? This is ___. B: Sorry, the decision was out of my ___.",
            hint: "a… / h…",
            answers: [
              ["awkward"],
              ["hands"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "WB 5D ex 2",
        items: [
          { q: "I'd be extremely ___ if you could help me.", options: ["grateful", "obliged"], answer: 0 },
          { q: "I don't ___ I could borrow your laptop, could I?", options: ["presume", "suppose"], answer: 1 },
          { q: "I know it's a big ___, but could you pick my mum up from the station?", options: ["ask", "question"], answer: 0 },
          { q: "It would make a huge ___ if Ola could come too.", options: ["contrast", "difference"], answer: 1 },
          { q: "Do you mind if I ask you a small ___?", options: ["benefit", "favour"], answer: 1 },
          { q: "I don't want to put any ___ on you.", options: ["force", "pressure"], answer: 1 },
          { q: "It would ___ a lot to me if you came.", options: ["mean", "represent"], answer: 0 },
          { q: "I ___ it's a lot to ask, but could I stay for a week?", options: ["comprehend", "realise"], answer: 1 }
        ]
      },
      {
        type: "match",
        title: "Match the sentences with the responses",
        src: "WB 5D ex 3",
        items: [
          { a: "Sorry, I'd love to carry it, but I'm not physically able to.", b: "My shoulder is playing up at the moment." },
          { a: "I could possibly find some time for you tomorrow.", b: "I'll see what I can do." },
          { a: "I can't read your draft this morning.", b: "I'm in meetings until lunchtime." },
          { a: "Unfortunately, a day off on Friday is out of the question.", b: "Too many other people will be away." },
          { a: "I'm afraid I can't see you next week.", b: "I'm taking some time off for personal reasons." },
          { a: "I can't promise to finish it today.", b: "I'll do my best, though." }
        ]
      },
      {
        type: "order",
        title: "Put the words in order to complete the conversations",
        src: "WB 5D ex 4",
        items: [
          { words: ["you", "you", "think", "able", "might", "lead", "be", "to", "it", "Do"], answer: "Do you think you might be able to lead it?" },
          { words: ["out", "the", "is", "Unfortunately", "of", "Friday", "question"], answer: "Unfortunately, Friday is out of the question." },
          { words: ["if", "you", "mind", "you", "I", "small", "ask", "a", "favour", "Do"], answer: "Do you mind if I ask you a small favour?" },
          { words: ["help", "I", "to", "I'd", "but", "love", "can't"], answer: "I'd love to help, but I can't." },
          { words: ["you", "could", "me", "with", "come", "suppose", "don't", "I"], answer: "I don't suppose you could come with me?" },
          { words: ["to", "be", "Saturday", "on", "possible", "going", "not", "It's"], answer: "It's not going to be possible on Saturday." },
          { words: ["way", "you", "tonight", "babysit", "could", "any", "there", "Is"], answer: "Is there any way you could babysit tonight?" },
          { words: ["to", "put", "you", "on", "pressure", "want", "don't", "I"], answer: "I don't want to put pressure on you." },
          { words: ["a", "huge", "me", "to", "difference", "make", "would", "It"], answer: "It would make a huge difference to me." },
          { words: ["I", "I'll", "what", "see", "do", "can"], answer: "I'll see what I can do." },
          { words: ["a", "to", "it's", "I", "lot", "realise", "ask"], answer: "I realise it's a lot to ask." },
          { words: ["best", "do", "my", "I'll"], answer: "I'll do my best." }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Request → refusal → second request",
        ex: [
          "I don't suppose you could lend me your car this weekend, could you?",
          "Sorry, I'd love to help, but I'm otherwise engaged – I need it myself.",
          "I know it's a big ask, but it would make a huge difference to me.",
          "Well… I'll see what I can do."
        ]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete each sentence with two words",
        src: "Check 5–6 ex 13",
        items: [
          {
            q: "Polite request: Would you be ___ kind ___ to send me the agenda?",
            answers: [
              ["so"],
              ["as"]
            ]
          },
          {
            q: "Polite request: I ___ ___ you'd be able to feed my fish, would you?",
            answers: [
              ["don't"],
              ["suppose"]
            ]
          },
          {
            q: "Polite but direct refusal: Sorry, I'd love to help, but it's an ___ ___. I'm busy right now.",
            answers: [
              ["awkward"],
              ["moment"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the excuses",
        src: "Revision",
        items: [
          {
            q: "I've got a lot on my ___ at the moment.",
            answers: [
              ["plate"]
            ]
          },
          {
            q: "I can't help – I'm a bit tied ___.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "Something urgent has cropped ___, so I can't make it.",
            answers: [
              ["up"]
            ]
          },
          {
            q: "Quantum physics? I'd be totally out of my ___.",
            answers: [
              ["depth"]
            ]
          },
          {
            q: "I'd love to, but it's a little out of my ___.",
            answers: [
              ["way"]
            ]
          },
          {
            q: "The decision isn't mine – it's out of my ___.",
            answers: [
              ["hands"]
            ]
          },
          {
            q: "I'm in the ___ of something urgent.",
            answers: [
              ["middle"]
            ]
          },
          {
            q: "Sorry, I've just got to ___ out for a moment.",
            answers: [
              ["pop"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Is the speaker likely to help?",
        src: "Revision",
        items: [
          { q: "\"Sure, no problem – I'll do it tonight.\"", options: ["yes", "probably not"], answer: 0 },
          { q: "\"Yeah, well… we'll see.\"", options: ["yes", "probably not"], answer: 1 },
          { q: "\"I'm not sure. I'll see what I can do.\" (said slowly, with a sigh)", options: ["yes", "probably not"], answer: 1 },
          { q: "\"Unfortunately, it's out of the question.\"", options: ["yes", "probably not"], answer: 1 },
          { q: "\"Of course! Happy to help.\"", options: ["yes", "probably not"], answer: 0 },
          { q: "\"Er, possibly. I need to think about it.\"", options: ["yes", "probably not"], answer: 1 }
        ]
      },
      {
        type: "speak",
        title: "Ask for a favour, then refuse one",
        src: "Revision",
        phrases: [
          "I don't suppose",
          "Is there any way",
          "a big ask",
          "It would mean a lot",
          "I'd love to help, but",
          "out of the question",
          "snowed under",
          "out of my depth"
        ],
        items: [
          {
            q: "Ask a neighbour to look after your plants for a month.",
            models: [
              "I know it's a big ask, but is there any way you could water my plants while I'm away? It would mean a lot to me."
            ]
          },
          { q: "A colleague asks you to give a presentation in their place tomorrow. Refuse.", models: ["I'd love to help, but I'm totally snowed under, and I'd be out of my depth with that topic."] },
          { q: "A friend asks to borrow a large sum of money. Refuse politely.", models: ["I'm really sorry, but that's out of the question at the moment."] }
        ]
      }
    ]
  }
});
