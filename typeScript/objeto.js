// Setup
function phoneticLookup(val) {
    // Only change code below this line
    const lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    }
    let resultado = "";
    let result = "";

    for (let property in lookup){
        console.log("---");
        console.log(val);
        console.log(property);
        console.log("---");

      val === property ? result = lookup[property] : result = undefined;
      result !== undefined ? resultado = result : result=undefined;
      console.log("+++");
      console.log(val);
      console.log(property);
      console.log(lookup[property]);
      console.log(result);
      console.log("+++");

    };
    console.log(resultado);

    
    // switch(val) {
    //   case lookup.alpha:
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    //     default:
    //     break;
    // }
  
    // Only change code above this line
    return resultado;
  }
  
  let a;
console.log(typeof a);
  if (a) {
    console.log("undefined -> true");
  } else {
    console.log("undefined -> falso");
  }
  console.log(phoneticLookup("charlie"));