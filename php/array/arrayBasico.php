<div class="titulo">Array Básico</div>
<?php

$lista = array(5, 9, 3.4, "texto");

echo $lista . '<br>';

var_dump($lista);

echo '<br>';

print_r($lista);

$size = sizeof($lista);

for ($i=0; $i <= $size; $i++) {
    echo '<br>' . $lista[$i];
}

$texto = 'Esse é um texto de teste';

echo '<br>' . $texto[0];
echo '<br>' . $texto[1];
echo '<br>' . $texto[2];
echo '<br>' . $texto[3];
echo '<br>' . $texto[4];
echo '<br>' . mb_substr($texto, 10, 1);
echo '<br>' . $texto[5];//NULL caractere com acento