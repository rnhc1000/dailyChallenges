var d = /** @class */ (function () {
    function d() {
        this.x = 0;
    }
    d.prototype.mul = function (n) {
        this.x = n * n;
    };
    d.prototype.mul = function (n) {
        this.x = n + n;
    };
    return d;
}());
var arr = new d;
arr.x = 3;
console.log(arr.mul(9));
