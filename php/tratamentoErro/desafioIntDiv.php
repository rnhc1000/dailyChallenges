<?php
 namespace Aritmetica;

 class NaoInteiroException extends \Exception {

 }

 function intdiv($a, $b) {
     if($b == 0) {
         throw new \DivisionByZeroError();
     }
     if($a % $b > 0) {
         throw new NaoInteiroException();
     }

     return $a / $b;
 }
 /**
  *  Ao usar namespace a primeira sentença do código
  * tem que ser namespace, pporanto o abaixo não é permitido
  * <!---<div class="titulo">Desafio IntDiv</div> -->
  * Sobrescrever o método intdiv para
  * - Lançar uma exceção quando tentar dividir por zero
  * - Lançar uma exceção quando o resultado não for inteiro
  * - Dividir normalmente nos demais casos
  * 
  * Os testes.....
  * - intdiv com parametros 8 e 2 -> Sucesso</testes>
  * - intdiv com parametros 8 e 3 -> Exceção</testes>
  * - intdiv com parametros 8 e 0 -> Exceção</testes>
  * - intdiv "original" com parametros 8 e 3 -> Sucesso</testes>
  * 
  * Usar namespace para permitir a criação de funções com mesmo nome
  */
