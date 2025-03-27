export const winningCombinations = [
    ["00", "01", "02"], ["00", "11", "22"], ["00", "10", "20"],
    ["01", "11", "21"], ["02", "12", "22"], ["02", "11", "20"],
    ["10", "11", "12"], ["20", "21", "22"]
];

export const checkWinner = (board) => {
    for (let [a, b, c] of winningCombinations) {
        let [rowA, colA] = a.split("").map(Number);
        let [rowB, colB] = b.split("").map(Number);
        let [rowC, colC] = c.split("").map(Number);

        if (
            board[rowA][colA] !== "-" &&
            board[rowA][colA] === board[rowB][colB] &&
            board[rowB][colB] === board[rowC][colC]
        ) {
            return board[rowA][colA]; // Returns the winning player (❌ or 🟢)
        }
    }
    return null; // No winner yet
};

export const isDraw = (board) => {
    return board.every(row => row.every(cell => cell !== "-"));
};
