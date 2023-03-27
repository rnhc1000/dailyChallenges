const a = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
]

console.table(a);
console.log(a[0][0]);
console.log(a[3][0][1])
const b = [1,2,3,4,5];
console.table(b);
console.log("shift => ", b.shift());
console.log("pop => ", b.pop());
console.table(b);