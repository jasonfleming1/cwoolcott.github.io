var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("hbs", exphbs({ defaultLayout: 'main', extname: '.hbs'}));
app.set("view engine", "hbs");

require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
