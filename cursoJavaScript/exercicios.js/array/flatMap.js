
const escola = [{ 
    turma: 'turma M1',  
        alunos: 
            [{ nome: 'Gustavo', notas: 8.1 },
             { nome: 'Ana',     notas: 9.2 }]
},{
    turma: 'turma M2',
        alunos: 
            [{ nome: 'Paulo',   notas: 7.2 },
            {  nome: 'Alice',   notas: 7.4 }]
}]


const getNotaDoAluno = alunos => alunos.notas;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
// R: [ [ 8.1, 9.2 ], [ 7.2, 7.4 ] ]

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
// R: [ 8.1, 9.2, 7.2, 7.4 ]
