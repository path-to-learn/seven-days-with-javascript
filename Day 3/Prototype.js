/****

The JavaScript prototype property allows us to add specialized methods and properties to our custom objects and classes.
There may be occasions when you must specialize the functionality of an object in your application, and the prototype
 property allows us to do that. It also enables Object Inheritance in JavaScript.

 ****/

/*
Task

You are given a function, SquareSquare, that takes four parameters, AA, BB, CC and DD, denoting the length
of the square's edges.
Using prototype properties, add a method to SquareSquare named isSquare

isSquare that prints true if a Square
object has equal edges and false if they are unequal.

*/

function Square(A, B, C, D){
    this.A = A;
    this.B = B;
    this.C = C;
    this.D = D;
}

Square.prototype.isSquare = function() {
  if((this.A === this.B) == (this.C === this.D ))
     console.info("true");
   else
     console.info("false");
};

var checkSquare = new Square(13,12,12,12);

checkSquare.isSquare();

/*

Another example of prototype

*/

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
}

var Arcanine = new Pokemon("Arcanine", "Fire", ["Ember", "Bite", "FlameThrower"]);
var Pikachu = new Pokemon("Pikachu", "Electric", ["Tail Whip", "ThunderBolt", "Agility"]);
var Blastoise = new Pokemon("Blastoise", "Water", ["Water Gun", "Hydro Cannon", "Hyper Beam"]);


Pokemon.prototype.callPokemon = function(){
	console.log(`I choose you, ${this.name}!`);
};

Pokemon.prototype.attack = function(attack_number){
	console.log(`${this.name}! use ${this.attackList[attack_number]}.`);
};

Pikachu.callPokemon();
Arcanine.callPokemon();
Blastoise.callPokemon();

Pikachu.attack(1);
Arcanine.attack(2);
Blastoise.attack(2);
