<div class="titulo">testes!</div>

<?php
$tc = 0;
$tc = ($tf - 32) / 1.8;
$tc = number_format($tc, 2, ',', '.');
echo $tc . "Celsius para " . $tf . "Fahrenheit<br>";

$tc = 0;
$tf = ($tc * 1.8) + 32;
$tf = number_format($tf, 2, ',', '.');
echo $tf . "Fahrenheit para " . $tc . "Celsius<br>";


?>
