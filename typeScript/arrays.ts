let names: string[] = ["Ricardo", "Ferreira"];
let age: number[] = [ 2,4,6,8];

let nomes: Array<string> = ["Ricardo", "Ferreira"];
let idade: Array<number> = [ 2,4,6,8];


const activeUsers: string[] = [];

activeUsers.push("Ricardo", "Ferreira");


type Point = {
    x: number,
    y: number
}

const coords: Point[] = [];
coords.push({x: 23, y:8});
coords.push({x: 35, y:27});
console.table(coords);

for (let ii in coords){
    console.log(coords[ii]);
}

const board: string[][] = [
                    ["X","Y","O"],
                    ["X","Y","O"],
                    ["X","Y","O"],       
                ];

// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [[]];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string;
    price: number;
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices



function getTotal(products:Product[]): number {

    let total =0;

    for (let product of products) {
        total +=product.price;
    }
    return total;
}

var ax = getTotal([12]);

console.log(ax);