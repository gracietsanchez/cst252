/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 02.22.2022
*License: Public Domain:
**/

// Function asks for users name --> THen sortsletters of user input
function sortUserName() {
  //prompt asks user for sortUserName
  var userName = window.prompt("Hi there! Please input your name so we can sort it for you");
  console.log("userName: ", userName);
  //split string into array
  var nameArray = userName.split('');
  console.log("nameArray: ", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort: ", nameArraySort);
  //join array back into string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted: ", nameSorted);
  return nameSorted;
}

//Output
document.writeln("We have sorted your name: ",
sortUserName(), "</br>");
