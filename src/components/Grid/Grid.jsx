import { useState } from "react";
import Card from "../Slot/Card";
import './Grid.css'
import CheckWinner from "../Helper/CheckWinner";

function Grid({ numberOfCards }) {

    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); //true = 'O', false = 'X'
    const [winner, setWinner] = useState(null);
    let count = 0;

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

    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }

    function checkFull() {
        board.forEach(element => {
            if (element == "O" || element == "X") {
                count++;
            }
        });
        if (count == 9) {
            return true;
        }
        return false
    }

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                    </>
                )
            }
            {
                (checkFull() || winner) && (
                    <button className="reset" onClick={reset}>Reset Game</button>
                )
            }
            <h2 className="turn-highlight">Current Turn : {(turn) ? "You" : "Your Friend"}</h2>
            <div className="grid">
                {board.map((el, idx) => <Card gameEnd={winner} key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
    );
}

export default Grid;