function coinChange(coins, amount) {
  // Each memo[i] is the least amount of coins
  // that can make the value equal to the index value.
  let change = Math.floor(amount)
  console.log(change)
  const memo = Array(change + 1).fill(Infinity);
  memo[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        console.log(memo[i])
        memo[i] = Math.min(memo[i], memo[i - coin] + 1);
      }
    }
  }
  return memo[amount] === Infinity ? -1 : memo;
}


let coins = [  1,  3,  2,  11, 90,
  17, 31, 40, 101]

let amount=36.26
console.log(coinChange(coins,amount));