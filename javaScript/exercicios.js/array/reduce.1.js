const alunos = [
    { 
        nome: 'Joao', nota: 7.5, bolsista: true,
        nome: 'Maria', nota: 8.5, bolsista: true,
        nome: 'Pedro', nota: 6.5, bolsista: false,
        nome: 'Ana', nota: 9.8, bolsista: true
    }
]
console.log(alunos.map(a => a.nota))
//const resultados = alunos.map(a => a.nota) // n esquecer que função arroe tem return implicito
const resultados = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual

})
console.log(resultados)
