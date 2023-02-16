<?php namespace Nome\Bem\Grande; ?>
<div class="titulo">UseAs</div>
<?php
echo __NAMESPACE__ . '<br>';

const CONSTANTE = 123;

function soma($a, $b) {
    return $a + $b;
}

class Classe {
    public $var;
    function func() {
        echo    __NAMESPACE__ . '->' . 
                __CLASS__ . '->' .
                __METHOD__ . '<br>';
    }
}