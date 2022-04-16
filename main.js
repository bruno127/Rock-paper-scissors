const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const playerWon = document.getElementById('player-won') //dohvatio iz HTML!
const compWon = document.getElementById('computer-won')
document.getElementsByClassName('container-popup')[0].style.visibility = 'hidden';
const againButton = document.getElementById('button-again')
const winnerDisplay = document.getElementById('winner')
let winner = [];
let playerWin = 0 
let compWin = 0
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  endGame()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
    playerWin++ // ako player pobijedi rezultat raste
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
    compWin++
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
     playerWin++
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
    compWin++
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
    playerWin++
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
    compWin++
  }
  resultDisplay.innerHTML = result
  playerWon.innerHTML = playerWin //deklariram playerWon, da ne bi pisao documents.geteleme....
  compWon.innerHTML = compWin
}

function endGame() {
    if (playerWin == 2) {
        winner = 'Player wins, congratulations!'
        document.getElementById('rock').disabled=true
         document.getElementById('paper').disabled=true
          document.getElementById('scissors').disabled=true
           document.getElementsByClassName('container-popup')[0].style.visibility = 'visible';
          
          
    }
    if (compWin == 2) {
        winner = 'Computer wins, try again!'
          document.getElementById('rock').disabled=true
           document.getElementById('paper').disabled=true
            document.getElementById('scissors').disabled=true
            document.getElementsByClassName('container-popup')[0].style.visibility = 'visible';
            
            
            
    }
    winnerDisplay.innerHTML = winner
}

function reload () {
    againButton.addEventListener('click', () => {
                location.reload();
                })       
}
let reloadMe = reload() 
