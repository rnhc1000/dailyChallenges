<div class="titulo">Switch</div>
<?php
$categoria = '';
$preco = 0.0;
$carro = '';

if($categoria === 'luxo') {
    $carro = 'Mercedes';
    $preco = 200000;
} elseif ($categoria === 'SUV') {
    $carro = 'Renegade';
    $preco = 80000;
} elseif ($categoria === 'Sedan') {
    $carro = 'Etios';
    $preco = 55000;
} else {
    $carro = 'Mobi';
    $preco = 33000;
}

$precoFormatado = number_format($preco, 2, ',', '.');
echo "<p>Carro: $carro<br>Preco: R$ $precoFormatado</p>";

$categoria = ' ';
switch (strtolower($categoria)) {
    case 'luxo':
        $carro = 'Mercedes';
        $preco = 200000;
    break;
    
    case 'suv':
    case 'suv Básico':
        $carro = 'Renegade';
        $preco = 80000;
    break;

    case 'sedan':
        $carro = 'Etios';
        $preco = 55000;
    break;

    default:
        $carro = 'Mobi';
        $preco = 30000;
    break;
}

$precoFormatado = number_format($preco, 2, ',', '.');
echo "<p>Carro: $carro<br>Preco: R$ $precoFormatado</p>";


