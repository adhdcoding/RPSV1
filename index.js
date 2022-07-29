const winValues = ["1-3", "2-1", "3-2"]; // 1 = rock; 2 = paper; 3 = scissors

//base scores.
let computerScore = 0;
let userScore = 0;

function computerChooses() {
  result = Math.floor(Math.random() * 3 + 1);
  console.log("computer:", result);
  return result;
}

// functions to convert Rock paper and scissors to interger.
function stringToValue(str) {
  let result = 0;
  if (str == "rock" || str == 1) {
    result = 1;
  } else if (str == "Paper" || str == 2) {
    result = 2;
  } else if (str == "Scissors" || str == 3) {
    result = 3;
  }
  console.log(result);
  return result;
}

//function to convert interger to string.
function choiceToString(n) {
  let result = "";
  if (n == 1) {
    result = "Rock";
  } else if (n == 2) {
    result = "Paper";
  } else if (n == 3) {
    result = "Scissors";
  }
  return result;
}


//function to play a single round of RPS - 
function playRound() {
  let user = prompt("Rock, Paper or Scissors, the choice is yours");
  let comp = computerChooses();
  let roundResult = `${user}-${comp}`; // Adds both the value of the player and computer to a string to use with the winValue array
  if (user == comp) {
    result = "tie";
  } else if (winValues.includes(roundResult)) {
    ++userScore;
    result = "you win";
  } else {
    ++computerScore;
    result = "you lose";
  }
  console.log(`
    Player chooses: ${choiceToString(user)}
    Computer chooses: ${choiceToString(comp)}`);
  return result;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    playRound();
    alert(`The result for round ${i} is... ${result}`);
  }
  if (userScore > computerScore) {
    alert(
      `You had ${userScore} points! and the computer had ${computerScore} you win!`
    );
  } else if (userScore < computerScore) {
    alert(`You had ${userScore} points! and the computer had ${computerScore} you lose!`);
  } else {
    alert(`You had ${userScore} points! and the computer had ${computerScore} its a tie!`);
  }
}

playGame();
