let scores = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
let isAutoPlay = false;
let intervalId;
function autoPlayGame()
{
  if (!isAutoPlay)
  {
    intervalId = setInterval(function()
    {
      const autoMoves = getComputerMove();
      playGame(autoMoves);
    }, 2000);
    isAutoPlay = true;
  }
}
document.getElementById("autoPlay").addEventListener("click", autoPlayGame);
function stopAutoPlay()
{
  clearInterval(intervalId);
  isAutoPlay = false;
}
document.getElementById("stopAutoPlay").addEventListener("click", stopAutoPlay);
document.getElementById("rockButton").addEventListener("click", () => {
  playGame('rock');
});
document.getElementById("paperButton").addEventListener("click", () => {
  playGame('paper');
});
document.getElementById("scissorsButton").addEventListener("click", () => {
  playGame('scissors');
});
document.body.addEventListener("keydown", (event) => {
  if (event.ctrlKey && ["r", "p", "s"].includes(event.key)) {
    return; // Do nothing when Ctrl + R, Ctrl + P, or Ctrl + S is pressed
}

  if(event.key === 'r') {
    playGame('rock');
  }
  else if(event.key === 'p') {
    playGame('paper');
  }
  else if(event.key === 's') {
    playGame('scissors');
  }
});
function playGame(playerMove) {
  const computerMove = getComputerMove();
  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You Lose";
    } else if (computerMove === "scissors") {
      result = "You Win";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You Lose";
    }
  }
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }
  if (result === "You Win") {
    scores.wins += 1;
  }
  if (result === "You Lose") {
    scores.losses += 1;
  }
  if (result === "Tie") {
    scores.ties += 1;
  }
  localStorage.setItem("scores", JSON.stringify(scores));
  printScore();
  document.querySelector(".moves").innerHTML = `<span class="playerName">You</span>
      <img src="${playerMove}-emoji.png" alt="">
      <span class="computerNameImg">
        <img src="${computerMove}-emoji.png" alt="">
      </span>
      <span class="computerName">Comp</span>`;
  document.querySelector(".moves").classList.add('hasContent');
  document.querySelector(".game-result").innerHTML = result;
}

function getComputerMove() {
  const randomNum = Math.floor(Math.random() * 3);
  //gets a random number with math.round between 0 to 0.9 and uses math.floor to round it to the closest whole number
  //then multiplies it with 3 to return the numbers between 0 to 2;
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function printScore() {
  document.querySelector(
    ".final-result"
  ).innerHTML = `<div class="frScores1">Wins: ${scores.wins}</div>
  <div class="frScores2">Losses: ${scores.losses}</div>
  <div class="frScores3">Ties: ${scores.ties}</div>`;
}
function resetScores() {
  scores = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("scores");
  printScore();
}
printScore();


/*


let scores = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let isAutoPlay = false;
let intervalId;

function autoPlayGame() {
  if (!isAutoPlay) {
    intervalId = setInterval(function () {
      playComputerGame(); // Start computer vs. computer game
    }, 2000);
    isAutoPlay = true;
  }
}

function stopAutoPlay() {
  clearInterval(intervalId);
  isAutoPlay = false;
}

document.getElementById("autoPlay").addEventListener("click", autoPlayGame);
document.getElementById("stopAutoPlay").addEventListener("click", stopAutoPlay);

document.getElementById("rockButton").addEventListener("click", () => {
  playGame('rock');
});
document.getElementById("paperButton").addEventListener("click", () => {
  playGame('paper');
});
document.getElementById("scissorsButton").addEventListener("click", () => {
  playGame('scissors');
});

document.body.addEventListener("keydown", (event) => {
  if (event.ctrlKey && ["r", "p", "s"].includes(event.key)) {
    return; // Do nothing when Ctrl + R, Ctrl + P, or Ctrl + S is pressed
  }

  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
});

function playGame(playerMove) {
  if (isAutoPlay) {
    return; // Do nothing if in auto-play mode
  }

  const computerMove = getComputerMove();
  let result = getGameResult(playerMove, computerMove);

  updateScores(result);
  updateUI(playerMove, computerMove, result);
}

function playComputerGame() {
  const computerMove1 = getComputerMove();
  const computerMove2 = getComputerMove();
  let result = getGameResult(computerMove1, computerMove2);

  updateScores(result);
  updateUI(computerMove1, computerMove2, result);
}

function getGameResult(move1, move2) {
  let result = "";
  if (move1 === move2) {
    result = "Tie";
  } else if (
    (move1 === "rock" && move2 === "scissors") ||
    (move1 === "paper" && move2 === "rock") ||
    (move1 === "scissors" && move2 === "paper")
  ) {
    result = isAutoPlay ? "Computer 1 Wins" : "Player Wins";
  } else {
    result = isAutoPlay ? "Computer 2 Wins" : "Computer Wins";
  }
  return result;
}

function updateScores(result) {
  if (result === "Player Wins") {
    scores.wins += 1;
  } else if (result === "Computer Wins") {
    scores.losses += 1;
  } else if (result === "Tie") {
    scores.ties += 1;
  }
  localStorage.setItem("scores", JSON.stringify(scores));
  printScore();
}

function updateUI(playerMove, computerMove, result) {
  const playerName = isAutoPlay ? "Computer" : "You";
  const opponentName = isAutoPlay ? "Computer" : "Computer"; // Always Computer in player vs. computer mode

  document.querySelector(".moves").innerHTML = `<span class="playerName">${playerName}</span>
    <img src="${playerMove}-emoji.png" alt="">
    <span class="computerNameImg">
      <img src="${computerMove}-emoji.png" alt="">
    </span>
    <span class="computerName">${opponentName}</span>`;
    
  document.querySelector(".moves").classList.add('hasContent');
  document.querySelector(".game-result").innerHTML = result;
}

function getComputerMove() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function printScore() {
  document.querySelector(
    ".final-result"
  ).innerHTML = `<div class="frScores1">Wins: ${scores.wins}</div>
  <div class="frScores2">Losses: ${scores.losses}</div>
  <div class="frScores3">Ties: ${scores.ties}</div>`;
}

function resetScores() {
  scores = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("scores");
  printScore();
}

printScore();*/
