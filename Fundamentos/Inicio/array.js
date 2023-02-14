const notas = [1,2,3,4,5,6,7,8,9]
let valores = "";
for (let nota of notas) {
    valores += nota + ' ';
}

console.log(valores)

let indices = "";
for (let nota in notas) {
    indices += nota + ' ';
}

console.log(indices);

try {
    const json = '{ nome: "Bruno", "dataNascimento": "09061993" }'
    const user = JSON.parse(json)
  
    console.log(user.nome)
    // Bruno
  } catch (e) {
    console.log(e.message)
    // Unexpected token n in JSON at position 2
  }