

var deduper = function (numArr){
  var newArr = [];
  for (var i = 0; i < numArr.length; i++){
    if(!newArr.includes(numArr[i])){
      newArr.push(numArr[i]);
      
    }
  }
  return newArr;
}

var testArray = [3,3,4,5,34,2];

console.log(deduper(testArray));
