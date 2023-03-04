// Instead, use modules
const userModule = (() => {
  let name = "John Doe";
  let age = 30;
  let address = "123 Main St.";

  return {
    getUser: () => ({ name, age, address })
  };
})();



console.log(userModule.getUser());

// Instead, use Web Workers
//const worker = new Worker("./worker.js");
//worker.postMessage({ data: "Hello, Worker!" });

// Instead, consider performance
let input = [1,2,3,4,5];
const fastFunction = (input) => input.reduce((a, b) => a + b, 0);

console.log(fastFunction(input));


