/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 03.08.22
*Licsense: Public Domain
**/

//prit all number from 1 to 200
for (let i = 1; i <= 200; i++) {

  var buildStr = "";
  //If the number is a multiple of 3,
  //print "Fizz" instead of the number.
  if (i % 3 == 0) {
    buildStr += "Fizz";
  }
//If number is a multiple of 5,
//Print "Buzz' instead of the number
if (i % 3 == 0) {
  buildStr += "Fizz";
}
//If the number is a multiple of 7
//Print "Boom" instead of the number
if (i % 7 == 0) {
  buildStr += "Boom";
}
if (buildStr != "") {
  console.log(buildStr + "!");
  $("#output").append("<p>" + buildStr + "!");
}
else {
  console.log(i);
  $("#output").append("<p>" + i);
}
}

if (buildStr == "") {
  $("#output").append(num + "<br>");
}
  else {
    $("#output").append(buildStr + '!' + "<br>");
  }
