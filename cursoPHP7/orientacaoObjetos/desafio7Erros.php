<div class="titulo">Desafio 7 Erros</div>

<?php

interface Template {
    function metodo1();
    function metodo2($parametro);
}

abstract class ClasseAbstrata implements Template {
    public function metodo3() {
        
    }
}

class Classe extends ClasseAbstrata {
    function __construct($parametro) {
    }
    function metodo1() {

    }
    function metodo2($parametro) {

    }
    function metodo3() {
        echo "Funcionando....!";

    }

}

$exemplo = new Classe('...');
$exemplo->metodo3();
