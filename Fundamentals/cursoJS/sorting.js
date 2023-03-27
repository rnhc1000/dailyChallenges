const x = (a,b) =>  a-b;
// se < 0, a vem antes de b else b vem antes a, igual nada muda
const y =(a,b) => a === b ? 0 : a < b ? 1 : -1

x(3,4);
console.log(x)

let xx = [3,2,1];

xx.sort(x);
console.log(xx)
xx.sort(y);
console.log(xx)

function alphabeticalOrder(arr) {
    // Only change code below this line
  
const x = (a,b) => a-b;
    return  arr.sort();
  
    // return newArr
    // Only change code above this line
  }
  
  let a = alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

  console.log(a)