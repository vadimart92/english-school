/*
 * 9D English in action
 */
ES.registerLesson({
  id: "9D",
  unit: 9,
  letter: "D",
  title: "English in action",
  uk: "Співбесіда: детальні відповіді за методом STAR і лексика компетенцій",
  goal: "answer questions in a job interview in detail",
  focus: { vocab: "employability and competencies" },
  learn: {
    theory: [
      {
        h: "Competencies vs qualifications",
        p: "A competency is any skill, knowledge, experience or personality trait that helps you do a job well. Employability is the combination of competencies that helps you get and keep fulfilling work. Qualifications are only the certificates.",
        table: [
          ["resilience", "you cope with setbacks and criticism"],
          ["critical thinking", "you question assumptions instead of believing everything"],
          ["perseverance", "you keep going when most people would give up"],
          ["adaptability", "you adjust quickly to new situations"],
          ["growth mindset", "you want to learn and improve all the time"],
          ["autonomy", "you work alone and make decisions without constant advice"],
          ["entrepreneurial skills", "you're creative, innovative and take risks others avoid"],
          ["business acumen", "you make good, quick judgements based on professional knowledge"],
          ["tolerance of ambiguity", "you cope when the 'rules' are unclear or keep changing"],
          ["professional confidence", "you respect yourself as someone good at your job"]
        ]
      },
      {
        h: "The STAR technique",
        p: "Competency-based questions ('Tell us about a time when you…') are best answered as a short story in four parts.",
        list: [
          "S – Situation: where and when did it happen? why were you there?",
          "T – Target: what problem were you trying to solve, and why?",
          "A – Action: what specific steps did you take? how did you overcome resistance?",
          "R – Result: did your plan work? what were the longer-term consequences?"
        ]
      },
      {
        h: "Useful phrases",
        list: [
          "Well, perhaps a good example comes from (my time at…).",
          "It was a great experience for me because…",
          "Anyway, after a few weeks, I noticed that…",
          "So I wanted to find out whether…",
          "So what I did was offer to…",
          "Eventually, and very reluctantly, he/she agreed, and I started my experiment.",
          "It turned out that my hunch had been correct.",
          "My little experiment revealed that… was actually…"
        ]
      }
    ],
    exercises: [
      {
        type: "match",
        title: "Match the competencies with the explanations",
        src: "SB 3a",
        items: [
          { a: "resilience", b: "You can cope with setbacks and criticism." },
          { a: "critical thinking", b: "You question assumptions and don't simply believe everything you hear or read." },
          { a: "perseverance", b: "You keep going when most people would give up." },
          { a: "adaptability", b: "You can change quickly to fit in with new situations." },
          { a: "growth mindset", b: "You want to learn new things and improve all the time." },
          { a: "autonomy", b: "You can work alone and make decisions without constantly asking for advice." },
          { a: "entrepreneurial skills", b: "You're innovative, take risks others avoid and might start your own business." },
          { a: "business acumen", b: "You make good, quick decisions based on your professional knowledge." },
          { a: "tolerance of ambiguity", b: "You can cope when the 'rules' aren't clear or change frequently." },
          { a: "professional confidence", b: "You respect yourself as a person who is good at your job." }
        ]
      },
      {
        type: "cards",
        title: "Employability and competencies",
        src: "SB 2–3",
        items: [
          { front: "competency (competence)", back: "компетенція: навичка, знання, досвід чи риса, що допомагає добре працювати" },
          { front: "employability", back: "здатність отримати й утримати хорошу роботу" },
          { front: "resilience", back: "стійкість, здатність оговтатися після невдач", ex: "Working in sales has taught me resilience." },
          { front: "perseverance", back: "наполегливість, завзятість", ex: "It took perseverance to finish my thesis while working." },
          { front: "adaptability", back: "здатність пристосовуватися" },
          { front: "autonomy", back: "самостійність, автономність", ex: "I enjoy the autonomy of working remotely." },
          { front: "business acumen", back: "ділова хватка, кмітливість", ex: "She has real business acumen." },
          { front: "growth mindset", back: "мислення зростання: віра, що можна навчитися й розвинутися" },
          { front: "tolerance of ambiguity", back: "здатність спокійно діяти в умовах невизначеності" },
          { front: "a hunch", back: "передчуття, інтуїтивна здогадка", ex: "I had a hunch the figures were wrong." }
        ]
      },
      {
        type: "sort",
        title: "Which part of a STAR answer is it?",
        src: "SB 4a, 7",
        categories: ["Situation", "Target", "Action", "Result"],
        items: [
          { text: "Where and when did the story take place?", cat: 0 },
          { text: "Why were you there?", cat: 0 },
          { text: "Maybe I can give an example from my experience as a team leader.", cat: 0 },
          { text: "What problem were you trying to solve?", cat: 1 },
          { text: "Why did you want/need to solve it?", cat: 1 },
          { text: "What specific steps did you take?", cat: 2 },
          { text: "How did you overcome any resistance you faced?", cat: 2 },
          { text: "So one day, I approached her to discuss the schedule.", cat: 2 },
          { text: "Did your plan work?", cat: 3 },
          { text: "What were the longer-term consequences?", cat: 3 },
          { text: "Overall, it was a dramatic change for the better.", cat: 3 },
          { text: "From that day on, he stopped criticising and started encouraging.", cat: 3 }
        ]
      },
      {
        type: "gap",
        title: "Complete the useful phrases with: anyway, eventually, example, experience, experiment, hunch, offered",
        src: "SB 6",
        items: [
          {
            q: "Well, perhaps a good ___ comes from my time as a volunteer.",
            answers: [
              ["example"]
            ]
          },
          {
            q: "It was a great ___ for me because I learnt to work under pressure.",
            answers: [
              ["experience"]
            ]
          },
          {
            q: "___, after a few weeks, I noticed that the queues were getting longer.",
            answers: [
              ["anyway"]
            ]
          },
          {
            q: "So what I did was I ___ to redesign the booking form.",
            answers: [
              ["offered"]
            ]
          },
          {
            q: "___, and very reluctantly, my manager agreed.",
            answers: [
              ["eventually"]
            ]
          },
          {
            q: "It turned out that my ___ had been correct.",
            answers: [
              ["hunch"]
            ]
          },
          {
            q: "My little ___ revealed that the old system was actually the problem.",
            answers: [
              ["experiment"]
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Answer job interview questions in detail",
        src: "SB 10–11",
        intro: "Choose three competencies and think of a time you demonstrated each one. Answer with the STAR structure and the useful phrases.",
        phrases: [
          "Perhaps a good example comes from…",
          "It was a great experience for me because…",
          "So I wanted to find out whether…",
          "So what I did was…",
          "Eventually, and very reluctantly,…",
          "It turned out that my hunch had been correct."
        ],
        items: [
          {
            q: "Tell us about a time when you showed resilience.",
            models: [
              "Perhaps a good example comes from my first job in customer support. My manager kept criticising my call times, which was affecting my confidence. Instead of giving up, I asked for feedback, listened to recordings of my calls and changed my approach. Within a month my times were the best in the team."
            ]
          },
          {
            q: "Tell us about a time when you used critical thinking.",
            models: [
              "At university, everyone assumed our survey results were reliable. I had a hunch the sample was too small, so I wanted to find out whether that affected the conclusions. What I did was rerun the analysis with more data – and it turned out my hunch had been correct."
            ]
          },
          {
            q: "Tell us about a time when you had to work with a lot of autonomy.",
            models: [
              "When my boss went on leave, I ran the project alone for six weeks. It was a great experience for me because I learnt to make decisions quickly, and we delivered on time."
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
        title: "Match to make phrases",
        src: "WB 1",
        items: [
          { a: "business", b: "acumen" },
          { a: "critical", b: "thinking" },
          { a: "professional", b: "confidence" },
          { a: "growth", b: "mindset" },
          { a: "tolerance of", b: "ambiguity" }
        ]
      },
      {
        type: "gap",
        title: "Complete the job advert with: acumen, adaptability, ambiguity, autonomy, confidence, critical thinking, entrepreneurial, growth mindset, perseverance, resilience",
        src: "WB 2",
        intro: "Café managers wanted. The managers will mostly work independently.",
        items: [
          {
            q: "You'll need the ___ skills and the professional ___ to grow the business on your own.",
            answers: [
              ["entrepreneurial"],
              ["confidence"]
            ]
          },
          {
            q: "___ is therefore vital, as is a tolerance of ___, as instructions may sometimes be quite general.",
            answers: [
              ["autonomy"],
              ["ambiguity"]
            ]
          },
          {
            q: "Business ___ aside, in a fast-changing industry ___ is key.",
            answers: [
              ["acumen"],
              ["adaptability"]
            ]
          },
          {
            q: "So are ___ skills, as problems will need to be solved fast.",
            answers: [
              ["critical thinking"]
            ]
          },
          {
            q: "We'd like someone with a positive outlook, so a ___ is essential.",
            answers: [
              ["growth mindset"]
            ]
          },
          {
            q: "Success is never guaranteed, so we need someone with the ___ to cope with knockbacks and the ___ to keep moving forward.",
            answers: [
              ["resilience"],
              ["perseverance"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Put the answer in order: match each step with its sentence",
        src: "WB 3",
        intro: "Question: Can you tell us about a time you overcame an obstacle?",
        items: [
          { a: "1", b: "Well, perhaps a good example comes from my internship at a bank." },
          { a: "2", b: "We'd all been asked to suggest one way to improve the customer experience." },
          { a: "3", b: "I noticed that my colleagues were all working on ideas for the branches." },
          { a: "4", b: "However, I wanted to find out whether it was really the app that needed improving." },
          { a: "5", b: "So what I did was offer to run a short survey of existing customers." },
          { a: "6", b: "My manager thought it was unnecessary, but eventually, and very reluctantly, she agreed." },
          { a: "7", b: "It turned out that my hunch had been correct: customers found the app confusing." }
        ]
      },
      {
        type: "gap",
        title: "Complete the words. The first letter is given",
        src: "WB 4",
        items: [
          {
            q: "So what I ___ was I offered to give the presentation myself.",
            hint: "d…",
            answers: [
              ["did"]
            ]
          },
          {
            q: "Eventually, and very ___, she agreed to let me try.",
            hint: "r…",
            answers: [
              ["reluctantly"]
            ]
          },
          {
            q: "It turned out that my ___ had been correct.",
            hint: "h…",
            answers: [
              ["hunch"]
            ]
          },
          {
            q: "So I wanted to find out ___ my idea would work.",
            hint: "w…",
            answers: [
              ["whether"]
            ]
          },
          {
            q: "My little ___ revealed that the idea was actually no good.",
            hint: "e…",
            answers: [
              ["experiment"]
            ]
          },
          {
            q: "Perhaps a good ___ comes from a project I did at college.",
            hint: "e…",
            answers: [
              ["example"]
            ]
          }
        ]
      },
      {
        type: "order",
        title: "Use the prompts to make sentences",
        src: "WB 5",
        items: [
          { words: ["Perhaps", "a", "good", "example", "comes", "from", "my", "volunteer", "work"], answer: "Perhaps a good example comes from my volunteer work." },
          {
            words: [
              "It",
              "was",
              "a",
              "great",
              "experience",
              "for",
              "me",
              "because",
              "I",
              "learnt",
              "about",
              "systems"
            ],
            answer: "It was a great experience for me because I learnt about systems."
          },
          { words: ["After", "a", "few", "weeks,", "I", "noticed", "the", "meal", "system", "was", "slow"], answer: "After a few weeks, I noticed the meal system was slow." },
          { words: ["I", "wanted", "to", "find", "out", "whether", "staff", "numbers", "affected", "the", "system"], answer: "I wanted to find out whether staff numbers affected the system." },
          { words: ["What", "I", "did", "was", "offer", "to", "try", "out", "a", "new", "system"], answer: "What I did was offer to try out a new system." },
          {
            words: [
              "Eventually,",
              "and",
              "very",
              "reluctantly,",
              "the",
              "boss",
              "agreed",
              "to",
              "let",
              "me",
              "do",
              "it"
            ],
            answer: "Eventually, and very reluctantly, the boss agreed to let me do it."
          },
          { words: ["It", "turned", "out", "my", "hunch", "was", "correct"], answer: "It turned out my hunch was correct." },
          {
            words: [
              "My",
              "experiment",
              "revealed",
              "that",
              "staggering",
              "mealtimes",
              "made",
              "the",
              "system",
              "faster"
            ],
            answer: "My experiment revealed that staggering mealtimes made the system faster."
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [
      {
        h: "A STAR answer in 30 seconds",
        ex: [
          "S: Perhaps a good example comes from my summer job at a hotel.",
          "T: Guests kept complaining about slow check-in, and I wanted to find out why.",
          "A: So what I did was offer to time every step for a week.",
          "R: It turned out the printer was the problem. We went paperless and complaints dropped by half."
        ]
      }
    ],
    exercises: [
      {
        type: "choice",
        title: "Which competency does the candidate demonstrate?",
        src: "Revision",
        items: [
          { q: "'When the project was cancelled, I was disappointed, but the next day I started looking for a new one.'", options: ["resilience", "business acumen", "autonomy"], answer: 0 },
          { q: "'I didn't just accept the supplier's figures – I checked where they came from.'", options: ["adaptability", "critical thinking", "growth mindset"], answer: 1 },
          { q: "'Our instructions changed every week, but I was comfortable working things out as I went.'", options: ["tolerance of ambiguity", "perseverance", "professional confidence"], answer: 0 },
          { q: "'I spotted a gap in the market and set up a small online shop while I was still at school.'", options: ["entrepreneurial skills", "critical thinking", "resilience"], answer: 0 },
          { q: "'It took me five attempts to pass the exam, but I never thought of quitting.'", options: ["autonomy", "perseverance", "business acumen"], answer: 1 },
          { q: "'I take a new online course every few months – I love learning.'", options: ["growth mindset", "tolerance of ambiguity", "adaptability"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Turn the notes into a STAR answer",
        src: "Revision",
        items: [
          { q: "Situation: weekend job at a cinema", start: "Perhaps a good example…", models: ["Perhaps a good example comes from my weekend job at a cinema."] },
          {
            q: "Target: long queues for snacks – why?",
            start: "After a few weeks, I noticed…",
            models: [
              "After a few weeks, I noticed that the snack queues were really long, so I wanted to find out whether the layout was the problem."
            ]
          },
          {
            q: "Action: suggested a second till – manager unwilling at first",
            start: "So what I did was…",
            models: [
              "So what I did was offer to set up a second till. Eventually, and very reluctantly, my manager agreed."
            ]
          },
          {
            q: "Result: queues halved, idea used in other branches",
            start: "It turned out…",
            models: [
              "It turned out that my hunch had been correct: the queues halved, and the idea is now used in other branches."
            ]
          }
        ]
      },
      {
        type: "speak",
        title: "Practise a competency question",
        src: "Revision",
        phrases: ["Perhaps a good example comes from…", "So what I did was…", "It turned out that…"],
        items: [
          {
            q: "Tell us about a time when you had to adapt quickly to change.",
            models: [
              "Perhaps a good example comes from last year, when our team switched to a new CRM system overnight. Nobody had been trained, so what I did was offer to learn it over the weekend and run short sessions for colleagues. It turned out that this saved us weeks of confusion."
            ]
          },
          {
            q: "Tell us about a time you persuaded someone who disagreed with you.",
            models: [
              "At my previous job, my manager was against flexible hours. I had a hunch it would improve productivity, so I suggested a one-month trial. Eventually, and very reluctantly, she agreed – and the results convinced her."
            ]
          }
        ]
      }
    ]
  }
});
