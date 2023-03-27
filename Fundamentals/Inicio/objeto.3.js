const data = {

    dia: 1,
    mes: 10,
    ano: 2022,
    exibirData: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

data.dia =11;

d = data.exibirData();

console.log(d);

function criarData(dia, mes, ano) {

    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData: function() {
            return `${this.dia}/${this.mes}/${this.ano}`;
        }

    }
}

const d1 = criarData(9, 10, 2020);
const d2 = criarData(10, 11, 2022);

console.log(d1.exibirData());
console.log(d2.exibirData());
