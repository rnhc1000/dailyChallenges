function getUniqueId(fn, args){
    let uniqueId = [];
    uniqueId = uniqueId.concat(fn.name, args);
    return uniqueId.join("|");
    }

function fn(n1,n2) {
    if(typeof n1 === number && typeof n2 === number){
        return n1+n2; 
    } else {
    throw "Apenas números";
    }
}


let a = 30;
let b = 27;
let c = [30,27];

console.log(getUniqueId(fn, c))
