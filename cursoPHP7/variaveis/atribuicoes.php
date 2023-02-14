<div class="titulo">Atribuições</div>

<?php
$title = 'Atribuicoes';

$numero = 10;
echo '<br>' . $numero;
$numero = $numero - 2;
echo '<br>' . $numero;
$numero = $numero + 1.5;
echo '<br>' . $numero;
$numero--;
--$numero;
echo '<br>' . $numero;
$numero++;
++$numero;
echo '<br>' . $numero;
$numero -= 5;
echo '<br>' . $numero;
$numero += 5;
echo '<br>' . $numero;
$numero /= 2;
echo '<br>' . $numero;
$numero *= 10;
echo '<br>' . $numero;
$numero **= 4;
echo '<br>' . $numero;
$numero .= 4; //apenas concatenacao. Atenção!
echo '<br>' . $numero;
$texto = 'Esse é um texto';
echo '<br>' . $texto;
$texto = $texto . 'qualquer';
echo '<br>' . $texto;

// $variaveisInexistentes = 'valor existente';
echo '<br>' . $variaveisInexistentes;
$valor = $variaveisInexistentes ?? ' valor default';
/**
 * Define o valor padrão via uso de ??
 */
echo '<br>' . $valor;

