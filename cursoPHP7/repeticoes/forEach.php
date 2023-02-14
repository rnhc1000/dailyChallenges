<div class="titulo">forEach</div>
<?php

$array = [
 1=>'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
];
echo '<hr>';
foreach($array as $valor) {
    echo "$valor ";
}
echo '<hr>';
foreach($array as $indice=> $valor){
    echo "$indice => $valor <br>";
}
echo '<hr>';
$matrix = [
    ['a', 'e', 'i', 'o', 'u'],
    ['1', '2', '3', '4', '5']
];
echo '<hr>';
foreach($matrix as $linha) {
    foreach($linha as $valor) {
        echo $valor ." ";
    }
    echo "#";
}
echo '<hr>';
$numeros = [1, 2, 3, 4, 5];
print_r($numeros);
foreach ($numeros as &$dobrar) {
    $dobrar *= 2;
    echo "$dobrar ";
}
