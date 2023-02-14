/**
 * Funcao em JS é 1st Class Object
 */

function fun1() {
  /**
   * Toda funcao em JS retorna se não for definido o valor de retorno
   * retorna UNDEFINED!
   */
}
/**
 * No caso da fnção o bloco é obrigatório
 * Armazenar valor de uma função em uma variável
 * permitindo referenciar a afunção através da variável
 */
const fun2 = function () {};
const fun2x = function nomeFuncao() {};
/**
 * a variável fun2 recebeo o valor de retorno
 * da função, anônima no caso.
 */

/**
 * Armazenar função em array
 */

const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(`Retornando o valor dda função no array: ${array[0](2, 3)}`);

/**
 * Armazenar em um atributo de objeto
 * Craindo um objeto vazio... Veja os colchetes....
 */

const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar());
/**
 * Passar uma função como parâmtro
 * de outra função
 */

function run(fun) {
  fun();
}

run(function () {
  console.log("Executando....");
});

/**
 * Uma função pode retornar ou conter uma função
 */

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);
