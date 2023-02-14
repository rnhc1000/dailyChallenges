function fibonacci(num) {
/**
 * base case.... Fibonacci series always starts at 0,1
 */
  if (num < 2) {
    return num;
  }
  return fibonacci(num-1) + fibonacci(num-2);
}

function fib(n, memo) {
  if (n < 2) {
    return n;
  }
  if(!memo[n]) {
    // when the object doesn't have the property of n
    // store the result of the call inside memo[n]
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  }
  return memo[n];
}

console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(8))

console.log(fib(100, {}));
