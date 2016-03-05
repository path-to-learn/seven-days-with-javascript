 /*
 There are different ways to create new objects in JavaScript:

   -   Define and create a single object using the object literal {}{}.

   -   Define and create a single object with the keyword new.

   -   Define an object constructor and then create objects of the constructed type.

 A constructor is a function used for initializing new objects. You use the new keyword to call the constructor.
 You can learn more about the this keyword here.

 Constructors makes it easy to create multiple objects that have the same properties and methods.

 */

/* Following code tries to create an object constructor and shows how call can be made : */

var Car = function(maxSpeed,driver) {

  this.maxSpeed = maxSpeed;
  this.driver = driver;
  this.logDriver = function(){
    console.log("Driver Name via function call is:"  + this.driver);
  };

}

var myCar = new Car(60,"Aunty");
var mySportsCar = new Car(10,"Prashant");

myCar.logDriver();
mySportsCar.logDriver();

console.log("driver name via property access is : " + myCar.driver);
