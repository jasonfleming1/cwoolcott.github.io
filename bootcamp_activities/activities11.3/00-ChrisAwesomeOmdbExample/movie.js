var request = require("request");

// Create the Movie constructor
var Movie = function() {

  this.findMovie = function(movieTitle) {

      let URL = {
        url: "http://www.omdbapi.com/?t=" + movieTitle.trim() + "&y=&plot=short&apikey=trilogy"
      }

      request(URL, function(err, response, body) {
        // Parse the response body (string) to a JSON object
        var jsonData = JSON.parse(body);

        // movieData ends up being the string containing the show data we will print to the console
        var movieData = [
          "Plot: " + jsonData.Plot,
          "Actors: " + jsonData.Actors
        ].join("\n\n");

        console.log(movieData);
      });
  };

};

module.exports = Movie;
