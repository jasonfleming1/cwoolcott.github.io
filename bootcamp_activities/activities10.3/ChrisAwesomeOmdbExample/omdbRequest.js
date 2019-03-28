var request = require("request");
var Movie = require("./movie");

// Create a new TV object
var movie = new Movie();


var movieArgs = process.argv; 

var movieTitle = '';

for (i=2; i<movieArgs.length; i++){
	movieTitle += movieArgs[i] + ' ';
}


//console.log(movie.findMovie(movieTitle));
