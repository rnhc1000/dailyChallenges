const alunos = [
    { nome: 'Joao',  nota: 7.2 },
    { nome: 'Maria', nota: 7.9 },
    { nome: 'Paulo', nota: 9.5 }
]


// Imperativo
/**
 * Neste tipo de abordagem preocupa-se com TODOS os detalhes 
 * da iompelentação, através da declaração de variáveis, laços,
 * controles ,etc.... 
 */
let total1 = 0;
for (let i=0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log((total1 / alunos.length).toFixed(2))

// Declarativo
/**
 * 
 * explora os recursos da linguagem e faz do reuso
 * de código uma constante, não se imprtando comk detalhes de como
 * alguns processos internos são executados
 */
const getNota = alunos => alunos.nota;
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log((total2 / alunos.length).toFixed(2))