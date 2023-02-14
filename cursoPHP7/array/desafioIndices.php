<div class="titulo">Desafio Índice</div>
<?php
$lista = array(
    1,
    4 => 2,
    3 => 3,
    'a' => 4,
    '9' => 6,
    5,
    '9' => 6,
    '06' => 7,
    0 => 8
);

// Array( [] => )
print_r($lista);
//Array ( [0] => 8 [4] => 2 [3] => 3 [a] => 4 [9] => 6 [10] => 5 [06] => 7 )
