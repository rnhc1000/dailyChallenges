<div class="titulo">Escrevendo Arquivos</div>

<?php
ini_set('display_errors', 1);
try {
    $arquivo = fopen('teste.txt', 'w');
} catch (Error $e) {
    echo "Erro na abertura do arquivo!<br>";
}
fwrite($arquivo, "Valor inicial\n");
$str = "Segunda linha\n";
fwrite($arquivo, $str);
fclose($arquivo);

$str = "Nova Linha\n";
$fh = fopen('teste.txt', 'w');
fwrite($fh, $str);
fclose($fh);

$str = "com novos valores!!!\n";
$fh = fopen('teste.txt', 'a');
fwrite($fh, $str);
$str = "após um certo tempo!";
fwrite($fh, $str);
fclose($fh);



