import React, { useState } from "react";
import Cell from "../cell/cell.component";
import "./board.css";

function Board() {
  const [cell, setCell] = useState(Array(9).fill(""));
  let [vencedor, setVencedor] = useState("");
  let [desativar,setDesativado]=useState(Array(9).fill(false));
  //let [desativar,setDesativado]=useState(false);
  let [jogador, setJogador]=useState(1);
  let [posJogada,setPosJogada]=useState();

  function handleCell(index,value){
    if(desativar===true){return;}
    cell[index]=value
    setCell(cell);  
    //console.log(cell);
    let winner=verificaVencedorCell();
    
    //console.log(winner);
    if(winner!==""){
      setDesativado(Array(9).fill(true));
      setVencedor(winner);

      //console.log(vencedor); // Empty string (well nao estou a usá-lo para nada neste momento)
      mostraVencedor(winner);
    }
    else{
      console.log("Ainda ninguem, ganhou");
    }
  }

function handleJogador(value){
  setJogador(value);
}

function handleJogada(value){
  setPosJogada(value);
  handleDesativar();
}

function handleDesativar(){
  let copia=Array(9).fill(true);
  copia[posJogada]=false;
  setDesativado(copia);
  
  console.log(desativar);
}
  function verificaVencedorCell() {
    if (
      cell[0] === cell[1] &&
      cell[0] === cell[2] &&
      cell[0] !== ""
    ) {
      return cell[0];

    } else if (
      cell[3] === cell[4] &&
      cell[3] === cell[5] &&
      cell[3] !== ""
    ) {
      return cell[3];
    } else if (
      cell[6] === cell[7] &&
      cell[6] === cell[8] &&
      cell[6] !== ""
    ) {
      return cell[6];
    } else if (
      cell[0] === cell[3] &&
      cell[0] === cell[6] &&
      cell[0] !== ""
    ) {
      return cell[0];
    } else if (
      cell[1] === cell[4] &&
      cell[1] === cell[7] &&
      cell[1] !== ""
    ) {
      return cell[1];
    } else if (
      cell[2] === cell[5] &&
      cell[2] === cell[8] &&
      cell[2] !== ""
    ) {
      return cell[2];
    } else if (
      cell[0] === cell[4] &&
      cell[0] === cell[8] &&
      cell[0] !== ""
    ) {
      return cell[0];
    } else if (
      cell[2] === cell[4] &&
      cell[2] === cell[6] &&
      cell[2] !== ""
    ) {
      return cell[2];
    } else {
      return "";
    }
  }

function mostraVencedor(winner){
  vencedor=winner;
  if(vencedor==="X"){
    console.log("Ganhou o "+vencedor);
  }else if(vencedor==="O"){
    console.log("Ganhou o "+vencedor);
  }else{
    console.log("Jogo ficou empatado!");
  }   
}
  return (
    <div className="board">
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(0,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(0)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(1,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(1)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(2,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(2)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(3,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(3)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(4,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(4)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(5,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(5)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(6,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(6)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(7,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(7)} pos={posJogada}/>
      <Cell jogador={jogador} setJogador={(value)=>handleJogador(value)} preenche={(value)=>handleCell(8,value)} jogada={(value)=>handleJogada(value)} desativado={desativar} setDesativado={()=>handleDesativar(8)} pos={posJogada}/>      
    </div>
  );
}

export default Board;
