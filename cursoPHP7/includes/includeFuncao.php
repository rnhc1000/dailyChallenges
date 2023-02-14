<div class="titulo">Includes em Funções</div>
<?php
echo 'Carregando: include_funcao<br>';

function carregarArquivo() {
    include('include_arquivo.php');

    echo $variavel . '<br>';

    echo soma(2, 5) . '<br>';
}

echo 'Novamente no arquivo include_funcao<br>';
//echo soma(1, 8) . '!<br>';

carregarArquivo();


echo "variavel = '{$variavel}'";
var_dump($variavel); //NULL

echo '<br>' . soma(4, 5);
