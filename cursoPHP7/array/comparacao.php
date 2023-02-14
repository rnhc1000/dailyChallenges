<div class="titulo">Comparação Arrays</div>

<?php

$arr1 = ['nome' => 'Maria', 'idade' => 22];
$arr2 = ['nome' => 'Maria', 'idade' => 22];

var_dump($arr1 == $arr2);
var_dump($arr1 === $arr2);

$arr3 = ['idade' => 22, 'nome' => 'Maria'];


echo '<br>';
var_dump($arr1 == $arr3);
// mas a comparação estrita não porque a ordem está invertida dos elementos
var_dump($arr1 === $arr3);
echo '<br>'; // comparando as diferenças
var_dump($arr1 != $arr3);
var_dump($arr1 !== $arr3);

