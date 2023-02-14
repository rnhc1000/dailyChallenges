var a = 10;
var var3 = 0;
( () => {
  console.log(a)
  var a = 30;
  console.log(a)
  console.log(var3)
})();

( () => {
  var3 =35;
  console.log(var3);
  var var3 = 45;
  console.log(var3);
  console.log(a);

})();