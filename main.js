let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.setAttribute("onclick", "markCell(event)");
});

const Player = (name, moves, turn) => {
    const checkTurn = () => {
        return turn;
    };
    const switchTurn = () => {
        turn = !turn;
    };
    const recordMoves = (cell) => {
        moves.push(cell);
    };
    return { name, moves, turn, checkTurn, switchTurn, recordMoves };
};

const playerOne = Player("Player 1", [], true);
const playerTwo = Player("Player 2", [], false);

function markCell(e) {
    const location = parseInt(e.target.getAttribute("data-cell"));

    const value = e.target.getAttribute("data-valid");
    const valid = checkCell(value);

    if (valid) {
        e.target.setAttribute("data-valid", "1");

        if (playerOne.checkTurn()) {
            e.target.innerText = "X";

            playerOne.recordMoves(location);

            console.log(playerOne.moves);

            playerOne.switchTurn();
            playerTwo.switchTurn();
        } else {
            e.target.innerText = "O";
            playerTwo.switchTurn();
            playerOne.switchTurn();
        }
    } else {
        // no moves
    }
}

function checkCell(cell) {
    if (cell == 0) {
        return true;
    } else {
        return false;
    }
}

function winCondition(Player) {
    const winPatterns = [
        [1, 2, 3],
        [4, 5, 5],
        [7, 8, 9],

        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],

        [1, 5, 9],
        [3, 5, 7],
    ];
}
