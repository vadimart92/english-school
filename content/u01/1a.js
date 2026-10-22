/*
 * 1A Team building
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "1A",
  unit: 1,
  letter: "A",
  title: "Team building",
  uk: "Командна робота: перфектні часи і фрази з делексичними дієсловами",
  goal: "give feedback on an event",
  focus: { grammar: "present, past and future perfect", vocab: "phrases with delexical verbs", pron: "pronunciation of have/had in perfect forms" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "The idea",
        p: "Perfect forms look back from a point in time (now, then, or a future moment) to an earlier event or process.",
        ex: [
          "I'll have had this phone for five years soon.",
          "I'd just passed my test, so I was really happy."
        ]
      },
      {
        h: "Simple vs continuous",
        p: "Continuous (have been + -ing) for earlier processes and activities; simple (have + V3) for complete events or a number of times. State verbs (know, cost, own) normally stay simple.",
        ex: [
          "I've been trying to call you for hours.",
          "I'm happy because I've passed my test.",
          "How long have you known them? (NOT have you been knowing)"
        ]
      },
      {
        h: "Four main uses",
        list: [
          "Measuring time up to a point: for, since, how long…",
          "Direct results of earlier events, often with so / because",
          "Experiences up to a point: ever, never, before, already, yet, times",
          "Recent news and trends: I've just seen a squirrel… but it's gone now."
        ]
      },
      {
        h: "Negatives change the meaning",
        p: "Negative simple = the last time was long ago. Negative continuous = the activity started only recently.",
        ex: [
          "I haven't used this website for years. (= last used it years ago)",
          "I haven't been using this website for long. (= started recently)"
        ]
      },
      {
        h: "Specific past time",
        p: "Past perfect and future perfect can take a specific earlier time; present perfect cannot.",
        ex: [
          "I'd hurt my back the previous week, so I couldn't carry the boxes.",
          "I've hurt my back, so I can't carry those boxes. (NOT … last week)"
        ]
      },
      {
        h: "Verb + noun",
        table: [
          ["have", "a lie-down · a well-earned rest · a sit-down"],
          ["go", "for a run · on a teambuilding course · for a stroll"],
          ["give someone", "help · a break · a warm welcome"],
          ["get", "some fresh air · people talking · the benefits of something"],
          ["hold", "a welcome meeting · a singing competition · a feedback session"],
          ["make", "a contribution · a success of something · a statement"],
          ["do", "some rock-climbing · plenty of preparation · someone good"],
          ["take", "the initiative · the lead during an activity · something into consideration"]
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Choose the correct alternative",
        items: [
          { q: "Ricky's upset because somebody has ___ the side of his car.", options: ["scratched", "been scratching"], answer: 0, explain: "A finished action with a visible result → simple." },
          { q: "I haven't ___ a tie for years – they're so uncomfortable!", options: ["worn", "been wearing"], answer: 0, explain: "Negative simple = the last time was years ago." },
          { q: "I've ___ about ten cliffs so far.", options: ["climbed", "been climbing"], answer: 0, explain: "A number of times (ten cliffs) → simple." },
          { q: "…but I've never ___ it without safety harnesses.", options: ["done", "been doing"], answer: 0, explain: "Experience with never → simple." },
          { q: "My eyes are red because I've ___ onions.", options: ["chopped", "been chopping"], answer: 1, explain: "The activity explains the present evidence (red eyes) → continuous." },
          { q: "Don't worry – I haven't ___.", options: ["cried", "been crying"], answer: 1, explain: "Denying the activity that would explain the red eyes → continuous." },
          { q: "Oh, what a nice surprise! We've just ___ about you.", options: ["talked", "been talking"], answer: 1, explain: "An activity in progress until just now → continuous." },
          { q: "…about the fact that we haven't ___ you for ages.", options: ["seen", "been seeing"], answer: 0, explain: "Negative simple + for ages = the last time was long ago." }
        ],
        src: "Revision"
      },
      {
        type: "gap",
        title: "Put the verb into the correct perfect form",
        items: [
          {
            q: "Ricky was upset when we saw him because somebody ___ the side of his car.",
            hint: "scratch",
            answers: [
              ["had scratched"]
            ]
          },
          {
            q: "I'm going to wear a tie for tomorrow's presentation. It's the first time I ___ a tie for years.",
            hint: "wear",
            answers: [
              ["will have worn", "'ll have worn", "have worn", "'ve worn"]
            ]
          },
          {
            q: "Vera is planning to climb a huge cliff next year. She ___ about ten cliffs by then.",
            hint: "climb",
            answers: [
              ["will have climbed", "'ll have climbed"]
            ]
          },
          {
            q: "…but it'll be the first time she ___ it without safety harnesses.",
            hint: "do",
            answers: [
              ["will have done", "'ll have done"]
            ]
          },
          {
            q: "Chris's eyes were all red. It looked like he ___, but in fact he ___ onions.",
            hint: "cry / chop",
            answers: [
              ["had been crying", "'d been crying"],
              ["had been chopping", "'d been chopping"]
            ]
          },
          {
            q: "It was weird to see Freda at the party, especially because we ___ about her.",
            hint: "just / talk",
            answers: [
              ["had just been talking", "'d just been talking"]
            ]
          },
          {
            q: "It was the first time I ___ someone from my childhood in years.",
            hint: "see",
            answers: [
              ["had seen", "'d seen"]
            ]
          },
          {
            q: "Last week, I was really tired because I ___ all day.",
            hint: "work",
            answers: [
              ["had been working", "'d been working"]
            ]
          },
          {
            q: "By this time next year, I ___ the course I'm doing now.",
            hint: "complete",
            answers: [
              ["will have completed", "'ll have completed"]
            ]
          },
          {
            q: "By the end of this year, I ___ in this city for five years.",
            hint: "live",
            answers: [
              ["will have been living", "'ll have been living", "will have lived", "'ll have lived"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "Your own ideas (revision Task 1)",
        intro: "Finish the sentences about your life. Use a perfect form – simple or continuous.",
        phrases: [
          "had seen",
          "had been",
          "will have",
          "have been",
          "have tried",
          "had been working",
          "will have been"
        ],
        items: [
          {
            q: "It was the first time I ___ in years.",
            models: [
              "It was the first time I had seen my school friend in years. (past perfect: earlier than a past moment)"
            ]
          },
          {
            q: "By this time next year, I ___ something important that I'm working on now.",
            models: [
              "By this time next year, I will have finished my degree. (future perfect: completed before a future point)"
            ]
          },
          {
            q: "I ___ to do something recently, but I still haven't managed to do it.",
            models: [
              "I have been trying to fix my sleep schedule recently. (best: present perfect continuous)",
              "I have tried to fix… (simple: less focus on duration)"
            ]
          },
          {
            q: "By the end of this year, I ___ in the same job / city for … years.",
            models: [
              "By the end of this year, I will have been living in Kyiv for five years.",
              "…I will have lived here for five years. (both fine: process vs result)"
            ]
          },
          { q: "Last week, I was really tired because I ___ all day.", models: ["…because I had been studying all day. (earlier continuous activity → past perfect continuous)"] }
        ],
        src: "Revision"
      },
      {
        type: "gap",
        title: "Complete the phrase",
        items: [
          {
            q: "have a well-earned ___",
            answers: [
              ["rest"]
            ]
          },
          {
            q: "go for a ___",
            answers: [
              ["run", "stroll", "walk"]
            ]
          },
          {
            q: "give someone a warm ___",
            answers: [
              ["welcome"]
            ]
          },
          {
            q: "take the ___ (start something without being asked)",
            answers: [
              ["initiative", "lead"]
            ]
          },
          {
            q: "make a ___ of something",
            answers: [
              ["success"]
            ]
          },
          {
            q: "hold a feedback ___",
            answers: [
              ["session"]
            ]
          },
          {
            q: "get some ___ air",
            answers: [
              ["fresh"]
            ]
          },
          {
            q: "get people ___",
            answers: [
              ["talking"]
            ]
          },
          {
            q: "do plenty of ___",
            answers: [
              ["preparation"]
            ]
          },
          {
            q: "take something into ___",
            answers: [
              ["consideration", "account"]
            ]
          },
          {
            q: "have a ___ (lie on a bed for a short time)",
            answers: [
              ["lie-down", "lie down"]
            ]
          },
          {
            q: "a walk in the park will do you ___",
            answers: [
              ["good"]
            ]
          }
        ],
        src: "Revision"
      },
      {
        type: "match",
        title: "Match the verb to the phrase",
        items: [
          { a: "have", b: "a well-earned rest" },
          { a: "go", b: "on a teambuilding course" },
          { a: "give someone", b: "a break" },
          { a: "get", b: "some fresh air" },
          { a: "hold", b: "a welcome meeting" },
          { a: "make", b: "a contribution" },
          { a: "do", b: "some rock-climbing" },
          { a: "take", b: "the lead during an activity" }
        ],
        src: "Revision"
      },
      {
        type: "speak",
        title: "What would you suggest?",
        phrases: [
          "have a",
          "go for",
          "go on",
          "give someone",
          "give them",
          "give her",
          "give him",
          "get some fresh air",
          "get people talking",
          "hold a",
          "make a",
          "do some",
          "do plenty of",
          "take the initiative",
          "take the lead",
          "into consideration"
        ],
        items: [
          { q: "A group project is not progressing because nobody is in charge.", models: ["Someone needs to take the lead."] },
          { q: "A colleague looks completely exhausted after a long week.", models: ["They should have a well-earned rest."] },
          { q: "People in your team are too quiet and don't interact much.", models: ["We could go on a teambuilding course to get people talking."] },
          { q: "You are planning a big event and want it to be successful.", models: ["We need to do plenty of preparation to make a success of it."] },
          { q: "A student is nervous on their first day in a new group.", models: ["Let's give them a warm welcome."] },
          { q: "A meeting has finished, but everyone is still tense and silent.", models: ["Let's go for a stroll and get some fresh air."] },
          { q: "A discussion needs more energy and participation.", models: ["Everyone should make a contribution."] },
          { q: "Someone has been working non-stop for many hours.", models: ["Give them a break – they could have a lie-down."] },
          { q: "A team is going on a trip to improve cooperation.", models: ["They could do some rock-climbing together."] },
          { q: "You want to evaluate how a project went after it finished.", models: ["Let's hold a feedback session."] }
        ],
        src: "Revision"
      }
    ]
  }
});
