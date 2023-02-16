<div class="titulo">Multidimensionais</div>
<?php
$dados = [
    [
        "nome" => "Roberto",
        "idade" => 26,
        "naturalidade" => "São Paulo"
    ],
    [
        "nome" => "Maria",
        "idade" => 25,
        "naturalidade" => "Bahia"
    ]
];


print_r($dados);
/**
 * Array ( 
 * [0] => Array ( 
 * [nome] => Roberto 
 * [idade] => 26 
 * [naturalidade] => São Paulo 
 * )
 *  
 * [1] => Array ( 
 * [nome] => Maria 
 * [idade] => 25 
 * [naturalidade] => Bahia
 * ) 
 * 
 * ) 
 * 
 */

 echo '<br>' . $dados[0]['idade'];
 echo '<br>' . $dados[1]['idade'];

$dados[] = [
    [
        "nome" => "Florinda",
        "idade" => 30,
        "naturalidade" => "Santa Catarina"
    ]

];
print_r($dados);
/**
 * Array ( 
 * [0] => Array ( 
 * [nome] => Roberto 
 * [idade] => 26 
 * [naturalidade] => São Paulo 
 * )
 *  
 * [1] => Array ( 
 * [nome] => Maria 
 * [idade] => 25 
 * [naturalidade] => Bahia
 * ) 
 * 
 * ) 
 * [2] => Array (
 * [0] => Array ( 
 * [nome] => Florinda 
 * [idade] => 30 
 * [naturalidade] => Santa Catarina 
 * )
 * )
 * )
 */

 echo '<br>' . $dados[2][0]['idade'];