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

var generateParenthesis = function(n) {

    let open = "(";
    let closed = ")";
    let numberOfCombinations=0;
    let combinations = function(n) {
        if (n === 0) return 1;
        return n * combinations(n-1);
    }

    if (n === 1 || n === 2) {
        numberOfCombinations= combinations(n);
    } else {
        numberOfCombinations= combinations(n)-1;
    }

    console.log(numberOfCombinations);
    while (n != 0) {

        console.log(open + closed);
        n--
    }
}

while (combinations > 0) {

    
}

let n = 4;

generateParenthesis(n);