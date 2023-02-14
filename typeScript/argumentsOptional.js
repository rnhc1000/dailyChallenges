function addTogether() {
  let countArgs = arguments.length;
  let sum = 0;
  if (countArgs >= 2) {
    sum = arguments.reduce((sum,el) => sum+=el);
    return sum;
  } else {
    return addTogether(arguments[0])
  }
}

function addTogetherx() {
    let countArgs = arguments.length;
    let x = arguments[0];
    let y = arguments[1];
    let sum ="";
    if (countArgs === 2) {
      if(Number.isInteger(x) && Number.isInteger(y)) {
        console.log("São números....");
        console.log(x,y);
        sum = x+y;
        console.log(sum)
        return sum;
      } else {
        return undefined;   
      }
    }
      if (!Number.isInteger(arguments[0])) { 
        return undefined;
      }
    console.log(countArgs);
    }
  
  console.log(addTogetherx(2,[3]));
//console.log(addTogetherx(2));


function addTogetherxx(...args) {
    const [first, second] = args;
    if (args.length === 1 && typeof first === 'number') {
      return num => {
        if (typeof num === 'number') {
          return first + num;
        }
      }
    }
    if (typeof first === 'number' && typeof second === 'number') {
      return first + second;
    }
  }