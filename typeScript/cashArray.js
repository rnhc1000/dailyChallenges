function cashArray(availableChange, calculatedChange ) {
  let change = 0;
  let sum=0;
  console.log(availableChange)
  let amount = [
    100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01
  ]
  let response = [0];
  let counter = 0;
  response = calculatedChange.map(function (value) {
    value *= amount[counter];
    counter++;
    return value;
  });
  console.log("Valor", response)
  change = response.reduce(((acc, el) => acc += el), 0);
  console.log(change)
  let i=0;
  console.log(calculatedChange)
  console.log(availableChange)

  for (let idx in calculatedChange) {

    if (calculatedChange[idx] > availableChange[idx] ) {

      calculatedChange[idx]=availableChange[idx];
      // i++;
    }
  }
  counter=0;
  response = calculatedChange.map(function (value) {
    value *= amount[counter];
    counter++;
    return value;
  });
  console.log(response)

  sum = response.reduce(((acc,el) => acc+=el), 0);
  if (sum != change ) {

    console.log(sum,change)

    
  }

  return sum
}


let arr = [
  1,  3,  2,  11, 90,
  17, 31, 40, 101
]

let cid = [

  0, 4, 1, 1, 1,
  0, 0, 2, 4
];

let res = 0;
res = cashArray(arr,cid)
console.log(res)
