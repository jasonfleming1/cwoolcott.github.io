// Require dependencies.
var generate = require("../shared/generate");

// Generate array of given length.
var length = 140000000;
var stuff = generate(length);
var randomValue = stuff[Math.floor(Math.random() * length)];

for (var i = 0; i < stuff.length; i++) {
  
  if (stuff[i] === randomValue) {
  
    console.log(stuff[i] + " : " + randomValue);
  }
  else{
   // console.log(stuff[i] +  " is not " + randomValue);
  }
}

