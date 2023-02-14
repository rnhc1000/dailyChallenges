/**
 * atencção á sintaxe no uso dos colchetes para
 * nãoconfugndir com um array
 * 
 * */
const [a] = [10];
const [n1,,n3,n4,n5]= [10,7,9,8]

console.log(n1,n3,n4,n5);

const [, [, nota]] = [[, 8, 9], [9, 6, 8]];
/**
 * o código acima n deve ser usado
 * o primeiro eé um array e ignoro o primeiro elemento
 * o segundo também é um array q tem o primeiro elemento ignorado
 * e usa o segundo elemento do segudo array.
 * aA atribuir os valores a direita o primeiro array é 
 * ignorado e apenas o segundo elemnto do segundo array
 * deve ser utilizado
 * 
 */

 console.log(nota);