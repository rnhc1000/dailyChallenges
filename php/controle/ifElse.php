<div class="titulo">if(){...}else{...}</div>
<?php
if(true) {
    echo "if#1<br>";
    echo "Serei impresso...<br>";
    echo "Serei impresso novamente...<br>";
}
/**
 * ao colocar o ponto e virgula após 
 * o if, é uma sentença de códigoe portanto tanto faz
 * se é falso ou verdadeiro, o bloco sá sempre executado
 */

if(false); {
    echo "if#2...; após o if<br>";
    echo "Serei impresso...<br>";
    echo "Serei impresso novamente...<br>";
}

if(true); {
    echo "if#3...; após o if<br>";
    echo "Serei impresso...<br>";
    echo "Serei impresso novamente...<br>";
}

/**
 * String null "" resolve para falso
 */

if("") {
    echo "if#4...null após o if<br>";
    echo "Serei impresso...<br>";
    echo "Serei impresso novamente...<br>";

}
/**
 * String vazia resolve paratrue
 */

if(" ") {
    echo "if#5...vazia após o if<br>";
    echo "Serei impresso...<br>";
    echo "Serei impresso novamente...<br>";

}
echo '<hr>';
if(false) {
    echo "Verdadeiro - Parte A<br>";
    echo "Verdadeiro - Parte B<br>";
} else {
    echo "Falso - Parte A<br>";
    echo "Falso - Parte A<br>";
}

if(false) {
    echo "Passo A<br";
} else if(false) {
    echo "Passo B<br>";
} else if(false) {
    echo "Passo C<br>";
} else if(true) {
    echo "Passo D<br>";
} else {
    echo "Ultimo Passo<br>";
}

echo "!!! Fim !!!";
