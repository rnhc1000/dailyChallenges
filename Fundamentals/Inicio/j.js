function Foo() {
    this.bar = 10;
}
Foo.prototype.bar = 42;
var foo = new Foo();
console.log("1", foo.bar);
delete foo.bar;
console.log("2", foo.bar);
(function (f) {
    console.log(typeof f);
})([1, 2, 3]);
var x = [1, 2, 3];
x[-1] = -1;
console.log(x[x.indexOf(10000)]);
var a = [1, 'a', { x: 1 }, { y: 2 }, [1, 2], { x: 1 }];
console.log(a.indexOf({ x: 1 }));
var idx = 1;
var count = {};
count: {
    begin: 2;
    baz: ++idx;
}
;
console.log(count.begin + count.idx + idx);
var say = function (name) {
    return { sai: "Welcome  ".concat(name) };
};
console.log(say('Turing'));
// let aa={y:1};
// aa.x =aa;
// let output=JSON.stringify(aa);
// console.log(output);
b: any = [];
var xx = [] + b + 'Turing'.split('');
console.log(xx);
