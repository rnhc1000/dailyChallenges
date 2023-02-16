<div class="titulo">Herança</div>
<?php
class Pessoa {
    /**
     * O uso do modificador de acesso public
     * torna o acesso aso membros da classe definidos
     * como public acessíveis a todo o código
     */
    public $nome;
    public $idade;

    /**
     * Criando um construtor, passando 2 argumentos
     */
    function __construct($nome, $idade) {
        $this->nome = $nome;
        $this->idade = $idade;
        echo 'Pessoa Criada! <br>';
    }

    function __destruct() {
        echo 'Pessoa diz:Tchau!!! <br>';
    }

    public function apresentar() {
        return "{$this->nome}, {$this->idade} anos";
    }
}

/**
 * Vamos usar o recurso de herança onde a classe herdada
 * recebe os atrinutos e métodos da classe mãe
 */

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


$usuario = new Usuario('Gustavo Mendonça', 21, 'gust_mend');
echo "$usuario->nome, $usuario->idade, $usuario->login";
/**
 * Usando o destrutor!!!
 */
unset($usuario);