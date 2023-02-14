<div class="titulo">Datas #01</div>
<script>
// Obtém a data/hora atual
var data = new Date();

// Guarda cada pedaço em uma variável
var dia     = data.getDate();           // 1-31
var dia_sem = data.getDay();            // 0-6 (zero=domingo)
var mes     = data.getMonth();          // 0-11 (zero=janeiro)
var ano2    = data.getYear();           // 2 dígitos
var ano4    = data.getFullYear();       // 4 dígitos
var hora    = data.getHours();          // 0-23
var min     = data.getMinutes();        // 0-59
var seg     = data.getSeconds();        // 0-59
var mseg    = data.getMilliseconds();   // 0-999
var tz      = data.getTimezoneOffset(); // em minutos
var dias = new Array(
 'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'
);

// Formata a data e a hora (note o mês + 1)
var str_data = dia + '/' + (mes+1) + '/' + data.getFullYear();
var str_hora = hora + ':' + min + ':' + seg + '.' + mseg;

console.log(str_data);
</script>

<?php
/**
 * Referencia : GMT -Data 01/01/1970;
 * Ao usar a função time() retorna o 
 * número de segundos a partir desta
 * data-base.
 */

echo 'Numero de segundos desde 01/01/1970-> ' . time() . '<br>'; 
echo date('D, d \d\e M \d\e Y : H:i:s ') . '<br>'; // ver date();
//R: Thu, 15 de Oct de 2020 : 23:00:41 

setlocale(LC_TIME, 'pt_BR', 'pt_BR.utf-8');
echo strftime('%A, %d de %B de %Y', time()) . '<br>';

$amanha = time() + (24 * 60 * 60);
echo strftime('%A, %d de %B de %Y' , $amanha) . '<br>';

$proximaSemana = strtotime('+1 week');
echo strftime('%A, %d de %B de %Y' , $proximaSemana) . '<br>';

$dataFixa = mktime(15, 30, 50, 1, 25, 1975);
echo strftime('%A, %d de %B de %Y - %H:%M:%S',  $dataFixa) . '<br>';
 ?>

