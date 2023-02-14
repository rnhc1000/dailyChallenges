const texto = 'Romário era um excelente jogador\n, mas hoje é um político safado'

console.log(texto.match(/r/gi))

console.log(texto.match(/^r/gi))

console.log(texto.match(/o$/gi))



console.log(texto.match(/^r[\s\S]*o$/gi)) // dentro de um grupo o \s e o \S se complementam selecionando tudo 
// assi  imprime o \n