const rows = [
    ["Carbs", "17g"], 
    ["Protein", "19g"], 
    ["Fat", "5g"]
];

for(let i=0; i< rows.length; i++) {
 let innerRowLength = rows[i].length;
     for(let j=0; j<innerRowLength; j++) {
        console.log([i],[j]);
        console.table(rows[i][j]);
    }
};

//        ret[i] =  `<option value="${countries[i].toLowerCase()}">${countries[i]}</option>`;

function renderTableRows(rows) {
    let menu = "<tr>";
    let fechaMenu = "</tr>";
    let response = [];
    let responsx = [];
    let conta = 0;
    for(let i=0; i< rows.length; i++) {
        let innerRowLength = rows[i].length;
        for(let j=0; j<innerRowLength; j++) {
            // console.log("Valor de j "+j);
            // console.log("Valor de i ", +i);
            response[conta] = `<td>${rows[i][j]}</td>`;
            conta++;
            // console.log("Valor de conta "+ conta);
        }
    };

    // console.log(responsx);
    response.unshift(menu);
    response.push(fechaMenu);
    response=response.toString();
    return response;
}

let a = renderTableRows(rows);
console.table(a);
// rows.forEach((row) => {
//     row.forEach((data) => {
//         console.table(data);
//     });
// });