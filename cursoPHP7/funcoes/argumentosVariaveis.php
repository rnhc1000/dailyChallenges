<div class="titulo">Argumentos Variáveis</div>

<?php
function soma($a, $b) {
    return $a + $b;
}

echo '<b>' .soma(4, 5) . '</b>'; // 9
echo '<br><b>' .soma(4, 5, 6) . '</b>'; //9
/**
 * O uso do recurso de argumentos variáveis
 * através dos ... significa que eles são coloados
 * dentro de um array
 */
function somaVariavel(...$numeros) {
    print_r($numeros);
}
echo '<br>';
somaVariavel(2,3,4,5,6,7,8);

function somaCompleta(...$numeros) {
    $soma = 0;
    foreach($numeros as $num) {
        $soma += $num;
    }
    return $soma;
}

$soma = somaCompleta(1,2,3,4,5,6,7,8,9);
echo '<br><b>' . $soma . '</b>';
/**
 * Caso o parametro seja um array, através do 
 * uso do spread(...) passamos o array também
 * de forma espalhada e assim podemos 
 * passar a matriz eusar o mesmo código
 */
$array = [6, 7, 8];
$soma = somaCompleta(...$array);
echo '<br><b>' . $soma . '</b><br>';

function membros($titular, ...$dependentes) {

    echo "Titular: $titular <br>";
    if($dependentes) {
        foreach($dependentes as $dep) {
            echo "Dependente: $dep <br>";
        }
    }
}

echo membros('Ricardo', 'Perpétua', 'Nathalia', 'Camilla', 'Henrique');
echo '<br>';
echo membros('Ricardo');


