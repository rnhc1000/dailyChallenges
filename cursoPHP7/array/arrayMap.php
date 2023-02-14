<div class="titulo">Mapa</div>

<?php
/**
 * Conceito CHAVE:VALOR
 */


 $dados = array(
     "idade" => 25,
     "cor" => "verde",
     "peso" => 49.9
 );

 print_r($dados);//  Array ( [idade] => 25 [cor] => verde [peso] => 49.9 )


 /**
  * Não é possível o acesso via índice neste caso
  * e sim via chave.
  */

  echo '<br>' . $dados["idade"];
  echo '<br>' . $dados["cor"];
  echo '<br>' . $dados["peso"];
  echo '<br>';

  /**
   * Atenção ao misturar arrays indexados com mapa
   */

   $lista = array(
       "a",
       "cinco" => "b",
       "c",
       8 => "6",
       "e",
       8 => "9"
   );

   print_r($lista);

   $lista[] = 'i';
   echo '<br>';
   print_r($lista);

   $lista[false] = 'tentei indexar com false';
   echo '<br>';
   print_r($lista);

