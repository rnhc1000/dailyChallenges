<?php

/**
 * Valor vs Referencia
 * $a = 'texto';
 * $b = $a;
 * A uma posição de memória é atribuida a variável a
 * e a esta posição é aramazenada o valor 'texto';
 * Ao atribuir a uma nova variavel b p valor da 
 * variavel a, uma nova posição de memoria é atribuida a 
 * variavel b, poranto ao alterar o valor de b n afeta o valor de a
 * duplicando desta forma o espaço de memória usado
 * 
 * $a = 'Ana';
 * $b = [R]$a; // atrinuição neste caso é por referencia
 * |neste caso ao criar a variavel a, o mesmo espaco de memória
 * será utilizado e à variavel b é atrinuído o endereço de memŕia
 * ocupado poela variável a, apontando ambas a variáveis para o 
 * mesmo endereço de memória.
 */