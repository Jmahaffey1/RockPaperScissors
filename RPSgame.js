possibleChoices = ['rock', 'paper', 'scissors'];

function getRandInt(max){
    return Math.floor(Math.random() * max);
}

function computerPlay() {
    return possibleChoices[getRandInt(3)];
}

function playRound(playerSelection, computerSelection){
    pSelection = playerSelection.toLowerCase();
    cSelection = computerSelection.toLowerCase();

    if(pSelection === cSelection){
        console.log(pSelection + ' ' + cSelection);
        return ('It\'s a tie!')
    } else if(pSelection === 'rock' && cSelection !== 'paper'){
        console.log(pSelection + ' ' + cSelection);
        return ('Player Win');
    } else if(pSelection === 'scissors' && cSelection !== 'rock') {
        console.log(pSelection + ' ' + cSelection);
        return ('Player Win');
    } else if(pSelection === 'paper' && cSelection !== 'scissors'){
        console.log(pSelection + ' ' + cSelection);
        return ('Player Win');
    } else {
        console.log(pSelection + ' ' + cSelection);
        return ('Computer Win');
    }

}

const playerSelection = 'paper';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
