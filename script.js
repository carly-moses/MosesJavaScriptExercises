//Exercise One 

//Prompt the user for a number. 
//Write a for loop that will add all of the numbers leading
// up to that number, and inclusive of that number together 
//and log the result to the console.
//(ex: A user enters 5, and the output would be the result of 1 + 2 + 3 + 4 + 5.)


var greeting = "Enter a Number Less Than 50";
var enter = prompt (greeting);

var total = 0
for (var i = 0; i <= enter ; i++){
total=total +=i;
}

console.log (total);
