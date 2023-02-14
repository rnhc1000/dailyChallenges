/**
 * Input
 * 7
 * 3 1 14 7 6 7 2
 * Output
 * 2 6 14
 * 7 7 3 1
 */

let armyTeam =  function (team, qty) {

  let teamEven=team.filter((el) => el=el % 2 === 0);
  let teamOdd =team.filter((el) => el=el % 2 === 1);
  let qtyEven =teamEven.length;
  let qtyOdd  =teamOdd.length;

  return ([qtyEven, teamEven, qtyOdd, teamOdd])


}
let team = [ 3, 1, 14, 7, 6, 7, 2];
let qty = 10;
console.log(armyTeam(team, qty))