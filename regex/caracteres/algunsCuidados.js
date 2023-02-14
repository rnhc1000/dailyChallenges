const textoUmaLinha =  '...' // aspas simples ou duplas

const textoMultiplasLinhas = `
linha 1
linha 2
....
`  // crase

//cuidado com tab

console.log('   '.match(/\s/g))
//[ ' ', ' ', ' ' ] 3 espaços em vex de tab

console.log('	'.match(/\s/g))
//[ '\t' ]
//Rodapé do VSCode e configura se identação por espaço ou tab