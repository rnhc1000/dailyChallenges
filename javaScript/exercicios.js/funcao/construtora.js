/**
 * Função construtora é usada como classe em Java ou C#
 */

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado -> apenas no escopo da função
    let velocidadeAtual = 0;
     // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
           velocidadeAtual += delta;
       } else {
          velocidadeAtual = velocidadeMaxima;
       }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}


const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual())
const ferrari = new Carro(350, 20)
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //função construtora
console.log(typeof ferrari) // objeto criado a partir dafunção construtora

