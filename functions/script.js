/*
this program calcs c to f
*/

function calculateFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  let celsius1 = prompt("Enter the first Celsius value:");
  let celsius2 = prompt("Enter the second Celsius value:");
  let celsius3 = prompt("Enter the third Celsius value:");
  
  //convert the input to numbers
  celsius1 = parseFloat(celsius1);
  celsius2 = parseFloat(celsius2);
  celsius3 = parseFloat(celsius3);
  
  //function call
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
  