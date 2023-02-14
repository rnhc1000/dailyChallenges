/**
 * Transfomar a classe abaixo em 
 * função construtora
 */
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}

/**
 * 
 * na factory n precisa do this ao se referenciar a variável
 */

function Pessoax(nome) {
    this.nome = nome;
    this.falar = function() {
        console.log(`Meu nome é: ${nome}`)
    }
}

const p1 = new Pessoax('Joao')
p1.falar()