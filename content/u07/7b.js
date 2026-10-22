/*
 * 7B It's a scam!
 */
ES.registerLesson({
  id: "7B",
  unit: 7,
  letter: "B",
  title: "It's a scam!",
  uk: "Шахрайство: відносні речення з прийменниками (according to whom, half of which, by which time) та лексика обману",
  goal: "talk about financial problems",
  focus: { grammar: "relative clauses", vocab: "deception", pron: "weak and strong forms of to" },
  learn: {
    theory: [
      {
        h: "Defining and non-defining",
        list: [
          "Defining clauses tell us which person/thing we mean. No commas. who/which/that can be left out when it is the object: This is the app (that) I downloaded.",
          "Non-defining clauses add extra information between commas. Use who/which (never that) and never leave the pronoun out: My bank, which I've used for years, has closed my account.",
          "which can comment on a whole statement: We got lost, which was annoying."
        ]
      },
      {
        h: "Short prepositions: two positions",
        p: "Basic prepositions (about, of, with, to, for, in…) usually stay where they would be in a normal sentence – at the end of the clause. In formal English they can move in front of which/whom (never who or that).",
        ex: [
          "This is the scam (that) I warned you about. (neutral)",
          "This is the scam about which I warned you. (formal)",
          "the person to whom I sent the money (NOT to who)"
        ]
      },
      {
        h: "Longer prepositions always go first",
        p: "Longer prepositions (according to, despite, in spite of, instead of, as a result of) and prepositions with a modifier (shortly after, three weeks after, two metres above) come before which/whom, usually in non-defining clauses.",
        ex: [
          "We spoke to an adviser, according to whom it was all above board. (NOT …who it was all above board according to)",
          "I paid for the software, shortly after which I realised it was a one-month trial."
        ]
      },
      {
        h: "Number/quantifier + of which/whom",
        p: "some/most/half/none/three/several/the biggest + of + which/whom.",
        ex: [
          "I ordered ten parcels, half of which never arrived.",
          "The guests, most of whom I'd never met, were very friendly.",
          "There are many problems, the biggest of which is the cost."
        ]
      },
      {
        h: "Fixed phrases with which",
        table: [
          ["by which time", "We arrived at ten, by which time all the food was gone."],
          ["at which point", "My account was empty, at which point I realised I'd been taken in."],
          ["in which case", "It might be a scam, in which case we should report it."],
          ["after which", "I sent them my details, after which the emails stopped."]
        ]
      },
      {
        h: "Pronunciation: to",
        p: "In the middle of a clause to is weak /tə/ (the person I lent it to was…); at the very end of a sentence it is strong /tuː/ (…the scam you fell victim to).",
        ex: ["Who did you send it to?", "That's the man I sent the money to last week."]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Deception",
        src: "SB 7B",
        items: [
          { front: "a scam / a con", back: "шахрайство, афера", ex: "It's a classic online scam." },
          { front: "a scammer / a con artist", back: "шахрай", ex: "The con artist gained their trust first." },
          { front: "a ploy / a ruse", back: "хитрощі, виверт", ex: "The typos are a deliberate ploy." },
          { front: "see through something", back: "розкусити, не повестися", ex: "Luckily, she saw through his story." },
          { front: "be taken in by / be duped", back: "повестися на обман", ex: "Thousands were taken in by the fake ad." },
          { front: "be ripped off", back: "бути обдуреним (переплатити)", ex: "We were ripped off at that café." },
          { front: "gullible", back: "довірливий, легковірний", ex: "You're so gullible – you believe anything!" },
          { front: "streetwise / vigilant / discerning", back: "тямущий / пильний / розбірливий", ex: "Stay vigilant when you get unexpected calls." },
          { front: "lure somebody (into)", back: "заманювати", ex: "They lure victims with promises of easy money." },
          { front: "above board", back: "чесний, законний", ex: "Are you sure the deal is above board?" },
          { front: "prey on", back: "полювати на (слабких)", ex: "Scammers prey on lonely people." },
          { front: "bogus", back: "фальшивий", ex: "a bogus charity collector" },
          { front: "purport to (be/do)", back: "видавати себе за, нібито", ex: "The email purports to come from your bank." },
          { front: "lull somebody into a false sense of security", back: "приспати пильність", ex: "Positive reviews lulled us into a false sense of security." }
        ]
      },
      {
        type: "match",
        title: "Match the words to the meanings",
        src: "SB 7B",
        items: [
          { a: "a con artist", b: "a person who tricks people out of money" },
          { a: "a ploy", b: "a technique to turn a situation to your advantage" },
          { a: "see through", b: "correctly recognise a trick" },
          { a: "be duped", b: "be deceived" },
          { a: "gullible", b: "easy to deceive" },
          { a: "streetwise", b: "aware of and resistant to deception" },
          { a: "lure", b: "attract somebody into a trap" },
          { a: "above board", b: "legal, not a scam" },
          { a: "prey on", b: "focus your attack on somebody" },
          { a: "bogus", b: "not real, fake" }
        ]
      },
      {
        type: "gap",
        title: "Complete with: after which, by which time, from whom, half of which, in which case, on top of which",
        src: "SB 7B",
        items: [
          {
            q: "It's usually just a trick to charm the people ___ they plan to steal.",
            answers: [
              ["from whom"]
            ]
          },
          {
            q: "I put €8,000 into their funds, ___ I placed in a low-risk account.",
            answers: [
              ["half of which"]
            ]
          },
          {
            q: "My safe investment had grown by 12%, ___ my risky one had almost doubled.",
            answers: [
              ["on top of which"]
            ]
          },
          {
            q: "I asked to withdraw my savings, ___ the money appeared in my account.",
            answers: [
              ["after which"]
            ]
          },
          {
            q: "It took months to arrange the loan, ___ my investment had tripled in value.",
            answers: [
              ["by which time"]
            ]
          },
          {
            q: "Those returns sound too good to be true, ___ your investment probably isn't worth much.",
            answers: [
              ["in which case"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct relative clause",
        src: "SB 7B",
        items: [
          { q: "We spoke to an adviser, ___ it was all above board.", options: ["who according to", "according to whom", "whom according to"], answer: 1 },
          { q: "This is the website ___ I was telling you.", options: ["about which", "which about", "about that"], answer: 0 },
          { q: "That's the man ___ I lent the money.", options: ["to who", "whom to", "to whom"], answer: 2 },
          { q: "I paid for the software, shortly ___ I realised it was only a trial.", options: ["which after", "after which", "after that"], answer: 1 },
          { q: "I ordered six phones, ___ never arrived.", options: ["three of which", "which three of", "three of them which"], answer: 0 },
          { q: "We arrived at ten, ___ all the food had gone.", options: ["by that time which", "by which time", "by when time"], answer: 1 },
          { q: "It may be a scam, ___ we should report it.", options: ["in case which", "in which case", "in that case which"], answer: 1 },
          { q: "I had a valid ticket, ___ they wouldn't let me in.", options: ["despite which", "which despite", "despite that"], answer: 0 },
          { q: "The fund ___ we put our savings collapsed.", options: ["which into", "into that", "into which"], answer: 2 }
        ]
      },
      {
        type: "transform",
        title: "Combine the sentences using relative clauses",
        src: "SB 7B",
        items: [
          { q: "I get about 30 messages a day. Nearly all of them are spam.", models: ["I get about 30 messages a day, nearly all of which are spam."] },
          { q: "My card stopped working. At that point, I realised something was wrong.", models: ["My card stopped working, at which point I realised something was wrong."] },
          { q: "They hoped to retire on their savings. Instead of retiring, they ended up in debt.", models: ["They hoped to retire on their savings, instead of which they ended up in debt."] },
          {
            q: "I lost money in a scheme. I'd been lured into it by promises of quick profits.",
            models: [
              "I lost money in a scheme into which I'd been lured by promises of quick profits.",
              "I lost money in a scheme (which) I'd been lured into by promises of quick profits."
            ]
          },
          { q: "I got a letter from a lawyer. According to him, a distant cousin left me some money.", models: ["I got a letter from a lawyer, according to whom a distant cousin left me some money."] },
          { q: "She bought some tokens from a website. A week after buying them, the site vanished.", models: ["She bought some tokens from a website, a week after which the site vanished."] },
          { q: "The advert promised instant riches. The prospect of instant riches was very tempting.", models: ["The advert promised instant riches, the prospect of which was very tempting."] }
        ]
      },
      {
        type: "speak",
        title: "Talk about scams and money problems",
        src: "SB 7B",
        phrases: [
          "instead of which",
          "most of which",
          "none of which",
          "according to which",
          "according to whom",
          "at which point",
          "by which time",
          "above board",
          "taken in",
          "gullible",
          "streetwise"
        ],
        items: [
          {
            q: "I was expecting (to do what?), instead of which (what happened?)",
            models: [
              "I was expecting a quiet weekend, instead of which I spent it dealing with my bank after someone cloned my card."
            ]
          },
          {
            q: "How many emails do you get each day? How many are useful?",
            models: [
              "I get about fifty a day, most of which go straight into the bin – and quite a few of which are obviously bogus."
            ]
          },
          {
            q: "Tell about a strange message you received recently.",
            models: [
              "I recently got a text from a 'delivery company', according to which I owed £2 in fees. I saw through it immediately, but my dad was nearly taken in."
            ]
          },
          {
            q: "Your friend has invested in a scheme promising 25% a year. Warn them.",
            models: [
              "Are you sure it's above board? Check the company's registration first, and don't send any more money until you're 100% sure – it sounds too good to be true."
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
        title: "Choose the correct alternative",
        src: "WB 7B",
        items: [
          { q: "A builder tried to overcharge us, but we ___ his tricks.", options: ["preyed on", "saw through"], answer: 1 },
          { q: "You can't be ___ if you want to avoid being conned.", options: ["discerning", "gullible"], answer: 1 },
          { q: "I'm not convinced their business is ___.", options: ["above board", "streetwise"], answer: 0 },
          { q: "Insurers must decide whether a claim is real or ___.", options: ["bogus", "a ruse"], answer: 0 },
          { q: "If you never bought a ticket, an email saying you've won the lottery is clearly a ___.", options: ["con", "scammer"], answer: 0 },
          { q: "Don't ring that number back. It's a ___ to make you pay premium rates.", options: ["ploy", "purpose"], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete with: above board, being duped, con artist, gullible, lure, prey on, purport, ripped off, ruse, scammers, streetwise, vigilant",
        src: "WB 7B",
        items: [
          {
            q: "We all have to be really ___ when we get calls from unknown numbers.",
            answers: [
              ["vigilant"]
            ]
          },
          {
            q: "Even the most ___ people sometimes fall victim to clever scams.",
            answers: [
              ["streetwise"]
            ]
          },
          {
            q: "Some victims have been ___ for thousands of pounds.",
            answers: [
              ["ripped off"]
            ]
          },
          {
            q: "They try hard to convince you that the deal is all ___.",
            answers: [
              ["above board"]
            ]
          },
          {
            q: "The ___ exploit our wish to save money.",
            answers: [
              ["scammers"]
            ]
          },
          {
            q: "Greed makes us more ___.",
            answers: [
              ["gullible"]
            ]
          },
          {
            q: "On the phone, a ___ will use clever techniques…",
            answers: [
              ["con artist"]
            ]
          },
          {
            q: "…to ___ us into their trap.",
            answers: [
              ["lure"]
            ]
          },
          {
            q: "We may not recognise their cunning ___ for what it is – a trick.",
            answers: [
              ["ruse"]
            ]
          },
          {
            q: "These people tend to ___ vulnerable people.",
            answers: [
              ["prey on"]
            ]
          },
          {
            q: "Emails can ___ to be from a company you trust.",
            answers: [
              ["purport"]
            ]
          },
          {
            q: "Log in through the official website to avoid ___.",
            answers: [
              ["being duped"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct option",
        src: "WB 7B",
        items: [
          { q: "We cooked loads of food, ___ was thrown away.", options: ["the majority of which", "which the majority of"], answer: 0 },
          { q: "It was a novel by an author ___ I'd never heard.", options: ["of whom", "who"], answer: 0 },
          { q: "We had some bad news today, ___ the shop closed early.", options: ["which as a result of", "as a result of which"], answer: 1 },
          { q: "It was midnight when we arrived, ___ the hotel was locked.", options: ["by which point", "which point by"], answer: 0 },
          { q: "There were a few parts of the contract ___ we weren't sure.", options: ["by that", "about which"], answer: 1 },
          { q: "Moving abroad has many challenges, the biggest ___ is the language.", options: ["which", "of which"], answer: 1 }
        ]
      },
      {
        type: "gap",
        title: "Add the missing preposition",
        src: "WB 7B",
        items: [
          {
            q: "I got to the office at ten, ___ which time I'd already missed two calls.",
            answers: [
              ["by"]
            ]
          },
          {
            q: "That's the manager I used to work ___ when I lived in Lviv.",
            answers: [
              ["for", "with"]
            ]
          },
          {
            q: "I'm still in touch with my old classmates, two ___ whom live nearby.",
            answers: [
              ["of"]
            ]
          },
          {
            q: "I've just read a study, according ___ which dogs understand 200 words.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "They say the trains are on strike, ___ which case we'll drive.",
            answers: [
              ["in"]
            ]
          },
          {
            q: "My boss just mentioned a new policy ___ which nobody had told me.",
            answers: [
              ["about"]
            ]
          }
        ]
      },
      {
        type: "transform",
        title: "Complete the second sentence so it means the same",
        src: "WB 7B",
        items: [
          { q: "I had a few calls. Not long after that, I got some strange emails.", start: "I had a few calls, not long…", models: ["I had a few calls, not long after which I got some strange emails."] },
          { q: "The guests all introduced themselves. I'd met none of them before.", start: "The guests, none…", models: ["The guests, none of whom I'd met before, all introduced themselves."] },
          { q: "Let's organise a party. We can all contribute something to it.", start: "Let's organise a party to…", models: ["Let's organise a party to which we can all contribute something."] },
          { q: "In walked my sister. The sight of her immediately cheered me up.", start: "In walked my sister, the sight of…", models: ["In walked my sister, the sight of whom immediately cheered me up."] },
          { q: "There are thousands of apps. Many will disappear within a year.", start: "There are thousands of apps, many…", models: ["There are thousands of apps, many of which will disappear within a year."] },
          {
            q: "The car made a strange noise and stopped. At that point, we knew we were stuck.",
            start: "The car made a strange noise and stopped,…",
            models: ["The car made a strange noise and stopped, at which point we knew we were stuck."]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "Relative clauses: quick check",
        list: [
          "the scam (that) I fell for / the scam for which I fell (formal) – short prepositions",
          "according to whom / despite which / instead of which / shortly after which – long prepositions always first",
          "half of which / most of whom / none of which / the purpose of which – quantity or 'the X of'",
          "by which time / at which point / in which case – fixed phrases",
          "after a preposition: whom/which – never who or that"
        ]
      },
      {
        h: "Finance and investment",
        table: [
          ["collateral", "property promised as a guarantee for a loan"],
          ["a debtor / a creditor", "a person who owes money / a person or bank that is owed money"],
          ["default (on)", "fail to pay what you owe"],
          ["repossess", "take back property because payments weren't made"],
          ["credit rating", "a score showing how safe it is to lend you money"],
          ["depreciate / appreciate", "lose / gain value"],
          ["speculate", "buy risky things hoping to make a quick profit"],
          ["assets", "things of value that you own"],
          ["write off", "accept that money is lost"],
          ["hedge fund", "a fund mixing high- and low-risk investments"],
          [
            "bonds / stocks and shares",
            "certificates of a loan to a government/company / parts of a company"
          ],
          [
            "commodities / derivatives",
            "raw materials like oil or gold / complex contracts about future prices"
          ]
        ]
      },
      {
        h: "Idioms from the scam emails",
        table: [
          ["come out of the blue", "be completely unexpected"],
          ["get the ball rolling / get cracking", "get started"],
          ["red tape", "annoying official rules and paperwork"],
          ["cost an arm and a leg", "be very expensive"],
          ["get the wrong end of the stick", "misunderstand"],
          ["a pain in the neck", "something annoying or inconvenient"]
        ]
      }
    ],
    exercises: [
      {
        type: "transform",
        title: "Combine the sentences. Choose the best position for the preposition",
        src: "LB 7B",
        items: [
          {
            q: "I need something. I can fix this shelf with it.",
            models: [
              "I need something (that) I can fix this shelf with.",
              "I need something with which I can fix this shelf."
            ]
          },
          { q: "I was trying to help. Instead of helping, I made things worse.", models: ["I was trying to help, instead of which I made things worse."] },
          { q: "Are there any apps? Ones you can't imagine living without?", models: ["Are there any apps (that) you can't imagine living without?"] },
          { q: "It was pouring with rain. Despite this, I went cycling.", models: ["It was pouring with rain, despite which I went cycling."] },
          {
            q: "We need a table. We can put the printer on top of it.",
            models: [
              "We need a table (that) we can put the printer on top of.",
              "We need a table on top of which we can put the printer."
            ]
          },
          { q: "Is there anything? You have a real talent for it.", models: ["Is there anything (that) you have a real talent for?"] }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences using the word in brackets",
        src: "LB 7B",
        items: [
          {
            q: "It took forty minutes to fix the microphone, ___ the audience was getting restless.",
            hint: "time",
            answers: [
              ["by which time"]
            ]
          },
          {
            q: "I paid for the course on 1 May, ___ I still hadn't received a login.",
            hint: "six weeks",
            answers: [
              ["six weeks after which"]
            ]
          },
          {
            q: "Welcome to the workshop, ___ is to help you spot online fraud.",
            hint: "aim",
            answers: [
              ["the aim of which"]
            ]
          },
          {
            q: "They'd obviously had a party, ___ were still all over the kitchen.",
            hint: "remains",
            answers: [
              ["the remains of which"]
            ]
          },
          {
            q: "We found lots of old coins in the attic, quite ___ turned out to be valuable.",
            hint: "few",
            answers: [
              ["a few of which"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete with one word. The first letter is given",
        src: "Check 7",
        items: [
          {
            q: "I get lots of scam emails, but it's usually easy to see ___ them.",
            hint: "t…",
            answers: [
              ["through"]
            ]
          },
          {
            q: "Are you sure this investment is above ___? It looks dodgy to me.",
            hint: "b…",
            answers: [
              ["board"]
            ]
          },
          {
            q: "He said he was ill, but it was all a ___ to get Friday off.",
            hint: "r…",
            answers: [
              ["ruse"]
            ]
          },
          {
            q: "You're so ___ – you believe everything he says.",
            hint: "g…",
            answers: [
              ["gullible"]
            ]
          },
          {
            q: "All those five-star reviews lulled me into a false sense of ___.",
            hint: "s…",
            answers: [
              ["security"]
            ]
          },
          {
            q: "We were totally ___ off – they charged us €20 for two coffees!",
            hint: "r…",
            answers: [
              ["ripped"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the relative clauses with one word",
        src: "Check 7",
        items: [
          {
            q: "Check your contract, according to ___ you must give a month's notice.",
            answers: [
              ["which"]
            ]
          },
          {
            q: "The storm affected thousands of families, many of ___ lost their homes.",
            answers: [
              ["whom"]
            ]
          },
          {
            q: "We got off to a bad start, in spite of ___ we became close friends.",
            answers: [
              ["which"]
            ]
          },
          {
            q: "We held a meeting, the purpose ___ which was to agree a budget.",
            answers: [
              ["of"]
            ]
          },
          {
            q: "I threatened to post a review, shortly ___ which they offered me a refund.",
            answers: [
              ["after"]
            ]
          },
          {
            q: "I waited two weeks before applying, by which ___ the job had gone.",
            answers: [
              ["time"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Finance and investment: complete the sentences",
        src: "VB 7B",
        items: [
          {
            q: "The bank wanted our flat as ___ for the loan.",
            answers: [
              ["collateral"]
            ]
          },
          {
            q: "If you ___ on your mortgage payments, you could lose your home.",
            answers: [
              ["default"]
            ]
          },
          {
            q: "The ___ – usually a bank – can then ___ the property.",
            answers: [
              ["creditor"],
              ["repossess"]
            ]
          },
          {
            q: "Missing payments will damage your credit ___.",
            answers: [
              ["rating"]
            ]
          },
          {
            q: "A new car ___ as soon as you drive it away.",
            answers: [
              ["depreciates"]
            ]
          },
          {
            q: "He made a fortune ___ on cryptocurrencies, then lost it all.",
            answers: [
              ["speculating"]
            ]
          },
          {
            q: "The company had to sell some of its ___ to pay its debts.",
            answers: [
              ["assets"]
            ]
          },
          {
            q: "The shares became worthless, so we had to ___ the investment.",
            answers: [
              ["write off"]
            ]
          },
          {
            q: "Gold and oil are examples of ___.",
            answers: [
              ["commodities"]
            ]
          },
          {
            q: "Government ___ are a safe but low-return investment.",
            answers: [
              ["bonds"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the idioms to the meanings",
        src: "Skills 7B",
        items: [
          { a: "come out of the blue", b: "be very unexpected" },
          { a: "get the ball rolling", b: "get started" },
          { a: "red tape", b: "unnecessary official rules" },
          { a: "cost an arm and a leg", b: "be very expensive" },
          { a: "get the wrong end of the stick", b: "misunderstand" },
          { a: "save you the bother", b: "stop you doing pointless work" },
          { a: "revert to", b: "go back to (an owner or state)" },
          { a: "a pain in the neck", b: "something annoying, inconvenient" }
        ]
      },
      {
        type: "sort",
        title: "Formal, informal or a mix?",
        src: "Skills 7B",
        intro: "Mixed tone is a typical sign of a scam email.",
        categories: ["formal", "informal", "mix of both"],
        items: [
          { text: "With the greatest respect, I do not feel it would be advisable to accept this offer.", cat: 0 },
          { text: "Sorry I haven't got back to you, I've been all over the place this week.", cat: 1 },
          { text: "Hi! I am writing with regard to an opportunity you may wish to take advantage of.", cat: 2 },
          { text: "I would appreciate it if you could get a move on with sending the documents.", cat: 2 },
          { text: "Had I been aware of the situation, I would have made efforts to rectify the issues.", cat: 0 },
          { text: "I've got to get my head down at work for a bit. Talk soon.", cat: 1 },
          { text: "It is with deepest regret that I inform you that your relative has passed away.", cat: 0 }
        ]
      }
    ]
  }
});
