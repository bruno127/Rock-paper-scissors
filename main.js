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
    computerChoice = '✊'
  }
  if (randomNumber === 2) {
    computerChoice = '✌'
  }
  if (randomNumber === 3) {
    computerChoice = '✋'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a draw!"
  }
  if (computerChoice === '✊' && userChoice === "✋") {
    result = 'You won!'
    playerWin++ // ako player pobijedi rezultat raste
  }
  if (computerChoice === '✊' && userChoice === "✌") {
    result = 'You lost!'
    compWin++
  }
  if (computerChoice === '✋' && userChoice === "✌") {
    result = 'You won!'
     playerWin++
  }
  if (computerChoice === '✋' && userChoice === "✊") {
    result = 'You lost!'
    compWin++
  }
  if (computerChoice === '✌' && userChoice === "✊") {
    result = 'You won!'
    playerWin++
  }
  if (computerChoice === '✌' && userChoice === "✋") {
    result = 'You lost!'
    compWin++
  }
  resultDisplay.innerHTML = result
  playerWon.innerHTML = playerWin //deklariram playerWon, da ne bi pisao documents.geteleme....
  compWon.innerHTML = compWin
}

function endGame() {
    if (playerWin == 5) {
        winner = 'Player wins, congratulations!'
        document.getElementById('✊').disabled=true
         document.getElementById('✋').disabled=true
          document.getElementById('✌').disabled=true
           document.getElementsByClassName('container-popup')[0].style.visibility = 'visible';
          
          
    }
    if (compWin == 5) {
        winner = 'Computer wins, try again!'
          document.getElementById('✊').disabled=true
           document.getElementById('✋').disabled=true
            document.getElementById('✌').disabled=true
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
