/*
Immediately Invoked Function Expressions (IIFEs) that run as soon as they are defined.

This is the self-invoking anonymous function. It is executed while it is defined.
Which means this function is defined and invokes itself immediate after the definition.

*/

var nam = 1;
(
  function () { // Variable defined within this function are not globle.
    var nam = 2;
    console.log("Am IIFE");
            }
) ();

console.log(nam); // prints 1

// Another example:

var sulphuricAcid = (function(){
	var corrosive = true;
	var pH = 2;
	return {
		  property: function(){
			console.log(`Corrosive : ${corrosive}`);
			console.log(`pH acidic : ${pH < 7}`);
		}
	};
})();

console.log(sulphuricAcid.pH);  // Outputs: undefined, we can't access private properties.
sulphuricAcid.property();

/* Output:

undefined
Corrosive : true
pH acidic : true

*/
