function steamrollArray(arr) {

    arr = arr.flat(Infinity);
    return arr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));

  function steamrollArrays(arr) {
    const flattenedArray = [];
    // Loop over array contents
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        // Recursively flatten entries that are arrays
        //  and push into the flattenedArray
        flattenedArray.push(...steamrollArray(arr[i]));
      } else {
        // Copy contents that are not arrays
        flattenedArray.push(arr[i]);
      }
    }
    return flattenedArray;
  }
  