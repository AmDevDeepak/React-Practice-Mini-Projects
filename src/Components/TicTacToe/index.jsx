import { useEffect, useState } from "react";
import "./style.css";
const Index = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isPlayerXTurn, setIsPlayerXTurn] = useState(true);
  const [status, setStatus] = useState("");

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

  const handleClick = (squareNo) => {
    let copySquares = [...squares];
    if (findWinner(copySquares) || squares[squareNo]) return;
    copySquares[squareNo] = isPlayerXTurn ? "X" : "O";
    setIsPlayerXTurn(!isPlayerXTurn);
    setSquares(copySquares);
  };

  const findWinner = (square) => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (square[a] === square[b] && square[b] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsPlayerXTurn(true);
    setStatus("");
  };
  useEffect(() => {
    if (!findWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("It's a draw!");
    } else if (findWinner(squares)) {
      setStatus(`Winner is ${findWinner(squares)}. Please restart the game`);
    } else {
      setStatus(`Next player is ${isPlayerXTurn ? "X" : "O"}`);
    }
  }, [squares, isPlayerXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="status">
        <h1> {status} </h1>
      </div>
      <button id="restart" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default Index;

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
