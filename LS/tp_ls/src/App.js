import "./styles/App.css";
import { useState } from "react";
import React from "react";
import { Header, Board, Menu, Cell, Minicell} from "./components";

// Componente principal da aplicação
function App() {
  return (
    <div className="bg-dark">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
