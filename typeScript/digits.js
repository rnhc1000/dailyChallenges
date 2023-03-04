function createCheckDigit(membershipId) {
    // Write the code that goes here.
    
    let digits = [...membershipId];
    let i=0;
    let numbers = [];
    let res = 0;
    for (const x of membershipId) {
    //console.log(typeof(x)); 
      numbers[i] = parseInt(x);
      //console.log(typeof(numbers[i]));
      i++;
    }

    //console.log(typeof(numbers[0]));
    //console.log(numbers);
    res = numbers.reduce((sum,number) => sum+number);

    let cvt = [];
    console.log("Soma ",res);
    while  (res > 9) {
        //console.log(typeof(res));
        res =  res + '';
        console.log("String ", res);
        i = 0;
        for (const y of res){

            cvt[i]  = parseInt(y);
            i++;
        }

        console.log(cvt)

        res = cvt.reduce((sum,number) => sum + number);

        console.log(typeof(res));

        }
    
    
    return res;
  }
  
  console.log(createCheckDigit("123456789"));