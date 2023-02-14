function test(price, payment) {

  let totalDrawer =     [
    1.01, 2.05, 3.1,
    4.25, 90, 55,
    20, 60, 100
  ]; // cash in the drawer
    // [
    //   0.01, 0, 0, 0, 
    //   1, 0, 0, 0, 0
    // ]; // cash in the drawer

  let totalDrawerr = 
    [
      1.01, 2.05, 3.1,
      4.25, 90, 55,
      20, 60, 100
    ]; // cash in the drawer
  totalDrawer =  [...totalDrawer].reverse();
  // // console.log(totalDrawer);
  // // console.log(inverse);
  let sumDrawer = 0.00; // totalGaveta
  let change = 0.00; 
  let currency = [
      100, 20, 10, 5, 1,
      0.25, 0.10, 0.05, 0.01
    ];

  // let rcurrency = [...currency].reverse();
  console.log(currency)
  let currencyObj = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    'ONE HUNDRED': 100
  }

  let currencyObx = {
    'ONE HUNDRED': 0,
    TWENTY: 0,
    TEN: 0,
    FIVE: 0,
    ONE: 0,
    QUARTER: 0,
    DIME: 0,
    NICKEL: 0,
    PENNY: 0
  }

  let currencyDrawer = {
    'ONE HUNDRED': 0,
    TWENTY: 0,
    TEN: 0,
    FIVE: 0,
    ONE: 0,
    QUARTER: 0,
    DIME: 0,
    NICKEL: 0,
    PENNY: 0
  }

  let noFunds = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  let closedDrawer = {
    status: "CLOSED",
    change: totalDrawer
  }

  /** 
   * 0. identify the number of notes in the drawer
   * for each value...
   * 1. Total available in the drawer as cash
  */

  let numberNotes = []; 
  for (let i = 0; i < currency.length; i++) {
    numberNotes[i] = parseInt(totalDrawer[i]/currency[i]);
  }
  console.log("NotasCaixa", numberNotes);


  let r=0;
/**
 * Availabe notes/coins at the drawer
 */
  for (let [property,value] of Object.entries(currencyDrawer)){
    //console.log(property,value)
    currencyDrawer[property]=numberNotes[r];
    r+=1;
  }
  console.log(currencyDrawer)

  sumDrawer = parseFloat(totalDrawer.reduce((acc, el) => acc += el)).toFixed(2);
  console.log("Drawer sum->", sumDrawer)
/**
 * 0. processing change
 *  -> check if is a number otherwise cast it;
 */
  change = price - payment;

  if (typeof change != 'number') {
    change = +change;
  }
  /**
   * 0. check payment, must be larger ou equal to price
   */

  if ( payment < price) {
    let miss = price-payment;
    return "INSUFIICIENT PAYMENT! Still mising-> "  + miss;
  }

  if (change === 0) {
    return closedDrawer;
  }

  change = -change;
  console.log("Tem troco->", change)
  let notesChange = [0];
  let k = 0;
  //console.log("Currency", currency)
  for (let idx in currency) {
    notesChange[k] = parseInt(change / currency[idx]);
    //console.log(notesChange[k])
    k++;
  }
  //console.log("Needed notes->", notesChange)
  let text = "";
  let numberCoins=[0];
  let div=0;
  for (let v = 0; v < 9 ; v++) {
    if (change >= currency[v]) {
      console.log("Compara caixa com troco->",currency[v])
      div = Math.floor(+change / currency[v]);
      //console.log( "Divisao troco por moeda no caixa->",div)
      text += div + " notas de " + currency[v] + "\n";
      console.log(text)
      change = (change - (div * currency[v])).toFixed(2);
      numberCoins[v] = div;
      //console.log("Troco ->", v, change);
    } else {
      numberCoins[v]=0;
    }
  }
  let len_a=0;
  let len_b=0;


console.log("Antes de filtar numberCoins", numberCoins)
numberCoins = Array.from(numberCoins, el => el || 0);

  len_a = numberCoins.length;
  len_b = currency.length;
  console.log("Tamanho das matrizes", len_a, len_b)

  if (len_a < len_b) {
    console.log("Comprimentos diferentes")
    let quantos = len_b - len_a;
    for (let j=0; j<quantos; j++){
      numberCoins.push(0);
    }
  }
  //console.log(numberCoins)

  // let numberCoinsObj ={...numberCoins}

  let i=0;

    for (let [property,value] of Object.entries(currencyObx)){
      //console.log(property,value)
      currencyObx[property]=numberCoins[i];
      i+=1;
    }
  console.log("caixaAtual=>",numberNotes)
  console.log("numberCoins=>",numberCoins)
  // console.log(currencyObx);
  // console.log(text);
  let hasChange = [];
  // for(let i=0; i<numberNotes.length; i++) {
  //   if(numberCoins.indexOf(numberNotes[i]) > -1) {
  //       hasChange.push(numberNotes[i]);
  //   }
  // }

let rr=0;

  console.log("Troco=>",hasChange)


  numberNotes.filter(function(element) {

    // console.log(numberCoins[rr])
    if (numberCoins[rr] > (element)) {
      hasChange.push(numberCoins[rr]);
      console.log(numberCoins.indexOf(numberCoins[rr]))
      rr++;
      // console.log(rr)
    }
    rr++;
  });

  

  console.log("Troco=>",hasChange)



  //if (currencyObx.DIME === 0)

  // for (let m=0; m<numberCoins.length; m++) {


  //     if(numberCoins[m] > numberNotes[m]) {
  //       numberCoins[m] = numberCoins[m]-1;
  //       numberCoins[m+1]= numberCoins[m+1]+1;
  //     }

  //   }
  
//console.log(numberCoins)


}


console.log(test(3.76, 100))
// console.log(test(19.5, 20))

