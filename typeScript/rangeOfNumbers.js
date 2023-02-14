function rangeOfNumbers(startNum, endNum) {
    let count=0;
    if (count > (endNum-startNum)) {
      return [];
    } else if (endNum === startNum ) {
        return [endNum];
    } else {
      const arrayx = rangeOfNumbers(startNum+1, endNum-1);
      arrayx.unshift(startNum);
      arrayx.push(endNum);
      console.log(count);
      return arrayx;
    }
  };

  console.log(rangeOfNumbers(1,5));
  console.log(rangeOfNumbers(4,5));
  console.log(rangeOfNumbers(5,5));
  console.log(rangeOfNumbers(1,20));