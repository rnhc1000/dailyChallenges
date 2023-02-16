<div class="titulo">Conexao PDO</div>

<?php
ini_set('display_errors', 1);
function novaConexao($banco = 'cursoPHP') {
    $servidor = '172.17.0.1';
    $usuario = 'root';
    $senha = 'M4n4g3rMySQL';    
    try {
        $conexao = new PDO("mysql:host=$servidor;dbname=$banco",$usuario, $senha);
        return $conexao;
    } catch(PDOException $e) {
        die('Erro ' . $e->getMessage());
    }
}

novaConexao();
//echo 'Fim!!!!';
