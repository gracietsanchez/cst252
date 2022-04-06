/*
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 04.05.2022
*License: Public Domain
**/

//Create Constructor named vehicle
//Store: make, model, year and extras as parameters
function Vehicle (make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
//add info to Constructor
  this.info = function(){
//return string with info
  return("A " + this.color + " " + this.make + " " + this.model +
   " made in " + this.year + ", it also has a " + this.extras);
  }
}

//create car object and reference info() method
var car = new Vehicle("Kia", "Optima", "2017", "white", "flower outline sticker");
  car.info();
//append output to output div
$("#output").append("<p id>" + "Car Info: " + car.info() + "</p>");
//create scooter object and reference info() method
var scooter = new Vehicle("Electric", "Scooter", "2021", "grey", "sticker");
  scooter.info();
//append output to output div
$("#output").append("<p>" + "Scooter Info: " + scooter.info() + "</p>");
