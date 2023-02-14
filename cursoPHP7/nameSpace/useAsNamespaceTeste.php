<?php namespace Outro\Nome; ?>
<div class="titulo">UseAs Teste</div>

<?php

echo __NAMESPACE__ . '<br>';

include('useAsNamespace.php');

function soma($a, $b) {
    return $a . $b;
}

class Classe {
    public $var;
    function func() {
        echo    __NAMESPACE__ . '->' . 
                __CLASS__ . '->' .
                __METHOD__ . '<br>';
    }

}

//echo \Nome\Bem\Grande\CONSTANTE . '<br>';

echo '<hr>';
echo __NAMESPACE__ . '<br>';
use const Nome\Bem\Grande\CONSTANTE;
echo CONSTANTE . '<br>';

echo '<hr>';
use Nome\Bem\Grande as ctx;
echo __NAMESPACE__ . '<br>';
echo '<hr>';
echo soma(1, 2) . '<br>';
echo __NAMESPACE__ . '<br>';
echo ctx\soma(1, 2) . '<br>';

echo 'Usando alias de função(use.func()..as funcOutroNome)' .'<hr>';
//use function Nome\Bem\Grande\soma;
use function Nome\Bem\Grande\soma as somaReal;
echo somaReal(1, 2) . '<br>';

echo 'Usando caminho relativo...' .'<hr>';
$a = new Classe;
$a->func();

echo 'Usando caminho absoluto...' .'<hr>';
$b = new \Nome\bem\Grande\Classe();
$b->func();

echo 'Usando ctx(use...as ctx)' .'<hr>';
$c = new ctx\Classe();
$c->func();

echo 'Usando alias(use...as)' .'<hr>';
use \Nome\bem\Grande\Classe as D;
$d = new D();
$d->func();




