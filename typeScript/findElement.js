/**
 *
 * @param {*} givenArray
 * @param {*} func
 * @returns givenArrayay indicating position of numbers even or odd
 * @author Ricardo Ferreira <ricardo@ferreiras.dev.br>
 * @version 1.0
 *
 */

function findElement(givenArray, findOdd) {
  let position = [];
  let status = [];
  for (let index in givenArray) {
    status[index] = findOdd(givenArray[index]);
    if (status[index]) {
      position[index] = index;
    }
  } 
  const sanitizedPosition = position.filter((position) => position !== "");
  const response = status.filter((status) => status === true);
  console.log(givenArray);

  return sanitizedPosition;
}

function findOdd(num) {
  return num % 2 === 1;
}

function findEven(num) {
  return num % 2 === 0;
}

let x = findElement([1, 2, 3, 7, 15, 147], findOdd);


console.log(x);

x = findElement([1, 2, 3, 7, 15, 147, 154, 204], findEven);
console.log(x);
