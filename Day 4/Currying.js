/*
Briefly, currying is a way of constructing functions that allows partial application of a function’s arguments.
What this means is that you can pass all of the arguments a function is expecting and get the result,
or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments.

It really is that simple :-).

*/

var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};
var greetHello = greetCurried("Hello");

greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"
greetCurried("Hello")("Didi"); // Hello, Didi


//Another example:
var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};
greetDeeplyCurried("Hello")(",")("!")(" Joe")
//output:
// Hello, Joe!


//using assignment operator:
"use strict"
let greetings = from =>
			message =>
            			recipient =>
                        		'Dear ${recipient},\n\t${message}\n${from}.';

let person = greetings("Jerry");
let message = person("Happy Birthday!")
let to = message('Tom')
console.log(to)

//OR

console.log(greetings('Jerry')("Happy Birthday!")('Tom'));


//output:
/*
Dear Tom,
    Happy Birthday!
Jerry.
Dear Tom,
    Happy Birthday!
Jerry.
*/
