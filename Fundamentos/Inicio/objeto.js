let t = {
    nome: "Ricardo",
    idade: 65,
    endereco: {
        Rua: "Santo Agapito",
        Numero: 7,
        Quadra: 57,
        Bairro: "Jardim das Oliveiras",
        CEP: "65911-652",
        Referencia: [
            
            "Igreja João Paulo II",
            "Hospital do Amor"
        ]
    },
    Fone: "+55 71 993 005 555",
    CPF: function() {
        return "916.217.048-15";
    }
};
console.log(t.endereco.Referencia[0]);
let j = JSON.stringify(t)
console.log(typeof j)

console.log(t.CPF())

let k= JSON.parse(j)
console.log(typeof k)