const valores = [7.7, 8.9, 9.1, 10.5]
console.log(valores[0]);
let i = 0;
let j = valores.length;
for (; i < j; i++) {
    console.log(valores[i].toFixed(2));
}
valores.push({id: 3},false, null, 'teste');
console.log(valores);
console.log(valores.pop());
console.log(valores);
console.log(valores.pop());
console.log(valores);
console.log(valores.pop());
console.log(valores);