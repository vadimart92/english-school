/*
 * 4B Volunteering
 */
ES.registerLesson({
  id: "4B",
  unit: 4,
  letter: "B",
  title: "Volunteering",
  uk: "Волонтерство: реальні умовні речення, колокації прикметник + іменник",
  goal: "discuss political or social issues",
  focus: { grammar: "real conditionals", vocab: "adjective + noun collocations", pron: "intonation in incomplete requests" },
  learn: {
    theory: [
      {
        h: "Real vs unreal conditionals",
        p: "Умовні речення діляться на дві «сім'ї». Real conditionals — про те, що правда або цілком ймовірно (зокрема й у минулому). Unreal — про те, що неправда чи малоймовірно (див. 5B). Zero і first conditional — лише найвідоміші приклади реальних умов; насправді в них можливі майже будь-які часи, модальні дієслова, наказовий спосіб.",
        table: [
          [
            "Zero (always true)",
            "if + present, present",
            "If you heat ice, it melts. / If people feel needed, they live longer."
          ],
          ["First (likely future)", "if + present, will", "If you set up a club, people will join."],
          [
            "Real past",
            "if + past, past / would",
            "If we had a problem, our neighbours helped us / would help us. (= whenever)"
          ],
          [
            "Past action → present/future result",
            "if + present perfect, will / imperative",
            "If you've worked with kids before, you'll know what to do."
          ],
          [
            "Imperative / modal in the result",
            "if + present, imperative / can / should",
            "If you missed the meeting, please read the notes. / If you're tired, you should rest."
          ]
        ]
      },
      {
        h: "will and would in the if-clause",
        p: "Зазвичай після if не вживаємо will. Але це можливо, коли will має «не майбутнє» значення:",
        table: [
          ["prediction", "I'll lend you my bike if it'll save you time. (= if you think it will save time)"],
          [
            "promise / willingness",
            "I'll give you a lift if you'll help me with the shopping. (= if you promise to)"
          ],
          [
            "refusal / insistence",
            "If he won't listen, there's no point talking. (= if he refuses) / If you will eat so fast, you'll get indigestion."
          ],
          [
            "if + would: polite requests and offers",
            "If you'd like to take a seat, the doctor will see you soon. / If you wouldn't mind waiting…"
          ]
        ]
      },
      {
        h: "Watch out: if + past simple",
        list: [
          "If + past simple може бути реальним минулим: If you missed the last lesson, take a worksheet. (= я знаю, що дехто пропустив).",
          "…або нереальним теперішнім: If I had more time, I'd volunteer. (= але часу немає).",
          "…або малоймовірним майбутнім: If I lost my job, I'd move back home.",
          "Вимова: у ввічливих незакінчених проханнях (If you'd like to follow me…) інтонація залишається високою або злегка піднімається в кінці — слухач сам розуміє продовження."
        ]
      },
      {
        h: "Adjective + noun collocations",
        table: [
          ["a strong sense of duty / purpose", "сильне почуття обов'язку / мети"],
          ["prior work experience", "попередній досвід роботи"],
          ["exorbitant rent(s)", "непомірна орендна плата"],
          ["mutual support", "взаємна підтримка"],
          ["an untapped resource", "невикористаний ресурс"],
          ["on a regular basis", "регулярно"],
          ["household chores", "хатні справи"],
          ["a profound impact", "глибокий вплив"],
          ["daunting challenges", "страшні, складні виклики"],
          ["accumulated experience", "накопичений досвід"]
        ]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Adjective + noun collocations",
        src: "SB 4",
        items: [
          { front: "a strong sense of duty", back: "сильне почуття обов'язку", ex: "She has a strong sense of duty towards her family." },
          { front: "a strong sense of purpose", back: "чітке відчуття мети", ex: "Volunteering gave him a strong sense of purpose." },
          { front: "prior work experience", back: "попередній досвід роботи", ex: "No prior work experience is required for this role." },
          { front: "exorbitant rent", back: "непомірна оренда", ex: "Young people can't afford the exorbitant rents in the capital." },
          { front: "mutual support", back: "взаємна підтримка", ex: "The group offers mutual support to new parents." },
          { front: "an untapped resource", back: "невикористаний ресурс", ex: "Retired people are a huge untapped resource." },
          { front: "on a regular basis", back: "регулярно", ex: "We visit the care home on a regular basis." },
          { front: "household chores", back: "хатні справи", ex: "Teenagers should help with household chores." },
          { front: "a profound impact", back: "глибокий вплив", ex: "The project had a profound impact on the whole town." },
          { front: "daunting challenges", back: "складні, лякаючі виклики", ex: "New teachers face daunting challenges in their first year." },
          { front: "accumulated experience", back: "накопичений досвід", ex: "Her accumulated experience makes her an excellent mentor." },
          { front: "socioeconomic background", back: "соціально-економічне походження", ex: "The scheme brings together students from different socioeconomic backgrounds." }
        ]
      },
      {
        type: "choice",
        title: "Choose the adjective that collocates with the noun",
        src: "SB 4a",
        items: [
          { q: "I've always had a very ___ sense of duty towards my community.", options: ["strong", "rich", "high"], answer: 0 },
          { q: "Candidates need at least a year's ___ work experience.", options: ["prior", "preceding", "foregoing"], answer: 0 },
          { q: "We moved out because of the ___ rent.", options: ["exorbitant", "inflated", "extravagant"], answer: 0 },
          { q: "The group is based on ___ support – everyone helps everyone.", options: ["mutual", "reciprocal", "shared"], answer: 0 },
          { q: "The region's forests are an ___ resource for eco-tourism.", options: ["untapped", "intact", "untested"], answer: 0 },
          { q: "You need to exercise on a ___ basis to see results.", options: ["regular", "frequent", "persistent"], answer: 0 },
          { q: "My grandmother can no longer manage the ___ chores on her own.", options: ["household", "homely", "indoor"], answer: 0 },
          { q: "That year abroad had a ___ impact on the way I see the world.", options: ["profound", "changeable", "metamorphic"], answer: 0 }
        ]
      },
      {
        type: "choice",
        title: "Why is will or would used in the if-clause?",
        src: "SB 6",
        items: [
          { q: "If you'd like to come in and sit down, we can start.", options: ["polite invitation / request", "refusal", "prediction"], answer: 0 },
          { q: "If they won't help, you'll have to find another partner.", options: ["refusal", "promise", "polite offer"], answer: 0 },
          { q: "If it'll help your negotiations, we'd be happy to pay half.", options: ["prediction (if you think it will help)", "refusal", "past habit"], answer: 0 },
          { q: "I'll help you move if you'll cook dinner for me afterwards.", options: ["promise / willingness", "refusal", "prediction"], answer: 0 },
          { q: "If you will leave your bike unlocked, don't be surprised when it's stolen.", options: ["insistence on an annoying habit", "polite request", "prediction"], answer: 0 },
          { q: "If you wouldn't mind closing the window, I'd be grateful.", options: ["polite request", "refusal", "past habit"], answer: 0 },
          { q: "If they didn't have children, at least they had friends living nearby.", options: ["real past situation", "unreal present", "polite request"], answer: 0 }
        ]
      },
      {
        type: "transform",
        title: "Rewrite the sentences using the word(s) in brackets",
        src: "SB 8a",
        items: [
          { q: "I can't help you if you refuse to give me your address. (won't)", start: "I can't help you if", models: ["I can't help you if you won't give me your address."] },
          { q: "Maybe she's had a bad experience, and she doesn't want to try again. (If)", start: "If", models: ["If she's had a bad experience, she may not want to try again."] },
          { q: "When I was little, my mum used to repair anything that was broken. (if anything / would)", start: "When I was little,", models: ["When I was little, if anything was broken, my mum would repair it."] },
          { q: "You can borrow my camera, but you need to promise to look after it. (you'll)", start: "You can borrow my camera", models: ["You can borrow my camera if you'll look after it."] },
          { q: "Would you like to drive? If so, I can sleep on the way. (you'd)", start: "If you'd", models: ["If you'd like to drive, I can sleep on the way."] },
          { q: "Maybe you've already volunteered somewhere. In that case, you'll know how rewarding it is. (If)", start: "If", models: ["If you've already volunteered somewhere, you'll know how rewarding it is."] }
        ]
      },
      {
        type: "speak",
        title: "Persuade the council to support your project",
        src: "SB 8b, 9–10",
        intro: "Plan a community project: who you'll help, their challenges, what you need from the council, what happens if they refuse. Use real conditionals and collocations.",
        phrases: [
          "if",
          "unless",
          "as long as",
          "'ll",
          "will",
          "won't",
          "you'd like",
          "sense of",
          "regular basis",
          "mutual support",
          "untapped resource",
          "profound impact",
          "prior",
          "exorbitant",
          "household chores",
          "daunting"
        ],
        items: [
          {
            q: "Young people who refuse to go to school — why, and what are the consequences?",
            models: [
              "If they had a bad time at school, they'll probably feel anxious. If they won't go to school, they'll miss out on qualifications."
            ]
          },
          {
            q: "Older people who are isolated in society.",
            models: [
              "If they live alone, they often lose their sense of purpose. If we visit them on a regular basis, it will have a profound impact on their well-being."
            ]
          },
          {
            q: "Young people who can't find work.",
            models: [
              "If they have no prior work experience, employers won't consider them. If you'll give us a small grant, we'll run free workshops."
            ]
          },
          {
            q: "What do you need from the council and what can you offer?",
            models: [
              "If you'd like to see the plan, I've brought copies. If you'll cover the rent, our volunteers will do the rest – they're an untapped resource."
            ]
          },
          {
            q: "What will happen if the council refuses to help?",
            models: [
              "If the council won't help, we'll have to find a private sponsor, but the project will take much longer."
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
        title: "Complete the words. The first letter is given",
        src: "WB 1",
        items: [
          {
            q: "I play tennis, but not on a r___ basis.",
            answers: [
              ["regular"]
            ],
            hint: "r…"
          },
          {
            q: "It's hard to get your first job when you have no p___ work experience.",
            answers: [
              ["prior"]
            ],
            hint: "p…"
          },
          {
            q: "Living in Japan had a profound i___ on my career.",
            answers: [
              ["impact"]
            ],
            hint: "i…"
          },
          {
            q: "We share the h___ chores equally in our flat.",
            answers: [
              ["household"]
            ],
            hint: "h…"
          },
          {
            q: "My dad has always had a s___ sense of fairness.",
            answers: [
              ["strong"]
            ],
            hint: "s…"
          },
          {
            q: "Our older employees are an untapped r___ of knowledge.",
            answers: [
              ["resource"]
            ],
            hint: "r…"
          },
          {
            q: "Rents in the city centre are e___.",
            answers: [
              ["exorbitant"]
            ],
            hint: "e…"
          },
          {
            q: "The two schools offer m___ support to each other's teachers.",
            answers: [
              ["mutual"]
            ],
            hint: "m…"
          }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct option",
        src: "WB 2",
        intro: "A volunteer's blog post.",
        items: [
          { q: "I've been volunteering at the food bank on a regular ___ for three years.", options: ["premise", "foundation", "routine", "basis"], answer: 3 },
          { q: "I've always had a strong ___ of duty.", options: ["sense", "impression", "feel", "insight"], answer: 0 },
          { q: "At first it was a ___ challenge, as the others had prior experience.", options: ["severe", "discouraging", "daunting", "subdued"], answer: 2 },
          { q: "There's a lot of mutual ___ among the volunteers, so I never feel alone.", options: ["support", "loyalty", "aid", "backing"], answer: 0 },
          { q: "On Sundays I also help an elderly neighbour with her household ___.", options: ["errands", "burdens", "chores", "routines"], answer: 2 },
          { q: "Volunteering has had a ___ impact on my life.", options: ["vital", "profound", "sharp", "sweeping"], answer: 1 },
          { q: "Volunteers are an ___ resource in any community.", options: ["idle", "underdone", "empty", "untapped"], answer: 3 },
          { q: "I know the ___ are exorbitant here and people work long hours.", options: ["salaries", "jobs", "rents", "homes"], answer: 2 }
        ]
      },
      {
        type: "choice",
        title: "Choose the correct option, a or b",
        src: "WB 3",
        items: [
          { q: "If you'd like to follow me, I ___", options: ["'d show you around.", "'ll show you around."], answer: 1 },
          { q: "I wouldn't have this job if ___", options: ["you haven't helped me.", "it wasn't for you."], answer: 1 },
          { q: "If you do the shopping, ___", options: ["I'll cook dinner.", "I cook dinner."], answer: 0 },
          { q: "Anyone can learn to swim if ___", options: ["they'll practise.", "they've had a few lessons."], answer: 1 },
          { q: "If you won't drive me to the airport, ___", options: ["I'll just have to take a taxi.", "I take the train instead."], answer: 0 },
          { q: "You can watch the films if ___", options: ["you've paid for a subscription.", "you'll subscribe."], answer: 0 }
        ]
      },
      {
        type: "gap",
        title: "Complete the conversation with real conditional forms of the verbs",
        src: "WB 4",
        intro: "A user calls a library helpline because she can't log in.",
        items: [
          {
            q: "If you ___ (not / log in) since January, your account…",
            answers: [
              ["haven't logged in", "have not logged in"]
            ]
          },
          {
            q: "…___ (now / be) disabled.",
            answers: [
              ["is now", "will now be", "has now been"]
            ]
          },
          {
            q: "If you ___ (enter) your password incorrectly, …",
            answers: [
              ["enter", "entered"]
            ]
          },
          {
            q: "…the login ___ (not / work).",
            answers: [
              ["doesn't work", "won't work", "does not work", "will not work"]
            ]
          },
          {
            q: "If you ___ (type in) the wrong details, …",
            answers: [
              ["typed in", "'ve typed in", "have typed in"]
            ]
          },
          {
            q: "…there ___ (be) an error message on your screen now.",
            answers: [
              ["will be", "should be"]
            ]
          },
          {
            q: "There isn't. The screen's just blank. If I ___ (do) it again, …",
            answers: [
              ["do"]
            ]
          },
          {
            q: "…it ___ (not / work).",
            answers: [
              ["won't work", "doesn't work", "will not work", "does not work"]
            ]
          },
          {
            q: "If you ___ (like) to follow my instructions, …",
            answers: [
              ["'d like", "would like"]
            ]
          },
          {
            q: "…I ___ (able to) get you back in.",
            answers: [
              ["'ll be able to", "will be able to", "should be able to"]
            ]
          }
        ]
      }
    ]
  },
  refresh: {
    theory: [],
    exercises: [
      {
        type: "errors",
        title: "Are these real conditionals correct?",
        src: "LB 4B",
        items: [
          { s: "If you won't stop shouting, I'm going to leave.", ok: true },
          { s: "You can pay online if you prefer.", ok: true },
          { s: "You can pay online if you'll prefer.", ok: false, fix: "You can pay online if you prefer." },
          { s: "A: Ana lived in Rome for two years. B: So if she lived there, her Italian must be good.", ok: true },
          { s: "I'll lend you my notes as long as you'll look after them.", ok: true },
          { s: "Hurry up! If we'll miss the train, we'll be late.", ok: false, fix: "Hurry up! If we miss the train, we'll be late." },
          { s: "If it will rain tomorrow, we'll cancel the picnic.", ok: false, fix: "If it rains tomorrow, we'll cancel the picnic." },
          { s: "If you'd like to wait here, the manager will be with you shortly.", ok: true }
        ]
      },
      {
        type: "gap",
        title: "Complete the sentences with the most suitable form of the verb in brackets",
        src: "LB 4B",
        items: [
          {
            q: "I'm going to see what Max is doing. If he ___ (play) computer games again, I'll be furious.",
            answers: [
              ["'s playing", "is playing"]
            ]
          },
          {
            q: "If you ___ (enjoy) her first film, you'll love her new one.",
            answers: [
              ["enjoyed", "'ve enjoyed", "have enjoyed"]
            ]
          },
          {
            q: "If everyone ___ (be) hungry, we'll order pizza.",
            answers: [
              ["is"]
            ]
          },
          {
            q: "I'd prefer not to buy a new phone unless this one ___ (be) completely broken.",
            answers: [
              ["is"]
            ]
          },
          {
            q: "If you ___ (finish) your work, you can go home.",
            answers: [
              ["'ve finished", "have finished", "finish"]
            ]
          },
          {
            q: "When I was a student, if I ___ (have) an exam, I'd study all night.",
            answers: [
              ["had"]
            ]
          }
        ]
      },
      {
        type: "gap",
        title: "Complete the adjective + noun collocations",
        src: "Check 9",
        items: [
          {
            q: "When it comes to my friends, I have a s___ sense of loyalty.",
            answers: [
              ["strong"]
            ],
            hint: "s…g"
          },
          {
            q: "I help my grandparents with h___ chores at weekends.",
            answers: [
              ["household"]
            ],
            hint: "h…d"
          },
          {
            q: "After the flood, the neighbours developed a strong sense of m___ respect.",
            answers: [
              ["mutual"]
            ],
            hint: "m…l"
          },
          {
            q: "I left the city because of the e___ rent.",
            answers: [
              ["exorbitant"]
            ],
            hint: "e…t"
          },
          {
            q: "We meet up on a r___ basis.",
            answers: [
              ["regular"]
            ],
            hint: "r…r"
          },
          {
            q: "He didn't get the internship because he had no p___ work experience.",
            answers: [
              ["prior"]
            ],
            hint: "p…r"
          }
        ]
      },
      {
        type: "transform",
        title: "Use the phrases to make real conditionals",
        src: "Check 10",
        items: [
          { q: "There's a chance I'll fail my driving test. If so, I may have to wait three months.", start: "If", models: ["If I fail my driving test, I may have to wait three months."] },
          { q: "Many people loved his first novel. If you're one of them, you'll love the sequel.", start: "If", models: ["If you loved his first novel, you'll love the sequel."] },
          { q: "Apparently your landlord won't fix the heating. In that case, you should contact the council.", start: "If", models: ["If your landlord won't fix the heating, you should contact the council."] },
          { q: "Perhaps you'd prefer to work alone. If so, I'll leave you to it.", start: "If", models: ["If you'd prefer to work alone, I'll leave you to it."] },
          { q: "Some of you have never used this software before. If you're one of them, please tell me.", start: "If", models: ["If you've never used this software before, please tell me."] },
          { q: "You can borrow my car on one condition: you promise you won't speed.", start: "You can borrow my car", models: ["You can borrow my car if you'll promise not to speed."] }
        ]
      },
      {
        type: "gap",
        title: "Put a positive spin on limited experience",
        src: "Skills 4B",
        intro: "Phrases for a letter of application.",
        items: [
          {
            q: "I have completed a great ___ of coursework on digital marketing.",
            answers: [
              ["deal"]
            ]
          },
          {
            q: "I believe I have a good ___ of this age group.",
            answers: [
              ["understanding"]
            ]
          },
          {
            q: "I am ___ in using the latest design software.",
            answers: [
              ["proficient", "up to date"]
            ]
          },
          {
            q: "This experience ___ me the value of good teamwork.",
            answers: [
              ["taught"]
            ]
          },
          {
            q: "I was ___ in setting up a recycling scheme at my school.",
            answers: [
              ["instrumental"]
            ]
          }
        ]
      }
    ]
  }
});
