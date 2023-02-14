<?php

class Usuario extends Pessoa {
    public $login;
    function __construct($nome, $idade, $login) {
        //$this->nome = $nome;
        //$this->idade = $idade;
        /**
         * desta forma usa-se os atrinutos
         * da classe pai e portanto não há necessidade
         * de se definir aqui os nomes
         */
        parent::__construct($nome, $idade);
        $this->login = $login;
        echo 'Usuario Criado! <br>';
    }

    function __destruct() {
        echo '<br>Usuario diz: Tchau!!! <br>';
        parent::__destruct();
    }
    /**
     * sobrecarga
     * pois o método abaixo foi sobrescrito do método herdado
     */

    public function apresentar() {
        /**
         * uso do método apresentar() da classe pai
         * através do uso da palavra-chave
         * parent::>nome do método herdado
         */
        parent::apresentar();
        //return "{$this->nome}, {$this->idade}, {$this->login}";
        return "{$this->login}";
    }

}
