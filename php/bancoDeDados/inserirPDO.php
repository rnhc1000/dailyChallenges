<div class="titulo">Inserir PDO</div>

<?php
require_once "conexaoPDO.php";
$sql = "INSERT INTO cadastro
(nome, email, nascimento, site, filhos, salario)
VALUES (
    'Pedro Joaquim',
    'pjquim@gmail.com',
    '2021-7-21',
    'http://pjquim.com.br',
    0,
    3000
)";


$conexao = novaConexao();
//print_r(get_class_methods($conexao));
//echo '<br>';
//var_dump(get_class_methods($conexao));

if($conexao->exec($sql)) {
    $id = $conexao->lastInsertId();
    echo "Novo cadastro com id $id.";
} else {
    echo $conexao->errorCode();
    print_r($conexao->errorInfo());
}
