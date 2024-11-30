//adding a button
document.querySelector('button').addEventListener('click', () => { 
    let itemPrice = parseInt(document.getElementById('itemPrice').value);
//money
const quarter = 25; 
const dime = 10; 
const nickel = 5; 
const dollar = 100; 
let change = dollar - itemPrice;
//count
let quarters = Math.floor(change / quarter); 
change = change % quarter; 
let dimes = Math.floor(change / dime); 
change = change % dime; 
let nickels = Math.floor(change / nickel);
//results to print
let result = `You bought an item for ${itemPrice} cents and gave me a dollar, so your change is:\n`; 
if (quarters > 0) {
    result += `${quarters} quarter(s)\n`; 
} 
if (dimes > 0) {
    result += `${dimes} dime(s)\n`; 
} 
if (nickels > 0) { result += `${nickels} nickel(s)\n`; 
}
//output
alert(result);
});
