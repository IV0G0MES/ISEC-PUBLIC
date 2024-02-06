'use strict';
const panelControl=document.getElementById("panel-control");
const panelGame= document.getElementById("game");
const btLevel=document.getElementById("btLevel");
const message=document.getElementById("message");
const btPlay=document.getElementById("btPlay");
const listItem=document.querySelectorAll(".list-item");
const cardsLogos=["angular","bootstrap","html","javascript","vue","svelte","react","css","backbone","ember"];
const cards=document.querySelectorAll(".card");

// Algoritmo Fisher-Yates - Algoritmo que baralha um array.
const shuffleArray = array => { 
    for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i]; array[i] = array[j]; array[j] = temp;
         } 
        }
        

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
    listItem.forEach(function myfunction(listItem){
        listItem.classList.add('gameStarted');
    });
    shuffleArray(cardsLogos);
    let flag = cards.length / 2;
    let numero=0;
    //showCards();
    for (let x of cards){
        if(flag == numero){
            numero = 0;
        }
        const random=Math.floor(Math.random() * cards.length) + 1;
        let img=x.querySelector('.card-front');
        x.style =`Order: ${random}`;
        x.setAttribute("data-logo",cardsLogos[numero]);
        img.setAttribute("src",`images/${cardsLogos[numero]}.png`);
        numero++;
        x.addEventListener("click",flipCard);
        x.addEventListener('mouseover',function myfunction(){
            this.classList.add('cardHover');
        });
    x.addEventListener('mouseout',function myfunction(){
        this.classList.remove('cardHover');
    });
    }
    
}

function stopGame(){
    btPlay.textContent='Iniciar Jogo';
    btLevel.disabled=false;
    hideCards();
    reset();
}

function showCards(){
    for (let x of cards){
        x.classList.add("flipped");
    }
}

function hideCards(){
    for (let x of cards){
        x.classList.remove("flipped");
    }
}

function flipCard(){
    this.classList.add('flipped');
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



