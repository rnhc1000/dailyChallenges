/**
 * mecanismo de tratamento de rros JS
 * 
 */
function tratarErroLancar(erro) {
    //throw new Error('Entre em contato com o suporte');
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

 function imprimirNome(obj) {
     try {
        console.log(obj.name.toUpperCase() + '!!!');
     } catch (e) {
         tratarErroLancar(e);
     } finally {
         console.log('final');
     }
 }
 const obj = { nome: 'Roberto'};
 imprimirNome(obj);