class Node
{
	constructor(data)
	{
		this.data=data;
		this.left=null;
		this.right=null;
	}
}

let y = 5;
console.log(typeof y)
function doubleNumber(x) {
    console.log(x);
    if (isNaN(x)) {
        throw "Sorry, This is not a number!!!";
    }
    return parseFloat((x**2).toFixed(2,10));
}

function getNumber() {
    try {
        let x = "A";
        let response = doubleNumber(x);
        console.log(response);
    } catch (e) {
        console.error(`doubleNumber error: ${e}`);
    }
}
getNumber();


let name ="Ricardo";
console.log(name.length);

let tries=0;
const a = () => {
    let tries=0;
    tries+=1;
    return tries;
}
console.log(a());

const quarters = [1,2,3,4]

console.log(quarters.at(-1));
console.log(quarters.length)