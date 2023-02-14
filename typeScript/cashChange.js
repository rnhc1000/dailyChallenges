
function checkCashRegister(price, cash, cid) {
  let change = {};
  change = Object.fromEntries(cid);
  //console.log(change)
  let sumDrawer = 0;
  let drawer = 0;
  for (let [property] of Object.entries(change)) {
    drawer += parseFloat(change[property]);
  }
  sumDrawer = drawer.toFixed(2);
  console.log("Total Drawer ", sumDrawer)
  let qty = {};
  let coin = {
    PENNY: 0.01,
    NICKEL: 0.5,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100
  }

  qty = coin;

  //console.log("Qty ", qty)
  let notas = [
    100, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.01
  ]

  let changeX = {
    100: 0,
    20: 0,
    10: 0,
    5: 0,
    1: 0,
    0.5: 0,
    0.25: 0,
    0.1: 0,
    0.01: 0,
  }

  let changeXX = {
    'ONE HUNDRED': 0,
    TWENTY: 0,
    TEN: 0,
    FIVE: 0,
    ONE: 0,
    DIME: 0,
    QUARTER: 0,
    NICKEL: 0,
    PENNY: 0,
  }


  let noFunds = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  let closedDrawer = {
    status: "CLOSED",
    change: cid
  }


  if (sumDrawer < (cash-price)) return noFunds;

  let calculaTroco = 0.00;

  calculaTroco = parseFloat((+cash - +price).toFixed(2));
  console.log("Troco :", calculaTroco)
  
  change = Object.fromEntries(cid);
  if ( calculaTroco == sumDrawer ) return closedDrawer;

  let arr1 = [];
  let arr2 = [];

  arr1 = Object.values(change).map(function (value, key) {
    return (key, value);
  })
  console.log(arr1)

  arr2 = Object.values(coin).map(function (value, key) {
    return (key, value)
  })
  //console.log("Moeda", arr2);


  let notes = [] //  qty of notes in the drawer

  for (let i = 0; i < arr1.length; i++) {
    notes[i] = parseInt(arr1[i] / arr2[i]);
  }

  let j=0; //inject into the obj the number of notes for each key
  for (let[property] of Object.entries(qty)) {
    qty[property] = notes[j];
    j++;
  }
  console.log("Notas" , notes)

  console.log(qty)


  for (let [property, values] of Object.entries(changeXX)) {

    //console.log("Valores-> ", values+=10);
  }
let value;
let property;
  //console.log(Object.entries(changeXX).property)

  let contaNotas =1;
  //console.log("Notas ->", notas)
  //console.log("Troco de novo ", calculaTroco)
  for (let note of notas) {
    while (calculaTroco >= note) {
      // if(contaNotas < note) {
        //console.log("True", note)
        changeX[note]+=1;
        // Object.values(changeXX).map(function (value) { return value++});
        calculaTroco -= note;
        contaNotas+=1;
       // console.log("Calculando o troco ", calculaTroco, contaNotas, note)
      // } else { 
        
      //   changeXX[note] +=1;
      //   calculaTroco -= note;
      //   contaNotas=0;
      // }
      console.log(calculaTroco);
    }
  }
  let retorno = Object.entries(changeX);
  let openDrawer = {
    status: "OPEN",
    change: retorno
  };

  if (calculaTroco > 0) {
    return openDrawer;

  } else {

    // console.log("Drawer ",sumDrawer)
    // console.log(calculaTroco);
  }
  console.log(retorno)
  // // console.log(Math.round(20.51, -1));
  //console.log(changeX);
  return 'OK'
}

// troco = numero de notas de um valor multiplicado por um numer


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100,[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))