
class Lancamento {
    constructor(nome = 'Generico', valor = 0) {
        this.nome = nome,
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes,
        this.ano = ano,
        this.lancamentos = []
    }
}

function addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l))
}

function sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach(l => {
        valorConsolidado += l.valor;
    })
    return valorConsolidado;

}

const salario = new Lancamento('salario', 45000);
const contaDeLuz  = new Lancamento('Luz', -220)
const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)

console.log(contas.sumario())