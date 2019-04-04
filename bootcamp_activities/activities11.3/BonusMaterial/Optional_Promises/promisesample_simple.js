let myFirstPromise = new Promise(function(resolve, reject){ // =>
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 1250);
});

console.log("TESTING1");

myFirstPromise.then(function(successMessage) { // =>
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});

console.log("TESTING2");