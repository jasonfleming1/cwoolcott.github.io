// Animal Constructor
function Animal(typeOfAnimal, raining, noise){
    this.type = typeOfAnimal;
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function (){
    	if (this.raining===true){
        	console.log(this.noise);
    	}
    }
}

//New Objects
var dogs = new Animal("dog", true, "Woof!");
var cats = new Animal("cat", false, "Meeeoww!");

// Assigning Unique properties
dogs.affection = true;

console.log("Cat's are affectionate: " + cats.affection); //Undef
console.log("Dog's are affectionate: " + dogs.affection); // true


// Prototype assigns new properties to Constructor!
Animal.prototype.tail = true;
Animal.prototype.paws = true;

Animal.prototype.getPetFood = function(){
    if (this.type=="cat"){
        console.log("Get Cat Food");
    }
    else{
        console.log("Get Dog Food");
    }
}
//cats.hairColor = "white"

console.log("Dog's have a tail: " + dogs.tail); // true
console.log("Cat's have a tail: " + cats.tail); // true

console.log("Dog's have hair color of: " + dogs.hairColor); // true
console.log("Cat's have hair color of: " + cats.hairColor); // true

cats.getPetFood();