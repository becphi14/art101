/*
* Author: Becky Phillips, Matilda Krulder, Julian Fee
* Created: 4 March 2021
* License: Public Domain
*/

// Lab 15: AJAX//


//call button, add click function
$("#activate").click(function() {
  // define variable topic, get the value
  var topic = $("#topic").val();
  console.log(topic);
  // define apiURL and replace search query with topic variable
  var apiURL = "https://en.wikipedia.org/api/rest_v1/page/summary/" + topic + "?redirect=true";
  console.log(apiURL);
  // use AJAX method
  $.ajax({
     // The URL for the request (from the api docs)
     url: apiURL,
     // The data to send (will be converted to a query string)
     data: {},
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",

     // What do we do when the api call is successful
     success: function(data) {
         // do stuff
         console.log(data.extract_html);
         $("#output").html(data.extract_html);
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
         $("#output").html("<p>Not Valid. Try a new topic.</p>");
     }

})
})












//
// function putTextOnPage
//
// function doAPIStuff () {
// console.log ("Doing API Stuff");
// //Using the core $.ajax() method
// $.ajax({
//     // The URL for the request (from the api docs)
//     url: "https://cat-fact.herokuapp.com/#/cat/facts",
//     // The data to send (will be converted to a query string)
//     data: {
//             // here is where any data required by the api
//             //   goes (check the api docs)
//             id: 123,
//             api_key: "get-cat-facts",
//           },
//     // Whether this is a POST or GET request
//     type: "GET",
//     // The type of data we expect back
//     dataType : "json",
//     });
//
//     // What do we do when the api call is successful
//     //   all the action goes in here
//     success: function(data) {
//         // do stuff
//         putTextOnPage(textData);
//         console.log(data);
//     },
//     // What we do if the api call fails
//     error: function (jqXHR, textStatus, errorThrown) {
//         // do stuff
//         console.log("Error:", textStatus, errorThrown);
//     }
// };
//
// $("#api-button").click(doAPIStuff);
