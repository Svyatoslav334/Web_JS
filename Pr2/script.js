// 1. Додавання "0"
function addZero(num) {
  return (num < 10) ? "0" + num : num;
}

function task1() {
  document.getElementById("output").innerText =
    addZero(9) + ":" + addZero(5) + ":" + addZero(3);
}

// 2.1 Годинник + сповіщення через 60 секунд
function task21() {
  clearAllIntervals();
  let out = document.getElementById("output");

  function showTime() {
    let now = new Date();
    out.innerText = addZero(now.getHours()) + ":" + addZero(now.getMinutes()) + ":" + addZero(now.getSeconds());
  }

  showTime();
  window.timer = setInterval(showTime, 1000);

  setTimeout(() => alert("Пройшла ще одна хвилина!"), 60000);
}

// 2.2 Оновлення кожні 5 сек + закриття через 30 сек
function task22() {
  clearAllIntervals();
  let out = document.getElementById("output");

  function showTime() {
    out.innerText = new Date().toLocaleTimeString();
  }

  showTime();
  window.timer = setInterval(showTime, 5000);

  setTimeout(() => {
    alert("30 секунд минуло! Сторінка закривається.");
    window.close();
  }, 30000);
}

// 2.3 Поступовий годинник
function task23() {
  clearAllIntervals();
  let out = document.getElementById("output");
  let showMinutes = false;
  let showHours = false;

  function updateTime() {
    let now = new Date();
    let s = addZero(now.getSeconds());
    let text = s;

    if (showMinutes) text = addZero(now.getMinutes()) + ":" + text;
    if (showHours) text = addZero(now.getHours()) + ":" + text;

    out.innerText = text;
  }

  window.timer = setInterval(updateTime, 1000);
  setTimeout(() => showMinutes = true, 60000);
  setTimeout(() => showHours = true, 3600000);
}

// 2.4 Оновлення часу кожні 30 сек
function task24() {
  clearAllIntervals();
  let out = document.getElementById("output");

  function showTime() {
    out.innerText = new Date().toLocaleTimeString();
    alert("Оновлено час на сторінці!");
  }

  showTime();
  window.timer = setInterval(showTime, 30000);
}

// 2.5 Відображення часу + кнопка
function task25() {
  clearAllIntervals();
  let out = document.getElementById("output");

  out.innerHTML = `<span id="clock"></span><br><button id="btn">Оновити час</button>`;

  function updateTime() {
    document.getElementById("clock").innerText = new Date().toLocaleTimeString();
  }

  updateTime();
  document.getElementById("btn").onclick = updateTime;
}

// 3. Ефект друкарської машинки
function task3() {
  clearAllIntervals();
  let out = document.getElementById("output");
  out.textContent = "";
  let phrase = prompt("Введіть фразу для ефекту друкарської машинки:");
  let i = 0;

  function typeWriter() {
    if (i < phrase.length) {
      out.textContent += phrase.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  setTimeout(typeWriter, 500);
}

// 4. Гра зі ставкою
function task4() {
  clearAllIntervals();
  let bet = +prompt("Введіть суму ставки (грн):");
  let randomNum = Math.floor(Math.random() * 11) - 5

  setTimeout(() => {
    if (randomNum <= 0) {
      alert("Випало число " + randomNum + ". Ви не вгадали!");
    } else {
      let win = bet * randomNum;
      alert("Випало число " + randomNum + ". Ви виграли " + win + " грн!");
    }
  }, 1000);
}

function clearAllIntervals() {
  for (let i = 1; i < 99999; i++) {
    clearInterval(i);
    clearTimeout(i);
  }
}
