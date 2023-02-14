let animal = {
  eats: true,
  dangerous: true
};

let cat = Object.create(animal, {
  meows: {
    value: true
  }
});
/**
 * prototype inheritance;
 * [[prototype]]
 */
console.log(animal.dangerous); // true



// Updating cat object
cat.dangerous = true; 

console.log(animal.dangerous); // true
console.log(cat.dangerous); // false
console.log(animal)
console.log(cat)

let arr0 = [
  [1, 1],
  [2, 3],
  [3, 5],
].reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue), 
  [] // initial value
);
// arr0: [ 1, 1, 2, 3, 3, 5 ]
//arr0 = [...new Set()];

console.log(arr0);

let arr = [...new Set(arr0)];
console.log(arr)