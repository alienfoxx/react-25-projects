import { useEffect, useState } from "react";
import "./style.css";
function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TictacToe() {
  const [squares, setSquare] = useState(Array(9).fill(""));
  const [isXturn, setIsXturn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handelClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXturn ? "X" : "O";
    setIsXturn(!isXturn);
    setSquare(cpySquares);
  }

  function handelRestart() {
    setIsXturn(true);
    setSquare(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw ! Please restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}  Please restart the game`);
    } else {
      setStatus(`Next player is ${isXturn ? "X" : "O"}`);
    }
  }, [squares, isXturn]);
  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handelClick(0)} />
        <Square value={squares[1]} onClick={() => handelClick(1)} />
        <Square value={squares[2]} onClick={() => handelClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handelClick(3)} />
        <Square value={squares[4]} onClick={() => handelClick(4)} />
        <Square value={squares[5]} onClick={() => handelClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handelClick(6)} />
        <Square value={squares[7]} onClick={() => handelClick(7)} />
        <Square value={squares[8]} onClick={() => handelClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handelRestart}>Restart</button>
    </div>
  );
}
