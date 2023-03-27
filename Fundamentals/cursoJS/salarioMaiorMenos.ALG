Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/25/2022
Var
salarios : vetor[0..4] de real
nome : vetor[0..4] de caracter
i , j: inteiro

maiorSalario, menorSalario : real

Inicio

para i de 0 ate 4 faca
     escreva("Nome do Funcionario: ")
     leia(nome[i])
          escreva("Informe o Salario ")
     leia(salarios[i])
fimpara


para j de 0 ate 4 faca
  se salarios[j] > maiorSalario entao
     maiorSalario <- salarios[j]
  fimse
fimpara

menorSalario <- maiorSalario

para j de 0 ate 4 faca
     se salarios[j] < menorSalario entao
        menorSalario <- salarios[j]
     fimse
fimpara

   



Fimalgoritmo