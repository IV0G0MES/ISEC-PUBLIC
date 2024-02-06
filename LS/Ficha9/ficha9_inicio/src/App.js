import "./assets/styles/App.css";
import { useState } from "react";
import {
  Header,
  Footer,
  ControlPanel,
  GamePanel,
  GameOverModal,
} from "./components";

function App() {
  const [gameStarted, setGameSarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const handleGameStart = () => {
    if (setGameSarted === true) {
      setGameSarted(false);
    } else {
      setGameSarted(true);
    }

    const elements = document.querySelectorAll("dl");
    elements.forEach((e) => {
      if (gameStarted === false) {
        e.classList.add("gameStarted");
      } else {
        e.classList.remove("gameStarted");
      }
    });
  };

  const handleLevelChange = (newLevel) => {
    setSelectedLevel(newLevel);
    alert(newLevel);
  };
  return (
    <div id="container">
      <Header />
      <ControlPanel
        gameStarted={gameStarted}
        onGameStart={handleGameStart}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
      />
      <GamePanel />
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida
// export default function App() {
