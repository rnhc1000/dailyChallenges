<div class="titulo">Desafio For</div>

<!---
#
##
###
####
#####
1. Usar incremento
2. N pode usar incremento
--->

<?php
ini_set('display_errors', 1);
$c = '';

for ($i=1; $i <= 5; $i++) {
    $c .= '#';
    echo "$c <br>";
}
echo '<hr>';

for (
    $d = '#';
    $d != '#######';
    $d .= '#'
) {
    echo "$d <br>";
}
echo '<hr>';

$d = '';

while ($d !== '########') {
    $d .= '#';
    echo $d . '<br>';
};
echo '<hr>';

$d = '';
do {
    $d .= '#';
    echo $d . '<br>';
} while ($d !== '#########');

echo '<hr>';





