'use strict';
let TIMEOUTGAME;
const panelControl=document.getElementById("panel-control");
const panelGame= document.getElementById("game");
const btLevel=document.getElementById("btLevel");
const message=document.getElementById("message");
const btPlay=document.getElementById("btPlay");
const listItem=document.querySelectorAll(".list-item");
const cardsLogos=["angular","bootstrap","html","javascript","vue","svelte","react","css","backbone","ember"];
let cards=document.querySelectorAll(".card");
const labelGameTime=document.getElementById("gameTime");
const labelPoints=document.getElementById("points");
const messageGameOver=document.getElementById("messageGameOver");
let flippedCards;
let totalFlippedCards;
let timer;
let timerId;
let totalPoints;


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
    labelGameTime.removeAttribute('style');
    labelGameTime.textContent=timer;
    createPanelGame();
    }

function startGame(){
    timer=TIMEOUTGAME;
    totalPoints=0;
    flippedCards=[];
    totalFlippedCards=0;
    btLevel.disabled=true;
    btPlay.textContent='Terminar Jogo';
    message.classList.add('hide');
    timerId = setInterval(updateGameTime, 1000);
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

        x.addEventListener('click',funcClickCard, { once: true });
        x.addEventListener('mouseover',function myfunction(){
            this.classList.add('cardHover');
        });
        x.addEventListener('mouseout',function myfunction(){
            this.classList.remove('cardHover');
        });
    }
}

function updateGameTime(){
    labelGameTime.textContent=timer;
    if(timer>0){
        if(timer<=10){
            labelGameTime.style.backgroundColor('red');
        }
        timer--;
    }
    else{
        stopGame();
    }
    
}

function stopGame(){
    btPlay.textContent='Iniciar Jogo';
    btLevel.disabled=false;
    clearInterval(timerId);
    //hideCards();
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

function flipCard(selectedCard){
    selectedCard.classList.add('flipped');
    flippedCards.push(selectedCard.getAttribute('data-logo'));  
    if(flippedCards.length==2){
        checkPair();
    }
}

function funcClickCard(){
    flipCard(this);
}

function checkPair(){
    if(flippedCards[0]==flippedCards[1]){
        console.log("Iguais");
        for(let x of cards){
            if(x.getAttribute('data-logo')==flippedCards[0]){
                x.classList.add('inative');
                let img=x.querySelector('.card-front');
                img.classList.add('grayscale');
            }
        }
        totalFlippedCards=totalFlippedCards+2;
        if(gameover()==true){
            stopGame();
        }
        updatePoints('+');
    }
    else{
        setTimeout(() => {
            console.log("Não são Iguais");
            for(let x of cards){
                x.classList.remove('flipped');
                x.addEventListener('click', funcClickCard, { once: true });
            }
        }, 500);
        updatePoints('-');
    }
    flippedCards=[];
}

function gameover(){
    if(totalFlippedCards==6){
        return true;
    }
    else{
        return false;
    }
}

function classRemoval(a){
    a.classList.remove('flipped');
    a.classList.remove('inative');
    a.querySelector('.card-front').classList.remove('grayscale');
}

function stopGame(){
    modalGameOver.style.display = 'block';

    cards.forEach(classRemoval);
    for(let x of cards){
        x.removeEventListener('click',funcClickCard, { once: true });
    }
    clearInterval(timerId);
    messageGameOver.textContent='Pontuação: '+totalPoints;
}
 
function updatePoints(a){
    if(a=='+'){
        if(btLevel.value==1){totalPoints=timer*3+totalPoints;}
        if(btLevel.value==2){totalPoints=timer*6+totalPoints;}
        if(btLevel.value==3){totalPoints=timer*10+totalPoints;}
    }
    else{
        if(totalPoints<5){
            totalPoints=0;
        }
        else{
            totalPoints-=5;
        }
    }
    labelPoints.textContent=totalPoints;
}

function createPanelGame(){
    panelGame.className='';
    panelGame.innerHTML='';
    let div=document.createElement('div');
    div.setAttribute('class','card');
    let img=document.createElement('img');
    img.setAttribute('class','card-back');
    img.setAttribute('src','images/ls.png');
    let img2=document.createElement('img');
    img2.setAttribute('class','card-front');
    div.appendChild(img);
    div.appendChild(img2);
    

    if(btLevel.value==1){
        TIMEOUTGAME=10;
        for (let i = 0; i < 6; i++) {
            let clone=div.cloneNode(div);
            panelGame.appendChild(clone);
            panelGame.setAttribute('class','basico');
        }
    }
    if(btLevel.value==2){
        TIMEOUTGAME=60;
        for (let i = 0; i < 12; i++) {
            let clone=div.cloneNode(div);
            panelGame.appendChild(clone);
            panelGame.setAttribute('class','intermedio');
        }

    }
    if(btLevel.value==3){
        TIMEOUTGAME=180;
        for (let i = 0; i < 20; i++) {
            let clone=div.cloneNode(div);
            panelGame.appendChild(clone);
        }
        panelGame.setAttribute('class','avancado');
    }
    cards=panelGame.childNodes;
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



