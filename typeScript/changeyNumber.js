function sumSliding(num) {

  let numberOfCoinsChange = [
    0, 4, 1, 1, 1,
    0, 2, 0, 4
  ];


  let cashInDrawer = [
    1,  3,  2,  11, 90,
    17, 31, 40, 101
  ];

  let currency = [
      100,   20,   10,
        5,    1, 0.25,
      0.1, 0.05, 0.01
  ]
let i=0;
// let value=[];
let value = numberOfCoinsChange.map(function(el)  {
    el*=currency[i].toFixed(2);
    i+=1;
    return el;
    //console.log(el)
})
    // console.log(el)

let total = (value.reduce((acc, el) => acc+el)).toFixed(2)

console.log(total)


  console.log(value)


// total = 80.24;
// while (total != 96.24) {

//   console.log(total);
//   total+=1;
// }



let rr=0;

let diff =[];
cashInDrawer.filter(function(element) {

    // console.log(numberCoins[rr])
    if (numberOfCoinsChange[rr] > (element)) {
      console.log("Maior do q no caixa", cashInDrawer[rr])
      diff.push(numberOfCoinsChange[rr]);
      diff.push(numberOfCoinsChange.indexOf(numberOfCoinsChange[rr]))
      rr++;
      // console.log(rr)
    }
    rr++;
  });
  console.log("Diff->",diff)

  

}

console.log(sumSliding(36))