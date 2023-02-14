function myLocalScope() {
    // Only change code below this line
  let myVar = 1;
  console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  let myVar =0;
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
// inside myLocalScope 1
// outside myLocalScope 0

