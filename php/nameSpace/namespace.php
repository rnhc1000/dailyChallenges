<?php namespace contexto; ?>

<div class="titulo">Namespace</div>

<?php
echo __NAMESPACE__. '<br>';
const CONSTANTE1 = 123; // constantes não recebem o $ na declaração e maiusculas.

/**
 * A CONSTANTE1 está definida no namespace contexto automaticamente
 * Para se usar o define() para definir uma constante 
 * deveremos observar o mostrado abaixo, definno o caminho
 */

define('CONSTANTE2', 234); // escopo global
define('contexto\CONSTANTE2', 2344); //escopo contexto

define('contexto\CONSTANTE3' , 345);

echo CONSTANTE1 . '<br>';
echo CONSTANTE2 . '<br>'; //global
echo \CONSTANTE2 . '<br>'; //contexto
//echo contexto\CONSTANTE3 . '<br>';

/**
* /Undefined constant 'contexto\contexto\CONSTANTE3' relativo
* echo \contexto\CONSTANTE3 . '<br>'; //OK (caminho absoluto)
*/
echo \contexto\CONSTANTE3 . '<br>'; //OK (caminho absoluto)
/**
* echo constant(__NAMESPACE__ . '\CONSTANTE3') . '<br>';
*
* Prestar atenção entre as diferenças 
* enttre o caminho relativo e o 
* caminho absoluto
*/


//echo CONSTANTE3 . '<br';

define('outro_namespace' . 'CONSTANTE4', 456);

/* <?php namespace contexto\a\sub\name; ?> */

function soma($a, $b) {
    return $a * $b;
}
/**
 * A função soma está definida no namespace CONTEXTO.
 * Poranto o acesso pode ser absoluto -> \contexto\soma
 * ou relativo -> soma
 */

echo \contexto\soma(1, 2) . '<br>';
echo soma(1, 2) . '<br>'; 

function strPOS($str, $text) {
    echo "Buscando o texto '{$text}' em '{$str}'<br>";
    return 1;
}

/**
 * caso queira ter acesso às funções  definidas
 * no namespace global faz-se o uso da barra antes da 
 * função... 
 * A função strPOS denifida neste contexto retorna o valor 1
 * e a função strpos no namespace global
 * retorna a posição do início do texto busca
 * na string
 */

echo strPOS('Texto genérico para busca','busca') . '<br>';
echo \strpos('Texto genérico para busca','busca') . '<br>';