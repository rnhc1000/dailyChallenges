<div class="titulo">Membros Estáticos</div>
<?php
class A {
    public $naoStatic = 'Variável de Instância';
    public static $static = 'Variável de Classe ( estática )';

    public function mostrarA() {
        echo "Não estática = {$this->naoStatic}<br>";
        /**
         * Para permitir o acesso a uma variável de classe
         * Utiliza-se a palvra reservada self
         */

        //Tentativa #1
        //echo "Estático = {$this->static}<br>";
        //Tentativa #2
        //echo "Estático = {self::$static}<br>";
        //Tentativa #3
        echo "Estática = " . self::$static . "<br>";
    }

    public static function mostrarStaticA() {
        //echo "Não estática = {$this->naoStatic}<br>";
        /**
         * $this não está disponível em uma função de classe
         * Dentro de uma função estática somente se
         * tem acesso a membros estáticos
         */

        echo "Estática = " . self::$static . "<br>";

    }
        
}

/**
 * Ao instanciar a classe A todos os atributos 
 * e métodos da classe são levadas a esta instância, 
 * caracterizando assim oconfinamento dele na instância.
 * Ao usar o uso da palavra static, a variável pertence agora
 * à classe, fazendo com que o valor também seja relativo à classe
 * Uso: constantes
 * class Math { 
 * public static pi = 3.14;
 * }
 * $a = new Math()
 * $a->pi + 3.14;
 * $b->pi + 3.14;
 */

 class primeiroNivel extends A {
     
    public static $pi = 3.141516;
 }

 class segundoNivel extends primeiroNivel {

    public static $nivel2 = 'Segundo Nivel';

     public function mostraPi() {
        echo "O valor de pi é: " . self::$pi . "<br>";
     }  
}


 $objetoA = new segundoNivel();
 $objetoA->mostrarA();
 //$objetoA->mostrarStaticA(); Não é a forma ideal
 A::mostrarStaticA(); // acessar diretamente a classe

 $objetoA->mostraPI();

 echo segundoNivel::$pi . "<br>";
 echo segundoNivel::$nivel2 . "<br>";
 segundoNivel::$nivel2 = "Nivel 2";
 echo segundoNivel::$nivel2 . "<br>";



