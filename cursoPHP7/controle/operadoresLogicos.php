<div class="titulo">Operadores Lógicos</div>
<?php
echo "<p class='divisao'>Negação Lógica</p><hr>";
var_dump(true); //true
var_dump(!true); //false pq negado -> operador not
var_dump(!!true); // true
echo '<br>';

echo "<p class='divisao'>Tabela Verdade 'AND' (E)</p><hr>";
var_dump(true  && true);
var_dump(true  && false);
var_dump(false && true);
var_dump(false && false);
echo '<br>';
var_dump(true  and true);
var_dump(true  and false);
var_dump(false and true);
var_dump(false and false);

echo "<p class='divisao'>Tabela Verdade 'OR' (OU)</p><hr>";
var_dump( true  || true);
var_dump( true  || false);
var_dump( false || true);
var_dump( false || false);
echo '<br>';
var_dump( true  or true);
var_dump( true  or false);
var_dump( false or true);
var_dump( false or false);

echo "<p class='divisao'>Tabela Verdade 'XOR' (OU Exclusivo)</p><hr>";
var_dump( true  xor true);
var_dump( true  xor false);
var_dump( false xor true);
var_dump( false xor false);
echo '<br>';
var_dump( true  != true);
var_dump( true  != false);
var_dump( false != true);
var_dump( false != false);

echo "<p class='divisao'>Exemplo</p><hr>";
$idade = 60;
$sexo = 'F';
$previdenciaOK = true;

$podeSeAposentar =  $previdenciaOK &&
        (
            ($idade <= 60   &&  $sexo = 'F')
                            ||
            ($idade >= 65   &&  $sexo = 'M')
        );

var_dump($podeSeAposentar);
echo '<br>';                
if($idade >= 60 && $sexo === 'F') {
    echo 'Pode se aposentar -> ' . $sexo . ' -> ' .      $idade . ' anos!';
} elseif ($idade >= 65 && $sexo === 'M') {
    echo "Pode se aposentar -> ' . $sexo . ' -> ' .      $idade . ' anos!'";
}  else {
        echo 'Vai ter que trabalhar mais um pouco -> ' . $idade . ' anos';
}
$criterioHomem =  ($idade >= 65 && $sexo === 'M');
$criterioMulher = ($idade >= 60 && $sexo === 'F');
$atingiuCriterio = $criterioHomem || $criterioMulher;
$aposentadoriaOK = $previdenciaOK && $atingiuCriterio;
echo '<hr>';
echo "Pode se aposentar -> " . $aposentadoriaOK . '<br>';


?>



