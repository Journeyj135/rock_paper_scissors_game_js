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

console.log(getComputerChoice());
