function test(price, payment) {

  let totalDrawer =     //[
  //   1.01, 2.05, 3.1,
  //   4.25, 90, 55,
  //   20, 60, 100
  // ]; // cash in the drawer
    [
      0.01, 0, 0, 0, 
      1, 0, 0, 0, 0
    ]; // cash in the drawer

  let totalDrawerr = 
    [
      1.01, 2.05, 3.1,
      4.25, 90, 55,
      20, 60, 100
    ]; // cash in the drawer
  let inverse = [...totalDrawer].reverse();
  console.log(totalDrawer);
  console.log(inverse);
  let sumDrawer = 0.00; // totalGaveta
  let change = 0.00; 
  let currency = [
    +0.01, +0.1, +0.25, +0.5,
    +1, +5, +10, +20, +100
  ]; // cash value
  let rcurrency = [...currency].reverse();
  let currencyObj = {
    PENNY: 0.01,
    NICKEL: 0.1,
    QUARTER: 0.25,
    DIME: 0.50,
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
    DIME: 0,
    QUARTER: 0,
    NICKEL: 0,
    PENNY: 0
  }

  /** 
   * 0. identify the number of notes in the drawer
   * for each value...
   * 1. Total available in the drawer as cash
  */

  let numberNotes = []; 
  for (let i = 0; i < inverse.length; i++) {
    numberNotes[i] = parseInt(inverse[i] / rcurrency[i]);
  }
  console.log("NotasCaixa", numberNotes);

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
    return "Need more cash "  + miss;
  }

  if (change === 0) {
    return "Thanks for your purchase...Next please!"
  }

  change = -change;
  console.log("Tem troco->", change)
  //change = 0.5;

  // for (let idx in totalDrawer) {
  //   console.log(totalDrawer[idx])
  // }

  // function f (change) {

  //   return 
  //   }
  // }
  //let search = totalDrawer.map((el) => el / change);
  /**
   * Find out how many notes need for the change
   */
  let notesChange = [0];
  let k = 0;
  //console.log("Currency", currency)
  for (let idx in rcurrency) {
    notesChange[k] = parseInt(change / rcurrency[idx]);
    //console.log(notesChange[k])
    k++;
  }
  //console.log("Needed notes->", notesChange)
  let text = "";
  let numberCoins=[];
  inverse = [100, 20, 10, 5, 1, 0.5, 0.25, 0.10, 0.01];
  //console.log(inverse)
  for (let v = 0; v < inverse.length; v++) {
    if (change >= inverse[v] && inverse[v] != 0) {
      console.log("Compara caixa com troco->",inverse[v])
      let div = Math.floor(+change / inverse[v]);
      console.log( "Divisao troco por moeda no caixa->",div)
      text += div + " notas de " + inverse[v] + "\n";
      change = (change - (div * inverse[v])).toFixed(2);
      numberCoins[v] = div;
      console.log("Troco ->", change);
    }
  }

  

  let len_a=0;
  let len_b=0;


console.log("Antes de filtar numberCoins", numberCoins)
numberCoins = Array.from(numberCoins, el => el || 0);

  len_a = numberCoins.length;
  len_b = inverse.length;
  console.log("Tamanho das matrizes", len_a, len_b)

  if (len_a < len_b) {
    console.log("Comprimentos diferentes")
    let quantos = len_b - len_a;
    for (let j=0; j<quantos; j++){
      numberCoins.push(0);
    }
  }
  console.log(numberCoins)

  let numberCoinsObj ={...numberCoins}

  let i=0;

    for (let [property,value] of Object.entries(currencyObx)){
      console.log(property,value)
      currencyObx[property]=numberCoins[i];
      // console.log(currencyObx)
      // console.log("coins...",coinsNumber[i]);
      // console.log
      i+=1;
      //=numberCoins[i];
      // console.log(currencyObx[value], numberCoins[i])
      // i++;

    }

  console.log("numberCoins=>",numberCoins)
  console.log(currencyObx)
  //console.log(ajuste)
  console.log(text)
  // let ax = [];
  // ax = notesChange.filter((el) => el !== 0);
  // console.log("Caixa Real", numberNotes);
  // console.log("Caixa Ideal", ax);

  // for (let xx = 0; xx < ax.length; xx++) {

  //   if (numberNotes[xx] >= ax[xx]) {

  //     console.log("Existe troco", ax[xx]);

  //   } else {
  //     console.log("Não existem notas", ax[xx])
  //   }

  // }
  // console.log("Notas Troco", notesChange)
  // console.log("El/troco",search)
  // if (search.reduce((acc, el) => acc += el, 0) < change) {
  //   console.log(search);
  //   console.log("N tem como dar troco")
  // } else {
  //   console.log("Existe troco")

  //   console.log(search)
  // }


}

function pegarDiferenca() {
  let r1 = [2, 4, 6, 8];
  let r2 = [3, 4, 5, 7, 9];
  let r3 = r1.filter(a => !r2.includes(a));

  console.log(r3);
}

//pegarDiferenca();
console.log(test(3.76, 100))
console.log(test(19.5, 20))

//console.log(parseInt((drawer/change)))

function calculaNotas(troco) {
  var notas = [100, 20, 10, 5, 1, 0.5, 0.25, 0.10, 0.01];
  var texto = '';
  for (var x = 0; x < notas.length; x++) {
    if (+troco >= notas[x]) {
      var div = Math.floor(+troco / notas[x]);
      console.log("Div->", div);
      texto += div + " notas de " + notas[x] + "\n";
      troco -= (div * notas[x]).toFixed(2);
      console.log("Troco ->", troco)
    }
  }
  return texto;
}

//console.log(calculaNotas(82.50))