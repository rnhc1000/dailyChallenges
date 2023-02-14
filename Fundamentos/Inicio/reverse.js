function inverterString(str) {
    let o = '';
    let len = str.length-1;
    for (let i = len; i >= 0; i--) {
        o += str[i];
    }
    return o;
}

console.log(inverterString("Testando a inversão"));


let x=1;

console.log(x !== x);
let y  = 123['toString'];
console.log(typeof y)
if (y) console.log(true)
console.log(123['toString'].length+123)