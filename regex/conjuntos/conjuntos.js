const texto = '1,2,3,4,5,6,a,b, c!d?e[f'

//definir uma casse ou conjunto de caraceteres usa-de []

const regexPares=/[024688]/g
//usando conjunto le-se o ou 2 ou 4 ou ses ou oito
console.log(texto.match(regexPares))


const texto2 = 'João não vai passear na moto.'

const regexComESemAcento = /n[aã]./g
console.log(texto2.match(regexComESemAcento))