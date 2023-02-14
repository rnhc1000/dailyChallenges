<div class="titulo">Operações</div>
<?php
$dadosA = [
    "nome" => "Jose",
    "idade" => 28
];

$dadosB = [
    "nome" => "Maria",
    "naturalidade" => "Fortaleza"
];

$dadosB["endereco"] = 'Rua A, 76';
$dadosCompletos = $dadosA + $dadosB;
print_r($dadosCompletos);

// Array ( [nome] => Jose [idade] => 28 [naturalidade] => Fortaleza ) 

/**
 * Mesmo a chave nome no segundo array sobrescrevendo o valor anterior
 * "Jose" ao usar o operador + o primeir elemento da "soma" das 
 * matrizes tem a preferencia e assim o nome Jose é mantido.
 */

echo'<br>' . is_array($dadosCompletos);
/**
* Fazer sempre o teste para saber se a variável
* representa um array
*/
echo '<br>' . count($dadosCompletos);
/**
  * Se o comprimento do array for um item importante,
  * efetuara contagem pode ser mais uma etapa na avaliação se
  * a informação recebida é realmente uma matriz e se possui
  * o número de elementos necessaŕios para que se efeuta
  * o processamento adequado.
*/

$indice = array_rand($dadosCompletos);  
echo '<br>' . $indice;

echo '<br>' . "$indice = $dadosCompletos[$indice]";
echo '<br>';
/**
 * Para acessar os elemtnos do array
 * fazer uso de {} conforme exemplos abaixo:
 */
echo '<br>' . "{$dadosCompletos['idade']}";
echo '<br>' . "{$dadosCompletos['nome']}";
/**
 * Ou assim!
 */
echo '<br>' . "${dadosCompletos['naturalidade']}";

/**
 * Para remover um elemento do array basta
 * fazer uso dafunção unset e fornecer o elemento
 * a ser retirado ddo array
 */

 unset($dadosCompletos["nome"]);
 echo '<br>';
 print_r($dadosCompletos);


 $impares = [1, 3, 5, 7, 9];
 $pares =   [0, 2, 4, 6, 8];
 echo '<br>';

 $numeros = $impares + $pares;
 var_dump($numeros);

 /**
  * array(5) { 
  * [0]=> int(1) 
  * [1]=> int(3) 
  * [2]=> int(5) 
  * [3]=> int(7) 
  * [4]=> int(9) 
  * } 
  */

  $numeros = $pares + $impares;
  echo '<br>';
  var_dump($numeros);
/**
 * array(5) { 
 * [0]=> int(0) 
 * [1]=> int(2) 
 * [2]=> int(4) 
 * [3]=> int(6) 
 * [4]=> int(8) 
 * } 
 * 
 * Ao usar array indexada e o operador +
 * na verdade o que se tem é a prevalência
 * do primeiro membro em relação ao segundo.
 * Observem os índices nas duas
 * operacões acima!!!
 * Para resolver este problema usa-se a função
 * array_merge()
 */

 $numeros = array_merge($pares, $impares);
 echo '<br>';
 var_dump($numeros);
/**
 * array(10) { 
 * [0]=> int(0) 
 * [1]=> int(2) 
 * [2]=> int(4) 
 * [3]=> int(6) 
 * [4]=> int(8) 
 * [5]=> int(1) 
 * [6]=> int(3) 
 * [7]=> int(5) 
 * [8]=> int(7) 
 * [9]=> int(9) 
 * } 
 * 
 */
sort($numeros);
echo '<br>';
var_dump($numeros);
/**
 * 
 * array(10) { 
 * [0]=> int(0) 
 * [1]=> int(1) 
 * [2]=> int(2) 
 * [3]=> int(3) 
 * [4]=> int(4) 
 * [5]=> int(5) 
 * [6]=> int(6) 
 * [7]=> int(7) 
 * [8]=> int(8) 
 * [9]=> int(9) 
 * } 
 */