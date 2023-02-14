<?php
echo 'Carregando : includeOnce.1.php<br>';
$variavel = 'Estou definida';

if(!function_exists('soma')) {
    function soma($a, $b) {
        return $a + $b;
    }
}

