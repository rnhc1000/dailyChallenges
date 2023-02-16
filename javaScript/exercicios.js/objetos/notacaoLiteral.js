

const a = 1;
const b = 2;
const c = 3;
/**
 * par chave valor a: a, no caso o valor 1 a chave a
 */
const obj1 = { a: a, b: b, c: c };
/**
 * apoś o es2015 o valor é atribuído automaticamente
 */

const obj2 = { a, b, c }

console.log(obj1, obj2)
/**
 * nas duas notações os valores s iguais
 * { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }
 */

 const nomeAttr = 'nota'
 const valorAttr = 7.87
 const obj3 = {} // declara o obj
 obj3[nomeAttr] = valorAttr // declara o objeto e entre chaves
 // o a chave do par chave, valor e atribui a ele o valor
 console.log(obj3); // { nota: 7.87 }

// outra forma
 const obj4 = {[nomeAttr]: valorAttr}
 console.log(obj4);

 const obj5 = {
     f1: function() {
         // ...
     },
     function2() {

     }
 }

 console.log(obj5)
 // { f1: [Function: f1], function2: [Function: function2] }
// as duas formas s iguais