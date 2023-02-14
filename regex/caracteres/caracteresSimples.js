const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/g
console.log(texto.split(regexVirgula)) //[ '1', '2', '3', '4', '5', '6', 'a.b c!d?e' ]
console.log(texto.match(regexVirgula)) // [ ',', ',', ',', ',', ',', ',' ]
console.log(texto.match(/A/gi))
console.log(texto.match(/2/g))