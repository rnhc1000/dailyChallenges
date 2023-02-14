/**
 *  Object.preventExtensions
 */

 const produto = Object.preventExtensions({
     nome: 'Qualquer', preco: 1.09, tag: 'promocao'
 })

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
//delete produto.tag
console.log(produto)
//{ nome: 'Borracha', preco: 1.09, tag: 'promocao' }

/**
 * n é possivel incluir um par chave:valor no objeto original
 */

 /**
  * Object.seal
  */

  const pessoa = {
      nome: 'Juliana',
      idade: 35
  }

  Object.seal(pessoa)
  console.log('selado', Object.isSealed(pessoa))
  //selado true

  pessoa.sobrenome = 'Silva';
  console.log('selado', Object.isSealed(pessoa))
  console.log(pessoa)
  //{ nome: 'Juliana', idade: 35 }

  pessoa.idade=29;
  console.log(pessoa)
 //{ nome: 'Juliana', idade: 29 }
 // pode alterar atributos mas n acresecnta ou mudar 
 // chaves do objeto inicial

 //Object.freeze = selado + valores constantes


