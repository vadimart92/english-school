/*
 * 1C Kidfluencers
 * Refresh: перенесено з module1/data.js (Module test 1 revision + Language bank).
 */
ES.registerLesson({
  id: "1C",
  unit: 1,
  letter: "C",
  title: "Kidfluencers",
  uk: "Дитячі інфлюенсери: інфінітивні фрази, конотація",
  goal: "justify a point of view",
  focus: { grammar: "infinitive phrases", vocab: "connotation 1", pron: "use of pauses in infinitive phrases" },
  learn: { theory: [], exercises: [] },
  homework: { exercises: [] },
  refresh: {
    theory: [
      {
        h: "Before or after",
        p: "Most infinitive phrases can go before or after the statement they comment on.",
        ex: ["It wasn't great. To be honest, I hated it.", "It wasn't great. I hated it, to be honest."],
        list: [
          "to give them their proper name / title",
          "not to put too fine a point on it",
          "to be sure",
          "to be honest / frank",
          "to tell the truth",
          "to be fair"
        ]
      },
      {
        h: "Usually before",
        p: "Some show how the statement relates to earlier information, so they come first.",
        ex: ["I was worried about visiting my in-laws, but needless to say, everyone was extremely kind."],
        list: ["needless to say", "to cap it all", "to add insult to injury", "to make matters worse"]
      },
      {
        h: "Usually after",
        p: "Some say the reality is more extreme than your words, or that you could say more. They follow the statement.",
        ex: ["The meeting was boring, to put it mildly."],
        list: ["to put it mildly", "to put it bluntly", "to name (but / just) a few", "to say the least"]
      },
      {
        h: "Same idea, different attitude",
        table: [
          ["fans", "die-hard (+) · screaming (−) · obsessive (−)"],
          ["recommendations", "informed (+) · gushing (++, maybe too much) · lukewarm (−)"],
          ["sums of money", "phenomenal (+) · moderate (neutral) · meagre (−)"],
          ["parents", "supportive (+) · doting (+, very loving) · firm (neutral)"],
          ["toys", "educational (+) · durable (+) · flimsy (−)"],
          ["snacks", "nutritious (+) · bite-size (neutral) · processed (−)"],
          ["ambition", "driving (+) · blind (−) · consuming (−−)"]
        ]
      }
    ],
    exercises: [
      {
        type: "cards",
        title: "Flashcards: what does it signal?",
        items: [
          { front: "to put it mildly", back: "the truth is worse than what I said", ex: "The meeting was boring, to put it mildly." },
          { front: "to say the least", back: "I'm understating it; it was much more", ex: "I was disappointed, to say the least." },
          { front: "needless to say", back: "obviously / as you'd expect", ex: "Needless to say, everyone was extremely kind." },
          { front: "to add insult to injury", back: "to make a bad situation even worse (and more offensive)", ex: "He took my car and, to add insult to injury, spilt crisps all over the seats." },
          { front: "to make matters worse", back: "on top of an already bad situation", ex: "To make matters worse, thieves used my information." },
          { front: "to cap it all", back: "as the final (usually bad) thing in a series", ex: "We missed the train and, to cap it all, it started raining." },
          { front: "not to put too fine a point on it", back: "to speak directly, even if it's unpleasant", ex: "Not to put too fine a point on it, you've wasted your money." },
          { front: "to name but a few", back: "these are only some examples", ex: "She plays the guitar, the violin and the saxophone, to name but a few." },
          { front: "to give it its proper title", back: "using the official or correct name", ex: "Oversharing or, to give it its proper title, …" },
          { front: "to cut a long story short", back: "skipping the details, here's the result", ex: "To cut a long story short, I lost two friends." },
          { front: "to be fair", back: "to be balanced and give credit", ex: "To be fair, it was the first time I'd tried." },
          { front: "to put it bluntly", back: "to say it directly, without softening", ex: "To put it bluntly, your plan won't work." }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Choose the right phrase (Language bank 1C)",
        items: [
          { q: "My presentation is about the perils of posting too much personal information online, or oversharing, ___.", options: ["to give it its proper title", "to make matters worse"], answer: 0 },
          { q: "It was great at first, but ___, I ended up losing two of my best friends.", options: ["to cut a long story short", "to give a simple example"], answer: 0 },
          { q: "It was very embarrassing, ___.", options: ["to be precise", "to put it mildly"], answer: 1 },
          { q: "But then, ___, some thieves used my personal information to raid my bank account.", options: ["to give it its proper title", "to make matters worse"], answer: 1 },
          { q: "I was disappointed, ___, but I guess I've learnt a few valuable lessons.", options: ["to say the least", "to put it bluntly"], answer: 0 },
          {
            q: "Which position is natural? '___ everything turned out OK in the end.'",
            options: ["Needless to say, (before)", "…in the end, needless to say. (after)"],
            answer: 0,
            explain: "'Needless to say' links to earlier information, so it normally comes first."
          },
          { q: "Which is natural?", options: ["The party was a disaster, to put it mildly.", "To put it mildly, the party was a disaster."], answer: 0, explain: "'To put it mildly' usually follows the statement." }
        ],
        src: "Revision"
      },
      {
        type: "sort",
        title: "Positive, neutral or negative?",
        categories: ["positive", "neutral", "negative"],
        items: [
          { text: "die-hard fans", cat: 0 },
          { text: "obsessive fans", cat: 2 },
          { text: "informed recommendations", cat: 0 },
          { text: "lukewarm recommendations", cat: 2 },
          { text: "phenomenal sums of money", cat: 0 },
          { text: "moderate sums of money", cat: 1 },
          { text: "meagre sums of money", cat: 2 },
          { text: "supportive parents", cat: 0 },
          { text: "firm parents", cat: 1 },
          { text: "educational toys", cat: 0 },
          { text: "flimsy toys", cat: 2 },
          { text: "durable toys", cat: 0 },
          { text: "nutritious snacks", cat: 0 },
          { text: "bite-size snacks", cat: 1 },
          { text: "processed snacks", cat: 2 },
          { text: "driving ambition", cat: 0 },
          { text: "blind ambition", cat: 2 }
        ],
        src: "Revision"
      },
      {
        type: "choice",
        title: "Make it more positive or more negative",
        items: [
          { q: "“These football supporters are very committed.” (positive)", options: ["die-hard fans", "obsessive fans", "screaming fans"], answer: 0 },
          { q: "“The reviewer liked the restaurant.” (very enthusiastic)", options: ["a lukewarm recommendation", "a gushing recommendation", "a moderate recommendation"], answer: 1 },
          { q: "“They earned some money from the project.” (negative)", options: ["a phenomenal sum", "a meagre sum", "a moderate sum"], answer: 1 },
          { q: "“The parents care a lot about their child.” (very loving)", options: ["firm parents", "doting parents", "flimsy parents"], answer: 1 },
          { q: "“The toys are made for children.” (negative – break easily)", options: ["durable toys", "educational toys", "flimsy toys"], answer: 2 },
          { q: "“The snacks are convenient to eat.” (neutral)", options: ["bite-size snacks", "processed snacks", "nutritious snacks"], answer: 0 },
          { q: "“She really wants to become successful.” (stronger negative)", options: ["driving ambition", "blind ambition", "consuming ambition"], answer: 2 }
        ],
        src: "Revision"
      }
    ]
  }
});
