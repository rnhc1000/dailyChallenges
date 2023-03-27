function sumGrades(grades) {
    let len = grades.length;
    let sum=0;
    grades.forEach(function(grade){
        sum+=grade;
        console.log(sum);
        });
    return sum;
}

function sumGrade(grades) {
    let sum = 0;
    for (sum in grades)
    {
        console.log(grades[sum]);
        // sum+=grades[sum];
        sum=Number.parseInt(sum) + grades[sum];
    }
    return sum;
}


let g = [10, 20, 30, 40];

let soma=0;

soma = sumGrade(g);

console.log(soma);
