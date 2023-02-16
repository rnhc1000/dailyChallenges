const alunos = [
    { 
        nome: 'Joao', nota: 7.5, bolsista: false,
        nome: 'Maria', nota: 8.5, bolsista: false,
        nome: 'Pedro', nota: 6.5, bolsista: false,
        nome: 'Ana', nota: 9.8, bolsista: false
    }
]

// Desafio 1: Todos os alunos sao bolsistas?
// todosBolsistas recebe uma função que tem um acumulador e um atributo
// onde o acumulador representa o resultado anterior
const todosBolsistas = (resultado,bolsista) => bolsista && resultado
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));


// Desafio 2: Algum aluno é bolsista?

const algumBolsista = (resultado,bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))