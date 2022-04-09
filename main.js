let choices;
choices = ["paper", "rock", "scissors"];
let winners = [];

function startGame() {}

function playRound(round) {
  const compSelection = computerChoice();
  const winner = checkWinner(playerSelection, compSelection);
  winners.push(winner);
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "scissors" && choiceC === "paper") ||
    (choiceP === "paper" && choiceC === "rock")
  ) {
    return "Player";
  } else return "Computer";
}

function logWins() {
  let playerWins = winners.filter((item) => item == "Player").length;
  let computerWins = winners.filter((item) => item == "Computer").length;
  let ties = winners.filter((item) => item == "Tie").length;
}

startGame();
