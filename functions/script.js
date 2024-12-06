/*
this program calcs c to f
*/

function calculateFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  //prompt a person for values
  let celsius1 = prompt("Enter the first Celsius value:");
  let celsius2 = prompt("Enter the second Celsius value:");
  let celsius3 = prompt("Enter the third Celsius value:");
  
  //explicitly converting the input to numbers to prevent errors
  celsius1 = parseFloat(celsius1);
  celsius2 = parseFloat(celsius2);
  celsius3 = parseFloat(celsius3);
  
  let fahrenheit1 = calculateFahrenheit(celsius1);
  let fahrenheit2 = calculateFahrenheit(celsius2);
  let fahrenheit3 = calculateFahrenheit(celsius3);

  console.log(`Input Celsius: ${celsius1}, Output Fahrenheit: ${fahrenheit1}`); 
  console.log(`Input Celsius: ${celsius2}, Output Fahrenheit: ${fahrenheit2}`); 
  console.log(`Input Celsius: ${celsius3}, Output Fahrenheit: ${fahrenheit3}`);
  
  //alert 
  alert(`${celsius1} Celsius is equal to ${fahrenheit1} Fahrenheit.`);
  alert(`${celsius2} Celsius is equal to ${fahrenheit2} Fahrenheit.`);
  alert(`${celsius3} Celsius is equal to ${fahrenheit3} Fahrenheit.`);



/////////////////////////////////////////////////////////////////////////////////////////

// This portion of the js is to calculate the dog years
function calculateDogAge(age, conversionRate = 7) {
  return age * conversionRate;
}

// Recolors output text based on age of dog
function gCbA(pupYears) {
  if (pupYears <= 21) {
    return 'hotpink';
  } else if (pupYears > 21 && pupYears <= 104) {
    return 'black';
  } else if (pupYears > 105) {
    return 'grey';
  }
// Default is black
  return 'black'; 
}

// sometimes explicit
function calDogAges() {
  var numberOfDogs = parseInt(document.getElementById('numDogs').value);
  var resOut = document.getElementById('results');
  resOut.innerHTML = '';

  var resMessage = '';

  for (var i = 0; i < numberOfDogs; i++) {
    var name = prompt("Enter the name of dog " + (i + 1) + ":");
    var age = parseFloat(prompt("Enter the age of dog " + (i + 1) + ":"));
    var pupYears = calculateDogAge(age);
    var color = gCbA(pupYears);
// gCbA (get color based on age)
    resMessage += '<p style="color:' + color + '">' + name + " is " + pupYears + " years old in dog years!</p>";
    console.log(name + " (Human Age: " + age + " years) is " + pupYears + " years old in dog years.");
  }

  resOut.innerHTML = resMessage;
 // strict op needed to output
  if (numberOfDogs === 1) {
    alert(name + " is " + pupYears + " years old in dog years!");
  } 
}
