<div class="titulo">Polimorfismo</div>
<?php
/**
 * Recurso delinguagens fortemente tipadas, 
 * faremos uso de parâmetros tipados em funções
 */


 abstract class Comida { 
     public $peso;
 }

 class Arroz extends Comida {

 }

 class ArrozAGrega extends Arroz {

 }

 class Feijao extends Comida {

 }

 class Sorvete extends Comida {

 }

 class Pessoas {
     public $peso;

     function __construct($peso) {
         $this->peso = $peso;
     }
     // A assinatura da função determina q pessoa coma apenas arroz
     public function comer(Comida $comida) {
         $this->peso += $comida->peso;
         //recebe o peso da pessoa e soma com o peso da comida
     }
 }

 $c1 = new Arroz();
 $c1->peso = 0.45;
 $p = new Pessoas(83.45);
 $p->comer($c1);
 echo $p->peso;
