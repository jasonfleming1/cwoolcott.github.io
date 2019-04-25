var gameOfThrones = [
  {
    name: "Daenerys",
    house: "Targaryen",
    houseImage: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/25/1466688518-sigil-of-house-targaryen.jpg?resize=480:*"  
  }, {
    name: "Sansa",
    house: "Stark",
    houseImage: "https://i.ytimg.com/vi/6BdY6sKQLHo/maxresdefault.jpg"
  }, {
    name: "Cersei",
    house: "Lannister",
    houseImage: "https://i.ytimg.com/vi/rcgBNyy2Pls/maxresdefault.jpg"
  }, {
    name: "Tyrion",
    house: "Lannister"
  }
];

var someArray = [];

// var data = {
//   gameOfThrones: gameOfThrones
// };

// Note how we export the array. This makes it accessible to other files using require.
module.exports = gameOfThrones;
