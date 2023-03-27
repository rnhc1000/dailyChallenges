nums = [-4,-1,0,3,10];
nums = [-7,-3,2,3,11]
var sortedSquares = function(nums) {
    const squared = [];
    let squaredSorted = [];
    for (let i in nums) {
        squared[i] = nums[i]*nums[i];
    }
   squaredSorted = squared.sort(function(x,y) {return x-y});
   return squaredSorted;
}

let a = sortedSquares(nums);

console.log({a})