/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * Given an array of integers nums which is sorted 
 * in ascending order, and an integer target, 
 * write a function to search target in nums. 
 * If target exists, then return its index. 
 * Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 */

var search = function(nums, target) {
    let pos = null;
    for (let key in nums){
        if (nums[key] === target){
            pos = key;
            break;
        } 
    }

    if (pos) return pos; 
    return -1;
}


let nums = [-1,0,3,5,9,12], target = 9;

console.log(search(nums,target));