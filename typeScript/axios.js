import axios from "axios";
async function getData() {
  const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
  return result;
}

let a = [];
for (let i=0; i < 10; i++) {
  const result = await getData();
  a.push(result);
}

console.log(a)

var myModule = (function () {
  var myVariable = "This is my variable";
  function myFunction () {
    console.log(myVariable);
  }
  return function () {
    myFunction();
  };
})();

myModule();
console.log(myModule.myVariable);

const samplePromise = () => Promise.resolve('A');
function f() {
  samplePromise().then(result => console.log(result));
  console.log('B');
}

async function g() {
  console.log(await samplePromise());
  console.log('B');
}

f();
g();