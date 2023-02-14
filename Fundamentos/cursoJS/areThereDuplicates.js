function areThereDuplicates(a1) {
    try {
        if (!Array.isArray(a1)) {
            throw 'Exception: Informe Valores';
        }
    } catch (err) {
        console.log(err);
    } 
    const lookup = {};
}

let a1 = [1,2,3];
let a2 = [];
console.log(typeof a1);
console.log(areThereDuplicates(a1));
console.log(!a1);

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW",  models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  let x="";
  for (let i in myObj.cars) {
    console.log(myObj.cars[i].name);
    for (let j in myObj.cars[i].models) {
      console.table(myObj.cars[i].models[j]);
    }
  }

  let xx = "Ricardo";
  let xy = "Ricardo";
  let xw = [];
  let xz = [];

  for (const x of xx) {

    xw[x] = x;

  };


  for(const y of xy) {
    xz[y] = y;
  }


  console.log({xx});
  console.log(xz);


  if (xw == xz) {
    console.log('true');
  } else {
    console.log("false");
  }



function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

function findMaxx(arr, max) {
  try {
    if (!Array.isArray(arr)) {
        throw 'Exception: Passe uma matriz como parametro';
    } 
    try {
      if (!max > 0) {
        throw 'Exception: O valor deve ser poitivo e maior do que zero';
      }
    } catch (err) {
      console.log(err);
    } 
  } catch (err){
    console.log(err);
  }

  let maxy= max;
  let maxx =[]
  for (let i in arr) {
    if (arr[i] > maxy) {
      console.log(arr[i]);
      maxx[i]=arr[i];
    } else {
      console.log(arr[i]);
    }
  }
  return maxx;
}
x = findMax(1, 123, 500, 115, 44, 88);

const b = [1, -123, 500, -115, 0, 44, 88];
let m = 25;
let aa = "";
aa = findMaxx(b, m);
console.log("FindMaxx " + aa);

const nome = 'fatfish'
const age = 24
const job = 'Front end development engineer'
const hobbies = 'read, write article'

console.log({ nome, age, job, hobbies })


var as = `<tr> \n \
\t<td>label</td> \n \
\t<td>value</td> \n \
</tr>`;

console.log(as);

function capitalize(name) {
    var firstname = name.substring(0,1);
    firstname = firstname.toUpperCase();
    name=name.toLowerCase();
    name = firstname + name.substring(1,name.length);
    return name;
}
w = "chARLie"
a = capitalize(w);
console.log({a});

function getLastChar(name) {
    // last character of: name
    let m = name.length-1;
    return name.substring(m);
}

let n = "sam";
let r = getLastChar(n);
console.log({r});