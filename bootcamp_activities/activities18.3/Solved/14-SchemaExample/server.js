// Our newest addition to the dependency family
var mongoose = require("mongoose");

// Requiring the `Example` model for accessing the `examples` collection
var Example = require("./exampleModel.js");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/schemaexample", { useNewUrlParser: true });

// Alternative Mongo DB Connection 
// var url = 'mongodb://localhost/schemaexample';
// mongoose.connect(url, function(err, db) {
//   if (!err){
//     console.log("Connected correctly to server");
//   }
//   db.close();
// });

// Create an object containing dummy data to save to the database
var data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: Math.floor(Math.random() * 10000)
};

// Save a new Example using the data object
Example.create(data)
  .then(function(dbExample) {
    // If saved successfully, print the new Example document to the console
    console.log(dbExample);
  })
  .catch(function(err) {
    // If an error occurs, log the error message
    console.log(err.message);
  });
