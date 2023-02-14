function whatIsInAName(collection, source) {
    // "What's in a name? that which we call a rose
    // By any other name would smell as sweet.”
    // -- by William Shakespeare, Romeo and Juliet
    const sourceKeys = Object.keys(source);
    console.log(sourceKeys);
  
    // filter the collection
  //   return collection.filter(obj => sourceKeys
  //       .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
  //       .reduce((a, b) => a && b));
  }


  let obj =   [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ];
  let source =   { last: "Capulet" }

  console.log(whatIsInAName(obj, source))

  obj = [{"a": 1, "b": 2, "c": 3}];
  source = {"a": 1, "b": 9999, "c": 3}
//Differences between obj and aray of objects

  console.log(whatIsInAName(obj, source))
