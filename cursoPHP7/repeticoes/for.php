<div class="titulo">Laço For</div>
<?php
for($c = 1; $c <= 2; $c++){
    echo $c . '<br>';
}

for(; $c <= 5; $c++) {
    echo $c . '<br>';
}

//for(; $c <= 15; ) {
  //  echo $c . '<br>';
    //$c++;
//}

echo '<hr>';
$array = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
];
// deslocando o índice
$arrayA = [
    1 =>'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
];
print_r($array);
echo '<hr>';
print_r($arrayA);

for($i=0; $i < count($array); $i++) {
   "{$array[$i]}";
}
for($i=1; $i < count($arrayA); $i++) {
   "{$array[$i]}";
}
echo '<hr>';
$matrix = [
    ['a', 'e', 'i', 'o', 'u'],
    ['1', '2', '3', '4', '5']
];

//print_r($matrix);

for ($i=0; $i < count($matrix); $i++) {
    //echo "{$matrix[$i]}"; // Array Array
    for ($j=0; $j < count($matrix[$i]); $j++) {
        echo "{$matrix[$i][$j]}";
    }
    echo '<br>';
}


