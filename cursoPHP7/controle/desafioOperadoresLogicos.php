<div class="titulo">Desafio Operadores Lógicos</div>

<!---
    Dois trabalhos -> terça e quinta!
    - Se os dois forem executados - Tv 50' e Sorvete
    - Se apenas um for executado  - Tv 32' e Sorvete
    - Se nenhum for executado     - Fica em casa!
-->

<form action="#" method="post">
    <div>
        <label for="t1">Trabalho 1 (Terça):</label>
        <select name="t1" id="t1">
            <option value="1">Executado</option>
            <option value="0">Não Executado</option>
        </select>
    </div>
    <div>
       <label for="t2">Trabalho 2 (Quinta):</label>
        <select name="t2" id="t2">
            <option value="1">Executado</option>
            <option value="0">Não Executado</option>
        </select>
    </div>
    <button>
        Executar
    </button>
</form>

<style>
    button, select {
        font-size: 1.8rem;
    }
</style>


<?php
if (isset($_POST['t1']) && isset($_POST['t2'])) {
    var_dump(!!$_POST['t1']);
    var_dump(!!$_POST['t2']);
    echo '<br>';
    $t1 = $_POST['t1'] === '1';
    $t2 = !!$_POST['t2'];
    var_dump($t1);
    var_dump($t2);
    echo '<br>';
    $tv = '';
    $sorvete = false;
    var_dump(!!$tv);
    var_dump($sorvete);

    if($t1 && $t2) {
        $tv = '50';
    } elseif($t1 xor $t2) {
        $tv = '32';
    }
    if($t1 or $t2) {
        $sorvete = true;
    }

    if($tv) {
        $resultado = "Vamos comprar uma TV de $tv'";
    } else {
        $resultado = "Sem TV desta vez! :(";
    }

    $saudavel = !$sorvete;

    if($saudavel) {
        $resultado .= '<br>Sem sorvete :(...Estamos mais saudáveis :)!';
    } else {
        $resultado .= '<br>Sorvete liberado \o/!';
    }

    echo "<p>$resultado</p>";
}

?>