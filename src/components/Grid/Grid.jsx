import { useState } from "react";
import Card from "../Card/card";
import './Grid.css'
import CheckWinner from "../Helper/CheckWinner";

function Grid({ numberOfCards }) {

    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); //true = 'O', false = 'X'
    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }

        const winner = CheckWinner(board, turn ? "O" : "X");

        if (winner) {
            setWinner(winner);
        }

        setBoard([...board]);
        setTurn(!turn);
    }

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset">Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">Current Turn : {(turn) ? "You" : "Your Friend"}</h1>
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
    );
}

export default Grid;