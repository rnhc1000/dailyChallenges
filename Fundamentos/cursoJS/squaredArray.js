const squareList = arr => {
    // Only change code below this line

    let newArr = arr
    .filter((element) => ((element>0) && Number.isInteger(element)))
    .map((element) => element*element);

    let i = 5.2;
    console.log(typeof i);

    i = parseInt(i);
    console.log(i);
    return newArr;
    // Only change code above this line
  };
  
  const squaredIntegers= squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])
  //const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);