<div class="titulo">Argumento Padrão</div>
<?php

function saudacao($nome = 'Senhor(a)', $sobrenome = 'Cliente') {
    return "Bem vindo, $nome $sobrenome!<br>";
}

echo saudacao();
echo saudacao(NULL);
echo saudacao(null, NULL);
echo saudacao('Mestre', 'Supremo');
/**
 * Colocar o padrão sempre por último
 */
function anotarpedido($comida, $bebida = 'Água') {
    echo "Para comer: $comida <br>";
    echo "Para beber: $bebida <br>";
}

anotarPedido('Hamburger');
anotarPedido('Pizza', 'Refrigerante');