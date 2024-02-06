import "./assets/styles/App.css";
import { useState } from "react";
import shuffleArray from "./helpers/shuffle";
import { CARDS_LOGOS, TIMEOUTGAME } from "./constants";
import { useEffect } from "react";
import {
  Header,
  Footer,
  ControlPanel,
  GamePanel,
  GameOverModal,
} from "./components";

let timerId = undefined;
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const [cards, setCards] = useState([]);
  const [timer, setTimer] = useState(TIMEOUTGAME);

  useEffect(() => {
    if (gameStarted) {
      let nextTimer;
      timerId = setInterval(() => {
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });
        if (nextTimer === 0) {
          setGameStarted(false);
        }
      }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);

  const handleGameStart = () => {
    if (setGameStarted === true) {
      setGameStarted(false);
    } else {
      setGameStarted(true);
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

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    let numOfCards;

    switch (value) {
      case "1":
        numOfCards = 3;
        break;
      case "2":
        numOfCards = 6;
        break;
      case "3":
        numOfCards = 10;
        break;
      default:
    }

    const initialCards = shuffleArray(CARDS_LOGOS);
    const slicedInitialCards = initialCards.slice(0, numOfCards);

    let doubledCardsObjects = [];
    slicedInitialCards.forEach((card, index) => {
      doubledCardsObjects.push({
        key: `${card}-${index}`,
        id: card,
        name: card,
      });
      doubledCardsObjects.push({
        key: `${card}-${index}-clone`,
        id: `${card}-clone`,
        name: card,
      });
    });

    doubledCardsObjects = shuffleArray(doubledCardsObjects);
    setCards(doubledCardsObjects);
  };
  return (
    <div id="container">
      <Header />
      <ControlPanel
        gameStarted={gameStarted}
        onGameStart={handleGameStart}
        selectedLevel={selectedLevel}
        onLevelChange={handleLevelChange}
        timer={timer}
      />
      <GamePanel cards={cards} selectedLevel={selectedLevel} />
      <Footer />
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida
// export default function App() {
