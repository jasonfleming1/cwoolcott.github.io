
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// Converts form data into JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Makes public folder available for static assets
app.use(express.static('public'))

//Passes app to route files (could also just handle routes in this file)
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
