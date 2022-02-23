/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 02.16.2022
*License: Public Domain
**/

//Define Variables
var myTransport = ["Kia Optima", "Walking" "Rides from Friends"];

var myMainRide = {
  make = 'Kia',
  model = "Optima",
  color = "White",
  year = 2017,
  age = function() {
    return 2022 - year;
  }
};

//output
document.writeIn("My Transport: " + myTansport + "<br>");
document.writeIn("My Main Ride: <pre>",
          JSON.stingify(myMainRide, null, '\t'), "</pre>");
