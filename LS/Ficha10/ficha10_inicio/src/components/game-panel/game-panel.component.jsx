import React from "react";
import "./game-panel.css";
import { Card } from "../index";

function GamePanel({ cards, selectedLevel }) {
  const getGameClass = () => {
    if (selectedLevel === "2") {
      return "intermedio";
    } else if (selectedLevel === "3") {
      return "avancado";
    } else {
      return "";
    }
  };
  let gameClass = getGameClass();
  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game" className={gameClass}>
        {cards.map((card) => (
          <Card key={card.key} name={card.name} />
        ))}
      </div>
    </section>
  );
}

export default GamePanel;
