<div class="titulo">Alterar Registro PDO</div>

<?php

require_once "conexaoPDO.php";
$conexao = novaConexao();

$sql = "UPDATE cadastro
SET nome = ?, nascimento = ?,
email = ?, site = ?, filhos = ?, salario = ?
WHERE id = ?";

$stmt = $conexao->prepare($sql);

$resultado = $stmt->execute([
    'Gui',
    '1980-12-12',
    'gui@gui.com.br',
    'http://gui.co',
    12,
    10000,
    17
]);

if($resultado) {
    echo "Sucesso :)";
} else {
    print_r($stmt->errorInfo());
}