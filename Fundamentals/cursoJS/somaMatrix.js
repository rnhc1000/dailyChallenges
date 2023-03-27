 function getNextAge(age) {

    console.log(typeof(age));
    if ( typeof(age) === "string") {
        console.log("entrei aqui....");
        return 0;
    }
    age=Number.parseInt(age);
    console.log(age);
    return age+1;
}

let a = getNextAge(10);
console.log(a);


function useCalculator(apps) {

    apps.push('Calculator');
    return apps;

}

const app=['iPhone'];
const x = useCalculator(app);
console.log({x});

const grades = [10, 8, 9];
let sum = 0;
grades.forEach(function(grade) {
    sum = sum+grade;
});

console.log(sum);