require('dotenv').config();
var SecretProcess = require('./secretprocess');
var rickAndMorty = require('random-rick-and-morty-character');


console.clear();

var secretKey = new SecretProcess({
	firstName: process.env.FIRSTNAME,
	userName: process.env.USERNAME,
	password: process.env.PASSWORD
});

//console.log(secretKey.valid);
if (secretKey.secretMessage()){
	console.log(secretKey.secretMessage());
}
console.log("Your random character is " + rickAndMorty.rickAndMortyCharacter() + ".")