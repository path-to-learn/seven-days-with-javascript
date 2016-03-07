/*  A callback function is executed after the current effect is 100% finished. */

//Example:

downloadPhoto('http://download.com/image.gif', handlePhoto);

function handlePhoto (error, photo) {
  if (error)
    console.error('Download error!', error)
  else
    console.log('Download finished', photo)
}

function downloadPhoto(url,callback) {

   var timer = setTimeout(function () {  // using setTimeout to delay the time..and let initial flow complete..
     callback(false, "\nPhoto is dowloanded from :" + url);
    }, 1000);

}
console.log('Download started')

//Output:
/*
Download started
Download finished
Photo is dowloanded from :http://download.com/image.gif
*/

// Another Problem:

/*
Task

Write a myFiltermyFilter function that takes 22 parameters: my_arraymy_array and callbackcallback.
Here, my_arraymy_array is an array of strings and callbackcallback is a function that takes the elements
of my_arraymy_array as its parameter and returns a boolean true if the element is even or false if the element is odd.
The myFiltermyFilter function should return the filtered array.

Sample Input

4 5 6 7 8 9
Sample Output

[ 4, 6, 8 ]

*/


// Following is a basic solution:

function myFilter(my_array, callback){
    //Enter your code here
    var filterArray = [];
   for (a in my_array) {
       if (callback(my_array[a]))
         filterArray.push(my_array[a]);
   }
  return filterArray;
}

function processData(inputArray) {
    //In blank write anonymous function, which takes one parameter and returns true if its even or false if its odd.
    console.log(myFilter(inputArray,  function(num) {
        if (num%2===0)
            return true;
        else
            return false;
    }));
}

var aar = [2,4,5,6,7,8,9];

console.log(processData(aar));


// Note there is more shorter way of acheiving the desired result with arrow function introduced in ES6
/*
 Arrow function (x)=>x+1 denotes:
    function(x) {
	     return x+1
     }

*/
function myFilter(my_array, callback){
    return my_array.filter(callback);
}

function processData(inputArray) {
    console.log(myFilter(inputArray, x => !(x & 1)));
}

// Note: Another way of writing
/*
  If we assume x is an integer,
        x & 1 is the same as x % 2
        !(x & 1) is the same as (x % 2) == 0

*/
