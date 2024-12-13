
//Boolians to test debug output ::= console.log
/*
let y = true;
const x = false;

console.log( y == 1 );
console.log ( x == 0 );

const numbo = 42;

try {
  numbie = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}
console.log(numbie);
console.log(numbo);
// Expected output: 42

// Objects

const weekDays = { firstDay: "Sunday", secondDay: "Monday "};

// Array Objects"
let k = "The respective values are :";
function Apage() {
    let input = document.getElementsByName('array[]');

    for (let i = 0; i < input.length; i++) {
        let a = input[i];
        k = k + "array[" + i + "].value= "
            + a.value + " ";
    }

    document.getElementById("par").innerHTML = k;
    document.getElementById("enterPage").innerHTML = "Output";
}
*/

// Arrays and mutations
let titles = ["Creative Director", "3D artist", "Graphic Designer", "Mocap Director", "Map Designer", "Outdoor Instructor"];
console.log(titles);
delete titles ["Outdoor Instructor"];

let engines = ['Unity', 'Lumberyard', 'Cryengine', 'Unreal', 'GlassBox']
//engines.pop();
//animals.push('GoDot');

// Objects

let myFirstName = "Lucas";
const myLastName = " Napper";
const lightBlue = style="color:DodgerBlue;"

const para = document.createElement("disclaimer");
const node = document.createTextNode("All assets created with proprietary engine tools");
para.appendChild(node);
const element = document.getElementById("statement");
element.appendChild(para);

document.getElementById("role1").innerHTML = "Creative Director";
document.getElementById("role2").innerHTML = "3D artist";
document.getElementById('role2').style.color = "green";
document.getElementById("role3").innerHTML = "Graphic Designer";
document.getElementById("role4").innerHTML = "Mocap Director";
document.getElementById("role5").innerHTML = "Chill Guy";
//document.getElementById("pager").innerHTML = "PAGE 1";
const myCollection = document.getElementsByTagName("p6");
document.getElementById("pager").innerHTML = "1", "2", "3", "4", "5", "6", "7" + myCollection[1].innerHTML;

let changeRole = document.querySelector("p5");
changeRole.textContent = "Map Director";

document.querySelector("h1").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  /*const myObject = {
    prop1 : "value1", //property can be an identifier
    2 : "value2", //property can be a number
    "property n" : "value3" //Property can be a string
  };


  const weekMenu = {
    "monday" : "burritos",
    "tuesday" : "tacos",
    "wednesday" : "lasagna",
    "thursday" : "pizza",
    friday : "quesadilla",
    6 : "curry"
  };
  console.log(weekMenu);
//brake notation
  console.log(weekMenu["tuesday"]);
  console.log(weekMenu["friday"]);
  console.log(weekMenu[6]);

// dot Notation * the way to acess an array!

console.log(weekMenu.tuesday);
console.log(weekMenu.friday);
console.log(weekMenu[6]);

//access one object from another object

const menuTwo = {
  "monday" : "burritos",
  "tuesday" : "tacos",
  "wednesday" : "lasagna",
  "thursday" : "pizza",
  friday : ["quesadilla", "nachos", "birra"]
};

const myObj = {};
myObj.menuTwo = menuTwo;
console.log(myObj.menuTwo.friday[0]);

const menuThree = [{
  "monday" : "burritos",
  "tuesday" : ["tacos", "street tacos", "consume"],
  "wednesday" : "lasagna",
  "thursday" : "pizza",
  friday : ["quesadilla", "nachos", "birra"]
},
{
  "monday" : "hamburgers",
  "tuesday" : ["corndogs", "hotdogs", "DonsDogs", "Polishdog", "hotlink"],
  "wednesday" : "poutine",
  "thursday" : "lambchops",
  friday : ["fried chicken", "elote", "bangers n mash"]
}
]

console.log(menuThree[0].tuesday[2]);
console.log(menuThree[1].friday[0]);

//adding a property

Object.defineProperty(menuThree, "saturday", {value: "soup"});
console.log(menuThree.saturday);

Object.defineProperty(menuThree, "sunday", {value: ["soup", "sopa", "dishWater"]});
console.log(menuThree.sunday);
console.log(menuThree);

//change a property

Object.defineProperty(menuThree[1], "wednesday", {value: "fish"});
console.log(menuThree[1].wednesday);

Object.defineProperty(menuThree[1], "tuesday", {value: ["roast boar", "cone", "frostie", "tuna", "spam"]});
console.log(menuThree[1].tuesday[0]);

//// date object ////

const theDate = new Date();
console.log(theDate);

*/

let profile1 = {
  name: "john",
  status: "complicated",
  children: [
    {
      name: "maya",
      age: 5,
      friends: [
        { name: "nina", age: 4 },
        { name: "lola", age: 5 }
      ]
    },
    { name: "joe", age: 2, children: [] }
  ]
};

console.log(profile1.children[0].friends[0]);
console.log(profile1.children[0].friends);
console.log(profile1.children);

// loops
//start by creating an array 
/*
const year = ["jan", "feb", "mar", "apr", "may", "jun"]
console.log(year);
document.getElementById("firstSixMos").innerHTML = year;
//printing one index
console.log(year[2]);
*/

//for (const value of iterable)code block to be executed
/*
for ( const month of year) {
  console.log(month)
}
*/

//for (expression 2; expression 3) code block to be executed
/*
const year = ["jan", "feb", "mar", "apr", "may", "jun"]
for( let i = 0; i < year.length; i++) {
    console.log("from the loop " + year[i])
}
*/
//16;00

//alert("hello");
//LOOPS
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
w