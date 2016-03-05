/**

In all programming languages that sport object oriented features there is a concept known as "Inheritance".
Inheritance is when an object inherits all of the properties and methods of its parent object, to become a
specialized version of the parent object.

In JavaScript we use the prototype property to establish subclasses
that inherit the characteristics of our parent classes.

This results in a specialized subclass that can retain its own properties and methods, as well as inherit
all of the properties and methods of the parent class

**/

//example:

var Animal = function(){};
Animal.prototype.eat = function(){
	console.log("They eat food to survive.");
};

var Mammal = function(){};
Mammal.prototype = new Animal();      //Mammal inherits from Animals
Mammal.prototype.giveBirth = function(){
	console.log("They give birth to young ones.");
};

var elephant = new Mammal(); //Creating instance of type Mammal
elephant.eat();              //elephant can use the inherited method from Animal.
elephant.giveBirth();

console.log(elephant instanceof Mammal);
console.log(elephant instanceof Animal);

//outout:

//They eat food to survive.
//They give birth to young ones.
//true
//true
