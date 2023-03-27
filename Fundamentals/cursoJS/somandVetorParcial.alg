Algoritmo "semnome"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/25/2022
Var
// Seção de Declarações das variáveis 
numeros : vetor[0..6] de inteiro
i, j : inteiro
conta : inteiro

posMin : vetor [0..6]  de inteiro


Inicio
para i de 0 ate 6 faca
     escreva("Informe um valor: ")
     leia(numeros[i])
fimpara
j <- 0
conta <- 0
para i de 0 ate 6 faca
     se  numeros[i] > 45 entao
         se numeros[i] <= 85 entao
            posMin[j]<-numeros[i]
            j <- j+1
            conta <- conta+1
         fimse
     fimse
fimpara..

para i de 0 ate j-1 faca
     escreva(posMin[i])
fimpara

j <- 0

para i de 0 ate 6 faca
     se  (numeros[i] > 45) e (numeros[i] <= 85) entao
            escreva(numeros[i])
     fimse
fimpara..


...


FimAlgoritmo