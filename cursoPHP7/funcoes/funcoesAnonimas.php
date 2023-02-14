<div class="titulo">Funções Anônimas</div>
<?php
/**
 * A função não é nomeada...
 */
$soma = function ($a, $b) {
    return $a + $b;
};

echo $soma(1, 3) . '<br>';
/**
 * 4 argumentos para a função abaixo
 * onde o último será a variável $soma a qual
 * por sua vez recebe o valor de retorno
 * de uma função
 */
function executar($a, $b, $op, $funcao) {
    $resultado = $funcao($a, $b);
    echo "$a $op $b = $resultado<br>";
}
executar(2, 3, '+', $soma);

$multiplicacao = function($a, $b) {
    return $a * $b;
};
executar(2, 3, '*', $multiplicacao);

function divisao($a, $b) {
    return $a / $b;
}

$div = divisao(8, 4);
echo $div;
executar(2, 3, '*', $div);
?>
