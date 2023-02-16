<div class="titulo">Interface</div>
<?php
/**
 * A anatomia é a mesma de uma classe
 * Ao declarar uma interface e definir 
 * os métodos e comportamentos, necessariamente
 * as classes que fizerem uso da interface
 * terão que implementá-los....
 * Métodos e atrinutos são públicos por
 * definição e não podem ter o modificdor
 * de acesso padrão alçterado para protecd ou private
 */

interface Animal {
    function respirar();
}

interface Mamifero {
    function mamar();
}

interface Felino {
    function correr();
}

interface Canino extends Animal, Mamifero {
    function latir(): string;
    function correr();
}

class Cachorro implements Canino {
    public $pulmaoVazio = 0;
    public $pulmaoCheio = 1;

    function respirar() {
        return "Irei usar oxigênio!!!";
     }

    function latir(): string {
        return "Au Au";
    }

    function mamar() {
        return "Eu sou mamífero";
    }

    function correr() {
        return "Eu corro como cachorro";
    }
}

$animal = new Cachorro();
echo $animal->respirar() . "<br>";
echo $animal->latir() . "<br>";
echo $animal->mamar() . "<br>";
echo $animal->correr() . "<br>";
echo $animal->pulmaoCheio . "<br>";
echo $animal->pulmaoVazio . "<br>";

var_dump($animal instanceof Cachorro); //true
echo "<br>";
var_dump($animal instanceof Canino); //true
echo "<br>";
var_dump($animal instanceof Mamifero); //true
echo "<br>";
var_dump($animal instanceof Felino); //false
echo 'Fim';
