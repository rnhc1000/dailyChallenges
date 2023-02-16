<div class="titulo">Traits #1</div>
<?php
/**
 * permite o reuso de código por composição
 * e não por herança
 */
trait validacao {
    public $a = 'Valor A';

    public function validarString($str) {
        return isset($str) && $str !== '';
    }
}

trait validacaoMelhor { 
    public $b = 'Valor B';
    private $c = 'Valor C (privado)';

    public function validarStringMelhor($str) {
        return isset($str) && trim($str);
    }
}

/**
 * O trati pode ser usado através da palavra
 * reservada use....
 */

 class susuarioValido {
     use validacao, validacaoMelhor;
    // acesso a variavel c apenas dentro daclasse (privada)
     public function imprimirValorC() {
         echo '<br>',$this->c;
     }
 }
 
 $valido = new susuarioValido();

 echo $valido->validarString('padrão');
 echo $valido->a . "<br>";
 echo $valido->b . "<br>";
 //echo $valido->c . "<br>"; //não imprime pois o atributo é privado

 echo $valido->imprimirValorC();
