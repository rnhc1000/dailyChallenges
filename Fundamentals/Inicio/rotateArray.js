var rotate = function(nums, k) {
    let i = 0;
    let tmp = nums[0];
    let idx = nums.length-1;
    // for (i=idx; i >= 0; i--){

    //     tmp=nums[0];
    //     nums[i] = nums[i--]
    // }
    for (i=0; i<=k; i++) {
        console.log(i);
        nums.push(nums.shift());
        console.table(nums);
    }
    return nums;
}
const nums = [1,2,3,4,5,6,7];
console.log(nums);
let k = 3;
let a = rotate(nums,k);
console.log(a)
