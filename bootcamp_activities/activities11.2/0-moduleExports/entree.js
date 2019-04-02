// requiring our Sides module exported from sides.js
var Side = require("./sides.js");

// constructor function for creating Entree objects
var Entree = function(entreeName) {
  // this.sides will hold all of our sides
  this.entreeName = "Mc" + entreeName;
  this.sides = [];

  this.addSide = function(name) {
    this.sides.push(new Side(name));
  };
};

// exporting our Entree constructor. We will require it in order.js
module.exports = Entree;
