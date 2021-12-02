const possibleChoices = ['rock', 'paper', 'scissors'];

const scoreboard = document.getElementById('scoreboard');
const beginBtn = document.getElementById('begin-button');
const buttonSpace = document.getElementById('button-space');
let gameSelections = document.getElementById('selected-choice')
let selections = document.getElementById('selection-buttons');
let message = document.getElementById('message');

let scissorButton = document.createElement('button');
let paperButton = document.createElement('button');
let rockButton = document.createElement('button');

let scissorImage = document.createElement('img');
let paperImage = document.createElement('img');
let rockImage = document.createElement('img');

let humanScoreBox = document.createElement('div');
let computerScoreBox = document.createElement('div');
let tieBox = document.createElement('div');
let remainingRounds = document.createElement('div');


let hScoreNumber = 0;
let cScoreNumber = 0;
let tieScoreNumber = 0;
let rounds = 0;

let humanScore = document.createElement('h2');
let computerScore = document.createElement('h2');
let tieScore = document.createElement('h2');
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

function game(plyrChoice, rnds) {
    let compWins = 0;
    let humanWins = 0;
    let ties = 0;
    let plyrSelection = plyrChoice;
    if (possibleChoices.includes(plyrSelection.toLowerCase())) {
        let complayerSelection = computerPlay();
        let result = playRound(plyrSelection, complayerSelection);
        if (result === 'Player Win') {
            humanWins += 1;
            hScoreNumber += 1;
            rounds -= 1;
        } else if (result === 'It\'s a tie!') {
            ties += 1;
            rounds -= 1;
        } else {
            compWins += 1;
            cScoreNumber += 1;
            rounds -= 1;
        }

    } else {
        console.log('Illegal value entered. Game restarting');
        game();
    }
    determineWinner(compWins, humanWins, ties);
}



beginBtn.addEventListener('click', () => {
    rounds = Number(prompt('How many rounds would you like to play?'));
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
    scissorImage.src = 'images/scissors.png';
    scissorImage.setAttribute('id', 'scissor-image')
    scissorImage.classList.add('images')
    gameSelections.appendChild(scissorImage);
    let playerSelection = 'scissors'
    game(playerSelection, rounds);

})

paperButton.addEventListener('click', () => {
    paperImage.src = 'images/paper.jpeg';
    paperImage.setAttribute('id', 'paper-image')
    paperImage.classList.add('images')
    gameSelections.appendChild(paperImage);
    let playerSelection = 'paper'
    game(playerSelection, rounds);

})

rockButton.addEventListener('click', () => {
    rockImage.src = 'images/rock.png';
    rockImage.setAttribute('id', 'rock-image')
    rockImage.classList.add('images')
    gameSelections.appendChild(rockImage);
    let playerSelection = 'rock'
    game(playerSelection, rounds);

})