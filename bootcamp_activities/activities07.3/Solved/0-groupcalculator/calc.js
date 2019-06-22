
var config = {
      apiKey: "AIzaSyBfyrrmUqygTJxX-TNfAAbGOpZRcbr19uY",
      authDomain: "recent-user-with-set-chris.firebaseapp.com",
      databaseURL: "https://recent-user-with-set-chris.firebaseio.com",
      projectId: "recent-user-with-set-chris",
      storageBucket: "recent-user-with-set-chris.appspot.com",
      messagingSenderId: "771666105922"
};



firebase.initializeApp(config);

var database = firebase.database();

var total;
// 2. Button for adding Employees
$("#calc").on("click", function(event) {
  event.preventDefault();

  var firstDigit = parseInt($("#firstDigit").val().trim());
  var secondDigit = parseInt($("#secondDigit").val().trim());
  var operator = $("#operator").val().trim();

  if (operator=='+'){
    total = firstDigit + secondDigit;
  }


  var newCalc = {
    firstDigit: firstDigit,
    secondDigit: secondDigit,
    operator: operator,
    total: total
  };


  database.ref().push(newCalc);



  console.log(newCalc.firstDigit);
  console.log(newCalc.secondDigit);
  console.log(newCalc.operator);

  database.ref('/total').set({total: 15});

  $("#firstDigit").val("");
  $("#secondDigit").val("");
  $("#operator").val("");
  $("#total").val("");
});




database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());


  var firstDigit = childSnapshot.val().firstDigit;
  var secondDigit = childSnapshot.val().secondDigit;
  var operator = childSnapshot.val().operator;
  var total = childSnapshot.val().total;



  console.log(firstDigit);
  console.log(secondDigit);
  console.log(operator);


  // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(firstDigit),
    $("<td>").text(operator),
    $("<td>").text(secondDigit),
    $("<td>").text(total)
  );

  // Append the new row to the table
  $("#calculator-table > tbody").append(newRow);
});
