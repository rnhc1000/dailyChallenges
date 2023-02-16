/**
 * 
 * comparação entre o uso de uma função contrutora
 * e como o prototype é gerado e através de uma
 * simulação
 *  
 */

function Aula(nome,videoID) {
    this.nome = nome;
    this.videoID = videoID;
}


const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até breve', 456);

console.log(aula1,aula2);
// Aula { nome: 'BemVindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }

    //simulando o new
    function novo (f, ...params) {
        const obj = {};
        obj.__proto__ = f.prototype;
        f.apply(obj,params) // params é um array
        return obj;
    }

    const aula3 = novo(Aula, 'BemVindo', 123);
    const aula4 = novo(Aula, 'Até Breve', 456);
    console.log(aula3, aula4)
//Aula { nome: 'BemVindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
