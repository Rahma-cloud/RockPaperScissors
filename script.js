let array = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("results");
const scoreDiv = document.getElementById("score");
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerArray = array[(Math.floor((Math.random() * array.length)))]
    console.log(computerArray);
    return computerArray;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("that's a draw");
        return "draw";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "player";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log( "You Lose! Paper beats Rock");
        return "computer";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors");
        return "computer";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors cuts Paper");
        return "player";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper covers Rock");
        return "player";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors cuts paper");
        return "computer";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const computerChoice = getComputerChoice()
        let resultValue = playRound(button.id, computerChoice);
        game(resultValue);
    });
});

function game(winner) {
    if (winner === "player") {
        playerScore++;
    }
    else {
        computerScore++;
    }

    if (playerScore === 5){
        document.getElementById("results").innerText = "You Won, Reload to Play Again"
        buttons.forEach(button =>  button.disabled = true)
    }
    else if (computerScore === 5) {
        document.getElementById("results").innerText = "You Lose, Reload to Play Again"
        buttons.forEach(button =>  button.disabled = true)

    }
    document.getElementById("score").innerText = `Your Score: ${playerScore} \n Computer Score: ${computerScore}`;
}
