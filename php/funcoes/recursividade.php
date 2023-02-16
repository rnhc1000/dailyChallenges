<div class="titulo">Recursividade</div>

<?php
function somaUmAte($numero) {
    $soma = 0;
    for(; $numero >=1; $numero--) {
        $soma += $numero;
    }
    return $soma;
}

echo somaUmAte(5) . '<br>';

function somaNumAte($numero) {
    $soma = 0;
    for($i = 1; $i <= $numero; $i++) {
        $soma += $i;
    }
    return $soma;
}

echo somaNumAte(5) . '<br>';

function somaRecursiva($numero) {
    // Condição de Parada
    if($numero === 1) {
        return 1;
    }
    return $numero + somaRecursiva(($numero - 1));
}

echo somaRecursiva(150) . '<br>';


function somaRecursivaEconomica($numero) {
    return $numero === 1 ? 1 :
        $numero + somaRecursivaEconomica($numero - 1);
}

echo somaRecursivaEconomica(120);