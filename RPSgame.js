const possibleChoices = ['rock', 'paper', 'scissors'];

let hScoreNumber = 0;
let cScoreNumber = 0;
let tieScoreNumber = 0;
let rounds = 5;


//Selecting divs and text to modify later
const scoreboard = document.getElementById('scoreboard');
const beginBtn = document.getElementById('begin-button');
const buttonSpace = document.getElementById('button-space');
let gameSelections = document.getElementById('selected-choice');
let selections = document.getElementById('selection-buttons');
let message = document.getElementById('message');

//creation of buttons to be used
let scissorButton = document.createElement('button');
let paperButton = document.createElement('button');
let rockButton = document.createElement('button');
let restartButton = document.createElement('button');

//creation of score boxes
let humanScoreBox = document.createElement('div');
let computerScoreBox = document.createElement('div');
let tieBox = document.createElement('div');
let remainingRounds = document.createElement('div');

//text that goes in score boxes
let humanScore = document.createElement('h2');
let computerScore = document.createElement('h2');
let tieScore = document.createElement('h2');


//initial values and set up
humanScore.textContent = hScoreNumber;
computerScore.textContent = cScoreNumber;
tieScore.textContent = tieScoreNumber;
humanScore.classList.add('score-number');
computerScore.classList.add('score-number');
humanScoreBox.textContent = 'Human Score';
computerScoreBox.textContent = 'Computer Score';
tieBox.textContent = 'Ties';

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


function game(plyrChoice) {
    message.remove();
    let plyrSelection = plyrChoice;
    let compSelection = computerPlay();

    let result = playRound(plyrSelection, compSelection);

    if (result === 'Player Win') {
        hScoreNumber++;
        humanScore.textContent = hScoreNumber;
        rounds--;
        gameSelections.textContent = `Human chose ${plyrSelection} and computer chose ${compSelection}. Human Win!`;
    } else if (result === 'It\'s a tie!') {
        tieScoreNumber++;
        tieScore.textContent = tieScoreNumber;
        rounds--;
        gameSelections.textContent = `Human chose ${plyrSelection} and so did the computer! The round is a tie.`;
    } else {
        cScoreNumber++;
        computerScore.textContent = cScoreNumber;
        rounds--;
        gameSelections.textContent = `Human chose ${plyrSelection} and computer chose ${compSelection}. Computer takes the round.`;
    }
    remainingRounds.textContent = 'Remaining Rounds: ' + rounds;
    remainingRounds.appendChild(tieBox);

    if (tieScoreNumber === 3 || hScoreNumber === 3 || cScoreNumber === 3) { //handles when the game conclusion cannot possibly change
        determineWinner(hScoreNumber, cScoreNumber, tieScoreNumber);
        remainingRounds.textContent = 'Remaining Rounds: 0'
        remainingRounds.appendChild(tieBox);
        selections.innerHTML = '';
        selections.appendChild(restartButton);
        restartButton.textContent = 'Restart';
        restartButton.classList.add('restart-button');
    }

    if (rounds === 0) {
        determineWinner(hScoreNumber, cScoreNumber, tieScoreNumber);
        selections.innerHTML = '';
        selections.appendChild(restartButton);
        restartButton.textContent = 'Restart';
        restartButton.classList.add('restart-button');
    }
}

function determineWinner(humanWins, compWins, ties) {
    if (ties > compWins && ties > humanWins) {
        gameSelections.textContent = 'The game has concluded in a tie.';
    }
    if (humanWins > compWins && humanWins > ties) {
        gameSelections.textContent = 'You lucked out this time! Player takes the game!';
    }
    if (compWins > humanWins && compWins > ties) {
        gameSelections.textContent = 'Better luck next time. The computer will be waiting for you...';
    }
    if (humanWins === ties && humanWins > compWins) {
        gameSelections.textContent = 'The ties and player score were equal. I suppose you won.';
    }
    if (compWins === ties && compWins > humanWins) {
        gameSelections.textContent = 'The ties and computer score were the same. I suppose you lost.';
    }
    if (compWins === humanWins && humanWins > ties) {
        gameSelections.textContent = 'Player and computer score are the same. The game concludes in a tie.';
    }

}



beginBtn.addEventListener('click', () => {
    humanScoreBox.classList.add('score-box');
    computerScoreBox.classList.add('score-box');
    tieBox.classList.add('score-box');

    remainingRounds.setAttribute('id', 'remaining-rounds');
    remainingRounds.textContent = 'Remaining Rounds: ' + rounds;

    tieBox.setAttribute('id', 'tie-box');

    scoreboard.appendChild(humanScoreBox);
    scoreboard.appendChild(remainingRounds);
    remainingRounds.appendChild(tieBox);
    scoreboard.appendChild(computerScoreBox);

    humanScoreBox.appendChild(humanScore);
    computerScoreBox.appendChild(computerScore);
    tieBox.appendChild(tieScore);

    beginBtn.remove();
    message.textContent = 'Make Your Choice';

    selections.appendChild(scissorButton);
    scissorButton.textContent = 'Scissors';
    scissorButton.classList.add('scissor-button')

    selections.appendChild(paperButton);
    paperButton.textContent = 'Paper';
    paperButton.classList.add('paper-button');

    selections.appendChild(rockButton);
    rockButton.textContent = 'Rock';
    rockButton.classList.add('rock-button');

});

scissorButton.addEventListener('click', () => {
    game('scissors');
})

paperButton.addEventListener('click', () => {
    game('paper');

})

rockButton.addEventListener('click', () => {
    game('rock');

})

restartButton.addEventListener('click', () => {
    location.reload();
})
