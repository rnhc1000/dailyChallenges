<div class="titulo">Primeira Classe</div>

<?php
/**
 * Atençã0 à notação em classes PHP
 * PrimeiraParteDoNomeSegundaParteDoNome
 * 
 */
class ClienteEspecial {
    //atributos
    public $nome = 'Anônimo';
    public $idade = 18;
/**
 * this aponta para o objeto atual
 * ao criar o objeto via uso da plavra reservada
 * new, e ele está armazenado em c1 e assim
 * uma variável especial é criada $this  e ela aponta
 * para o objeto atual, permitindo assim referenciar
 * os membros deste objeto (atributos e métodos)
 * 
 */
    public function apresentar() {
        echo "Nome: {$this->nome} Idade: {$this->idade}<br>";
    }
}

$c1 = new ClienteEspecial();
/**
 * Operador que permite acessar um membro
 * do objeto criado é " -> "
 */
$c1->nome = 'Ana Silva';
$c1->idade = 27.5;

$c2 = new ClienteEspecial();
$c2->nome = 'Gabriel';
$c2->idade = 43;

$c1 -> apresentar();
$c2 -> apresentar();

class ClienteEspecialX {
    //atributos
    public $nomeX = 'Anônimo';
    public $idadeX = 18;
/**
 * this aponta para o objeto atual
 * ao criar o objeto via uso da plavra reservada
 * new, e ele está armazenado em c1 e assim
 * uma variável especial é criada $this  e ela aponta
 * para o objeto atual, permitindo assim referenciar
 * os membros deste objeto (atributos e métodos)
 * 
 */
    public function apresentarX() {
        return "Nome: {$this->nomeX} Idade: {$this->idadeX}<br>";
    }
}

$c3 = new ClienteEspecialX();
/**
 * Operador que permite acessar um membro
 * do objeto criado é " -> "
 */
$c3->nomeX = 'Silva Ana';
$c3->idadeX = 57;

$c4 = new ClienteEspecialX();
$c4->nomeX = 'Rafael';
$c4->idadeX = 34;

echo $c3 -> apresentarx(), '<br>';
echo $c4 -> apresentarX();

