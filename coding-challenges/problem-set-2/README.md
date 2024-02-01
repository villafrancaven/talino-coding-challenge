# Problem Set 2: Valid Parentheses

## Problem Description

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is
valid. An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example:
**Input**: ()[]{}
**Output**: True

**Input**: ([)]
**Output**: False

## Solution Overview

For this challenge, I've created a function that accepts a string parameter. Using the .length property, the function iterates through the number of characters in the string. Within the loop, it checks if the character is an opening bracket. If it is, the character is pushed onto the stack array. If the character is not an opening bracket, it pops the last value in the stack array. If the last value of the array doesn't match the character being checked, the function automatically returns false, as it doesn't meet the requirement that the brackets need to be closed in the correct order.

Finally, after looping through the characters, if the length of the stack array is 0, the function returns true.

## Instructions to Run the Code

To run the code, execute the following command in your terminal:

```bash
npm test test/problem-set-2-test.js

```

Note: You can always add your test cases in **_problem-set-2-test.js_**
