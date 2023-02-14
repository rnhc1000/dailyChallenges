<div class="titulo">Modificador Final</div>
<?php
/**
 * marcando uma classe como FINAL e
 * marcando um métodocomo FINAL;
 */


 abstract class Abstrataa {
     abstract public function metodo1();
     public final function metodo2() {
         echo 'Não vou mudar<br>';
     }
 }


 class Classee extends Abstrataa{
     public function metodo1() {
         echo "Executando método 1<br>";
     }

     //public function metodo2() {
         //echo 'Extendendo método 2<br>'
        /**
         * Method 'Classee::metodo2()' cannot override final method 
         * 'Abstrataa::metodo2()'.intelephense(1039)
         */

     //}

}

final class Unica {
    public $att = 'Valor Único';
}

 $classe = new Classee();
 $classe->metodo1();
 $classe->metodo2();


$unica = new Unica();
echo $unica->att;

//class duplicata extends Unica {
    //public $att = 'Valor Alterado';
    // public $att1 = 'Valor Alterado';
//} //Class duplicata may not inherit from final class (Unica


//$unica = new duplicata();
//echo $duplicata->attr;