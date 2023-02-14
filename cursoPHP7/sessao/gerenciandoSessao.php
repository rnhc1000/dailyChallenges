<div class="titulo">Gerenciando Sessão</div>
<?php


session_start();
//afkrmna6u7f30gi2pht7o6ge9s
echo session_id();

$contador = &$_SESSION['contador'];
$contador = $contador ? $contador += 1 : 1;
echo '<br>' .$_SESSION['contador'];
// A cada refresh o contadir é incrementado
if($_SESSION['contador'] % 5 === 0) {
    session_regenerate_id();
}

if($_SESSION['contador'] >= 15 ) {
    session_destroy();
}



