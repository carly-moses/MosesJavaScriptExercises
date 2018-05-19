//Exercise Four

// Prompt the user for a time of day (morning, noon, or evening). 
//Based on their input, log a string to the console that will let the user 
//know what they should be eating for that specific meal. 
//Use the tables below to guide your logic.

var greeting = "What time of day is it - morning, noon, or evening?";
var enter = prompt (greeting);

var am = "Since it is " + enter + ", you should be eating breakfast.";
var amSuggest = " We suggest eggs and toast.";
var noon = "Since it is " + enter + ", you should be eating lunch.";
var noonSuggest = " We suggest a salad.";
var pm = "Since it is " + enter + ", you should be eating dinner.";
var pmSuggest = " We suggest chicken and rice.";

if (enter == "morning") {
  console.log (am += amSuggest);
} else if(enter == "noon") {
  console.log (noon += noonSuggest);
} else if (enter == "evening") {
  console.log (pm += pmSuggest);
} 