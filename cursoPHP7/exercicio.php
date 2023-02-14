<?php
session_start();
if($_COOKIE['usuario']) {
    $_SESSION['usuario'] = $_COOKIE['usuario'];
}

if(!$_SESSION['usuario']) {
    header('Location: login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel ="stylesheet" href="assets/css/estilo.css">
    <link rel ="stylesheet" href="assets/css/exercicio.css">
    <title>Exercicio</title>
</head>
<body class="exercicio">
    <header class="cabecalho">
        <h1>Curso PHP</h1>
        <h2>Visualização do Exercício</h2>
    </header>
    <nav class="navegacao">
    <span class="usuario">Usuário: <?= $_SESSION['usuario'] ?> </span>
        <a href="logout.php">Sair</a>
        <a  href=<?= "{$_GET['dir']}/{$_GET['file']}.php"?> 
            class="verde">Sem CSS</a>
        <a  href="index.php" class="vermelho">Voltar!</a>
    </nav>
    <main class="principal">
        <div class="conteudo">
            <?php
                //include($_GET['dir'] . "/teste.php");
                //include("testes/teste.php");
                // echo $_GET['dir'];
                include(__DIR__ . "/{$_GET['dir']}/{$_GET['file']}.php"); 
                //include($_GET['dir'] . "/" . $_GET['file'] . ".php");
                //include("{$_GET['dir']}/{$_GET['file']}.php");
            ?>
        </div>
    </main>

    <footer class="rodape">
        COD3R & ALUNOS @ <?= date('d M Y') ?>
    </footer>
</body>
</html>