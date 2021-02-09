/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 8 February 2021
* License: Public Domain
*/

// Define Functions//

function firstThing(test) {
  console.log(test + " This is the first thing", "</br>");
}

function secondThing(test) {
  console.log(test + " This is the second thing", "</br>");
}

function thirdThing(test) {
  console.log(test + " This is the third thing", "</br>");
}

//call the functions for TEST 1
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//call the functions for TEST 2
setTimeout (function() {
  firstThing("TEST 2");
}, 0);
setTimeout (function() {
  secondThing("TEST 2");
}, 0);
setTimeout (function() {
  thirdThing("TEST 2");
}, 0);

//call the functions for TEST 3
setTimeout(function() {
  firstThing("TEST 3");
}, 6000);
setTimeout(function() {
  secondThing("TEST 3");
}, 2000);
setTimeout(function() {
  thirdThing("TEST 3");
}, 4000);
