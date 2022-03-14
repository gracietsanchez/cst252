/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 03.08.22
*Licsense: Public Domain
**/

//find challenge button and add click handler
$("#challenge-button").click(function(){
  //toggle chllenge div for text
  $("#challenge").toggleClass("blue");
  $("#challenge").removeClass("green");
})

//find problems button and add click handler
$("#problems-button").click(function(){
  //toggle problems div for text
  $("#problems").toggleClass("blue");
  $("#problems").removeClass("green");
})

//find results button and add click handler
$("#results-button").click(function(){
  //toggle results div for text
  $("#results").toggleClass("blue");
  $("#results").removeClass("green");
})
