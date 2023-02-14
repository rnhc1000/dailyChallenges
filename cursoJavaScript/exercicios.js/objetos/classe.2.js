
class Avo {
    constructor(sobrenome) {
        this.sobrenone = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') { 
        super(sobrenome) // super chama o cnstrutor da classe Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)
// Filho { sobrenone: 'Silva', profissao: 'Professor' }