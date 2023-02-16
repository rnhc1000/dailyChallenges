/** O conceito chave:valor é o que define um objeto */

const saudacao = 'ola'; // contexto légico onde p par chave:valor foi definido

function exec() {
    const saudacao = 'Fala!!!';
    return saudacao;
    /**
     * este contexto n gera conflito pois está 
     * definido dentro do bloco e o escopo é o do globo
     */
}

// Objetos são grupos aninhadois de pares chave/valor;

const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}
console.log(saudacao);
console.log(exec() );
console.log(client);
