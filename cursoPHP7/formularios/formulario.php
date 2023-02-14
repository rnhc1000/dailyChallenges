<div class="titulo">Formulário</div>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<h2>Cadastro</h2>

<?php
/**
 * A estarégia de validação começa pela verificação
 * do núemro de itens ddo Array $_POST
 * isset para verificar se S_POST tem o campo 
 * nome
 * if(isset($_POST['nome'])) {
 * }
 * mas o melhor é usar a função filter_input
 * que informa se um determinado parâmetro
 * foi passado ou não!
 */
if(count($_POST) > 0) {

    if(!filter_input(INPUT_POST, "nome")) {
        $erros['nome']= 'Nome é obrigatório';
    }

    if(filter_input(INPUT_POST, "nascimento")) {
        $data = DateTime::createFromFormat(
            'd/m/Y', $_POST['nascimento']);
        if(!$data) {
            $erros['nascimento'] = 'Data deve estar no formato dd/mm/aaaa';
        }
    }

    if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $erros['email'] =  'Email inválido';
    }

    if(!filter_var($_POST['site'], FILTER_VALIDATE_URL)) {
        $erros['site'] = 'Site inválido! Use https : //nome do site';
    }
    
    $filhosConfig = [
        "options" => ["min_range"=>0, "max_range"=>20]
    ];
    if(!filter_var($_POST['filhos'], FILTER_VALIDATE_INT, 
        $filhosConfig) && $_POST['filhos'] != 0) {
        $erros['filhos'] = 'Número de filhos inváido';
    }

    $salarioConfig = ["options" => ['decimal' => ',']];
    if(!filter_var($_POST['salario'], FILTER_VALIDATE_INT, 
        $salarioConfig)) {
        $erros['salario'] =  'Salário inválido';
    }

}
?>

    <?php foreach($erros as $erro): ?>
        <div class="alert alert-danger" role="alert">
            <?= $erro ?>
        </div>
    <?php endforeach ?>

<?php
    /**var_dump($erros);
     * array(6) { 
     * ["nome"]=> string(20) "Nome é obrigatório" 
     * ["nascimento"]=> string(37) "Data deve estar no formato dd/mm/aaaa" 
     * ["email"]=> string(15) "Email inválido" 
     * ["site"]=> string(42) "Site inválido! Use https : //nome do site" 
     * ["filhos"]=> string(26) "Número de filhos inváido" 
     * ["salario"]=> string(17) "Salário inváido" } 
     */

?>

<form action="#" method="post">
    <div class="form-row">
        <div class="form-group col-md-9">
            <label for="nome">Nome</label>
            <input type="text" class="form-control <?= $erros['nome'] ? 'is-invalid' : ''?>"
                id="nome" name="nome" 
                placeholder="Nome"
                value="<?= $_POST['nome']?>">
            <div class="invalid-feedback">
                <?= $erros['nome'] ?>
            </div>
        </div>
        <div class="form-group col-md-3">
            <label for="nascimento">Nascimento</label>
            <input type="text" class="form-control <?= $erros['nascimento'] ? 'is-invalid' : ''?>"
                id="nascimento" name="nascimento" 
                placeholder="Nascimento"
                value="<?= $_POST['nascimento']?>">
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
                value="<?= $_POST['email']?>">
            <div class="invalid-feedback">
                <?= $erros['email'] ?>
            </div>

        </div>
        <div class="form-group col-md-6">
            <label for="site">Site</label>
            <input type="text" class="form-control <?= $erros['site'] ? 'is-invalid' : ''?>"
                id="site" name="site" placeholder="Site"
                value="<?= $_POST['site']?>">
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
                value="<?= $_POST['filhos']?>">
            <div class="invalid-feedback">
                <?= $erros['filhos'] ?>
            </div>

        </div>
        <div class="form-group col-md-6">
            <label for="salario">Salário</label>
            <input type="text" class="form-control <?= $erros['salario'] ? 'is-invalid' : ''?>"
                id="salario" name="salario" 
                placeholder="Salário"
                value="<?= $_POST['salario']?>">
            <div class="invalid-feedback">
                <?= $erros['salario'] ?>
            </div>
        </div>
    </div>
    <button class="btn btn-primary btn-lg">
        Enviar
    </button>
</form>


<?php
/**
 * a classe form-row vem bo bootstrap
 * e define uma linha no  formulário.
 * O bootstr divide o espaço em 12 colunas
 * Vc define quantas colunas vc quer ocupar
 * a Classe form-group define quantas colunas 
 * das 12 disponiveis vc quer ocupar dentro do formulário
 * xs, md, sm, lg
 * name -> associado ao input se fizemros
 * um $_post vai haver um atributo chamado nome 
 * que é o name associado a este formulário vai estar
 * no array do $_POST
 */

 print_r($_GET);
 print_r($_POST);