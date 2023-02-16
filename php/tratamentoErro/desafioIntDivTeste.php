<div class="titulo">Desafio IntDiv - Teste</div>
<?php
ini_set('display_errors', 1);
require_once "desafioIntDiv.php";
use function \Aritmetica\intdiv;

try {
    echo intdiv(8, 3) . '<br>';
} catch(\Aritmetica\NaoInteiroException $e) {
    echo 'Resultado:-> Não é um número intreiro<br>';
}

/**
 * Ao referenciar o namespace Aritmetica
 * as funções/classes lá definidas é que são usadas, 
 * portanto no catch usar a \ definindo o namespace
 * e a função/classe lá definida
 */

 try {
     echo intdiv(8, 0) . '<br>';
 } catch(DivisionByZeroError $e) {
     echo 'Divisão por Zero<br>';
 }

 echo intdiv(8,2) .  '<br>';
 echo \intdiv(8, 2) . '<br>';
 echo \intdiv(8, 3) . '<br>';