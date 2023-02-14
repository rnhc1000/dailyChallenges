<div class="titulo">Desafio Meses</div>
<?php
$meses = array(
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outobro",
    "Novembro",
    "Dezembro"
);

print_r($meses);

/**
 * O array é indexado a partir do 0, sempre
*/

foreach ($meses as $mes) {
    echo '<br>' . $mes;
    //$mes = $mes+1;
}

for($i=0; $i < sizeof($meses); $i++ ) {
    //echo '<br>' . $meses[$i];
    for($j=0; $j < sizeof($mes); $j++) {
        $mes[$i] = $meses[$i];
        echo '<br>' . $mes[$i];
    }
}

$months = array(
    1 => "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outobro",
    "Novembro",
    "Dezembro"
);

echo '<br>' . $months[1];
/**
 * Acesso pelo índice 1 usando a técnica de 
 * chave:valor, adcionado a chave 1 à
 * posição inicial do array
 */
