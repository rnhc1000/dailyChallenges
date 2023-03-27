var search = function(nums, target) {
    let pos=null;
    for (let item in nums) {
        if(nums[item] == target) {
            pos = item;
        } 
    }
    if (pos != null) {
        return pos;
    } else {
        return -1;
    }

}
const ar = [ -1, 0,3,5,9,12]
let target = 9 

let response = "";
response = search(ar, target);
console.table(response);
