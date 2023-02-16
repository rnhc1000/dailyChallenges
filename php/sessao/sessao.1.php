<div class="titulo">Sessao #01</div>
<?php

session_start();


print_r($_SESSION);// Todos os dados da sessão armazenados em um array


echo '<br>';
if(!$_SESSION['nome]']) {
    $_SESSION['nome'] = 'Gabriel';
}

if(!$_SESSION['email']) {
    $_SESSION['email'] = 'gabriel@mail.com';
}


print_r($_SESSION);
?>

<p>
    <a href='sessao/basicoSessaoAlterar.php'>
        Alterar Sessao
    </a>
</p>