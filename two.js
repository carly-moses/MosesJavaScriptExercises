//Exercise Two 

// Write a do..while loop that builds a string with multiple inputs from a user. 
//Start by prompting the user if they want to play. When the user answers yes, 
//prompt the user to enter a word. After the user enters a word, 
//prompt the user if they would like to play again. If no, console log their word. 
//If yes, prompt the user for another word and add that word to the original string, 
//then prompt if they want to play again. Continue to add words to the string every 
//time the user answers yes and enters a word until the user indicates that he or
// she does not want to play anymore.

var question = prompt ("Do you want to play?");
var response = " ";

do {
    if (question == "yes") {
        var word = prompt ("Enter a Word");
        response += " " + word;
        var question = prompt ("Do you want to play again?")
    }
} while (question == "yes");

console.log (response); 