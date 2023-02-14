const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
console.log(arr)

// Only change code above this line
const aux = arr.splice(4,4);
console.log(arr);

console.log(aux);
const auy = aux.splice(1,1);

console.log(aux);

const soma = aux.reduce((a,b) => a+b,0);
console.log(soma)