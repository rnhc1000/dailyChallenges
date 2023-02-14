// codificação no inicio usava apenas um byte ou seja 256 caracteres
//Símbolos, Poontuação, A_Z, a-z, 0-9

// Dois bytes - 65535 caracteres

//Unicode

//Qtde de bytes variáveis
// Suporta mais de 1 milhão  cracateres
// https://unicode-table.com


const texto = 'aʬbʫ'
console.log(texto.match(/\u02ac|\u02ab/g))
//[ 'ʬ', 'ʫ' ]
