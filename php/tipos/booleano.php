<div class="titulo">Tipo Booleano</div>

<?php
echo '<p>Ecoando TRUE e FALSE</p>';
echo TRUE;
echo '<br>';
echo FALSE; // não retorna na tela
echo '<br>';

var_dump(true);
echo '<br>';
var_dump(false);
echo '<p>Testa se o parametro é booleano</p>';
echo '<br>' . is_bool(false);
echo '<br>' . is_bool('true'); // n retorna na tela

echo '<p>Regras:</p>';
echo '<br>' . var_dump((bool) 0); //apenas 0 é false
echo '<br>' . var_dump((bool) 120);
echo '<br>' . var_dump((bool) ""); //false
echo '<br>' . var_dump((bool) "0");// false
echo '<br>' . var_dump((bool) " "); // true
echo '<br>' . var_dump((bool) "00"); // true
echo '<br>' . var_dump((bool) "false");// true