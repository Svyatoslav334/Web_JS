// Завдання №1
document.write("<h3>Завдання №1</h3>");
let date1 = new Date(2021, 1, 20, 3, 12);
document.write("Дата: " + date1 + "<br><br>");


// Завдання №2
document.write("<h3>Завдання №2</h3>");
function getWeekDay(date) {
  let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}
let someDate = new Date(2025, 10, 12);
document.write("День тижня для " + someDate.toLocaleDateString() + " : " + getWeekDay(someDate) + "<br><br>");


// Завдання №3
document.write("<h3>Завдання №3</h3>");
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
document.write("Останній день лютого 2020 року: " + getLastDayOfMonth(2020, 1) + "<br><br>");


// Завдання №4
document.write("<h3>Завдання №4</h3>");
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = (tomorrow - now) / 1000;
  return Math.round(diff);
}
document.write("Секунд до завтра: " + getSecondsToTomorrow() + "<br><br>");


// Завдання №5
document.write("<h3>Завдання №5</h3>");
function formatDate(date) {
  let diff = new Date() - date;

  if (diff < 1000) return "прямо зараз";

  let sec = Math.floor(diff / 1000);
  if (sec < 60) return sec + " сек. назад";

  let min = Math.floor(diff / 60000);
  if (min < 60) return min + " хв. назад";

  let d = date;
  let day = ('0' + d.getDate()).slice(-2);
  let month = ('0' + (d.getMonth() + 1)).slice(-2);
  let year = ('' + d.getFullYear()).slice(-2);
  let hour = ('0' + d.getHours()).slice(-2);
  let minute = ('0' + d.getMinutes()).slice(-2);

  return `${day}.${month}.${year} ${hour}:${minute}`;
}

document.write("Приклад 1: " + formatDate(new Date(new Date() - 1)) + "<br>");
document.write("Приклад 2: " + formatDate(new Date(new Date() - 30 * 1000)) + "<br>");
document.write("Приклад 3: " + formatDate(new Date(new Date() - 5 * 60 * 1000)) + "<br>");
document.write("Приклад 4: " + formatDate(new Date(new Date() - 86400 * 1000)) + "<br>");
