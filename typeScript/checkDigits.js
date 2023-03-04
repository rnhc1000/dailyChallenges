function createCheckDigit(membershipId) {

  let i = 0;
  let numbers = [];
  let res = 0;
  //let checkDigit = [];
  //console.log(typeof(membershipId));
  //checkDigit = [...membershipId];
  //console.log(checkDigit);

  for (const x of membershipId) {
    numbers[i] = parseInt(x);
    i++;
  }
  res = numbers.reduce((sum, number) => sum + number);
 // console.log("Result ",typeof(res));
  numbers.length = 0;
  while (res > 9) {
   // console.log("Res +''", res);

   res += '';
   //console.log("Res +''", res);
   //console.log(typeof(res));
   i = 0;
   for (const x of res) {
    numbers[i] = parseInt(x);
   i++;
  }
   // res = numbers.reduce((sum, number) => sum + number);

   return createCheckDigit(res);
  }
  return res;
}


let a = "12345";
console.log(createCheckDigit(a));