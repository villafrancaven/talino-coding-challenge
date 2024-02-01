# Problem Set 3: Longest Increasing Subsequence

## Problem Description

Given an unsorted array of integers, find the length of the longest increasing subsequence.

The "Longest Increasing Subsequence" problem asks for the length of the longest increasing
subsequence in a given array. For example, given the array: [10, 9, 2, 5, 3, 7, 101, 18]

One possible increasing subsequence is [2, 5, 7, 18], and the length of this subsequence is 4. The goal
is to find the length of the longest increasing subsequence for a given array.

Example:
Input: [10, 9, 2, 5, 3, 7, 101, 18]
Output: 4

## Solution Overview

For this challenge, I have created a function that accepts an array of numbers. Initially, it checks if there are no values inside the array. If it's an empty array, it returns 0. Following this, I initialize a new array named "lengths" that matches the length of the array parameter. Each value is set to 1.

The nested loops operate as follows: the outer loop iterates over each index in the array, and the inner loop ranges from the beginning of the array up to the current index of the outer loop. During this process, it compares whether the current number at the index of the outer loop is greater than the previous values in the array. If it is, it updates the current value of lengths[index of the outer loop]. This signifies an extension of the increasing subsequence length.

At the end, the function checks the highest value in the "lengths" array, representing the length of the longest increasing subsequence.

## Instructions to Run the Code

To run the code, execute the following command in your terminal:

```bash
npm test test/problem-set-3-test.js

```

Note: You can always add your test cases in **_problem-set-3-test.js_**
