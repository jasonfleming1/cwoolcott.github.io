var randomMealArray = ['Hamburger','Nuggets','Salad','Lobster'];
var meal = randomMealArray[Math.floor(Math.random()*randomMealArray.length)];

function logBefore(func, message) {
  console.log(message);
  func();
}

function addMcPrefix(){
  var prefix = "Mc";
  console.log(prefix + meal)
}

logBefore(addMcPrefix,"Test Meal: " + meal);

