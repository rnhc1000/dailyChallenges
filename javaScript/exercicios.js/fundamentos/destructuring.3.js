/** usar o operador destructuring com função
 * atenção ao declarar a função o uso das chaves após o parenteses
 */
function rand({min = 0, max = 1000}) {

    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);

}
console.log(rand({max: 900, min:10}));
/** outra possibilidade é declarar uma variável
 * e passar a ela o destructuring 
 */
const obj = {max:50, min: 40 };
console.log(rand(obj));