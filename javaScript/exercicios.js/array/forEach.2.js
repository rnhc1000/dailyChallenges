const forEach2 = function(index, matriz) {

    for (index=index; index < matriz.length; index++) {
       console.log(`${index}: ${matriz[index]}`);
    }
}

const aprovados = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel', 'Manuel', 'Luis', 'Pedro' ]

forEach2(0,aprovados)

/**
 * O instrutor solicita com que a 
 * seja enfatizado o uso da função callback
 * como no exemplo abaixo, ou seja,
 * resslatar o uso de uma função chamar
 * outra de forma recursiva
 */
/**
 * Criar dentro de prototype de um Array uma função e associar 
 * esta função a uma função que vai percorrer o array no caso abaixo
 * a callback......
 * Ela deve receber como parametro o indice, o elemento associado ao 
 * indice e a matriz 
 */
Array.prototype.forEach3 = function(callback) {
    for (let i=0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovadas = [ 'Agatha', 'Aldo', 'Daniel', 'Raquel', 'Manuel', 'Luis', 'Pedro' ];

aprovadas.forEach3(function(nome, indice) {
    console.log(`${indice +1}, ${nome}`) 
})