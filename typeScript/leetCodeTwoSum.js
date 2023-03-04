/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let pos = []
  let sum = 0;
  let numSize = nums.length;
  for (let i = 0; i < numSize; i++) {
    for (let k = i+1; k < numSize; k++) {
      sum = nums[i] + nums[k];
      if (sum == target) {
        pos[i] = i;
        pos[k] = k;
      }
    }
  }

  const filteredPos = pos.filter((emptyValues) => {
    return  emptyValues !== null &&
            emptyValues !== 'undefined' &&
            emptyValues !== "";
  });

  return filteredPos;
}
let nums = [2,7,11,15], target = 26
let numx = [3,2,4], k =6;
console.log(twoSum(nums ,target))

function SomaDois(nums, k) {

  let pos=[];
  let sum=0;
  let x=0;

  for (let idx in nums){
    sum=nums[+idx]+nums[+idx+1];
    if (sum === k) {
      pos[x] = +idx;
      pos[x+1]=+idx+1;
    }
  }
  console.log("Pos", pos)
  let a = nums.map(function (el) {

    sum+=el;
    console.log(sum,el,k)

    if(sum === k) return el
      return 0

  } );

  console.log("Map",a)

  nums = {...nums};

  console.log(nums)
}

console.log(SomaDois(nums,target))
console.log(SomaDois(numx,k))