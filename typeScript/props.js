
function checkObj(obj, checkProp) {
    // Only change code below this line
    // console.log(checkProp);
    // console.log(typeof checkProp);
    let property="";
    for ( property in obj) {
    let existe=false;
       console.log("Verificando as props do obj-> " + property); // if (obj.hasOwnProperty(property)) 
       console.log(typeof property)
       property === checkProp ? existe = true : existe = false;
       console.log(existe);
       if (existe) {
        return obj[property];
       } 
    // if (obj.hasOwnProperty(checkProp)) {
    //     console.log(obj);
  
    //   return obj.checkProp;
    // } else {
    //     return "Not Found";
    // }
    // Only change code above this line
  }
 
    return "Not Found";
}
  const obj = {
    gift: "pony",
    pet: "kitten",
  }
let checkProp = 'pet';
 console.log(checkObj(obj,checkProp));

// for (let c in obj) {
//     console.log(c);
// }
 