function factorialize(num) {

    if (num < 0) {
      return false;
    }
    let count = num;
    // while (count > 0) {
      for (let i = num-1; i > 0; i--) {
        num = num * i;
      };
    //   count--;
        console.log(num);
    // }
    return num;
  }
  
  factorialize(6);


  function fact(num) {
    if (num === 0) { // base code.... the exit condition
      return 1;
    }
    console.log(num)
    return num * fact(num - 1)
  }

 console.log(fact(6));