import {useState} from 'react';

function Square({tato, onTatoClick}) {
  //const [tato, chopTato] = useState(null);
  //function handleClick() {
  //   chopTato('🥔') 
  // }
  // return (
  // <button 
  //   className="square"
  //     onClick={handleClick}
  //     >
  //     {tato}
  //     </button>); 

  return (
  <button className="square" onClick={onTatoClick}>
    {tato=="okra"? <img src="poisontato.webp" height="30px" width="30px"></img>: tato}
    </button>
  );

}



export default function Board() {
    const [tatoIsNext, setTatoIsNext] = useState(true);
    const [squares, setTato] = useState(Array(9).fill(null));
      function handleClick(i) {
        if (squares[i]) {
          return;
        }
        const nextTato = squares.slice();
        if (tatoIsNext) {
          nextTato[i] = "🥔";
        }   else {
        nextTato[i] = "okra";
      }
      setTato(nextTato);
      setTatoIsNext(!tatoIsNext);
  }
  return (
     <>
      <div className="board-row">
        <Square tato={squares[0]} onTatoClick={() => handleClick(0)} />
        <Square tato={squares[1]} onTatoClick={() => handleClick(1)} />
        <Square tato={squares[2]} onTatoClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square tato={squares[3]} onTatoClick={() => handleClick(3)} />
        <Square tato={squares[4]} onTatoClick={() => handleClick(4)} />
        <Square tato={squares[5]} onTatoClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square tato={squares[6]} onTatoClick={() => handleClick(6)} />
        <Square tato={squares[7]} onTatoClick={() => handleClick(7)} />
        <Square tato={squares[8]} onTatoClick={() => handleClick(8)} />
      </div>
    </>
  );
} 
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
} 
