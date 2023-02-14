const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(typeof one, typeof two, typeof three)
console.log(one,two,three);