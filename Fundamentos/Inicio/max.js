function minMax(a,b) {

    let min = 0;
    let max = 0;

    a > b ? max = a : min = b;
    if (max) {
        return max;
    } else {
        return min
    }
}

console.log(minMax(4, -5));