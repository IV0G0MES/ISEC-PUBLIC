'use strict';
const panelControl=document.getElementById("panel-control");
const panelGame= document.getElementById("game");
const btLevel=document.getElementById("btLevel");
const message=document.getElementById("message");
const btPlay=document.getElementById("btPlay");
const listItem=document.querySelectorAll(".list-item");

function reset(){
    panelGame.style.display='none';
    message.textContent='';
    message.classList.remove('hide');
    listItem.forEach(function myfunction(listItem){
        listItem.classList.remove('gameStarted');
    });
    if(btLevel.value==0){
        btPlay.disabled=true;
    }
    else{
        btPlay.disabled=false;
        panelGame.style.display='grid'
    }
    }

function startGame(){
    btLevel.disabled=true;
    btPlay.textContent='Terminar Jogo';
    message.classList.add('hide');
    function adicionar(){

    }
    listItem.forEach(function myfunction(listItem){
        listItem.classList.add('gameStarted');
    });
}

function stopGame(){
    btPlay.textContent='Iniciar Jogo';
    btLevel.disabled=false;
    reset();
}
 
reset();
btLevel.addEventListener('change',reset);
btPlay.addEventListener('click', function jogo(){
    if(btPlay.textContent=="Iniciar Jogo"){
        startGame();
    }
    else{
        stopGame();    
    }
});
panelGame.addEventListener('click',function myfunction(){
    if(btPlay.textContent=='Iniciar Jogo'){
        message.textContent='Clique em Iniciar o Jogo!';
    }
    else{
        message.textContent='';
    }
})
