<div class="titulo">Datas #02</div>

<?php
$formatoData1 = 'D, d \d\e M \d\e Y';
$formatoData2 = '%A, %d de %B de %Y';
$formatoData3 = "%Y-%B-%d";
$formatoDataHora = '%A, %d de %B de %Y - %H:%M:%S.%s    ';
$formatoDataHora1 = '%S.%s    ';

$agora = new DateTime();

print_r($agora);
echo '<br>';

echo $agora->format($formatoData1) . '<br>';

setlocale(LC_TIME, 'pt_BR');
echo strftime($formatoData2, $agora->getTimeStamp()) . '<br>';

$amanha = new DateTime('+2 week');
echo strftime($formatoData2, $amanha->getTimeStamp()) . '<br>';

$amanha->modify('+1 day');
echo strftime($formatoData2, $amanha->getTimeStamp()) . '<br>';

$amanha->setDate(2000, 5, 20);
echo strftime($formatoData2, $amanha->getTimeStamp()) . '<br>';

echo '<hr>';
//$amanha = new DateTime('+5 year');
//$amanha = strftime($formatoData3, $amanha->getTimestamp());
$dataPassada = new DateTime('2000-05-17');
$dataFutura = new DateTime('2030-10-12');
$outraData = new DateTime('2030-10-12');
echo ($amanha > $dataPassada ? 'Maior' : 'Menor') . '<br>';
echo ($amanha > $dataFutura ? 'Maior' : 'Menor') . '<br>';
echo $outraData == $dataFutura ? 'Igual' : 'Diferente' . '<br>';
echo '<hr>';
$tz = new DateTimeZone('America/Manaus');
//se não passar o txz ele assume o GMT (-3 no caso)
$agora = new DateTime(null, $tz);
echo $agora->format('d/M/Y : H:i:s');


