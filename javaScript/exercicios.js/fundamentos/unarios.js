let num1 = 1;
let num2 = 2;

num1++; // pos fixada
console.log(num1);
++num1;
console.log(num1);
--num2;
console.log(num2);
num2--;
console.log(num2);
num1 = 1;
num2 = 2;


/**
 * observar o abaixo que é verdadeiro
 * pos a ordem das operaçẽos devem ser avaliadas
 */
console.log(++num1 === num2--);
