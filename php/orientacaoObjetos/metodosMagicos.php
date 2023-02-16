<div class="titulo">Métodos Mágicos</div>
<?php
/**
 * O uso fdos métodos mágicos
 * __get() e __set()
 */


 class Pessoa {
     public $nome;
     public $idade;

 function __construct($nome, $idade) {
    echo 'Construtor Invocado!<br>';
    $this->nome = $nome;
    $this->idade = $idade;
 }

 function __destruct() {
     echo 'Fim!';
 }

 public function __toString() {
    return "{$this->nome} tem {$this->idade} anos";
 }

 public function apresentar() {
     echo $this . "<br>";
 }

 public function __get($atrib) {
     echo "Lendo atributo não declarado ${$atrib}<br>"; 
     
 }

 public function __set($atrib, $valor) {
     echo "Alterando atributo não declarado: {$atrib}/{$valor}";
 }
public function __call($metodo, $params) {
    echo "Tentando executar método: '${metodo}'";
    echo ", com os parametros: ";
    print_r($params);
}

 }// Fim da Classe

echo  $pessoa = new Pessoa('Ricardo', 63); //construtor
echo"<br>";
echo $pessoa->apresentar(); //__toString()
$pessoa->nome = 'Rinaldo';
echo $pessoa->apresentar();
echo $pessoa->nome;
echo"<br>";
echo $pessoa->nomeCompleto; // Não existe e o métdo __get() foi chamado
echo"<br>";
$pessoa->nomeCompleto = 'Muito Legal!';
echo"<br>";
echo $pessoa->nome;
echo"<br>";
echo $pessoa->nomeCompleto; //__get()
echo"<br>";
$pessoa->exec(1, 'teste', true, [1, 2, 3]); //__call()

$pessoa = null; //destrutor
