
<div class="titulo">Inserir Registros #01</div>

<?php
require_once "conexao.php";

$sql = "INSERT  INTO cadastro
(nome, nascimento, email, site, filhos, salario)
VALUES (
    'Marcos Pereira',
    '1979-01-19',
    'joaopereira123@email.com.br',
    'https://joaopereira.sites.com.br',
    3,
    13000.87
)";

$conexao = novaConexao();
$resultado = $conexao->query($sql);
if($resultado) {
    echo "Sucesso :)";
} else {
    echo "Erro na inserção do registro: " . $conexao->error;
}

$sql = "INSERT  INTO cadastro
(nome, nascimento, email, site, filhos, salario)
VALUES (
    'Marcos Pereira',
    '1970-01-25',
    'marcospereira@email.com.br',
    'https://marcospereira.sites.com.br',
    4,
    14000.87
)";
$resultado = $conexao->query($sql);
if($resultado) {
    echo "Sucesso :)";
} else {
    echo "Erro na inserção do registro: " . $conexao->error;
}

$sql = "INSERT  INTO cadastro
(nome, nascimento, email, site, filhos, salario)
VALUES (
    'Luis Pereira',
    '1977-01-25',
    'luispereira@email.com.br',
    'https://luispereira.sites.com.br',
    5,
    15000.87
)";
$resultado = $conexao->query($sql);
if($resultado) {
    echo "Sucesso :)";
} else {
    echo "Erro na inserção do registro: " . $conexao->error;
}

$conexao->close();
?>


