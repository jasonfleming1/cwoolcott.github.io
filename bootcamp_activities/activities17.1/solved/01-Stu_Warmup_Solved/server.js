var calculateTax = require('./tax');

// Convert input to float, calculateTax will do the rest
var preTaxAmount = parseFloat(process.argv[2]);
console.log("Your MN state tax rate will be: " + calculateTax(preTaxAmount));
