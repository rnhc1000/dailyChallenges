function checkCashRegister(price, cash, cid) {
  let change = {};
  let yy = {};
  change = Object.fromEntries(cid);
  console.log(change);
  //let processCID = { ...cid };
  //let x = cid.flat();
  //console.log(x);
  //x ={...x};
  // console.log(x);
  //console.log(processCID);
  //console.log(cid.length);
  //console.log(x.length);

//   x.forEach((el, index) => {
//     yy[index] = el;
//   });
//   console.log(yy);
  // for (let xx=1; xx<x.length; x+=2) {

  //     // change+=x[xx];
  //     console.log("Valor ",x[xx])

  // }
//   console.log("Troco ", change);
//   let i = 0;
//   for (i = 0; i < cid.length; i++) {
//     for (let key in cid[i]) {
//       //console.log("key " + key + " " + "value: " + cid[i][key])
//       change += cid[key];
//     }
//   }

  let troco =0;
//   troco = ({PENNY, NICKEL, DIME, QUARTER, ONE, FIVE, TEN, TWENTY, ONE HUNDRED}) =>
//   parseFloat(+PENNY+
//     +NICKEL +
//     +DIME +
//     +QUARTER +
//     +ONE +
//     +FIVE +
//     +TEN +
//     +TWENTY +
//     +ONE HUNDRED
//     )

    //console.log(troco(change.PENNY, change.DIME), change.NICKEL, change.ONE, change.ONE HUNDRED, change.QUARTER, change.FIVE,
    //change.TEN, change.TWENTY, change.ONE HUNDRED);
  //console.log(change)//.map();
  let totalCaixa=0.00;
  for (let[key,value] of Object.entries(change)) {

console.log(change[key]);
troco+=parseFloat(change[key]);
totalCaixa = troco.toFixed(2)
console.log(typeof troco)
console.log(troco)
  }
console.log("Total Caixa ",totalCaixa)


  let noFunds = {
    status: "INSUFFICIENT FUNDS",
    change: [],
  };
  let sum = 0;
  // for (let i=0; i<cid.length;i++) {

  //console.log(cid[i]);

  for (let j = 0; j < cid.length; j++) {
    //console.log(cid[i][j]);

    cid[j].forEach(function callback(value, key) {
      sum = sum += key;
      //console.log(sum);
    });
  }

  if (cash < price) {
    return noFunds;
  }

  //console.log(cid)
  return change;
}
console.log(
  checkCashRegister(19.5, 10, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
