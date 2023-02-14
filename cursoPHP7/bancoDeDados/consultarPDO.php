<div class="titulo">Consultar PDO</div>
<?php

require_once "conexaoPDO.php";

$conexao = novaConexao();
echo 'Primeiro...<br>';
$sql = "SELECT * FROM cadastro";
/**
 * Explorar as possibilidades
 * PDO::FETCH_NUM
 * PDO::FETCH_ASSOC
 * PDO::FETCH_CLASS
 * PDO::FETCH_BOTH
 * ou simplesmente fetchALL();
 */
$resultado = $conexao->query($sql)->fetchALL(PDO::FETCH_ASSOC);
print_r($resultado);


echo 'Segundo...<br>';

$sql = "SELECT * FROM cadastro LIMIT :qtde OFFSET :inicio";
//$sql = "SELECT * FROM cadastro LIMIT 10 OFFSET 500;
// seleciona as 10 linhas a partir da linha 500

$stmt = $conexao->prepare($sql);
$stmt->bindValue(':qtde', 2, PDO::PARAM_INT);
$stmt->bindValue(':inicio', 1, PDO::PARAM_INT);


//print_r(get_class_methods($stmt));

if($stmt->execute()) {
    $resultado = $stmt->fetchALL();
    print_r($resultado);

} else {
    echo "Código: " . $stmt->errorCode() . "<br>";
    print_r($stmt->errorInfo());
}

echo "<hr>";

$sql = "SELECT * FROM cadastro  WHERE id = ?";

$stmt= $conexao->prepare($sql);
if($stmt->execute([14])) {
    $resultado = $stmt->fetch();
    print_r($resultado);
} else {
    echo "Código: " . $stmt->errorCode() . "<br>";
    print_r($stmt->errorInfo());
}

// Outra froma de fazer usando o bind_param()

echo "<hr>";

$sql = "SELECT * FROM cadastro  WHERE id = :id";

$stmt= $conexao->prepare($sql);
$stmt->bindValue(':id', 15); //, PDO::PARAM_INT);
//if($stmt->execute([14])) {
    if($stmt->execute([':id' => 1])) {
    $resultado = $stmt->fetch();
    print_r($resultado);
} else {
    echo "Código: " . $stmt->errorCode() . "<br>";
    print_r($stmt->errorInfo());
}


//$conexao->close();
