<div class="titulo">Operadores Relacionais</div>
<?php
var_dump( 1 == 1);//true
var_dump( 1 > 1); //false
var_dump( 1 >= 1); //true
var_dump( 4 < 23); //true
var_dump( 1 <= 7); //false
var_dump(1 != 1); //false

var_dump( 111 == '111'); //true
/** Comparação estrita uso do operador ( === ) */
var_dump( 111 === '111'); //false
var_dump(111 != '111'); // false
/** Comparação estrita uso do operador ( !== ) */
var_dump( 111 !== '111'); //true

echo "<p class='divisao'>Relacionais no If/Else</p><hr>";

$idade = 10;
if($idade < 18) {
    echo "Menor de idade = $idade anos!<br>";
} else if($idade <= 65) {
    echo "Adulto = $idade anos!<br>";
} else {
    echo "Terceira idade = $idade anos!<br>";
}

echo "<p class='divisao'>Spaceship</p><hr>";
var_dump(5 <=> 3); // 1
var_dump(3 <=> 3); // 0
var_dump(5 <=> 50); // -1 A posição do operando determina o retorno 0, 1 ou -1
var_dump(!!5); // o uso de dupla negação garante o valor // 1
var_dump(!!0); // false
var_dump(!!""); // false
var_dump(!!" ");



?>