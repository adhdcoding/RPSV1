// 1 = rock; 2 = paper; 3 = scissors
const winValues = ["1-3", "2-1", "3-2"];

//query selectors
const gameResult = document.querySelector("#results");
const roundChoices = document.querySelector("#prev-rounds");
const playerChoice = document.querySelector("#player-choice");
const computerChoice = document.querySelector("#computer-choice");
const rockChoice = document.querySelector("#rock");
const paperChoice = document.querySelector("#paper");
const scissorsChoice = document.querySelector("#scissors");
const currentScore = document.querySelector("#results");

//creates the new game button element
const newGameBtn = document.createElement("button");
newGameBtn.innerText = "New Game?";

//base scores.
let computerScore = 0;
let userScore = 0;
let userChoice = "";
let winState = false;

//event listeners
newGameBtn.addEventListener("click", () => {
  winState = false;
  userScore = 0;
  computerScore = 0;
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  gameResult.textContent = "";
  roundChoices.textContent = "";
  container.removeChild(newGameBtn);
});

rockChoice.addEventListener("click", () => {
  userChoice = "rock";
  playRound();
});
paperChoice.addEventListener("click", () => {
  userChoice = "paper";
  playRound();
});
scissorsChoice.addEventListener("click", () => {
  userChoice = "scissors";
  playRound();
});

//function to decide computer choice
function computerChooses() {
  result = Math.floor(Math.random() * 3 + 1);
  return result;
}

// functions to convert Rock paper and scissors to interger.
function stringToValue(str) {
  let result = 0;
  if (str == "rock" || str == 1) {
    result = 1;
  } else if (str == "paper" || str == 2) {
    result = 2;
  } else if (str == "scissors" || str == 3) {
    result = 3;
  } else {
    result = "ERROR";
  }
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

//plays a single round of RPS
function playRound() {
  if (winState === false) {
    let user = stringToValue(userChoice);
    let comp = computerChooses();
    checkChoices(user, comp);
    //update the text content
    choiceUpdate(user, comp);
    checkWin(userScore, computerScore);
    roundChoices.textContent = result;
    currentScore.textContent = `Wins: ${userScore}
    Loses: ${computerScore}`;
    checkWin(userScore, computerScore);
  } else {
    roundChoices.textContent = "The game is over! Start a new game?";
  }
}

//checks if victory condition has been met
function checkWin(userScore, computerScore) {
  if (userScore === 5 || computerScore === 5) {
    winState = true;
    container.appendChild(newGameBtn);
    if (userScore > computerScore) {
      roundChoices.textContent = `You had ${userScore} points! and the computer had ${computerScore} you win!`;
    } else {
      roundChoices.textContent = `You had ${userScore} points! and the computer had ${computerScore} you lose!`;
    }
  }
}
//compares choices and returns win result
function checkChoices(user, comp) {
  let roundResult = `${user}-${comp}`; // turns values into string to compare against array
  if (user == comp) {
    result = "tie";
  } else if (winValues.includes(roundResult)) {
    ++userScore;
    result = "you win";
  } else {
    ++computerScore;
    result = "you lose";
  }
  return result;
}

//updates text for choices
function choiceUpdate(user, comp) {
  playerChoice.textContent = `
    Player chooses: ${choiceToString(user)}`;
  computerChoice.textContent = `Computer chooses: ${choiceToString(comp)}`;
}
