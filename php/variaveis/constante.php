<div class="titulo">Constantes</div>

<?php
define('TAXA_DE_JUROS', 5.9);

echo TAXA_DE_JUROS;

/**
 * Constantes não usam $ na frenete
 * echo '<br>' . $TAXA_DE_JUROS
 * erro!!! e sempre em maiúsculas
 */

 const NOVA_TAXA = 2.5;
 echo '<br>' . NOVA_TAXA;

 $valorVariavel = 2.8;
 // const NOVISSIMA_TAXA = $valorVAriavel // erro
 //define('NOVISSIMA_TAXA', $valorVariavel);
 const NOVISSIMA_TAXA = 2.8 + 1.2;
 echo '<br>' . NOVISSIMA_TAXA;
 
 echo '<br>' . PHP_VERSION;
 echo '<br>' . PHP_INT_MAX;
// duplo underline: mkostraa linha q se ecnontra a sentença do código
 echo '<br>' . __LINE__;

 echo '<br>' . __FILE__;
 echo '<br>' . __DIR__;

