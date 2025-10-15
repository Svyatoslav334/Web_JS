// ====== 1) Генератор випадкових чисел ======

function* randomGenerator(min, max) {
  while (true) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

let min = +prompt("Введіть мінімальне число:");
let max = +prompt("Введіть максимальне число:");

const randomGen = randomGenerator(min, max);

const btnNext = document.getElementById("next");
const outDiv = document.getElementById("out");

btnNext.addEventListener("click", () => {
  const value = randomGen.next().value;
  outDiv.textContent = "Випадкове число: " + value;
});


// ====== 2) Генератор паролів ======

function* passwordGenerator() {
  let password = "";
  while (true) {
    const char = yield;
    if (char === "done") {
      return password;
    }
    password += char;
  }
}

const passGen = passwordGenerator();
passGen.next();

while (true) {
  let symbol = prompt("Введіть символ для пароля (або 'done' для завершення):");
  const result = passGen.next(symbol);

  if (symbol === "done") {
    alert("Ваш пароль: " + result.value);
    break;
  }
}


// ====== 3) Генератор діалогу (чат-бот) ======
function* chatBot() {
  const name = yield "Hi! What is your name?";
  yield "Nice to meet you, " + name + "! How are you?";
  yield "Goodbye!";
}

const bot = chatBot();
let question = bot.next().value;
while (true) {
  const answer = prompt(question);
  const next = bot.next(answer);
  if (next.done) break;
  question = next.value;
}


// ====== 4) Втрата контексту методом ======
const userName = prompt("Введіть своє ім'я:");

const person = {
  name: userName,
  say() {
    alert("Hello, " + this.name + "!");
  }
};

const helloBtn = document.getElementById("hello");
helloBtn.onclick = person.say.bind(person);
