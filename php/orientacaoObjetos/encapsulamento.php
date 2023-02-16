<div class="titulo">Visibilidade</div>
<h3>Modificadores de Acesso</h3>
<h4>Public</h4>
<h4>Protected</h4>
<h4>Privado</h4>

<?php
class A {
    public    $publico =   'Publico';
    protected $protegido = 'Protegido';
    private   $privado =   'Privado';

    public function mostrarA() {
        /**
         * esta função pertence à própria
         * classe A portanto ela terá acesso 
         * aos atributos privado, público
         * e protegido, usando o método $this.. 
         */
        echo "<br>Métodos e Atributos da classe A<br>";
        $this->naoMostrar();
        echo "Classe A) Publico = {$this->publico}<br>";
        echo "Classe A) Protegido = {$this->protegido}<br>";
        echo "Classe A) Privado = {$this->privado}<br>";
    }

    private function naoMostrar() {
        /**
         * Visível apenas na Classe A
         */

         echo 'Não vou imprimir!<br>';
    }

    protected function vaiPorHeranca() {
        echo 'Serei transmitido por Herança!!!<br>';
    }

} // fim da classe

$a = new A();
$a->mostrarA();
//$a->naoMostrar();
class B extends A {
    public function mostrarB() {
        /**
         * Mostrar os atrinutos herdados da classe A
         */
        echo "<br>Classe B herdando Métodos e Atributos da classe A<br>";
        echo "Class B) Publico = {$this->publico}<br>";
        echo "Class B) Protegido = {$this->protegido}<br>";
        echo "Class C) Privado = {$this->privado}<br>";
        parent::vaiPorHeranca();
    }
}


$b = new B();
$b->mostrarA();
$b->mostrarB();
$b->mostrarA();
/**
 * $b->vaiPorHeranca(); Esta função só pode ser acessada dentro da classe
 * a qual recebeu esta função por herança, no caso apenas a classe B
 * não podendo serinstanciada fora dela. É acessível apenas dentro da classe
 */