/*
SWITCH STATEMENT EXAMPLE

switch(n) { // 'n' is a meaningless placeholder for whatever we wanna pass here

case example1:
    console.log("This code will run if n === example1 is true.");
    break;

case example2:
    console.log("This code will run if n === example2 is true.");
    break;

case example3:
    console.log("This code will run if n === example3 is true.");
    break;

default:
    console.log("This code will run if no cases are met.");
    break;
}


SWITCH STATEMENT IN PRACTICE

var sign = prompt("What is your astrological sign?");

switch(sign) {
    
    case "Ovan":
        console.log("You have a secret admirerer.");
        break;
    case "Bik":
        console.log("You'll fall in love");
        break;
    case "Blizanci":
        console.log("You'll fall out of love");
        break;
    case "Rak":
        console.log("You'll make money");
        break;
    case "Lav":
        console.log("You'll lose money");
        break;
    case "Djevica":
        console.log("You'll meet an old friend");
        break;
    case "Vodolija":
        console.log("You'll lose a friend");
        break;
    case "Skorpija":
        console.log("You'll get a new job");
        break;
    default:
        console.log("Nothing new for you.");
        break;
}


Example from:
http://stackoverflow.com/questions/11769210/accepting-both-upper-and-lower-cases-in-prompts-in-javascript

function whatColor() {
  var x = prompt("color?");
  return x.toLowerCase();
}

var result;
var jacketColor = whatColor();

switch (jacketColor) {
  case "black":
    result = "pay $300";
    break;
  case "brown":
    result = "Pay $200";  
    break;
  case "green":
    result = "Pay $5";
    break;
  default:
    result = "This color does not match my eyes!";
}

*/