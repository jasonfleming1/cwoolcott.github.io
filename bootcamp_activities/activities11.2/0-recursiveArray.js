
var firstNames = ['Bob', 'Bill', 'Barb', 'Beth', 'Bart'];


//For Loop Array
var arrayForLoopFunction = function() {
  for (arrIndex = 0; arrIndex<firstNames.length; arrIndex++){
    console.log(firstNames[arrIndex]);
  }
  console.log("--------DONE--------");
}

arrayForLoopFunction();



// Recursive
var arrIndex = 0;

var arrayRecursiveFunction = function() {  
  if (arrIndex < firstNames.length) {
      console.log(firstNames[arrIndex]);
      arrIndex++;       
      arrayRecursiveFunction(); //calls self!
  }else{
    console.log("--------DONE--------");
  }
}

arrayRecursiveFunction();



