import React, { useState } from "react";
import MiniCell from "../minicell/minicell.component";
import "./cell.css";

function Cell(props) {
  let {jogador,setJogador, preenche,jogada , desativado, setDesativado}=props;
  const [minicell, setMinicell] = useState(Array(9).fill(""));
  //let [jogador, setJogador] = useState(1);
  let [desativar, setDesativar] = useState(false);
  let [vencedorC, setVencedorC] = useState("");

function handleClick(i, desativar) {
  console.log(i);
  if(jogador===1){
    jogador=Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  }
  if (minicell[i] || desativar === true ||desativado[i]===true) {
    return;
  } else {
    if (jogador % 2 === 0) {
      minicell[i] = "O";
      jogada(i);
      setJogador(jogador++);
    } else {
      minicell[i] = "X";
      jogada(i);
      setJogador(jogador++);
    }
    setMinicell(minicell);
    setJogador(jogador++);
    verificaVencedor(minicell, desativar);
  }
}


function verificaVencedor() {
  if (
    minicell[0] === minicell[1] &&
    minicell[0] === minicell[2] &&
    minicell[0] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[0] = "ov";
      minicell[1] = "ov";
      minicell[2] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[0] = "xv";
      minicell[1] = "xv";
      minicell[2] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[3] === minicell[4] &&
    minicell[3] === minicell[5] &&
    minicell[3] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[3] = "ov";
      minicell[4] = "ov";
      minicell[5] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[3] = "xv";
      minicell[4] = "xv";
      minicell[5] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[6] === minicell[7] &&
    minicell[6] === minicell[8] &&
    minicell[6] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[6] = "ov";
      minicell[7] = "ov";
      minicell[8] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[6] = "xv";
      minicell[7] = "xv";
      minicell[8] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[0] === minicell[3] &&
    minicell[0] === minicell[6] &&
    minicell[0] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[0] = "ov";
      minicell[3] = "ov";
      minicell[6] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[0] = "xv";
      minicell[3] = "xv";
      minicell[6] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[1] === minicell[4] &&
    minicell[1] === minicell[7] &&
    minicell[1] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[1] = "ov";
      minicell[4] = "ov";
      minicell[7] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[1] = "xv";
      minicell[4] = "xv";
      minicell[7] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[2] === minicell[5] &&
    minicell[2] === minicell[8] &&
    minicell[2] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[2] = "ov";
      minicell[5] = "ov";
      minicell[8] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[2] = "xv";
      minicell[5] = "xv";
      minicell[8] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[0] === minicell[4] &&
    minicell[0] === minicell[8] &&
    minicell[0] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[0] = "ov";
      minicell[4] = "ov";
      minicell[8] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[0] = "xv";
      minicell[4] = "xv";
      minicell[8] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else if (
    minicell[2] === minicell[4] &&
    minicell[2] === minicell[6] &&
    minicell[2] !== ""
  ) {
    if (jogador % 2 === 0) {
      minicell[2] = "ov";
      minicell[4] = "ov";
      minicell[6] = "ov";
      setDesativar(true);
      setVencedorC("O");
      preenche("O");
    } else {
      minicell[2] = "xv";
      minicell[4] = "xv";
      minicell[6] = "xv";
      setDesativar(true);
      setVencedorC("X");
      preenche("X");
    }
  } else {
    return "";
  }
}

return (
  <div className="cell">
    {vencedorC === "X" || vencedorC === "O" ? (
      <img
        className="imgWinner"
        alt=""
        src={"images/" + vencedorC + "v.png"}
      ></img>
      ) : (
        ""
      )}
      <MiniCell
        id="mini"
        value={minicell[0]}
        onMiniCellClick={() => handleClick(0, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[1]}
        onMiniCellClick={() => handleClick(1, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[2]}
        onMiniCellClick={() => handleClick(2, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[3]}
        onMiniCellClick={() => handleClick(3, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[4]}
        onMiniCellClick={() => handleClick(4, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[5]}
        onMiniCellClick={() => handleClick(5, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[6]}
        onMiniCellClick={() => handleClick(6, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[7]}
        onMiniCellClick={() => handleClick(7, desativar)}
      />
      <MiniCell
        id="mini"
        value={minicell[8]}
        onMiniCellClick={() => handleClick(8, desativar)}
      />
    </div>
  );
}

export default Cell;