var a;
var b = 0;
function check(x, name) {
	if (x == null) {
		console.log(name + ' == null');
		if (x === null) {
			console.log(name + ' === null');
		}
		if (typeof x == undefined) {
			console.log(name + ' is undefined');
		}
	}
}
check(a, 'a');
check(b, 'b');
