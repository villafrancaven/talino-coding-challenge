function checkValidParenthesis(string) {
  const stack = [];
  const bracketPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < string.length; i++) {
    const char = string.charAt(i);

    if (bracketPairs[char]) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();

      if (bracketPairs[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

export default checkValidParenthesis;
