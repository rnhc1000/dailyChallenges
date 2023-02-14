function factorialize(num) {

    if (num < 0) {
      return false;
    }
    let count = num;
    // while (count > 0) {
      for (i=num-1; i >0; i--) {

        num=num*i;
      };
    //   count--;
        console.log(num);
    // }
    return num;
  }
  
  factorialize(6);