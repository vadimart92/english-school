# Як писати урок (content guide)

Кожен урок книжки Roadmap C1-C2 — один файл `content/uNN/<id>.js` (наприклад `content/u04/4b.js`), який викликає `ES.registerLesson({...})`. Файли пишуться руками або через `tools/lesson-file.js` (`writeLesson(lesson)` друкує об'єкт у потрібному стилі).

## Схема уроку

```js
ES.registerLesson({
  id: "4B", unit: 4, letter: "B",
  title: "Volunteering",                        // назва з книжки
  uk: "Волонтерство: реальні умовні речення…",  // один рядок українською: тема + що вчимо
  goal: "discuss political or social issues",   // Goal з шапки уроку
  focus: { grammar: "real conditionals", vocab: "adjective + noun collocations", pron: "intonation in incomplete requests" },
  learn:    { theory: [/* блоки */], exercises: [/* вправи */] },
  homework: { exercises: [] },
  refresh:  { theory: [], exercises: [] }
});
```

Уроки D (English in action) не мають `focus.grammar`.

### Блок теорії

`{ h: "Heading", p: "paragraph", list: ["item"], table: [["first cell — th", "td"]], ex: ["English example (with a 🔊 button)"], links: [{ title, url, note }], uk: { h, p, list, table?, notes? } }` — усі поля, крім `h`, необов'язкові.

**Мова правил:** `h`, `p`, `list` (і `note` у `links`) пишуться **англійською**, простою мовою рівня B2–C1. Переклад українською лежить у `uk`: `uk.h` обов'язковий, `uk.p` — якщо є `p`, `uk.list` — тієї ж довжини, що й `list`, `uk.notes` — по одному на кожне посилання, `uk.table` — лише якщо в таблиці є пояснення, а не самі англійські приклади. Приклади `ex` не перекладаються. У застосунку кнопка «🇺🇦 Показати українською» перемикає всі правила (вибір запам'ятовується). `validate.js` перевіряє, що переклад є і що в англійських полях немає кирилиці.

### Вправи (9 типів, як у `app/core.js`)

| type | поля вправи | поля пункту (`items[]`) |
|---|---|---|
| `choice` | | `{ q: "…___…", options: ["a","b"], answer: <індекс>, explain? }` |
| `gap` | | `{ q: "… ___ …", answers: [["варіант", "альтернатива"], …] (по одному масиву на кожен ___), hint? }` |
| `order` | | `{ words: ["слова", …], answer: "Повне речення.", alts?: [...] }` |
| `transform` | | `{ q: "Перефразуй…", start?: "Початок…", models: ["зразок"] }` |
| `errors` | | `{ s: "речення", ok: true/false, fix?: "виправлене (обов'язково, якщо ok=false)" }` |
| `cards` | | `{ front: "phrase", back: "значення (укр. або англ.)", ex?: "приклад" }` |
| `match` | | `{ a: "term", b: "meaning" }` (4–10 пар) |
| `sort` | `categories: ["A","B"]` | `{ text: "…", cat: <індекс категорії> }` |
| `speak` | `phrases: ["цільові фрази"]`, `intro?` | `{ q: "питання/завдання", models: ["зразкова відповідь"] }` |

Кожна вправа: `{ type, title: "Інструкція англійською, як у книжці", src: "SB 6a" | "WB 4" | "LB 4A" | "VB 4A" | "Check 4" | "Skills 4C" | "Revision" | "extra: <url>", intro?, items: [...] }`.

Правила для автоперевірки:
- `gap`: перелічуй усі прийнятні варіанти (повна і скорочена форма — `have been` і `'ve been` — нормалізуються автоматично, але різні слова — ні). Не роби пропуск довшим за ~5 слів.
- `choice`: 2–4 варіанти, `answer` — індекс у масиві `options`.
- `order`: `words` — рівно слова з `answer` (без розділових знаків).
- Відкриті завдання (Speaking, «complete so it's true for you») — `speak` або `transform` зі зразками `models`, ніколи не `gap`.

## Що куди

- **learn** — Student's Book: правило з Language focus + Language bank (своїми словами, з прикладами), лексика уроку → `cards` + ще одна вправа на неї, вправи сторінок уроку в порядку книжки, Speaking goal → `speak`. Для D: функціональні фрази з бокса → теорія + `cards`/`sort`/`gap`.
- **homework** — вправи Workbook цього уроку (одна сторінка), у порядку зошита. Відповіді — з answer key (`.cache/wb-key.txt`), не вгадуй. Вправи на читання/аудіо, які без тексту не мають сенсу, пропускай.
- **refresh** — повторення всього разом: Language bank PRACTICE (друга сторінка юніту), Vocabulary bank, Check and reflect, корисне з Master your skills, плюс змішані нові пункти на граматику й лексику уроку. Якщо в уроці вже є refresh-вправи з `src: "Revision"` — **не змінюй і не переставляй їх** (на їхніх індексах тримається збережений прогрес), нові додавай лише в кінець масиву.

Обсяг на урок A–C: learn 4–7 вправ, homework 3–6, refresh 4–8; у вправі 5–12 пунктів. Для D трохи менше.

## Джерела (у `sources/`, у git не потрапляють)

- Сторінки рендеряться в `.cache/pages/`: `python tools/extract_pages.py sb 34 35`, `python tools/extract_pages.py wb 30` → `.cache/pages/sb-034.jpg`, `.cache/pages/wb-030.jpg`. Прочитай JPEG інструментом Read.
- Номери сторінок уроку: `content/page-map.js` (`ES.pageMap["4B"]` = `{ sb, wb, lb, vb }`, `ES.unitPages[4]` = `{ skills, check, wbSkills }`).
- Answer key Workbook — текстом у `.cache/wb-key.txt` (розділи `UNIT n` → `nA`…`nD`, `Reading`, `Listening`, `Writing`). У тексті загублені лігатури fi/fl/ff/ffi (`e ort` = effort, ` nd` = find, `o ` = off) — відновлюй.
- Рукописні позначки на сканах — нотатки Вадима; вони можуть підказати, що йому було важко, але це не відповіді.

## Авторське право

Репозиторій публічний. Правила переказуй своїми словами. Тексти статей і аудіо не переписуй. Речення у вправах адаптуй (змінюй деталі, імена, контекст), а не копіюй підряд цілі вправи; відповіді з ключа використовуй для перевірки своїх адаптованих пунктів.

## Перевірка

```bash
node tools/validate.js        # OK <n> lessons або список проблем
node tools/sync-index.js      # після додавання нового файлу уроку
node --test "tests/*.test.js"
```
