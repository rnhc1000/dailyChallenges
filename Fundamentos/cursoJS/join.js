function sentensify(str) {
    // Only change code below this line
  let s = [...str];
//   s = s.filter((el) => ());

  a = str.split(/[^a-zA-Z]/);
  console.log(a);
  //console.log(s)
  return (a.join(" "))
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));