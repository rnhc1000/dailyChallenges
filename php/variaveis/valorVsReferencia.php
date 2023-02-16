<div class="titulo">Valor vs Referencia</div>

<?php
$variavel = 'valor inicial';

echo $variavel;

$variavelValor = $variavel;
/**
 * No php a atribuição é por valor e não por referencia
 */

 echo "<br>$variavel";
 echo "<br>$variavelValor";

 //Atribuicao por Referencia
 $variavelReferencia = &$variavel;
 $variavelReferencia = 'mesma referencia';
 echo "<br>$variavel $variavelReferencia";



