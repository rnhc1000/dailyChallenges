<?php namespace App; ?>
<div class="titulo">Sub-Namespace</div>
<?php

echo (__NAMESPACE__ . '<br>');
const CONSTANTE = 123;
echo CONSTANTE;

echo '<hr>';
namespace App\Principal;
echo (__NAMESPACE__ . '<br>');
const CONSTANTE = 234;
echo CONSTANTE;

echo '<hr>';
namespace App\Principal\Especifico;
echo (__NAMESPACE__ . '<br>');
const CONSTANTE = 345;
echo CONSTANTE;
echo '<hr>';

echo CONSTANTE . " ->App\Principal\Especifico<br>";

echo \App\Principal\CONSTANTE . " ->App\Principal<br>";

echo \App\CONSTANTE . " ->App<br>";

echo constant('\\' .  __NAMESPACE__ . '\CONSTANTE') . '<br>';

