<?php

/**
 * @package simatefPAY - pagamento de cartões via URL.
 * @version <v22.10/>
 * @see https://pay.simatef.com.br
 * @author Ricardo Ferreira <rnhc1000@gmail.com>
 * @author Luan Santana <lsantana@gmail.com>
 * @copyright 2018-2022 Ricardo Ferreira
 * @copyright 2018-2018 Luan Santana
 * @license Direitos Reservados a Sotech Pagamentos Eletronicos
 */

ini_set('session.gc_maxlifetime', (60));
ini_set('session.use_strict_mode', true);
ini_set('session.use_cookies', true);
ini_set('session.use_only_cookies', true);
ini_set('session.cookie_httponly', true);
ini_set('session.cookie_secure', true);
ini_set('session.hash_function', 'sha512');
ini_set('session.use_trans_sid', false);
ini_set('session.referer_check', 'https://pag.simatef.com.br');
ini_set('session.cache_limiter', 'nocache');

if (!isset($_SESSION)) {
    session_start();
}
$urlPagamento = $_SESSION['linkSimatefPAY'];

?>
<!DOCTYPE html>
<html lang="en">

    <head>
        <link rel="icon" href="img/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css">
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet">
        <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="css/mdb.min.css">
        <link rel="stylesheet" href="css/style.css">
        <link href="css/login.css" rel="stylesheet" type="text/css" />
        <link href="css/zoom.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/popper.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/mdb.min.js"></script>
        <script src="js/popper.min.js" type="text/javascript"></script>
        <script type="text/javascript"></script>
        <style type="text/css"> </style>
        <link rel="shortcut icon" href="img/favicon.ico">
        <title>Link simatefPAY©</title>
        <style>
        .modal-header,
        h4,
        .close {
            background-color: #6495ED;
            color: white !important;
            text-align: center;
            font-size: 30px;
        }

        .modal-footer {
            background-color: #f9f9f9;
        }

        h55 {
            text-align: center;
            color: blue;
            font-weight: 300;
            font-size: 1.0em;

        }
        </style>
    </head>

    <body>
        <main class="">
            <div class="modal fade" data-backdrop="static" id="payModal" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered modal-success">
                    <div class="modal-content text-center">
                        <div class="modal-header modal-header-centered modal-success">
                            <h5><svg xmlns="http://www.w3.org/2000/svg" width="2.0em" height="2.0em" fill="yellow"
                                    class="bi bi-cone-striped" viewBox="0 0 16 16">
                                    <path
                                        d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z" />
                                </svg>*** Atenção *** Sistema Indisponível!!!</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                    aria-hidden="true"></span></button>
                        </div>
                        <div class="modal-body">
                            <h5>Estamos com Dificuldades Técnicas para Processar o Pagamento!!!</h5>
                            <h5>Aguarde Alguns Instantes e Tente Novamente</h5>
                            <h5>Caso esta Mensagem se Repita, Entre em Contato com
                            o
                            Estabelecimento onde a Compra Foi Efetuada e Solicite um Novo
                            Link de Pagamentos!</h5>
                            <h5>
                            </h5>
                            <h5>Para Sair, Pressione OK!</h5>
                        </div>
                        <div class="modal-footer modal-footer-centered text-center">
                            <h5></h5>
                            <input type="button" class="btn btn-outline-primary btn-rounded btn-md ml-4"
                                data-dismiss="modal" value="OK" onclick="relocate_home();">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>

    </hmtl>




    <script>
    function relocate_home() {
        location.href = "../../public/index.php";
    }
    </script>