import { useState } from "react";
import Box from "./Box";
export default function Square() {
  const [index, setIndex] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [isTie, setIsTie] = useState(false);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (index[a] && index[a] === index[b] && index[a] === index[c]) {
        return index[a];
      }
    }
    return false;
  };
  const winner = checkWinner();

  const handleClick = (i) => {
    const copy = [...index];
    if (index[i] !== null) {
      return;
    }
    copy[i] !== null;
    copy[i] = isXTurn ? "X" : "O";
    console.log("clicked" + i);
    setIndex(copy);
    setIsXTurn(!isXTurn);
  };
  return (
    <>
      {winner ? (
        <>
          <h1>{winner} won</h1>
          <button onClick={() => setIndex(Array(9).fill(null))}>
            Play Again
          </button>
        </>
      ) : (
        <>
          <div style={{ textAlign: "center" }}>{isXTurn ? "X" : "O"} Turn</div>
          <div className="square">
            <Box onClick={() => handleClick(0)} value={index[0]} />
            <Box onClick={() => handleClick(1)} value={index[1]} />
            <Box onClick={() => handleClick(2)} value={index[2]} />
          </div>
          <div className="square">
            <Box onClick={() => handleClick(3)} value={index[3]} />
            <Box onClick={() => handleClick(4)} value={index[4]} />
            <Box onClick={() => handleClick(5)} value={index[5]} />
          </div>
          <div className="square">
            <Box onClick={() => handleClick(6)} value={index[6]} />
            <Box onClick={() => handleClick(7)} value={index[7]} />
            <Box onClick={() => handleClick(8)} value={index[8]} />
          </div>
        </>
      )}
    </>
  );
}
