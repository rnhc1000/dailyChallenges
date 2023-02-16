<div class="titulo">Operador Ternário</div>
<?php
$idade = 30;
$status;

if($idade >= 18) {
    $status =  "Maior de Idade!!!";
} else {
    $status = "Menor de Idade";
}
echo "$status<br>";

$idade >= 18 ? $status = 'Maior de Idade!!!' : $status = 'Menor de Idade!!!';
echo "$status<br>";

$status = $idade >= 18 ? 'Maior de idade' : 'Menor de Idade!';
echo "$status<br>";
/**
 * este operador efetua uma atrinuição condicional
 * avaliando a expressão para decidir qual o valor
 * a ser atribuído à variável, no caso, *status
 * 
 * Na sentença abaixo temos o uso do operador ternário ainanhdo em outro 
 * avaliando duas condiçoes mas evitar usar este tipo de código a fim
 * de tornar mais claro o código mas a avaliação prevalece a mesma
 * Avalia a expressão seguinte que é uma sentença completa do operador ternário
 * avaliando uma nova condição.... Ao avaliar a idade e maior do que 18 a expressão a seguir
 * é avaliada... e mesta expressão a primeira condiçcão é avaliada e se verdadeiira 
 * atribui o valor à variavél $status, acso contrário o segundo membro é atribuído
 */

 $status = $idade >= 18 ? ($idade >= 65 ? 'Aposentado' : 'Maior de Idade') : 'Menor de Idade';
 echo "$status<br>";


