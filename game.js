const q = (question, answers, correct, speaker = 'Учитель математики') => ({ question, answers, correct, speaker });

const lessons = {
  1: [
    q('У Маши было 5 яблок. Ей дали ещё 3. Сколько стало?', ['7', '8', '9'], 1),
    q('Какое число пропущено: 6, 7, …, 9?', ['5', '8', '10'], 1),
    q('На ветке сидели 9 птиц. 2 улетели. Сколько осталось?', ['6', '7', '11'], 1),
  ],
  2: [
    q('В каком слове пять букв?', ['Дом', 'Школа', 'Карандаш'], 1, 'Учитель русского языка'),
    q('Выбери проверочное слово для слова «леса́».', ['Лес', 'Лиса', 'Лесной'], 0, 'Учитель русского языка'),
    q('Какое предложение написано правильно?', ['кот спит.', 'Кот спит.', 'Кот спит'], 1, 'Учитель русского языка'),
    q('В каком слове первый звук — гласный?', ['Арбуз', 'Дом', 'Мяч'], 0, 'Учитель русского языка'),
    q('Какое слово отвечает на вопрос «кто?»', ['Лиса', 'Окно', 'Молоко'], 0, 'Учитель русского языка'),
    q('Найди слово из трёх слогов.', ['Мак', 'Река', 'Машина'], 2, 'Учитель русского языка'),
    q('Какая буква пропущена: тр…ва?', ['а', 'о', 'и'], 0, 'Учитель русского языка'),
    q('Выбери слово во множественном числе.', ['Книга', 'Книги', 'Книгой'], 1, 'Учитель русского языка'),
    q('Какое слово написано с большой буквы правильно?', ['москва', 'Москва', 'МОсква'], 1, 'Учитель русского языка'),
    q('Какой знак нужен в конце вопроса: «Где мой рюкзак…»', ['.', '!', '?'], 2, 'Учитель русского языка'),
  ],
  3: [
    q('Чему равно 7 × 8?', ['54', '56', '64'], 1),
    q('48 наклеек разделили поровну между 6 детьми. Сколько получил каждый?', ['6', '8', '9'], 1),
    q('Периметр квадрата со стороной 5 см равен…', ['10 см', '20 см', '25 см'], 1),
  ],
  4: [
    q('Чему равно 360 : 9?', ['30', '40', '45'], 1),
    q('Автобус проехал 180 км за 3 часа. Какова его скорость?', ['60 км/ч', '90 км/ч', '540 км/ч'], 0),
    q('Какая дробь обозначает половину?', ['1/2', '2/3', '3/4'], 0),
  ],
  5: [
    q('Чему равно 3,5 + 2,7?', ['5,2', '6,2', '6,12'], 1),
    q('Найди x: x + 17 = 40', ['23', '33', '57'], 0),
    q('Чему равна площадь прямоугольника 7 см на 4 см?', ['11 см²', '22 см²', '28 см²'], 2),
  ],
  6: [
    q('Чему равно −7 + 12?', ['−19', '5', '19'], 1),
    q('Сократи дробь 18/24', ['3/4', '6/8', '9/12'], 0),
    q('15% от 200 — это…', ['15', '30', '45'], 1),
  ],
  7: [
    q('Реши уравнение: 3x − 5 = 16', ['x = 7', 'x = 11', 'x = 21'], 0),
    q('Раскрой скобки: 2(a + 4)', ['2a + 4', '2a + 8', 'a + 8'], 1),
    q('Сумма углов треугольника равна…', ['90°', '180°', '360°'], 1),
  ],
  8: [
    q('Чему равен квадратный корень из 144?', ['12', '14', '72'], 0),
    q('Реши: x² = 49', ['Только 7', '7 и −7', '49 и −49'], 1),
    q('Гипотенуза прямоугольного треугольника с катетами 3 и 4 равна…', ['5', '6', '7'], 0),
  ],
  9: [
    q('Реши систему: x + y = 10, x − y = 2. Чему равен x?', ['4', '6', '8'], 1, 'Экзаменатор ОГЭ'),
    q('Вероятность вытащить красный шар из мешка с 3 красными и 7 синими шарами равна…', ['0,3', '0,7', '3'], 0, 'Экзаменатор ОГЭ'),
    q('Корни уравнения x² − 5x + 6 = 0 — это…', ['1 и 6', '2 и 3', '−2 и −3'], 1, 'Экзаменатор ОГЭ'),
  ],
  10: [
    q('Чему равен sin 30°?', ['0', '1/2', '1'], 1),
    q('Найди десятый член прогрессии 3, 7, 11…', ['35', '39', '43'], 1),
    q('log₂ 32 равен…', ['4', '5', '16'], 1),
  ],
  11: [
    q('Реши: 2ˣ = 16', ['x = 4', 'x = 8', 'x = 14'], 0, 'Экзаменатор ЕГЭ'),
    q('Производная функции x³ равна…', ['3x²', 'x²', '3x'], 0, 'Экзаменатор ЕГЭ'),
    q('Товар стоил 2000 ₽ и подорожал на 10%. Новая цена?', ['2010 ₽', '2100 ₽', '2200 ₽'], 2, 'Экзаменатор ЕГЭ'),
  ],
  12: [
    q('Предел (x² − 1)/(x − 1) при x → 1 равен…', ['0', '1', '2'], 2, 'Доцент первого курса'),
    q('Определитель матрицы [[2, 1], [3, 4]] равен…', ['5', '8', '11'], 0, 'Доцент первого курса'),
    q('Интеграл ∫2x dx равен…', ['x² + C', '2 + C', '2x² + C'], 0, 'Доцент первого курса'),
  ],
  13: [
    q('Сколько рёбер у полного графа с 5 вершинами?', ['5', '10', '20'], 1, 'Профессор второго курса'),
    q('Собственные значения единичной матрицы равны…', ['0', '1', 'Зависят от размера'], 1, 'Профессор второго курса'),
    q('Вероятность двух орлов подряд при честной монете равна…', ['1/2', '1/3', '1/4'], 2, 'Профессор второго курса'),
  ],
  14: [
    q('Бюджет проекта 120 000 ₽. Потрачено 35%. Сколько осталось?', ['42 000 ₽', '78 000 ₽', '85 000 ₽'], 1, 'Начальник центра'),
    q('Задача занимает 6 часов. Автоматизация ускорила её на 25%. Новое время?', ['4,5 часа', '5 часов', '5,5 часа'], 0, 'Отдел дедлайнов'),
    q('Три сотрудника делают 18 отчётов за день поровну. Сколько делает каждый?', ['5', '6', '9'], 1, 'Кофейный автомат'),
  ],
};

Object.keys(lessons).forEach((key) => {
  const source = lessons[key];
  if (source.length < 10) lessons[key] = Array.from({ length: 10 }, (_, index) => source[index % source.length]);
});

const modes = [
  ...Array.from({ length: 11 }, (_, index) => ({ id: index + 1, label: `${index + 1} класс`, subject: index === 1 ? 'Русский язык' : 'Математика' })),
  { id: 12, label: '1 курс' },
  { id: 13, label: '2 курс' },
  { id: 14, label: 'Экстрим: работа', type: 'extreme' },
];

const scenes = [...document.querySelectorAll('.scene')];
const iqElement = document.querySelector('#iq');
const questionElement = document.querySelector('#question');
const speakerElement = document.querySelector('#speaker');
const answersElement = document.querySelector('#answers');
const hintElement = document.querySelector('#hint');
const stageCounterElement = document.querySelector('#stageCounter');
let riddleIndex = 0;
let iq = 0;
let locked = false;
let riddles = lessons[1];
let selectedMode = null;

function buildModes() {
  const grid = document.querySelector('#modeGrid');
  modes.forEach((mode) => {
    const button = document.createElement('button');
    button.className = mode.type === 'extreme' ? 'mode-button extreme-mode' : 'mode-button';
    button.innerHTML = `<span>${String(mode.id).padStart(2, '0')} · ${mode.subject || 'Математика'}</span>${mode.label}`;
    button.addEventListener('click', () => selectMode(mode));
    grid.append(button);
  });
}

function selectMode(mode) {
  selectedMode = mode;
  riddles = lessons[mode.id];
  document.querySelector('#modeBadge').textContent = `${mode.label} · ${mode.subject || 'Математика'}`;
  document.querySelector('#roadMode').textContent = `${mode.label} · ${mode.subject || 'Математика'} · Где-то очень далеко от дома`;
  startMode();
}

function showScene(id) {
  scenes.forEach((scene) => scene.classList.toggle('active', scene.id === id));
  document.querySelector('#game').dataset.scene = id;
}

function startMode() {
  riddleIndex = 0;
  locked = false;
  hintElement.textContent = 'Выбирай внимательно. Пол слушает каждый ответ.';
  stageCounterElement.textContent = 'Этап 1 / 10';
  showScene('road');
}

function showRiddle() {
  locked = false;
  const riddle = riddles[riddleIndex];
  stageCounterElement.textContent = `Этап ${riddleIndex + 1} / ${riddles.length}`;
  speakerElement.textContent = riddle.speaker;
  questionElement.textContent = riddle.question;
  answersElement.replaceChildren();

  riddle.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.textContent = answer;
    button.addEventListener('click', () => answerRiddle(index, button));
    answersElement.append(button);
  });
}

function answerRiddle(answerIndex, button) {
  if (locked) return;
  locked = true;
  const riddle = riddles[riddleIndex];

  if (answerIndex !== riddle.correct) {
    button.classList.add('wrong');
    hintElement.textContent = 'Под ногами что-то щёлкнуло…';
    document.querySelector('#chamber').classList.add('breaking');
    setTimeout(() => {
      document.querySelector('#chamber').classList.remove('breaking');
      showScene('fall');
      setTimeout(() => showScene('bedroom'), 2400);
    }, 700);
    return;
  }

  button.classList.add('correct');
  iq += 1;
  iqElement.textContent = String(iq);
  hintElement.textContent = 'Правильно. IQ плюс один.';
  riddleIndex += 1;
  setTimeout(() => {
    if (riddleIndex === riddles.length) {
      const isLastMode = selectedMode.id === modes.length;
      document.querySelector('#victoryText').textContent = isLastMode
        ? `Ты прошёл все режимы и сохранил ${iq} IQ! Теперь центр исполнит желание.`
        : `Все 10 этапов пройдены. Твой результат — ${iq} IQ. Следующая дверь открыта.`;
      document.querySelector('#againButton').textContent = isLastMode ? 'Начать заново' : 'Следующий класс';
      showScene('victory');
    }
    else showRiddle();
  }, 1100);
}

document.querySelector('#walkButton').addEventListener('click', () => showScene('entrance'));
document.querySelector('#enterButton').addEventListener('click', () => {
  showScene('chamber');
  showRiddle();
});
document.querySelector('#retryButton').addEventListener('click', startMode);
document.querySelector('#againButton').addEventListener('click', () => {
  if (selectedMode.id === modes.length) {
    iq = 0;
    iqElement.textContent = '0';
    showScene('modes');
    return;
  }
  selectMode(modes[selectedMode.id]);
});
buildModes();
