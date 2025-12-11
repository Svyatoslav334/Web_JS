let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

const input = document.getElementById("newTask");
const list = document.getElementById("list");
let filter = "all";

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    tasks.push({
      text: input.value,
      done: false,
      time: new Date().toLocaleString(),
    });
    input.value = "";
    save();
    render();
  }
});

function render() {
  list.innerHTML = "";

  let showTasks = tasks.filter((t) => {
    if (filter === "done") return t.done;
    if (filter === "not") return !t.done;
    return true;
  });

  showTasks.forEach((task, index) => {
    let item = document.createElement("div");
    item.className = "task";

    let left = document.createElement("div");
    left.className = "left";

    if (!task.done) {
      let cb = document.createElement("input");
      cb.type = "checkbox";
      cb.onchange = () => {
        task.done = true;
        save();
        render();
      };
      left.appendChild(cb);
    }

    let text = document.createElement("span");
    text.textContent = task.text + " (" + task.time + ")";
    if (task.done) text.className = "done";

    text.ondblclick = () => editTask(task);

    left.appendChild(text);

    let del = document.createElement("span");
    del.textContent = "✖";
    del.className = "delete";
    del.onclick = () => {
      tasks.splice(tasks.indexOf(task), 1);
      save();
      render();
    };

    item.appendChild(left);
    item.appendChild(del);

    list.appendChild(item);
  });
}

function editTask(task) {
  let newText = prompt("Редагувати завдання:", task.text);
  if (newText !== null && newText.trim() !== "") {
    task.text = newText;
    save();
    render();
  }
}

function showAll() {
  filter = "all";
  render();
}
function showDone() {
  filter = "done";
  render();
}
function showNotDone() {
  filter = "not";
  render();
}

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

render();
