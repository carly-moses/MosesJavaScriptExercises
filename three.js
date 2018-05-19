
//Exercise Three

// Write a while loop that will prompt the user if they would like to print 
//their name. If the answer is yes, log their name to the console then 
//prompt them if they would like to print their name again. If yes, 
//log their name to the console again but this time add an exclamation point 
//at the end of the string. Continue to add an exclamation point for every
// time the user agrees to wanting to print his or her name.

  var greeting = ("Would you like to print your name?");
  var question = prompt (greeting);
  var expts = " ";

  while (question !=="no") {
      var printName = prompt ("Print your name.");
      console.log ("Hello. My name is " +printName +expts);
      var question = prompt ("Would you like to print your name again?");
      expts = expts + "!"; //same as expts += "!"
  } if (question =="no") {
      alert = ("Bummer. Your loss.");
  }
