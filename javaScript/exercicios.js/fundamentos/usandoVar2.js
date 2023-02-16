// código entre chaves n definem um escopo....
// a variavel numero é global portanto a segnda
// senteca sobrescreve o valor original denumero
var numero = 1
{
    var numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);


var numero =1;
{
    // o uso del let define o escopo de bloco..... 
    let numero =2;
    console.log('dentro =', numero);
}
console.log('fora =', numero)

/** Variaveis definidas com a palavra chave VAR tem escopo
 * global, ao passo que variaveis deifindas com a palavra
 * chave LET em escopo de blocoou função
 */