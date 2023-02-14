const  texto = 'Você precisa repsonder sim, nao ou não sei'
console.log(texto.match(/sim|n.o|sei/g))
//[ 'sim', 'não', 'não', 'sei' ]
//[ 'sim', 'nao', 'não', 'sei' ]
