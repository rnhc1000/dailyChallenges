var solution = function(digits,num) {


 let seq = num;
 
 seq = seq.toString(10);
 seq = [...seq];

 console.log(seq)

 let timeInicial =0
 let timeFinal =0;
 let i = 0;
 let tempo = 0;
 let endTime, startTime = "";
 for (let idx in digits){ 
    // console.log(digits[idx])
    // startTime = new Date();
    if (digits[idx] === parseInt(seq[i])) {
        // endTime = new Date();
        console.log(seq[i]);
    }
    i++;
 }
 console.log(endTime);

 diff = endTime-startTime;
 console.log(diff);

}
let digits=[0,1,2,3,4,5,6,7,8,9];
let num = 210;
let a = solution(digits,num);
console.log(a);


let x = new Date();

console.log(x)
