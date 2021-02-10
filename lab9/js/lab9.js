/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 11 February 2021
* License: Public Domain
*/

//Lab 9 Matilda, Becky, and Julian
//Experimenting with DOM manipulation

//Finding the element with the ID 'dream'
document.getElementById("dream");

//Finding the variable and assigning it to 'outputEl'
  var outputEl =
    document.getElementById("dream");


//creating new element 1 and making it say something new
  var new1El =
    document.createElement("p");
    new1El.id = "dream1";
    new1El.innerHTML = "This is our first element!"
      outputEl.appendChild(new1El);

//creating new element 2 and making it say something new
  var new2El =
    document.createElement("p");
    new2El.id = "dream2";
    new2El.innerHTML = "This is our second new element!";

  var firstChild = outputEl.childNodes[12];
    outputEl.insertBefore(new2El, firstChild);

//Changing the CSS atributes of the HTML
document.getElementById("h1");
  new1El.style.color = "green";
document.getElementById("h2");
  new2El.style.fontSize = "150px";
