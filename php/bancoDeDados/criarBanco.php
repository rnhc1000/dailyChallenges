<div class="titulo">Criar Banco de Dados</div>
<?php
//ini_set('display_errors', 1);
require_once "conexao.php";

$conexao = novaConexao(null);
$sql = 'CREATE DATABASE IF NOT EXISTS cursoPHP';
$conexao->query($sql);
$resultado = $conexao->query($sql);

if($resultado) {
    echo "Sucesso :)";
} else {
    echo "Erro: " . $conexao->error;
}
$conexao->close();
