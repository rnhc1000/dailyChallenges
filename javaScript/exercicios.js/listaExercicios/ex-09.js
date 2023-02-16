/**
 * 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
 * classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. 
 * As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo 
 * de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, 
 * não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 
 * Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada 
 * por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
 * No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 * Critérios:
 * Nota < 40 - Reprovado
 * Notas acima de 40 devem ser divididas por 5 e se o resto da divisao for igual ou superior a 3 devem
 * ser arredondadas para o proximo multiplo e 5
 */

 const criterio = function avaliaNota(nota) {

    if ((nota < 0) || (nota > 100)) {
        return nota;
    }
   let arredondamento = nota % 5;

    switch (arredondamento) {
        case 1:
        case 2:
            break;
        case 3:
            nota+=2;
            break;
        case 4:
            nota+=3;
            break;
        default:
            break;

    }
    return nota;  
 }


 let a = criterio(29);

 if (a < 0 || a > 100 ) {
     console.log('Nota Inválida!!!');
 } else if (a < 40) {
            console.log(`Reprovado! Nota do Aluno: ${a}`);
 } else {
        console.log(`Aprovado!  Nota do Aluno: ${a}`);
 }
