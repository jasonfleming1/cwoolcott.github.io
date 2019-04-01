// creates an object and sets it to bird
var birds = {
  // creates the property "flying" and sets it to true
  flying: true,
  
  haswings: true,
  // creates the property "noise" and sets it to "Tweet!"
  noise: "Tweet!",
  // creates the method "makeNoise", prints birds.noise   if flying is true
  makeNoise: function() {
  // i.e. this.flying refers to the flying property of 'this' particular object
    if (this.flying === true) {
      console.log('Bird says ' + this.noise + ' ' + this.noise);
    }
  }
};

if (birds.haswings){
  console.log("Your Flying!");
}
birds.noise = "Ka-kaw";

birds.makeNoise();