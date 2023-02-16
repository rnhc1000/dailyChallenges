/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
 * e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 * 
 */


 const simples = function jurosSimples (valor, taxa, tempo) {
     /**
      * Final = ValorInicial(1 + taxa * tempo)
      */
    valorFinal = valor * (1 + taxa*tempo);
    return valorFinal.toFixed(2);

 }

 const composta = function jurosComposto ( valorInicial, juros, time) {
     /**
      * Final = valorInicial * ( 1  + (taxa)) exp tempo 
      */
    let montante = (valorInicial * (Math.pow(juros+1,time))).toFixed(2);
    return montante;
 }

console.log(simples(10000, 0.25, 2))

console.log(composta(10000, 0.25, 2))