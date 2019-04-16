/*
Curl:

curl -i -H "Accept: application/json" -X GET -d "{\"productName\":\"Table\"}" http://localhost:8080
curl -i -H "Accept: application/json" -X POST -d "{\"productName\":\"Table\"}" http://localhost:8080
curl -i -H "Accept: application/json" -X PUT -d "{\"productName\":\"Table\"}" http://localhost:8080
curl -i -H "Accept: application/json" -X DELETE -d "{\"productName\":\"Table\"}" http://localhost:8080

Postman: (Body Tab - raw - JSON)
{"productName":"A Pepsi 12oz"}

*/

// Dependencies
var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function handleRequest(req, res) {


  // Saving the request data as a variable
  var requestData = "";

  // When the server receives data...
  req.on("data", function(data) {

    // Add it to requestData.
    requestData += data;
  });

  // When the request has ended...
  req.on("end", function() {

    // Log (server-side) the request method, as well as the data received!
    //console.log("You did a " + req.method + " with the data:");
        // convert Get input as JSON

    //Check if JSON is Being Passed
    if (isJson(requestData)){

      var obj = JSON.parse(requestData);

      var actionFromPost; 

      switch (req.method){
      case "GET": 
        actionFromPost = "Get info on";
        break;
      case "POST":
        actionFromPost = "Insert Cart with";
        break;
      case "PUT":
        actionFromPost = "Update Cart with"
        break;
      case "DELETE":
        actionFromPost = "Delete from cart"
        break;
      default:
        actionFromPost = req.method
        break;
      }

      //Send to Log
      console.log(actionFromPost + " " + obj.productName);

      //Send to Client
      res.end(actionFromPost + " " + obj.productName);

    }
    else{

      res.end("Tried " + req.method + ", but didn't get any data.");

    }

  });

}

// Start our server
server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
