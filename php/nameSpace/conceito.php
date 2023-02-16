<div class="titulo">Conceito</div>
<?php
/**
 * dividir a eplicaçõe enre espaços e nomes
 * 1. Criar áreas de nomes. Ao usar uma função de nome soma() o escopo
 * é global e podem haver mais funções com este mesmo nome, gerando conflitos
 * evitando assim problemas com aplicações
 * 
 * Escopo Global (API, APPS, Libs de terceiros) (mesmo espaço de nomes)
 * 
 * ESpaço de Nomes: Financeiro, Vendas, Suporte
 * Assim cada lib criada acima pode ter seu escopo 
 * definido no seu próprio espaço de nomes
 * Financeiro[função calc()]
 * Vendas[funcao calc()]
 * Suporte[função calc()]
 * 
 */