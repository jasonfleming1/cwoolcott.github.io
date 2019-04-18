var path = require("path");

module.exports = function(app) {

  app.get("/singers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/singers.html"));
  });

  app.get("/addsinger", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addsinger.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
