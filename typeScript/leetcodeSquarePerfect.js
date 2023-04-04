/**
 * // Here's an algorithm that can solve this problem:
 1. Start with a guess value of the square root of num,
 which can be obtained by dividing the number by 2.

 2. While the square of the guess value is greater than num, update the guess value by dividing it by 2.

 3. Use binary search to find the square root of num.

 4. If the square of the mid value of the search is greater than num, update the high value to mid - 1.

 5. If the square of the mid value of the search is less than num, update the low value to mid + 1.

 6. If the square of the mid value of the search is equal to num, return true.
 If the low value becomes greater than the high value, return false.

 In the above code, we have defined a function called isPerfectSquare that takes a positive integer num as input and returns True if num is a perfect square, and False otherwise. The function starts by checking if the input num is less than 2, which is always a perfect square. If the number is greater than 2, it initializes low to 2 and high to num  2, and then uses binary search to find the square root of num.

 By using this algorithm, we can determine whether a given number is a perfect square or not without using any built-in library function.
 Given an integer n, return the least number of perfect square numbers that sum to n.
A perfect square is an integer that is the square of an integer; 
in other words, it is the product of some integer with itself. 
For example, 1, 4, 9, and 16 are perfect squares 
while 3 and 11 are not.
*/
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n < 2) return n;

  let low = 2;
  let high = (n / 2).toFixed(0);
  console.log("High ", high);
  let mid = 0;
  let guess = 0;

  while (low <= high) {
    mid = +low + +high;
    
    console.log("Low ",low);
    console.log("Mid ",mid);
    mid = (mid/2).toFixed(0);
    guess = mid * mid;
    console.log("Mid ",mid);
    console.log("Guess ", guess);


    if (guess == n) {
        return true;
    } else if (guess > n) {
        high = mid -= 1;
    } else {
        low = mid += 1;
    }
  //console.log(square);
    }
    return false;

}

console.log(numSquares(144));
