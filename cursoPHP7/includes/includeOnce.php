<div class="titulo">Include Once</div>
<?php
ini_set('display_errors', 1);
include('includeOnce.1.php');
//require('includeOnce.1.php');

echo "Variavel = '{$variavel}'.<br>";
$variavel = 'Variavel Alterada';
echo "Variavel = '{$variavel}'.<br>";

include('includeOnce.1.php');
echo "Variavel = '{$variavel}'.<br>";
/**
 * Variavel reinicializada
 */

$variavel = 'Variavel Alterada';
echo "Variavel = '{$variavel}'.<br>";
/**
 * Ao usau o includeOnce a variavel não é 
 * inicalizada novamente!!!
 */

 include_once(__DIR__ . '/includeOnce.1.php');
 echo "Variavel = '{$variavel}'.<br>";

 require_once(__DIR__ . '/includeOnce.1.php');
 echo "Variavel = '{$variavel}'.<br>";





