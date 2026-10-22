# Уроки за книжкою, режими learn/homework/refresh, додаткові матеріали і debug — план реалізації

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Перебудувати застосунок з «тем Module 1» на уроки Roadmap C1-C2 (1A…10D), згруповані в модулі, де кожен урок має режими learn / homework / refresh, плюс додаткові вправи з мережі й режим debug для коментарів.

**Architecture:** Лишаємось на статичних HTML/JS без збірки (має працювати з `file://`). Один спільний рушій у `app/`, контент — по файлу на урок у `content/`, кожен файл реєструє урок через `ES.registerLesson()`. Чисті функції (нормалізація відповідей, ключі прогресу, міграція, валідація, експорт коментарів) винесені в `app/core.js`, який працює і в браузері, і в Node для тестів.

**Tech Stack:** vanilla JS (ES5-стиль як у `module1/app.js`), CSS, `node --test` для тестів, Python + `pypdf` + `ffmpeg` (вже є на ноутбуці) для витягування сторінок зі сканів.

**Spec:** окремого spec немає; вимоги — повідомлення Вадима в треді «План уроків і режиму debug» (22.10.2026), переказані в розділі нижче.

## Вимоги (зі слів користувача)

1. Уроки як у книжці; модуль — це просто набір уроків; наступні модулі приблизно такого ж розміру, як Module 1.
2. Кожен урок має три режими: **learn** (вивчення за Student's Book), **homework** (Workbook), **refresh** (те, що є зараз у module1: усе з обох книжок по уроку разом).
3. Пошукати в мережі додаткові матеріали, приклади й завдання на ці теми.
4. Режим **debug**: клікнути на елемент, додати коментар, потім скачати всі коментарі файлом і віддати Claude на доопрацювання.

## Що є зараз

- `module1/app.js` (888 рядків, IIFE, hash-роутинг `#/t/<topicId>/<tab>`, `#/mix`, `#/cards`), `module1/data.js` (`window.MODULE1.topics`: 9 граматичних тем 1A–3C + 7 лексичних «Task 4–10» з Module test 1), прогрес у `localStorage["english-school.module1.v1"]` з ключами `"<topicId>:<exIdx>"`.
- `sources/` (не в git): Student's Book Roadmap C1-C2 — 9 PDF-сканів (JPEG2000, тексту немає; є лише рукописні нотатки Вадима як текстовий шар), Workbook Roadmap C1 з ключами — 96 стор., вправи як JPEG-картинки, текстом є лише audio scripts і answer key (стор. 84–96).
- Структура книжки (Contents, стор. 2–4): 10 юнітів × уроки A, B, C (граматика + лексика) і D (English in action: функціональна мова, без граматики). Додатково: Check and reflect (після юн. 2, 4, 6, 8, 10), Master your skills (стор. 96–135, по три на юніт), Language bank (стор. 146), Vocabulary bank (стор. 166), Communication bank (стор. 176).
- Незлита функція «Робота над помилками» з треду «Наступна функція застосунку»: її немає ні в `main`, ні на `origin` (там лише `claude/module1-interactive-app-8yi7sc`, ідентична `main`).

## Рішення за замовчуванням (можна змінити до старту)

- **Модулі:** Module 1 = юніти 1–3 (12 уроків, як зараз), Module 2 = 4–6, Module 3 = 7–10 (16 уроків). Задається одним масивом у `content/modules.js`, тож перерозбити — це правка одного рядка.
- **Уроки D (English in action)** — повноцінні уроки модуля (лексика + функціональні фрази, без граматики). **Master your skills** і **Check and reflect** — не окремі уроки: їхні вправи йдуть у refresh відповідного уроку/юніту з позначкою `src`.
- **Авторське право:** репозиторій публічний. PDF і сторінки-картинки ніколи не комітимо (`sources/`, `.cache/` у `.gitignore`). Правила переказуємо своїми словами (як уже в `module1/data.js`), тексти статей не переписуємо, речення у вправах адаптуємо, а не копіюємо підряд.
- **Старі посилання:** `module1/index.html` стає редиректом на `../index.html#/m/1`; прогрес з `module1.v1` мігрує автоматично.

## Global Constraints

- Без збірки й без `fetch` контенту: усе підключається `<script src>`, відкривається з `file://`.
- Інтерфейс українською; англійська — лише навчальний контент. Жодної російської.
- Стиль коду як у `module1/app.js`: ES5 (`var`, `function`), хелпер `h(tag, attrs, children)`, без фреймворків.
- Нові ключі `localStorage`: `english-school.v2` (прогрес), `english-school.debug.v1` (коментарі). Кожне читання/запис у `try/catch`.
- Формати вправ лишаються ті самі 9 (`choice gap order transform errors cards match sort speak`), опис — у шапці `module1/data.js`; нове лише необов'язкове поле `src` (`"SB 4a"`, `"WB 2"`, `"LB 1A"`, `"extra: <url>"`).
- Тести: `node --test tests/`; валідація контенту: `node tools/validate.js` → `OK <n> lessons`.

## Review Focus

1. Відкриття `index.html` подвійним кліком (`file://`) — усі уроки з'являються, нічого не тягнеться мережею. Тест: `tests/index-scripts.test.js` перевіряє, що кожен файл з `content/` підключений в `index.html`.
2. Наявний прогрес Module 1 не губиться після оновлення. Тест: `migrateV1` у Task 2.
3. У debug-режимі клік по кнопці/варіанту відповіді не відповідає на вправу, а лише відкриває коментар; з вимкненим debug нічого не змінюється. Тест у Task 8 + ручна перевірка.
4. Урок без якогось режиму (наприклад, D без граматики або Workbook без вправ) — вкладка показує «Для цього режиму ще немає вправ», а не падає. Тест у Task 3.
5. Помилки в даних (індекс `answer` поза `options`, `___` не збігається з кількістю `answers`, порожні `models`) ловить `validate.js` до того, як користувач побачить зламану вправу. Тести в Task 2.

---

### Task 0: Підготовка репозиторію і «Робота над помилками»

**Files:**
- Create: `.gitignore`

- [ ] **Step 1:** Створити `.gitignore` з рядками `sources/`, `.cache/`, `node_modules/`. Перевірка: `git status --short` не показує `sources/`.
- [ ] **Step 2:** Через координатора попросити тред «Наступна функція застосунку» запушити гілку з «Роботою над помилками» і відкрити PR у `main` **до** Task 2. Якщо її злито — Task 2 переносить її в рушій разом з рештою `module1/app.js`. Якщо ні — вона реалізується заново як Task 9 (нижче) з новими ключами.
- [ ] **Step 3: Commit** `chore: ignore source PDFs and page cache`.

### Task 1: Витягування сторінок і карта сторінок

**Files:**
- Create: `tools/extract_pages.py`, `content/page-map.js`
- Test: `tests/page-map.test.js`

**Interfaces:**
- Produces: `python tools/extract_pages.py <book: sb|wb> <from> <to>` → `.cache/pages/<book>-<page:03d>.jpg` (ширина 1400px). `ES.pageMap = { "1A": { sb: [6,7], wb: [4,5], lb: [146], vb: [166], skills: [126,106,96] }, … }` — номери друкованих сторінок книжки.

- [ ] **Step 1: Тест** `page-map.test.js`: для кожного id з `["1A".."10D"]` (40 штук) є `sb` (≥1 сторінка) і `wb` (≥1); для A–C є `lb`.
- [ ] **Step 2:** Запустити `node --test tests/page-map.test.js` → FAIL (немає файлу).
- [ ] **Step 3:** `extract_pages.py`: `pypdf` читає `/XObject` сторінки, пише сирі байти потоку (`/JPXDecode` або `/DCTDecode`), `ffmpeg -i … -vf scale=1400:-1` конвертує в JPEG. Відповідність друкованої сторінки файлу: SB-файли названі діапазонами (`SB C1-C2_<from>_<to>.pdf`), у `1_27` індекс PDF = сторінка + 1 (обкладинка); WB: індекс PDF = сторінка − 1 (перевірити на 1A = стор. 4). Запускати Python без `-I` (тоді не видно `pypdf`), скрипт лежить поза `sources/`.
- [ ] **Step 4:** Заповнити `content/page-map.js`: стартові сторінки уроків взяти з Contents (1A=6, 1B=8, … 10D=92, по 2 стор.), Master your skills — з Extended route (стор. 3), WB — переглянувши перші сторінки кожного юніту, LB/VB — переглянувши стор. 146–175.
- [ ] **Step 5:** `node --test tests/page-map.test.js` → PASS.
- [ ] **Step 6: Commit** `feat: page extraction tool and lesson page map`.

### Task 2: Спільний рушій, схема уроку, прогрес v2

**Files:**
- Create: `app/core.js`, `app/registry.js`, `tools/validate.js`
- Move: `module1/app.js` → `app/app.js`, `module1/style.css` → `app/style.css`
- Test: `tests/core.test.js`, `tests/validate.test.js`

**Interfaces:**
- Produces (`app/registry.js`, підключається першим): `window.ES = { lessons: {}, order: [], modules: [], registerLesson(lesson) }`; `registerLesson` кладе урок у `lessons[id]` і `order`, дублікат id → `throw`.
- Схема уроку:
  ```js
  { id: "1A", unit: 1, letter: "A", title: "Team building", uk: "…",
    goal: "give feedback on an event",
    focus: { grammar: "present, past and future perfect", vocab: "phrases with delexical verbs", pron: "…", speaking: "…" },
    learn:    { theory: [/* блоки як topic.theory */], exercises: [/* вправи */] },
    homework: { exercises: [] },
    refresh:  { theory: [], exercises: [] } }
  ```
- Produces (`app/core.js`, `module.exports` у Node / `ES.core` у браузері):
  - `norm(s): string`, `same(a, b): boolean` — перенесені з `app.js` без змін.
  - `scoreKey(lessonId, mode, exIdx): string` → `"1A:learn:0"`.
  - `migrateV1(old: {scores, cards, streak}, map: {[topicId]: string | {lesson: string, offset: number}}): {scores, cards, streak}` — `"perfect:2"` → `"1A:refresh:2"`; з `{lesson:"1A", offset:3}` `"collocations:0"` → `"1A:refresh:3"`; ключі без відповідника відкидає; `cards` і `streak` переносить як є. Мапу дає `ES.topicMap` з Task 4.
  - `validateLesson(lesson): string[]` — список помилок, порожній = OK.
  - `lessonModes(lesson): {learn: number, homework: number, refresh: number}` — кількість вправ у кожному режимі.

- [ ] **Step 1: Тести** у `core.test.js`:
  - `scoreKey("1A","learn",0) === "1A:learn:0"`;
  - `migrateV1({scores:{"perfect:2":{best:80}}, cards:{x:3}, streak:{day:"2026-10-01",count:2}}, {perfect:"1A"})` → `scores["1A:refresh:2"].best === 80`, `cards.x === 3`, невідомий `"zzz:0"` зникає;
  - той самий виклик з мапою `{collocations: {lesson:"1A", offset:3}}` переносить `"collocations:0"` у `"1A:refresh:3"`;
  - `same("I've done", "I have done") === true`.
  У `validate.test.js`: урок з `choice` `answer: 2` при двох `options` → помилка з текстом `answer out of range`; `gap` з двома `___` і одним `answers` → `gap count mismatch`; `speak` без `models` → `missing models`; дубль id у `registerLesson` кидає.
- [ ] **Step 2:** `node --test tests/` → FAIL.
- [ ] **Step 3:** Реалізувати `core.js`, `registry.js`; `tools/validate.js` завантажує `app/registry.js` і всі `content/**/*.js` через `vm.runInNewContext` зі спільним `window`, проганяє `validateLesson`, друкує помилки або `OK <n> lessons`, код виходу 1 при помилках. `app/app.js` бере `norm/same` з `ES.core`, `STORE_KEY = "english-school.v2"`; при першому запуску, якщо є `english-school.module1.v1`, викликає `migrateV1` з мапою з Task 4 і зберігає результат (старий ключ не видаляє).
- [ ] **Step 4:** `node --test tests/` → PASS.
- [ ] **Step 5: Commit** `refactor: shared engine, lesson schema, progress v2`.

### Task 3: Модулі, сторінка уроку і режими

**Files:**
- Create: `index.html` (замість поточного редиректу), `content/modules.js`
- Modify: `app/app.js`, `app/style.css`
- Test: `tests/index-scripts.test.js`, ручна перевірка в браузері

**Interfaces:**
- Consumes: `ES.lessons`, `ES.order`, `ES.core.lessonModes`, `ES.core.scoreKey`.
- Produces: `ES.modules = [{ id: 1, title: "Module 1", units: [1,2,3] }, { id: 2, …, units: [4,5,6] }, { id: 3, …, units: [7,8,9,10] }]`. Маршрути:
  - `#/` — модулі (картка: назва, юніти, % прогресу);
  - `#/m/<n>` — уроки модуля, згруповані за юнітами, кожен урок: `ref`, назва, goal, три мітки режимів з %;
  - `#/m/<n>/mix`, `#/m/<n>/cards` — змішаний тест і картки в межах модуля (логіка `renderMix`/`renderAllCards`, пул лише з уроків модуля);
  - `#/l/<id>/<mode>[/<tab>]` — урок; `mode ∈ learn|homework|refresh`, за замовчуванням `learn`; вкладки як зараз (📘 Правило + вправи).
- Кожен відрендерений блок має `data-ref`: урок `"1A"`, режим `"1A/learn"`, вправа `"1A/learn/ex2"`, пункт `"1A/learn/ex2/i3"`, блок правила `"1A/learn/theory1"` (потрібно для Task 8).

- [ ] **Step 1: Тест** `index-scripts.test.js`: кожен `content/**/*.js` має `<script src>` в `index.html`, і `app/registry.js` стоїть перед ними, а `app/app.js` — останнім.
- [ ] **Step 2:** `node --test tests/index-scripts.test.js` → FAIL.
- [ ] **Step 3:** Реалізувати маршрути й рендер. Перемикач режимів — три кнопки-вкладки над вкладками вправ: «Learn · вивчаю», «Homework · домашка», «Refresh · повторення». Порожній режим → `Для цього режиму ще немає вправ`. Топбар: `ES` + крихти `Module 1 › 1A`.
- [ ] **Step 4:** Тести → PASS; відкрити `index.html` через `file://` у браузері, пройти: модуль → урок → кожен режим → вправа → результат; перевірити ширину 375px.
- [ ] **Step 5: Commit** `feat: modules, lessons and learn/homework/refresh modes`.

### Task 4: Перенести наявний Module 1 у refresh

**Files:**
- Create: `content/u01/1a.js` … `content/u03/3d.js` (12 файлів), `content/topic-map.js`
- Modify: `module1/index.html` → редирект на `../index.html#/m/1`
- Delete: `module1/app.js`, `module1/data.js`, `module1/style.css` (після перенесення)

**Interfaces:**
- Produces: `ES.topicMap = { perfect:"1A", raising:"1B", "infinitive-phrases":"1C", continuous:"2A", probability:"2B", cleft:"2C", questions:"3A", reason:"3B", adjectives:"3C", collocations:"1A", idioms:"1B", attitude:"1C", trends:"2A", reactions:"2C", ideas:"3A", thinking:"3A" }` — для `migrateV1`. Лексичні теми прив'язати за колонкою Vocabulary з Contents; `attitude`, `reactions`, `thinking` перевірити по сторінках SB (чи не 2B/2D/3D) і виправити мапу.

- [ ] **Step 1:** Перенести кожну тему: граматична → `refresh.theory` + `refresh.exercises` свого уроку; лексична → дописати вправи в `refresh.exercises` того ж уроку. Порядок вправ лексичної теми — після граматичних (тоді індекси граматичних ключів збігаються з міграцією; для лексичних тем записати в `topicMap` форму `{ lesson: "1A", offset: <к-сть вправ перед ними> }`).
- [ ] **Step 2:** `node tools/validate.js` → `OK 12 lessons`; `node --test tests/` → PASS.
- [ ] **Step 3:** У браузері: зі збереженим старим прогресом відкрити `#/m/1` — відсотки 1A–3C такі ж, як були в старому застосунку.
- [ ] **Step 4: Commit** `feat: move Module 1 revision content into lesson refresh modes`.

### Task 5: Learn і homework для Module 1 (юніти 1–3)

Один підкрок-коміт на юніт. Процедура однакова для кожного уроку і повторюється в Task 6.

**Files:**
- Modify: `content/u01/*.js`, `content/u02/*.js`, `content/u03/*.js`

**Процедура для уроку X:**
1. `python tools/extract_pages.py sb …` / `wb …` за `ES.pageMap[X]`; прочитати картинки (Read показує JPEG).
2. **learn.theory** — з Language bank (`lb`) і правила на сторінці уроку, своїми словами, з прикладами; для D — функціональні фрази з бокса уроку.
3. **learn.exercises** — вправи Student's Book у наших форматах, по порядку книжки, `src: "SB 4a"`; лексика уроку + Vocabulary bank → `cards` + `match`/`gap`; говоріння (Speaking goal) → `speak` з моделями. Вправи на читання/аудіо, що не перекладаються в автоперевірку, пропускаємо.
4. **homework.exercises** — вправи Workbook цього уроку, `src: "WB 1"`; правильні відповіді брати з answer key (текстовий шар, `pdftotext -layout`, стор. 84–96), а не вгадувати.
5. **refresh** — наявні вправи (Task 4) плюс вправи Language bank / Check and reflect / Master your skills, яких немає в learn і homework. Для уроків 4–10 refresh будується з нуля: правило + змішана добірка з обох книжок.
6. `node tools/validate.js` → OK; відкрити урок у браузері, пройти по одній вправі кожного режиму.

- [ ] **Step 1:** Юніт 1 (1A–1D) → validate OK → commit `content: unit 1 learn and homework`.
- [ ] **Step 2:** Юніт 2 → validate OK → commit `content: unit 2 learn and homework`.
- [ ] **Step 3:** Юніт 3 → validate OK → commit `content: unit 3 learn and homework`.

### Task 6: Module 2 і Module 3 (юніти 4–10)

**Files:**
- Create: `content/u04/4a.js` … `content/u10/10d.js` (28 файлів), відповідні `<script>` в `index.html`

- [ ] **Step 1…7:** По юніту за процедурою Task 5 (усі три режими), після кожного `node tools/validate.js` + `node --test tests/` → PASS і коміт `content: unit N`.
- [ ] **Step 8:** У браузері `#/m/2` і `#/m/3` показують усі уроки, змішаний тест модуля бере пункти лише зі своїх уроків.

### Task 7: Додаткові матеріали з мережі

**Files:**
- Create: `docs/research/extra-materials.md`
- Modify: файли уроків — нові вправи з `src: "extra: <url>"` у `refresh` і пункт «Більше практики» (посилання) у `learn.theory`

- [ ] **Step 1:** Для кожної граматичної теми й лексичного набору знайти 1–3 безкоштовні сторінки з поясненням/вправами. Перевірені стартові джерела: British Council LearnEnglish C1 (наприклад, [Emphasis: cleft sentences, inversion and auxiliaries](https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries)), Test-English C1 ([Advanced word order](https://test-english.com/grammar-points/c1/advanced-word-order/)). Записати в `extra-materials.md` таблицею: урок · тема · URL · що там корисного.
- [ ] **Step 2:** На основі знайденого написати **власні** нові пункти вправ (не копіювати з сайтів): мінімум 6 нових пунктів на граматичну тему, з різними форматами (`errors`, `transform`, `order`, де їх ще немає) — у `refresh`.
- [ ] **Step 3:** `node tools/validate.js` → OK; коміт `content: extra practice from online research`.

### Task 8: Режим debug

**Files:**
- Create: `app/debug.js`
- Modify: `app/core.js` (експорт), `app/app.js` (кнопка в топбарі), `app/style.css`, `index.html`
- Test: `tests/debug.test.js`

**Interfaces:**
- Consumes: атрибути `data-ref` з Task 3.
- Produces (`app/core.js`): `exportComments(list: Comment[], meta: {date: string}): string` — Markdown. `Comment = { id, at, route, ref, path, text, comment }`, де `route` = `location.hash`, `ref` = найближчий `data-ref` (або `null`), `path` = короткий CSS-шлях елемента, `text` = перші 160 символів `innerText`.
- Produces (`app/debug.js`): `ES.debug = { isOn(), toggle(), list(), add(c), remove(id), clear(), download() }`, зберігання в `localStorage["english-school.debug.v1"]`.

- [ ] **Step 1: Тести** `debug.test.js`: `exportComments([{ref:"1A/learn/ex2/i3", route:"#/l/1A/learn/2", text:"I've ___ about ten cliffs", comment:"неправильна відповідь", …}], {date:"2026-10-23"})` містить рядок `## 1. 1A/learn/ex2/i3`, рядок `Коментар: неправильна відповідь`, рядок з `route`; порожній список → `Коментарів немає.`; коментар з переносами рядків зберігається повністю.
- [ ] **Step 2:** `node --test tests/debug.test.js` → FAIL.
- [ ] **Step 3:** Реалізувати. Вмикання: кнопка «🐞» у топбарі (стан у `localStorage`, переживає перезавантаження) або `?debug` в URL. Коли увімкнено: підсвічування елемента під курсором; обробник `click` на `document` у фазі **capture** з `preventDefault()` + `stopPropagation()`, тож вправи не реагують; поповер з полем коментаря, «Зберегти» / «Скасувати». Плаваюча панель внизу: лічильник, список (ref + коментар, ✕ видалити), «⬇ Завантажити» (Blob → `debug-comments-YYYY-MM-DD.md`), «Очистити» з `confirm`. Сама панель і поповер кліки не перехоплюють. Елементи з коментарем мають мітку-крапку.
- [ ] **Step 4:** Тести → PASS. У браузері: увімкнути debug, клікнути варіант відповіді (відповідь не зарахована), додати 2 коментарі на різних уроках, перезавантажити (коментарі на місці), завантажити файл і перевірити вміст; вимкнути debug — вправа знову відповідає на клік.
- [ ] **Step 5:** Додати в `README.md` розділ «Debug-режим»: як увімкнути і що робити з файлом (покласти в тред і попросити доопрацювати). Коміт `feat: debug mode with element comments export`.

### Task 9: «Робота над помилками» на новій схемі (лише якщо не злито в Task 0)

**Files:**
- Modify: `app/app.js`, `app/core.js`
- Test: `tests/mistakes.test.js`

**Interfaces:**
- Produces: `itemKey(lessonId, mode, exIdx, itemIdx): string` → `"1A:homework:1:4"`; `state.mistakes = { [itemKey]: { misses: n, streak: n } }`; пункт зникає після двох правильних відповідей поспіль (поведінка з треду «Наступна функція застосунку»). Маршрути `#/mistakes` і `#/m/<n>/mistakes`.

- [ ] **Step 1: Тести:** хибна відповідь додає `misses: 1`; дві правильні поспіль видаляють ключ; правильна після хибної скидає лише `streak`.
- [ ] **Step 2:** FAIL → реалізувати (`recordAnswer(state, key, ok)` у `core.js`, виклик у колбеку `stepper` для автоперевірних типів) → PASS.
- [ ] **Step 3:** Ручна перевірка в браузері; коміт `feat: mistakes review on lesson schema`.

### Завершення

- [ ] `node --test tests/` і `node tools/validate.js` → усе PASS / `OK 40 lessons`.
- [ ] Оновити `README.md`: структура (`app/`, `content/`, `tools/`), модулі, режими, як додати урок.
- [ ] Гілка `claude/project-thread-l65ta4`, PR у `main` (окремі PR допустимі: Task 0–4 — рушій; Task 5–7 — контент; Task 8 — debug).
