# Problem Set 1: Palindrome Pairs

## Problem Description

Given a list of unique words, your task is to find all pairs of distinct indices (i, j) in the list so that
the concatenation of the two words, i.e., words[i] + words[j], forms a palindrome.

Example:
For the input ["bat", "tab", "cat"], the output should be [[0, 1], [1, 0]] because the
palindromes are ["battab", "tabbat"].

## Solution Overview

To solve the challenge, I've implemented two functions:

1. The first function checks if a given word is a palindrome.

2. The second function serves as the main function. It iterates through an array of words, concatenates them, and then checks if the resulting word is a palindrome using the first function. If the concatenated word is indeed a palindrome, it pushes the indexes of the words into the result array.

## Instructions to Run the Code

To run the code, execute the following command in your terminal:

```bash
npm test test/problem-set-1-test.js

```

Note: You can always add your test cases in **_problem-set-1-test.js_**
