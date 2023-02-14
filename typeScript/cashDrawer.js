function checkCashRegister(price, cash, cid) {
  /**
   * transformar cid em um objeto para melhor 
   * manipulação pois e uma matriz 2D
   */
  let change = {};
  /**
   * Returns an object created by key-value 
   * entries for properties and methods
   */
  change = Object.fromEntries(cid);
  //console.log(change)
  let sumDrawer = 0;
  let drawer = 0;
  console.log(change)
  /**
   * Soma o valor de cada propriedade para saber
   * o que tem no caixa
   */
  for (let [property] of Object.entries(change)) {
    drawer += parseFloat(change[property]);
  }
  sumDrawer = drawer.toFixed(2);
  console.log(sumDrawer);
  /**
   * Cria um objeto vincuulando moeda a
   * seu respectivo valor
   */
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


  let noFunds = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  let closedDrawer = {
    status: "CLOSED",
    change: cid
  }

  let openDrawer = {
    status: "OPEN",
    change: cid
  }
  //if (sumDrawer < (cash-price)) return noFunds;

  let calculaTroco = 0.00;

  calculaTroco = parseFloat((+cash - +price).toFixed(2));
  console.log("Troco :", calculaTroco)
  // let notes =0;
  let i = 0;
  change = Object.fromEntries(cid);
  //console.log(change);
  // if ( calculaTroco == sumDrawer ) return closedDrawer;
  // for (let[property] of Object.entries(change)) {
  //   // drawer+=parseFloat(change[property]);
  //   for (let[key] of Object.entries(coin)) {

  //     if(change.property == coin.key) {
  //         console.log("Change Property ", change[property]);
  //         // console.log(notes[i])
  //         i++;

  //       console.log("Ok", i)
  //     }
  //     // i++;

  //     // console.log("Numero de Moedas", change[property]/coin[key])

  //   }
  //   i=0;
  //   //console.log(change[property])
  //   // if (calculaTroco === change[property]) {
  //   //   console.log("Existe troco")
  //   }
  let arr1 = [];
  let arr2 = [];
  arr1 = Object.values(change).map(function (value, key) {
    return (key, value);
  })
  console.log(arr1)

  arr2 = Object.values(changeX).map(function (value, key) {
    return (key, value)
  })
  console.log("Moeda", arr2);


  // let notes = []

  // for (let i = 0; i < arr1.length; i++) {

  //   notes[i] = parseInt(arr1[i] / arr2[i]);
  // }

  // console.log(notes)

  //console.log("Notas" , notes)


  // if (calculaTroco > 0) {
  //   return openDrawer;

  // } else {

  //   // console.log("Drawer ",sumDrawer)
  //   // console.log(calculaTroco);
  // }
  console.log("Troco de novo ", calculaTroco)
  for (let note of notas) {
    while (calculaTroco >= note) {
      changeX[note] += 1;
      calculaTroco -= note;
      console.log(calculaTroco);
    }
  }
  (function () {
    function decimalAdjust(type, value, exp) {
      // Se exp é indefinido ou zero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Se o valor não é um número ou o exp não é inteiro...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Transformando para string
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Transformando de volta
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
    if (!Math.round) {
      Math.round = function (value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    // Decimal arredondado para baixo
    if (!Math.floor) {
      Math.floor = function (value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
    // Decimal arredondado para cima
    if (!Math.ceil) {
      Math.ceil = function (value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
  })();

  // // console.log(Math.round(20.51, -1));
  console.log(changeX);
  return 'OK'
}

// troco = numero de notas de um valor multiplicado por um numer


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))