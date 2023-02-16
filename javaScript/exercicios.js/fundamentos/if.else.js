const imprimirResultado = function(nota) {
    try {
        if (isNumber(nota)) {
            if(nota >= 7) {
                console.log('Aprovado');
            } else {
                console.log('Reprovado');
            }
        }  else {
                if (isString(nota)) {
                    console.log('Números e não Letras');
                }
        }
        
    } catch (e) {
        tratarErroLancar(e);
    }
}

/**
*Como é fracamente tipada o JS aceita a strong como nota
* Pratica: testar se é um número e se sim executar
* a função
*/ 
function isNumber(val){
    if (typeof val === "number")
        return true;
    return false;
  }

function isString(val) {
    if (typeof val === "string")
        return true;
    return false;
}

function tratarErroLancar(erro) {
    //throw new Error('Entre em contato com o suporte');
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

imprimirResultado(4);
imprimirResultado(10);
imprimirResultado('Epa'); 
