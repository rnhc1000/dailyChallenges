<div class="titulo">Desafio Impressão</div>

<!---
- Imprima apenas os valores ddo array que contém indice par
- Usar for e foreach
- Valores Esperados: AAA, CCC, EEE
--->
<?php

$array = [
    "AAA",
    "BBB",
    "CCC",
    "DDD",
    "EEE",
    "FFF",
    "GGG",
    "HHH"
];


for ($i=0; $i < count($array); $i++) {
    if ($i % 2 === 0) {
        echo "Chave $i -> " . "Valor: {$array[$i]}<br>";
    }
}

echo '<hr>';

foreach($array as $chave => $valor) {
    if($chave % 2 === 0) {
        echo "Chave $chave -> " . "Valor: " . $valor;
        echo '<br>';
    }
}
