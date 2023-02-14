const valor = 'Global';
function minhaFuncao () {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec() 
/**
 * vai imprimir GLOBAL pois a função carrega consigo o 
 * escopo de onde a variável foi definida
 */