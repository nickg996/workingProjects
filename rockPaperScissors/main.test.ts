/**
    Player one paper, player two rock; player one wins
	Player one paper, player two scissors; player one loses
	Player one paper, player two paper; tie
	Player one rock, player two scissors; player one wins
	Player one rock, player two paper; player one loses
	Player one rock, player two rock; tie
	Player one scissors, player two paper; player one wins
	Player one scissors, player two rock; player one loses
	Player one scissors, player two scissors; tie
 */

// import { describe, expect, test } from "@jest/globals";

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

import { rockPaperScissors } from "./main";

describe("rock paper scissors", () => {
  test("Player one paper, player two rock; player one wins", () => {
    var answer = rockPaperScissors("paper", "rock");
    expect(answer).toBe("player one wins");
  });

  test("Player one paper, player two scissors; player one loses", () => {
    var answer = rockPaperScissors("paper", "scissors");
    expect(answer).toBe("player one loses");
  });

  test("Player one paper, player two paper; tie", () => {
    var answer = rockPaperScissors("paper", "paper");
    expect(answer).toBe("tie");
  });

  test("Player one rock, player two scissors; player one wins", () => {
    var answer = rockPaperScissors("rock", "scissors");
    expect(answer).toBe("player one wins");
  });

  test("Player one rock, player two paper; player one loses", () => {
    var answer = rockPaperScissors("rock", "paper");
    expect(answer).toBe("player one loses");
  });

  test("Player one rock, player two rock; tie", () => {
    var answer = rockPaperScissors("rock", "rock");
    expect(answer).toBe("tie");
  });

  test("Player one scissors, player two paper; player one wins", () => {
    var answer = rockPaperScissors("scissors", "paper");
    expect(answer).toBe("player one wins");
  });

  test("Player one scissors, player two rock; player one loses", () => {
    var answer = rockPaperScissors("scissors", "rock");
    expect(answer).toBe("player one loses");
  });

  test("Player one scissors, player two scissors; tie", () => {
    var answer = rockPaperScissors("scissors", "scissors");
    expect(answer).toBe("tie");
  });

  test("Player one scissors, player two scissors; Invalid turn", () => {
    var answer = rockPaperScissors("null", "null");
    expect(answer).toBe("Invalid turn: You must pick rock, paper or scissors.");
  });
});
