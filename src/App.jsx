import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <>
      <div className="board">
        <Board />
      </div>
    </>
  );
}

export default App;
