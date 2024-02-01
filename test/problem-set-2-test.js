import assert from "assert";
import checkValidParenthesis from "../coding-challenges/problem-set-2/valid-parentheses.js";

describe("Valid Parenthesis", () => {
  it('Case 1: Should return true for valid input "()[]{}"', () => {
    assert.strictEqual(checkValidParenthesis("()[]{}"), true);
  });

  it('Case 2: Should return false for invalid input "([)]"', () => {
    assert.strictEqual(checkValidParenthesis("([)]"), false);
  });

  it('Case 3: Should return true for valid input "{[]}"', () => {
    assert.strictEqual(checkValidParenthesis("{[]}"), true);
  });

  it('Case 4: Should return false for invalid input "((()))]"', () => {
    assert.strictEqual(checkValidParenthesis("((()))]"), false);
  });

  it('Case 5: Should return true for valid input "((()))"', () => {
    assert.strictEqual(checkValidParenthesis("((()))"), true);
  });
});
