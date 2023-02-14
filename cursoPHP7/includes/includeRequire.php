<div class="titulo">Include x Require</div>
<?php
/**
 * Maior benefício é que se força a existência 
 * do arquivo e um erro fatal é lançado
 */
echo 'Usando include com arquivo inexistente';
ini_set('display_errors', 1);
include('arquivo_inexistente.php');
// depois de um include mal-sucedido a execuçãodo código continua

echo 'Usando require com arquivo inexistente...<br>';
// depopis do require mal-sucedido há um erro fatal
require('arquivo_inexistente');
echo 'Não achou mesmo....<br>';
