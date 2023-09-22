/*Example 3 - Array of objects

Write a function `calcTotalPrice(stones, stoneName)` that takes an array
of objects and a string with the name of the stone. The function calculates and returns
the total cost of stones with the same name, price and quantity from the object.
*/

const stones = [
  { name: "Emerald", price: 1300, quantity: 4 },
  { name: "Diamond", price: 2700, quantity: 3 },
  { name: "Sapphire", price: 400, quantity: 7 },
  { name: "Rubble", price: 200, quantity: 2 },
];
console.log(stones);

/*
  ^for...of
*/

let totalCost = 0;

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) {
      totalCost = stone.price * stone.quantity;
      
      return `${totalCost} = ${stone.price} * ${stone.quantity}`
    }
  }

  return `The stone is not in the list`
}

console.log(calcTotalPrice(stones, "Emerald"));
console.log(calcTotalPrice(stones, "Diamond"));
console.log(calcTotalPrice(stones, "Sapphire"));
console.log(calcTotalPrice(stones, "Rubble"));



/*
  ^Varianta mea: creata o proprietate noua --> totaLCost
*/

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     stone.totalCost = stone.price * stone.quantity;

//     if (stone.name === stoneName) {
//       return `${stone.totalCost} = ${stone.price} * ${stone.quantity}`;
//     }
//   }

//   return `Piatra nu se afla in lista`;
// }

// console.log(calcTotalPrice(stones, "Diamond"));