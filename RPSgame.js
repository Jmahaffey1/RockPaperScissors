let possibleChoices = ['rock', 'paper', 'scissors'];

function getRandInt(max) {
    return Math.floor(Math.random() * max); // Used for generating computer's decision at random
}

function computerPlay() {
    return possibleChoices[getRandInt(3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(playerSelection + ' ' + computerSelection);
        return ('It\'s a tie!')
    } else if (playerSelection === 'rock' && computerSelection !== 'paper') {
        console.log(playerSelection + ' ' + computerSelection);
        return ('Player Win');
    } else if (playerSelection === 'scissors' && computerSelection !== 'rock') {
        console.log(playerSelection + ' ' + computerSelection);
        return ('Player Win');
    } else if (playerSelection === 'paper' && computerSelection !== 'scissors') {
        console.log(playerSelection + ' ' + computerSelection);
        return ('Player Win');
    } else {
        console.log(playerSelection + ' ' + computerSelection);
        return ('Computer Win');
    }

}

function determineWinner(compWins, humanWins, ties) {
    if (ties > compWins && ties > humanWins) {
        console.log('The match was a tie: ');
        console.log('Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties)
    } else if (humanWins > compWins && humanWins > ties) {
        console.log('Human Wins!');
        console.log('Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties)
    } else if (compWins > humanWins && compWins > ties) {
        console.log('Computer Wins!')
        console.log('Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties)
    } else {
        console.log('The match was inconclusive or exited. The results were --- ' + 'Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties);
    }
}

function game() {
    let totalRounds = 0
    let compWins = 0;
    let humanWins = 0;
    let ties = 0;
    let rounds = Number(prompt('How many rounds would you like to play?'));
    for (i = 0; i < rounds; i++) {
        let plyrSelection = prompt('Take your pick!');
        if (possibleChoices.includes(plyrSelection.toLowerCase())) {
            let complayerSelection = computerPlay();
            let result = playRound(plyrSelection, complayerSelection);
            totalRounds += 1;
            if (result === 'Player Win') {
                humanWins += 1;
            } else if (result === 'It\'s a tie!') {
                ties += 1;
            } else {
                compWins += 1;
            }

        } else {
            console.log('Illegal value entered. Game restarting');
            game();
        }
    }
    determineWinner(compWins, humanWins, ties);
}
