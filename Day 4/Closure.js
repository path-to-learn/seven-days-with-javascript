/**

 Closures are functions that refer to independent (free) variables. In other words, the function
 defined in the closure 'remembers' the environment in which it was created.

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain
The closure has three scope chains: it has access to its own scope (variables defined between its curly
 brackets), it has access to the outer function's variables, and it has access to the global variables
**/

//example:

function foo(item){
	var myPrivateItem = item;
	this.getPrivateData = function(){
		return myPrivateItem;
	};
}

var Tom = new foo('Some private data.');
console.log(Tom.myPrivateItem);		//Cannot access myPrivateItem directly.
console.log(Tom.getPrivateData());

//Output

// undefined
// Some private data.

// Another example: -
// See how in this example the function remembers the preserved data i.e closure.

/// define a function which returns a function and have closure defined as 'x'
function multiplier(x) {
   return function(y) {
         return x*y;
    };
}


var waterWeight = multiplier(2);
console.log(" ~## " + waterWeight);  // Preserves the value 2 !!!

// using the closure 'x' which is a presrved value - the inner function is executed by passing value 'y'
console.log(" ~~~## " + waterWeight(3));

//Output
/*
~## function (y) {
        return x*y;
   }
~~~## 6
*/
