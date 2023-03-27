 function getDropdown(countries) {
    const ret = [];
    for (let i=0; i<countries.length; i++) {
        ret[i] =  `<option value="${countries[i].toLowerCase()}">${countries[i]}</option>`;
    }
    let menu='<option value="">Please select</option>';
    ret.unshift(menu);
    return ret.toString();
}


const countries = ['Netherlands', 'Japan', 'Mongolia'];
let a = "";
a = getDropdown(countries);
// let menu='<option value="">Please select</option>';
// console.log({a});
// a.unshift(menu);
console.log(a);