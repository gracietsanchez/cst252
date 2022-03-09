/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 03.08.22
*Licsense: Public Domain
**/

//create and append button to <div id="output">
$("#output").append("<button id=my-button>Click Here!");

//add alert when button is clicked
$("#my-button").click(function(){
  alert("I am an alert!");
})

//style the button
$("#my-button").css("background-color", "#DE95B3");
$("#my-button").css("color", "#FAC2E1");
$("#my-button").css("padding", "10px");
