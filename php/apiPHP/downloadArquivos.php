<div class="titulo">Download de Arquivos</div>
<?php
session_start();
//ini_set('display_errors', 1);
print_r($_POST);
print_r($_FILES);
$arquivos = $_SESSION['arquivos'] ?? [];

$pastaUpload = __DIR__ . '/../files/';
$nomeArquivo = $_FILES['arquivo']['name'];
$arquivo = $pastaUpload . $nomeArquivo;
$tmp = $_FILES['arquivo']['tmp_name'];
if (move_uploaded_file($tmp, $arquivo)) {
    echo "br>Arquivo válido e enviado com sucesso.";
    $arquivos[] = $nomeArquivo;
    $_SESSION['arquivos'] = $arquivos;
} else {
    echo "<br>Erro no download do arquivo!";
}
?>

<form action="#" method="post"
    enctype="multipart/form-data">
    <input name="arquivo" type="file">
    <button>Enviar</button>
</form>

<ul>
    <?php foreach($arquivos as $arquivo): ?> 
        <?php if(stripos($arquivo, '.png') > 0): ?>
            <li>
                <img src="files/<?= $arquivo ?>"
                    height="120" />
                </a>
            </li>
        <?php endif ?>
    <?php endforeach ?>

</ul>

<style>
    input, button {
        font-size: 1.2rem;
    }
</style>
