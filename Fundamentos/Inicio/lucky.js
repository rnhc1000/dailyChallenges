function f(arr) {

  let dupes = arr.reduce(function (sum, element, idx) {
    if (arr.indexOf(element) !== idx && sum.indexOf(element) < 0)
      sum.push(element);
    return sum;
  }, []);

}

let a = [1, 2, 3, 4, 6, 6, 3, 7, 4, 5, 6, 6, 7, 3, 3, 3, 3, 3]
let b = [1, 2, 2, 3, 3, 3]
let c = [2, 2, 2, 3, 3]
//console.log(f(a));

function g(arr) {
  // let response = [];
  // let analyze = []
  // let k = 0;
  // let c = 0;
  // for (let l = 0; l < arr.length; l++) {
  //   for (k = 0; k < arr.length; k++) {
  //     if (l !== k) {
  //       if (arr[l] === arr[k]) {
  //         response[c] = arr[l];
  //         c++;
  //       }
  //     }
  //   }

  // }
  let counts = {};
  let dup = [];
  //console.log("Response", response)
  let dupes = arr.filter(function (item, index) {

    if (arr.indexOf(item) !== index) {
      dup[index] = item;
      dup.sort((a, b) => a - b);
      dup = dup.filter((el) => el != null);
    }
  });
  console.log("Dup",dup)

  dup.filter(function (x) { counts[x] = (counts[x] || 0) + 1; });

  //ounts=counts.filter((el) => el !== null)
  console.log("Counts",counts)
  // for (let[key,value] in counts) {
  //   console.log(counts[key])
  // }
  let rx;
  rx = Object.keys(counts)
  console.log("key", rx)
  for (let idx in rx) {
    rx[idx] = parseInt(rx[idx]);
  }

  let ry = Math.max(...rx)
  console.log(ry)
  let r = "";
  let maior = -Infinity;
  for (let [k, v] in counts) {
    if (counts.hasOwnProperty(k)) {
      if (counts[k] > maior) {
        maior = counts[k];
        r = k
      }
    }

    // if (maior < ry) {
    //   return -1;
    // }

  }
  console.log("Maior", maior)
  console.log("Numero", r + " repete", + maior + " vezes");
  return [... new Set(arr)].sort(function (a, b) { return a - b });
}

console.log("A", g(a))
console.log("B", g(b))
console.log("C", g(c))

