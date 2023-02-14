function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    console.table(arr);
    item = arr.shift();
    console.table(arr);
    return item;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val >= 10 || val <= 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  console.log(testLogicalOr(25));