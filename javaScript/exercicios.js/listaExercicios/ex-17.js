/**
 * 17) Um funcionário irá receber um aumento de acordo com o seu plano de
 * trabalho, de acordo com a tabela abaixo:
 * Plano Aumento
 * A 10%
 * B 15%
 * C 20%
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 * novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

 const novoSalario = function funcionario(nome,aumento) {
    
    plano = {
        A: 0.1,
        B: 0.15,
        C: 0.20
    }
    let salario = {
        Francisco: 1000.00,
        Manuel: 1500.00,
        Renata: 2500.00
    }

    switch (aumento) {

        case 'A':
            switch (nome) {
                case 'Francisco':
                    return salario.Francisco + (salario.Francisco * plano.A);
                    break;
                case 'Manuel':
                case 'Renata':
                    return 'Plano Inválido para Este Funcionário';
                    break;
                default:
                    return 'Funcionário Inexistente!';
                    break;
            }
        break;
        case 'B': 
            switch (nome) {
                case 'Manuel':
                    return salario.Manuel + (salario.Manuel * plano.B);
                    break;
                case 'Francisco':
                case 'Renata':
                    return 'Plano Inválido para Este Funcionário';
                break;
                default:
                    return 'Funcionário Inexistente!';
                break;
            }
        break;
        case 'C':
            switch (nome) {
                case 'Renata':
                    return salario.Renata + (salario.Renata * plano.C);
                    break;
                case 'Manuel':
                case 'Francisco':
                    return 'Plano Inválido para Este Funcionário';
                    break;
                default:
                    return 'Funcionário Inexistente!';
                    break;
            }
        break;
        default:
            return 'Plano Inexistente!';
            break;
    }

}
  

 console.log(novoSalario('Renata','C'))