/*
 * 6D English in action
 */
ES.registerLesson({
  id: "6D",
  unit: 6,
  letter: "D",
  title: "English in action",
  uk: "Панельна дискусія: ідіоми для бізнесу й дебатів, перефразування та посилання на сказане",
  goal: "take part in a panel discussion",
  focus: { vocab: "idioms", pron: "stress for emphasis" },
  learn: {
    theory: [
      {
        h: "Idioms for business and debate",
        p: "Many of them come from fighting and battle.",
        table: [
          ["get a lot of flak (for)", "be strongly criticised"],
          ["set your sights on", "aim at, really want to achieve"],
          ["a minefield", "a situation full of hidden dangers and difficult decisions"],
          ["a double-edged sword", "something with advantages but also disadvantages"],
          ["go great guns", "do extremely well"],
          ["a long shot", "unlikely to succeed, but worth trying"],
          ["(be) up in arms (about)", "very angry and ready to protest"],
          ["stick to your guns", "refuse to change your mind"],
          ["fight a losing battle", "try to do something you probably can't succeed in"]
        ],
        uk: { h: "Ідіоми для бізнесу й дебатів", p: "Багато з них походять зі сфери боротьби та війни." }
      },
      {
        h: "Useful phrases for a panel discussion",
        table: [
          [
            "reframing and paraphrasing (the chair)",
            "So what you're saying is… · You mean… · What you're trying to say is… · What you're actually implying is… · Correct me if I'm wrong, but… · Do you mean to say that…? · …, for want of a better word, … · So basically… / …in a nutshell."
          ],
          [
            "referring back to what others have said",
            "As X said/mentioned (earlier), … · If I could build on / add to what X said about… · Going back to what X said about… · It's interesting that you mention X. · Speaking of X, … · X touched on an important point earlier, in that… · Let me add to what you said about…"
          ],
          [
            "referring back to other ideas",
            "Along with X, this is one of the reasons why… · This has/would have serious repercussions for… · Going back to the idea of… · This comes back to the idea of…"
          ]
        ],
        uk: { h: "Корисні фрази для панельної дискусії" }
      },
      {
        h: "Pronunciation: stress for emphasis",
        p: "When you disagree or emphasise, stress the words that carry the contrast or the strong opinion.",
        ex: [
          "That's simply NOT true.",
          "Is that REALLY the case?",
          "They've spent THREE YEARS and a LOT of MONEY.",
          "Graduates finish with a HUGE debt."
        ],
        uk: { h: "Вимова: наголос для підсилення", p: "Коли не погоджуєшся або щось підкреслюєш, наголошуй слова, що несуть контраст чи сильну думку." }
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the idioms with the definitions",
        src: "SB 6D ex 2–3",
        items: [
          { a: "a long shot", b: "unlikely to succeed, but still worth trying" },
          { a: "a minefield", b: "a situation with many dangers and difficult decisions" },
          { a: "a double-edged sword", b: "something with advantages and potential disadvantages" },
          { a: "up in arms", b: "very angry and ready to protest" },
          { a: "get a lot of flak", b: "receive strong criticism" },
          { a: "fight a losing battle", b: "try to do something you probably can't succeed in" },
          { a: "go great guns", b: "do extremely well" },
          { a: "set your sights on", b: "aim at and want to do something very much" },
          { a: "stick to your guns", b: "refuse to change your mind" }
        ]
      },
      {
        type: "gap",
        title: "Complete the idioms",
        src: "SB 6D ex 2",
        items: [
          {
            q: "The PR team will get a lot of ___ for that tasteless advert.",
            answers: [
              ["flak"]
            ]
          },
          {
            q: "She's set her ___ on a place at drama school.",
            answers: [
              ["sights"]
            ]
          },
          {
            q: "Choosing a mortgage is a ___ – there are so many hidden costs.",
            answers: [
              ["minefield"]
            ]
          },
          {
            q: "Working from home is a double-___ sword: more freedom, but more isolation.",
            answers: [
              ["edged"]
            ]
          },
          {
            q: "Our new café is going great ___ – we're full every day.",
            answers: [
              ["guns"]
            ]
          },
          {
            q: "It's a long ___, but maybe they'll give us a discount.",
            answers: [
              ["shot"]
            ]
          },
          {
            q: "Parents are up in ___ about the new school timetable.",
            answers: [
              ["arms"]
            ]
          },
          {
            q: "If you believe you're right, stick to your ___.",
            answers: [
              ["guns"]
            ]
          },
          {
            q: "Selling DVDs these days? You're fighting a ___ battle.",
            answers: [
              ["losing"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Which section of the Useful phrases box?",
        src: "SB 6D ex 6b, 7",
        categories: [
          "reframing and paraphrasing (chair)",
          "referring back to what others said",
          "referring back to other ideas"
        ],
        items: [
          { text: "So what you're saying is…", cat: 0 },
          { text: "Correct me if I'm wrong, but…", cat: 0 },
          { text: "Do you mean to say that…?", cat: 0 },
          { text: "…for want of a better word…", cat: 0 },
          { text: "So basically… / …in a nutshell.", cat: 0 },
          { text: "If I could build on what Anna said about…", cat: 1 },
          { text: "It's interesting that you mention costs.", cat: 1 },
          { text: "Anna touched on an important point earlier, in that…", cat: 1 },
          { text: "Let me add to what you said about…", cat: 1 },
          { text: "Along with cost, this is one of the reasons why…", cat: 2 },
          { text: "This would have serious repercussions for…", cat: 2 },
          { text: "This comes back to the idea of…", cat: 2 }
        ]
      },
      {
        type: "speak",
        title: "Hold a panel discussion",
        src: "SB 6D ex 10–11",
        intro: "Topics: Is social media overwhelming us? Do sportspeople earn too much? Should homework be banned? Should companies use unpaid interns? Take the role of host, for or against.",
        phrases: [
          "So what you're saying is",
          "Correct me if I'm wrong",
          "for want of a better word",
          "Going back to what",
          "It's interesting that you mention",
          "If I could add to",
          "serious repercussions",
          "double-edged sword",
          "long shot",
          "stick to"
        ],
        items: [
          {
            q: "Host: introduce the topic 'Should homework be banned?' and the panel.",
            models: [
              "Good evening. Tonight we're asking whether homework should be banned – a bit of a minefield for parents and teachers alike."
            ]
          },
          { q: "Host: paraphrase a speaker who said homework causes stress and family conflict.", models: ["So what you're saying is that homework does more harm than good at home?"] },
          {
            q: "Participant: refer back to another speaker and add a point.",
            models: [
              "If I could build on what Mark said about stress, homework is a double-edged sword: it builds discipline, but it also eats into family time."
            ]
          },
          { q: "Participant: disagree and warn about consequences.", models: ["That's simply not true. Banning homework would have serious repercussions for exam results."] },
          {
            q: "Host: sum up the discussion.",
            models: [
              "So, in a nutshell, the panel agrees that homework needs to change, but not that it should be banned."
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
        title: "Complete the sentences with the phrases in the box",
        src: "WB 6D ex 1",
        intro: "a lot of flak · double-edged sword · fighting a losing battle · long shot · set my sights · stick to your guns · up in arms · went great guns",
        items: [
          {
            q: "We might catch the last train, but it's a ___.",
            answers: [
              ["long shot"]
            ]
          },
          {
            q: "I got ___ for defending my colleague in the meeting.",
            answers: [
              ["a lot of flak"]
            ]
          },
          {
            q: "Let's just give up. We're clearly ___.",
            answers: [
              ["fighting a losing battle"]
            ]
          },
          {
            q: "Fame can be a ___.",
            answers: [
              ["double-edged sword"]
            ]
          },
          {
            q: "Don't let them change your mind. ___.",
            answers: [
              ["Stick to your guns"]
            ]
          },
          {
            q: "Local residents are all ___ about the plans for a new motorway.",
            answers: [
              ["up in arms"]
            ]
          },
          {
            q: "Our team ___ in the second half and won easily.",
            answers: [
              ["went great guns"]
            ]
          },
          {
            q: "I've ___ on getting a scholarship, so I'm studying every day.",
            answers: [
              ["set my sights"]
            ]
          }
        ]
      },
      {
        type: "errors",
        title: "Correct one word in each sentence",
        src: "WB 6D ex 2",
        items: [
          { s: "I've set my looks on working in Canada.", ok: false, fix: "I've set my sights on working in Canada." },
          { s: "I know it's a short shot, but it might just work.", ok: false, fix: "I know it's a long shot, but it might just work." },
          { s: "Drivers are up in legs about the new parking charges.", ok: false, fix: "Drivers are up in arms about the new parking charges." },
          { s: "You'll get a lot of flock for that post.", ok: false, fix: "You'll get a lot of flak for that post." },
          { s: "Keeping my room tidy feels like fighting a failing battle.", ok: false, fix: "Keeping my room tidy feels like fighting a losing battle." },
          { s: "Buying a used car is a real mindfield.", ok: false, fix: "Buying a used car is a real minefield." }
        ]
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "WB 6D ex 3",
        items: [
          { a: "What you're actually", b: "implying is that it's a double-edged sword." },
          { a: "If I could add", b: "to what Ola said earlier, it's also cheap." },
          { a: "This would have serious", b: "repercussions for most families." },
          { a: "Correct me if", b: "I'm wrong, but isn't it actually 15 percent?" },
          { a: "Along with cost, this is one of", b: "the reasons why I'm against the idea." },
          { a: "Do you mean", b: "to say that you disagree?" },
          { a: "Going back to what", b: "I said about the benefits, there's a lot to consider." },
          { a: "It's not very fair, for", b: "want of a better word." }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with one word",
        src: "WB 6D ex 4",
        items: [
          {
            q: "A: Public transport should be free for everyone. B: ___ me if I'm wrong, but didn't you say the opposite last week?",
            answers: [
              ["Correct"]
            ]
          },
          {
            q: "A: One problem with free transport is the cost. B: ___ with finding enough drivers, that's one of the reasons it's difficult.",
            answers: [
              ["Along"]
            ]
          },
          {
            q: "A: The budget can only stretch so far. B: So what you're ___ is that we can't afford it?",
            answers: [
              ["implying", "saying"]
            ]
          },
          {
            q: "A: Some groups should travel free. B: It's interesting that ___ mention that – I've been thinking about it too.",
            answers: [
              ["you"]
            ]
          },
          {
            q: "___ back to the idea of free transport, there are options nobody has considered.",
            answers: [
              ["Going"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversation using the prompts",
        src: "WB 6D ex 5",
        items: [
          {
            q: "B: I think the question is pointless, ___. Surely everyone wants it to be free.",
            hint: "better word",
            answers: [
              ["for want of a better word"]
            ]
          },
          {
            q: "A: So, ___ that free healthcare is impossible?",
            hint: "what / implying",
            answers: [
              ["what you're implying is", "what you're actually implying is", "what you are implying is"]
            ]
          },
          {
            q: "A: ___ a limited budget. Higher taxes would solve that.",
            hint: "it / interesting / mention",
            answers: [
              [
                "It's interesting that you mention",
                "It's interesting that you mentioned",
                "It is interesting that you mention"
              ]
            ]
          },
          {
            q: "B: ___ that we can raise taxes that high? I disagree.",
            hint: "you / mean / say",
            answers: [
              ["Do you mean to say"]
            ]
          },
          {
            q: "B: ___ about insurance, it doesn't have to cost much.",
            hint: "back / what / said",
            answers: [
              ["Going back to what I said"]
            ]
          },
          {
            q: "A: But it ___ for people on low incomes.",
            hint: "would / repercussions",
            answers: [
              ["would have serious repercussions", "would have repercussions"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Panel discussion toolkit",
        list: [
          "Paraphrase: So what you're saying is… / In a nutshell…",
          "Check: Correct me if I'm wrong, but… / Do you mean to say that…?",
          "Refer back: As Ola mentioned earlier… / Going back to what Ola said about…",
          "Add: If I could build on what… / Let me add to what you said about…",
          "Link ideas: Along with X, this is one of the reasons why… / This would have serious repercussions for…"
        ],
        uk: {
          h: "Інструменти для панельної дискусії",
          list: [
            "Перефразувати: So what you're saying is… / In a nutshell…",
            "Перепитати: Correct me if I'm wrong, but… / Do you mean to say that…?",
            "Послатися на сказане раніше: As Ola mentioned earlier… / Going back to what Ola said about…",
            "Доповнити: If I could build on what… / Let me add to what you said about…",
            "Пов'язати ідеї: Along with X, this is one of the reasons why… / This would have serious repercussions for…"
          ]
        }
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete each sentence with two words",
        src: "Check 5–6 ex 13",
        intro: "as · awkward · don't · for · moment · on · repercussions · serious · so · suppose · that · want",
        items: [
          {
            q: "Reframing: Your plan would be a disaster, ___ ___ of a better word.",
            answers: [
              ["for"],
              ["want"]
            ]
          },
          {
            q: "Referring back: Dr Kowal touched ___ an important point earlier, in ___ there are no easy answers.",
            answers: [
              ["on"],
              ["that"]
            ]
          },
          {
            q: "Referring back: We could cut costs, but this would have ___ ___ for the quality of our service.",
            answers: [
              ["serious"],
              ["repercussions"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct idiom",
        src: "Revision",
        items: [
          { q: "Everyone criticised the new logo – the designers got ___.", options: ["a lot of flak", "a long shot", "great guns"], answer: 0 },
          { q: "Online dating can be a ___ – full of hidden traps.", options: ["minefield", "long shot", "losing battle"], answer: 0 },
          { q: "Sales are going ___ this quarter.", options: ["great guns", "up in arms", "a long shot"], answer: 0 },
          { q: "Everyone told her to give up, but she stuck to her ___.", options: ["guns", "sights", "arms"], answer: 0 },
          { q: "Applying for the top job straight from university is a ___, but why not?", options: ["long shot", "double-edged sword", "minefield"], answer: 0 },
          { q: "Students were ___ about the rise in fees.", options: ["up in arms", "going great guns", "setting their sights"], answer: 0 },
          { q: "Social media is a ___: great for keeping in touch, bad for your attention span.", options: ["double-edged sword", "long shot", "losing battle"], answer: 0 }
        ]
      },
      {
        type: "speak",
        title: "Talk about the idioms",
        src: "SB 6D ex 4",
        phrases: [
          "set my sights on",
          "going great guns",
          "a lot of flak",
          "fighting a losing battle",
          "stick to my guns"
        ],
        items: [
          { q: "What goals have you set your sights on for next year?", models: ["I've set my sights on passing the C2 exam, though it may be a long shot."] },
          { q: "Which companies are going great guns in your area?", models: ["A local coffee chain is going great guns – they've opened five new places this year."] },
          { q: "Which celebrity has got a lot of flak recently, and why?", models: ["A famous footballer got a lot of flak for an advert promoting gambling."] },
          { q: "When did you feel you were fighting a losing battle?", models: ["Trying to keep my inbox at zero – I'm definitely fighting a losing battle."] }
        ]
      }
    ]
  }
});
