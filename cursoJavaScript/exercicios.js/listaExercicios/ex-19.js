/**
 * 19) O cardápio de uma lanchonete é o seguinte:
 * Código Descrição do Produto Preço
 * 100 Cachorro Quente R$ 3,00
 * 200 Hambúrguer Simples R$ 4,00
 * 300 Cheeseburguer R$ 5,50
 * 400 Bauru R$ 7,50
 * 500 Refrigerante R$ 3,50
 * 600 Suco R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente
 */

 const cardapio = function menu(codigo, quantidade) {

    code = {
        C100: 3.00,
        C200: 4.00,
        C300: 5.50,
        C400: 7.50,
        C500: 3.50,
        C600: 2.80
    }

    switch(codigo) {

        case '100':
            return quantidade*code.C100;
            break;
        case '200':
            return quantidade*code.C200;
            break;
        case '300':
            return quantidade*code.C300;
            break;
        case '400':
            return quantidade*code.C400;
            break;
        case '500':
            return quantidade*code.C500;
            break;
        case '600':
            return (quantidade*code.C600).toFixed(2);   
            break;
        default:
            return 'Código Inválido';

    }
 }

 console.log(`Total R$: ${cardapio('700', 3)}`);