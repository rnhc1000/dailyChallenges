const texto='O João recebeu 120 milhões apostando 6 9 21 23 45 46'

// definir um quantificador -> {}

console.log(texto.match(/\d{1,2}/g)) //{1,2} um ou dois digitos

console.log(texto.match(/[0-9]{2}/g)) // Apenas 2 digitos

console.log(texto.match(/\d{1,}/g)) // todos os numeros

console.log(texto.match(/\w{7}/g)) //grupos de caracteres com exatamente 7 digitos

console.log(texto.match(/[\wõ]{7}/g)) //criar um grupocom o shorthand [\wã|õ|é]....


console.log(texto.match(/\b\d{1,2}\b/g)) // uso de bordas para especificar apenas númneros de 1 ou 2 caracteres

console.log(texto.match(/\b[\wõ]{7}\b/g))





