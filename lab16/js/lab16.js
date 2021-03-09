/*
* Author: Becky Phillips, Matilda Krulder, Julian Fee
* Created: 8 March 2021
* License: Public Domain
*/

// Lab 16: JSON ane APIs//


// define variable currentNum
var currentNum;

// Use $.ajax() to retrieve data and store this object in a variable comicObj.
function getAndPutData(url) {

    // Using the core $.ajax() method
  $.ajax({
    // The URL for the request (from the api docs)
    url: url,
    // The data to send (will be converted to a query string)
    data: {},
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",

    // What do we do when the api call is successful
    success: function(comicObj) {
        // Give the section a title using the comicObj.title key from the object
        $("#output-img").html("<h3>"+ comicObj.title
        // add the date
        + ": " + comicObj.month + "/" + comicObj.day + "/" + comicObj.year + "</h3>"
        // Create an image tag using the comicObj.img key from the object
        + "<img src=\"" + comicObj.img
        // Give the image an alt and title attributes using the comicObj.alt key from the object
        + "\"alt=\"" + comicObj.alt + "\"title=\"" + comicObj.title + "\">");

        // re-define currentNum as the comic number
        currentNum = comicObj.num;

        // test in the console
        console.log(comicObj);
    },

    // What we do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
  })

};


//Task X: Bonus

 //when you press the previous button, it will add -1 to the currentNum
$("#previous").click(function() {
  //define newApiUrl and make modification
  var newApiUrl = "http://xkcd.com/"+(currentNum-1)+"/info.0.json";
  //call function with newApiUrl
  getAndPutData(newApiUrl);
});

 //when you press the next button, it will add +1 to the currentNum
 $("#next").click(function() {
   //define newApiUrl and make modification
   var newApiUrl = "http://xkcd.com/"+(currentNum+1)+"/info.0.json";
   //call function with newApiUrl
   getAndPutData(newApiUrl);
 });

 //call function with argument as a randomized number in the link
 getAndPutData("http://xkcd.com/"+(Math.round(Math.random()*2488))+"/info.0.json");
