<div class="titulo">Retornando Função</div>

<?php
$a = 0;
$b = 0;

function soma($a) {
    return function($b) use ($a) {
       //global $a;
        return $a + $b;
    };
}

echo soma(3)(3);

$doisMais=soma(10);
echo '<br>' . $doisMais(10);