let numbers = [1,2,3,4,5,6,7,8,9,10];
let two = [];
let three = [];
let even = 0;
function func(arr) {
    console.log(arr);
}
for (let i=0; i<numbers.length; i++) {
    even = numbers[i] % 2;
    if (even === 0) {
        two[i] = numbers[i];
    } else {
        three[i] = numbers[i];
    }
}

two.forEach(func);
console.log("------");
three.forEach(func);
// function fun() {
//     console.log(two);
// }
// console.log(two);
// console.log(three);