//alert("hello");
const myIdElement = document.getElementById("idElement");
console.log(myIdElement);

const myClassElement = document.getElementsByClassName("myClass");
//console.log(myClassElement[0]);
for (let i = 0; i < myClassElement.length; i++) {
  console.log(myClassElement[i]);
}

const idElem = document.querySelector("#myNewId");
console.log(idElem);

const newText = document.getElementById("textChange");
newText.textContent = "New Text";
newText.style.color = "green";
newText.style.fontSize = "40px"; //font-size  backgroundColor
//newText.style.backgroundColor = "hotpink"
newText.innerHTML = `<span style ="background-color: hotpink"> NEW </span>`;
newText.insertAdjacentText("beforeend", " append text");
newText.insertAdjacentHTML(
  "beforeend",
  `<span style = "background-color: green; color: white">Code HTML</span>`
);

const changeText = function (c) {
  c.innerHTML = "I love cats!";
};

const colorFunction = function () {
  const idElement = document.getElementById("changeColor");

  if (idElement.className == "colorOne") {
    idElement.className = "colorTwo";
  } else {
    idElement.className = "colorOne";
  }
};
