import assert from "assert";
import findLongestIncreasingSubsequence from "../coding-challenges/problem-set-3/longest-increasing-subsequence.js";

describe("Longest Increasing Subsequence", function () {
    it("Case 1: Should return 4 for [10, 9, 2, 5, 3, 7, 101, 18]", function () {
      const nums = [10, 9, 2, 5, 3, 7, 101, 18];
      assert.strictEqual(findLongestIncreasingSubsequence(nums), 4);
    });

  it("Case 2: Should return 3 for [0, 8, 4, 12, 2]", function () {
    const nums = [0, 8, 4, 12, 2];
    assert.strictEqual(findLongestIncreasingSubsequence(nums), 3);
  });

  it("Case 3: Should return 5 for [1, 2, 3, 4, 5]", function () {
    const nums = [1, 2, 3, 4, 5];
    assert.strictEqual(findLongestIncreasingSubsequence(nums), 5);
  });

    it("Case 4: Should return 1 for [5, 4, 3, 2, 1]", function () {
      const nums = [5, 4, 3, 2, 1];
      assert.strictEqual(findLongestIncreasingSubsequence(nums), 1);
    });

    it("Case 5: Should return 0 for empty array", function () {
      const nums = [];
      assert.strictEqual(findLongestIncreasingSubsequence(nums), 0);
    });
});
