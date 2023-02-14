<div class="titulo">Break/Continue</div>
<?php
$c = 10;
// Laço Infinito
for(;;) {
    echo $c . '<br>';
    $c++;
    if($c > 15) {
    break;
    }
}

echo 'Fim parte A!!!<br>';

for(;;) {
    //$c=0;
    $c++;
    if($c % 2 === 1) continue;
    echo $c . '<br>';
    if ($c >= 30) {
    break;
    }
}

echo 'Fim parte B!!!';
echo '<hr>';
foreach(array(1,2,3,4,5,6,7,8,9,10) as $valor) {
    if ($valor === 5) break;
    if($valor % 2 === 0) continue;
    echo $valor . '<br>';
}
