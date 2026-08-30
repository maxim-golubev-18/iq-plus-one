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
    q('В каком слове нужно написать букву «о»?', ['В…да', 'Л…са', 'З…ма'], 0, 'Учитель русского языка'),
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

const lessonExtras = {
  1: [
    q('Чему равно 4 + 5?', ['8', '9', '10'], 1), q('Чему равно 10 − 6?', ['3', '4', '5'], 1),
    q('Какое число больше: 7 или 9?', ['7', '9', 'Они равны'], 1), q('У Коли 3 машинки, а у Вани 2. Сколько всего?', ['5', '4', '6'], 0),
    q('Продолжи ряд: 2, 4, 6, …', ['7', '8', '9'], 1), q('Какое число стоит перед 10?', ['8', '9', '11'], 1),
    q('В корзине 8 груш. Одну съели. Сколько осталось?', ['6', '7', '9'], 1),
  ],
  3: [
    q('Чему равно 9 × 6?', ['45', '54', '63'], 1), q('Чему равно 72 : 8?', ['8', '9', '10'], 1),
    q('В 5 коробках по 6 мячей. Сколько мячей?', ['11', '25', '30'], 2), q('Чему равна треть от 18?', ['3', '6', '9'], 1),
    q('Сколько минут в двух часах?', ['60', '120', '200'], 1), q('Найди неизвестное: 7 × ? = 49', ['6', '7', '8'], 1),
    q('Периметр прямоугольника со сторонами 3 и 6 см равен…', ['9 см', '18 см', '24 см'], 1),
  ],
  4: [
    q('Чему равно 125 + 378?', ['493', '503', '513'], 1), q('Чему равно 1000 − 457?', ['543', '553', '643'], 0),
    q('Чему равно 25 × 4?', ['50', '100', '125'], 1), q('Какую часть часа составляют 15 минут?', ['1/2', '1/3', '1/4'], 2),
    q('Поезд ехал 4 часа со скоростью 70 км/ч. Какой путь он прошёл?', ['140 км', '280 км', '350 км'], 1),
    q('Площадь квадрата со стороной 9 см равна…', ['18 см²', '36 см²', '81 см²'], 2), q('Сколько килограммов в 3 тоннах?', ['300', '3000', '30 000'], 1),
  ],
  5: [
    q('Чему равно 8,4 − 3,7?', ['4,7', '5,3', '11,1'], 0), q('Вычисли: 2³', ['6', '8', '9'], 1),
    q('Найди x: 5x = 45', ['5', '9', '40'], 1), q('Переведи 3/10 в десятичную дробь.', ['0,03', '0,3', '3,0'], 1),
    q('Чему равны 20% от 50?', ['5', '10', '20'], 1), q('Какое число простое?', ['9', '15', '17'], 2),
    q('Объём куба с ребром 3 см равен…', ['9 см³', '18 см³', '27 см³'], 2),
  ],
  6: [
    q('Чему равно −8 − 5?', ['−13', '−3', '13'], 0), q('Вычисли: 3/4 + 1/4', ['1', '4/8', '3/8'], 0),
    q('Найди НОД чисел 18 и 24.', ['3', '6', '12'], 1), q('Отношение 12 к 4 равно…', ['2', '3', '4'], 1),
    q('Цена 500 ₽ снижена на 10%. Новая цена?', ['450 ₽', '490 ₽', '550 ₽'], 0), q('Координата точки на 5 единиц левее нуля — это…', ['−5', '0', '5'], 0),
    q('Раскрой скобки: −2(x − 3)', ['−2x − 6', '−2x + 6', '2x − 6'], 1),
  ],
  7: [
    q('Приведи подобные: 4x + 3x', ['7', '7x', '12x'], 1), q('Реши: 2x + 6 = 20', ['x = 7', 'x = 10', 'x = 13'], 0),
    q('Чему равно (a²)³?', ['a⁵', 'a⁶', 'a⁸'], 1), q('Если y = 3x и x = 4, то y равно…', ['7', '12', '16'], 1),
    q('Вертикальные углы…', ['Равны', 'В сумме дают 90°', 'Всегда разные'], 0), q('В равнобедренном треугольнике углы при основании…', ['Равны', 'Прямые', 'В сумме 90°'], 0),
    q('Среднее арифметическое чисел 6, 8 и 10 равно…', ['8', '9', '24'], 0),
  ],
  8: [
    q('Разложи: x² − 9', ['(x−3)(x+3)', '(x−9)(x+1)', '(x−3)²'], 0), q('Реши: x² − 4 = 0', ['x = 2', 'x = −2', 'x = ±2'], 2),
    q('Чему равен √0,81?', ['0,09', '0,9', '9'], 1), q('Функция y = 2x + 1 при x = 3 равна…', ['6', '7', '9'], 1),
    q('Сумма внутренних углов четырёхугольника равна…', ['180°', '360°', '540°'], 1), q('Средняя линия треугольника равна…', ['Половине основания', 'Основанию', 'Двум основаниям'], 0),
    q('Какой график у функции y = x²?', ['Прямая', 'Парабола', 'Окружность'], 1),
  ],
  9: [
    q('Реши неравенство: 2x > 10', ['x > 5', 'x < 5', 'x > 8'], 0, 'Экзаменатор ОГЭ'), q('Арифметическая прогрессия: 5, 8, 11… Разность равна…', ['2', '3', '5'], 1, 'Экзаменатор ОГЭ'),
    q('Площадь круга радиуса 3 равна…', ['3π', '6π', '9π'], 2, 'Экзаменатор ОГЭ'), q('График y = −2x + 4 пересекает ось Ox в точке x = …', ['−2', '2', '4'], 1, 'Экзаменатор ОГЭ'),
    q('Медиана набора 2, 4, 7, 9, 20 равна…', ['4', '7', '8,4'], 1, 'Экзаменатор ОГЭ'), q('Катеты равны 6 и 8. Гипотенуза равна…', ['10', '12', '14'], 0, 'Экзаменатор ОГЭ'),
    q('Сократи дробь (x²−4)/(x−2).', ['x−2', 'x+2', 'x²+2'], 1, 'Экзаменатор ОГЭ'),
  ],
  10: [
    q('Чему равен cos 60°?', ['0', '1/2', '√3/2'], 1), q('Реши: log₃x = 2', ['x = 6', 'x = 8', 'x = 9'], 2),
    q('В геометрической прогрессии 2, 6, 18… знаменатель равен…', ['2', '3', '4'], 1), q('Чему равен sin²x + cos²x?', ['0', '1', '2'], 1),
    q('Реши: 3ˣ = 27', ['x = 3', 'x = 9', 'x = 24'], 0), q('Вектор (3, 4) имеет длину…', ['5', '7', '12'], 0),
    q('Сфера имеет…', ['Одно измерение', 'Два измерения', 'Три измерения'], 2),
  ],
  11: [
    q('Производная sin x равна…', ['cos x', '−cos x', 'sin x'], 0, 'Экзаменатор ЕГЭ'), q('∫₀¹ x dx равен…', ['1/2', '1', '2'], 0, 'Экзаменатор ЕГЭ'),
    q('Реши: ln x = 0', ['x = 0', 'x = 1', 'x = e'], 1, 'Экзаменатор ЕГЭ'), q('Конус имеет радиус 3 и высоту 4. Его объём равен…', ['12π', '24π', '36π'], 0, 'Экзаменатор ЕГЭ'),
    q('Вероятность суммы 7 при двух кубиках равна…', ['1/12', '1/6', '1/3'], 1, 'Экзаменатор ЕГЭ'), q('Минимум функции x² + 2 равен…', ['0', '2', '4'], 1, 'Экзаменатор ЕГЭ'),
    q('Если f(x)=x², то f′(3) равно…', ['3', '6', '9'], 1, 'Экзаменатор ЕГЭ'),
  ],
  12: [
    q('Скалярное произведение (1,2)·(3,4) равно…', ['7', '10', '11'], 2, 'Доцент первого курса'), q('Предел sin x / x при x → 0 равен…', ['0', '1', '∞'], 1, 'Доцент первого курса'),
    q('Ранг ненулевой матрицы 2×2 с пропорциональными строками равен…', ['0', '1', '2'], 1, 'Доцент первого курса'), q('Производная eˣ равна…', ['eˣ', 'xeˣ⁻¹', 'ln x'], 0, 'Доцент первого курса'),
    q('Решение y′ = 0 имеет вид…', ['y = C', 'y = x', 'y = eˣ'], 0, 'Доцент первого курса'), q('Комплексное число i² равно…', ['1', '−1', 'i'], 1, 'Доцент первого курса'),
    q('Сумма 1 + 1/2 + 1/4 + … равна…', ['1', '2', '∞'], 1, 'Доцент первого курса'),
  ],
  13: [
    q('Сколько перестановок у трёх элементов?', ['3', '6', '9'], 1, 'Профессор второго курса'), q('Матрица, обратная единичной, — это…', ['Нулевая', 'Единичная', 'Любая'], 1, 'Профессор второго курса'),
    q('Дисперсия постоянной величины равна…', ['0', '1', 'Константе'], 0, 'Профессор второго курса'), q('Граф без циклов называется…', ['Деревом', 'Кликой', 'Контуром'], 0, 'Профессор второго курса'),
    q('Число подмножеств множества из 4 элементов равно…', ['8', '16', '24'], 1, 'Профессор второго курса'), q('Условие сходимости метода Ньютона связано с…', ['Производной', 'Цветом графика', 'Единицами измерения'], 0, 'Профессор второго курса'),
    q('Интеграл по замкнутому контуру потенциального поля равен…', ['0', '1', '∞'], 0, 'Профессор второго курса'),
  ],
  14: [
    q('Товар купили за 800 ₽ и продали за 1000 ₽. Наценка равна…', ['20%', '25%', '80%'], 1, 'Отдел финансов'), q('В команде 8 человек. Двое в отпуске. Доступно…', ['6', '8', '10'], 0, 'Отдел кадров'),
    q('Задача началась в 10:30 и заняла 2 ч 45 мин. Когда закончилась?', ['12:45', '13:15', '13:45'], 1, 'Отдел дедлайнов'), q('Из 40 заявок выполнено 32. Это…', ['75%', '80%', '90%'], 1, 'Отдел отчётов'),
    q('Выручка выросла со 100 до 125 тысяч. Рост составил…', ['20%', '25%', '125%'], 1, 'Начальник центра'), q('Пять коробок весят по 12 кг. Общий вес?', ['17 кг', '50 кг', '60 кг'], 2, 'Склад'),
    q('Что важнее сделать перед срочной задачей?', ['Уточнить срок и результат', 'Сразу паниковать', 'Удалить письмо'], 0, 'Начальник центра'),
  ],
};

Object.entries(lessonExtras).forEach(([key, extras]) => lessons[key].push(...extras));

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
let attemptNumber = 0;
let playerName = '';
let playerGender = 'boy';
let audioContext = null;
let trafficTimer = null;

function playPassingCar() {
  if (!audioContext) return;
  const now = audioContext.currentTime;
  const duration = 2.2 + Math.random() * 1.2;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const panner = audioContext.createStereoPanner();
  oscillator.type = 'sawtooth';
  oscillator.frequency.setValueAtTime(55 + Math.random() * 25, now);
  oscillator.frequency.exponentialRampToValueAtTime(38, now + duration);
  filter.type = 'lowpass';
  filter.frequency.value = 260;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.055, now + duration * 0.45);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  panner.pan.setValueAtTime(-1, now);
  panner.pan.linearRampToValueAtTime(1, now + duration);
  oscillator.connect(filter).connect(gain).connect(panner).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration);
}

function startStreetAudio() {
  audioContext ||= new AudioContext();
  audioContext.resume();
  clearInterval(trafficTimer);
  playPassingCar();
  trafficTimer = setInterval(playPassingCar, 4200);
}

function stopStreetAudio() {
  clearInterval(trafficTimer);
  trafficTimer = null;
}

function shuffledAnswers(riddle) {
  const choices = riddle.answers.map((answer, index) => ({ answer, correct: index === riddle.correct }));
  for (let index = choices.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [choices[index], choices[swapIndex]] = [choices[swapIndex], choices[index]];
  }
  return {
    ...riddle,
    answers: choices.map((choice) => choice.answer),
    correct: choices.findIndex((choice) => choice.correct),
  };
}

function choice(items, seed) {
  return items[Math.abs(seed) % items.length];
}

function personalizedRiddle(riddle, index) {
  const seed = attemptNumber * 7 + index;
  const genitiveNames = ['Маши', 'Кати', 'Веры', 'Нины', 'Сони', 'Фили'];
  const firstNames = ['Коли', 'Пети', 'Фили', 'Димы', 'Саши', 'Вовы'];
  let result = { ...riddle, answers: [...riddle.answers] };

  if (riddle.question.startsWith('У Маши было 5 яблок')) {
    const first = 4 + (seed % 4);
    const added = 2 + (seed % 3);
    const total = first + added;
    const name = choice(genitiveNames, seed);
    const item = choice(['яблок', 'конфет', 'карандашей'], seed + 1);
    result.question = `У ${name} было ${first} ${item}. Дали ещё ${added}. Сколько стало?`;
    result.answers = [String(total - 1), String(total), String(total + 1)];
    result.correct = 1;
  } else if (riddle.question.startsWith('На ветке сидели 9 птиц')) {
    const before = 7 + (seed % 4);
    const gone = 2 + (seed % 2);
    const left = before - gone;
    result.question = `Во дворе играли ${before} ребят. ${gone} ушли домой. Сколько осталось?`;
    result.answers = [String(left - 1), String(left), String(before + gone)];
    result.correct = 1;
  } else if (riddle.question.startsWith('У Коли 3 машинки')) {
    const first = 2 + (seed % 4);
    const second = 1 + ((seed + 2) % 4);
    const nameOne = choice(firstNames, seed);
    const nameTwo = choice(firstNames, seed + 3);
    result.question = `У ${nameOne} ${first} конфеты, а у ${nameTwo} ${second}. Сколько конфет всего?`;
    result.answers = [String(first + second), String(first + second - 1), String(first + second + 2)];
    result.correct = 0;
  } else if (riddle.question.startsWith('В корзине 8 груш')) {
    const before = 6 + (seed % 5);
    const eaten = 1 + (seed % 2);
    const item = choice(['груш', 'яблок', 'слив'], seed);
    result.question = `В корзине было ${before} ${item}. ${eaten} съели. Сколько осталось?`;
    result.answers = [String(before - eaten - 1), String(before - eaten), String(before + eaten)];
    result.correct = 1;
  } else {
    result.question = result.question
      .replace('Маши', choice(genitiveNames, seed))
      .replace('Коли', choice(firstNames, seed))
      .replace('Вани', choice(firstNames, seed + 2))
      .replace('Лены', choice(genitiveNames, seed + 3));
  }
  return result;
}

function prepareAttempt() {
  const source = lessons[selectedMode.id];
  const shift = attemptNumber % source.length;
  riddles = [...source.slice(shift), ...source.slice(0, shift)]
    .map(personalizedRiddle)
    .map(shuffledAnswers);
}

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
  attemptNumber = 0;
  prepareAttempt();
  document.querySelector('#modeBadge').textContent = `${mode.label} · ${mode.subject || 'Математика'}`;
  document.querySelector('#roadMode').textContent = `${mode.label} · ${mode.subject || 'Математика'} · Где-то очень далеко от дома`;
  startMode();
}

function startSchoolLesson(mode) {
  selectMode(mode);
  showScene('chamber');
  showRiddle();
}

function showScene(id) {
  scenes.forEach((scene) => scene.classList.toggle('active', scene.id === id));
  document.querySelector('#game').dataset.scene = id;
  if (id === 'shopWalk' || id === 'centerOffer') startStreetAudio();
  else stopStreetAudio();
}

function startMode(changeQuestions = false) {
  if (changeQuestions) {
    attemptNumber += 1;
    prepareAttempt();
  }
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
  iq = Math.min(100, iq + 1);
  iqElement.textContent = String(iq);
  hintElement.textContent = 'Правильно. IQ плюс один.';
  riddleIndex += 1;
  setTimeout(() => {
    if (riddleIndex === riddles.length) {
      const isLastMode = selectedMode.id === modes.length;
      document.querySelector('#victoryText').textContent = isLastMode
        ? `Ты прошёл все режимы и сохранил ${iq} IQ! Теперь центр исполнит желание.`
        : `Все 10 этапов пройдены. Твой результат — ${iq} IQ. Следующая дверь открыта.`;
      document.querySelector('#againButton').textContent = iq >= 100
        ? 'Получить желание'
        : selectedMode.id === 1 ? 'Перейти во второй класс' : isLastMode ? 'Начать заново' : 'Следующий класс';
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
document.querySelector('#retryButton').addEventListener('click', () => startMode(true));
document.querySelector('#againButton').addEventListener('click', () => {
  if (iq >= 100) {
    document.querySelector('#dreamTitle').textContent = `${playerName}! Просыпайся!`;
    document.querySelector('#dreamWakeText').textContent = `Голос зовёт: «${playerName}, ты проспишь всё на свете!» На часах 07:00 — то самое утро первого класса.`;
    showScene('dreamEnding');
    return;
  }
  if (selectedMode.id === 1) {
    startSchoolLesson(modes[1]);
    return;
  }
  if (selectedMode.id === 2) {
    document.querySelector('#secondMorningTitle').textContent = `${playerName}, просыпайся! Ты уже во втором классе.`;
    showScene('secondMorning');
    return;
  }
  if (selectedMode.id === modes.length) {
    iq = 0;
    iqElement.textContent = '0';
    showScene('modes');
    return;
  }
  selectMode(modes[selectedMode.id]);
});
buildModes();

document.querySelector('#profileForm').addEventListener('submit', (event) => {
  event.preventDefault();
  playerName = document.querySelector('#playerName').value.trim();
  if (!playerName) return;
  playerGender = document.querySelector('input[name="gender"]:checked').value;
  const firstGrader = playerGender === 'girl' ? 'первоклассница' : 'первоклассник';
  document.querySelector('#morningTitle').textContent = `${playerName}, просыпайся!`;
  document.querySelector('#morningText').textContent = `Сегодня ты ${firstGrader}. Из кухни слышится голос: «После школы сходи, пожалуйста, в магазин за молоком».`;
  document.querySelector('#game').dataset.gender = playerGender;
  showScene('morning');
});

document.querySelector('#wakeButton').addEventListener('click', () => showScene('shopWalk'));
document.querySelector('#firstClassButton').addEventListener('click', () => startSchoolLesson(modes[0]));
document.querySelector('#secondShopButton').addEventListener('click', () => {
  document.querySelector('#offerTitle').textContent = `${playerName}, рядом с магазином вырос огромный торговый центр.`;
  showScene('centerOffer');
});
document.querySelector('#acceptButton').addEventListener('click', () => startSchoolLesson(modes[2]));
document.querySelector('#checkCenterButton').addEventListener('click', () => {
  const endingWord = playerGender === 'girl' ? 'прибежала' : 'прибежал';
  const sawWord = playerGender === 'girl' ? 'увидела' : 'увидел';
  document.querySelector('#emptyText').textContent = `${playerName} ${endingWord} со всей силы — но вместо огромного центра ${sawWord} только траву и старый пустой забор. Значит, всё это действительно было сном.`;
  showScene('emptySite');
});
document.querySelector('#newStoryButton').addEventListener('click', () => {
  iq = 0;
  iqElement.textContent = '0';
  document.querySelector('#playerName').value = '';
  showScene('profile');
});
