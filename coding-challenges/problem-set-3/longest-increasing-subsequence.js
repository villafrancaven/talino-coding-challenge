function findLongestIncreasingSubsequence(nums) {
  if (nums.length === 0) {
    return 0;
  }

  const lengths = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        lengths[i] = Math.max(lengths[i], lengths[j] + 1);
      }
    }
  }

  return Math.max(...lengths);
}

export default findLongestIncreasingSubsequence;
