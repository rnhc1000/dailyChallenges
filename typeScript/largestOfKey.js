/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numLen = nums.length;
    let pos = [];
    let idxPos = 0;
    let sum =0;
    let i,j,k=0;
    for ( i=0; i<numLen; i++){
        for (j=i+1; j<numLen; j++) {
            sum=nums[i]+nums[j];
            if (sum > target) {
                pos[k]=nums[i];
                k++;
                pos[k]=nums[j];
            }
        }
    }


    pos = pos.sort((a,b)=>a-b);

    console.log(pos);

    sum = pos.reduce((a,b)=>a+b);

    return sum;
}



let nums= [32,12,25,56];
let target = 80;
console.log(twoSum(nums,target));