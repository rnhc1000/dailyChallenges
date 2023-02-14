<div class="titulo">Criar Tabelas</div>

<?php

require_once "conexao.php";

// Data Definition Language (DDL)
$sql = "CREATE TABLE IF NOT EXISTS cadastro (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nascimento DATE,
    email VARCHAR(100) NOT NULL,
    site VARCHAR(100),
    filhos INT,
    salario FLOAT
)";

$conexao = novaConexao();
$resultado = $conexao->query($sql);
if($resultado) {
    echo "Sucesso :)";
} else {
    echo "Erro na criação da tabela: " . $conexao->error;
}
$conexao->close();




