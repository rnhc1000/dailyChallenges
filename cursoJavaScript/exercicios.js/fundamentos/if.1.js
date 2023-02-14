function tratarErroLancar(erro) {
    //throw new Error('Entre em contato com o suporte');
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function soBoa(nota) {
    try {
        if  (nota >= 7) {
            console.log('Aprovado!!!');
        } else {
            console.log('Reprovado');
        }
    } catch(e) {
        tratarErroLancar(e);
    }
}

soBoa(x);