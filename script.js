console.log("Hello World");
let array = ["rock", "paper", "scissors"];
 
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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("What is your choice?");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection.toLowerCase(), computerSelection);

        if (result === "computer"){
            computerScore++;
        }
        else if (result === "player"){
            playerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log("You Won!");
    }
    else if (computerScore > playerScore){
        console.log("You Lose!");
    }
    else {
        console.log("It's a draw");
    }
}
game();
