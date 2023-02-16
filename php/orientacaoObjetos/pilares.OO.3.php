<div class="titulo">Polimorfismo</div>
<?php
/**
 * Múltiplas Formas === Polimorfismo
 * 
 * Estático:
 *  Sobrecarga de métodos
 *  Criam-se duas funções com o mesmo nome
 *  mas recebem uma quantidade de parãmetros
 *  diferentes:
 * 
 *  funtion a() {} 
 *  function a(nome, idade) {}
 * 
 * Dinãmico:
 *  Precisa de herança  e está associado a linguagens
 * fortemente tipadas, oou seja ao declara um variável e define-se seu tipo
 * não há como mudar o tipo da variável.
 * PHP:
 *  $a = 3; $a = 'a';
 * Java
 *  int a = 3;
 *  string b = 'Ricardo';
 * 
 * Classe Carro() {}
 * Civic c = new Civic();
 * tipo           instãncia
 * 
 * ferrari f = new Ferrari();
 * tipo           instãncia
 * 
 * Assim n se pode atribuir  a
 * c o objeto ferrari e vice-versa
 * 
 * Carro c = new Civic();
 * c = new Ferrari();
 * 
 * function estacionar(Civic $c) {
 * Só aceita carros Civic ou herdados de Civic
 * }
 * 
 * function estacionar (Carro $c) {
 * Pode aceitar qualquer parãmetro que seja herado da classe
 * genérica Carro
 * }
 */

?>
<h3>Polimorfismo </h3>

<h4>Estático </h4>
<h5>Sobrecarga de Métodos</h5>
<h4>Dinâmico</h4>
<h5>Necessita de Herança e Linguagens Fortemente Tipadas</h5>
