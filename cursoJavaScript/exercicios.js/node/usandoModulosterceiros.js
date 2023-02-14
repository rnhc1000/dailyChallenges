const _ = require('lodash')

/**
 * Não precisa especificar o caminho pois
 * ele procura por um arquivo chamado index.js
 * em node_modules cujo conteúdo é igual :
 * module.exports = require('./lodash');
 * 
 */


 setInterval(() => console.log(_.random(1,60)), 6)
 /**
  * sudo npm i <pacote> para instalar modulos de terceiros... 
  * para instalar de forma global
  * sudo npm i -g <pacote>
  */
