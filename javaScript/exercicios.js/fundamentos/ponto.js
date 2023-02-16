/**
 * acessar membros de um objeto, função
 * através da notação ponto
 */

 console.log(Math.ceil(6.11));

 const obj = {};
 obj.nome = 'Bola';
 //obj['nome'] = 'Bola2';
 console.log(obj.nome)

 function Obj(nome) {
     this.nome = nome;
     /**
      * this.nome associado ao objeto que for criadao
      * a partir desta função.
      * usando this.nome vai receber o atributo nome por parẫmetro
      * e vai ficar visivel a quem for instanciar esta função
      */
     this.exec = function() {
         console.log('Exec1')
     }
 }

 const obj2 = new Obj('cadeira');
 const obj3 = new Obj('Mesa');

 console.log(obj2.nome);
 console.log(obj3.nome);
obj3.exec();
/** Acesso aosmembros de um objeto, funções através da notação ponto */