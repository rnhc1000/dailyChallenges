<div class="titulo">Desafio Switch</div>


<form action="#" method="post">
    <input type="text" name="param">
    <select name="conversao" id="conversao">
        <option value="km-milha">Km -> Milha</option>
        <option value="milha-km">Milha -> Km</option>
        <option value="metro-km">Metros -> Km</option>
        <option value="km-metro">Km -> Metros</option>
        <option value="CC-FF">Celsius -> Fahrenheit</option>
        <option value="FF-CC">Fahreinheit -> Celsius</option>
    </select>
    <button>Calcular</button>
    <input type="submit" value="Converter">
</form>


<style>
    form > * {
        font-size: 1.8rem;
    }

    p {
        font-weight: bold;
    }
</style>

<?php
/** as chaves param e conversao estarão disponpievsi
 * via post e ao efetuar o código abaixo q retotna 
 * um Array associativo( chave=>valor) como abaixo:
 * Array ( [param] => 123 [conversao] => km-milha )
 * array(2) { ["param"]=> string(3) "123" ["conversao"]=> string(8) "km-milha" } 
 */
/*var_dump($_POST);

echo $_POST['param'] . '<br>';
echo $_POST['conversao'];

$entrada = $_POST['param'];
echo $entrada;
$conversor = $_POST['conversao'];
echo $conversor;

echo '<hr>';
switch($conversor) {

    case 'km-milha':
        $entrada = $entrada / 1.6;
    break;

    case 'milha-km':
        $entrada = $entrada * 1.6;
    break;

    case 'metro-km':
        $entrada = $entrada / 1000;
    break;

    case 'km-metro' :
        $entrada = $entrada * 1000;
    break;

    default:
break;

}
$entrada = number_format($entrada, 2, ',', '.');
echo "<p>$entrada</p>";
*/

const FATOR_KM_MILHA = 0.621371;
const FATOR_METRO_KM = 1000;
const FATOR_F_C = 1;
const FATOR_C_F = 1;

if (isset($_POST['param']) && isset($_POST['conversao'])) {

$param = $_POST['param']; //?? 0; // se n vier nada seta para zero
switch($_POST['conversao']) {
    case 'km-milha':
        $entrada = $param * FATOR_KM_MILHA;
        $entrada = number_format($entrada, 2, ',', '.');
        $mensagem = "$param Km = $distancia Milhas";
    break;

    case 'milha-km':
        $entrada = $param / FATOR_KM_MILHA;
        $entrada = number_format($entrada, 2, ',', '.');
        $mensagem = "$param Milhas = $distancia Km";
    break;

    case 'metro-km':
        $entrada = $param / FATOR_METRO_KM;
        $entrada = number_format($entrada, 2, ',', '.');
        $mensagem = "$param Metros = $distancia Km";
    break;

    case 'km-metro' :
        $entrada = $param * FATOR_METRO_KM;
        $entrada = number_format($entrada, 2, ',', '.');
        $mensagem = "$param Km = $distancia Metros";
    break;

    case 'CC-FF' :
            $entrada = ($param * 1.8) + 32;
            $entrada = number_format($entrada, 2, ',', '.');
            $mensagem = "$param Celsius = $entrada Fahrenheit";
    break;

    case 'FF-CC' :
        $entrada = ($param - 32) / 1.8;
        $entrada = number_format($entrada, 2, ',', '.');
        $mensagem = "$param Fahrenheit = $entrada Celsius";
    break;

    default:
        $mensagem = "Selecione um valor!!!";
    break;

}

}


echo "<p>$entrada</p>";
