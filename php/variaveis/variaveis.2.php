<div class="variaveis">Variaveis #2</div>
<?php
$numeroA = 13;
echo $numeroA;
var_dump($numeroA);
echo '<br>';
// atribuição de um valor a uma variável.
$a = 3;
$b = 16;
$soma = $a + $b;
echo $soma;
echo '<br>';
echo isSet($soma); // retorna True se existe

$variavel = 10;
echo '<br>' . $variavel;

$variavel = "Agora sou uma String";
echo '<br>' . $variavel;

//Nomes de variaveis
$var = 'válida';
$var1 = 'valida';
$var2 = 'valida';
$VAR3 = 'valida';
$_var = 'valida';
//$6var = 'inválida';
//$%var = 'invalida';
//$var% = 'invalida';

// Variáveis pré-definidas do php
/**
 * https://www.php.net/manual/pt_BR/reserved.variables.php
 * 
 * SuperGlobals
 * 
 * https://www.php.net/manual/pt_BR/language.variables.superglobals.php
 * 
 */

 var_dump($_SERVER);
