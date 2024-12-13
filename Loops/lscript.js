//LOOPS

let titles = ["Creative Director", "3D artist", "Graphic Designer", "Mocap Director", "Map Designer", "Outdoor Instructor"];
console.log(titles);
console.log(titles[2]);

const year = ["January", "February", "March", "April", "May", "June"];
console.log(year);

document.getElementById("firstSixMonths").innerHTML = year;
//console.log(year[2]);

/* ===================== for loop ===================== */
/* SYNTAX
for (expression 1; expression 2; expression 3) {
    // code block to be executed
}
*/
/* for( let i = 0; i < year.length; i++ ) {
    console.log("From for loop " + year[i]);
}
*/

/* ===================== while loop ===================== */
/* SYNTAX
expression 1
while (expression 2/condition) {
 // code block to be executed
expression 3
}
*/
/*
let i = 0
while (i < year.length) {
    console.log("From while loop " + year[i]);
    i++; //console.log(i);
}
*/

/* ===================== do while loop ===================== */
/* SYNTAX
expression 1
do {
  // code block to be executed
expression 3
}
while (expression 2);
*/
/*
let i = 0;
do {
    console.log("From do while loop " + year[i]);
    i++;
} while (i < year.length);
*/

/* ===================== ES6 loop ===================== */
/* SYNTAX
for (const value of myArray) {
    // code block to be executed 
}
 */
/*for( const month of year ) {
    console.log(month);
} */

/* ===================== map loop ===================== */
/* GENERATES A NEW ARRAY
Array.map(): 
The map() method iterates over each element in the array.
Callback Function: 
You provide a callback function as an argument to map(). This function is executed for each element in the array.
Return Value: 
The callback function must RETURN a value.
The map() method CREATES a NEW ARRAY containing the returned values from each iteration.
*/
/* SYNTAX
const variableName = array.map((placeHolder) => {
return logic + placeHolder;
});

Call the function outside
*/

// ===================  option 1  ===================
/*const monthsOfTheYear = year.map((months) => {
    return("From map loop " + months); //creates a new array
});
console.log(monthsOfTheYear);
*/

// ===================  option 2  ===================
/*const monthList = year.map(month => month).join(', ');
console.log(monthList);
*/

// ===================  option 3  ===================
/*year.map((month, index) => {
  console.log(`Index: ${index}, Value: ${month}`);
});
*/

/* ===================== for each loop ===================== */
/*
for each calls a function for each element in an array 
*/
/* SYNTAX
let newVariable ="";
array.forEach(myFunction);
console.log( newVariable);
function myFunction(item, index) {
 month += + item;
};
*/

/*let month = "";
year.forEach(loopFunction);
console.log(month);

function loopFunction(item, i) {
    month += " \"From forEach loop\" " + item + "\n";
}
*/

//////// read about loops
/////// https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/


/*===================== Character Escape Sequence =====================
Character Escape Sequence name:
\' Single quote
\" Double quote
\\ Backslash
\0 Null
\a Alert
\b Backspace
\f Form feed
\n New line
\r Carriage return
\t Horizontal tab
\v Vertical quote
*/

//////// learn about regex
/////// https://regexr.com/3c9b5