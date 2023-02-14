<div class="titulo">Error HAndler</div>
<?php
ini_set('display_errors', 1);

echo 4 / 0 . '<br>';

error_reporting(E_ERROR);
echo 4 /0 .'<br';

error_reporting(E_ALL);
echo 4 /0 .'<br';

error_reporting(~E_ALL);
echo 4 /0 .'<br';

error_reporting(E_ALL);
include 'arquivoInexistente.php';


function filtrarMensagem($erro, $errString) {
    $text = 'include';
    //$text 'by zero';
    return !!strpos(" $errString", $text);
}


set_error_handler('filtraMensagem', E_WARNING);

echo '<hr>';
echo 4 / 0 . '<br>';
include 'arquivoInexistente.php';


restore_error_handler();
echo '<hr>';
echo 4 / 0 . '<br>';

