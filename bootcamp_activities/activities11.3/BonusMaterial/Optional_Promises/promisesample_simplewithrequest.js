
const request = require('request');

function getUrl(){
     promise = new Promise(function(resolve, reject){
        
        request('https://google.com', function (error, response, body) {
           resolve(response.statusCode);
        });
    });

     promise.then(function(successMessage) { // =>
        console.log("Yay! " + successMessage);
    });


}


getUrl();