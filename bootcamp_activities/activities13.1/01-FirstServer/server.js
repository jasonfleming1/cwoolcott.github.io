// Http module
var http = require("http");

var PORT = 8080;

function handleRequest(request, response){

  response.end("It Works! " + request.url);
  
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Listening on Port " + PORT)
})
