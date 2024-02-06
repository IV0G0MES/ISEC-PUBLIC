import React from "react";
import "./game-panel.css";
import { Card } from "../index";

function GamePanel() {
  const cartas = [
    "angular",
    "react",
    "vue",
    "angular",
    "angular",
    "react",
    "vue",
    "angular",
    "angular",
  ];
  return (
    <section className="game-panel">
      <h3 className="sr-only">Peças do Jogo</h3>
      <div id="game">
        {cartas.map((carta) => {
          return <Card className={carta} />;
        })}
      </div>
    </section>
  );
}

export default GamePanel;
