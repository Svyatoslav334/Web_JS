function createClient(name, contact, lastPurchaseDate, totalSpent, isActive) {
  return {
    name: name,
    contact: contact,
    lastPurchaseDate: lastPurchaseDate, 
    totalSpent: totalSpent,
    isActive: isActive,

    clientInfo: function() {
      return "Ім'я: " + this.name + ", Контакт: " + this.contact + 
             ", Остання покупка: " + this.lastPurchaseDate + 
             ", Витрачено: " + this.totalSpent + " грн" + 
             ", Активний: " + (this.isActive ? "Так" : "Ні");
    },

    markAsActive: function() {
      this.isActive = true;
    },

    toggleActive: function() {
      this.isActive = !this.isActive;
    }
  };
}

var clients = [
  createClient("Святослав Юрків", "+380501112233", "2024-11-05", 1250.5, true),
  createClient("Богдан Силюк", "+380631234567", "2023-06-18", 5400, false),
  createClient("Ростислав Іваськевич", "+380667778899", "2025-02-09", 320.75, true)
];

function displayClients(list) {
  list = list || clients;
  console.log("=== Список клієнтів ===");
  for (var i = 0; i < list.length; i++) {
    console.log((i+1) + ". " + list[i].clientInfo());
  }
}

function addClientFromPrompt() {
  var name = prompt("Введіть ім'я клієнта:");
  if (!name) return;

  var contact = prompt("Введіть контактний номер:");
  var dateInput = prompt("Введіть дату останньої покупки (YYYY-MM-DD):");
  var totalSpentInput = prompt("Введіть суму витрат:");
  var isActiveInput = prompt("Клієнт активний? (так/ні)");

  var newClient = createClient(
    name,
    contact,
    dateInput,
    totalSpentInput,
    isActiveInput.toLowerCase() == "так"
  );

  clients.push(newClient);
  displayClients();
}

// 3.1
function sortByLastPurchase() {
  clients.sort(function(a, b) {
    return new Date(a.lastPurchaseDate) - new Date(b.lastPurchaseDate);
  });
  console.log("=== Відсортовано за датою покупки ===");
  displayClients();
}

// 3.2
function getInactiveClients() {
  var inactive = [];
  for (var i = 0; i < clients.length; i++) {
    if (!clients[i].isActive) inactive.push(clients[i]);
  }
  console.log("=== Неактивні клієнти ===");
  displayClients(inactive);
}

// 3.3
function findIvanPetrov() {
  for (var i = 0; i < clients.length; i++) {
    if (clients[i].name == "Святослав Юрків") {
      console.log("Знайдено: " + clients[i].clientInfo());
      return;
    }
  }
  console.log("Клієнта Святослав Юрків не знайдено.");
}

// 3.4
function calculateAverageSpent() {
  if (clients.length == 0) return 0;
  var sum = 0;
  for (var i = 0; i < clients.length; i++) {
    sum += clients[i].totalSpent;
  }
  var avg = sum / clients.length;
  console.log("Середня сума витрат: " + avg.toFixed(2) + " грн");
  return avg;
}
