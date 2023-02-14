<div class="titulo">Strings</div>
<?php

echo 'Eu sou uma string';
echo '<br>';

var_dump("Eu também");
echo '<br>';

echo "Nós também" . 'somos';
echo '<br>';
echo "Nós também" . ' somos';
echo '<br>', "Também aceito", " virgulas";
echo '<br>';
echo "'teste'";
echo '<br>';
echo '"Testes"';
echo '<br>';
echo "'Teste' " . '"Teste" ' . '\'Teste\' ' . "\"Teste\"" . "";
echo '<br>';


print("<br>Também existe a função print");
print "<br>Também existe a função print";

// Alguma funções

echo '<br>' . strtoupper('maximixado');
echo '<br>' . strtolower('MINIMIZADO');
echo '<br>' . ucfirst('só a primeira letra');
echo '<br>' . ucwords('todas as palavras');
echo '<br>' . strlen('Quantas letras');
echo '<br>' . strlen("Eu também");
echo '<br>' . mb_strlen("Eu também", "utf-8");
echo '<br>' . str_replace('isso', 'aquilo', 'Trocar isso isso');
echo '<br>' . substr('Só uma parte mesmo', 7, 6);
