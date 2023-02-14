function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    /**
     * operadores de curto-circuito pois basta analisar o primeiro
     * para decidir
     *
     * não existe operador ou exclusivo, entao uma alternativa ou
     *  outra como abaixo
     */
    //const comprarTv32 = !!(trabalho1 ^ trabalho2);
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete;
    /**
     * Par atributo:valor na criaçao de objeto
     * a forma abaixo permite crirar o objeto sem o
     * par valor:atributo de forma explicita
     */

    //return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
    return {
        sorvete: comprarSorvete,
        Tv50: comprarTv50,
        Tv32: comprarTv32,
        Saude: manterSaudavel
    };
}
console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));
