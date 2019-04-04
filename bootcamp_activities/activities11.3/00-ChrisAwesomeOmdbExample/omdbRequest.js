// Basic Node application for requesting data from the OMDB website
// Here we incorporate the "request" npm package
var Movie = require("./movie");

// Create a new TV object
var movie = new Movie();

var movieArgs = process.argv; 

var movieTitle = '';

for (i=2; i<movieArgs.length; i++){
	movieTitle += movieArgs[i] + ' ';
}

console.log("Searching for Movie");
movie.findMovie(movieTitle);


