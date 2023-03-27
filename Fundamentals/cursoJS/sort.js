const str = ["A", "C", "F", "H", "B", "E"]
console.log(str.sort());
console.log(str.reverse());
const numbers = [10,20,30,40,50,1000,900,340,1,15];
//console.log(numbers.sort((a,b) => a-b));


const z = ((x,y) => x-y);

/**
 * Se retornar um valor negativo, o valor de x será ordenado antes de y;
 * Se retornar 0, a ordem não muda;
 * se retornar positivo, x sera ordenado antes de y
 */

console.log(numbers.sort(z))