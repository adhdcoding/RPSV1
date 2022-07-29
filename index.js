const winValues = ["1-3", "2-1", "3-0"];
let userChoice = prompt('whats your choice').toLowerCase()
let computerScore = 0;
let userScore = 0;
let userValue = stringToValue(userChoice)

function computerChooses() {
  result = Math.floor(Math.random() * 3 + 1);
  console.log("computer:", result);
  return result;
}
function stringToValue(str){
    let result = 0;
  if (str == "rock" || str == 1) {
    result = 1;
  } else if (str == "Paper" || str == 2) {
    result = 2
  } else if (str == "Scissors" || str == 3) {
    result = 3;
  }
  console.log(result)
  return result
}
function choiceToString(n) {
  let result = '';
  if (n == 1) {
    result = "Rock";
  } else if (n == 2) {
    result = "Paper";
  } else if (n == 3) {
    result = "Scissors";
  }console.log(result)
  return result
}

function playRound(user, comp) {
   
    let roundResult = `${user}-${comp}`;
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
    Computer chooses: ${choiceToString(comp)}`)
    console.log(computerScore, " human score:", userScore)
  }

  playRound(userValue,computerChooses())