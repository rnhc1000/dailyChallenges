<div class="titulo">Desafio Palíndromo</div>

<?php

function verificaPalindromo($palavra) {

    $ultimoIndice = strlen($palavra) - 1;
    for($i = 0; $i <= $ultimoIndice; $i++) {
        if($palavra[$i] !== $palavra[$ultimoIndice -$i]) {
        return 'Não -> ' . $palavra;
        }
    }
    return 'Sim -> ' . $palavra;
}


echo verificaPalindromo('arara') . '<br>';
echo verificaPalindromo('ana') . '<br>';
echo verificaPalindromo('bola') . '<br>';

function palindromoSimples($palavra) {
    return $palavra === strrev($palavra) ? 'Sim! ' . $palavra : 'Não! ' . $palavra;
}

echo palindromoSimples('arara') . '<br>';
echo palindromoSimples('bolas') . '<br>';