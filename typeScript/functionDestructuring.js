
function getItens(fruitlist, favoriteFruit, ...args) {
  return [...fruitlist,  favoriteFruit,...args]
}


console.log(getItens(["banana", "apple"], "pear", "orange"))