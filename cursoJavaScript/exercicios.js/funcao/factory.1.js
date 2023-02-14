const prod1 = {
    nome: '....',
    preco: 45
}

const prod2 = {
    nome: '....',
    preco: 135
}

/**
 * função factory retorna um Object
 */
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())