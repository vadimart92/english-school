/*
 * 8A We all do it
 */
ES.registerLesson({
  id: "8A",
  unit: 8,
  letter: "A",
  title: "We all do it",
  uk: "Дивні звички: як описувати звички й нав'язливі дії (I'll…, I'm forever…, I catch myself…) та ідіоми про почуття",
  goal: "carry out a survey",
  focus: { grammar: "describing habits and compulsions", vocab: "idioms related to feelings", pron: "stress in sentences about habits" },
  learn: {
    theory: [
      {
        h: "will + infinitive for typical behaviour",
        p: "will (often with always) describes what someone typically does in the present – it's not about the future.",
        ex: [
          "I'll open the fridge whenever I'm bored, even if I'm not hungry.",
          "She'll always check the door twice before she goes out.",
          "Whenever I stay up late, I won't remember where I put my keys."
        ]
      },
      {
        h: "always / forever / constantly + present continuous",
        p: "Shows a frequent habit, usually annoying – but it can also be very positive.",
        ex: [
          "I'm forever walking into a room and forgetting why.",
          "He's constantly parking in front of my garage. (annoying)",
          "She's always giving money to charity. (positive)"
        ]
      },
      {
        h: "Compulsions: which form follows?",
        table: [
          ["+ to-infinitive", "I tend to… / I have this tendency to… / I have this (overwhelming) urge to…"],
          [
            "+ -ing",
            "I have this habit of… / I find myself… / I (often) catch myself… / I can't stop myself (from)… / I keep (on)…"
          ]
        ],
        ex: [
          "I have this overwhelming urge to dance when I hear this song.",
          "I sometimes catch myself singing in the lift.",
          "I can't stop myself from touching a plate when someone says it's hot."
        ]
      },
      {
        h: "Stress",
        p: "The main stress falls on the habit word (always, forever, can't stop, find myself) and the key verb. Words at the end that are already known (that kind of stuff, those things) are unstressed.",
        ex: ["I'm ALWAYS doing that kind of stuff.", "I just CAN'T STOP myself doing those things sometimes."]
      },
      {
        h: "Idioms related to feelings",
        table: [
          ["want the ground to swallow me up", "embarrassed"],
          ["make a fool of yourself", "embarrassed (behave stupidly in public)"],
          ["have me in stitches", "make me laugh a lot (happy)"],
          ["feel on top of the world / be over the moon", "very happy"],
          ["have butterflies in my stomach", "nervous"],
          ["be shaken up", "scared/upset after a shock"],
          ["see red / be up in arms", "very angry / angry and protesting"],
          ["feel out of it", "uncomfortable, not part of what's happening"]
        ]
      },
      {
        h: "Більше практики",
        p: "Сторінка British Council допоможе розібрати тонкі випадки Present Simple і Continuous, зокрема always + -ing для дратівливих звичок.",
        links: [
          {
            title: "British Council: Advanced present simple and continuous",
            url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/advanced-present-simple-continuous",
            note: "дієслова стану, звички, переказ сюжету й анекдоти (рівень C1) з тестом"
          }
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct form",
        src: "SB 8A",
        items: [
          { q: "I have this habit of ___ my keys in the fridge.", options: ["to leave", "leaving", "leave"], answer: 1 },
          { q: "I tend ___ too much when I'm nervous.", options: ["talking", "talk", "to talk"], answer: 2 },
          { q: "I often catch myself ___ to my plants.", options: ["talking", "to talk"], answer: 0 },
          { q: "Whenever we meet, she'll ___ the same story.", options: ["telling", "tell", "to tell"], answer: 1 },
          { q: "He's forever ___ his phone.", options: ["lose", "losing"], answer: 1 },
          { q: "I can't stop myself from ___ at the TV during football.", options: ["shouting", "shout", "to shout"], answer: 0 },
          { q: "I have this overwhelming urge ___ every button I see.", options: ["pressing", "to press"], answer: 1 },
          { q: "I keep ___ people's names – it's so embarrassing.", options: ["to forget", "forgetting"], answer: 1 },
          { q: "I have this tendency ___ late for everything.", options: ["to arrive", "arriving", "of arriving"], answer: 0 },
          { q: "I sometimes find ___ humming songs from the 80s.", options: ["me", "myself", "my"], answer: 1 }
        ]
      },
      {
        type: "transform",
        title: "Use the prompts to write sentences",
        src: "SB 8A",
        items: [
          { q: "I / forever / lose / my glasses", models: ["I'm forever losing my glasses."] },
          { q: "I / habit / sing / in the shower", models: ["I have this habit of singing in the shower."] },
          { q: "I / tend / nod / even when / not understand", models: ["I tend to nod even when I don't understand."] },
          { q: "I'll / say 'sorry' / even / not my fault", models: ["I'll say 'sorry' even if it's not my fault."] },
          { q: "I / urge / laugh / serious meetings", models: ["I have this (overwhelming) urge to laugh in serious meetings."] },
          { q: "I / catch / talk to my cat / as if / a person", models: ["I (often) catch myself talking to my cat as if it were a person."] },
          { q: "I / can't stop / check / my phone", models: ["I can't stop myself (from) checking my phone."] }
        ]
      },
      {
        type: "cards",
        title: "Idioms related to feelings",
        src: "SB 8A",
        items: [
          { front: "want the ground to swallow you up", back: "готовий крізь землю провалитися (від сорому)", ex: "My top was on backwards – I wanted the ground to swallow me up." },
          { front: "have somebody in stitches", back: "смішити до сліз", ex: "That comedy had me in stitches." },
          { front: "have butterflies in your stomach", back: "хвилюватися, «метелики в животі»", ex: "I had butterflies in my stomach before the interview." },
          { front: "be/feel shaken up", back: "бути приголомшеним, наляканим", ex: "I nearly fell off my bike – I'm a bit shaken up." },
          { front: "see red", back: "розлютитися", ex: "When he lied again, I saw red." },
          { front: "feel on top of the world", back: "бути на сьомому небі", ex: "I felt on top of the world when I passed." },
          { front: "feel out of it", back: "почуватися не в своїй тарілці, відірваним", ex: "I always feel out of it at big parties." },
          { front: "make a fool of yourself", back: "виставити себе дурнем", ex: "Don't make a fool of yourself again!" },
          { front: "be up in arms (about)", back: "обурюватися, протестувати", ex: "Residents are up in arms about the new car park." },
          { front: "be over the moon", back: "бути дуже щасливим", ex: "We were over the moon about the baby." }
        ]
      },
      {
        type: "sort",
        title: "Which feeling does each idiom describe?",
        src: "SB 8A",
        categories: ["happy", "angry", "nervous / scared", "embarrassed", "uncomfortable"],
        items: [
          { text: "be over the moon", cat: 0 },
          { text: "feel on top of the world", cat: 0 },
          { text: "have me in stitches", cat: 0 },
          { text: "see red", cat: 1 },
          { text: "be up in arms", cat: 1 },
          { text: "have butterflies in my stomach", cat: 2 },
          { text: "be shaken up", cat: 2 },
          { text: "want the ground to swallow me up", cat: 3 },
          { text: "make a fool of myself", cat: 3 },
          { text: "feel out of it", cat: 4 }
        ]
      },
      {
        type: "gap",
        title: "Complete the idioms",
        src: "SB 8A",
        items: [
          {
            q: "I tripped on stage and wanted the ground to ___ me up.",
            answers: [
              ["swallow"]
            ]
          },
          {
            q: "That stand-up show had us in ___ from start to finish.",
            answers: [
              ["stitches"]
            ]
          },
          {
            q: "I had ___ in my stomach before my first date.",
            answers: [
              ["butterflies"]
            ]
          },
          {
            q: "I'm not hurt, just a bit ___ up after the accident.",
            answers: [
              ["shaken"]
            ]
          },
          {
            q: "When the waiter ignored us for the third time, Dad saw ___.",
            answers: [
              ["red"]
            ]
          },
          {
            q: "I felt on top of the ___ when I got the job.",
            answers: [
              ["world"]
            ]
          },
          {
            q: "I always feel out of ___ when everyone's talking about football.",
            answers: [
              ["it"]
            ]
          },
          {
            q: "Please don't make a ___ of yourself at the wedding.",
            answers: [
              ["fool"]
            ]
          },
          {
            q: "Parents are up in ___ about the school closures.",
            answers: [
              ["arms"]
            ]
          },
          {
            q: "She was over the ___ when she heard the news.",
            answers: [
              ["moon"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Carry out a survey about quirky habits",
        src: "SB 8A",
        phrases: [
          "I'm forever",
          "I'm always",
          "I tend to",
          "I have this habit of",
          "I have this urge to",
          "I find myself",
          "I catch myself",
          "I can't stop myself",
          "I keep",
          "I'll"
        ],
        items: [
          { q: "Ask: Do you ever talk to objects? Answer about yourself.", models: ["Do you ever talk to your computer? – Oh yes, I'm forever telling my laptop to hurry up!"] },
          { q: "What do you do when you're home alone?", models: ["I sometimes find myself singing really loudly when I'm home alone."] },
          { q: "What do you tend to do while driving or travelling?", models: ["I have this tendency to turn the music down when I'm looking for an address."] },
          { q: "Describe a friend's typical habit using will.", models: ["My friend will always order the same dish, even after reading the whole menu."] },
          { q: "Which habit do most people in your group share?", models: ["Almost everyone admitted they catch themselves checking their phone without thinking."] }
        ]
      }
    ]
  },
  homework: {
    exercises: [
      {
        type: "gap",
        title: "Complete with the correct form of: count, eat, have, notice, save, say",
        src: "WB 8A",
        items: [
          {
            q: "I have this habit of ___ the best bit on my plate until last.",
            answers: [
              ["saving"]
            ]
          },
          {
            q: "I waved at you, but you didn't ___.",
            answers: [
              ["notice"]
            ]
          },
          {
            q: "I tend ___ the volume on an even number.",
            answers: [
              ["to have"]
            ]
          },
          {
            q: "When I open a box of biscuits, I get this urge ___ the whole lot.",
            answers: [
              ["to eat"]
            ]
          },
          {
            q: "My landlord keeps ___ he'll fix the heating, but he never does!",
            answers: [
              ["saying"]
            ]
          },
          {
            q: "I have this tendency ___ my steps when I'm walking somewhere.",
            answers: [
              ["to count"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the comments using the prompts",
        src: "WB 8A",
        items: [
          {
            q: "I ___ on the floor when there's a perfectly good sofa.",
            hint: "often / find / sit",
            answers: [
              ["often find myself sitting"]
            ]
          },
          {
            q: "I ___ arguments in my head with people from work.",
            hint: "forever / have",
            answers: [
              ["'m forever having", "am forever having"]
            ]
          },
          {
            q: "I ___ it, but it's awkward when others catch me.",
            hint: "often / catch / do",
            answers: [
              ["often catch myself doing"]
            ]
          },
          {
            q: "I ___ to myself in the supermarket.",
            hint: "tend / talk",
            answers: [
              ["tend to talk"]
            ]
          },
          {
            q: "I ___ ctrl + F when I'm looking for something on a shelf.",
            hint: "overwhelming urge / press",
            answers: [
              ["have this overwhelming urge to press", "have an overwhelming urge to press"]
            ]
          },
          {
            q: "Whenever I see a police car, I ___ guilty.",
            hint: "not / stop / feel",
            answers: [
              [
                "can't stop myself feeling",
                "can't stop myself from feeling",
                "cannot stop myself feeling",
                "cannot stop myself from feeling"
              ]
            ]
          },
          {
            q: "I ___ up with brilliant replies three hours too late.",
            hint: "habit / come",
            answers: [
              ["have this habit of coming", "have a habit of coming"]
            ]
          },
          {
            q: "Whenever I walk under a ladder, I ___ my fingers.",
            hint: "tendency / cross",
            answers: [
              ["have this tendency to cross", "have a tendency to cross"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the words. The first letter is given",
        src: "WB 8A",
        items: [
          {
            q: "If you're not careful, you might end up making a ___ of yourself.",
            hint: "f…",
            answers: [
              ["fool"]
            ]
          },
          {
            q: "I'm not ill exactly, but I definitely feel ___ of it.",
            hint: "o…",
            answers: [
              ["out"]
            ]
          },
          {
            q: "Locals are up in ___ about the new motorway.",
            hint: "a…",
            answers: [
              ["arms"]
            ]
          },
          {
            q: "Right now I feel great. On top of the ___, in fact!",
            hint: "w…",
            answers: [
              ["world"]
            ]
          },
          {
            q: "He was so rude that I saw ___ and started shouting.",
            hint: "r…",
            answers: [
              ["red"]
            ]
          },
          {
            q: "I'm so nervous – I've got ___ in my stomach.",
            hint: "b…",
            answers: [
              ["butterflies"]
            ]
          },
          {
            q: "I was so embarrassed I wanted the ground to ___ me up.",
            hint: "s…",
            answers: [
              ["swallow"]
            ]
          },
          {
            q: "I can't believe I won! I'm over the ___.",
            hint: "m…",
            answers: [
              ["moon"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with the phrases",
        src: "WB 8A",
        intro: "feel on top of the world, feel out of it, 'm over the moon, see red, up in arms, wanted the ground to swallow me up, was in stitches, was quite shaken up",
        items: [
          {
            q: "I ___ that Mia's coming. It's fantastic news.",
            answers: [
              ["'m over the moon", "am over the moon"]
            ]
          },
          {
            q: "The comedian was hilarious. I ___ the whole time.",
            answers: [
              ["was in stitches"]
            ]
          },
          {
            q: "Hearing Ela criticise Pete for something she does herself made me ___.",
            answers: [
              ["see red"]
            ]
          },
          {
            q: "I ___ today. Maybe I'm coming down with something.",
            answers: [
              ["feel out of it"]
            ]
          },
          {
            q: "I wasn't hurt in the crash, but I ___.",
            answers: [
              ["was quite shaken up"]
            ]
          },
          {
            q: "Everything's perfect at the moment. I ___!",
            answers: [
              ["feel on top of the world"]
            ]
          },
          {
            q: "Everyone was ___ about the changes, but I don't get upset about such things.",
            answers: [
              ["up in arms"]
            ]
          },
          {
            q: "The only time I ever ___ was when I turned up in fancy dress and nobody else had.",
            answers: [
              ["wanted the ground to swallow me up"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Habits: forms at a glance",
        table: [
          ["will / won't + infinitive", "I'll say 'sorry' even if it's not my fault."],
          ["always / forever / constantly + -ing", "He's constantly borrowing my charger."],
          ["tend to / have this tendency to / have this urge to + infinitive", "I tend to talk to myself."],
          [
            "have this habit of / find myself / catch myself / can't stop myself (from) / keep (on) + -ing",
            "I keep on forgetting where I parked."
          ]
        ]
      },
      {
        h: "Describing personality (negative)",
        table: [
          ["officious", "too eager to tell people what to do"],
          ["defeatist", "expecting failure"],
          ["discourteous", "impolite, unpleasant"],
          ["disconcerted", "confused or unsettled"],
          ["incensed", "very angry"],
          ["hot-headed", "quick to lose their temper"],
          ["grasping", "greedy"],
          ["jocular", "joking, humorous"],
          ["guilt-ridden", "consumed by guilt"],
          ["do-gooder", "well-meaning but naive person"],
          ["downhearted", "depressed, discouraged"],
          ["megalomaniac", "obsessively hungry for power"]
        ]
      },
      {
        h: "Life-change idioms (Workbook reading)",
        table: [
          ["the hustle and bustle", "the noise and activity of a busy place"],
          ["be in a rut", "be stuck in a boring routine"],
          ["dawn on somebody", "become clear to somebody"],
          ["up sticks", "move home suddenly"],
          ["jump in with both feet", "start something with full commitment"],
          ["a wake-up call", "an event that makes you realise you need to change"],
          ["have green fingers / green thumbs", "be good at gardening"],
          ["a steep learning curve", "a lot to learn quickly"]
        ]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete the text with the correct form of: look, say, speak, talk, translate, use",
        src: "LB 8A",
        intro: "Since I moved to Italy, I've been trying hard to learn Italian, but it's not easy…",
        items: [
          {
            q: "I'm forever ___ 'sì, sì' when I don't understand, because I don't want to interrupt.",
            answers: [
              ["saying"]
            ]
          },
          {
            q: "Sometimes people will ___ at me strangely and ask what I mean.",
            answers: [
              ["look"]
            ]
          },
          {
            q: "I tend ___ to people in Italian even if their English is better than my Italian.",
            answers: [
              ["to talk", "to speak"]
            ]
          },
          {
            q: "When they answer in English, I keep on ___ Italian.",
            answers: [
              ["speaking", "using"]
            ]
          },
          {
            q: "I have this overwhelming urge ___ Italian, or at least try.",
            answers: [
              ["to speak", "to use"]
            ]
          },
          {
            q: "I also have this habit of ___ word for word from Ukrainian, which can be embarrassing.",
            answers: [
              ["translating"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentences using the words in brackets",
        src: "LB 8A",
        items: [
          { q: "Whenever I watch the news, I want to shout at the politicians. (urge)", models: ["Whenever I watch the news, I have this (overwhelming) urge to shout at the politicians."] },
          { q: "Every time I stand up, I make a loud groaning noise. (will)", models: ["Every time I stand up, I'll make a loud groaning noise."] },
          { q: "My brother leaves dirty cups everywhere, all the time. (present continuous + always)", models: ["My brother is always leaving dirty cups everywhere."] },
          { q: "I sometimes talk out loud when I'm alone. (catch myself)", models: ["I sometimes catch myself talking out loud when I'm alone."] },
          { q: "I usually hum when I'm cooking. (tend)", models: ["I tend to hum when I'm cooking."] },
          { q: "I walk around the room when I'm on the phone. (tendency)", models: ["I have this tendency to walk around the room when I'm on the phone."] }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternative",
        src: "Check 8",
        items: [
          { q: "I have this habit of ___ I'm presenting a cooking show when I make dinner.", options: ["pretend", "pretending"], answer: 1 },
          { q: "I'm forever ___ conversations with my car.", options: ["having", "have"], answer: 0 },
          { q: "I'll ___ a huge pot of soup so that I can freeze some, then eat it all.", options: ["cook", "to cook"], answer: 0 },
          { q: "I tend ___ when I have no idea what's going on.", options: ["smile", "to smile"], answer: 1 },
          { q: "I often catch myself ___ out loud at my own jokes.", options: ["laugh", "laughing"], answer: 1 },
          { q: "I keep ___ my glasses on top of my head.", options: ["losing", "to lose"], answer: 0 },
          { q: "Whenever I see seagulls, I have this urge ___ them away.", options: ["to chase", "chasing"], answer: 0 },
          { q: "I sometimes find ___ quoting films to my dog.", options: ["myself", "me"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with one word",
        src: "Check 8",
        items: [
          {
            q: "I always feel a bit out of ___ first thing on a Monday.",
            answers: [
              ["sorts", "it"]
            ]
          },
          {
            q: "I see ___ when I find a parking ticket on my car.",
            answers: [
              ["red"]
            ]
          },
          {
            q: "I was over the ___ when I passed my driving test first time.",
            answers: [
              ["moon"]
            ]
          },
          {
            q: "I was so nervous on stage that I wanted the ground to ___ me up.",
            answers: [
              ["swallow"]
            ]
          },
          {
            q: "The film had me in ___ – I couldn't stop laughing.",
            answers: [
              ["stitches"]
            ]
          },
          {
            q: "I never promise too much because I don't want to make a ___ of myself.",
            answers: [
              ["fool"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the adjectives to their meanings",
        src: "VB 8A",
        items: [
          { a: "officious", b: "too eager to tell people what to do" },
          { a: "defeatist", b: "expecting failure" },
          { a: "discourteous", b: "impolite, unpleasant" },
          { a: "disconcerted", b: "confused or unsettled" },
          { a: "incensed", b: "very angry" },
          { a: "hot-headed", b: "quick to lose your temper" },
          { a: "grasping", b: "greedy" },
          { a: "jocular", b: "joking, humorous" },
          { a: "guilt-ridden", b: "consumed by guilt" },
          { a: "megalomaniac", b: "obsessively hungry for power" }
        ]
      },
      {
        type: "gap",
        title: "Complete with: do-gooder, downhearted, grasping, hot-headed, incensed, officious",
        src: "VB 8A",
        items: [
          {
            q: "The ___ security guard insisted on checking every single bag twice.",
            answers: [
              ["officious"]
            ]
          },
          {
            q: "Don't get ___ – you'll pass next time.",
            answers: [
              ["downhearted"]
            ]
          },
          {
            q: "He's a ___ who means well but never thinks things through.",
            answers: [
              ["do-gooder"]
            ]
          },
          {
            q: "Residents were ___ when they heard the park would be sold.",
            answers: [
              ["incensed"]
            ]
          },
          {
            q: "Our ___ landlord has put the rent up again.",
            answers: [
              ["grasping"]
            ]
          },
          {
            q: "He's a bit ___, so don't argue with him about politics.",
            answers: [
              ["hot-headed"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Life-change idioms: complete with one or two words",
        src: "WB Reading 8",
        items: [
          {
            q: "I was tired of the hustle and ___ of the city.",
            answers: [
              ["bustle"]
            ]
          },
          {
            q: "I'd been stuck in a ___ for years – same job, same routine.",
            answers: [
              ["rut"]
            ]
          },
          {
            q: "One morning it ___ on me that I wasn't happy.",
            answers: [
              ["dawned"]
            ]
          },
          {
            q: "So we upped ___ and moved to a farm.",
            answers: [
              ["sticks"]
            ]
          },
          {
            q: "We jumped in with both ___, even though we knew nothing about farming.",
            answers: [
              ["feet"]
            ]
          },
          {
            q: "My doctor's warning was a real wake-up ___.",
            answers: [
              ["call"]
            ]
          },
          {
            q: "Neither of us had green ___, so the first harvest was a disaster.",
            answers: [
              ["fingers", "thumbs"]
            ]
          },
          {
            q: "It's been a steep learning ___, but we don't regret it.",
            answers: [
              ["curve"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Irritation or neutral habit? Sort the sentences",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/advanced-present-simple-continuous",
        categories: ["irritation or criticism", "neutral habit or fact"],
        items: [
          { text: "He's always borrowing my charger without asking.", cat: 0 },
          { text: "He always borrows a book from the library on Fridays.", cat: 1 },
          { text: "My flatmate is forever leaving the lights on.", cat: 0 },
          { text: "She will keep interrupting me, however many times I ask her not to.", cat: 0 },
          { text: "They're constantly complaining about the neighbours.", cat: 0 },
          { text: "The ferry leaves at seven every morning.", cat: 1 },
          { text: "My grandfather would take us fishing every summer.", cat: 1 },
          { text: "You're always checking your phone in the middle of conversations!", cat: 0 },
          { text: "I usually walk to work unless it's raining.", cat: 1 }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? Present simple, continuous and would",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/advanced-present-simple-continuous",
        items: [
          { s: "I'm thinking you should apologise to her.", ok: false, fix: "I think you should apologise to her." },
          { s: "I'm thinking of taking up yoga.", ok: true },
          { s: "She's always forgetting her keys — it drives me mad.", ok: true },
          { s: "This soup is tasting delicious.", ok: false, fix: "This soup tastes delicious." },
          { s: "The chef is tasting the soup to check the seasoning.", ok: true },
          { s: "In the film, the hero finds out that his brother has betrayed him.", ok: true },
          { s: "I'm living with my parents until I find a flat.", ok: true },
          { s: "She's owning three cars.", ok: false, fix: "She owns three cars." },
          { s: "My sister would live in Paris when she was younger.", ok: false, fix: "My sister used to live in Paris when she was younger." },
          { s: "Whenever we visited, Gran would bake us a cake.", ok: true }
        ]
      }
    ]
  }
});
