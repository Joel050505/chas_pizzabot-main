const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

// Put your Javscript code here:
alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

let orderName = prompt(`Enter the name of the pizza you want to order today.`);

function checkOrderName(orderName) {
  if (
    orderName.toLowerCase() == vegetarian.toLowerCase() ||
    orderName.toLowerCase() == hawaiian.toLowerCase() ||
    orderName.toLowerCase() == pepperoni.toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

function totalCost(orderQuantity) {
  return (orderTotal = orderQuantity * pizzaPrice);
}
let timeTocook;
function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    timeTocook = "The pizzas will take 10 minutes";
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    timeTocook = "The pizzas will take 15 minutes";
  } else if (orderQuantity > 6) {
    timeTocook = "The pizzas will take 20 minutes";
  }
}

if (checkOrderName(orderName)) {
  let orderQuantity = prompt(`How many of ${orderName} do you want?`);

  totalCost(orderQuantity);
  cookingTime(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizza will take ${timeTocook} to make`
  );
} else {
  alert(`We only have ${vegetarian}, ${hawaiian} and ${pepperoni} on our menu`);
}
