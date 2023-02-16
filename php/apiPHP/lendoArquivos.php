<div class="titulo">Lendo Arquivos</div>
<?php

$fh = fopen('teste.txt', 'r');
echo fread($fh, 10) .'<br>'; //lendo 10 bytes
echo fread($fh, 10) .'<br>';
fclose($fh);

$fh = fopen('teste.txt', 'r');
$tamanho = filesize('teste.txt');
echo '<br>' . $tamanho . ' bytes<br>';
echo fread($fh, $tamanho);
fclose($fh);
'<br>';
echo '<hr>';
$fh = fopen('teste.txt', 'r');
echo fgets($fh) . '<br>'; //Ler o arquivo linha a linha
echo fgets($fh) . '<br>';
echo fgets($fh) . '<br>';
var_dump(fgets($fh));
echo '<br>';
fclose($fh);

echo '<hr>';
$fh = fopen('teste.txt', 'r');
while(!feof($fh)) {
    echo fgets($fh) . '<br>';
}
fclose($fh);

echo '<hr>';
$fh = fopen('teste.txt', 'r');
while(!feof($fh)) {
    echo fgetc($fh) . '<br>';
}
fclose($fh);

