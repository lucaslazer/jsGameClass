//alert("Entering my Portfolio site")
//console.log("Bonjour depuis le js fichier"); // this created a popup. I disabled it for quicker loading
//console.log("Hello from the js file");
// const upper case
const PI = 3.14;

console.log("My favorite car: " + car);
car = "Toyota"
console.log(`My new favorite car: ${car}`);
// Datatypes

// Strings
let day = "Wednesday";

//Numbers
let numberOfWeekDays = 7;
let shoeSize = 10.5;

//Boolians
let y = true;
let x = false;

console.log( y == 1 );
console.log ( x == 0 );

// Objects

const weekDays = { firstDay: "Sunday", secondDay: "Monday "};

// Array Objects
const pageNumber = [ 0, 1, 2, 3, 4, 5, 6, ]

// Arrays and mutations
let roles = [
{titles: ["Creative Director", "3D artist", "Graphic Designer", "Mocap Director", "Map Designer", "Outdoor Instructor"]
worked: true}
];

delete roles.titles ["Outdoor Instructor"];

let engines = ['Unity', 'Lumberyard', 'Cryengine', 'Unreal', 'GlassBox']
engines.pop();
animals.push('GoDot');

// Objects

let myFirstName = "Luke";
let myLastName = " Napper";
const lightBlue = style="color:DodgerBlue;"

//Document Object Model (DOM)
/* HTML elements now are objects
    we can connect properties, methods, events */

    let text = "All assets created in collaboration with teams of contributors";
    document.getElementById("newColor").innerHTML = "scrollingColor";
    document.getElementById("secondText").innerHTML = text;
    document.getElementByClassName("pageNumber")[0].innerHTML;
    document.getElementById('nameOfMine').innerHTML = myFirstName + myLastName;
    document.getElementById("nameAGIN").style.color = "lightBlue";

const collection = document.getElementsByClassName("example");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "red";
}

