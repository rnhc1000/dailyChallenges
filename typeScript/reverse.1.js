function reverse(nums, k) {

    let s = nums.length;
    let num=[];
    // usar um indice de posição baseado no tamanho do array
    k = k%s;
    console.log("S ", s, "K ", k);


    for (let i=0; i<s;i++){
        if(i < k){
            console.log[i];
            num[i] = nums[s+i-k];
            console.log(num[i]);
        } else {
            num[i] = nums[i-k]
        }
    }
    return num;

}

let nums= [1,2,3,4,5,6,7]
let k = 3;
console.table(nums)
console.table(reverse(nums,k));

