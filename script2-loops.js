/*
REVISITING FIZZBUZZ
-------------------

Print all numbers from 1 to 100 with three exceptions:

- If the number is divisible by 3, print fizz
- If the number is divisible by 5, print buzz
- If the number is divisible by 3 AND 5, print fizzbuzz

---
// start w/ coding a for loop counting 1 to 100
for( var i=1; i<101; i++ ) {
    console.log(i);
}

---
// add fizz using the modulo
for( var i=1; i<101; i++ ) {
    if(i%3 === 0) {
        console.log("fizz");
    } else {
        console.log(i);
    }
}

---
// add buzz using the modulo and else if
for( var i=1; i<101; i++ ) {
    if(i%3 === 0) {
        console.log("fizz");
    } 
    else if(i%5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}

---
// add fizzbuzz as an if within the first if
for( var i=1; i<101; i++ ) {
    if(i%3 === 0) {
        if(i%5 === 0) {
            console.log("fizzbuzz");
        }
        else {
            console.log("fizz");
        }
    } 
    else if(i%5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(i);
    }
}

WHILE AND DO WHILE LOOPS
------------------------
// do...while loop
var x = 1;

do {
    console.log("Hello!");
    i++;
} while(x === 1);


---
var numberOfBottlesOfBeer = 99;
do {
console.log(numberOfBottlesOfBeer + " bottles of beer on the wall, " + numberOfBottlesOfBeer + " bottles of beer, 1 fell down and hit the ground, " + (numberOfBottlesOfBeer-1) + " bottles of beer!" );
numberOfBottlesOfBeer--;
} while (numberOfBottlesOfBeer > 0);


---
// what's the difference?
var i = 0;

do {
    console.log(i);
    i++;
} while (i < 11);


while(i < 11){
    console.log(i);
    i++;
}

---
// Meet Therapy, the JavaScript Care Robot!

/* A confirm pop up returns a boolean value (true or false)
    - if 'ok' is clicked, it returns true
    - if 'cancel' is clicked, it returns no
*/

/*
var sad = confirm("Would you like to be cheered up?");

// this is the same as saying while (sad === true)
while(sad) {
    alert("What do you call a boomerage that doesn't come back? --- A stick!");
    var yes = confirm("Would you like to continue our session?");
    if(yes) {
        var response = prompt("Tell me about your troubles:", "Type your feelings here");
        
        if(response){
            alert("I'm sorry you are feeling down about that. I know you can't see it, but I, the computer, will now give you a hug **hug**.");
            sad = false;
        }
    } else {
        sad = false;
    }
}

*/