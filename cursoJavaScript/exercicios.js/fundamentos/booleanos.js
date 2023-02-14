let isAtivo = false;
console.log(isAtivo);

isAtivo = true; // valor booleano
console.log(isAtivo);

isAtivo = 1; // valor numérico e não boleano
console.log(isAtivo); // imprime o valor da variavel e n se true or false

console.log(!isAtivo); // imprime false...
console.log(!!isAtivo);// imprime true


isAtivo = 0; // valor numérico e não boleano
console.log(isAtivo); // imprime o valor da variavel e n se true or false

console.log(!isAtivo); // imprime true...
console.log(!!isAtivo);// imprime false ..

console.log('os verdadeiros....')
console.log(!!3);
console.log(!!' ');
console.log(!!-1);
console.log(!!{});
console.log(!![]);
console.log('os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

console.log('pra finalizar!!!');
console.log(!!('' || null || 0 || ' ')); // true pq espaço é true...

let nome = '';
console.log(nome || 'desconehcido'); // desconhecido pq nome vazio, então falso.

nome = 'Ricardo';
console.log(nome || 'desconhecido'); // imprime noem. Primeira condição true


