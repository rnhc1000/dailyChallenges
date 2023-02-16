function gradingStudents(grades) {
    // Write your code here
    let fail = 40;
    let diff = 0;
    let results = [];
    let i = 0;
    let round=0;
    
    for(let grade of grades) {
        
        if (grade < 38 ) {
            results[i] = grade;
            i++;
        } else if (grade >= 38) {   
            round = grade % 5;
            //console.log("R ", round);
            diff = 5 - round;
            diff >= 3 ? grade : grade+=diff;
            results[i]= grade;
            i++;
        } else if (grade === 0) {
            results[i] = grade;
            i++;
        }
    }
    return results;
}

grades = [4, 5, 6, 7, 8, 10, 19, 39, 0, 55, 41, 42, 43, 80, 70, 40, 67, 68, 98, 100];
grades=[0, 1, 6, 9, 15]
console.log(gradingStudents(grades));