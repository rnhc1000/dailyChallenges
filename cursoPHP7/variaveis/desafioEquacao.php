<div class="titulo">Desafio Equacao</div>
<?php

/**
 * resolver o primeiro menbro da equacao
 * resolver o segundo mrmbro da equacao
 */

 $numeradorA = (6 * (3 + 2)) ** 2 ;
 $denominadorA = 3 * 2;
 $numeradorB = ((1 - 5) * (2 - 7)/2) ** 2;
 $denominadorB = 2;

 $superiorA = $numeradorA / $denominadorA;
 $superiorB = ($numeradorB) / $denominadorB;

 $superior =($superiorA - $superiorB) ** 3;
 $inferior = 10 ** 3;

 $final = $superior / $inferior;
 echo "O resultado final é " . $final . ".";

