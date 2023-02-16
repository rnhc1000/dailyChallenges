<div class="titulo">Argumentos e Retorno</div>

<?php
/**
 * O código abaixo não recebe nenhum parâmetro
 * mas retorna um valor
 */
function obterMensagem() {
    return 'Seja bem vindo(a)';
}

obterMensagem();
$retorno = obterMensagem();
echo $retorno; 
echo '<br>', obterMensagem();
echo '<br>';
var_dump(obterMensagem());
/**
 * Função que recebe um argumento/parãmetro
 * e retona um valor
 */
function obterMensagemComNome($nome) {
    return "Bem vindo, {$nome}!";
}

echo '<br>', obterMensagemComNome('Wagner');
echo '<br>', obterMensagemComNome('Luísa');

function soma($a, $b) {
    return $a +$b;
}

$resultado = soma(4, 5);
echo '<br><b>' . $resultado;
echo '</b>';

$x = 4;
$y = 5;
echo '<br>' , soma(45, 78);
echo '<br>' , soma($x, $y);
echo '<br>', $x;
echo '<br>', $y;
/**
 * Passando por valor por cópia
 */
function trocarValor($a, $novoValor) {
    return $a = $novoValor;
}
$variavel = 1;
$retorno = trocarValor($variavel, 3);
echo '<br>', $retorno;
echo '<br>', $variavel;
/**
 * Passando por Referência através do uso do &$<nome da variavel>
 */
function trocarValorPorReferencia(&$a, $novoValor) {
    $a = $novoValor;
}
echo "<br>Valor da Variável Antes da função: $variavel <br>";
trocarValorPorReferencia($variavel, 5);
echo "Valor da Variável Depois da função: $variavel <br>";

