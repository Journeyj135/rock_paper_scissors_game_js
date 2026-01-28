// Create a function to get random numbers from 1-3 //
function getRandomInt() {
    const max = 3;
    return Math.floor(Math.random() * max);
}


// Create a function to get the computers choice //
function getComputerChoice() {

    const randomNumber = getRandomInt();
    
    if(randomNumber === 0) {
        return "Rock";
    }else if(randomNumber === 1) {
        return "Paper";
    }else if(randomNumber === 2) {
        return "Scissors";
    }
}

// Create a function to get the humans choice //
function getHumanChoice() {

    const humanChoice = prompt("Please Enter rock, paper or scissors: ");
    return humanChoice;
}


// Create two variables for players choices //
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


// Create a function to play game //
function playGame() {

    // Create two variables to keep track of the user and computers score count //
    let humanScore = 0;
    let computerScore = 0;

    // Create a function to play a single round of the game //
    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();

        if(humanChoice === computerChoice) {
            console.log("Its a Tie!");
        }
        else if(humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log(`You Win! ${humanChoice} smashes ${computerChoice}`);
        } else if(humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log(`You Win! ${humanChoice} covers ${computerChoice}`);
        } else if(humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            console.log(`You Win! ${humanChoice} cuts ${computerChoice}`);
        } else{
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for(let i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    }

    if(humanScore > computerScore) {
        console.log(`You are the overall winner! ${humanScore} to ${computerScore}`);
    } else{
        console.log(`You lost the game! ${computerScore} to ${humanScore}`);
    }
}
// start the game //
playGame();