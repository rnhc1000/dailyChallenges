/**
 * 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

const saque = function analiticoSaque(valor) {
     
    moedeira = {
        R1:     1.00,
        R5:     5.00,
        R10:   10.00,
        R50:   50.00,
        R100: 100.00
    }
    moedeiraX = [1.00, 5.00, 10.00, 50.00, 100.00]

    for (let i=0; i < moedeiraX.length; i++) { 
    }
    

 }

 /**
  * 18 reais..comprar com o maior valor se menor co o próximo, se menor com o proximo se menor separa e conta o encontrado
  * com a diferenção continua a comparar com, o proximo, se maior, pula se menor separa e conta o encontrado
  */