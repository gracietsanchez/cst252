/**
* Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 03.29.22
*License: Public Domain
**/

function sortingHat(name) {
  //get length of users name
  var len = name.length;
  //do a mod 4 to sort into houses
  var mod = len % 4;
  //if conditional to set hoseStr to houses
  var houseStr;
  if (mod == 0) {
    houseStr = "Gryffindor";
  } else if (mod == 1) {
    houseStr = "Slytherin";
  } else if (mod == 2) {
    houseStr = "Hufflepuff";
  } else if (mod == 3) {
    houseStr = "Ravenclaw";
  }

  //resturn sorting house text
  return houseStr;
}

//find button and add click function
$("#my-button").click(function(){
  //declare and assign varibales to input and function
  var name = $("#input").val()
  var house = sortingHat(name);
  //replace div output with Results
  $("#output").html("Congratulations! You have been sorted into " + house);
});
