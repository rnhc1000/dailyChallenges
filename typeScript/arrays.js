var names = ["Ricardo", "Ferreira"];
var age = [2, 4, 6, 8];
var nomes = ["Ricardo", "Ferreira"];
var idade = [2, 4, 6, 8];
var activeUsers = [];
activeUsers.push("Ricardo", "Ferreira");
var coords = [];
coords.push({ x: 23, y: 8 });
coords.push({ x: 35, y: 27 });
console.table(coords);
for (var ii in coords) {
    console.log(coords[ii]);
}
var board = [
    ["X", "Y", "O"],
    ["X", "Y", "O"],
    ["X", "Y", "O"],
];
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [[]];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
var ax = getTotal([12]);
console.log(ax);
