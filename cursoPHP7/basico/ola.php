<div class="titulo">!!! - Olá PHP - !!!</div>

<h3>Exemplo A</h3>
<?php
    echo 'Olá ';
    /**
     * echo "\n"; não é inperpretado pelo php como CR+LF
     */
    echo 'Olá <br>';
    echo 'Mundo';
?>
<h3>Exemplo B</h3>

<?= "Outra forma de se 'expressar'" ?>

<!--- Atenção ao espaço depois de Olá e a
proxima sentença de código '...Mundo'.
Como um código html será gerado a partir
ddas sentenças acima, e HTML é uma linguagem
de marcação e não há marcador algum na sentença anterior.
o HTML não tem porque "pular" uma linha
Pode-seusar as tags PHP da form a seguir:
e não há necessidade de se utilizar echo 
--->