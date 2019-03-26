var inputString = process.argv;

var num1 = inputString[2];
var num2 = inputString[3];

var outputNum;

outputNum = parseFloat(num1) + parseFloat(num2);
//outputNum = num1 + num2;

console.log(outputNum);