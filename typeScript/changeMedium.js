/**
 * 
 * @params (price, cash and cash in drawer(cid))
 * @retuns (change, if available)
 * */
const checkCashRegister = (price, cash, cid) => {
/* 
* Get an 2-dimension array(cid) and change for an object
* to calculate the total amount in the drawer
* Use the Object.fromEntries that returns an key:value
*
*object and iterate over it to calculate the total
TODO Use objects for the change
*
*/

  let change={};
  let drawer=0;
  change = Object.fromEntries(cid);
  console.log("Change" , change);
  for (let [property] of Object.entries(change)) {
    drawer += parseFloat(change[property]);
  }

  console.log(drawer.toFixed(2));

  let changeToGive = cash - price;
  const changeArray = [];
  let noFunds = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };

  let closedDrawer = {
    status: "CLOSED",
    change: cid
  };

  const UNIT_AMOUNT = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };

  if (changeToGive > drawer) {
    return noFunds;
  } else if (changeToGive.toFixed(2) == drawer) {
    return closedDrawer;
  } else {
    // console.log("Cid", cid);
    cid = cid.reverse();
    console.log("Reverso", cid);
    for (let elem of cid) {
      // console.log("Elemento de CID",elem[0])
      let temp = [elem[0], 0];
      console.log('temp',temp);
      console.log(UNIT_AMOUNT[elem[0]]);
      while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        temp[1] += UNIT_AMOUNT[elem[0]];
        elem[1] -= UNIT_AMOUNT[elem[0]];
        changeToGive -= UNIT_AMOUNT[elem[0]];
        changeToGive = changeToGive.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  if (changeToGive > 0) {
    return noFunds;
  }
  return { status: "OPEN", change: changeArray};
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))


// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))