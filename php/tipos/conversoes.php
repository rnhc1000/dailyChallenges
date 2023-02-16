<div class="titulo">Conversões</div>
<?php

echo '<p>Teste se é inteiro!</p>';
echo is_int(PHP_INT_MAX);

echo '<p>Converter int -> float!</p>';
echo '<br>';
var_dump(PHP_INT_MAX + 1);
echo '<br>';
var_dump((float) 3);

echo '<p>Converter float -> int</p>';
var_dump((int) 6.8);
echo '<br>';
var_dump((int) round(2.8));

//operações comstring
echo '<p>Convertendo strings...</p>';
var_dump(3 + "2"); // php n concatena e sim faz a soma;
echo '<br>';
var_dump("3" + 2);
echo '<br>';
var_dump("3" . 2); //concatenacao 32
echo '<br>';
var_dump(1 + "5 cinco"); // 6
echo '<br>';
var_dump(1 + "3.2e2");
echo '<br>';
var_dump((float) 10.5);
echo '<br>';
var_dump((float) "10.5");
