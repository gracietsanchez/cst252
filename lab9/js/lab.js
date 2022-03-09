/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 03.02.2022
*License: Public Domain:
**/

//find output ,div. and assign outputEl
var outputEl = document.getElementById("output");

//create blue button
var oneEl = document.createElement("button");

//append blue button to outputEl and assign id
outputEl.appendChild(oneEl);
oneEl.id = "bluebutton";

//stylize blue bluebutton
oneEl.innerHTML = "Click Me";
oneEl.style.backgroundColor = "#ABDBF0";
oneEl.style.color = "white";
oneEl.style.fontSize = "30px";
oneEl.style.margin = "10px";

//create green button
var twoEl = document.creatElement("button");

//append pink button to outputEl and assign id
outputEl.appendChild(twoEl);
twoEl.id = "greenbutton";

//stylize green button
twoEl.innerHTML = "Click Me";
twoEl.style.backgroundColor = "#D1DEBD";
twoEl.style.color = "white";
twoEl.style.fontSize = "30px";
twoEl.style.margin = "10px";
