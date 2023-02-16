function rand([min = 0, max = 1000]) {
    /** uma vez desestrturado o que vc ecebe n é um array
     * e sim 2 atributos
     * Portanto no código abaixo o primiero [min, max] são os atributos desestruturados
     * e o [max, min] à direita na verdade é um novo array sendo criado
     * a partir dos dados desestruturados, invertendo sua ordem
     */
    if (min > max) {
        [min, max] = [max, min]
    }
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor)
}
console.log(rand([50,40]));
console.log(rand([40,50]));
