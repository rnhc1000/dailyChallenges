<div class="titulo">Desafio Classe Data</div>
<?php

class DesafioData {
    public $dia = 1;
    public $mes = 'Janeiro';
    public $ano = 1970;

    public function mostrarData() {
        return "{$this->dia}/{$this->mes}/{$this->ano}";
    }
}
$aniversario = new DesafioData();

echo $aniversario -> dia = 10;
echo $aniversario -> mes = 'Outubro';
echo $aniversario -> ano = 2020;

$casamento = new DesafioData();
echo $casamento -> dia = 18 . '<br>';
echo $casamento -> mes = 'Outubro';
echo $casamento -> ano = 2020;


/**
 * 
 */
