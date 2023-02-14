let comparaComThis = function(param) {
    console.log(this === param);
}

/**
 * o contexto do this neste caso é global
 */
comparaComThis(global);

/**
 * ao usar o bind() vincula o this
 * ao objeto obj....
 * 
 */
const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); //false
comparaComThis(obj); //true por cusa do bind

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global); //false
comparaComThisArrow(module.exports); //true


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // o uso de bind n afeta o this a função arrow
comparaComThisArrow(module.exports);


