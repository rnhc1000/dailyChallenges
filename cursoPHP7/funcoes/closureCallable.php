<div class="titulo">Closure & Callable</div>

<?php
/**
 * Ao declarar uma função como anônima o php associa esta função a uma classe.
 * Já umafunção normal NÃO....
 */
$soma1 = function($a, $b) {
    return $a + $b;
}; 

function soma2($a, $b) {
    return $a + $b;
}

echo $soma1(2, 3);  
echo (is_callable($soma1) ? 'Sim' : 'Não') . '<br>';
//$soma1 = 1000;
//echo (is_callable($soma1) ? 'Sim' : //'Não'//) . '<br>';



echo soma2(2, 3) . ' ';
echo (is_callable(soma2($a, $b)) ? 'Sim' : 'Não') . '<br>';

var_dump($soma1);
echo '<br>';
var_dump(soma2($a, $b));
echo '<br>';


function executar1($a, $b, $op, Callable $funcao) {
    $resultado = $funcao($a, $b) ?? 'Nada';
    echo "$a $op $b = $resultado<br>";
}
executar1(2, 3, '+', $soma1);
echo (is_callable($soma1) ? 'Sim' : 'Não') . '<br>';
//executar1(2, 3, '+', soma2($a, $b));

/**
 * Ao se usar o tipo Closure
 * apenas a função anônima poderá ser usada
 * pois a ela é associada uma classe...
 */
function executar2($a, $b, $op, Closure $funcao) {
    $resultado = $funcao($a, $b) ?? 'Nada';
    echo "$a $op $b = $resultado<br>";
}
executar2(2, 3, '+', $soma1);
echo (is_callable($soma1) ? 'Sim' : 'Não') . '<br>';
//executar2(2, 3, '+', soma2($a, $b));

