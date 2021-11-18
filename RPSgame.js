let possibleChoices = ['rock', 'paper', 'scissors'];

function getRandInt(max){
    return Math.floor(Math.random() * max); // Used for generating computer's decision at random
}

function computerPlay() {
    return possibleChoices[getRandInt(3)];
}

function playRound(playerSelection, computerSelection){
    pSelection = playerSelection.toLowerCase();  //ensure lowercase value
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

function game(){
    let compWins = 0;
    let humanWins = 0;
    let ties = 0;
    let rounds = Number(prompt('How many rounds would you like to play?'));
    for(i=0;i<rounds;i++){
        let plyrSelection = prompt('Take your pick!');
        let compSelection = computerPlay();
        let result = playRound(plyrSelection,compSelection);
        if(result === 'Player Win'){
            humanWins += 1;
        } else if (result === 'It\'s a tie!'){
            ties += 1;
        } else {
            compWins += 1;
        }

    }
    if(ties > compWins && ties > humanWins){
        console.log('The result was a tie: ');
        console.log('Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties)
    } else if (humanWins > compWins && humanWins > ties){
        console.log('Human Wins!');
        console.log('Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties)
    } else if (compWins > humanWins && compWins > ties) {
        console.log('Computer Wins!')
        console.log('Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties)
    } else {
        console.log('The match was inconclusive. The results were --- ' + 'Human Wins: ' + humanWins + ' Computer Wins: ' + compWins + ' Ties: ' + ties);
    }
}
