/*
 * 6B Consumer affairs
 */
ES.registerLesson({
  id: "6B",
  unit: 6,
  letter: "B",
  title: "Consumer affairs",
  uk: "Права споживачів: формальні рекомендації (present subjunctive: I suggest she call…) і лексика регулювання",
  goal: "present formal recommendations",
  focus: { grammar: "making formal recommendations", vocab: "regulation", pron: "stress in strong recommendations" },
  learn: {
    theory: [
      {
        h: "The present subjunctive",
        p: "In formal recommendations we use the bare infinitive (no to, no -s, no past) for every person after certain verbs, adjectives and nouns. It is most noticeable with he/she/it and with be. In less formal British English, should + infinitive or an ordinary present tense is also common.",
        table: [
          [
            "verbs",
            "insist, suggest, recommend, propose, request, order, demand, ask",
            "I suggest she block the site. / We demand that the minister apologise."
          ],
          [
            "adjectives (It's … that)",
            "essential, advisable, vital, crucial, imperative, desirable, best",
            "It's essential that every copy be removed."
          ],
          [
            "nouns (+ that)",
            "recommendation, proposal, suggestion, advice, insistence, demand, requirement, condition",
            "There's a proposal that the rule only be applied to large firms."
          ]
        ],
        ex: [
          "It's vital that he not sign anything yet.",
          "She agreed to the interview on condition that she not be named."
        ]
      },
      {
        h: "Fixed expressions",
        table: [
          ["Come what may, …", "whatever happens", "Come what may, we'll finish on time."],
          [
            "Far be it from me to …",
            "introduces a criticism while pretending not to criticise",
            "Far be it from me to complain, but this soup is cold."
          ],
          [
            "Suffice (it) to say, …",
            "the rest is obvious / to sum up",
            "Suffice to say, we won't be going back there."
          ],
          [
            "Perish the thought!",
            "(often ironic) what a terrible idea",
            "Me, get up at five? Perish the thought!"
          ],
          [
            "It's (high/about) time + past simple",
            "urgent recommendation",
            "It's high time the council repaired this road."
          ]
        ]
      },
      {
        h: "Regulation",
        table: [
          [
            "regulating",
            "regulations, restrict, curb (= limit something bad), ban, freeze (assets), monitor content, self-regulation, penalties, sanctions, face consequences"
          ],
          ["breaking rules", "breach, violate, evasion (tax evasion), unauthorised, go unpunished"],
          ["obeying rules", "comply with"]
        ]
      },
      {
        h: "Pronunciation: stress in strong recommendations",
        p: "The strongest stress usually falls on the word that carries the force of the recommendation – the adjective or verb of obligation – and on the key action.",
        ex: [
          "I DEMAND the minister explain how he got those figures.",
          "It's ESSENTIAL these practices be regulated.",
          "It's absolutely CRUCIAL you remove temptations to buy more."
        ]
      },
      {
        h: "Більше практики",
        p: "Онлайн-пояснення до суміжних конструкцій: would rather, it's time, as if.",
        links: [
          { title: "British Council: Unreal time", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/c1/unreal-time", note: "it's (high) time, would rather + підмет — пояснення і вправи" }
        ]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Vocabulary: regulation",
        src: "SB 6B ex 3–4",
        items: [
          { front: "comply with", back: "дотримуватися (правил, вимог)", ex: "All restaurants must comply with hygiene rules." },
          { front: "severe penalties", back: "суворі покарання, штрафи", ex: "There are severe penalties for drink-driving." },
          { front: "curb", back: "стримувати, обмежувати (щось погане)", ex: "New laws aim to curb online fraud." },
          { front: "restrict", back: "обмежувати", ex: "The app restricts how long children can play." },
          { front: "breach", back: "порушувати; порушення", ex: "Sharing the data was a breach of contract." },
          { front: "go unpunished", back: "залишитися безкарним", ex: "Such behaviour should not go unpunished." },
          { front: "unauthorised", back: "несанкціонований", ex: "I noticed an unauthorised payment on my card." },
          { front: "face consequences / sanctions", back: "зазнати наслідків / санкцій", ex: "Firms that cheat should face sanctions." },
          { front: "violate", back: "порушувати (закон, права)", ex: "The company violated consumer protection law." },
          { front: "ban", back: "забороняти; заборона", ex: "Smoking is banned in all public buildings." },
          { front: "evasion", back: "ухилення (tax evasion)", ex: "He was charged with tax evasion." },
          { front: "freeze (assets)", back: "заморожувати (активи)", ex: "The court froze all his bank accounts." },
          { front: "monitor content", back: "відстежувати контент", ex: "Parents should monitor the content their kids watch." },
          { front: "self-regulation", back: "саморегулювання", ex: "The industry relies on self-regulation." },
          { front: "unlicensed", back: "без ліцензії", ex: "Never use unlicensed taxis." }
        ]
      },
      {
        type: "sort",
        title: "Regulation, breaking rules or obeying rules?",
        src: "SB 6B ex 3b–c",
        categories: ["regulation", "breaking rules", "obeying rules"],
        items: [
          { text: "regulations", cat: 0 },
          { text: "curb", cat: 0 },
          { text: "restrict", cat: 0 },
          { text: "ban", cat: 0 },
          { text: "freeze", cat: 0 },
          { text: "monitor content", cat: 0 },
          { text: "self-regulation", cat: 0 },
          { text: "severe penalties", cat: 0 },
          { text: "sanctions", cat: 0 },
          { text: "breach", cat: 1 },
          { text: "violate", cat: 1 },
          { text: "evasion", cat: 1 },
          { text: "unauthorised payments", cat: 1 },
          { text: "go unpunished", cat: 1 },
          { text: "comply with", cat: 2 }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "SB 6B ex 4",
        items: [
          { q: "After the fraud trial, the court ___ all her bank accounts.", options: ["froze", "banned"], answer: 0 },
          { q: "Several ___ copies of the film appeared online.", options: ["unauthorised", "restricted"], answer: 0 },
          { q: "Lorries have been ___ from the old town since 2019.", options: ["banned", "unlicensed"], answer: 0 },
          { q: "The businessman is accused of tax ___.", options: ["evasion", "self-regulation"], answer: 0 },
          { q: "If found guilty, he faces a heavy ___.", options: ["penalty", "restriction"], answer: 0 },
          { q: "Schools should carefully ___ the content of websites pupils visit.", options: ["monitor", "comply"], answer: 0 },
          { q: "Leaking the documents was a serious ___ of trust.", options: ["breach", "ban"], answer: 0 }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct form",
        src: "SB 6B ex 7",
        items: [
          { q: "I recommend he ___ his bank immediately.", options: ["contact", "contacts to", "to contact"], answer: 0, explain: "Subjunctive: bare infinitive for every person." },
          { q: "It's vital that the website ___ shut down.", options: ["be", "is being", "to be"], answer: 0 },
          { q: "The committee insisted that she ___ the meeting.", options: ["attend", "attending", "to attend"], answer: 0 },
          { q: "Our advice is that customers ___ their passwords regularly.", options: ["change", "changing", "to change"], answer: 0 },
          { q: "It's crucial that he ___ sign the contract until a lawyer has read it.", options: ["not", "doesn't to", "not to"], answer: 0 },
          { q: "___ what may, we'll open the shop on Monday.", options: ["Come", "Comes", "Coming"], answer: 0 },
          { q: "___ to say, the customer wasn't happy.", options: ["Suffice", "Sufficient", "Suffices"], answer: 0 },
          { q: "Far be it ___ me to interfere, but are you sure?", options: ["from", "for", "to"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Rewrite the sentences using the prompts",
        src: "SB 6B ex 9",
        items: [
          {
            q: "Shops must follow the new rules. → It's essential (that) shops ___ with the new rules.",
            answers: [
              ["comply"]
            ]
          },
          {
            q: "You really should apply before Friday. → I strongly recommend (that) you ___ before Friday.",
            answers: [
              ["apply"]
            ]
          },
          {
            q: "He should talk to his manager. → My advice is that he ___ to his manager.",
            answers: [
              ["talk", "speak"]
            ]
          },
          {
            q: "She should be careful with free trials. → I suggest she ___ careful with free trials.",
            answers: [
              ["be"]
            ]
          },
          {
            q: "Parents should monitor what their children watch. → It's important that parents ___ what their children watch.",
            answers: [
              ["monitor"]
            ]
          },
          {
            q: "Whatever happens, I'll support you. → ___ what may, I'll support you.",
            answers: [
              ["Come"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Write recommendations for these people",
        src: "SB 6B ex 10",
        phrases: ["It is vital", "My suggestion is that", "I recommend", "I propose", "It's essential that", "be"],
        items: [
          { q: "It is vital … (people addicted to online shopping)", models: ["It is vital that someone addicted to shopping delete their saved card details."] },
          { q: "My suggestion is … (people who want to get rich)", models: ["My suggestion is that they invest in their education first."] },
          { q: "I recommend … (someone learning English)", models: ["I recommend that she read at least one article in English every day."] },
          { q: "I propose … (a company you know)", models: ["I propose that my bank stop sending me five marketing emails a week."] }
        ]
      },
      {
        type: "speak",
        title: "Present formal recommendations",
        src: "SB 6B ex 11–12",
        intro: "Choose a topic: the environment, the media, social media, mobile phones in schools. Say what measures should be taken and who should be responsible.",
        phrases: [
          "I propose that",
          "It is essential that",
          "We recommend that",
          "It is imperative that",
          "be banned",
          "be monitored",
          "curb",
          "restrict",
          "comply with",
          "severe penalties",
          "Come what may"
        ],
        items: [
          {
            q: "Social media",
            models: [
              "We recommend that platforms be required to verify users' ages, and it is essential that harmful content be removed within 24 hours."
            ]
          },
          {
            q: "Mobile phones in schools",
            models: [
              "I propose that phones be handed in at the start of the day. It is vital that every school comply with the same rule."
            ]
          },
          {
            q: "The environment",
            models: [
              "It is imperative that the government curb single-use plastics and that companies which breach the rules face severe penalties."
            ]
          },
          {
            q: "Who should be responsible?",
            models: [
              "Parents can't do it alone – we suggest that a national regulator monitor content and that self-regulation by tech firms no longer be accepted."
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
        title: "Choose the correct alternatives",
        src: "WB 6B ex 1",
        items: [
          { q: "All drivers are expected to ___ with the speed limits.", options: ["comply", "restrict"], answer: 0 },
          { q: "Some industries depend on self-___ to keep standards high.", options: ["regulation", "arrangement"], answer: 0 },
          { q: "The politician's assets were ___ while he was investigated.", options: ["frozen", "cooled"], answer: 0 },
          { q: "Experts say teenagers' screen time should be ___ closely.", options: ["monitored", "advised"], answer: 0 },
          { q: "A hacker gained ___ access to thousands of email accounts.", options: ["unlicensed", "lawless"], answer: 0 },
          { q: "Police are confident the suspect will not ___ capture for long.", options: ["evade", "ban"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Replace the words in brackets with the words in the box. Two words are not needed",
        src: "WB 6B ex 2",
        intro: "ban · breach · comply · curb · restrict · sanctions",
        items: [
          {
            q: "New laws aim to ___ (limit) how much personal data apps can store.",
            answers: [
              ["restrict"]
            ]
          },
          {
            q: "These laws build on older rules that already ___ (control) such powers.",
            answers: [
              ["curb"]
            ]
          },
          {
            q: "Nobody knows what ___ (punishment) there will be for companies that ___ (break) the law.",
            answers: [
              ["sanctions"],
              ["breach"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the news report with the words in the box. Two words are not needed",
        src: "WB 6B ex 3",
        intro: "evades · penalties · self-regulation · unauthorised · unlicensed · violates",
        items: [
          {
            q: "The city is cracking down on ___ street sellers this summer.",
            answers: [
              ["unlicensed", "unauthorised"]
            ]
          },
          {
            q: "___ sellers will receive strict ___ of up to €2,000.",
            answers: [
              ["Unlicensed", "Unauthorised"],
              ["penalties"]
            ]
          },
          {
            q: "Anyone who then ___ the ban could face prison.",
            answers: [
              ["violates"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make sentences",
        src: "WB 6B ex 4",
        items: [
          { words: ["call", "help", "he", "I", "the", "suggest", "desk"], answer: "I suggest he call the help desk." },
          { words: ["everyone", "It's", "that", "crucial", "calm", "stay"], answer: "It's crucial that everyone stay calm." },
          { words: ["from", "Far", "do", "be", "tell", "to", "it", "me", "to", "everyone", "what"], answer: "Far be it from me to tell everyone what to do." },
          { words: ["that", "suggestion", "is", "our", "we", "for", "delay", "plans", "now", "The"], answer: "The suggestion is that we delay our plans for now." },
          { words: ["this", "is", "option", "best", "the", "say", "to", "Suffice"], answer: "Suffice to say, this is the best option." },
          { words: ["we", "that", "government", "The", "follow", "is", "advice", "guidelines", "sound"], answer: "The advice that we follow government guidelines is sound." },
          { words: ["to", "succeed", "may", "what", "come", "determined", "are", "We"], answer: "We are determined to succeed, come what may." },
          { words: ["Freddie", "stay", "recuperate", "to", "here", "that", "best", "It's"], answer: "It's best that Freddie stay here to recuperate." }
        ]
      },
      {
        type: "errors",
        title: "Add one word to each recommendation where necessary",
        src: "WB 6B ex 5",
        items: [
          { s: "I propose that Marek the one to chair the meeting.", ok: false, fix: "I propose that Marek be the one to chair the meeting." },
          { s: "We suggest Olga an appointment with a specialist.", ok: false, fix: "We suggest Olga make an appointment with a specialist." },
          { s: "Far be from me to complain, but this is unacceptable.", ok: false, fix: "Far be it from me to complain, but this is unacceptable." },
          { s: "He's not welcome here. It's best leave.", ok: false, fix: "He's not welcome here. It's best he leave." },
          { s: "The suggestion Tom play in goal wasn't popular.", ok: false, fix: "The suggestion that Tom play in goal wasn't popular." },
          { s: "It is imperative that Ian more attention in class.", ok: false, fix: "It is imperative that Ian pay more attention in class." },
          { s: "Suffice say, we're no longer working with them.", ok: false, fix: "Suffice to say, we're no longer working with them." },
          { s: "We'll be there for you, come what.", ok: false, fix: "We'll be there for you, come what may." }
        ]
      },
      {
        type: "gap",
        title: "Complete the emails using the prompts in brackets",
        src: "WB 6B ex 6",
        items: [
          {
            q: "Our colleague has had some personal problems lately. I've ___ some time off.",
            hint: "recommend / take",
            answers: [
              [
                "recommended she take",
                "recommended that she take",
                "recommended she takes",
                "recommended that she takes"
              ]
            ]
          },
          {
            q: "We'd like to suggest that Kenji ___ to lead the project in Kraków.",
            hint: "send",
            answers: [
              ["be sent", "is sent"]
            ]
          },
          {
            q: "He has the determination to make it a success, ___.",
            hint: "come / may",
            answers: [
              ["come what may"]
            ]
          },
          {
            q: "___ to point out the obvious, but should we launch without any research?",
            hint: "far / from me",
            answers: [
              ["Far be it from me"]
            ]
          },
          {
            q: "It's ___ sure there is demand before we invest.",
            hint: "essential / the company",
            answers: [
              [
                "essential that the company be",
                "essential the company be",
                "essential that the company is",
                "essential the company is"
              ]
            ]
          },
          {
            q: "___, new products that don't sell could cost us millions.",
            hint: "suffice / say",
            answers: [
              ["Suffice to say", "Suffice it to say"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Formal recommendations: summary",
        table: [
          ["verb + (that) + subject + bare infinitive", "We insist (that) he leave."],
          [
            "It's + adjective + (that) + subject + bare infinitive",
            "It's imperative (that) she be informed."
          ],
          ["noun + that + subject + bare infinitive", "The requirement that all staff be trained…"],
          ["negative: not + infinitive", "I suggest he not mention it."],
          [
            "fixed phrases",
            "Come what may · Far be it from me to… · Suffice (it) to say · Perish the thought!"
          ]
        ]
      },
      {
        h: "Marketing and advertising (Vocabulary bank)",
        table: [
          ["jingle", "short catchy song in an advert"],
          ["celebrity endorsement", "a famous person saying they use a product"],
          ["tie-in", "product connected with a new film or TV show"],
          ["click-and-collect", "order online, pick up in the shop"],
          ["scan-and-shop", "scan goods with a handset as you shop, pay at the checkout"],
          ["viral advertising", "ads spread through social media, email, etc."],
          ["promos", "special offers"],
          ["niche marketing", "advertising to a small, specific market"],
          ["slogan", "short memorable phrase about a product"],
          ["no-quibble returns policy", "refund without any argument"]
        ]
      }
    ],
    exercises: [
      {
        type: "errors",
        title: "Are these sentences correct?",
        src: "LB 6B ex 1",
        items: [
          { s: "I suggest she rethink her plans.", ok: true },
          { s: "Our advice is that you choosing your options carefully.", ok: false, fix: "Our advice is that you choose your options carefully." },
          { s: "Far is it from me to disagree, but I'm not convinced.", ok: false, fix: "Far be it from me to disagree, but I'm not convinced." },
          { s: "It's high time we left – we'll miss the train.", ok: true },
          { s: "It's high time we leave – we'll miss the train.", ok: false, fix: "It's high time we left – we'll miss the train." },
          { s: "It's essential he check his form before sending it.", ok: true },
          { s: "They recommended she left the company next week.", ok: false, fix: "They recommended she leave the company next week." }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversations with one word",
        src: "LB 6B ex 2",
        items: [
          {
            q: "A: It's going to rain all week. B: ___ to say, we'll need our umbrellas!",
            answers: [
              ["Suffice"]
            ]
          },
          {
            q: "A: It's ___ time we went back. The break's nearly over.",
            answers: [
              ["about", "high"]
            ]
          },
          {
            q: "A: Do you think Max will ever arrive on time? B: ___ the thought! He'd have to set an alarm.",
            answers: [
              ["Perish"]
            ]
          },
          {
            q: "A: When should Lena send her application? B: We strongly suggest she ___ it as soon as possible.",
            answers: [
              ["send", "submit"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the marketing terms with the definitions",
        src: "VB 6B ex 1",
        items: [
          { a: "jingle", b: "a short, catchy song used to sell a product" },
          { a: "celebrity endorsement", b: "a famous person saying they like and use a product" },
          { a: "tie-in", b: "a product connected with a new film or TV show" },
          { a: "click-and-collect", b: "order online, then pick it up from the shop" },
          { a: "scan-and-shop", b: "scan goods with a handset as you shop, then pay" },
          { a: "viral advertising", b: "advertising spread via social media and email" },
          { a: "promos", b: "offers or special deals" },
          { a: "niche marketing", b: "advertising to a small, specific market" },
          { a: "slogan", b: "a short, memorable phrase used in adverts" },
          { a: "no-quibble returns policy", b: "offering a refund without challenging it" }
        ]
      },
      {
        type: "choice",
        title: "Which option CANNOT be used to complete each sentence?",
        src: "Check 5–6 ex 9",
        items: [
          { q: "The company faces tough ___ for ignoring the safety rules.", options: ["sanctions", "breach", "penalties"], answer: 1 },
          { q: "The new law is designed to ___ the power of big tech firms.", options: ["restrict", "curb", "comply"], answer: 2 },
          { q: "It's important we don't ___ the terms of the contract.", options: ["curb", "violate", "breach"], answer: 0 },
          { q: "All staff must ___ the fire regulations.", options: ["not violate", "restrict", "comply with"], answer: 1 },
          { q: "Never buy tickets from ___ sellers.", options: ["unauthorised", "unlicensed", "sanction"], answer: 2 }
        ]
      },
      {
        type: "errors",
        title: "Correct the mistake in four of the sentences",
        src: "Check 5–6 ex 10",
        items: [
          { s: "Come that may, we'll keep the shop open.", ok: false, fix: "Come what may, we'll keep the shop open." },
          { s: "The union has put forward the proposal that the new rules only are applied to managers.", ok: false, fix: "The union has put forward the proposal that the new rules only be applied to managers." },
          { s: "We demand the company apologise for its comments.", ok: true },
          { s: "I suggest you are checking the figures again.", ok: false, fix: "I suggest you check the figures again." },
          { s: "It's essential they finish the repairs before winter.", ok: true },
          { s: "Suffice it say, things need to change.", ok: false, fix: "Suffice it to say, things need to change." }
        ]
      },
      {
        type: "speak",
        title: "Give formal recommendations",
        src: "Revision",
        phrases: ["I recommend", "It's essential that", "It's imperative that", "I propose that", "be"],
        items: [
          { q: "A friend keeps forgetting to cancel free trials and losing money.", models: ["I recommend she set a reminder the day she signs up."] },
          { q: "Your city has a problem with litter.", models: ["I propose that the council install more bins and that anyone caught littering be fined."] },
          {
            q: "A company keeps sending you unwanted marketing emails.",
            models: [
              "It's essential that they remove my address from their list and that they comply with data protection law."
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Rewrite as a formal recommendation using the word in brackets",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/unreal-time",
        items: [
          { q: "The manager should be told immediately. (essential)", models: ["It is essential that the manager be told immediately."] },
          { q: "'You really must apologise to the customer, Tom,' she said. (insisted)", models: ["She insisted that Tom apologise to the customer."] },
          { q: "We think the company ought to reduce its prices. (recommend)", models: ["We recommend that the company reduce its prices."] },
          {
            q: "'Don't publish the article yet,' the lawyer told the editor. (advisable)",
            models: [
              "It is advisable that the article not be published yet.",
              "It is advisable that the editor not publish the article yet."
            ]
          },
          {
            q: "Every driver must carry a licence — that's the rule. (requirement)",
            models: [
              "There is a requirement that every driver carry a licence.",
              "It is a requirement that every driver carry a licence."
            ]
          },
          { q: "The union wants the CEO to resign. (demand)", models: ["The union demands that the CEO resign."] },
          { q: "I think we should postpone the meeting. (propose)", models: ["I propose that the meeting be postponed.", "I propose that we postpone the meeting."] }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order",
        src: "extra: https://learnenglish.britishcouncil.org/free-resources/grammar/c1/unreal-time",
        items: [
          { words: ["vital", "not", "It", "miss", "is", "he", "that", "the", "deadline"], answer: "It is vital that he not miss the deadline." },
          { words: ["insisted", "be", "The", "report", "board", "that", "the", "published", "in", "full"], answer: "The board insisted that the report be published in full." },
          { words: ["suggest", "contact", "I", "he", "that", "the", "bank", "directly"], answer: "I suggest that he contact the bank directly.", alts: ["I suggest that he directly contact the bank."] },
          { words: ["imperative", "comply", "It", "every", "is", "employee", "that", "with", "the", "new", "rules"], answer: "It is imperative that every employee comply with the new rules." },
          { words: ["recommended", "be", "They", "the", "that", "product", "withdrawn", "from", "sale"], answer: "They recommended that the product be withdrawn from sale." },
          { words: ["be", "me", "Far", "from", "it", "to", "criticise", "your", "cooking"], answer: "Far be it from me to criticise your cooking." },
          { words: ["what", "will", "Come", "finish", "may", "we", "on", "time"], answer: "Come what may, we will finish on time.", alts: ["We will finish on time, come what may."] }
        ]
      }
    ]
  }
});
