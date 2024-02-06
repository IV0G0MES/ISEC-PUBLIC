"use strict";
let TIMEOUTGAME;
const panelControl = document.getElementById("panel-control");
const panelGame = document.getElementById("game");
const btLevel = document.getElementById("btLevel");
const message = document.getElementById("message");
const btPlay = document.getElementById("btPlay");
const listItem = document.querySelectorAll(".list-item");
const cardsLogos = [
  "angular",
  "bootstrap",
  "html",
  "javascript",
  "vue",
  "svelte",
  "react",
  "css",
  "backbone",
  "ember",
];
let cards = document.querySelectorAll(".card");
const labelGameTime = document.getElementById("gameTime");
const labelPoints = document.getElementById("points");
const messageGameOver = document.getElementById("messageGameOver");
const okTop = document.getElementById("okTop");
let scoreList = [
  { nickname: "Ze", points: 331 },
  { nickname: "Maria", points: 321 },
];
let flippedCards;
let totalFlippedCards;
let timer;
let timerId;
let totalPoints;

// Algoritmo Fisher-Yates - Algoritmo que baralha um array.
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

function reset() {
  panelGame.style.display = "none";
  message.textContent = "";
  message.classList.remove("hide");
  listItem.forEach(function myfunction(listItem) {
    listItem.classList.remove("gameStarted");
  });
  if (btLevel.value == 0) {
    btPlay.disabled = true;
  } else {
    btPlay.disabled = false;
    panelGame.style.display = "grid";
  }
  labelGameTime.removeAttribute("style");
  labelGameTime.textContent = timer;
  createPanelGame();
}

function startGame() {
  timer = TIMEOUTGAME;
  totalPoints = 0;
  flippedCards = [];
  totalFlippedCards = 0;
  btLevel.disabled = true;
  btPlay.textContent = "Terminar Jogo";
  message.classList.add("hide");
  timerId = setInterval(updateGameTime, 1000);
  listItem.forEach(function myfunction(listItem) {
    listItem.classList.add("gameStarted");
  });
  shuffleArray(cardsLogos);
  let flag = cards.length / 2;
  let numero = 0;
  //showCards();
  for (let x of cards) {
    if (flag == numero) {
      numero = 0;
    }
    const random = Math.floor(Math.random() * cards.length) + 1;
    let img = x.querySelector(".card-front");
    x.style = `Order: ${random}`;
    x.setAttribute("data-logo", cardsLogos[numero]);
    img.setAttribute("src", `images/${cardsLogos[numero]}.png`);
    numero++;

    x.addEventListener("click", funcClickCard, { once: true });
    x.addEventListener("mouseover", function myfunction() {
      this.classList.add("cardHover");
    });
    x.addEventListener("mouseout", function myfunction() {
      this.classList.remove("cardHover");
    });
  }
  getTopPoints();
}

function updateGameTime() {
  labelGameTime.textContent = timer;
  if (timer > 0) {
    if (timer <= 10) {
      labelGameTime.style.backgroundColor = "red";
    }
    timer--;
  } else {
    stopGame();
  }
}

function stopGame() {
  btPlay.textContent = "Iniciar Jogo";
  btLevel.disabled = false;
  clearInterval(timerId);
  checkTop10();
  //hideCards();
  reset();
}

function showCards() {
  for (let x of cards) {
    x.classList.add("flipped");
  }
}

function hideCards() {
  for (let x of cards) {
    x.classList.remove("flipped");
  }
}

function flipCard(selectedCard) {
  selectedCard.classList.add("flipped");
  flippedCards.push(selectedCard.getAttribute("data-logo"));
  if (flippedCards.length == 2) {
    checkPair();
  }
}

function funcClickCard() {
  flipCard(this);
}

function checkPair() {
  if (flippedCards[0] == flippedCards[1]) {
    console.log("Iguais");
    for (let x of cards) {
      if (x.getAttribute("data-logo") == flippedCards[0]) {
        x.classList.add("inative");
        let img = x.querySelector(".card-front");
        img.classList.add("grayscale");
      }
    }
    totalFlippedCards = totalFlippedCards + 2;
    if (gameover() == true) {
      stopGame();
    }
    updatePoints("+");
  } else {
    setTimeout(() => {
      console.log("Não são Iguais");
      for (let x of cards) {
        x.classList.remove("flipped");
        x.addEventListener("click", funcClickCard, { once: true });
      }
    }, 500);
    updatePoints("-");
  }
  flippedCards = [];
}

function gameover() {
  if (totalFlippedCards == 6) {
    return true;
  } else {
    return false;
  }
}

function classRemoval(a) {
  a.classList.remove("flipped");
  a.classList.remove("inative");
  a.querySelector(".card-front").classList.remove("grayscale");
}

function stopGame() {
  modalGameOver.style.display = "block";

  cards.forEach(classRemoval);
  for (let x of cards) {
    x.removeEventListener("click", funcClickCard, { once: true });
  }
  clearInterval(timerId);
  messageGameOver.textContent = "Pontuação: " + totalPoints;
}

function updatePoints(a) {
  if (a == "+") {
    if (btLevel.value == 1) {
      totalPoints = timer * 3 + totalPoints;
    }
    if (btLevel.value == 2) {
      totalPoints = timer * 6 + totalPoints;
    }
    if (btLevel.value == 3) {
      totalPoints = timer * 10 + totalPoints;
    }
  } else {
    if (totalPoints < 5) {
      totalPoints = 0;
    } else {
      totalPoints -= 5;
    }
  }
  labelPoints.textContent = totalPoints;
}

function createPanelGame() {
  panelGame.className = "";
  panelGame.innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute("class", "card");
  let img = document.createElement("img");
  img.setAttribute("class", "card-back");
  img.setAttribute("src", "images/ls.png");
  let img2 = document.createElement("img");
  img2.setAttribute("class", "card-front");
  div.appendChild(img);
  div.appendChild(img2);

  if (btLevel.value == 1) {
    TIMEOUTGAME = 10;
    for (let i = 0; i < 6; i++) {
      let clone = div.cloneNode(div);
      panelGame.appendChild(clone);
      panelGame.setAttribute("class", "basico");
    }
  }
  if (btLevel.value == 2) {
    TIMEOUTGAME = 60;
    for (let i = 0; i < 12; i++) {
      let clone = div.cloneNode(div);
      panelGame.appendChild(clone);
      panelGame.setAttribute("class", "intermedio");
    }
  }
  if (btLevel.value == 3) {
    TIMEOUTGAME = 180;
    for (let i = 0; i < 20; i++) {
      let clone = div.cloneNode(div);
      panelGame.appendChild(clone);
    }
    panelGame.setAttribute("class", "avancado");
  }
  cards = panelGame.childNodes;
}

function getTop10() {
  let infoTop = document.getElementById("infoTop");
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  p1.textContent = "Nick Name";
  p2.textContent = "Pontuação";
  div.appendChild(p1);
  div.appendChild(p2);
  infoTop.appendChild(div);
  //infoTop.innerHTML='';
  //let scoreList = [ { nickname: 'Ze', points: 331 }, { nickname: 'Maria', points: 321 } ];
  for (let i = 0; i < scoreList.length; i++) {
    let div1 = document.createElement("div");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    p3.textContent = scoreList[i].nickname;
    p4.textContent = scoreList[i].points;
    div1.appendChild(p3);
    div1.appendChild(p4);
    infoTop.appendChild(div1);
  }
}

function getTopPoints() {
  let pointsTop = document.getElementById("pointsTop");
  pointsTop.textContent = scoreList[0].points;
}

function getLastPoints() {
  return scoreList[scoreList.length - 1].points;
}

function checkTop10() {
  if (scoreList.length < 10 || totalPoints > scoreList[scoreList.length - 1]) {
    let nick = document.getElementById("nickname");
    nick.style.display = "block";
    messageGameOver.innerHTML += "<br>Parabéns! Entrou no TOP 10!";
  }
}

(function getLocalStorage() {
  localStorage.getItem("nickname");
  localStorage.getItem(scoreList);
})();

function saveTop10() {
  let inputNick = document.getElementById("inputNick");
  localStorage.setItem("Nickname", inputNick.value);

  const novosPontos = { nickname: inputNick.value, points: totalPoints };
  const dimTopGamers = scoreList.length;

  let userExists = false;
  scoreList.forEach((gamer, index) => {
    if (gamer.nickname === inputNick) {
      userExists = true;
      scoreList[index].points = totalPoints;
    }
  });

  if (userExists === false) {
    scoreList.push(novosPontos);
  }

  scoreList.sort(function (a, b) {
    return b.points - a.points;
  });

  if (dimTopGamers > 10) {
    scoreList.pop();
  }

  localStorage.setItem(
    scoreList,
    JSON.stringify({ nickname: nickname, points: totalPoints })
  );
}

reset();
btLevel.addEventListener("change", reset);
btPlay.addEventListener("click", function jogo() {
  if (btPlay.textContent == "Iniciar Jogo") {
    startGame();
  } else {
    stopGame();
  }
});
panelGame.addEventListener("click", function myfunction() {
  if (btPlay.textContent == "Iniciar Jogo") {
    message.textContent = "Clique em Iniciar o Jogo!";
  } else {
    message.textContent = "";
  }
});

btTop.addEventListener("click", function () {
  getTop10();
});
okTop.addEventListener("click", function () {
  saveTop10();
  modalGameOver.style.display = "none";
  reset();
});
