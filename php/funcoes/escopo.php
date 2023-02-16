<div class="titulo">Escopo</div>
<?php
/**
 * definir uma sequencia de código
 * que permita seu reuso
 * function (nome da mensage) {}
 */
function imprimirMensagens() {
    echo "Olá!!!";
    echo '<br>' . "Até a próxima<br>";
    echo "Até a próxima!<br>";
}

imprimirMensagens();
$variavel =1; // escopo global

function trocaValor() {
    $variavel = 2;
    /**
     * o escopo desta variavel é apenas local à função
     * pois uma nova variável com o mesmo nome foi criada,
     * apontando para um novo endereço dememória
     * Atenção: escopo LOCAL á função
     */
    echo "Executando a função: $variavel <br>";
}

echo "Antes da função: $variavel <br>";
trocaValor();
echo "Depois da função: $variavel <br>";

function trocaValorDeVerdade() {
    global $variavel;
    $variavel = 3;
    /**
     * nestecaso através do uso da palavra-chave
     * global o escopo passa a ser global e
     * uma nova variável não é criada.
     */
    echo "Executando a função: $variavel <br>";
}

echo "Antes da função: $variavel <br>";
trocaValorDeVerdade();
echo "Depois da função: $variavel <br>";

var_dump(trocaValorDeVerdade()); // retorna nulo
    

