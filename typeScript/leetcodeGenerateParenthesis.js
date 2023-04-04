/**
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 *
 * Example 2:
 * Input: n = 1
 *
 * Output: ["()"]
 *
 * Constraints:
 *
 * 1 <= n <= 8
 * */

var generateParenthesis = function (n) {
  let open = "(";
  let closed = ")";
  let pairs = [];
  let numberOfCombinations = 0;
  let combinations = function (n) {
    if (n === 0) return 1;
    return n * combinations(n - 1);
  };

  // if (n === 1 || n === 2) {
  //     numberOfCombinations= combinations(n);
  // } else {
  //     numberOfCombinations= combinations(n)-1;
  // }
  numberOfCombinations = combinations(n);
  console.log(numberOfCombinations);
  let count = numberOfCombinations;
  while (numberOfCombinations != 0) {
    for (let i = 0; i < n; i++) {
      pairs[count] = open + closed;
    }
    numberOfCombinations--;
    count--;
  }

  console.log(pairs);
};

// while (combinations > 0) {

// }

let n = 3;

generateParenthesis(2);
