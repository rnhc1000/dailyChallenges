const pessoa = { nome: 'J́oao' };

/**
 * pessoa aponta para o  endereço de memória 123 que por sua vez 
 * contem o objeto identificado por pessoa que no caso 
 * é  João { ... }
 * portanto posso alterar o atributo nome do objeto pessoa
 */ 

pessoa.nome = 'Pedro';

console.log(pessoa) // imprime Pedro

//pessoa = { nome: 'Ana'} 
/**
 * posso alterar o atributo mas não o objeto por ser constante
 * pessoa -> novo endereço de memoria 456 -> { ...}
 * mas o objeto pessoa já apponta para o endereço 123 e assim
 * n é possivel a criação deste objeto
 */

// console.log(pessoa) // erro

Object.freeze(pessoa)
/**
 * a função Object 'congela' o pbjeto
 * e assim vc n pode mudá-lo mais
 */

 pessoa.nome = 'Maria'; // imprime Pedro
 pessoa.end = 'Rua ABC';
 delete pessoa.nome;

 console.log(pessoa.nome) // sempre Pedro

 const pessoaConstante = Object.freeze({ nome: 'Ana'});
 pessoaConstante.nome = 'Maria';
 console.log(pessoaConstante) // imprime Ana e n Maria
