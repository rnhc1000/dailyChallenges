function staircase(n) {
    // Write your code here
    let char='#';
    let view='#';
    let space=" ";
    let k = n;
    for (let i=1; i<=n; i++) {
        view = space.repeat(k-1);
        console.log(view+char.repeat(i));
        k--;
    }
}

staircase(6);