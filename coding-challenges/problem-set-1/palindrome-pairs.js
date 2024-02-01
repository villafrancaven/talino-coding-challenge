function isPalindrome(word) {
  return word === word.split("").reverse().join("");
}

function findPalindromePairs(words) {
  const result = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        const concatenated = words[i] + words[j];
        if (isPalindrome(concatenated)) {
          result.push([i, j]);
        }
      }
    }
  }

  return result;
}

export default findPalindromePairs;
