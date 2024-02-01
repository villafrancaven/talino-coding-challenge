import assert from "assert";
import findPalindromePairs from "../coding-challenges/problem-set-1/palindrome-pairs.js";

describe("Palindrome Pairs", () => {
  it("Case 1: Should find palindrome pairs in the given list of words", () => {
    const input1 = ["bat", "tab", "cat"];
    const output1 = findPalindromePairs(input1);
    assert.deepStrictEqual(output1, [
      [0, 1],
      [1, 0],
    ]);
  });

  it("Case 2: Should find palindrome pairs in the given list of words", () => {
    const input2 = ["abcd", "dcba", "lls", "s", "sssll"];
    const output2 = findPalindromePairs(input2);
    assert.deepStrictEqual(output2, [
      [0, 1],
      [1, 0],
      [2, 4],
      [3, 2],
    ]);
  });

  it("Case 3: Should find palindrome pairs in the given list of words", () => {
    const input3 = ["race", "car", "hannah", "banana", "level"];
    const output3 = findPalindromePairs(input3);
    assert.deepStrictEqual(output3, [[0, 1]]);
  });

  it("Case 4: Should find palindrome pairs in the given list of words", () => {
    const input3 = ["rad", "civ", "ar", "deified", "ic"];
    const output3 = findPalindromePairs(input3);
    assert.deepStrictEqual(output3, [
      [0, 2],
      [1, 4],
    ]);
  });
});
