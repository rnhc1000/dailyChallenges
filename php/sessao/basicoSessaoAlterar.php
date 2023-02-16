<?php
session_start();
print_r($_SESSION);
?>

<p>
    <b>Nome: </b> <?= $_SESSION['nome'] ?><br>
    <b>Email: </b> <?= $_SESSION['email'] ?><br>
</p>
<?php
$_SESSION['email'] = 'gabrielfilho@emailaz.com.br';
?>

<p>
    <a href='sessao.1.php'>Voltar</a>
</p>

<p>
    <a href='sessao.2.php'>Limpar</a>
</p>
