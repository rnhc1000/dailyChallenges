<div class="titulo">Conexao</div>
<?php
function novaConexao($banco = 'cursoPHP') {
    $servidor = '172.17.0.1';
    $usuario = 'root';
    $senha = 'M4n4g3rMySQL';

    $conexao = new mysqli($servidor, $usuario, $senha, $banco);

    if($conexao->connect_error) {
        die('Erro: ' . $conexao->connect_error);
        /**
         * O uso de die n se aplica a ambiente de produção
         */
        //echo 'Erro: ' . $conexao->connect_error;
        //exit();
    }

    return $conexao;
}
?>
<!---
<h4> Conexão -> banco { </h4>
    <p>$servidor = ip:porta $usuario  = usuario $senha    = senha</p>
<h4>}</h4>
    <p>$conexao = new mysqli($servidor, $usuario, $senha, $banco);</p>
--->
