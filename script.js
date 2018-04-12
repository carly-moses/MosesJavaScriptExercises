//Exercise One
var greeting = "Enter a Number Less Than 50";
var enter = prompt (greeting);

var total = 0
for (var i = 0; i <= enter ; i++){
total=total +=i;
}

console.log (total);

//Exercise Two
var question = prompt ("Do you want to play?");
 
do {  
  if (question == "yes") {
    var word = prompt ("Enter a Word:");
    console.log (word);
    var question = prompt ("Do you want to play again?");
} else if ( question == "no") {
  var cancel = prompt ("Are you sure you don't want to play?");
}
  } while (question =="yes");
  

//I struggled with exercise two and three and I know they 
//do not meet assignment requirements, I was unable to attend Tech Thursday 
//for help before this was due and will be attending tonight for assistance.
//Please let me know your thoughts on my work - I really want to be a part of this class,
//I am determined to complete these properly, but time was not on my side. 
//Once I am in class, my other obligations will no longer be in the picture.
//However, as much as I want this, please be honest with me.
//Thanks! 

//Exercise Three

var greeting = ("Would you like to print your name?");
var question = prompt (greeting);


while (question !=="no") {
  if (question == "yes")
   var printName = prompt ("Print your name.");
  console.log ("Hello. My name is " +printName);
  var again = prompt ("Would you like to print your name again?");
  while (again =="yes");
    console.log ("Hello. My name is " +printName);
} if (question =="no") {
  alert = ("Bummer. Your loss."); 
  }
//I know this is an infinite loop, I could not figure out how to continue asking.
//I also tried a similar equation to exercise one to add ! each time, but 
//that was a fail. I hope to get some help Thursday evening!! 


//Exercise Four
var greeting = "What time of day is it - morning, noon, or evening?";
var enter = prompt (greeting);

var am = "Since it is " + enter + ", you should be eating breakfast.";
var amSuggest = " We suggest eggs and toast.";
var noon = "Since it is " + enter + ", you should be eating lunch.";
var noonSuggest = " We suggest a salad.";
var pm = "Since it is " + enter + ", you should be eating dinner.";
var pmSuggest = " We suggestion chicken and rice.";

if (enter == "morning") {
  console.log (am += amSuggest);
} else if(enter == "noon") {
  console.log (noon += noonSuggest);
} else if (enter == "evening") {
  console.log (pm += pmSuggest);
} 

