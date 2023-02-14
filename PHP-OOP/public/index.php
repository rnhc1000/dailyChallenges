<?php
//require_once '../app/classes/Services.php';
//$teste = new Services();
//echo $test->testaCurl();


require '../vendor/autoload.php';
use app\classes\User;

$teste = new User;
echo $teste->user('Ricardo');
exit();
$json = array(
    "timestamp" => "1528815122025",
    "status" => 401,
    "error"=> "Unauthorized",
    "message"=> "Full authentication is required to access this resource",
    "path"=> "/oauth/token"
);

echo "<hr>";
echo date('d/m/Y-H:i:s', $json['timestamp']);
echo "<hr>";

 /*   $ch = curl_init(); // create cURL handle (ch)
    if (!$ch) {
        die("Couldn't initialize a cURL handle");
    }
    // set some cURL options
    $ret = curl_setopt($ch, CURLOPT_URL,            "https://rl7-sandbox-api.useredecloud.com.br/partner/v1/organizations/requests/features/merchant-statement");
    $ret = curl_setopt($ch, CURLOPT_HEADER,         0);
    $ret = curl_setopt($ch, CURLOPT_POST,           TRUE);
    $ret = curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $ret = curl_setopt($ch, CURLOPT_TIMEOUT,        30);
    $ret = curl_setopt($ch, CURLOPT_VERBOSE,        TRUE);
    $ret = curl_setopt($ch, CURLINFO_HTTP_CODE,     TRUE);
  
    // execute
    if (empty($ret)) {
        // some kind of an error happened
        die(curl_error($ch));
        curl_close($ch); // close cURL handler
    } else {
        $acao = curl_exec($ch);
        echo "<hr>";
        echo "<hr>";
        var_dump($acao);
        $getHttpCode = curl_getinfo($ch);
        is_null($acaoResposta = json_decode($acao, TRUE)) ? $a = "OK" : $a ="Não Nulo";
        echo "<hr>";
        print_r($acaoResposta);
        echo "<hr>";
        var_dump($a);
        curl_close($ch); // close cURL handler

        if (empty($getHttpCode['http_code'])) {
            die("No HTTP code was returned");
        } else {
            // load the HTTP codes
            echo "<br>";
            var_dump($getHttpCode);
            $http_codes = parse_ini_file("httpCodes.ini");
            echo "<br>";
            echo "Arquivo";
            echo "<br>";


            print_r($http_codes);

            // echo results
            echo "<br >O servidor respondeu <br />";
            echo $getHttpCode['http_code'] . " " . $http_codes[$getHttpCode['http_code']];
            echo "<hr>";

            switch ($getHttpCode['http_code']) {

                case 401:
                    $lenResposta=count($acaoResposta);
                    echo "<br >" . $lenResposta . "<br >";
                    echo "Não Autorizado <br >";
                    is_null($acaoResposta = json_decode($acao, TRUE)) ? $a = "OK" : $a ="Não Nulo";
                    echo "<hr>";
                    print_r($acaoResposta);
                    echo "<hr>";
                    var_dump($a);
                    $acaoResposta = array("httpCode" => $getHttpCode['http_code']) + $acaoResposta;
                    echo "<br >";
                    var_dump ($acaoResposta);
                break;

                case 403:
                    echo "Requisição Inválida <br >";
                    $acaoResposta= json_decode($acao, TRUE);
                    var_dump($acaoResposta);
                break;


                default:
                break;


            }
        }

    }
    echo "<hr>";
    switch ($acaoResposta['httpCode']) {

        case 401:
            echo "<br >" . $acaoResposta['message'];
        break;

        default:

        break;
    }


*/

?>