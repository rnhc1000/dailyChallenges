<div class="titulo">Try & Catch</div>
<?php

/**
 * echo 7 / 0; Infinito! 
 * echo intdiv(7, 0); Erro!
 * Anatomia do Try
 * Try {
 *  <código>
 * } catch(Error $e)
 *  mensagem de erro/tratamento
 * } catch (Exception $e) {
 *  Houve um outro erro/tratamento
 * }
 */ 


try {
    echo intdiv(7, 0);
} catch(Error $e) {
    echo "Operação Ilegal!<br>";
}

try {
    throw new Exception('Ocorreu um Erro!!!');
    echo intdiv(7, 0);
} catch(DivisionByZeroError $e) {
    echo 'Divisão por Zero<br>';
} catch(Throwable $e) {
    echo 'Erro encontrado: ' . $e->getMessage() . '<br>';
} finally {
    echo 'Sempre executado!<br>';
}

echo 'Execução continua...<br>';