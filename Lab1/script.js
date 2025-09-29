
let myName = "Святослав";
let list = document.getElementById("myNameList");

for (let i = 0; i < myName.length; i++) {
  let li = document.createElement("li");
  li.innerText = myName[i];
  li.onmouseover = function() {
    alert(myName[i]);
  }
  list.appendChild(li);
}

function askNames() {
  while (true) {
    let fullName = prompt("Введіть прізвище та ім'я:");
    if (fullName === null) {
      break;
    }
    let div = document.getElementById("names");
    div.innerHTML += "<p>" + fullName + "</p>";
  }
}

let isShown = false;
function showBlocks() {
  let container = document.getElementById("letters");
  if (!isShown) {
    let surname = "Юрків"; 
    for (let i = 0; i < surname.length; i++) {
      let block = document.createElement("div");
      block.innerText = surname[i];
      block.onmouseover = function() {
        alert("Це літера [ " + surname[i]+" ]");
      }
      container.appendChild(block);
    }
    isShown = true;
  } else {
    container.innerHTML = "";
    isShown = false;
  }
}