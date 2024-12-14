document.querySelector("#blackButts").addEventListener("click", function(event) {
  if (event.target.tagName === 'BUTTON') {
    roShamBo(event.target.id);
  }
});

/* some buttons for user input */

const choices = ["rock", "paper", "scissors"];
// Step 1: Created a variable array Rock, Paper, Scissors

const winnerMessages = ["Winner!", "Winner Winner, Chicken Dinner!", "You Win!", "Nice!"];
/* added a winning msgs array */

function getRandomWinnerMessage() {
  return winnerMessages[Math.floor(Math.random() * winnerMessages.length)];
}
//Step 3: moved inside

function roShamBo(userChoice) {
  const semiRandChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("Your Choice!!!: " + userChoice + "!!!");
  console.log("A Randomised Choice: " + semiRandChoice + "???");
  // Step 2: Generate a random number

  // step 4: Add the if statements to compare the values
  let result = "";
  if (
    (userChoice === "rock" && semiRandChoice === "scissors") ||
    (userChoice === "paper" && semiRandChoice === "rock") ||
    (userChoice === "scissors" && semiRandChoice === "paper")
  ) {
    result = getRandomWinnerMessage();
  } else if (
    (userChoice === "scissors" && semiRandChoice === "rock") ||
    (userChoice === "rock" && semiRandChoice === "paper") ||
    (userChoice === "paper" && semiRandChoice === "scissors")
  ) {
    result = "You lose!";
  } else {
    result = "It's a tie!";
  }
  // edge case bucket:

  document.getElementById("result").innerText = result;
  // Step 5: Print in the HTML file (the console.log value)
}