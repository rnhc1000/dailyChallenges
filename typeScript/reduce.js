let myArray = [1, 2, 3];
let initialValue = 0;
let arraySum = myArray.reduce(
    (previous, current) => previous + current, initialValue);
console.log(`Sum of array values is: ${arraySum}`);