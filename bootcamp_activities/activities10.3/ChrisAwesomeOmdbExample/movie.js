var request = require("request");

// Create a new TV object
var movie = new Movie();

// Create the TV constructor
var Movie = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findMovie = function(movie) {

    var URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      // showData ends up being the string containing the show data we will print to the console
      var movieData = [
        "Movie: " + jsonData.Plot,
      ].join("\n\n");

    });
  };

};

module.exports = Movie;
