var count = 0;

var nextNumber = function() {
  if (count < 5) {
  	 count++;
      console.log(count);
      nextNumber();
    }
    else 
    {
    console.log("All Done!");
  }
}

nextNumber();