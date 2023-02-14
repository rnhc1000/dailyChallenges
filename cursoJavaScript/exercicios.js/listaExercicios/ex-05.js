/**
 * 05) Lidar com números em JavaScript pode dar muita dor de cabeça. 
 * Você já viu o que acontece quando faz o
 * seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
 * importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
 * um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
 * que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto)
 * Atenção!
 * Você não irá conseguir fazer um replace em uma variável numérica. Para isso, altere utilize o .toString().
 */


 const resultado = function ajustaValor(valor1, valor2) {
     valor = (valor1/valor2).toFixed(2);
     return valor;
 }

 console.log(`R$${resultado(1,3).toString().replace(".", ",")}`);

 console.log(`R$${resultado(1,3)}`);