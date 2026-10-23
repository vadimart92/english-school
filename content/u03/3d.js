/*
 * 3D English in action
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "3D",
  unit: 3,
  letter: "D",
  title: "English in action",
  uk: "Як підсумувати інформацію",
  goal: "summarise information",
  focus: { vocab: "idioms related to clarity", pron: "assimilation" },
  learn: {
    theory: [
      {
        h: "Idioms related to clarity",
        table: [
          [
            "crystal clear / as clear as day",
            "абсолютно зрозуміло",
            "Thanks – your explanation was crystal clear."
          ],
          ["as clear as mud", "(іронічно) зовсім незрозуміло", "The new parking rules are as clear as mud."],
          [
            "(say it) in plain English",
            "простими словами, без жаргону",
            "Could you tell me in plain English what this contract means?"
          ],
          [
            "a hidden agenda",
            "прихований мотив",
            "I'm sure he has a hidden agenda – he's never this helpful."
          ],
          [
            "can't (quite) put your finger on it",
            "не можеш точно визначити, що не так",
            "Something about her story is odd, but I can't put my finger on it."
          ]
        ]
      },
      {
        h: "Summarising strategies",
        list: [
          "3-2-1 — для лекції: три найважливіші факти, дві цікаві речі, одне питання, про яке хочеш дізнатися більше.",
          "Somebody – Wanted – But – So — для історій і фільмів: хто герой, чого хотів, що завадило, як вирішив.",
          "4 Ws, 1 H (Who, What, When, Why, How) — для новин і статей.",
          "First, Then, Finally — події в хронологічному порядку.",
          "The Cornell Method — дві колонки: ліворуч головні факти, праворуч деталі до них.",
          "Twenty words — стиснути головні думки до 20 слів-підказок."
        ]
      },
      {
        h: "Useful phrases",
        table: [
          [
            "Summarising",
            "The main points are as follows… / What they did was… / The gist of it is that… / In a nutshell, … / The first thing you need to know is…"
          ],
          [
            "Referring to information",
            "The former … / the latter … / Not only that, but … / In the previous/following section, … / So what happened was … / Going back to what I said at the beginning, … / In that case …"
          ]
        ]
      },
      {
        h: "Assimilation",
        p: "У швидкому мовленні кінцевий звук слова змінюється під впливом першого звуку наступного: main points → /meɪm pɔɪnts/ (n перед p звучить як m), that case → /ðæk keɪs/ (t перед k звучить як k). Це нормально для природної англійської — важливо впізнавати на слух.",
        ex: ["The main points are as follows.", "In that case, the results were exceptional."]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Idioms related to clarity",
        src: "SB 2",
        items: [
          { front: "crystal clear", back: "абсолютно зрозумілий", ex: "The instructions were crystal clear." },
          { front: "as clear as day", back: "ясно як білий день", ex: "It was as clear as day that she was lying." },
          { front: "as clear as mud", back: "(іронічно) геть незрозумілий", ex: "His explanation was as clear as mud." },
          { front: "in plain English", back: "простими словами", ex: "Can you explain the problem in plain English?" },
          { front: "a hidden agenda", back: "прихований мотив", ex: "I don't trust him – he seems to have a hidden agenda." },
          { front: "can't put your finger on it", back: "не можеш точно сказати, що саме", ex: "Something's changed, but I can't quite put my finger on it." }
        ]
      },
      {
        type: "match",
        title: "Match the statements with the responses",
        src: "SB 2a",
        items: [
          { a: "I'm more confused now than before the lecture.", b: "I know. It was as clear as mud!" },
          { a: "I hope that's all clear.", b: "Crystal clear, thanks." },
          { a: "I wouldn't trust the numbers in his report.", b: "I know what you mean. He seems to have a hidden agenda." },
          { a: "That presentation was as clear as day, thanks.", b: "Oh good. I tried to make it as simple as possible." },
          { a: "Sorry, I don't understand all these technical terms.", b: "OK, let me put it in plain English." },
          { a: "Something's wrong with this contract, but I can't quite put my finger on it.", b: "Really? It looks fine to me." }
        ]
      },
      {
        type: "sort",
        title: "Summarising or referring to information?",
        src: "SB 5b",
        categories: ["summarising", "referring to information"],
        items: [
          { text: "The main points are as follows …", cat: 0 },
          { text: "What they did was …", cat: 0 },
          { text: "The gist of it is that …", cat: 0 },
          { text: "In a nutshell, …", cat: 0 },
          { text: "The first thing you need to know is …", cat: 0 },
          { text: "The former … / the latter …", cat: 1 },
          { text: "Not only that, but …", cat: 1 },
          { text: "In the previous section, …", cat: 1 },
          { text: "So what happened was …", cat: 1 },
          { text: "Going back to what I said at the beginning, …", cat: 1 },
          { text: "In that case …", cat: 1 }
        ]
      },
      {
        type: "match",
        title: "Match the beginnings with the endings",
        src: "SB 7",
        items: [
          { a: "In a nutshell,", b: "it's a story about friendship and loss." },
          { a: "The main points are as follows.", b: "Firstly, the researchers tested two groups. Secondly, …" },
          { a: "Not only did they find that sleep improves memory, but", b: "they also found that naps help." },
          { a: "In the previous section,", b: "the author explains the background to the study." },
          { a: "The former was a general survey.", b: "The latter was much more detailed." },
          { a: "What they did was", b: "ask 500 students to keep a sleep diary." }
        ]
      },
      {
        type: "speak",
        title: "Summarise a text, a film or an event",
        src: "SB 1, 8–10",
        intro: "First summarise in eight words, then give a fuller summary with the useful phrases. Choose a technique (3-2-1, Somebody-Wanted-But-So, 5 questions, First-Then-Finally).",
        phrases: [
          "main points",
          "what they did was",
          "what happened was",
          "gist",
          "in a nutshell",
          "first thing you need to know",
          "the former",
          "the latter",
          "not only",
          "in that case",
          "going back to"
        ],
        items: [
          {
            q: "Summarise your last weekend.",
            models: [
              "In a nutshell, it was relaxing. The first thing you need to know is that I finally switched my phone off …"
            ]
          },
          {
            q: "Summarise the plot of a book or film you like.",
            models: [
              "Somebody: a young chef. Wanted: to open her own restaurant. But: she had no money. So: she started cooking from a food truck. The gist of it is that small steps lead to big dreams."
            ]
          },
          {
            q: "Summarise your school days.",
            models: [
              "The main points are as follows: I loved languages, I hated maths, and I made friends for life. Not only that, but I met my future wife there."
            ]
          },
          {
            q: "Summarise the best way to learn English.",
            models: [
              "In a nutshell: little and often. What I did was read every day and talk to people online. In that case, you'll improve quickly."
            ]
          },
          {
            q: "Summarise an article you read recently.",
            models: [
              "The article compares two studies. The former looked at teenagers, the latter at retired people. Going back to what I said at the beginning, both groups slept less than they needed."
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
        title: "Complete the sentences with a word in each gap",
        src: "WB 1",
        items: [
          {
            q: "Honestly, that lecture was as clear as ___. I didn't follow any of it!",
            answers: [
              ["mud"]
            ]
          },
          {
            q: "I was lost at first, but by the end it was all crystal ___.",
            answers: [
              ["clear"]
            ]
          },
          {
            q: "His story didn't add up, but I couldn't quite put my ___ on what was wrong.",
            answers: [
              ["finger"]
            ]
          },
          {
            q: "Why is she suddenly so friendly? I think she has some kind of ___ agenda.",
            answers: [
              ["hidden"]
            ]
          },
          {
            q: "Can you say it in ___ English, please? No technical terms!",
            answers: [
              ["plain"]
            ]
          },
          {
            q: "Great diagram. The main idea is as clear as ___.",
            answers: [
              ["day"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversation with idioms using the words in brackets",
        src: "WB 2",
        items: [
          {
            q: "A: I like our accountant, but I wish he'd talk to us in ___. (plain)",
            answers: [
              ["plain English"]
            ]
          },
          {
            q: "B: I know. He explained the new tax rules to me yesterday. It was about ___. (mud)",
            answers: [
              ["as clear as mud"]
            ]
          },
          {
            q: "A: I suppose he forgets that what's ___ to him is total jargon to us. (crystal)",
            answers: [
              ["crystal clear"]
            ]
          },
          {
            q: "B: Or maybe he's got some kind of ___. (agenda)",
            answers: [
              ["hidden agenda"]
            ]
          },
          {
            q: "B: I can't ___ what it might be, though. (finger)",
            answers: [
              ["put my finger on", "quite put my finger on"]
            ]
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct alternatives",
        src: "WB 3",
        items: [
          { q: "The main ___ of today's talk are as follows.", options: ["points", "reasons"], answer: 0 },
          { q: "In the ___ chapter, the writer described her childhood.", options: ["previous", "past"], answer: 0 },
          { q: "Going ___ to what I said at the start …", options: ["back", "reverse"], answer: 0 },
          { q: "The ___ of it is that we're over budget.", options: ["gist", "summary"], answer: 0 },
          { q: "There are two options. The ___ is cheaper; the latter is faster.", options: ["former", "early"], answer: 0 },
          { q: "In a ___, we need more staff.", options: ["nutshell", "brief"], answer: 0 },
          { q: "Not ___ that, but the printer is broken too.", options: ["only", "sole"], answer: 0 },
          { q: "So what happened ___ that nobody checked the address.", options: ["was", "is"], answer: 0 }
        ]
      },
      {
        type: "order",
        title: "Put the words in the correct order to make sentences",
        src: "WB 4",
        items: [
          { words: ["the", "look", "section", "the", "In", "following", "we'll", "at", "solution"], answer: "In the following section, we'll look at the solution." },
          { words: ["nobody", "tried", "was", "what", "So", "happened", "we", "but", "answered"], answer: "So what happened was, we tried but nobody answered." },
          { words: ["it's", "is", "to", "you", "first", "The", "thing", "need", "know", "that", "free"], answer: "The first thing you need to know is that it's free." },
          { words: ["200", "was", "they", "What", "did", "survey", "teachers"], answer: "What they did was survey 200 teachers." },
          { words: ["on", "these", "all", "we", "that", "In", "case", "should", "take", "ideas", "board"], answer: "In that case, we should all take these ideas on board." },
          { words: ["up", "are", "that", "it", "gist", "The", "of", "is", "rents", "going"], answer: "The gist of it is that rents are going up." },
          { words: ["follows", "are", "main", "The", "points", "as"], answer: "The main points are as follows." },
          { words: ["was", "but", "it", "only", "Not", "was", "slow", "it", "expensive"], answer: "Not only was it slow, but it was expensive." }
        ]
      },
      {
        type: "choice",
        title: "Complete the extract from a talk with the correct phrase",
        src: "WB 5",
        intro: "A talk about first impressions and the 'halo effect'.",
        items: [
          { q: "___ this talk, we looked at why first impressions matter.", options: ["In the previous section of", "In a nutshell", "What he did was"], answer: 0 },
          { q: "Today I'll describe two experiments. ___, the researcher worked with soldiers.", options: ["In the former", "Not only that, but", "In that"], answer: 0 },
          { q: "___ ask officers to rate their soldiers and look for patterns.", options: ["What he did was", "The gist of this effect is that", "In the former"], answer: 0 },
          { q: "I won't go into all the results, but ___. When people liked one quality, they assumed all the others were good.", options: ["the main points are as follows", "in that", "what he did was"], answer: 0 },
          { q: "___ if they disliked one quality, they judged the person negatively in every way.", options: ["Not only that, but", "In the former", "In the previous section of"], answer: 0 },
          { q: "___, he discovered what is now called the 'halo effect'.", options: ["In a nutshell", "In that", "What he did was"], answer: 0 },
          { q: "___ our overall impression of someone influences how we judge their character.", options: ["The gist of this effect is that", "In the former", "Not only that, but"], answer: 0 },
          { q: "Making a good first impression at work is vital, ___ it shapes how you are seen from then on.", options: ["in that", "in a nutshell", "in the former"], answer: 0 }
        ]
      }
    ]
  },
  refresh: {
    theory: [],
    exercises: [
      {
        type: "gap",
        title: "Complete the idioms",
        src: "Revision",
        items: [
          {
            q: "The new timetable is as clear as ___ – nobody knows when the trains leave.",
            answers: [
              ["mud"]
            ]
          },
          {
            q: "Let me put it in ___ English: we've run out of money.",
            answers: [
              ["plain"]
            ]
          },
          {
            q: "I'm suspicious. I think the sales rep has a ___ agenda.",
            answers: [
              ["hidden"]
            ]
          },
          {
            q: "'Is that clear?' – 'Crystal ___.'",
            answers: [
              ["clear"]
            ]
          },
          {
            q: "Something's not right, but I can't quite put my ___ on it.",
            answers: [
              ["finger"]
            ]
          },
          {
            q: "Once she drew the diagram, it was as clear as ___.",
            answers: [
              ["day"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the summarising phrases with one word",
        src: "Revision",
        items: [
          {
            q: "In a ___, the project was a success.",
            answers: [
              ["nutshell"]
            ]
          },
          {
            q: "The ___ of it is that we need to cut costs.",
            answers: [
              ["gist"]
            ]
          },
          {
            q: "The main points are as ___.",
            answers: [
              ["follows"]
            ]
          },
          {
            q: "What they ___ was interview every customer.",
            answers: [
              ["did"]
            ]
          },
          {
            q: "We tested two models. The former was cheap; the ___ was reliable.",
            answers: [
              ["latter"]
            ]
          },
          {
            q: "Not ___ that, but the hotel had no hot water.",
            answers: [
              ["only"]
            ]
          },
          {
            q: "Going ___ to what I said at the beginning, timing is everything.",
            answers: [
              ["back"]
            ]
          },
          {
            q: "The first thing you ___ to know is that it's all true.",
            answers: [
              ["need"]
            ]
          }
        ]
      },
      {
        type: "match",
        title: "Match the summarising technique with its description",
        src: "Revision",
        items: [
          { a: "3-2-1", b: "three key facts, two interesting things, one question" },
          { a: "Somebody – Wanted – But – So", b: "main character, goal, problem, solution" },
          { a: "4 Ws, 1 H", b: "who, what, when, why and how" },
          { a: "First, Then, Finally", b: "events in chronological order" },
          { a: "The Cornell Method", b: "main facts in one column, supporting details in another" },
          { a: "Twenty words", b: "key points reduced to a few reminder words" }
        ]
      },
      {
        type: "transform",
        title: "Summarise in one sentence using the phrase given",
        src: "Revision",
        items: [
          { q: "The meeting lasted two hours. We discussed many things. Basically, the office is moving.", start: "In a nutshell,", models: ["In a nutshell, the office is moving."] },
          { q: "The researchers gave 100 people a new diet for a month.", start: "What they did was", models: ["What they did was give 100 people a new diet for a month."] },
          { q: "The hotel was dirty. It was also very noisy.", start: "Not only", models: ["Not only was the hotel dirty, but it was also very noisy."] },
          { q: "The film is long and confusing, but the message is: family comes first.", start: "The gist of it is that", models: ["The gist of it is that family comes first."] }
        ]
      }
    ]
  }
});
