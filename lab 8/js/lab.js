/**
* Author: gracie Sanchez <grasanchez@csumb.edu>
*Created: 02.27.2022
*License: Public Domain
**/

//function multiplies x by 2
function myFunction(x){
  return(x * 2);
}

//test function to see if it mutiplies correctly
console.log("what is 2 multiplied by 2?", myFunction(2));
console.log("what is 4 multiplied by 2?", myFunction(4));

a = [1200, 4000, 13, 20, 200, 4, 8, 1.5]
console.log("my array", a);

var result = a.map(myFunction);
//should double numbers of array, return: 2400, 8000, 26, 200, 4, 8, 16, 3
console.log("Multiply array by 2: ", results);

var result =a.map(function(x){
  return (x + 2);
})

Console.log("Add 2 to the array: ", results);
