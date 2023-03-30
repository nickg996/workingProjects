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

describe('rock paper scissors', () => {
	test('Player one paper, player two rock; player one wins', () => {
		var answer = rockPaperScissors("paper", "rock")
		
		expect(answer).toBe('player one wins')
	})
});