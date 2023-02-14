function confirmEnding(str, target) {

    //let a = str.substring(indexStart, indexEnd);
    let idxLast = str.length-1;
    let idxAnterior =0;
    let sizeTarget = target.length;
    let sizeStr = str.length;
    console.log(sizeStr);
    let finding = [];
    if (sizeTarget === 1) {
        str.substring(idxLast) === target;
        return str;
    } else if (str.substring(sizeStr-sizeTarget) === target){

        return str;
    } else {
        return false;
    }
        // for(let i=0; i < sizeTarget-1; i++){
        //     console.log("idxLast " + idxLast);
        //     idxAnterior = idxLast-=i;
        //     console.log("idx -> "+idxAnterior);
        //     finding[i] = str.substring(idxAnterior)
        // }

    }
        // console.log(finding);
        // if(finding === str.substring(idxAnterior) ) {
        //     return str;
        // } else {
        //     return false;
        // }
    

  
let x =   confirmEnding("Abstraction", "action");
console.log(x);
