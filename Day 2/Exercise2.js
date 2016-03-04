/*
Task

Given a variable named my_heightmy_height, you must throw errors under the following conditions:

notANumberError - When my_height is NaN.
hugeHeightError - When my_height is greater than 1010.
tinyHeightError - When my_height is less than 44.
If you catch one of the errors above, print the error name; otherwise, print my_height.

Sample Input 0
seven
Sample Output 0
notANumberError

Sample Input 1
77
Sample Output 1
hugeHeightError

Sample Input 2
0
Sample Output 2
tinyHeightError

Sample Input 3
8
Sample Output 3
8

*/

//Following is overly engineered..... I tried it :)
function processData(my_height) {

 try{

   if (typeof my_height === 'string' && isNaN(my_height))
     {
        throw "notANumberError";
     }
   else
      {
        if(typeof my_height === 'string') {
            my_height = eval(my_height);
        }
       if (my_height >10) {
          throw "hugeHeightError";
        } else if (my_height <4) {
            throw "tinyHeightError";
          }
     console.log(my_height);
   }
} catch(err) {
     console.log(err);
} finally {

  }
}

// Below is more simplified..

function processData(my_height) {

try{
    if(isNaN(my_height)) // this takes of number in string format too...no need for typeof and then eval
        throw new Error("notANumberError");
    else if(my_height > 10)
        throw new Error("hugeHeightError");
    else if(my_height < 4)
        throw new Error("tinyHeightError");
    else
        console.log(my_height);
}
catch(err){
    console.log(err.message);
}
}
