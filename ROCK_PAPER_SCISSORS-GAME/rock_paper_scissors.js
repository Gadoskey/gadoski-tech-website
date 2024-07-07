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
    }, 1000);
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
/*document.getElementById("rockButton").addEventListener("keydown", (event) => {
  if(event.key === 'r') {
    playGame('rock');
    //event.preventDefault();
  }
});*/
document.getElementById("paperButton").addEventListener("click", () => {
  playGame('paper');
});
/*document.getElementById("paperButton").addEventListener("keydown", (event) => {
  if(event.key === 'p') {
    playGame('paper');
  }
});*/
document.getElementById("scissorsButton").addEventListener("click", () => {
  playGame('scissors');
});
document.body.addEventListener("keydown", (event) => {
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
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }
  }
  if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You Lose.";
    }
  }
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }
  if (result === "You Win.") {
    scores.wins += 1;
  }
  if (result === "You Lose.") {
    scores.losses += 1;
  }
  if (result === "Tie.") {
    scores.ties += 1;
  }
  localStorage.setItem("scores", JSON.stringify(scores));
  printScore();
  document.querySelector(".moves").innerHTML = `Player
      <img src="${playerMove}-emoji.png" alt="">
      <img src="${computerMove}-emoji.png" alt="">
      Computer`;
  document.querySelector(".game-result").innerHTML = result;
}
/*function playGame(playerMove) {
  const computerMove = getComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You Lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  }

  if (result === "You Win.") {
    scores.wins += 1;
  }
  if (result === "You Lose.") {
    scores.losses += 1;
  }
  if (result === "Tie.") {
    scores.ties += 1;
  }
  localStorage.setItem("scores", JSON.stringify(scores));
  printScore();
  document.querySelector(".moves").innerHTML = `Player <img src="${getEmoji(playerMove)}-emoji.png" alt=""> Computer <img src="${getEmoji(computerMove)}-emoji.png" alt="">`;
  document.querySelector(".game-result").innerHTML = result;
}
function getEmoji(move) {
  switch (move) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
  }
}*/



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
  ).innerHTML = `Wins: ${scores.wins} --- Losses: ${scores.losses} --- Ties: ${scores.ties}`;
}
function resetScores() {
  scores = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem("scores");
  printScore();
}
printScore();