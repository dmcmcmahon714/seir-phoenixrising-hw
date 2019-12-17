// 1. What does the DRY acronym stand for?  Don't repeat yourself
// 2a. What is the difference between const and let and var? Var is limited to the function within which it is defined.
// 2b. Let is limited to the block of curly braces. 
// 4c. Const is also limited to the block inside the curly braces but it can not be reassigned if a variable is definited by const.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
console.log(a < b < c);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e)
var g = 0;
console.log(g);
var g = (b +c);
console.log(g);
//Var variables can be updated and redeclared within its scope.
// If you use const or let you get an error that syntax error has already been declared
// If you write 10 = g you get "Invalid left-hand side in assignment"
console.log(a > (b || f) != !f && e != c);
// The first code is an infinite loop because while the condition is 'true', the message will run.
// The second code is not an infinite loop, because it reassigns 'runProgram' to false after the message runs.
let letters = "A";
let i = 0;
//starts a while loop that will run as long as i is less than 20)
while (i < 20) {
// adds an additional "A" to the letters string.
        letters += "A";
//adds 1 to the initial value.
        i++;
//closes the while loop.  the code inside the loop will keep running until the while condition is false.              
}
//prints the final value of letters. "A" should appear 20 times.  I think this one was pretty straightforward and just going through the steps in the hw really helped.
console.log(letters);
// A for loop does the same thing as a while loop, but the syntax is compacted, leaving less room for infinite loops. We don't have to declare variables outside of the loop.
//The first part of the for loop is the initial condition. for (let i = 0;)
//The second part of the for loop is the while condition. i < 1;
//The third part of he for loop is the repeating expression. 'Without you, today/'s emotions are the scurf of yesterday/'s');
for (let i = 0; i <= 999; i++) {
    console.log(i);
}
//Forward slashes indicate a file path while backslashes could just denote the use of an apostrophe like in the example.
for (let i = 999; i >= 0; i--) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log("The value of" + " i " + "is " + i + " of 10");
}
for (let i = 1; i <= 10; i++) 
    {
        console.log(`The value of i is ${i} of 10.`);
    }

const StarWars = ["Han", "C3P0", "R2D2", "Luke", "Leia", "Anakin"]; 
        for (i = 0; i < StarWars.length; i++) {
        console.log(StarWars[i]);
}
//const StarWars = ["Han", "C3P0", "R2D2", "Luke", "Leia", "Anakin"]; 
        for (i = 0; i < StarWars.length; i+=2) {
        console.log(StarWars[i]);
}
