function uniteUnique(...arr) {
    let uniqueArray = [...arr];
    uniqueArray = uniqueArray.flat();
    console.log(uniqueArray);
    let result =  uniqueArray.filter((item,index) => {
        return uniqueArray.indexOf(item) === index;
    })
    // console.log(result)

    return result;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));