const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: fogo e outra FOGOOOOO'
const texto2 = 'There is a big fog in MYC'

// ? zero ou um (opcional0
const regex = /fogo?/gi // resolve para fog ou fogo pois o caracter q antece o? é opcional
console.log(texto1.match(regex))
console.log(texto2.match(regex))
