<div class="titulo">Traits #2</div>

<?php

trait validacao {
    public function validarString($str) {
        return isset($str) && $str !== '';
    }
}

trait validacaoMelhor {
    public function validarString($str) {
        return isset($str) && trim($str);
    }
}

class User {
        use validacao, validacaoMelhor {
            validacaoMelhor::validarString insteadOf validacao;
            validacao::validarString as validacaoSimples;
        }
}

$user = new User();
//var_dump($user->validarString('Pedro'));
echo '<br>';
var_dump($user->validacaoSimples(' '));

