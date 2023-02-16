const peso1 = 1.0;
console.log(typeof peso1);
console.log(peso1);
const peso2 = Number('2.0'); // função Number

console.log(typeof peso2);
console.log(Number.isInteger(peso1));

const aval1 = 7.85;
const aval2 = 9.75;

const total = (aval1 * peso1) + (aval2 * peso2);
const media = total/(peso1 + peso2);
console.log(media.toFixed(2));
console.log(media.toString(8));
console.log(typeof Number);
console.log(typeof media);