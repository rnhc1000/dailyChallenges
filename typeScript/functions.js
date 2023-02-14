// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
function twoFer(name) {
    if (name === void 0) { name = "you"; }
    return "One for ".concat(name, ", one for me");
}
var a = twoFer();
var b = twoFer("Ricardo");
console.log(a);
console.log(b);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
function isLeapYear(ano) {
    if (ano % 4 === 0 && ano % 100 != 0) {
        return true;
    }
    else if (ano % 400 === 0) {
        return true;
    }
    return false;
}
var anos = [2012, 2013, 2016, 2022, 2024];
for (var i in anos) {
    console.log(isLeapYear(anos[i]));
}
function printName(name) {
    console.log("Nome: ".concat(name.first, " ").concat(name.last));
}

printName({ first: 'Ricardo', last: 'Ferreira' });
