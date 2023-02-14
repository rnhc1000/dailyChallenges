const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
    
var tictactoe = function(moves) {
    const aMoves=[] 
    const bMoves=[];
    const len = moves.length;

    if (len < 5) return "Pending";
    moves.forEach((move, index) => {
        const [row,col] = move;
        const flatMove = row * 3 + col;
        // flat a bidirectional array;
        console.log(row, col);
        // console.log(move);
        if (index %2 === 0) {
            console.log(flatMove);
            aMoves.push(move);
            // console.log('Player A', move);
            // console.log(flatMove);
        } else {
            bMoves.push(move);
            // console.log(flatMove);
            // console.log('Payer B', move);
        }
    });

    const aWins = WINNING_COMBINATIONS.some(combination => 
        combination.every(element => aMoves.includes(element)))
    const bWins = WINNING_COMBINATIONS.some(combination => 
        combination.every(element => bMoves.includes(element)))
}


let move = [
    [0,0],
    [2,0],
    [1,1],
    [2,1],
    [2,2]
]; 
tictactoe(move);