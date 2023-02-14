<div class="titulo">Desafio Sorteio</div>

<?php
ini_set('display_errors' , 1);
Class Sorteio {

    public $nomes = array();
    public function sorte($nomes) {
        
        if(is_array($nomes)) {
            return $escolha = array_rand($nomes);
        }
        return "Preciso de um array de nomes";
    } 
}

$nomes = [
    "Elza",
    "Papunzel",
    "Branca de Neve",
    "Cinderela"
];

$escolhe = new Sorteio();
$indice=$escolhe->sorte(array ($nomes));
//echo $nomes[$indice];
//echo "$escolha->$sorteio(array $nomes))";

$a = [
    "Elza",
    "Papunzel",
    "Branca de Neve",
    "Cinderela"
];

$index = array_rand($a);
//echo '<br>' .$a[$index];
echo "<div center><h1>$a[$index]</h1></div>"

?>

<style>
    [center] {
        display: flex;
        justify-content: center;
    }
</style>


