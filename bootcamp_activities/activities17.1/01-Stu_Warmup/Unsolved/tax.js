// Calculate
var calculateTax = function(price) {

  if (typeof price !== "number") {
  	//console.log(price.constructor)
    throw new Error("Parameter `price` is required and must be a number.");
  }

  return Number((price * 1.06875).toFixed(2));
};

module.exports = calculateTax;
