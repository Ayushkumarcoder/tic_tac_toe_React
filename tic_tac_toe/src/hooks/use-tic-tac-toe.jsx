import { useState } from 'react'


const initialBoard = ()=>Array(9).fill(null);

const useTicTacToe = () =>{
    const [board, setBoard] = useState(initialBoard());

    const [isXNext, setIsXNext] = useState(true);

    const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];

    const calculateWinner = (currentBoard) => {
        for (let pattern of winningPattern) {
            const [a, b, c] = pattern;
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a]; // Return "X" or "O"
            }
        }
        return null; 

    }

    const handleClick = (index) => {
        const winner = calculateWinner(board);

        if(winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);

    }

    const getStatusMessage = () => {
        const winner = calculateWinner(board);

        if (winner) {
            return ` Player  ${winner} wins `;
        } else if (board.every(square => square !== null)) {
            return 'Game is Draw!';
        } else {
            return `Next Player: ${isXNext ? 'X' : 'O'}`;
        }

    }

    const resetGame = () => {
        setBoard(initialBoard());
        setIsXNext(true);

    }

    return {board, handleClick, getStatusMessage, resetGame, calculateWinner}
}

export default useTicTacToe;