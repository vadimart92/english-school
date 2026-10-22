/*
 * 3C Fact or fiction?
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "3C",
  unit: 3,
  letter: "C",
  title: "Fact or fiction?",
  uk: "Факт чи вигадка: як модифікувати прикметники, новини",
  goal: "discuss how to fact-check news stories",
  focus: { grammar: "ways of modifying adjectives", vocab: "the news and reporting", pron: "stress in adverb + adjective combinations" },
  learn: {
    theory: [
      {
        h: "Gradable and ungradable adjectives",
        p: "Gradable прикметники мають ступені (cold → colder, very cold): good, hot, difficult, tired. Ungradable вже означають крайність або абсолютну властивість: freezing, excellent, impossible, exhausted. Від цього залежить, яке підсилювальне слово можна вжити.",
        table: [
          [
            "+ gradable",
            "barely, bitterly, deeply, extremely, fairly, perfectly, rather, somewhat, seriously, very",
            "I'm extremely tired. / The test was fairly easy."
          ],
          [
            "+ ungradable",
            "absolutely, completely, essentially, nearly, totally, utterly, virtually",
            "I'm absolutely exhausted. / It's virtually impossible."
          ],
          ["+ both", "really, pretty, quite", "really hot / really boiling; pretty good / pretty amazing"]
        ]
      },
      {
        h: "The trap with 'quite'",
        p: "Quite з gradable прикметником пом'якшує (= fairly, «досить»), а з ungradable — підсилює (= absolutely, «цілком»). Тому The film was quite good — «непоганий», а The film was quite brilliant — «просто чудовий».",
        ex: [
          "The exam was quite difficult, but I passed.",
          "Your plan is quite impossible – we don't have the money."
        ]
      },
      {
        h: "Collocations and classifying adjectives",
        list: [
          "Деякі прислівники «люблять» певні прикметники: bitterly cold / disappointed, deeply sorry / serious, perfectly capable / straightforward / credible, completely open / honest, seriously alarming / hurt, utterly ridiculous, highly recommended / unlikely, virtually impossible, ridiculously cheap / easy, strongly opposed.",
          "Класифікаційні прикметники (married, fake, electric, foreign car) просто відносять до категорії — їх не підсилюють: It's a fake (NOT a very fake) photo.",
          "Деякі прикметники бувають і класифікаційними, і gradable: a foreign car (класифікація) vs a slightly foreign accent (ступінь).",
          "Вимова: в парі adverb + adjective зазвичай наголошене і прислівник, і прикметник: I'm PERfectly CApable; але щоб пом'якшити, наголос падає на прикметник: I'm fairly SURE."
        ]
      },
      {
        h: "The news and reporting",
        table: [
          ["impartial", "неупереджений"],
          ["disclose", "розголосити (інформацію)"],
          ["unsubstantiated claims", "необґрунтовані твердження"],
          ["footage", "відеозапис, кадри"],
          ["character assassination", "навмисне знищення репутації"],
          ["bend the truth", "перекручувати правду"],
          ["credible", "правдоподібний, вартий довіри"],
          ["publicity stunt", "рекламний трюк"],
          ["interpretation (of the facts)", "тлумачення (фактів)"],
          ["angle", "кут подачі історії"]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Gradable, ungradable or both? Choose the adverb that fits",
        src: "SB 4",
        items: [
          { q: "The study reached the ___ alarming conclusion that most people never check sources.", options: ["rather", "virtually"], answer: 0 },
          { q: "One ___ useful habit is to check where a story first appeared.", options: ["really", "completely"], answer: 0 },
          { q: "It's ___ straightforward to search for the headline plus the word 'fake'.", options: ["perfectly", "seriously"], answer: 0, explain: "perfectly straightforward — стійке поєднання." },
          { q: "Some of these stories are ___ ridiculous inventions.", options: ["utterly", "fairly"], answer: 0 },
          { q: "After an hour in the lake, the water felt ___ freezing.", options: ["absolutely", "very"], answer: 0 },
          { q: "At first glance the image seems ___ credible.", options: ["perfectly", "nearly"], answer: 0 },
          { q: "I'm ___ hopeful that we'll finish on time.", options: ["pretty", "absolutely"], answer: 0 },
          { q: "I was ___ terrified during the storm.", options: ["absolutely", "somewhat"], answer: 0 }
        ]
      },
      {
        type: "choice",
        title: "Choose the option which is NOT possible",
        src: "SB 6",
        items: [
          {
            q: "Which is NOT possible?",
            options: [
              "He's deeply sorry for the delay.",
              "He's perfectly sorry for the delay.",
              "He's really sorry for the delay."
            ],
            answer: 1
          },
          {
            q: "Which is NOT possible?",
            options: ["This soup is very awful!", "This soup is absolutely awful!", "This soup is quite awful!"],
            answer: 0,
            explain: "awful — ungradable, тому very не підходить; quite тут = absolutely."
          },
          {
            q: "Which is NOT possible?",
            options: [
              "I'm bitterly disappointed with the result.",
              "I'm somewhat disappointed with the result.",
              "I'm nearly disappointed with the result."
            ],
            answer: 2
          },
          {
            q: "Which is NOT possible?",
            options: [
              "Her excuse seems fairly credible.",
              "Her excuse seems perfectly credible.",
              "Her excuse seems utterly credible."
            ],
            answer: 2
          },
          {
            q: "Which is NOT possible?",
            options: [
              "The hotel was extremely expensive.",
              "The hotel was totally expensive.",
              "The hotel was rather expensive."
            ],
            answer: 1
          },
          {
            q: "Which is NOT possible?",
            options: [
              "It was virtually impossible to get tickets.",
              "It was nearly impossible to get tickets.",
              "It was fairly impossible to get tickets."
            ],
            answer: 2
          },
          { q: "Which is NOT possible?", options: ["She's married.", "She's very married.", "She's recently married."], answer: 1, explain: "married — класифікаційний прикметник." }
        ]
      },
      {
        type: "cards",
        title: "The news and reporting",
        src: "SB 8",
        items: [
          { front: "impartial", back: "неупереджений, об'єктивний", ex: "A public broadcaster should be completely impartial." },
          { front: "disclose", back: "розголосити, оприлюднити", ex: "The police refused to disclose the name of the suspect." },
          { front: "unsubstantiated", back: "необґрунтований, недоведений", ex: "The article was full of unsubstantiated claims." },
          { front: "footage", back: "відеозапис, кадри", ex: "Shocking footage of the flood was shown on every channel." },
          { front: "character assassination", back: "знищення чиєїсь репутації", ex: "The campaign turned into a character assassination." },
          { front: "bend the truth", back: "перекручувати правду", ex: "Journalists sometimes bend the truth to get a better headline." },
          { front: "credible", back: "правдоподібний, вартий довіри", ex: "We need a more credible source than a blog." },
          { front: "publicity stunt", back: "рекламний трюк", ex: "The 'leaked' photos were just a publicity stunt." },
          { front: "interpretation", back: "тлумачення", ex: "It's not a lie – it's just a different interpretation of the facts." },
          { front: "angle", back: "кут подачі (історії)", ex: "Every newspaper looked for a new angle on the story." },
          { front: "sensationalise", back: "подавати сенсаційно, перебільшувати", ex: "Tabloids tend to sensationalise crime stories." },
          { front: "smear", back: "обливати брудом, дискредитувати", ex: "He claims he was smeared by his political rivals." }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "SB 8",
        items: [
          { q: "Few TV channels are truly ___, although they all claim to be neutral.", options: ["impartial", "realistic"], answer: 0 },
          { q: "The company refused to ___ how much it paid the consultants.", options: ["disclose", "open"], answer: 0 },
          { q: "The article was based on ___ rumours rather than evidence.", options: ["unsubstantiated", "insubstantial"], answer: 0 },
          { q: "The channel showed dramatic ___ of the rescue.", options: ["footage", "filming"], answer: 0 },
          { q: "The interview was a vicious character ___.", options: ["assassination", "murder"], answer: 0 },
          { q: "Some reporters will ___ the truth to make a story more exciting.", options: ["bend", "break"], answer: 0 },
          { q: "The witness gave a very ___ account of the events.", options: ["credible", "creditable"], answer: 0 },
          { q: "The 'surprise' engagement was obviously a publicity ___.", options: ["stunt", "action"], answer: 0 },
          { q: "It's not fake news – it's a question of ___ of the data.", options: ["interpretation", "interplay"], answer: 0 }
        ]
      },
      {
        type: "speak",
        title: "Is it true or fake? How would you check?",
        src: "SB 7, 11–12",
        intro: "Discuss each headline: your first impression and the best way to fact-check it. Use adverb + adjective combinations.",
        phrases: [
          "perfectly",
          "utterly",
          "completely",
          "highly",
          "virtually",
          "pretty",
          "fairly",
          "deeply",
          "seriously",
          "credible",
          "unsubstantiated",
          "footage",
          "publicity stunt",
          "impartial",
          "source"
        ],
        items: [
          {
            q: "'Scientists teach octopus to play chess.'",
            models: [
              "It sounds utterly ridiculous, but it's not completely impossible. I'd check whether any credible science websites report it."
            ]
          },
          {
            q: "'City to ban all cars from the centre by next year.'",
            models: [
              "It seems perfectly credible – a lot of cities are doing this. I'd look for at least two other sources."
            ]
          },
          {
            q: "'Famous singer secretly buys an island.'",
            models: [
              "I'm fairly sure it's a publicity stunt. A reverse image search on the photo might show where it really comes from."
            ]
          },
          { q: "'New study: chocolate makes you smarter.'", models: ["It's highly unlikely. I'd check who paid for the study – the claims may be unsubstantiated."] },
          {
            q: "Describe something in your life with an adverb + adjective.",
            models: [
              "I was bitterly disappointed with my last exam result, but my teacher was perfectly happy with it."
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
        title: "Choose the most appropriate alternatives",
        src: "WB 1",
        items: [
          { q: "The concert was ___ incredible. I've never heard anything like it!", options: ["fairly", "quite"], answer: 1 },
          { q: "It's ___ impossible to park anywhere near the stadium.", options: ["deeply", "virtually"], answer: 1 },
          { q: "Don't worry about me. I'm ___ fine!", options: ["perfectly", "pretty"], answer: 0 },
          { q: "I'm ___ disappointed by the way they treated us.", options: ["bitterly", "completely"], answer: 0 },
          { q: "I was ___ surprised Ivan hadn't replied, but he's been very busy lately.", options: ["absolutely", "somewhat"], answer: 1 },
          { q: "Lucy was ___ embarrassed about forgetting his name.", options: ["deeply", "essentially"], answer: 0 },
          { q: "This printer is ___ useless. It jams every time!", options: ["nearly", "totally"], answer: 1 },
          { q: "It's only a tiny mark. It's ___ noticeable.", options: ["barely", "utterly"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with an adverb and an adjective",
        src: "WB 2",
        intro: "Adverbs: deeply, perfectly, pretty, totally, utterly, virtually. Adjectives: concerned, impossible, pleasant, ridiculous, ruined, sure.",
        items: [
          {
            q: "I'm ___ about my brother's health – he hasn't been sleeping at all.",
            answers: [
              ["deeply concerned"]
            ]
          },
          {
            q: "We're ___ we'll get the contract, but nothing is signed yet.",
            answers: [
              ["pretty sure"]
            ]
          },
          {
            q: "Everyone says the new manager is strict, but she's always been ___ to me.",
            answers: [
              ["perfectly pleasant", "pretty pleasant"]
            ]
          },
          {
            q: "It's ___ to say that you're too old to learn. Of course you aren't!",
            answers: [
              ["totally ridiculous", "utterly ridiculous"]
            ]
          },
          {
            q: "I've spilt red wine all over my white shirt. It's ___ now.",
            answers: [
              ["totally ruined", "utterly ruined"]
            ]
          },
          {
            q: "It's ___ to find a cheap flat in the city centre these days.",
            answers: [
              ["virtually impossible"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the blog post with the words in the box",
        src: "WB 3",
        intro: "angle, exposé, impartial, investigations, misrepresent, smear campaign, stereotypes, unsubstantiated",
        items: [
          {
            q: "Serious newspapers avoid printing ___ claims.",
            answers: [
              ["unsubstantiated"]
            ]
          },
          {
            q: "Some tabloids ___ facts about celebrities…",
            answers: [
              ["misrepresent"]
            ]
          },
          {
            q: "…and promote lazy ___ about certain groups of people.",
            answers: [
              ["stereotypes"]
            ]
          },
          {
            q: "Of course, every paper chooses an ___ that fits its political views.",
            answers: [
              ["angle"]
            ]
          },
          {
            q: "If reporters didn't carry out long ___, corruption would go unnoticed.",
            answers: [
              ["investigations"]
            ]
          },
          {
            q: "Writing a successful ___ of a powerful company can take years.",
            answers: [
              ["exposé", "expose"]
            ]
          },
          {
            q: "How do we know an unknown website is legitimate and ___?",
            answers: [
              ["impartial"]
            ]
          },
          {
            q: "How do we know it isn't spreading lies as part of a political ___?",
            answers: [
              ["smear campaign"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Gradable vs ungradable",
        table: [
          [
            "Gradable (hot, good, difficult)",
            "barely, bitterly, deeply, extremely, fairly, perfectly, rather, somewhat, seriously, very",
            "We were deeply sorry to hear your news."
          ],
          [
            "Ungradable (boiling, excellent, impossible)",
            "absolutely, completely, essentially, nearly, totally, utterly, virtually",
            "I felt totally overwhelmed by my workload."
          ],
          ["Both", "really, pretty, quite", "quite interesting = fairly; quite fascinating = absolutely"]
        ]
      },
      {
        h: "Collocations",
        list: [
          "highly recommended / unlikely / successful",
          "utterly ridiculous / wrong",
          "ridiculously cheap / easy",
          "strongly opposed",
          "perfectly open / honest / straightforward",
          "virtually impossible"
        ]
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
        ],
        src: "Revision"
      },
      {
        type: "sort",
        title: "Gradable or ungradable?",
        intro: "Which adverbs go with which kind of adjective?",
        categories: ["gradable (very …)", "ungradable (absolutely …)", "both"],
        items: [
          { text: "barely", cat: 0 },
          { text: "bitterly", cat: 0 },
          { text: "deeply", cat: 0 },
          { text: "extremely", cat: 0 },
          { text: "fairly", cat: 0 },
          { text: "rather", cat: 0 },
          { text: "somewhat", cat: 0 },
          { text: "seriously", cat: 0 },
          { text: "absolutely", cat: 1 },
          { text: "completely", cat: 1 },
          { text: "essentially", cat: 1 },
          { text: "nearly", cat: 1 },
          { text: "totally", cat: 1 },
          { text: "utterly", cat: 1 },
          { text: "virtually", cat: 1 },
          { text: "really", cat: 2 },
          { text: "pretty", cat: 2 },
          { text: "quite", cat: 2 }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "Stronger or weaker?",
        intro: "Replace 'very' / 'almost' with a better adverb. Try one stronger and one weaker version.",
        phrases: [
          "extremely",
          "pretty",
          "quite",
          "bitterly",
          "utterly",
          "deeply",
          "seriously",
          "virtually",
          "nearly",
          "perfectly",
          "fairly",
          "rather",
          "absolutely",
          "completely",
          "ridiculously",
          "somewhat"
        ],
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
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "LB 3C",
        intro: "A short opinion piece about fake news.",
        items: [
          { q: "It annoys me when people share ___ stories online.", options: ["very fake", "fake"], answer: 1, explain: "fake — класифікаційний прикметник." },
          { q: "It's ___ straightforward to check a story before you post it.", options: ["perfectly", "strongly"], answer: 0 },
          { q: "Some of the stories are ___ ridiculous.", options: ["bitterly", "utterly"], answer: 1 },
          { q: "I was ___ disappointed to see a silly story shared by a colleague I respect.", options: ["somewhat", "essentially"], answer: 0 },
          { q: "It was a ___ stupid story.", options: ["virtually", "really"], answer: 1 },
          { q: "The whole thing was ___ impossible to believe.", options: ["quite", "very"], answer: 0 },
          { q: "It just ___ seem very clever to me.", options: ["doesn't", "does"], answer: 0 },
          { q: "Checking a story is ___ easy and takes a minute.", options: ["barely", "perfectly"], answer: 1 }
        ]
      },
      {
        type: "choice",
        title: "Choose the best adverb + adjective combination",
        src: "LB 3C",
        items: [
          { q: "It's ___ to know what they're thinking – they never show any emotion.", options: ["virtually impossible", "seriously impossible"], answer: 0 },
          { q: "I was ___ by the results – they were terrible!", options: ["bitterly disappointed", "virtually disappointed"], answer: 0 },
          { q: "Those curtains are ___. Can we change them?", options: ["rather ugly", "virtually ugly"], answer: 0 },
          { q: "Nina is ___ of running the department on her own.", options: ["perfectly capable", "bitterly capable"], answer: 0 },
          { q: "Two people were ___ in the crash.", options: ["seriously hurt", "perfectly hurt"], answer: 0 },
          { q: "The exhibition was ___! I learnt so much.", options: ["quite fascinating", "very fascinating"], answer: 0 },
          { q: "Five euros for a three-course lunch is ___.", options: ["ridiculously cheap", "utterly cheap"], answer: 0 },
          { q: "It's ___ to suggest he did it on purpose.", options: ["utterly ridiculous", "barely ridiculous"], answer: 0 }
        ]
      },
      {
        type: "match",
        title: "Match the reporting verbs with their definitions (1)",
        src: "VB 3C",
        items: [
          { a: "misrepresent", b: "deliberately give a false description of someone's views or a situation" },
          { a: "brief", b: "give someone instructions or information to prepare for a task" },
          { a: "unearth", b: "find hidden information or the truth about something" },
          { a: "sensationalise", b: "deliberately make something seem more shocking than it is" },
          { a: "disclose", b: "reveal information that hasn't been widely known" },
          { a: "substantiate", b: "prove that something someone has said is true" }
        ]
      },
      {
        type: "match",
        title: "Match the reporting verbs with their definitions (2)",
        src: "VB 3C",
        items: [
          { a: "plagiarise", b: "use someone else's words or ideas and pretend they're yours" },
          { a: "expose", b: "make the truth about a secret public" },
          { a: "proofread", b: "read something carefully to find mistakes" },
          { a: "pitch", b: "try to persuade someone to accept an idea" },
          { a: "probe", b: "ask questions to find out things people don't want you to know" },
          { a: "smear", b: "damage someone's reputation with false information" }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with completely, deeply, perfectly, quite, seriously or utterly",
        src: "Check 5",
        items: [
          {
            q: "We're ___ sorry about the mistake with your order.",
            answers: [
              ["deeply"]
            ]
          },
          {
            q: "Just be ___ honest with your manager about how you feel.",
            answers: [
              ["completely", "perfectly"]
            ]
          },
          {
            q: "Thanks, but I'm ___ capable of carrying my own bags.",
            answers: [
              ["perfectly"]
            ]
          },
          {
            q: "To claim that the new rules will save money is ___ ridiculous.",
            answers: [
              ["utterly", "completely"]
            ]
          },
          {
            q: "Her latest album is ___ good, but not as good as the first one.",
            answers: [
              ["quite"]
            ]
          },
          {
            q: "Three climbers were ___ injured in the avalanche.",
            answers: [
              ["seriously"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "Check 6",
        items: [
          { q: "The article was nothing short of character ___ of the former mayor.", options: ["assassination", "stunt"], answer: 0 },
          { q: "The documentary took a(n) ___ view of the conflict.", options: ["impartial", "bending"], answer: 0 },
          { q: "So far, all the claims about the leak are ___.", options: ["unsubstantiated", "impartial"], answer: 0 },
          { q: "The channel is proud of its ___ coverage of elections.", options: ["impartial", "objective", "both are possible"], answer: 2 },
          { q: "Critics attacked the tabloid's simplistic ___ of the statistics.", options: ["interpretation", "disclosure"], answer: 0 },
          { q: "Some viewers may find the following ___ of the crash disturbing.", options: ["footage", "publicity stunt"], answer: 0 }
        ]
      },
      {
        type: "choice",
        title: "Which extract is more informal?",
        src: "Skills 3C",
        intro: "Informal speech: phrasal verbs, slang, discourse markers (you know, I mean), ellipsis. Formal speech: longer Latin-based words, full sentences.",
        items: [
          {
            q: "Which is informal?",
            options: [
              "A friend sent me this video the other day.",
              "An acquaintance forwarded this footage to me recently."
            ],
            answer: 0
          },
          { q: "Which is informal?", options: ["He boasted about how much money he had.", "He showed off about how much cash he had."], answer: 1 },
          {
            q: "Which is informal?",
            options: [
              "I did a bit of digging and it turned out to be fake.",
              "I verified the story and established that it was false."
            ],
            answer: 0
          },
          { q: "Which is informal?", options: ["I felt unable to let the misunderstanding continue.", "I just couldn't let it go, you know?"], answer: 1 },
          { q: "Which is informal?", options: ["Classic example of clickbait.", "This is a classic example of how clickbait operates."], answer: 0 },
          { q: "Which is informal?", options: ["The speaker would have stated his name.", "He woulda said who he was."], answer: 1 }
        ]
      }
    ]
  }
});
