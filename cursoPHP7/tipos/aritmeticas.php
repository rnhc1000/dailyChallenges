<div class="titulo">Operações Aritméticas</div>
<?php
echo 1 + 1; 
echo '<br>';
var_dump(1 + 1);
echo '<br>';
echo 1 + 2.5;
echo '<br>';
echo 10 - 2;
echo '<br>';
echo 2 * 5;
echo '<br>';
echo 7 / 4;;
echo '<br>';
echo intdiv(7,4); // so retorna a parte inteira do resto da divisão
echo '<br>';
echo round(7 / 4);
echo '<br>';
echo 7 % 2;
echo '<br>';
echo 8 % 2;
echo '<br>';
echo 7 / 0 ;
echo '<br>';
//echo intdiv(7, 0); # erro!
echo 4 ** 2;
// Precedência de Operadores
// () => ** => / * % => + -
echo '<p>Precedencia</p>';
echo 2 + 3 * 4;
echo '<br>';
echo (2 + 3) * 4;
echo '<br>';
echo ((2 + 3) * 4) ** 2;