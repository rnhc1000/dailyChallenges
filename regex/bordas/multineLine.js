const texto = `
Leo e muito legal
Emanuel foi jogar em Sergipe
Bianca é casa com Habib
`

// texto com letra inicial igual a letra final da frase.


console.log(texto.match(/\n/g))

console.log(texto.match(/^(\w).+\1$/gi))


console.log(texto.match(/^(\w).+\1$/gim)) // usar a flag multiline