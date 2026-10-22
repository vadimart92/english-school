/*
 * 2B Work, work, work
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "2B",
  unit: 2,
  letter: "B",
  title: "Work, work, work",
  uk: "Робота: ймовірність, згода й незгода",
  goal: "speculate about work situations",
  focus: { grammar: "probability", vocab: "agreement and disagreement", pron: "elision of k in likely" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "Three patterns",
        table: [
          ["It + be + adjective + that-clause", "It's likely that we'll arrive early."],
          ["Pronoun + be + adjective + that-clause", "I'm sure (that) they knew all about it."],
          ["Subject + adjective + to-infinitive (emphasises the subject)", "We're likely to arrive early."]
        ]
      },
      {
        h: "Watch out",
        list: [
          "(im)possible works only with It: It's impossible that we could have finished on time. NOT We were impossible to…",
          "bound works only with to-infinitive: It's bound to rain.",
          "(un)likely + highly, quite: She's highly unlikely to be there on time.",
          "sure / certain + pretty, fairly, absolutely, totally, quite: I'm pretty certain she won't say no."
        ]
      },
      {
        h: "Agreeing",
        list: [
          "get on board with an idea",
          "be willing to do something",
          "be open to an idea",
          "go along with something (accept, maybe reluctantly)"
        ]
      },
      {
        h: "Disagreeing / resistance",
        list: [
          "be met with a lukewarm response",
          "be at odds with (conflict with)",
          "receive some pushback",
          "come up against some resistance",
          "take issue with something",
          "be loath to do something (very unwilling)"
        ]
      }
    ],
    exercises: [
      {
        type: "gap",
        title: "Complete with one word",
        items: [
          {
            q: "It's unlikely ___ they'll agree to this.",
            answers: [
              ["that"]
            ]
          },
          {
            q: "The finance department are sure ___ reject the budget.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "She's highly ___ to agree, because it's in her best interests.",
            answers: [
              ["likely"]
            ]
          },
          {
            q: "___'s possible we'll get there early at this rate.",
            answers: [
              ["it"]
            ]
          },
          {
            q: "We ___ certain this will get approved.",
            answers: [
              ["are", "feel"]
            ]
          },
          {
            q: "Craig's unlikely ___ have already bought her present.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "You're bound ___ get the job, I'm sure of it.",
            answers: [
              ["to"]
            ]
          },
          {
            q: "I'm sure ___ things will get better for you soon.",
            answers: [
              ["that"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Choose the correct alternative (text)",
        items: [
          { q: "The world of work is changing rapidly, and this is bound ___ continue into the future.", options: ["it will", "to"], answer: 1 },
          { q: "While it's ___ likely that a small number of jobs will become fully automated…", options: ["highly", "totally"], answer: 0 },
          { q: "…experts are fairly sure ___ mean humans being replaced.", options: ["not to", "that this will not"], answer: 1 },
          { q: "A significant number of jobs are likely ___ become at least partially automated.", options: ["to", "that they will"], answer: 0 },
          { q: "Polarisation of the workforce ___ sure to continue too.", options: ["is", "that"], answer: 0 },
          { q: "It's also possible ___ manufacturing jobs will decrease.", options: ["to", "that"], answer: 1 },
          { q: "Workers are quite ___ to offer their services online.", options: ["likely", "possible"], answer: 0 },
          { q: "With all of these changes occurring, ___ can be quite sure that…", options: ["it", "we"], answer: 1 }
        ],
        src: "Revision"
      },
      {
        type: "sort",
        title: "Positive or negative reaction?",
        categories: ["support", "resistance"],
        items: [
          { text: "get on board with", cat: 0 },
          { text: "be willing to", cat: 0 },
          { text: "be open to", cat: 0 },
          { text: "go along with", cat: 0 },
          { text: "be met with a lukewarm response", cat: 1 },
          { text: "be at odds with", cat: 1 },
          { text: "receive some pushback", cat: 1 },
          { text: "come up against some resistance", cat: 1 },
          { text: "take issue with", cat: 1 },
          { text: "be loath to", cat: 1 }
        ],
        src: "Revision"
      },
      {
        type: "gap",
        title: "Complete with one word",
        items: [
          {
            q: "I'd be ___ to come in three days a week, but not five.",
            answers: [
              ["willing"]
            ]
          },
          {
            q: "I'm not really ___ to that idea.",
            answers: [
              ["open"]
            ]
          },
          {
            q: "I think this proposal will receive some ___.",
            answers: [
              ["pushback"]
            ]
          },
          {
            q: "The plan was met with a ___ response.",
            answers: [
              ["lukewarm"]
            ]
          },
          {
            q: "Management are ___ to change the policy. (very unwilling)",
            answers: [
              ["loath", "loth"]
            ]
          },
          {
            q: "Her views are at ___ with the rest of the team.",
            answers: [
              ["odds"]
            ]
          },
          {
            q: "I take ___ with the idea that AI is always fair.",
            answers: [
              ["issue"]
            ]
          },
          {
            q: "It took a while, but eventually everyone got on ___ with the idea.",
            answers: [
              ["board"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "React to the proposal",
        phrases: [
          "on board",
          "willing",
          "open to",
          "go along with",
          "lukewarm",
          "at odds with",
          "pushback",
          "resistance",
          "take issue",
          "loath to"
        ],
        items: [
          {
            q: "Your company wants to ban working from home completely.",
            models: [
              "I'd be willing to come in three days a week, but not five.",
              "I'm not really open to that idea.",
              "I think this proposal will receive some pushback."
            ]
          },
          { q: "All meetings should start at 7 a.m.", models: ["I suspect it'll come up against some resistance."] },
          { q: "Students should keep their cameras on throughout every online lesson.", models: ["I'd go along with it for small groups, but many would be loath to."] },
          { q: "Social media should be banned for anyone under 18.", models: ["I take issue with a total ban – it's at odds with young people's rights."] },
          { q: "Everyone should work a four-day week.", models: ["I'd get on board with that immediately!"] },
          { q: "AI should mark all exams.", models: ["I think it would be met with a lukewarm response from teachers."] },
          { q: "Cars should be banned from city centres.", models: ["I'm open to the idea, but drivers will push back."] },
          { q: "Employees should be allowed unlimited holiday.", models: ["Managers might be loath to approve it."] }
        ],
        src: "Revision"
      }
    ]
  }
});
