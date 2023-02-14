<div class="titulo">Arrays Constantes</div>
<?php
//const FRUTAS = array('laranja', 'abacaxi'); ou

const FRUTAS = ['laranja', 'abacaxi'];
//FRUTAS[0[ = 'banana'; não é possivel alterar o valor por ser constante
echo FRUTAS[0];


const CARROS = ["Fiat" => "Uno", "ford" => 'Fiesta'];

//CARROS["BMW"] = '325i';
echo '<br>' . CARROS["Fiat"];

/**
 * Emk PHO tanto a referência como o conteúdo 
 * são realmente constantes não permitindo
 * sua alteração;
 */

 const RESPOSTA_TRANSACAO = ["APROVADA", "TRANSACAO APROVADA"];
 