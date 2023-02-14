<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<div class="titulo">Excluir Registro #02</div>

<?php
/**
 * Em vez de usar o comando query
 * vamos usar ocomando prepare cpom o objetivo
 * de monitorrar e prevenir SQL injection
 * para tornar o delete mais seguro;
 * Criar uma coluna do tipo booleana 
 * para determinar se o registro deve ser excluído,
 * evitando a exclusão do registro ou atrvés
 * de uma coluna do tipo date para validar o registro
 * 
 */

 require_once "conexao.php";

 $conexao = novaConexao();
 $registros = [];
/**
 * Código para evitar SQL INJECTION
 */
 if($_GET['excluir']) {
     $excluirSQL = "DELETE FROM cadastro WHERE id = ?";
     $stmt = $conexao->prepare($excluirSQL);
     $stmt->bind_param("i", $_GET['excluir']);
     $stmt->execute();
 }
 $sql = "SELECT id, nome, nascimento, email FROM cadastro";
 $resultado = $conexao->query($sql);
 if($resultado->num_rows > 0) {
     echo "Temos registros....";
     while($row = $resultado->fetch_assoc()) {
         $registros[] = $row;
     } 
} elseif ($conexao->error) {
         echo "Erro: " . $conexao->error;
}
$conexao->close();

print_r($_GET)
?>
<table class="table table-hover table-striped">
    <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Nascimento</th>
        <th>Ações</th>
    </thead>
    <tbody>
        <?php foreach($registros as $registro) : ?>
            <tr>
                <td><?=$registro['id']?></td>
                <td><?=$registro['nome']?></td>
                <td><?=$registro['email']?></td>
                <td>
                    <?=
                        date('d/m/Y', strtotime($registro['nascimento']));
                    ?>
                </td>
                <td>
                    <a href="http://127.0.0.1/desenvolvimento/cursoPHP7/exercicio.php?dir=bancoDeDados&file=excluirRegistro.2&excluir=<?=$registro['id']?>"
                        class="btn btn-danger">
                        Excluir
                    </a>
                </td>
            </tr>
        <?php endforeach ?>
    </tbody>
</table>

<style>
    table > * {
        font-size: 1.2rem;
    }
</style>

