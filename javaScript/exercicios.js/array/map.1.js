/**
 * map serve para transformar um array em outro 
 * mapeando um array para outro array com seus
 * elementos transformados
 */

 const nums = [ 1, 2, 3, 4, 5, 6 ];

 // map = for com proposito

 let resultado = nums.map(function(e) {
     return e * 2;
 })

 console.log(nums, resultado)
// [ 1, 2, 3, 4, 5, 6 ] [ 2, 4, 6, 8, 10, 12 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);


console.log(resultado)

