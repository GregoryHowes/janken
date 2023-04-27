//Return a random choice of either Rock, Scissors or Paper
function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3);
    if (randomInt == 0) {
        return "ROCK";
    } else if (randomInt == 1) {
        return "SCISSORS";
    } else {
        return "PAPER";
    }
}

//Play single round and return a string to show the winner
function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toUpperCase();
    console.log(computerSelection);
    if (playerChoice == computerSelection) {
        //check for draw first
        //I think this reduces the checking we have to do later
        return `Both people drew ${playerChoice} - DRAW!`;
    } else if (playerChoice == "ROCK" && computerSelection != "PAPER")  {
        //human wins with rock
        return `Human wins with ROCK vs ${computerSelection}`;
    } else if (playerChoice == "SCISSORS" && computerSelection != "ROCK") {
        //human wins with scissors
        return `Human wins with SCISSORS vs ${computerSelection}`;
    } else if (playerChoice == "PAPER" && computerSelection != "SCISSORS") {
        //human wins with paper
        return `Human wins with PAPER vs ${computerSelection}`;
    } else {
        //it's not a draw, and human didn't win
        //so therefore the computer must have won
        return `Computer wins with ${computerSelection} vs ${playerChoice}`;
    }
}

//play five rounds, keeping track of score and outputting the winner's name
function game() {
    let computerWins = 0;
    let playerWins = 0;
    for (let gameCount = 0; gameCount < 5; gameCount++) {
        let result = playRound (prompt("Enter Rock, Scissors or Paper"), getComputerChoice());
        console.log(result);
        if (result.includes("Human")) {
            playerWins++;
        } else if (result.includes("Computer")) {
            computerWins++;
        } else {
            return `Both teams have ${playerWins} wins`;
        }
    }
    if (playerWins > computerWins) {
        return `Human wins with ${playerWins} vs ${computerWins}`;
    } else {
        return `Computer wins with ${computerWins} vs ${playerWins}`;
    }

}