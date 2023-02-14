const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g))

// no conjunto os metacaracteres se comortam como literais

// [ '.$', '+*', '?-' ] atenção no ponto fora do conjunto


console.log