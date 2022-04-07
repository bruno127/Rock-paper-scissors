let choices;
choices = ['paper', 'rock', 'scissors'];
let winners = [];

function game() { 
    for (let i = 1; i <= 5; i++) {
        playRound(i); 
    }
    document.querySelector('button').textContent = 'Play new game';
    logWins();
}

function playRound(round) { 
    const playerSelection = playerChoice();
    const compSelection = computerChoice();
    const winner = checkWinner(playerSelection, compSelection);
    winners.push(winner); 
    logRound(playerSelection, compSelection, winner, round); 
}

function playerChoice() {
    let input = prompt('Choose:\nRock, paper or scissors');
    while (input == null) {
        input = ('Please, enter your choice.')
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('You wrote your choice wrong, please try again');
        while (input == null) {
            input = prompt('Please try again');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}


function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return ('Tie')
    } else if ((choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'scissors' && choiceC === 'paper') ||
        (choiceP === 'paper' && choiceC === 'rock')) {
        return ('Player');
    } else return ('Computer');
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("-------------------------------");
}
