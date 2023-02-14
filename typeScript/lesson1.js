var pix = 3.14159;
var myAwesomeVariable = 'So Awesome';
var numCatLives = 9;
function test(a, b) {
    return a * b;
}
var thing = 'hello';
thing = true;
thing = 1;
var thingg = 7;
thingg = 10;
var f = function (a, b) {
    var _a;
    if (a < b) {
        _a = [b, a], a = _a[0], b = _a[1];
    }
    return a % b;
};
var x = f(2, 3);
console.log(x);
var colors = [2, 4, 6];
colors.map(function (color) {
    console.log(color * color);
});
