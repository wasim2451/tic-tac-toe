import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const initialState = Array(9).fill(null);
  const [state, setState] = useState(initialState);
  const [Xturn, setXturn] = useState(true);
  // console.log('State', state);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] == state[b] && state[b] == state[c]) {
        return state[a];
      }
    }
    return null;
  };
  const isWinner = checkWinner();
  const handleClick = (index) => {
    if (state[index] != null) {
      return;
    }
    console.log('Square', index, 'clicked !');
    const duplicate = [...state];
    duplicate[index] = Xturn ? '✅' : '❌';
    setState(duplicate);
    setXturn(!Xturn);
  };
  const handleReset = () => {
    setState(initialState);
  };
  return (
    <div>
      <h1>TIC TAC TOE ! </h1>
      {isWinner == null ? <h2>{Xturn ? '✅' : '❌'} Turn </h2> : <></>}

      <div className="board-container">
        {isWinner ? (
          <div id="winner-box">
            <h2>{isWinner} Won the Game !</h2>
            <p>
              <button className="resetButton" onClick={handleReset}>
                Reset
              </button>
            </p>
          </div>
        ) : (
          <>
            <div className="row">
              <Square
                onClick={() => {
                  handleClick(0);
                }}
                value={state[0]}
              />
              <Square
                onClick={() => {
                  handleClick(1);
                }}
                value={state[1]}
              />
              <Square
                onClick={() => {
                  handleClick(2);
                }}
                value={state[2]}
              />
            </div>
            <div className="row">
              <Square
                onClick={() => {
                  handleClick(3);
                }}
                value={state[3]}
              />
              <Square
                onClick={() => {
                  handleClick(4);
                }}
                value={state[4]}
              />
              <Square
                onClick={() => {
                  handleClick(5);
                }}
                value={state[5]}
              />
            </div>
            <div className="row">
              <Square
                onClick={() => {
                  handleClick(6);
                }}
                value={state[6]}
              />
              <Square
                onClick={() => {
                  handleClick(7);
                }}
                value={state[7]}
              />
              <Square
                onClick={() => {
                  handleClick(8);
                }}
                value={state[8]}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Board;
