<div class="titulo">While(...){...} & Do{...}while(...)</div>
<?php

const VALOR_LIMITE = 5;
$c = 0;
while($c < VALOR_LIMITE) {
    echo 'while -> '. $c . '<br>';
    $c++;
}

//or
echo '<hr>';
$d = 0;

do {
    echo 'do{...}while(...) -> ' . $d . '<br>';
    $d++;
} while ($d < VALOR_LIMITE);

echo '<hr>';
$c = 0;
for(;$c < VALOR_LIMITE;) {
    echo "while usando for(;expressao;) -> $c <br>";
    $c++;
}
echo '<hr>';
$c = 0;
do {
    echo "do{...}while(...) -> $c <br>";
    $c++;
} while($c < VALOR_LIMITE);
echo '<hr>';
$c = 0;
while(true) {
    echo"while(true) -> $c <br>";
    $c++;
    if($c >= VALOR_LIMITE) {
        break;
    } else {
        continue;
    }
}