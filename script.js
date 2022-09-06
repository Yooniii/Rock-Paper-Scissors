let numOfRounds = prompt("How many rounds would you like to play? ")
let round=0;

while (round<numOfRounds){
  let playerSelection = prompt("Rock, Paper, Scissors?");
  let computerSelection = getComputerChoice();
  console.log("The computer chose "+ computerSelection)
  console.log(playRound(playerSelection, computerSelection));
  round++;
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection==computerSelection) {
    return ("Tie!")
  }

  else if (playerSelection=="rock"){
    if (computerSelection=="paper"){
      return("You lose! Paper beats rock");
    }
    else {
      return ("You win! Rock beats scissors");
    }
  }

  else if (playerSelection=="paper"){
    if (computerSelection=="rock"){
      return ("You win! Paper beats rock")
    }
    else {
      return ("You lose! Scissors beats paper")
    }
  }

  else {
    if (computerSelection=="rock"){
      return ("You lose! Rock beats scissors")
    }
    else {
      return ("You win! Scissors beats paper")
    }
  }
}

function getComputerChoice () {
  let randomNum = Math.floor(Math.random()*3)+1;
  if (randomNum==1){
    return ("rock")
  }
  else if (randomNum==2){
    return ("paper")
  }
  else {
    return ("scissors")
  }
}

