/**
 * Given an int array nums and an int target. 
 * Find two integers in nums such that the sum is closest to target.
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


    if (!Array.isArray(nums)) 
        return -1;
    if (nums.length === 0) return -1;
    target = +target;
    let numLen = nums.length;
    let pos = [];
    let sum = 0;
    
    let i,j,k = 0;
    console.log("Tipo...", typeof(target));
    for ( i=0; i<numLen; i++){
        for (j=i+1; j<numLen; j++) {
            sum=nums[i]+nums[j];
            console.log("Soma...",sum);
            if (target === sum) {
                pos[k]=i;
                k++;
                pos[k]= j;
                return pos;
            }
            continue;
        }
    }

    //return "Incremente o valor do target";
}

//const nums = [34, 23, 12, 24, 75, 33, 54, 8 ];
const nums = [2,7,11,15];
let target = 9;

console.log(twoSum(nums));