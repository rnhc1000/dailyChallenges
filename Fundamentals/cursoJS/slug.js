// Only change code below this line
function urlSlug(title) {
  let a = title.split(/\s/)
  a = a.filter((el) => el);
console.log(a);
a = a.join("-")
console.log(a.toLowerCase());
}

function checkPositive(arr) {
    // Only change code below this line
  
    return arr.every((el)=>el>0);
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));
console.log("---------------------------");
// Only change code above this line
let a = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(a);
a= urlSlug(" Winter Is  Coming")
console.log(a);