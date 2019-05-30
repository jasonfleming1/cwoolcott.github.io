
const menu = [
  { item: "coffee", calories: 10 },
  { item: "fries", calories: 400 },
  { item: "cheeseburger", calories: 700 }
];

menu.forEach((menu) => {
  console.log(`The ${menu.item} has ${menu.calories} calories`);
});