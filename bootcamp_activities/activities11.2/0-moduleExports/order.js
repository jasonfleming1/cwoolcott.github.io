// requiring our Entree module exported from entree.js
var Entree = require("./entree.js");

// creating and storing a new Entree object called bobsOrder
var bobsOrder = new Entree("Cheeseburger");

// calling the addSide method on our bobsOrder object
bobsOrder.addSide("Fries");
bobsOrder.addSide("OnionRings");

console.log("--------")
console.log(bobsOrder.entreeName);
for (i=0; i<bobsOrder.sides.length; i++){
	console.log(bobsOrder.sides[i].name);
}
console.log("--------")