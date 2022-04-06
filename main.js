let choices;
choices = ['paper','rock','scissors'];

function game() {
playerChoice()
}

function playerChoice () {
    let input = prompt ('Choose\nRock, paper or scissors');
    while (input == null) {
        input = ('Please, enter your choice') 
}
input = input.toLowerCase();
let check = validateInput(input);
while (check == false) {
    input = prompt ('You write your choice wrong, please try again');
    while (input == null) {
        input = prompt ('Please try again');
    }
    input = input.toLowerCase();
    check = validateInput (input);
}
console.log (input);
}


function computerChoice () {
return choices (Math.floor(Math.random() * choices.length));
}

function validateInput(choice) {
    return choices.includes(choice);
}
game();
