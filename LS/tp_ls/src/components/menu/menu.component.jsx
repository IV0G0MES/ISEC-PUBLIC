import React, { useState, useRef } from "react";
import "./menu.css";
import Board from "../board/board.component";

function Menu() {
  const [buttonGameModeText, setButtonGameModeText] = useState('Modo de jogo: 1v1');
  const [gamePaused, setGamePaused] = useState(false);
  const [pauseActive, setPauseActive] = useState(false);
  const boardKeyRef = useRef(0);

  const handleClick = () => {
    if (pauseActive) {
      setButtonGameModeText(prevText => (prevText === 'Modo de jogo: 1v1' ? 'Modo de jogo: 1vsPC' : 'Modo de jogo: 1v1'));
    }
  };

  const handlePauseToggle = () => {
    setPauseActive(prevState => !prevState);
  };

  const handleReset = () => {
    if (gamePaused) {
      setGamePaused(false);
      setTimeout(() => {
        setGamePaused(true);
        boardKeyRef.current += 1;
      }, 0);
    }
  };

  const handleStart = () => {
    if (!gamePaused) {
      setGamePaused(true);
    }
  };

  return (
    <div className="menu">
      <button className="buttonPause" onClick={handlePauseToggle}>
        {pauseActive ? 'Pause: On' : 'Pause: Off'}
      </button>
      <button className="buttonGameMode" onClick={handleClick} disabled={!pauseActive}>
        {buttonGameModeText}
      </button>
      <button className="buttonComeca" onClick={handleStart} disabled={gamePaused}>
        Começar
      </button>
      <button className="buttonReset" onClick={handleReset} disabled={!gamePaused}>
        Reset
      </button>
      {gamePaused && <Board key={boardKeyRef.current} />}
    </div>
  );
}

export default Menu;