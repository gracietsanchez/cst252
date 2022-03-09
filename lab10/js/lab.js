/**
*Author: Gracie Sanchez <grasanchez@csumb.edu>
*Created: 03.06.22
*License: Public Domain
**/

//find all elements
//find element button
buttonEl = document.getElementById("my-button");
console.log("button element:", inputEl);

//find the form elements
inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

//find output elements
outputEl = document.getElementById("output");
console.log("output element:", outputEl);


//function asks for users name --> Sorts letters of users namebadge
function sortUserName() {
  //prompt asks for users namebadge
  var userName=inputEl.value;
  console.log("userName: ", username);
  //split string into array
  var nameArray = userName.split('');
  console.log("nameArray", nameArray);
  //sort the nameArray
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort: ", NameArraySort);
  //join array back into string
  var nameSorted = nameArraySort.join('');
  consloe.log("nameSorted: ", nameSorted);
  return nameSorted;
}


//add an event listner to button
buttonEl.addEventListener("click", function(){
  //modify input value with Sortuser name function
  var newName = sortUserName();
  //replace the html in ,div id=output. with the Results
  outputEl.innerHTML = "Your new name: " + sortUserName();
}); 
