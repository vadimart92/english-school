/*
 * 8C Urban survival
 */
ES.registerLesson({
  id: "8C",
  unit: 8,
  letter: "C",
  title: "Urban survival",
  uk: "Виживання в місті: підсилені поради (whatever, no matter how, under no circumstances…) та ідіоми про ризик",
  goal: "create a list of survival tips",
  focus: { grammar: "emphasising advice", vocab: "idioms related to risk", pron: "stress in emphatic advice" },
  learn: {
    theory: [
      {
        h: "-ever words and no matter",
        table: [
          [
            "Whatever/However/Whichever/Whenever/Wherever/Whoever + you + verb, + imperative/should",
            "Wherever you are in the city, always check your surroundings."
          ],
          [
            "However / No matter how + adjective/adverb, + imperative/should",
            "However tired you are, don't skip breakfast. / No matter how difficult it is, try not to panic."
          ],
          ["Whatever / Whichever + noun + you + verb, …", "Whichever seat you take, don't eat on the bus."],
          [
            "No matter + what/which/who/where/when/how + you + verb, …",
            "No matter where you are, take a deep breath."
          ]
        ]
      },
      {
        h: "whatever or whichever?",
        p: "whatever = any thing from an unlimited range; whichever = one from a limited set already mentioned.",
        ex: [
          "Whatever type of transport you use, stay safe.",
          "You can take the motorway or the country roads, but whichever way you go, drive carefully."
        ]
      },
      {
        h: "Very strong emphasis: inversion",
        p: "Under no circumstances / On no account (+ whatsoever) + should + subject + verb. Informal: No way should you… The word order is like a question.",
        ex: [
          "Under no circumstances whatsoever should you travel without your documents.",
          "On no account should you make eye contact.",
          "No way should you get on without a ticket."
        ]
      },
      { h: "Stress", p: "In short advice, the main stress usually falls on the -ever word and the key word of the advice.", ex: ["WHENEVER you're lost, don't PANIC.", "WHATEVER the weather, take an UMBRELLA."] },
      {
        h: "Idioms related to risk",
        table: [
          ["play with fire", "do something dangerous (R)"],
          ["run the risk (of)", "be in a situation where something bad could happen (R)"],
          ["take a calculated risk", "do something risky after thinking carefully (R)"],
          ["play it safe", "avoid risks (S)"],
          ["keep your head down", "avoid attention or trouble (S)"],
          ["watch your step", "be careful what you say or do (S)"],
          ["the coast is clear", "it's safe to act without being seen"],
          ["(not) out of the woods", "(not yet) free from danger or difficulty"]
        ]
      },
      {
        h: "Більше практики",
        p: "Ці сторінки допоможуть потренувати емфатичні конструкції та інверсію після заперечних виразів.",
        links: [
          {
            title: "British Council: Emphasis",
            url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries",
            note: "cleft sentences, інверсія та емфатичні do/does/did (рівень C1) з тестом"
          },
          { title: "Perfect English Grammar: inversion", url: "https://www.perfect-english-grammar.com/inversion-exercise-1.html", note: "вправа на інверсію після never, not only, under no circumstances тощо" }
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct option",
        src: "SB 8C",
        items: [
          { q: "___ seat you take, don't eat your breakfast on the bus.", options: ["Whichever", "However", "No matter"], answer: 0 },
          { q: "Under no circumstances ___ block the window seat.", options: ["you should", "should you", "you"], answer: 1 },
          { q: "___ you do, don't make eye contact.", options: ["However", "Whatever", "Whoever"], answer: 1 },
          { q: "___ rude it feels, don't stop and chat.", options: ["However", "Whatever", "Whichever"], answer: 0 },
          { q: "No matter ___ you do, don't panic.", options: ["that", "what", "how"], answer: 1 },
          { q: "___ you're in the city, always check your surroundings.", options: ["Wherever", "Whatever", "No matter"], answer: 0 },
          { q: "On no account ___ you leave your bag unattended.", options: ["should", "you should", "do"], answer: 0 },
          { q: "___ busy you are, call your mum on Sundays.", options: ["No matter", "No matter how", "Whatever"], answer: 1 },
          { q: "You can take the tram or the metro, but ___ you choose, buy a ticket first.", options: ["whatever", "whichever", "however"], answer: 1 }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the advice using the words in brackets",
        src: "SB 8C",
        items: [
          { q: "It doesn't matter where you are – you should always be careful. (wherever)", models: ["Wherever you are, you should always be careful."] },
          { q: "You should count to ten slowly if you feel angry. (whenever)", models: ["Whenever you feel angry, (you should) count to ten slowly."] },
          { q: "Don't be rude when you talk to anyone. (whoever)", models: ["Whoever you talk to, don't be rude."] },
          { q: "It's absolutely vital that you don't push in. (under)", models: ["Under no circumstances (whatsoever) should you push in."] },
          { q: "Tell people if you're going to be late. It doesn't matter what time it is. (whatever)", models: ["Whatever time it is, tell people if you're going to be late."] },
          { q: "Never stop to answer, even if you feel bad. (however)", models: ["However bad you feel, never stop to answer."] },
          { q: "Pull out your phone and pretend to take a call in any place. (matter)", models: ["No matter where you are, pull out your phone and pretend to take a call."] },
          { q: "It doesn't matter which form of transport you choose, but use public transport. (whichever)", models: ["Whichever form of public transport you choose, (you should) definitely use it."] }
        ]
      },
      {
        type: "cards",
        title: "Idioms related to risk",
        src: "SB 8C",
        items: [
          { front: "keep your head down", back: "не висовуватися", ex: "I kept my head down because I didn't want trouble." },
          { front: "be out of the woods", back: "бути поза небезпекою", ex: "The economy isn't out of the woods yet." },
          { front: "play it safe", back: "не ризикувати, діяти обережно", ex: "Let's play it safe and leave early." },
          { front: "play with fire", back: "гратися з вогнем", ex: "Lying to the boss is playing with fire." },
          { front: "run the risk of", back: "ризикувати (чимось поганим)", ex: "We run the risk of missing the flight." },
          { front: "take a calculated risk", back: "піти на виважений ризик", ex: "They took a calculated risk and invested." },
          { front: "the coast is clear", back: "шлях вільний, нікого немає", ex: "Come out – the coast is clear." },
          { front: "watch your step", back: "бути обережним (у словах і діях)", ex: "Watch your step with the new manager." }
        ]
      },
      {
        type: "gap",
        title: "Complete with the correct form of the risk idioms",
        src: "SB 8C",
        items: [
          {
            q: "You're playing with ___ if you ignore the safety rules.",
            answers: [
              ["fire"]
            ]
          },
          {
            q: "You'd better watch your ___ with him – he's the boss after all.",
            answers: [
              ["step"]
            ]
          },
          {
            q: "I did what I was told and kept my head ___ because I didn't want trouble.",
            answers: [
              ["down"]
            ]
          },
          {
            q: "You can come out now, the coast is ___ – she's gone.",
            answers: [
              ["clear"]
            ]
          },
          {
            q: "The company isn't out of the ___ yet; it still needs new customers.",
            answers: [
              ["woods"]
            ]
          },
          {
            q: "Let's play it ___ and cook the fish for another five minutes.",
            answers: [
              ["safe"]
            ]
          },
          {
            q: "We'd better hurry or we'll run the ___ of missing the train.",
            answers: [
              ["risk"]
            ]
          },
          {
            q: "They took a ___ risk and invested, but only after studying all the data.",
            answers: [
              ["calculated"]
            ]
          }
        ]
      },
      {
        type: "sort",
        title: "Taking a risk or being safe?",
        src: "SB 8C",
        categories: ["taking a risk", "being safe"],
        items: [
          { text: "play with fire", cat: 0 },
          { text: "run the risk", cat: 0 },
          { text: "take a calculated risk", cat: 0 },
          { text: "play it safe", cat: 1 },
          { text: "keep your head down", cat: 1 },
          { text: "watch your step", cat: 1 },
          { text: "the coast is clear", cat: 1 },
          { text: "be out of the woods", cat: 1 }
        ]
      },
      {
        type: "speak",
        title: "Create a list of survival tips",
        src: "SB 8C",
        intro: "Situations: a boring meeting, a family get-together, living in the countryside, meeting your partner's parents, a traffic jam.",
        phrases: [
          "whatever",
          "whenever",
          "wherever",
          "whichever",
          "however",
          "no matter",
          "under no circumstances",
          "on no account",
          "play it safe",
          "keep your head down",
          "watch your step"
        ],
        items: [
          {
            q: "Surviving a boring meeting",
            models: [
              "However boring it gets, don't check your phone. Under no circumstances should you yawn while the boss is talking!"
            ]
          },
          {
            q: "Meeting your partner's parents",
            models: [
              "Whatever they cook, eat it and say it's delicious. No matter how nervous you are, watch your step when politics comes up."
            ]
          },
          {
            q: "Surviving a traffic jam",
            models: [
              "Whenever you're stuck in traffic, put on a podcast. On no account should you start honking – it won't help."
            ]
          },
          {
            q: "A family get-together",
            models: [
              "Whoever asks about your love life, smile and change the subject. Keep your head down and play it safe!"
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
        src: "WB 8C",
        items: [
          { a: "No matter which college you choose,", b: "I'm sure you'll love it." },
          { a: "Whichever checkout you pick,", b: "it'll be the slowest one!" },
          { a: "Under no circumstances should", b: "you miss your appointment." },
          { a: "However hard your job sometimes feels,", b: "you should know you're doing brilliantly." },
          { a: "Whatever time you finish tonight,", b: "text me and I'll pick you up." },
          { a: "On no account whatsoever", b: "should you call Robbie." }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? Six sentences have a mistake",
        src: "WB 8C",
        items: [
          { s: "Under no circumstances you should drive in this fog.", ok: false, fix: "Under no circumstances should you drive in this fog." },
          { s: "Whatever you do, don't go out in this awful storm.", ok: true },
          { s: "No matter energetic you feel, don't start too fast.", ok: false, fix: "No matter how energetic you feel, don't start too fast." },
          { s: "Where you go, always take your phone with you.", ok: false, fix: "Wherever you go, always take your phone with you." },
          { s: "Not matter when you leave, come and say goodbye.", ok: false, fix: "No matter when you leave, come and say goodbye." },
          { s: "On no account should you whatsoever ignore my advice!", ok: false, fix: "On no account whatsoever should you ignore my advice!" },
          { s: "Whichever dish you pick, make sure it's one you've never tried.", ok: true },
          { s: "How we travel, we should book early.", ok: false, fix: "However we travel, we should book early." }
        ]
      },
      {
        type: "transform",
        title: "Complete the tips using the prompts",
        src: "WB 8C",
        intro: "Tips for a better rural life",
        items: [
          { q: "(whichever rural area / move to / follow) my tips for making life easier.", models: ["Whichever rural area you're moving to, follow my tips for making life easier."] },
          { q: "Roads are narrow and full of tractors. (whatever / do / make sure) you allow extra time.", models: ["Whatever you do, make sure you allow extra time for every journey."] },
          { q: "People are friendly. (circumstances / should / fail / say) hello to people you pass.", models: ["Under no circumstances should you fail to say hello to people you pass."] },
          { q: "(matter how much / need / internet / should / prepared) to live without it sometimes.", models: ["No matter how much you need the internet, you should be prepared to live without it sometimes."] },
          { q: "(matter / how early / take) a torch with you when you go out walking.", models: ["No matter how early it is, take a torch with you."] },
          { q: "(however busy / should / make) buying wellies a priority.", models: ["However busy you are, you should make buying wellies a priority."] }
        ]
      },
      {
        type: "gap",
        title: "Complete the definitions with the risk idioms",
        src: "WB 8C",
        items: [
          {
            q: "If you ___, you avoid taking a risk.",
            answers: [
              ["play it safe"]
            ]
          },
          {
            q: "If you ___, you're careful about what you say or how you behave.",
            answers: [
              ["watch your step"]
            ]
          },
          {
            q: "If you ___ of something, you're in a situation where something bad could happen.",
            answers: [
              ["run the risk"]
            ]
          },
          {
            q: "If you ___, you avoid getting noticed or involved in something.",
            answers: [
              ["keep your head down"]
            ]
          },
          {
            q: "If you ___, you do something that could have a very harmful effect.",
            answers: [
              ["play with fire"]
            ]
          },
          {
            q: "If you ___, you do something risky after thinking carefully about it.",
            answers: [
              ["take a calculated risk"]
            ]
          },
          {
            q: "If the ___, it's safe to do something without being seen or caught.",
            answers: [
              ["coast is clear"]
            ]
          },
          {
            q: "If you're ___, you're no longer in danger or difficulty.",
            answers: [
              ["out of the woods"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete each sentence with a word",
        src: "WB 8C",
        items: [
          {
            q: "Telling Mila is dangerous. You're playing with ___.",
            answers: [
              ["fire"]
            ]
          },
          {
            q: "Keep your ___ down and stay out of office politics.",
            answers: [
              ["head"]
            ]
          },
          {
            q: "I always play it ___ – I've never been a risk-taker.",
            answers: [
              ["safe"]
            ]
          },
          {
            q: "OK, you can come out now. The ___ is clear.",
            answers: [
              ["coast"]
            ]
          },
          {
            q: "If you put all your savings into one thing, you ___ the risk of losing everything.",
            answers: [
              ["run"]
            ]
          },
          {
            q: "Sales are up, but we're not out of the ___ yet.",
            answers: [
              ["woods"]
            ]
          },
          {
            q: "I don't mind taking a risk as long as it's a ___ one.",
            answers: [
              ["calculated"]
            ]
          },
          {
            q: "Don't say the wrong thing. Watch your ___.",
            answers: [
              ["step"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Emphasising advice: summary",
        list: [
          "Whatever/Whichever (+ noun) + you + verb, … – Whichever route you take, leave early.",
          "However / No matter how + adjective, … – However late it is, call me.",
          "No matter + wh-word + you + verb, … – No matter who you meet, be polite.",
          "Under no circumstances / On no account (+ whatsoever) + should you… – On no account should you sign it.",
          "Informal: No way should you…"
        ]
      },
      {
        h: "Dealing with rudeness online",
        list: [
          "Note the points you agree on: I agree that it's not easy, but…",
          "Reframe rudeness as a thoughtful argument: I think your point is valid, however…",
          "Avoid the trolls – don't engage with people who only want to provoke.",
          "Useful phrases: I wholeheartedly agree that… / I can't speak for everyone, but… / I should have made it clearer that… / I don't want to nit-pick, but…"
        ]
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the sentence halves",
        src: "LB 8C",
        items: [
          { a: "You can walk or take a taxi. But whichever", b: "one you choose, keep the receipt." },
          { a: "No matter how", b: "tired you feel, keep going." },
          { a: "No way should", b: "you argue with the border guard. It won't help." },
          { a: "Wherever you", b: "decide to stay, make sure you visit the old town." },
          { a: "On no account", b: "whatsoever should you make eye contact." },
          { a: "Under no circumstances whatsoever", b: "should you walk home alone at night." }
        ]
      },
      {
        type: "transform",
        title: "Use the prompts to write sentences",
        src: "LB 8C",
        items: [
          { q: "whatever / do / (not) forget / passport", models: ["Whatever you do, don't forget your passport."] },
          { q: "however / interesting / think / is / shouldn't / photographs", models: ["However interesting you think it is, you shouldn't take photographs."] },
          { q: "no matter / you meet / polite", models: ["No matter who you meet, be polite."] },
          { q: "whatever / day / travel / should / leave early", models: ["Whatever day you travel, you should leave early."] },
          { q: "circumstances / carry / valuables / whatsoever", models: ["Under no circumstances whatsoever should you carry valuables."] },
          { q: "whichever / option / choose / (not) pay / too much", models: ["Whichever option you choose, don't pay too much."] },
          { q: "way / talk / strangers", models: ["No way should you talk to strangers."] },
          { q: "whenever / meet / people / shake / hand", models: ["Whenever you meet people, shake their hand."] }
        ]
      },
      {
        type: "order",
        title: "Put the words in order to complete the sentences",
        src: "Check 8",
        items: [
          { words: ["you", "No", "always", "polite", "speak", "matter", "who", "be", "to"], answer: "No matter who you speak to, always be polite." },
          { words: ["with", "you", "always", "Whatever", "ID", "you", "do", "carry"], answer: "Whatever you do, always carry ID with you." },
          { words: ["it", "can", "remember", "However", "do", "you", "that", "difficult", "it", "think", "is", "you"], answer: "However difficult you think it is, remember that you can do it." },
          { words: ["any", "you", "On", "no", "noise", "whatsoever", "after", "midnight", "account", "make", "should"], answer: "On no account whatsoever should you make any noise after midnight." },
          {
            words: [
              "up",
              "of",
              "course",
              "action",
              "options",
              "the",
              "you",
              "on",
              "weigh",
              "Whichever",
              "first",
              "decide"
            ],
            answer: "Whichever course of action you decide on, weigh up the options first."
          },
          { words: ["feel", "of", "remember", "alone", "I'm", "you", "Whenever", "that", "thinking", "you"], answer: "Whenever you feel alone, remember that I'm thinking of you." }
        ]
      },
      {
        type: "match",
        title: "Match the sentence halves",
        src: "Check 8",
        items: [
          { a: "Because of the scandal, the minister decided to keep", b: "his head down until after the elections." },
          { a: "I'm not going because I don't want to run the", b: "risk of seeing my ex again." },
          { a: "We're not out of", b: "the woods yet, but if we're careful we'll be OK." },
          { a: "You can come out now, the coast", b: "is clear." },
          { a: "Don't play", b: "with fire – just do what she says for now." },
          { a: "You need to watch your", b: "step around the new boss." }
        ]
      },
      {
        type: "choice",
        title: "Choose the best response to a rude online comment",
        src: "Skills 8C",
        intro: "Which reply notes common ground or reframes rudeness politely?",
        items: [
          {
            q: "'Do you even understand your own point?'",
            options: [
              "Yes, I understand what I'm trying to say, but I'm sorry if it came across as overly complex.",
              "Obviously better than you do."
            ],
            answer: 0
          },
          {
            q: "'You're just cherry-picking evidence to suit your view.'",
            options: [
              "That's rubbish.",
              "I don't agree that I'm being selective, but I do agree we should look at all the research."
            ],
            answer: 1
          },
          {
            q: "'This is a stupid argument. There's so much more to worry about.'",
            options: [
              "Actually, I agree. There are plenty of other topics that deserve our attention.",
              "Then stop reading."
            ],
            answer: 0
          },
          {
            q: "'Most people with common sense would disagree with you.'",
            options: [
              "I'm not sure about that, but I do agree there are two sides to the argument.",
              "Most people agree with me, actually."
            ],
            answer: 0
          }
        ]
      },
      {
        type: "gap",
        title: "Online discussion phrases",
        src: "WB Writing 8",
        items: [
          {
            q: "I should have ___ it clearer that I'm asking for a friend.",
            answers: [
              ["made"]
            ]
          },
          {
            q: "I can't ___ for everyone, but I find it really hard.",
            answers: [
              ["speak"]
            ]
          },
          {
            q: "I'm not joking – I'm deadly ___.",
            answers: [
              ["serious"]
            ]
          },
          {
            q: "I ___ agree that just stopping is the ideal goal.",
            answers: [
              ["wholeheartedly"]
            ]
          },
          {
            q: "I don't want to ___-pick, but that figure is from 2010.",
            answers: [
              ["nit"]
            ]
          },
          {
            q: "That's a perfectly ___ point.",
            answers: [
              ["valid"]
            ]
          }
        ]
      },
      {
        type: "errors",
        title: "Correct or not? Inversion and emphatic advice",
        src: "extra: https://www.perfect-english-grammar.com/inversion-exercise-1.html",
        items: [
          { s: "Under no circumstances should you leave your bag unattended.", ok: true },
          { s: "Under no circumstances you should give out your PIN.", ok: false, fix: "Under no circumstances should you give out your PIN." },
          { s: "Not until you've checked the route should you set off.", ok: true },
          { s: "Never I have seen such a dangerous crossing.", ok: false, fix: "Never have I seen such a dangerous crossing." },
          { s: "Whatever you do, don't make eye contact with him.", ok: true },
          { s: "Only when the light turns green should you cross.", ok: true },
          { s: "Do be careful on the way home.", ok: true },
          { s: "Whichever you choose route, avoid the park after dark.", ok: false, fix: "Whichever route you choose, avoid the park after dark." },
          { s: "Not only did he lose his wallet, but he also missed the last train.", ok: true },
          { s: "On no account must the door to be left open.", ok: false, fix: "On no account must the door be left open." }
        ]
      },
      {
        type: "sort",
        title: "Cleft sentence, inversion or emphatic auxiliary?",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries",
        categories: ["cleft sentence", "inversion", "emphatic do / does / did"],
        items: [
          { text: "What you really need is a good map.", cat: 0 },
          { text: "It's at night that the streets become dangerous.", cat: 0 },
          { text: "All you need to do is stay calm.", cat: 0 },
          { text: "Seldom do tourists venture into this part of town.", cat: 1 },
          { text: "Under no circumstances should you accept a lift from a stranger.", cat: 1 },
          { text: "No sooner had we left the station than it began to pour.", cat: 1 },
          { text: "I do understand your concerns, but the area is perfectly safe.", cat: 2 },
          { text: "Do take a taxi if you're coming home late.", cat: 2 },
          { text: "She did warn us about pickpockets — we just didn't listen.", cat: 2 }
        ]
      }
    ]
  }
});
