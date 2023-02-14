<div class="titulo">Interpolação</div>

<?php
$numero = 10;
echo $numero;
/**
 * atenção à diferença abaixo
 * Portanto para se garantir acesso ao valor
 * se,pre usar aspas duplas
 */
echo '<br> . $numero';
echo "<br> . $numero";

$texto = "A sua nota é: $numero";
echo '<br> . $texto';
$objeto = 'caneta1';
echo "<br>Eu tenho 5 $objetos";
echo "<br>Eu tenhp 5 {$objetos}s";

echo "<br>Eu tenh0 5 { $objetos}s mas perdi 3 {$objetos }s";
/**
 * Atenção ao espaço entre as chaves. Evitar!!!;
 */

