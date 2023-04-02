export const rockPaperScissors = (player1: string, player2: string) => {
  if (typeof player1 != "string" || typeof player2 != "string") {
    return "Invalid type entered: You must enter a string with a value of rock, paper or scissors.";
  } else if (player1 === "paper" && player2 === "rock") {
    return "player one wins";
  } else if (player1 === "paper" && player2 === "scissors") {
    return "player one loses";
  } else if (player1 === "paper" && player2 === "paper") {
    return "tie";
  } else if (player1 === "rock" && player2 === "scissors") {
    return "player one wins";
  } else if (player1 === "rock" && player2 === "paper") {
    return "player one loses";
  } else if (player1 === "rock" && player2 === "rock") {
    return "tie";
  } else if (player1 === "scissors" && player2 === "paper") {
    return "player one wins";
  } else if (player1 === "scissors" && player2 === "rock") {
    return "player one loses";
  } else if (player1 === "scissors" && player2 === "scissors") {
    return "tie";
  } else {
    return "Invalid turn: You must pick rock, paper or scissors.";
  }
};
