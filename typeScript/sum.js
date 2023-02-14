/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let pos=[];
    let i, k;
    for(i=0; i< nums.length; i++) {
        for (k=i+1; k<nums.length; k++){
            let soma = nums[i] + nums[k];
            console.log(soma);
            if (soma == target){
                pos[i] = i;
                pos[k] = k;
            }
        }
       
        console.log("---" + k);

    }

    const filteredPos = pos.filter((trash) => { 
        return trash !==null && trash!== 'undefined';
    });
        
    return filteredPos;
}


nums = [ -1, -2, -3, -4, -5];
target = -8;
let e = twoSum(nums,target);
console.log({e});