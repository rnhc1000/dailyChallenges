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
    <title>Curso PHP</title>
</head>
<body>
    <!---
        Atenção no uso das tags corretas
    --->
    <header class="cabecalho">
        <h1>Curso PHP</h1>
        <h2>Índice dos Exercicios</h2>
    </header>
    <nav class="navegacao">
        <span class="usuario">Usuário: <?= $_SESSION['usuario'] ?> </span>
        <a href="logout.php">Sair</a>
    </nav>
    <!---
    <shortcuts main.principal<TAB>
    -->
    <main class="principal">
        <div class="conteudo">
            <?php
                require_once(__DIR__ . '/menu.php');
            ?>
        </div>
    </main>

    <!--- 
    shortcut main#principal
    <main id="principal"></main>
    main#a.principal
    <main id="a" class="principal"></main>
    div[teste]=
    <div teste=""></div>--->
    <footer class="rodape">
        COD3R & ALUNOS @ <?= date('d M Y') ?>
    </footer>
    <!---
    <main>teste</main>
    <footer>teste</footer>
    <nav>teste</nav>
    <div>teste</div>
    <span>teste</span>
    -->
</body>
</html>