const orders = [
  { orderId: 1, customer: { name: "Святослав", email: "svyatolslav@gmail.com" }, items: ["Телефон", "Навушники"], total: 5000 },
  { orderId: 2, customer: { name: "Богдан", email: "bohdan@gmail.com" }, items: ["Ноутбук"], total: 15000 },
  { orderId: 3, customer: { name: "Ростислав", email: "rostislav@gmail.com" }, items: ["Мишка", "Клавіатура"], total: 2000 }
];

function getTotalSpentByCustomer(orders, customerName) {
  return orders
    .filter(order => order.customer.name === customerName)
    .reduce((sum, order) => sum + order.total, 0);
}

console.log(getTotalSpentByCustomer(orders, "Святослав"));

const products = [
  { productId: 1, name: "Телефон", price: 3000 },
  { productId: 2, name: "Ноутбук", price: 15000 },
  { productId: 3, name: "Мишка", price: 500 }
];

const purchases = [
  { purchaseId: 1, productId: 1, quantity: 2 },
  { purchaseId: 2, productId: 2, quantity: 1 },
  { purchaseId: 3, productId: 3, quantity: 4 }
];

function getTotalSales(products, purchases) {
  return purchases.reduce((acc, purchase) => {
    const product = products.find(p => p.productId === purchase.productId);
    if (product) {
      acc[product.name] = (acc[product.name] || 0) + product.price * purchase.quantity;
    }
    return acc;
  }, {});
}

console.log(getTotalSales(products, purchases));
