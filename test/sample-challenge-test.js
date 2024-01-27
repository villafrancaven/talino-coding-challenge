import assert from "assert";
import sampleTest from "../coding-challenges/sample-challenge.js";

describe("Sample challenge", () => {
  it("Should add two numbers correctly", () => {
    const result1 = sampleTest(5, 4);
    assert.strictEqual(result1, 9);
  });

  it("Should handle negative numbers", () => {
    const result2 = sampleTest(-3, 7);
    assert.strictEqual(result2, 4);
  });

  it("Should handle zero as one of the numbers", () => {
    const result3 = sampleTest(0, 10);
    assert.strictEqual(result3, 10);
  });

  it("Should handle large numbers", () => {
    const result4 = sampleTest(1000000, 2000000);
    assert.strictEqual(result4, 3000000);
  });
});
