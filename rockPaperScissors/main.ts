export enum Move {
  paper,
  rock,
  scissors
}

export const rockPaperScissors = (player1: Move, player2: Move) => {
  if (player1 === Move.paper && player2 === Move.rock) {
    return "player one wins";
  } else if (player1 === Move.paper && player2 === Move.scissors) {
    return "player one loses";
  } else if (player1 === Move.paper && player2 === Move.scissors) {
    return "tie";
  } else if (player1 === Move.paper && player2 === Move.paper) {
    return "tie";
  } else if (player1 === Move.rock && player2 === Move.scissors) {
    return "player one wins";
  } else if (player1 === Move.rock && player2 === Move.paper) {
    return "player one loses";
  } else if (player1 === Move.rock && player2 === Move.rock) {
    return "tie";
  } else if (player1 === Move.scissors && player2 === Move.paper) {
    return "player one wins";
  } else if (player1 === Move.scissors && player2 === Move.rock) {
    return "player one loses";
  } else if (player1 === Move.scissors && player2 === Move.scissors) {
    return "tie";
  } else {
    return "Invalid turn: You must pick rock, paper or scissors.";
  }
};
