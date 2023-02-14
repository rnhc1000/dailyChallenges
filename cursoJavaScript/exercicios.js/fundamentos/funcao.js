/** nomde dafuncao
* bloco através de chaves delimitadoras
* define o corpo da função
* podendo ou não retornar um valor
* Assemelha-se a um verbo ( acao) executa a sentença do código
*
*/
function imprimirSoma(a, b) {
    /** os valore a e b podem ser qualquer coisa
    * pois JS é fracamente tipada
    */
    console.log(a+b);
} 

imprimirSoma(2,3);
/** função com valor de retorno
 * esta sim é para usar no console.log
 * b =0, para ter um valor, caso não se passe b
 */
function soma(a, b = 0) {
    return a + b;
}

console.log("A soma de a e b igual a ", soma(2,5));