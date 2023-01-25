const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let playerScore = 0
let computerScore = 0
let gameOver = false;



rock.addEventListener('click', () => handleClick(1))
paper.addEventListener('click', () => handleClick(2))
scissors.addEventListener('click', () => handleClick(3))



function computerMove() {
    const choice = Math.floor(Math.random() * 3) + 1

    return choice;
}

function compareMoves(player, computer) {
    if(player === computer) {
        return 0;
    }
    else if((player === 1 && computer === 3) ||
            (player === 2 && computer === 1) ||
            (player === 3 && computer === 2)) {
                playerScore++;
                return 1
            }
    else {
        computerScore++;
        return 2
    }
}



function handleClick(selection) {


    const computerSelection = computerMove()
    const outcome = compareMoves(selection, computerSelection)
    
    

}

