var cart = [];
var tempName = "";
var tempPrice = 0;

var countEl = document.getElementById("count-el");
var cartBody = document.getElementById("cart-table-body");
var totalEl = document.getElementById("total-sum");

function openQty(name, price) {
  tempName = name;
  tempPrice = price;
  document.getElementById("input-qty").value = 1;
  document.getElementById("modal-qty").style.display = "flex";
}

function confirmAdd() {
  var val = document.getElementById("input-qty").value;
  var quantity = Number(val);

  var product = {
    name: tempName,
    price: tempPrice,
    q: quantity,
  };
  cart.push(product);

  countEl.innerText = cart.length;

  document.getElementById("modal-qty").style.display = "none";
  document.getElementById("modal-ok").style.display = "flex";
}

function closeAll() {
  document.getElementById("modal-qty").style.display = "none";
  document.getElementById("modal-ok").style.display = "none";
  document.getElementById("modal-empty").style.display = "none";
}

function clickCart() {
  if (cart.length === 0) {
    document.getElementById("modal-empty").style.display = "flex";
  } else {
    showCart();
  }
}

function showCart() {
  closeAll();
  document.getElementById("catalog-view").style.display = "none";
  document.getElementById("cart-view").style.display = "block";

  cartBody.innerText = "";

  var totalMoney = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var sum = item.price * item.q;
    totalMoney = totalMoney + sum;

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = i + 1;
    tr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerText = item.name;
    tr.appendChild(td2);

    var td3 = document.createElement("td");
    td3.innerText = item.price + " грн";
    tr.appendChild(td3);

    var td4 = document.createElement("td");
    var spanQty = document.createElement("span");
    spanQty.innerText = item.q + " ";

    var btnChange = document.createElement("button");
    btnChange.innerText = "(змінити)";
    btnChange.onclick = (function (index) {
      return function () {
        changeOne(index);
      };
    })(i);

    td4.appendChild(spanQty);
    td4.appendChild(btnChange);
    tr.appendChild(td4);

    var td5 = document.createElement("td");
    td5.innerText = sum + " грн";
    tr.appendChild(td5);

    var td6 = document.createElement("td");
    var btnDel = document.createElement("button");
    btnDel.innerText = "Видалити";
    btnDel.onclick = (function (index) {
      return function () {
        deleteOne(index);
      };
    })(i);

    td6.appendChild(btnDel);
    tr.appendChild(td6);

    cartBody.appendChild(tr);
  }

  totalEl.innerText = totalMoney + " грн";
}

function goBack() {
  document.getElementById("cart-view").style.display = "none";
  document.getElementById("catalog-view").style.display = "block";
}

function deleteOne(index) {
  cart.splice(index, 1);
  countEl.innerText = cart.length;

  if (cart.length === 0) {
    goBack();
  } else {
    showCart();
  }
}
function changeOne(index) {
  var newQ = prompt("Введіть нову кількість:");
  if (newQ > 0) {
    cart[index].q = Number(newQ);
    showCart();
  }
}
