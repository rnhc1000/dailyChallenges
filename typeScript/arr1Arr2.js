function frankenSplice(arr1, arr2, n) {

  let ins = arr2[n];
  //console.log(ins)
  console.log("Antes do slice", arr2)
  /**
   * copiar um array usando slice()
   * slice-> retorna um array passados start e end
   */
  let localArray = arr2.slice();
  //arr2 = [...arr1, ...arr2];
  console.log("Depois do slice", arr2)
  console.log("LocalArray", localArray)
  /**
   * splice(start, deleteCount)
   * Insere a partir de n, arr2
   */
  localArray.splice(n, 0, ...arr2);

  console.log("Splice", localArray)
  /**
   * retira as duplicatas
   */
  localArray = [... new Set(localArray)];
  console.log("Set", localArray);

  // //let arr3 = arr2.splice(n);
  // arr2.unshift(ins);
  // arr2 = [...new Set(arr2)]

  console.log(arr1)
  console.log(arr2)
  console.log(localArray)
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
  // frankenSplice([1, 2, 3], [4, 5], 1);
  // frankenSplice([1, 2, 3], [], 0);