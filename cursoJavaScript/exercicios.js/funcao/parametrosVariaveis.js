function soma() {
    /**
     * apesar de não declarar parametros
     * e JS vc pode dclarar uma função sem eles
     * e atribuir em temp de execuçã.
     */
    let soma = 0;
    for (let i in arguments) {
        /**
         * uso da palavra arguments que é um
         * array interno que contem todos os arguments 
         * de uma função
         */
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1.1, 2.2, 3.3));
