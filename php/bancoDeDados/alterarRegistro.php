<div class="titulo">Alterar Registro</div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

<?php
require_once "conexao.php";
$conexao = novaConexao();
ini_set('display_errors', 1);

if($_GET['codigo']) {
    $sql = "SELECT * FROM cadastro WHERE id = ?";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("i", $_GET['codigo']);

    if ($stmt->execute()) {
        $resultado = $stmt->get_result();
        if($resultado->num_rows > 0) {
            $dados = $resultado->fetch_assoc();
            if($dados['nascimento']) {
                $dt = new DateTime($dados['nascimento']);
                $dados['nascimento'] = $dt->format('d/m/Y');
            }
            if($dados['salario']) {
                str_replace(".", ",", $dados['salario']);
            }        
        }
    }
}

if(count($_POST) > 0) {
    $dados = $_POST;
    $erros = [];

    if(trim($dados['nome']) === "") {
    //if(!filter_input(INPUT_POST, "nome") {
        $erros['nome'] = 'Nome é obrigatório';
    }

    if(isset($dados['nascimento'])) {
    //if(filter_input(INPUT_POST, "nascimento")) {
        $data = DateTime::createFromFormat(
            'd/m/Y', $dados['nascimento']);
        if(!$data) {
            $erros['nascimento'] = 'Data deve estar no formato dd/mm/aaaa';
        }
    }

    if(!filter_var($dados['email'], FILTER_VALIDATE_EMAIL)) {
        $erros['email'] =  'Email inválido';
    }

    if(!filter_var($dados['site'], FILTER_VALIDATE_URL)) {
        $erros['site'] = 'Site inválido! Use https : //nome do site';
    }
    
    $filhosConfig = [
        "options" => ["min_range"=>0, "max_range"=>20]
    ];
    if(!filter_var($dados['filhos'], FILTER_VALIDATE_INT, 
        $filhosConfig) && $dados['filhos'] != 0) {
        $erros['filhos'] = 'Número de filhos inváido';
    }

    $salarioConfig = ["options" => ['decimal' => ',']];
    if(!filter_var($dados['salario'], FILTER_VALIDATE_FLOAT, 
        $salarioConfig)) {
        $erros['salario'] =  'Salário inválido';
    }

    //print_r($dados);

    if(!count($erros)) {

        $sql = "UPDATE cadastro 
        SET nome = ?, nascimento = ?, email = ?, 
        site = ?, filhos = ?, salario = ? 
        WHERE id = ?";

        $stmt = $conexao->prepare($sql);
        $params = [
            $dados['nome'],
            ($data ? $data->format('Y-m-d') : null),
            $dados['email'],
            $dados['site'],
            $dados['filhos'],
            $dados['salario'] ? str_replace(",", ".", $dados['salario']) : null,
            $dados['id']
        ];

        $stmt->bind_param('ssssidi', ...$params);

        if($stmt->execute()) {
            printf("%d Linha(s) inserida(s)!\n", $stmt->affected_rows);
            unset($dados);
            $stmt->close();
        };

    }
}


?>

<!---
<?php foreach($erros as $erro): ?>
    <div class="alert alert-danger" role="alert">
        <?= $erro ?>
    </div>
<?php endforeach ?>
-->

<form action="http://127.0.0.1/desenvolvimento/cursoPHP7/exercicio.php" methis="get">
    <input type="hidden" name="dir" value="bancoDeDados">
    <input type="hidden" name="file" value="alterarRegistro">
    <div class="form-group row">
        <div class="col-sm-10">
            <input type="number" name="codigo"
            class="form-control"
            value="<?= $_GET['codigo'] ?>"
            placeholder="Informe o código para consulta!">
        </div>
        <div class="col-sm-2">
            <button class="btn btn-success mb-4">Consultar</button>
        </div>
    </div>
</form>

<form action=""></form>
<form action="#" method="post">
    <input type="hidden" name="id" value=<?=$dados['id']?>>
    <div class="form-row">
        <div class="form-group col-md-8">
            <label for="nome">Nome</label>
            <input type="text" class="form-control <?= $erros['nome'] ? 'is-invalid' : ''?>"
                id="nome" name="nome" 
                placeholder="Nome"
                value="<?= $dados['nome']?>">
            <div class="invalid-feedback">
                <?= $erros['nome'] ?>
            </div>
        </div>
        <div class="form-group col-md-4">
            <label for="nascimento">Nascimento</label>
            <input type="text" class="form-control <?= $erros['nascimento'] ? 'is-invalid' : ''?>"
                id="nascimento" name="nascimento" 
                placeholder="Nascimento"
                value="<?= $dados['nascimento']?>">
            <div class="invalid-feedback">
                <?= $erros['nascimento'] ?>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="email">E-mail</label>
            <input type="text" class="form-control <?= $erros['email'] ? 'is-invalid' : ''?>"
                id="email" name="email" 
                placeholder="E-mail"
                value="<?= $dados['email']?>">
            <div class="invalid-feedback">
                <?= $erros['email'] ?>
            </div>

        </div>
        <div class="form-group col-md-6">
            <label for="site">Site</label>
            <input type="text" class="form-control <?= $erros['site'] ? 'is-invalid' : ''?>"
                id="site" name="site" placeholder="Site"
                value="<?= $dados['site']?>">
            <div class="invalid-feedback">
                <?= $erros['site'] ?>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="filhos">Número de Filhos</label>
            <input type="number" class="form-control <?= $erros['filhos'] ? 'is-invalid' : ''?>"
                id="filhos" name="filhos" 
                placeholder="Número de Filhos"
                value="<?= $dados['filhos']?>">
            <div class="invalid-feedback">
                <?= $erros['filhos'] ?>
            </div>

        </div>
        <div class="form-group col-md-6">
            <label for="salario">Salário</label>
            <input type="text" class="form-control <?= $erros['salario'] ? 'is-invalid' : ''?>"
                id="salario" name="salario" 
                placeholder="Salário"
                value="<?= $dados['salario']?>">
            <div class="invalid-feedback">
                <?= $erros['salario'] ?>
            </div>
        </div>
    </div>
    <button class="btn btn-primary btn-lg">
        Enviar
    </button>
</form>
