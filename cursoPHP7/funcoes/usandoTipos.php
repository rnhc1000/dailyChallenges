<div class="titulo">Usando Tipos</div>

<?php
function somar1($a, $b) {
    echo "<span>Somando $a + $b = </span>";
    return $a + $b;
}

echo '<b>' . somar1(1, 2) . '</b><br>'; //R: 3
echo '<b>' . somar1(1.5, 2.7) . '</b><br>'; //R:4.2
echo '<b>' . somar1(1.5, '4dois') . '</b><br>';//R: 5.5

echo "<p> Definindo os tipos dos parametros como inteiros...</p>";

function somar2(int $a, int $b) {
    echo "<span>Somando $a + $b = </span>";
    return $a + $b;
}

echo '<b>' . somar2(1, 2) . '</b><br>'; //R: 3
echo '<b>' . somar2(1.5, 2.7) . '</b><br>'; //R: 3
echo '<b>' . somar2(1.5, '4dois') . '</b><br>'; //5

echo "<p> Definindo o valor do retorno como inteiro...</p>";

function somar3($a, float $b): int {
    echo "<span>Somando $a + $b = </span>";
    return $a + $b;
}


echo '<b>' . somar3(1, 2) . '</b><br>'; //R: 3
echo '<b>' . somar3(1.5, 2.7) . '</b><br>'; //R: 3
echo '<b>' . somar3(1.5, '4dois') . '</b><br>'; //5

