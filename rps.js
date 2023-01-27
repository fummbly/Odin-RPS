const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const playerPoints = document.getElementById('player-score').children
const computerPoints = document.getElementById('computer-score').children
const playerButtons = document.getElementById('player-buttons').children
const computerButtons = document.getElementById('computer-buttons').children
const resultText = document.getElementById('result');
const game = document.getElementById('game')
const overlay = document.getElementById('overlay')
const restart = document.getElementById('restart')


let playerScore = 0
let computerScore = 0



rock.addEventListener('click', () => handleClick(1))
paper.addEventListener('click', () => handleClick(2))
scissors.addEventListener('click', () => handleClick(3))
restart.addEventListener('click', () => restartGame())


function gameOver() {
    if (playerScore >= 2 || computerScore >= 2) {
        const winner = document.getElementById('winner')
        game.classList.add('hide')
        overlay.classList.add('active')

        if(playerScore === 2) {
            winner.innerHTML = 'Player Wins!'
        } else {
            winner.innerHTML = 'Computer Wins'
        }

        return true
    }

    return false
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    overlay.classList.remove('active')
    game.classList.remove('hide')
    resultText.innerHTML = ""
    for(child of playerPoints) {
        child.classList.remove('point')
    }
    for(child of computerPoints) {
        child.classList.remove('point')
    }
    unhideButtons()
}

function computerMove() {
    const choice = Math.floor(Math.random() * 3) + 1

    return choice;
}


function addPoint(person) {
    switch(person) {
        case 1:
            playerScore++
            playerPoints[playerScore - 1].classList.add('point')
            break;
        case 2:
            computerScore++;
            computerPoints[computerScore - 1].classList.add('point')
            break
    }
}

function compareMoves(player, computer) {
    if(player === computer) {
        resultText.innerHTML = "Tie"
        return 0
    }
    else if((player === 1 && computer === 3) ||
            (player === 2 && computer === 1) ||
            (player === 3 && computer === 2)) {
                addPoint(1)
                resultText.innerHTML = "Player wins"
                return 1;
            }
    else {
        resultText.innerHTML = "Computer wins"
        addPoint(2)
        return 2;
    }
}

function hideButtons(playerSelection, computerSelection) {

    for(child of playerButtons) {
        child.classList.add('hide')
    }

    playerButtons[playerSelection - 1].classList.remove('hide')


    for(child of computerButtons) {
        child.classList.add('hide')
    }

    computerButtons[computerSelection - 1].classList.remove('hide')


}

function unhideButtons() {
    for(child of playerButtons) {
        child.classList.remove('hide')
    }
    for(child of computerButtons) {
        child.classList.remove('hide')
    }
}



function handleClick(selection) {

    if(gameOver()) {
        return
    }

    const computerSelection = computerMove()
    
    const outcome = compareMoves(selection, computerSelection)
    hideButtons(selection, computerSelection, outcome)
    setTimeout(unhideButtons, 2000)
    if(gameOver()) {
        return
    }
    

}

