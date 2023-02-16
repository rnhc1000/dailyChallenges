<div class="titulo">Construtor e Destrutor</div>
<?php
class Pessoa {
    public $nome;
    public $idade;

    function __construct($novoNome, $idade = 18)  {
        echo 'Construtor Invocado! <br>';
        $this->nome = $novoNome;
        $this->idade = $idade;
        /**
         * $this -> atributo do objeto sendo criado
         * No momento em que este objeto for instanciado
         * os 2 valores $novoNome e $idade serão passados
         * para o obejto nas linhas inciadas pr $this
         */
    }


    function __destruct() {
        echo "Mata o objeto.... . <br>";
    }

    public function apresentar() {
        return "{$this->nome}, {$this->idade} anos <br>";
    }
}

$pessoa = new Pessoa('Ana Lucia', 40);
echo $pessoa -> apresentar();
echo $pessoa -> nome = 'Ana Maria, ' . $pessoa-> idade = 45 . ' anos' . '<br>';
echo "Fim! <br>";

echo "Novo objeto invocado!<br>";
$pessoa = new Pessoa('Ivone');

echo $pessoa -> apresentar();
echo $pessoa -> nome = 'Santamaria, ' . $pessoa-> idade = 45 . ' anos';
/**
 * $pessoa = new Pessoa();  problema pois o construtor exige com 
 * que sejam pasados ao menos um parãmetro
 * 
 */
echo '<br>';
/**
 * Mata o objeto
 */
 unset($pessoa);



