/*
* Author: Becky Phillips, Matila Krulder, Julian Fee
* Created: 4 February 2021
* License: Public Domain
*/


// Define Function//
function nameSorter() {
  var userName = window.prompt("Please enter your name");
  console.log("user name: ", userName);
  // Split string and convert to array
  var nameArray = userName.split('');
  console.log("name array = ", nameArray);
  // Sort the array
  var sortNameArray = nameArray.sort();
  console.log("sorted name array = ", sortNameArray);
  // Join array and convert back to a string
  var sortedName = sortNameArray.join('');
  console.log("sorted name = ", sortedName);
  // return the new (sorted) name
  return sortedName;
}

// output
document.writeln("We fixed your name and made it better: ",
    sortedName(), "</br>");
