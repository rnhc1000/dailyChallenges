<div class="titulo">Require & Return</div>

<?php
ini_set('display_errors', 1);
$valorRetorno = require('returnUsado.php');
echo "${valorRetorno}<br>";
echo "${variavelRetornada}<br>";

/** 
 * tanto a variavel declara no arquivo tem-seo acesso
 * como o valor de retorno da instrução return no final
 * do arquivo!!!
 */

 echo __DIR__ .'<br>';

 $valorRetorno2 = require(__DIR__ . '/returnNaoUsado.php');
 /**
  * caso o arquivo exista o valor 1 é retornado.
  */
 echo "$valorRetorno2<br>";
 /**
  * variável declarar no arquivo acessado via require
  * atenção à construção da sentença de código onde a variável
  * global __DIR fornece o aminho absoluto e a concatenação 
  * com o nome doarqivo desejado entre aspas simples e iniciando 
  * com uma / pois oque retorna é o caminho.
  */
 echo "$variavelDeclarada<br>";