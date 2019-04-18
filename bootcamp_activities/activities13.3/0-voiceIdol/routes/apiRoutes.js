var singerData = require("../data/singerData");

module.exports = function(app) {

  app.get("/api/singers", function(req, res) {
    res.json(singerData);
  });

  app.post("/api/singers", function(req, res) {
  	// Could add  Server-side validation before pushing to array
    singerData.push(req.body); 
    res.json(req.body);
  });

};
