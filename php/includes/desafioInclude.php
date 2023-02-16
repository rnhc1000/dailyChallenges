<div class="titulo">Desafio Include</div>

<?php
ini_set('display_errors', 1);
require_once(__DIR__ . '/pessoa.php');
require_once(__DIR__ . '/usuario.php');


$usuario = new Usuario('Gustavo Mendonça', 21, 'gust_mend');
echo "$usuario->nome, $usuario->idade, $usuario->login";
/**
 * Usando o destrutor!!!
 */
unset($usuario);