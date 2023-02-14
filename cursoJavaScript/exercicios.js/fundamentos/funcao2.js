// Armazenando uma função em uma variável
// uma constante imprimirSoma recebe o valor de uma função anônima
// armazenar o valor de retonor de uma função em uma variável

const imprimirSoma = function (a, b) {
console.log(a + b)
}

imprimirSoma(2,3)
// Armazenando uma função arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,4))

// retonro implicito, função de 1 linha
const subtracao = (a,b) => a-b
console.log(subtracao(4,2))

const imprimir = a => console.log(a)
imprimir('Legal!!!!')
