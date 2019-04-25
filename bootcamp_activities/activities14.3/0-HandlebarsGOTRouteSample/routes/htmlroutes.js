var gameOfThronesData = require("../data/gotdata");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index", {gameOfThrones:gameOfThronesData});
  });

  app.get("/:name", function(req, res) {
  //Gets Object from property
    let index = gameOfThronesData.findIndex(thisCharacter => thisCharacter.name.toLowerCase() === req.params.name.toLowerCase());

    // Does name exist
    if (index > -1){
      res.render("house", gameOfThronesData[index]);
    }
    else{
      res.render("index", {gameOfThrones:gameOfThronesData});
    }

  });

};