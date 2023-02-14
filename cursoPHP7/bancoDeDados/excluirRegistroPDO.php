<div class="titulo">Excluir Registro PDO</div>
<?php
require_once "conexaoPDO.php";
$sql = "DELETE FROM cadastro WHERE id >= ?";
$conexao = novaConexao();
$stmt = $conexao->prepare($sql);

if($stmt->execute([18])) {
    echo "Sucesso: :)";
} else {
    echo "Erro: :(";
    print_r($stmt->errorInfo());
}

/**
 * Outra solução por associação 
 */

$sql = "DELETE FROM cadastro WHERE id = :id"; 
$stmt = $conexao->prepare($sql);

if($stmt->execute([':id' => 8])) {
    echo "Sucesso: :)";
} else {
    echo "Erro: :(";
    print_r($stmt->errorInfo());
}


