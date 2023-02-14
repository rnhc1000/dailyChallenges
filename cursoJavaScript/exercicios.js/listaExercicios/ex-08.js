/**
 * 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
 * ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor 
 * e confere se omesmo é maior ou menor que seu melhor e pior desempenho. 
 * Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la 
 * irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde 
 * de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo:
 * String: “10 20 20 8 25 3 0 30 1”
 * Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação 
 * e a pior pontuação aconteceu no sétimo jogo.)
 * 
 */

 const desempenho = function(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {

    let pontos = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9];
    
  //  for (i=0; i < pontuacao.length; i++) {
  //      console.log(pontuacao[i]);
  //  }
    
 }
// Funcao para retornar o menor valor de um array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};

// Funcao para retornar o maior valor de um array
Array.max = function(array) {
    return Math.max.apply(Math, array);
};
// Achar a menor pontuação 
let pontuacao = [10, 10, 35, 35, 25, 45, 45];
let min = Array.min(pontuacao);
let pom = pontuacao.indexOf(Array.min(pontuacao));
pom +=1;
console.log(min, pom);
let max = Array.max(pontuacao);
let pox = pontuacao.indexOf(Array.max(pontuacao));
pox +=1;
console.log(max, pox);
countMin=0;
for (i=0; i < pontuacao.length; i++) {
    if (pontuacao[i] == min) {
        countMin = countMin+1;
    }
}

console.log(countMin);

countMax = 0;
for (j=0; j < pontuacao.length; j++) {
    if (pontuacao[j] == max) {
        countMax = countMax+1;
        console.log(countMax,max, j);
    }
}
//console.log(countMax);

