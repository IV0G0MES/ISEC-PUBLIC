'use strict';
const panelControl=document.getElementById("panel-control");
const panelGame= document.getElementById("game");
const btLevel=document.getElementById("btLevel");
const message=document.getElementById("message");
const btPlay=document.getElementById("btPlay");
const listItem=document.querySelectorAll(".list-item");
const cardsLogos=["angular","bootstrap","html","javascript","vue","svelte","react","css","backbone","ember"];
const cards=document.querySelectorAll(".card");
let flippedCards;
let totalFlippedCards;


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
    flippedCards=[];
    totalFlippedCards=0;
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

        x.addEventListener('click',funcClickCard, { once: true });
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
    }
    else{
        setTimeout(() => {
            console.log("Não são Iguais");
            for(let x of cards){
                x.classList.remove('flipped');
                x.addEventListener('click', funcClickCard, { once: true });
            }
        }, 500);
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



