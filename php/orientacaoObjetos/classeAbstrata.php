<div class="titulo">Classes Abstratas</div>
<?php

/**
 * 0% de métodos implementados -> Interface
 * 100% de métodos implementados -> Classe Concreta
 * 
 * A interface define a assinatura da classe
 * Entre estes 2 extremos se encontram as Classes Abstratas
 * Os métodos podem ou não estar implementados
 * Uma classe abstrata NÃO pode ser instanciada
 * Apenas classes concretas podem ser instanciadas mas somente
 * se tiver TODOS os métodos implementados
 * 
 * Nas classes abstratas existem métodos abstratos para 
 * os quais também não há corpo
 * Classe A extends Classe B ( apenas uma classe pode ser estendida)
 * 
 * Diferença Importante!
 * Classe A implementa Interface A, Interface B, Interface X
 * 
 * Interface A extends Interface B, Interface C, Interface D, .....
 * Ao definir uma classe como abstrata significa que 
 * não é possível instanciar esta classe, mas sim herdá-la!!!
 */

 abstract class Abstrata {
    abstract public function metodo1();
    abstract protected function metodo2($parametro);
 }

 abstract class FilhaAbstrata extends Abstrata {
    public function metodo1() {
        echo "Executando método 1<br>";
    }
    abstract public function metodo3();
 }
/**
 * Ao estender FilhaAbstrata tem que se implementar todos
 * os métodos definido na Classe Abstrata e FilhaAbstrata
 */
 class Concreta extends FilhaAbstrata {
     public function metodo1() {
         echo "Executando método 1 extendido <br>";
         parent::metodo1();
     }

     protected function metodo2($parametro) {
         echo "Executando método 2, com parâmetro $parametro>br>";
     }

     public function metodo3() {
         echo "Executando método 3";
         $this->metodo2('interno');
     }
}

$a = new Concreta();
echo $a->metodo1();
echo $a->metodo3();
// echo $a->metodo2('interno');

echo "<br>";
var_dump($a instanceof Concreta);

var_dump($a instanceof FilhaAbstrata);

var_dump($a instanceof Abstrata);



